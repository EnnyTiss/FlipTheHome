#include <stdio.h>
#include "ble_scan.h"

void app_main(void) {
    printf("=== Flip The Home - ESP32-S3 ===\n");

    // Initialize BLE scan
    ble_scan_init();

    while (1) {
        ble_scan_run();
        vTaskDelay(2000 / portTICK_PERIOD_MS);
    }
}