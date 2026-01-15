#include "ble_scan.h"
#include <stdio.h>
// Fonctions ESP-IDF != de celles de Arduino ESP32
#include "esp_bt.h"
#include "esp_gap_ble_api.h"
#include "esp_bt_main.h"
#include "esp_log.h"

static const char *TAG = "BLE_SCAN";

static void gap_callback(esp_gap_ble_cb_event_t event, esp_ble_gap_cb_param_t *param)
{
    switch (event) {
    case ESP_GAP_BLE_SCAN_RESULT_EVT:
        if (param->scan_rst.search_evt == ESP_GAP_SEARCH_INQ_RES_EVT) {
            char addr_str[18];
            sprintf(addr_str, "%02x:%02x:%02x:%02x:%02x:%02x",
                    param->scan_rst.bda[0], param->scan_rst.bda[1],
                    param->scan_rst.bda[2], param->scan_rst.bda[3],
                    param->scan_rst.bda[4], param->scan_rst.bda[5]);

            ESP_LOGI(TAG, "Device: %s RSSI: %d", addr_str, param->scan_rst.rssi);
        }
        break;

    default:
        break;
    }
}

void ble_scan_init()
{
    esp_bt_controller_config_t bt_cfg = BT_CONTROLLER_INIT_CONFIG_DEFAULT();
    esp_bt_controller_init(&bt_cfg);
    esp_bt_controller_enable(ESP_BT_MODE_BLE);

    esp_bluedroid_init();
    esp_bluedroid_enable();

    esp_ble_gap_register_callback(gap_callback);

    ESP_LOGI(TAG, "BLE scan initialized.");
}

void ble_scan_run()
{
    esp_ble_scan_params_t scan_params = {
        .scan_type              = BLE_SCAN_TYPE_ACTIVE,
        .own_addr_type          = BLE_ADDR_TYPE_PUBLIC,
        .scan_interval          = 0x50,
        .scan_window            = 0x30,
        .scan_filter_policy     = BLE_SCAN_FILTER_ALLOW_ALL,
    };

    esp_ble_gap_set_scan_params(&scan_params);

    ESP_LOGI(TAG, "Start scanning...");
    esp_ble_gap_start_scanning(10);
}
