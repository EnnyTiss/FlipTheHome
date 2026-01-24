# Wiki FlipTheHome - Homelab IoT
## 1. Présentation du projet

    FlipTheHome est un Homelab dédié à la surveillance de l'environnement radio (BLE) et à l'analyse de la stabilité réseau Wi-Fi.

    Équipe : Oumayma Jamali


## 2. Problématique

Comment centraliser le suivi de la qualité d'un point d'accès mobile et l'activité des périphériques Bluetooth environnants au sein d'un Homelab, en utilisant des outils de mesure industriels et open source ?

## 3. Matériel & Configuration

    - Architecture : L'écosystème repose sur une stack de monitoring conteneurisée.

    - Logiciels : Mosquitto (Broker MQTT), Telegraf (Ingestion), InfluxDB v2 (Stockage en base de données), Grafana (Visualisation).

    - Matériel : ESP32-S3 DevKitC-1 piloté par ESPHome (Framework ESP-IDF).

    - Sécurisation : Utilisation d'un fichier secrets.yaml pour versionner le code sur Git sans exposer les identifiants sensibles (Wi-Fi, Token InfluxDB, MQTT etc.).

## 4. Scénario d’utilisation

FlipTheHome transforme les signaux radio en métriques temporelles :

    - Tracking BLE (Bluetooth Low Energy) : L'ESP32 écoute les messages "Advertisement". Un switch virtuel permet de piloter le scan. Chaque détection (Nom, MAC, RSSI) est encapsulée en JSON et envoyée au broker MQTT.
    - Monitoring Wi-Fi (Liaison Hotspot) : Le capteur surveille en continu la puissance du signal (RSSI) reçu du hotspot mobile (mon téléphone). Cela permet de quantifier la stabilité de la connexion nécessaire au fonctionnement du Homelab.

    Dès qu'un périphérique en BLE est détecté, une lambda C++ génère un JSON contenant le nom, l'adresse MAC et la puissance du signal de l'appreil. Par la suite, cette donnée est envoyée au broker MQTT. C'est là que mon Homelab prend le relais : Telegraf intercepte le JSON, le décode proprement et l'injecte dans InfluxDB. Pour finir, j'ai fait afficher sur l'outil de visualisation Grafana les métriques suivantes:

    - Liste des appareils BLE alentours.
    - Graphe d'évolution du signal BLE de chaque appareil au cours du temps.
    - Graphe d'évolution du signal Wifi du Hotspot (dans mon cas, mon téléphone).

On peut activer ou désactiver le scan BLE.

## 5. Budget et Temps de travail

    - ESP32-S3 DevkitC-1:  ~12,60 euros sur Amazon
    - Câble Micro-USB
    - Docker, Telegraf, InfluxDB, Grafana: outils gratuits

    - Temps de travail : ~30 heures.

    - Ce qui m'a pris le plus de temps : Mise en place de la stack Docker, structuration des flux MQTT et résolution des conflits radio sur l'antenne unique de l'ESP32-S3.

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