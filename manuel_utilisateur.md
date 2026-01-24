# FlipTheHome - Manuel Utilisateur

## 1. Préparation matérielle et système
Le projet utilise un **ESP32-S3 DevKitC-1**.

* **Installation ESP-IDF :** Suivre le guide officiel d'Espressif pour installer les outils de compilation et les drivers série.
    Lien brut : https://docs.espressif.com/projects/esp-idf/en/latest/esp32s3/get-started/index.html
* **Identification du port :** Brancher la carte et vérifier le nom du port affecté par le système :
    `ls /dev/tty*`  
    *(Généralement /dev/ttyUSB0 ou /dev/ttyACM0)*
* **Activation de l'environnement :** Dans votre terminal, lancez votre alias personnalisé pour activer les outils Espressif :
    `get_idf`



---

## 2. Installation de ESPHome
ESPHome est l'outil qui traduit votre configuration YAML en code pour l'ESP32.
Lien brut : https://esphome.io/guides/installing_esphome/#linux

* **Création de l'environnement Python :**
    `python3 -m venv venv`
    `source venv/bin/activate`
* **Installation :**
    `pip install esphome`

---

## 3. Déploiement de l'infrastructure Docker
Le serveur (backend) doit être lancé avant le flashage du capteur pour être prêt à recevoir les données.

1.  **Lancement :** Aller dans le dossier `docker-server/` et lancer les conteneurs :
    `docker-compose up -d`
2.  **Configuration InfluxDB (Accès : http://localhost:8086) :**
    * Créer un compte initial lors de la première connexion.
    * Aller dans le menu **Load Data** > **Buckets** et créer un bucket nommé `esphome_data`.
    * Aller dans **API Tokens** > **Generate API Token** > **All Access Token**.
    * **Copier précieusement le Token.**
3.  **Lien avec Telegraf :** Ouvrir votre fichier `telegraf.conf`, coller le token dans la section `[[outputs.influxdb_v2]]`, puis redémarrer le service :
    `docker restart telegraf`

---

## 4. Flashage de l'ESP32
1.  **Vérification de l'IP :** L'ESP32 doit connaître l'adresse IP de votre PC pour lui envoyer les données. Tapez `hostname -I` dans un terminal et vérifiez que cette IP est bien inscrite dans le champ `broker` de votre fichier `.yaml`.
2.  **Compilation et Flash :**
    `get_idf && esphome run esp32_homelab.yaml --device /dev/ttyACM0`

---

## 5. Mise en place de grafana (via http://localhost:3000)
*Login par défaut : admin / admin*

1.  **Ajout de la Source de Données :**
    * Menu **Connections** > **Data Sources** > **Add data source** > **InfluxDB**.
    * Query Language : Sélectionner **Flux**.
    * URL : `http://influxdb:8086`.
    * Section InfluxDB Details : Coller votre Token, votre Organisation et le Bucket `esphome_data`.
    * Cliquer sur **Save & Test**.

2.  **Création des Panneaux (Dashboard) :**
    Créer un nouveau Dashboard, cliquer sur **Add visualization** et copier les requêtes suivantes :

**PANNEAU A : Graphe appareils BLE (RSSI)**
```flux
from(bucket: "esphome_data")
  |> range(start: v.timeRangeStart, stop: v.timeRangeStop)
  |> filter(fn: (r) => r["_measurement"] == "ble_devices")
  |> filter(fn: (r) => r["_field"] == "rssi")
  |> aggregateWindow(every: v.windowPeriod, fn: mean, createEmpty: false)
  |> yield(name: "mean")
```

**PANNEAU B : Tableau des appareils détectés et leurs métriques**
```flux
from(bucket: "esphome_data")
  |> range(start: -15m)
  |> filter(fn: (r) => r["_measurement"] == "ble_devices")
  |> filter(fn: (r) => r["_field"] == "rssi")
  |> last()
  |> group() 
  |> keep(columns: ["_time", "address", "name", "_value"])
  |> rename(columns: {_value: "RSSI", address: "MAC", name: "Appareil"})
```

**PANNEAU C : Graphe Santé Hotspot (Signal WiFi de l'ESP32)**
```flux
from(bucket: "esphome_data")
  |> range(start: v.timeRangeStart, stop: v.timeRangeStop)
  |> filter(fn: (r) => r["_measurement"] == "esp32_sensors")
  |> filter(fn: (r) => r["_field"] == "value")
```

## 6. Résolution de l'erreur mqtt (0x8006)
Si les logs de l'esp32 affichent `MQTT_EVENT_ERROR` avec le code `0x8006` :

* **Cause :** L'esp32 n'arrive pas à établir la connexion avec le broker mosquitto (timeout ou refus).
* **Solution 1 (ip) :** L'adresse ip de votre pc a probablement changé (fréquent en wifi). Vérifiez-la avec la commande `hostname -I` et mettez-la à jour dans le champ `broker` de votre fichier `.yaml`.
* **Solution 2 (pare-feu) :** Votre système Linux bloque peut-être la connexion entrante. Autorisez le port mqtt avec : 
    `sudo ufw allow 1883/tcp`
* **Solution 3 (configuration) :** Vérifiez que votre fichier `mosquitto.conf` autorise bien les connexions externes avec les lignes : 
    `listener 1883` et `allow_anonymous true`.

---

## 7. Pilotage et maintenance

* **Vérifier la réception des données (debug mqtt) :**
    `docker exec mosquitto mosquitto_sub -t "lab/esp32_ble/#" -v`
* **Allumer le scan ble à distance :**
    `docker exec mosquitto mosquitto_pub -t "lab/esp32_ble/switch/activation_scan_ble/command" -m "ON"`
* **Éteindre le scan ble à distance :**
    `docker exec mosquitto mosquitto_pub -t "lab/esp32_ble/switch/activation_scan_ble/command" -m "OFF"`
* **Commandes de sortie :**
    * Quitter le monitor esphome/idf : `Ctrl + ]`
    * Quitter une session screen : `Ctrl + A` puis `K` puis `Y`
* **Droits d'accès au port série :** Si vous avez une erreur de permission lors du flash, tapez : 
    `sudo chmod 666 /dev/ttyACM0`