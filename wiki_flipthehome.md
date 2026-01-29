# Wiki FlipTheHome - Homelab IoT
## 1. Présentation du projet

    FlipTheHome est un Homelab dédié à la surveillance de l'environnement radio (BLE) et à l'analyse de la stabilité réseau Wi-Fi.

    Équipe : Oumayma Jamali


## 2. Problématique

Comment centraliser le suivi de la qualité d'un point d'accès mobile et l'activité des périphériques Bluetooth environnants au sein d'un Homelab, en utilisant des outils de mesure industriels et open source ?

## 3. Matériel & Configuration

<table border="0">
  <tr>
    <td>
      <figure>
        <img src="https://github.com/user-attachments/assets/99beecfc-2466-478a-a899-c4a3f3a66786" alt="Devkit" width="400">
        <figcaption align="center"><i>ESP32-S3 DevkitC-1</i></figcaption>
      </figure>
    </td>
    <td>
      <figure>
        <img src="https://github.com/user-attachments/assets/fa339a7f-7915-46c7-afa5-2795fe463a5f" alt="Setup" width="400">
        <figcaption align="center"><i>Setup ESP32-S3 DevkitC-1</i></figcaption>
      </figure>
    </td>
  </tr>
</table>

    - Logiciels : Mosquitto (Broker MQTT), Telegraf (Ingestion), InfluxDB v2 (Stockage en base de données), Grafana (Visualisation).

    - Matériel : ESP32-S3 DevKitC-1 piloté par ESPHome (Framework ESP-IDF).

    - Sécurisation : Utilisation d'un fichier secrets.yaml pour versionner le code sur Git sans exposer les identifiants sensibles (Wi-Fi, Token InfluxDB, MQTT etc.).

## 4. Scénario d’utilisation

FlipTheHome transforme les signaux radio en métriques temporelles :

    - Tracking BLE (Bluetooth Low Energy) : L'ESP32 écoute les messages "Advertisement". Un switch virtuel permet de piloter le scan. Chaque détection (Nom, MAC, RSSI) est encapsulée en JSON et envoyée au broker MQTT.
    - Monitoring Wi-Fi (Liaison Hotspot) : Le capteur surveille en continu la puissance du signal (RSSI) reçu du hotspot mobile (mon téléphone). Cela permet de quantifier la stabilité de la connexion nécessaire au fonctionnement du Homelab.

### Architecture FlipTheHome

<img width="800" height="400" alt="archi_flipthehome" src="https://github.com/user-attachments/assets/478522b0-c399-4e88-b2e3-4dd2715e4158" />

Dès qu'un périphérique en BLE est détecté, une lambda C++ génère un JSON contenant le nom, l'adresse MAC et la puissance du signal de l'appreil. Par la suite, cette donnée est envoyée au broker MQTT. C'est là que mon Homelab prend le relais : Telegraf intercepte le JSON, le décode proprement et l'injecte dans InfluxDB. Pour finir, j'ai fait afficher sur l'outil de visualisation Grafana les métriques suivantes:

    - Liste des appareils BLE alentours.
    - Graphe d'évolution du signal BLE de chaque appareil au cours du temps.
    - Graphe d'évolution du signal Wifi du Hotspot (dans mon cas, mon téléphone).

On peut activer ou désactiver le scan BLE.

<table>
  <tr>
    <td>
      <figure>
        <img src="https://github.com/user-attachments/assets/545d3638-3f07-4951-a2c1-682e5c266efb" alt="scan_ble_liste" width="400">
        <figcaption align="center"><i>Liste des appareils BLE</i></figcaption>
      </figure>
    </td>
    <td>
      <figure>
        <img src="https://github.com/user-attachments/assets/6ae4e118-369f-494f-9037-01d9593f08bd" alt="Scan_ble_graph" width="400">
        <figcaption align="center"><i>Signal appareils BLE</i></figcaption>
      </figure>
    </td>
  </tr>
</table>

### Vidéo Démo

https://github.com/user-attachments/assets/b0349f52-6b6a-4b10-98c1-eefb39337374


## 5. Budget et Temps de travail

    - ESP32-S3 DevkitC-1:  ~12,60 euros sur Amazon
    - Câble Micro-USB
    - Docker, Telegraf, InfluxDB, Grafana: outils gratuits

    - Temps de travail : ~30 heures.
    - Planning intermédiaire :
        1) Mise en place ESP32-S3 - ~4 heures.
        2) Implémentation scan BLE - ~10 heures.
        3) Mise en place environnement Docker, InfluxDB, Grafana et automatisation - ~6 heures.
        4) Implémentation scan WiFi - ~10 heures

    - Ce qui m'a pris le plus de temps finalement : Mise en place de la stack Docker, structuration des flux MQTT et résolution des conflits radio sur l'antenne unique de l'ESP32-S3.

## 6. Bilan et Analyse technique

Le Homelab monitore bien les appareils BLE et le hotspot wifi. La chaîne d'envoi des données ESP32S3 -> MQTT -> Telegraf -> InfluxDB -> Grafana est fonctionnelle, avec plusieurs visualisations disponibles.

La seule ombre au tableau reste le scan Wi-Fi global ; l'antenne de l'ESP32 s'est révélée incapable de scanner les réseaux voisins sans crasher sa propre connexion (phénomène de WiFi Stall). Pour garantir la remontée des données, j'ai dû me concentrer sur le monitoring du lien actuel plutôt que sur l'audit complet des SSID environnants.

    - Échec du Scan Wi-Fi global : Le scan des réseaux environnants s'est avéré incompatible avec le maintien d'une connexion MQTT stable. Sous ESP-IDF, le scan force l'antenne à quitter son canal, provoquant des déconnexions (WiFi Stall). Nous avons privilégié la stabilité du flux RSSI du hotspot.

    - Mutualisation Radio : L'ESP32-S3 utilise une seule antenne pour le Wi-Fi et le Bluetooth. Un scan BLE intensif peut dégrader la latence Wi-Fi, un compromis inévitable sur ce type de matériel.

## 7. Future Works (Évolutions)

Pour faire évoluer FlipTheHome vers un outil de sécurité réseau plus agressif :

    - Migration sur Raspberry Pi : L'utilisation d'un Pi permettrait d'activer le Monitor Mode. Cela autoriserait le scan des réseaux Wi-Fi sans déconnexion et l'interception de paquets avec tentative de connexion sur des bornes WEP par exemple avec Aircrack-ng.
    - Audit Réseau (Nmap) : Intégration de scans de ports automatisés pour lister les services exposés par les clients connectés au hotspot.
    - Commercialisation : Boîtier Plug & Play
