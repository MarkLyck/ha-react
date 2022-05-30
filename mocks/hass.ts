// import { message } from 'antd'

const hass: any = {
  auth: {
    data: {
      access_token:
        'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiI5M2U0YzRkZjRmNTY0ODMyYjg5YjYwY2E5NzdhNzY1MSIsImlhdCI6MTY1Mzk0MTUxNywiZXhwIjoxNjUzOTQzMzE3fQ.FSrOA-K9eI57tcbXV-XGogKOroFOb2QqIjtixvTtcxU',
      token_type: 'Bearer',
      expires_in: 1800,
      hassUrl: 'http://homeassistant.local:8123',
      clientId: 'http://homeassistant.local:8123/',
      expires: 1653943317021,
      refresh_token:
        '0ee0286c422930fbc597111ff8eb2754e4aae7d006a6dcaaabbdcd5966fe9107a69fcf24c7fce72fc7ed5801511a63c22fd4904031fe8c376c1b1f718c1791f3',
    },
  },
  connection: {
    options: {
      setupRetry: 0,
      auth: {
        data: {
          access_token:
            'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiI5M2U0YzRkZjRmNTY0ODMyYjg5YjYwY2E5NzdhNzY1MSIsImlhdCI6MTY1Mzk0MTUxNywiZXhwIjoxNjUzOTQzMzE3fQ.FSrOA-K9eI57tcbXV-XGogKOroFOb2QqIjtixvTtcxU',
          token_type: 'Bearer',
          expires_in: 1800,
          hassUrl: 'http://homeassistant.local:8123',
          clientId: 'http://homeassistant.local:8123/',
          expires: 1653943317021,
          refresh_token:
            '0ee0286c422930fbc597111ff8eb2754e4aae7d006a6dcaaabbdcd5966fe9107a69fcf24c7fce72fc7ed5801511a63c22fd4904031fe8c376c1b1f718c1791f3',
        },
      },
    },
    commandId: 19,
    commands: {},
    eventListeners: {},
    closeRequested: false,
    socket: {
      haVersion: '2022.5.5',
    },
    haVersion: '2022.5.5',
    _ent: {
      state: {
        'person.mark_lyck': {
          entity_id: 'person.mark_lyck',
          state: 'home',
          attributes: {
            editable: false,
            id: 'mark_lyck',
            latitude: 38.9293212890625,
            longitude: -77.22917283168587,
            gps_accuracy: 35,
            source: 'device_tracker.mark_lycks_ipad',
            user_id: 'fefe8d8a7bec4ab9ad5ca86ac9734a4c',
            entity_picture:
              '/api/image/serve/40a12e595b7c321dcbc108342b96d3d9/512x512',
            friendly_name: 'Mark',
          },
          context: {
            id: '0181157ff7832261b301f3203b6b3c0d',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-30T15:05:06.362Z',
          last_updated: '2022-05-30T15:05:16.931Z',
        },
        'person.grace_park': {
          entity_id: 'person.grace_park',
          state: 'unknown',
          attributes: {
            editable: false,
            id: 'grace_park',
            user_id: '7d0ed8af5c404c4c86aef565d7dd007a',
            friendly_name: 'Grace',
          },
          context: {
            id: '0181157ff783762f234346a695466775',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-30T15:05:06.364Z',
          last_updated: '2022-05-30T15:05:16.931Z',
        },
        'update.home_assistant_supervisor_update': {
          entity_id: 'update.home_assistant_supervisor_update',
          state: 'off',
          attributes: {
            auto_update: true,
            installed_version: '2022.05.3',
            in_progress: false,
            latest_version: '2022.05.3',
            release_summary: null,
            release_url:
              'https://github.com/home-assistant/supervisor/releases/tag/2022.05.3',
            skipped_version: null,
            title: 'Home Assistant Supervisor',
            entity_picture: 'https://brands.home-assistant.io/hassio/icon.png',
            friendly_name: 'Home Assistant Supervisor: Update',
            supported_features: 1,
          },
          context: {
            id: '0181157fec3689df2767a385ef91bbe6',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-30T15:05:14.038Z',
          last_updated: '2022-05-30T15:05:14.038Z',
        },
        'update.home_assistant_core_update': {
          entity_id: 'update.home_assistant_core_update',
          state: 'off',
          attributes: {
            auto_update: false,
            installed_version: '2022.5.5',
            in_progress: false,
            latest_version: '2022.5.5',
            release_summary: null,
            release_url: 'https://www.home-assistant.io/latest-release-notes/',
            skipped_version: null,
            title: 'Home Assistant Core',
            entity_picture:
              'https://brands.home-assistant.io/homeassistant/icon.png',
            friendly_name: 'Home Assistant Core: Update',
            supported_features: 11,
          },
          context: {
            id: '0181157fec37af47c5e6f35cd759e271',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-30T15:05:14.039Z',
          last_updated: '2022-05-30T15:05:14.039Z',
        },
        'update.terminal_ssh_update': {
          entity_id: 'update.terminal_ssh_update',
          state: 'off',
          attributes: {
            auto_update: false,
            installed_version: '9.4.0',
            in_progress: false,
            latest_version: '9.4.0',
            release_summary:
              '# Changelog\n\n## 9.4.0\n\n- Upgrade Home Assistant CLI to 4.17.0\n- Enabled image signature\n\n## 9.3.0\n\n- Update libwebsockets to 4.2.1\n- Update ttyd to `3e37e33b1cd927ae8f25cfbcf0da268723b6d230`\n\n## 9.2.2\n\n- Fix escape codes in color bash prompt\n\n## 9.2.1\n\n- ',
            release_url: null,
            skipped_version: null,
            title: 'Terminal & SSH',
            entity_picture: '/api/hassio/addons/core_ssh/icon',
            friendly_name: 'Terminal & SSH: Update',
            supported_features: 25,
          },
          context: {
            id: '0181157fec388a603cdbdff4095cb3ab',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-30T15:05:14.040Z',
          last_updated: '2022-05-30T15:05:14.040Z',
        },
        'update.file_editor_update': {
          entity_id: 'update.file_editor_update',
          state: 'off',
          attributes: {
            auto_update: false,
            installed_version: '5.3.3',
            in_progress: false,
            latest_version: '5.3.3',
            release_summary: null,
            release_url: null,
            skipped_version: null,
            title: 'File editor',
            entity_picture: '/api/hassio/addons/core_configurator/icon',
            friendly_name: 'File editor: Update',
            supported_features: 25,
          },
          context: {
            id: '0181157fec381f028eede5960478579c',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-30T15:05:14.040Z',
          last_updated: '2022-05-30T15:05:14.040Z',
        },
        'update.samba_share_update': {
          entity_id: 'update.samba_share_update',
          state: 'off',
          attributes: {
            auto_update: false,
            installed_version: '9.6.1',
            in_progress: false,
            latest_version: '9.6.1',
            release_summary:
              '# Changelog\n\n## 9.6.1\n\n- Remove lo from interface list\n- Exit with error if there are no supported interfaces to run Samba on\n\n## 9.6.0\n\n- Run on all supported interfaces\n\n## 9.5.1\n\n- Add `hassio_api` to add-on configuration\n\n## 9.5.0\n\n- Remove interface ',
            release_url: null,
            skipped_version: null,
            title: 'Samba share',
            entity_picture: '/api/hassio/addons/core_samba/icon',
            friendly_name: 'Samba share: Update',
            supported_features: 25,
          },
          context: {
            id: '0181157fec381c5d603b946c95b5fcf8',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-30T15:05:14.040Z',
          last_updated: '2022-05-30T15:05:14.040Z',
        },
        'update.home_assistant_operating_system_update': {
          entity_id: 'update.home_assistant_operating_system_update',
          state: 'off',
          attributes: {
            auto_update: false,
            installed_version: '8.1',
            in_progress: false,
            latest_version: '8.1',
            release_summary: null,
            release_url:
              'https://github.com/home-assistant/operating-system/releases/tag/8.1',
            skipped_version: null,
            title: 'Home Assistant Operating System',
            entity_picture:
              'https://brands.home-assistant.io/homeassistant/icon.png',
            friendly_name: 'Home Assistant Operating System: Update',
            supported_features: 3,
          },
          context: {
            id: '0181157fec3986985d99d31f0782d4e8',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-30T15:05:14.041Z',
          last_updated: '2022-05-30T15:05:14.041Z',
        },
        'zone.home': {
          entity_id: 'zone.home',
          state: '1',
          attributes: {
            latitude: 38.9291848698784,
            longitude: -77.22924259956928,
            radius: 100,
            passive: false,
            persons: ['person.mark_lyck'],
            editable: true,
            icon: 'mdi:home',
            friendly_name: 'Home',
          },
          context: {
            id: '0181157fec7674544a0a4184bc2b9921',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-30T15:05:14.102Z',
          last_updated: '2022-05-30T15:05:14.102Z',
        },
        'sun.sun': {
          entity_id: 'sun.sun',
          state: 'above_horizon',
          attributes: {
            next_dawn: '2022-05-31T09:11:32.573530+00:00',
            next_dusk: '2022-05-31T01:01:23.597978+00:00',
            next_midnight: '2022-05-31T05:06:39+00:00',
            next_noon: '2022-05-31T17:06:32+00:00',
            next_rising: '2022-05-31T09:43:47.617117+00:00',
            next_setting: '2022-05-31T00:29:08.241159+00:00',
            elevation: 44.31,
            azimuth: 263.14,
            rising: false,
            friendly_name: 'Sun',
          },
          context: {
            id: '018116a5f5c6880a5b6256f0002f811a',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-30T15:05:14.139Z',
          last_updated: '2022-05-30T20:26:24.070Z',
        },
        'binary_sensor.rpi_power_status': {
          entity_id: 'binary_sensor.rpi_power_status',
          state: 'off',
          attributes: {
            device_class: 'problem',
            icon: 'mdi:raspberry-pi',
            friendly_name: 'RPi Power status',
          },
          context: {
            id: '0181157fed015d640e80ffa44aa34e34',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-30T15:05:14.241Z',
          last_updated: '2022-05-30T15:05:14.241Z',
        },
        'media_player.living_room': {
          entity_id: 'media_player.living_room',
          state: 'standby',
          attributes: {
            source_list: [
              'App Store',
              'Arcade',
              'Computers',
              'Disney+',
              'Fitness',
              'Movies',
              'Music',
              'Netflix',
              'Photos',
              'Podcasts',
              'Prime Video',
              'Search',
              'Settings',
              'TV',
              'TV Shows',
              'YouTube',
            ],
            friendly_name: 'Living Room',
            supported_features: 450487,
          },
          context: {
            id: '0181157ff34e99dd3df9c31ee4263bb1',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-30T15:05:15.846Z',
          last_updated: '2022-05-30T15:05:15.854Z',
        },
        'media_player.kitchen': {
          entity_id: 'media_player.kitchen',
          state: 'idle',
          attributes: {
            volume_level: 0.395,
            friendly_name: 'Kitchen',
            supported_features: 448439,
          },
          context: {
            id: '0181157ff376440499c75b6f3e10a6e5',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-30T15:05:15.894Z',
          last_updated: '2022-05-30T15:05:15.894Z',
        },
        'remote.living_room': {
          entity_id: 'remote.living_room',
          state: 'on',
          attributes: {
            friendly_name: 'Living Room',
            supported_features: 0,
          },
          context: {
            id: '0181157ff344026633397c2e4287e534',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-30T15:05:15.844Z',
          last_updated: '2022-05-30T15:05:15.844Z',
        },
        'remote.kitchen': {
          entity_id: 'remote.kitchen',
          state: 'on',
          attributes: {
            friendly_name: 'Kitchen',
            supported_features: 0,
          },
          context: {
            id: '0181157ff374201e40912600af4d9d4c',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-30T15:05:15.892Z',
          last_updated: '2022-05-30T15:05:15.892Z',
        },
        'sensor.iphone_mark_activity': {
          entity_id: 'sensor.iphone_mark_activity',
          state: 'Walking',
          attributes: {
            Confidence: 'High',
            Types: ['Walking'],
            icon: 'mdi:walk',
            friendly_name: 'iphone mark Activity',
          },
          context: {
            id: '0181157ff1477dd0fde4ffc8ab67f0e1',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-30T15:05:15.336Z',
          last_updated: '2022-05-30T15:05:15.336Z',
        },
        'sensor.iphone_mark_average_active_pace': {
          entity_id: 'sensor.iphone_mark_average_active_pace',
          state: '1',
          attributes: {
            unit_of_measurement: 'm/s',
            icon: 'mdi:speedometer',
            friendly_name: 'iphone mark Average Active Pace',
          },
          context: {
            id: '0181157ff148bec69a185fd2065ca6af',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-30T15:05:15.336Z',
          last_updated: '2022-05-30T15:05:15.336Z',
        },
        'sensor.iphone_mark_bssid': {
          entity_id: 'sensor.iphone_mark_bssid',
          state: '6c:ae:f6:ca:75:88',
          attributes: {
            icon: 'mdi:wifi-star',
            friendly_name: 'iphone mark BSSID',
          },
          context: {
            id: '0181157ff149be0c411eb3e343af248c',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-30T15:05:15.337Z',
          last_updated: '2022-05-30T15:05:15.337Z',
        },
        'sensor.iphone_mark_battery_level': {
          entity_id: 'sensor.iphone_mark_battery_level',
          state: '45',
          attributes: {
            unit_of_measurement: '%',
            device_class: 'battery',
            icon: 'mdi:battery-40',
            friendly_name: 'iphone mark Battery Level',
          },
          context: {
            id: '018115812601598a1230be1ba10628b9',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-30T15:06:34.369Z',
          last_updated: '2022-05-30T15:06:34.369Z',
        },
        'sensor.iphone_mark_battery_state': {
          entity_id: 'sensor.iphone_mark_battery_state',
          state: 'Not Charging',
          attributes: {
            'Low Power Mode': false,
            icon: 'mdi:battery-40',
            friendly_name: 'iphone mark Battery State',
          },
          context: {
            id: '0181157ff149f54c05a0026c7cf1813a',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-30T15:05:15.337Z',
          last_updated: '2022-05-30T15:05:15.337Z',
        },
        'sensor.iphone_mark_connection_type': {
          entity_id: 'sensor.iphone_mark_connection_type',
          state: 'Wi-Fi',
          attributes: {
            icon: 'mdi:wifi',
            friendly_name: 'iphone mark Connection Type',
          },
          context: {
            id: '0181157ff14919db89b84b8ed42833b6',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-30T15:05:15.337Z',
          last_updated: '2022-05-30T15:05:15.337Z',
        },
        'sensor.iphone_mark_distance': {
          entity_id: 'sensor.iphone_mark_distance',
          state: '1374',
          attributes: {
            unit_of_measurement: 'm',
            icon: 'mdi:hiking',
            friendly_name: 'iphone mark Distance',
          },
          context: {
            id: '0181158125ff9a30015d21ec11572ecf',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-30T15:06:34.367Z',
          last_updated: '2022-05-30T15:06:34.367Z',
        },
        'sensor.iphone_mark_floors_ascended': {
          entity_id: 'sensor.iphone_mark_floors_ascended',
          state: '0',
          attributes: {
            unit_of_measurement: 'floors',
            icon: 'mdi:stairs-up',
            friendly_name: 'iphone mark Floors Ascended',
          },
          context: {
            id: '0181157ff14ab809cb4eb4056e171e8c',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-30T15:05:15.338Z',
          last_updated: '2022-05-30T15:05:15.338Z',
        },
        'sensor.iphone_mark_floors_descended': {
          entity_id: 'sensor.iphone_mark_floors_descended',
          state: '0',
          attributes: {
            unit_of_measurement: 'floors',
            icon: 'mdi:stairs-down',
            friendly_name: 'iphone mark Floors Descended',
          },
          context: {
            id: '0181157ff14a735bab0f321d92c9eda7',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-30T15:05:15.338Z',
          last_updated: '2022-05-30T15:05:15.338Z',
        },
        'sensor.iphone_mark_geocoded_location': {
          entity_id: 'sensor.iphone_mark_geocoded_location',
          state: '8231 Crestwood Heights Dr\nMcLean VA 22102\nUnited States',
          attributes: {
            'Administrative Area': 'VA',
            'Areas Of Interest': 'N/A',
            Country: 'United States',
            'Inland Water': 'N/A',
            'ISO Country Code': 'US',
            Locality: 'McLean',
            Location: [38.929229736328125, -77.22957121115603],
            Name: '8231 Crestwood Heights Dr',
            Ocean: 'N/A',
            'Postal Code': '22102',
            'Sub Administrative Area': 'Fairfax County',
            'Sub Locality': 'North Central',
            'Sub Thoroughfare': '8231',
            Thoroughfare: 'Crestwood Heights Dr',
            'Time Zone': 'America/New_York',
            Zones: ['Home'],
            icon: 'mdi:map',
            friendly_name: 'iphone mark Geocoded Location',
          },
          context: {
            id: '0181158126031295894e70c2dc5add10',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-30T15:05:15.339Z',
          last_updated: '2022-05-30T15:06:34.375Z',
        },
        'sensor.iphone_mark_last_update_trigger': {
          entity_id: 'sensor.iphone_mark_last_update_trigger',
          state: 'Launch',
          attributes: {
            icon: 'mdi:cellphone-wireless',
            friendly_name: 'iphone mark Last Update Trigger',
          },
          context: {
            id: '01811581268a74408713be866496b844',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-30T15:06:34.506Z',
          last_updated: '2022-05-30T15:06:34.506Z',
        },
        'sensor.iphone_mark_sim_1': {
          entity_id: 'sensor.iphone_mark_sim_1',
          state: 'Ultra/Mint Mobile',
          attributes: {
            'Allows VoIP': true,
            'Carrier ID': '0000000100000001',
            'Carrier Name': 'Ultra/Mint Mobile',
            'ISO Country Code': 'N/A',
            'Mobile Country Code': 'N/A',
            'Mobile Network Code': 'N/A',
            icon: 'mdi:sim',
            friendly_name: 'iphone mark SIM 1',
          },
          context: {
            id: '0181157ff14b9ce4b2e4057d1b1f877d',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-30T15:05:15.339Z',
          last_updated: '2022-05-30T15:05:15.339Z',
        },
        'sensor.iphone_mark_sim_2': {
          entity_id: 'sensor.iphone_mark_sim_2',
          state: 'Ultra/Mint Mobile',
          attributes: {
            'Allows VoIP': true,
            'Carrier ID': '0000000100000002',
            'Carrier Name': 'Ultra/Mint Mobile',
            'Current Radio Technology': 'Long-Term Evolution (LTE)',
            'ISO Country Code': 'us',
            'Mobile Country Code': '310',
            'Mobile Network Code': '260',
            icon: 'mdi:sim',
            friendly_name: 'iphone mark SIM 2',
          },
          context: {
            id: '0181157ff14c96eac6ad62f1cf140562',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-30T15:05:15.340Z',
          last_updated: '2022-05-30T15:05:15.340Z',
        },
        'sensor.iphone_mark_ssid': {
          entity_id: 'sensor.iphone_mark_ssid',
          state: 'Lyck',
          attributes: {
            icon: 'mdi:wifi',
            friendly_name: 'iphone mark SSID',
          },
          context: {
            id: '0181157ff14c98b11e59dc8dd9a2cadd',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-30T15:05:15.340Z',
          last_updated: '2022-05-30T15:05:15.340Z',
        },
        'sensor.iphone_mark_steps': {
          entity_id: 'sensor.iphone_mark_steps',
          state: '1790',
          attributes: {
            unit_of_measurement: 'steps',
            icon: 'mdi:walk',
            friendly_name: 'iphone mark Steps',
          },
          context: {
            id: '0181158126002f17473fc0a7db86a1bb',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-30T15:06:34.368Z',
          last_updated: '2022-05-30T15:06:34.368Z',
        },
        'sensor.iphone_mark_storage': {
          entity_id: 'sensor.iphone_mark_storage',
          state: '63.19',
          attributes: {
            Available: '61.82 GB',
            'Available (Important)': '165.97 GB',
            'Available (Opportunistic)': '161.68 GB',
            Total: '255.88 GB',
            unit_of_measurement: '% available',
            icon: 'mdi:database',
            friendly_name: 'iphone mark Storage',
          },
          context: {
            id: '018115812601f97f4f33ad1da3a0c453',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-30T15:05:15.341Z',
          last_updated: '2022-05-30T15:06:34.369Z',
        },
        'binary_sensor.iphone_mark_focus': {
          entity_id: 'binary_sensor.iphone_mark_focus',
          state: 'off',
          attributes: {
            icon: 'mdi:moon-waning-crescent',
            friendly_name: 'iphone mark Focus',
          },
          context: {
            id: '0181157ff14dcd07164dfec4cbec274f',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-30T15:05:15.341Z',
          last_updated: '2022-05-30T15:05:15.341Z',
        },
        'sensor.mark_lycks_ipad_battery_level': {
          entity_id: 'sensor.mark_lycks_ipad_battery_level',
          state: '87',
          attributes: {
            unit_of_measurement: '%',
            device_class: 'battery',
            icon: 'mdi:battery-80',
            friendly_name: 'Mark Lyck’s iPad Battery Level',
          },
          context: {
            id: '0181157ff14d9d0f27091d939336f164',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-30T15:05:15.341Z',
          last_updated: '2022-05-30T15:05:15.341Z',
        },
        'sensor.mark_lycks_ipad_battery_state': {
          entity_id: 'sensor.mark_lycks_ipad_battery_state',
          state: 'Not Charging',
          attributes: {
            'Low Power Mode': false,
            icon: 'mdi:battery-80',
            friendly_name: 'Mark Lyck’s iPad Battery State',
          },
          context: {
            id: '0181157ff14e2ff5f2fbe4f2e6e203ec',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-30T15:05:15.342Z',
          last_updated: '2022-05-30T15:05:15.342Z',
        },
        'sensor.mark_lycks_ipad_storage': {
          entity_id: 'sensor.mark_lycks_ipad_storage',
          state: '4.25',
          attributes: {
            Available: '10.31 GB',
            'Available (Important)': '13.08 GB',
            'Available (Opportunistic)': '10.88 GB',
            Total: '255.96 GB',
            unit_of_measurement: '% available',
            icon: 'mdi:database',
            friendly_name: 'Mark Lyck’s iPad Storage',
          },
          context: {
            id: '0181157ff14e614d2432f8545f40b923',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-30T15:05:15.342Z',
          last_updated: '2022-05-30T15:05:15.342Z',
        },
        'sensor.mark_lycks_ipad_ssid': {
          entity_id: 'sensor.mark_lycks_ipad_ssid',
          state: 'Lyck',
          attributes: {
            icon: 'mdi:wifi',
            friendly_name: 'Mark Lyck’s iPad SSID',
          },
          context: {
            id: '0181157ff14eb350ceecd3d7e6ad9e80',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-30T15:05:15.342Z',
          last_updated: '2022-05-30T15:05:15.342Z',
        },
        'sensor.mark_lycks_ipad_geocoded_location': {
          entity_id: 'sensor.mark_lycks_ipad_geocoded_location',
          state: '8231 Crestwood Heights Dr\nMcLean VA 22102\nUnited States',
          attributes: {
            'Administrative Area': 'VA',
            'Areas Of Interest': 'N/A',
            Country: 'United States',
            'Inland Water': 'N/A',
            'ISO Country Code': 'US',
            Locality: 'McLean',
            Location: [38.9293212890625, -77.22917283168587],
            Name: '8231 Crestwood Heights Dr',
            Ocean: 'N/A',
            'Postal Code': '22102',
            'Sub Administrative Area': 'Fairfax County',
            'Sub Locality': 'North Central',
            'Sub Thoroughfare': '8231',
            Thoroughfare: 'Crestwood Heights Dr',
            'Time Zone': 'America/New_York',
            Zones: ['Home'],
            icon: 'mdi:map',
            friendly_name: 'Mark Lyck’s iPad Geocoded Location',
          },
          context: {
            id: '0181157ff14f802fe74501c08c26c3ab',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-30T15:05:15.343Z',
          last_updated: '2022-05-30T15:05:15.343Z',
        },
        'sensor.mark_lycks_ipad_last_update_trigger': {
          entity_id: 'sensor.mark_lycks_ipad_last_update_trigger',
          state: 'Siri',
          attributes: {
            icon: 'mdi:cellphone-wireless',
            friendly_name: 'Mark Lyck’s iPad Last Update Trigger',
          },
          context: {
            id: '0181157ff14fb5bfd462105098ec769f',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-30T15:05:15.343Z',
          last_updated: '2022-05-30T15:05:15.343Z',
        },
        'sensor.mark_lycks_ipad_bssid': {
          entity_id: 'sensor.mark_lycks_ipad_bssid',
          state: '6c:ae:f6:ca:75:88',
          attributes: {
            icon: 'mdi:wifi-star',
            friendly_name: 'Mark Lyck’s iPad BSSID',
          },
          context: {
            id: '0181157ff14f37bc7d61f1fd885745c8',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-30T15:05:15.343Z',
          last_updated: '2022-05-30T15:05:15.343Z',
        },
        'sensor.mark_lycks_ipad_connection_type': {
          entity_id: 'sensor.mark_lycks_ipad_connection_type',
          state: 'Wi-Fi',
          attributes: {
            icon: 'mdi:wifi',
            friendly_name: 'Mark Lyck’s iPad Connection Type',
          },
          context: {
            id: '0181157ff150fefe733f3659232215f3',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-30T15:05:15.344Z',
          last_updated: '2022-05-30T15:05:15.344Z',
        },
        'sensor.mark_lycks_ipad_activity': {
          entity_id: 'sensor.mark_lycks_ipad_activity',
          state: 'Stationary',
          attributes: {
            Confidence: 'High',
            Types: ['Stationary'],
            icon: 'mdi:human-male',
            friendly_name: 'Mark Lyck’s iPad Activity',
          },
          context: {
            id: '0181157ff1507f5d0ac4fa1c526c786c',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-30T15:05:15.344Z',
          last_updated: '2022-05-30T15:05:15.344Z',
        },
        'binary_sensor.mark_lycks_ipad_focus': {
          entity_id: 'binary_sensor.mark_lycks_ipad_focus',
          state: 'off',
          attributes: {
            icon: 'mdi:moon-waning-crescent',
            friendly_name: 'Mark Lyck’s iPad Focus',
          },
          context: {
            id: '0181157ff1502cbfb08ec87e7bf67367',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-30T15:05:15.344Z',
          last_updated: '2022-05-30T15:05:15.344Z',
        },
        'light.lamp': {
          entity_id: 'light.lamp',
          state: 'off',
          attributes: {
            min_mireds: 153,
            max_mireds: 500,
            effect_list: ['None', 'candle', 'fire'],
            supported_color_modes: ['color_temp', 'xy'],
            mode: 'normal',
            dynamics: 'none',
            friendly_name: 'Lamp',
            supported_features: 44,
          },
          context: {
            id: '018116a1f672520f32434e3927d73508',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-30T20:22:02.098Z',
          last_updated: '2022-05-30T20:22:02.098Z',
        },
        'light.bedroom': {
          entity_id: 'light.bedroom',
          state: 'off',
          attributes: {
            min_mireds: 153,
            max_mireds: 500,
            supported_color_modes: ['color_temp', 'xy'],
            is_hue_group: true,
            hue_scenes: ['Nightlight', 'Dimmed', 'Bright'],
            hue_type: 'room',
            lights: ['Lamp'],
            dynamics: false,
            icon: 'mdi:lightbulb-group',
            friendly_name: 'Bedroom',
            supported_features: 40,
          },
          context: {
            id: '018116a1f5e94ce6a016bc1ab4871ec3',
            parent_id: null,
            user_id: 'fefe8d8a7bec4ab9ad5ca86ac9734a4c',
          },
          last_changed: '2022-05-30T20:22:02.101Z',
          last_updated: '2022-05-30T20:22:02.101Z',
        },
        'device_tracker.iphone_mark': {
          entity_id: 'device_tracker.iphone_mark',
          state: 'home',
          attributes: {
            source_type: 'gps',
            battery_level: 45,
            latitude: 38.929229736328125,
            longitude: -77.22957121115603,
            gps_accuracy: 55.666666666666664,
            altitude: 161.74649810791016,
            vertical_accuracy: 1.7983700037002563,
            friendly_name: 'iphone mark',
          },
          context: {
            id: '0181158125a8eb4dc596fd999c889fb6',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-30T15:06:34.280Z',
          last_updated: '2022-05-30T15:06:34.280Z',
        },
        'device_tracker.mark_lycks_ipad': {
          entity_id: 'device_tracker.mark_lycks_ipad',
          state: 'home',
          attributes: {
            source_type: 'gps',
            battery_level: 97,
            latitude: 38.9293212890625,
            longitude: -77.22917283168587,
            gps_accuracy: 35,
            altitude: 107.49743270874023,
            vertical_accuracy: 16.559709548950195,
            friendly_name: 'Mark Lyck’s iPad',
          },
          context: {
            id: '0181157ff19755ad63dca9f5ab448a2c',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-30T15:05:15.415Z',
          last_updated: '2022-05-30T15:05:15.415Z',
        },
        'scene.bedroom_bright': {
          entity_id: 'scene.bedroom_bright',
          state: 'unknown',
          attributes: {
            group_name: 'Bedroom',
            group_type: 'room',
            name: 'Bright',
            speed: 0.5,
            brightness: 100,
            is_dynamic: false,
            friendly_name: 'Bedroom Bright',
          },
          context: {
            id: '0181157ff1a1de48e5f5fbfdeedffe95',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-30T15:05:15.425Z',
          last_updated: '2022-05-30T15:05:15.425Z',
        },
        'scene.bedroom_nightlight': {
          entity_id: 'scene.bedroom_nightlight',
          state: 'unknown',
          attributes: {
            group_name: 'Bedroom',
            group_type: 'room',
            name: 'Nightlight',
            speed: 0.5,
            brightness: 0.39,
            is_dynamic: false,
            friendly_name: 'Bedroom Nightlight',
          },
          context: {
            id: '0181157ff1a25cbe7f477d85b33333f7',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-30T15:05:15.426Z',
          last_updated: '2022-05-30T15:05:15.426Z',
        },
        'scene.bedroom_dimmed': {
          entity_id: 'scene.bedroom_dimmed',
          state: 'unknown',
          attributes: {
            group_name: 'Bedroom',
            group_type: 'room',
            name: 'Dimmed',
            speed: 0.5,
            brightness: 30.31,
            is_dynamic: false,
            friendly_name: 'Bedroom Dimmed',
          },
          context: {
            id: '0181157ff1a2c4603c4544ced4352b06',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-30T15:05:15.426Z',
          last_updated: '2022-05-30T15:05:15.426Z',
        },
        'light.bedroom_lamp': {
          entity_id: 'light.bedroom_lamp',
          state: 'off',
          attributes: {
            effect_list: ['effect_pulse', 'effect_stop'],
            supported_color_modes: ['brightness'],
            friendly_name: 'Bedroom lamp',
            supported_features: 37,
          },
          context: {
            id: '0181157ff1c5e8fc81af7a6bf5cee2c7',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-30T15:05:15.461Z',
          last_updated: '2022-05-30T15:05:15.461Z',
        },
        'binary_sensor.eero_wan_status': {
          entity_id: 'binary_sensor.eero_wan_status',
          state: 'on',
          attributes: {
            device_class: 'connectivity',
            friendly_name: 'eero wan status',
          },
          context: {
            id: '0181157ff1d15efdcfb8d1f26d47bc97',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-30T15:05:15.473Z',
          last_updated: '2022-05-30T15:05:15.473Z',
        },
        'sensor.eero_external_ip': {
          entity_id: 'sensor.eero_external_ip',
          state: '108.28.69.66',
          attributes: {
            icon: 'mdi:server-network',
            friendly_name: 'eero External IP',
          },
          context: {
            id: '0181157ff1d23b81104ce9bf5d89b5b5',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-30T15:05:15.474Z',
          last_updated: '2022-05-30T15:05:15.474Z',
        },
        'sensor.eero_wan_status': {
          entity_id: 'sensor.eero_wan_status',
          state: 'Connected',
          attributes: {
            icon: 'mdi:server-network',
            friendly_name: 'eero wan status',
          },
          context: {
            id: '0181157ff1d36a98fdd2184b32e2fd5b',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-30T15:05:15.475Z',
          last_updated: '2022-05-30T15:05:15.475Z',
        },
        'light.desk_light': {
          entity_id: 'light.desk_light',
          state: 'on',
          attributes: {
            min_mireds: 111,
            max_mireds: 666,
            effect_list: ['effect_colorloop', 'effect_pulse', 'effect_stop'],
            supported_color_modes: ['color_temp', 'hs'],
            color_mode: 'hs',
            brightness: 255,
            hs_color: [254.997, 100],
            rgb_color: [63, 0, 255],
            xy_color: [0.157, 0.05],
            icon: 'mdi:led-strip-variant',
            friendly_name: 'Desk light',
            supported_features: 55,
          },
          context: {
            id: '01811699a7f3738af6e131fa85a4337b',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-30T20:12:52.277Z',
          last_updated: '2022-05-30T20:12:57.715Z',
        },
        'sensor.hacs': {
          entity_id: 'sensor.hacs',
          state: '2',
          attributes: {
            repositories: [
              {
                name: 'hacs/integration',
                display_name: 'HACS',
                installed_version: '1.25.2',
                available_version: '1.25.5',
              },
              {
                name: 'thomasloven/lovelace-state-switch',
                display_name: 'state-switch',
                installed_version: '1.9.3',
                available_version: '1.9.5',
              },
            ],
            unit_of_measurement: 'pending update(s)',
            icon: 'hacs:hacs',
            friendly_name: 'hacs',
          },
          context: {
            id: '018115800a053ee99746103935783ad6',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-30T15:05:21.669Z',
          last_updated: '2022-05-30T15:05:21.669Z',
        },
        'binary_sensor.my_ecobee_occupancy': {
          entity_id: 'binary_sensor.my_ecobee_occupancy',
          state: 'on',
          attributes: {
            device_class: 'occupancy',
            friendly_name: 'My ecobee Occupancy',
          },
          context: {
            id: '01811693169644f3e64bf2bdef53cfd5',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-30T20:05:47.286Z',
          last_updated: '2022-05-30T20:05:47.286Z',
        },
        'binary_sensor.bedroom_sensor_occupancy': {
          entity_id: 'binary_sensor.bedroom_sensor_occupancy',
          state: 'on',
          attributes: {
            device_class: 'occupancy',
            friendly_name: 'bedroom sensor Occupancy',
          },
          context: {
            id: '01811695d5bd8ae89b2920b50ded5043',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-30T20:08:47.293Z',
          last_updated: '2022-05-30T20:08:47.293Z',
        },
        'binary_sensor.office_occupancy': {
          entity_id: 'binary_sensor.office_occupancy',
          state: 'on',
          attributes: {
            device_class: 'occupancy',
            friendly_name: 'Office Occupancy',
          },
          context: {
            id: '01811695d5bd3136c7e5ab0a9ffec866',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-30T20:08:47.293Z',
          last_updated: '2022-05-30T20:08:47.293Z',
        },
        'sensor.my_ecobee_temperature': {
          entity_id: 'sensor.my_ecobee_temperature',
          state: '75.0',
          attributes: {
            state_class: 'measurement',
            unit_of_measurement: '°F',
            device_class: 'temperature',
            friendly_name: 'My ecobee Temperature',
          },
          context: {
            id: '018116a6c5dd80a874fd23722c0831d1',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-30T20:27:17.341Z',
          last_updated: '2022-05-30T20:27:17.341Z',
        },
        'sensor.my_ecobee_humidity': {
          entity_id: 'sensor.my_ecobee_humidity',
          state: '51',
          attributes: {
            state_class: 'measurement',
            unit_of_measurement: '%',
            device_class: 'humidity',
            friendly_name: 'My ecobee Humidity',
          },
          context: {
            id: '018116a1478a778cd76eb1553a92dd48',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-30T20:21:17.322Z',
          last_updated: '2022-05-30T20:21:17.322Z',
        },
        'sensor.bedroom_sensor_temperature': {
          entity_id: 'sensor.bedroom_sensor_temperature',
          state: '76.1',
          attributes: {
            state_class: 'measurement',
            unit_of_measurement: '°F',
            device_class: 'temperature',
            friendly_name: 'bedroom sensor Temperature',
          },
          context: {
            id: '018116a6c5dd4fa8375c208f46c20f44',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-30T20:27:17.341Z',
          last_updated: '2022-05-30T20:27:17.341Z',
        },
        'sensor.office_temperature': {
          entity_id: 'sensor.office_temperature',
          state: '77.2',
          attributes: {
            state_class: 'measurement',
            unit_of_measurement: '°F',
            device_class: 'temperature',
            friendly_name: 'Office Temperature',
          },
          context: {
            id: '018116a6c5de1601cd23b410a857198d',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-30T20:27:17.342Z',
          last_updated: '2022-05-30T20:27:17.342Z',
        },
        'climate.ecobee': {
          entity_id: 'climate.ecobee',
          state: 'cool',
          attributes: {
            hvac_modes: ['heat_cool', 'heat', 'cool', 'off'],
            min_temp: 44.6,
            max_temp: 95,
            target_temp_step: 0.5,
            fan_modes: ['auto', 'on'],
            preset_modes: ['Away', 'Home', 'Sleep'],
            current_temperature: 76.1,
            temperature: 75,
            target_temp_high: null,
            target_temp_low: null,
            current_humidity: 51,
            fan_mode: 'auto',
            hvac_action: 'cooling',
            preset_mode: 'temp',
            aux_heat: 'off',
            fan: 'on',
            climate_mode: 'Home',
            equipment_running: 'compCool1,fan',
            fan_min_on_time: 0,
            icon: 'thermo',
            friendly_name: 'Thermostat',
            supported_features: 91,
          },
          context: {
            id: '018116a6c5d69a921a7e03b573978af6',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-30T15:05:16.603Z',
          last_updated: '2022-05-30T20:27:17.334Z',
        },
        'weather.my_ecobee': {
          entity_id: 'weather.my_ecobee',
          state: 'partlycloudy',
          attributes: {
            temperature: 89,
            humidity: 46,
            pressure: 30.06,
            wind_bearing: 174,
            wind_speed: 8,
            visibility: 13,
            forecast: [
              {
                condition: 'partlycloudy',
                temperature: 89,
                templow: 67,
                wind_bearing: 174,
                wind_speed: 8,
                datetime: '2022-05-30T20:28:17.668603+00:00',
              },
              {
                condition: 'sunny',
                temperature: 91,
                templow: 73,
                wind_bearing: 253,
                wind_speed: 4,
                datetime: '2022-05-31T20:28:17.668603+00:00',
              },
              {
                condition: 'partlycloudy',
                temperature: 91,
                templow: 77,
                wind_bearing: 270,
                wind_speed: 5,
                datetime: '2022-06-01T20:28:17.668603+00:00',
              },
              {
                condition: 'rainy',
                temperature: 83,
                templow: 73,
                wind_bearing: 309,
                wind_speed: 5,
                datetime: '2022-06-02T20:28:17.668603+00:00',
              },
              {
                condition: 'sunny',
                temperature: 77,
                templow: 66,
                wind_bearing: 328,
                wind_speed: 5,
                datetime: '2022-06-03T20:28:17.668603+00:00',
              },
            ],
            attribution:
              'Ecobee weather provided by FI:NDV at 2022-05-30 20:00:45 UTC',
            friendly_name: 'My ecobee',
          },
          context: {
            id: '018116a7b185248ee50370cf5667937c',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-30T19:02:47.149Z',
          last_updated: '2022-05-30T20:28:17.669Z',
        },
        'vacuum.vacuum': {
          entity_id: 'vacuum.vacuum',
          state: 'docked',
          attributes: {
            fan_speed_list: ['quiet', 'normal', 'max', 'max+'],
            battery_level: 100,
            battery_icon: 'mdi:battery-charging-100',
            fan_speed: null,
            last_error: 'NoError: Robot is operational (0)',
            friendly_name: 'Vacuum',
            supported_features: 15228,
          },
          context: {
            id: '01811688ea161b4478c33f935c051fe9',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-30T16:30:42.301Z',
          last_updated: '2022-05-30T19:54:40.535Z',
        },
        'button.vacuum_life_span_side_brush_reset': {
          entity_id: 'button.vacuum_life_span_side_brush_reset',
          state: 'unknown',
          attributes: {
            icon: 'mdi:broom',
            friendly_name: 'Vacuum life span side brush reset',
          },
          context: {
            id: '018115a21579372c875451206de21a82',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-30T15:42:32.825Z',
          last_updated: '2022-05-30T15:42:32.825Z',
        },
        'button.vacuum_life_span_brush_reset': {
          entity_id: 'button.vacuum_life_span_brush_reset',
          state: 'unknown',
          attributes: {
            icon: 'mdi:broom',
            friendly_name: 'Vacuum life span brush reset',
          },
          context: {
            id: '018115a2157aeb5c25f2d9c8e2becee1',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-30T15:42:32.826Z',
          last_updated: '2022-05-30T15:42:32.826Z',
        },
        'button.vacuum_life_span_filter_reset': {
          entity_id: 'button.vacuum_life_span_filter_reset',
          state: 'unknown',
          attributes: {
            icon: 'mdi:air-filter',
            friendly_name: 'Vacuum life span filter reset',
          },
          context: {
            id: '018115a2157adb595cb35cba5be1e1ef',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-30T15:42:32.826Z',
          last_updated: '2022-05-30T15:42:32.826Z',
        },
        'button.vacuum_relocate': {
          entity_id: 'button.vacuum_relocate',
          state: 'unknown',
          attributes: {
            icon: 'mdi:map-marker-question',
            friendly_name: 'Vacuum relocate',
          },
          context: {
            id: '018115a2157b6a7fd071fbaac8734f59',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-30T15:42:32.827Z',
          last_updated: '2022-05-30T15:42:32.827Z',
        },
        'sensor.disk_use_home': {
          entity_id: 'sensor.disk_use_home',
          state: 'unavailable',
          attributes: {
            restored: true,
            state_class: 'measurement',
            icon: 'mdi:harddisk',
            friendly_name: 'Disk use /home',
            supported_features: 0,
            unit_of_measurement: 'GiB',
          },
          context: {
            id: '0181157ff77f965a9f297e14120fdfe6',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-30T15:05:16.927Z',
          last_updated: '2022-05-30T15:05:16.927Z',
        },
        'sensor.disk_free_home': {
          entity_id: 'sensor.disk_free_home',
          state: 'unavailable',
          attributes: {
            restored: true,
            state_class: 'measurement',
            icon: 'mdi:harddisk',
            friendly_name: 'Disk free /home',
            supported_features: 0,
            unit_of_measurement: 'GiB',
          },
          context: {
            id: '0181157ff77f1660084a12b7ea8065ec',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-30T15:05:16.927Z',
          last_updated: '2022-05-30T15:05:16.927Z',
        },
        'sensor.disk_use_percent_home': {
          entity_id: 'sensor.disk_use_percent_home',
          state: 'unavailable',
          attributes: {
            restored: true,
            state_class: 'measurement',
            icon: 'mdi:harddisk',
            friendly_name: 'Disk use (percent) /home',
            supported_features: 0,
            unit_of_measurement: '%',
          },
          context: {
            id: '0181157ff77f0f34f92af42169e1132c',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-30T15:05:16.927Z',
          last_updated: '2022-05-30T15:05:16.927Z',
        },
        'sensor.memory_free': {
          entity_id: 'sensor.memory_free',
          state: 'unavailable',
          attributes: {
            restored: true,
            state_class: 'measurement',
            icon: 'mdi:memory',
            friendly_name: 'Memory free',
            supported_features: 0,
            unit_of_measurement: 'MiB',
          },
          context: {
            id: '0181157ff77fd6d48c4c82ac792a73ac',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-30T15:05:16.927Z',
          last_updated: '2022-05-30T15:05:16.927Z',
        },
        'sensor.memory_use': {
          entity_id: 'sensor.memory_use',
          state: 'unavailable',
          attributes: {
            restored: true,
            state_class: 'measurement',
            icon: 'mdi:memory',
            friendly_name: 'Memory use',
            supported_features: 0,
            unit_of_measurement: 'MiB',
          },
          context: {
            id: '0181157ff77f5774a0f03e216f1511d9',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-30T15:05:16.927Z',
          last_updated: '2022-05-30T15:05:16.927Z',
        },
        'sensor.memory_use_percent': {
          entity_id: 'sensor.memory_use_percent',
          state: 'unavailable',
          attributes: {
            restored: true,
            state_class: 'measurement',
            icon: 'mdi:memory',
            friendly_name: 'Memory use (percent)',
            supported_features: 0,
            unit_of_measurement: '%',
          },
          context: {
            id: '0181157ff77f6945b3aabf0b3be9904a',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-30T15:05:16.927Z',
          last_updated: '2022-05-30T15:05:16.927Z',
        },
        'sensor.network_in_eth0': {
          entity_id: 'sensor.network_in_eth0',
          state: 'unavailable',
          attributes: {
            restored: true,
            state_class: 'total_increasing',
            icon: 'mdi:server-network',
            friendly_name: 'Network in eth0',
            supported_features: 0,
            unit_of_measurement: 'MiB',
          },
          context: {
            id: '0181157ff7802476565d9ba188211e4f',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-30T15:05:16.928Z',
          last_updated: '2022-05-30T15:05:16.928Z',
        },
        'sensor.network_out_eth0': {
          entity_id: 'sensor.network_out_eth0',
          state: 'unavailable',
          attributes: {
            restored: true,
            state_class: 'total_increasing',
            icon: 'mdi:server-network',
            friendly_name: 'Network out eth0',
            supported_features: 0,
            unit_of_measurement: 'MiB',
          },
          context: {
            id: '0181157ff780b92779d9c5061f5af76c',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-30T15:05:16.928Z',
          last_updated: '2022-05-30T15:05:16.928Z',
        },
        'sensor.network_throughput_in_eth0': {
          entity_id: 'sensor.network_throughput_in_eth0',
          state: 'unavailable',
          attributes: {
            restored: true,
            state_class: 'measurement',
            icon: 'mdi:server-network',
            friendly_name: 'Network throughput in eth0',
            supported_features: 0,
            unit_of_measurement: 'MB/s',
          },
          context: {
            id: '0181157ff780a8cd305ce60720efd28d',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-30T15:05:16.928Z',
          last_updated: '2022-05-30T15:05:16.928Z',
        },
        'sensor.network_throughput_out_eth0': {
          entity_id: 'sensor.network_throughput_out_eth0',
          state: 'unavailable',
          attributes: {
            restored: true,
            state_class: 'measurement',
            icon: 'mdi:server-network',
            friendly_name: 'Network throughput out eth0',
            supported_features: 0,
            unit_of_measurement: 'MB/s',
          },
          context: {
            id: '0181157ff7804ef969549befce939c4c',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-30T15:05:16.928Z',
          last_updated: '2022-05-30T15:05:16.928Z',
        },
        'sensor.ipv4_address_eth0': {
          entity_id: 'sensor.ipv4_address_eth0',
          state: 'unavailable',
          attributes: {
            restored: true,
            icon: 'mdi:server-network',
            friendly_name: 'IPv4 address eth0',
            supported_features: 0,
          },
          context: {
            id: '0181157ff780e5345594d227ab2121b6',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-30T15:05:16.928Z',
          last_updated: '2022-05-30T15:05:16.928Z',
        },
        'sensor.packets_in_eth0': {
          entity_id: 'sensor.packets_in_eth0',
          state: 'unavailable',
          attributes: {
            restored: true,
            state_class: 'total_increasing',
            icon: 'mdi:server-network',
            friendly_name: 'Packets in eth0',
            supported_features: 0,
          },
          context: {
            id: '0181157ff780f0deacec085c370318c1',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-30T15:05:16.928Z',
          last_updated: '2022-05-30T15:05:16.928Z',
        },
        'sensor.packets_out_eth0': {
          entity_id: 'sensor.packets_out_eth0',
          state: 'unavailable',
          attributes: {
            restored: true,
            state_class: 'total_increasing',
            icon: 'mdi:server-network',
            friendly_name: 'Packets out eth0',
            supported_features: 0,
          },
          context: {
            id: '0181157ff78049db5d99f7550ff0f7c9',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-30T15:05:16.928Z',
          last_updated: '2022-05-30T15:05:16.928Z',
        },
        'sensor.processor_use': {
          entity_id: 'sensor.processor_use',
          state: 'unavailable',
          attributes: {
            restored: true,
            state_class: 'measurement',
            icon: 'mdi:cpu-64-bit',
            friendly_name: 'Processor use',
            supported_features: 0,
            unit_of_measurement: '%',
          },
          context: {
            id: '0181157ff780ed2cd633db914001ca07',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-30T15:05:16.928Z',
          last_updated: '2022-05-30T15:05:16.928Z',
        },
        'persistent_notification.config_entry_discovery': {
          entity_id: 'persistent_notification.config_entry_discovery',
          state: 'notifying',
          attributes: {
            message:
              'We have discovered new devices on your network. [Check it out](/config/integrations).',
            title: 'New devices discovered',
            friendly_name: 'New devices discovered',
          },
          context: {
            id: '0181158034896e03f7f58374efa60995',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-30T15:05:32.553Z',
          last_updated: '2022-05-30T15:05:32.553Z',
        },
      },
    },
    _cnf: {
      state: {
        latitude: 38.9291848698784,
        longitude: -77.22924259956928,
        elevation: 162,
        unit_system: {
          length: 'mi',
          accumulated_precipitation: 'in',
          mass: 'lb',
          pressure: 'psi',
          temperature: '°F',
          volume: 'gal',
          wind_speed: 'mph',
        },
        location_name: 'Home',
        time_zone: 'America/New_York',
        components: [
          'switch',
          'device_tracker.mobile_app',
          'hue',
          'ffmpeg',
          'tts.google_translate',
          'input_datetime',
          'history',
          'homekit',
          'binary_sensor.mobile_app',
          'button.deebot',
          'weather',
          'persistent_notification',
          'device_automation',
          'config',
          'automation',
          'media_player.apple_tv',
          'default_config',
          'binary_sensor.ecobee',
          'input_text',
          'input_button',
          'binary_sensor.hue',
          'http',
          'input_boolean',
          'logbook',
          'system_health',
          'analytics',
          'vacuum',
          'media_source',
          'lifx',
          'tag',
          'number.deebot',
          'light.lifx',
          'upnp',
          'device_tracker',
          'humidifier.ecobee',
          'websocket_api',
          'deebot',
          'frontend',
          'scene.homeassistant',
          'diagnostics',
          'binary_sensor.rpi_power',
          'binary_sensor.upnp',
          'switch.hue',
          'notify.mobile_app',
          'cloud',
          'scene.hue',
          'trace',
          'sensor.energy',
          'system_log',
          'script',
          'sensor.hassio',
          'hacs',
          'humidifier',
          'webhook',
          'vacuum.deebot',
          'binary_sensor.hassio',
          'camera',
          'climate',
          'input_number',
          'lovelace',
          'energy',
          'person',
          'sensor.ecobee',
          'remote.apple_tv',
          'counter',
          'my',
          'select.deebot',
          'scene',
          'switch.deebot',
          'api',
          'light.hue',
          'zeroconf',
          'update.hassio',
          'zone',
          'auth',
          'weather.ecobee',
          'tts',
          'binary_sensor',
          'network',
          'homeassistant',
          'hassio',
          'usb',
          'apple_tv',
          'binary_sensor.deebot',
          'panel_custom',
          'button',
          'timer',
          'media_player',
          'camera.deebot',
          'ssdp',
          'sensor.deebot',
          'input_select',
          'sensor',
          'mobile_app',
          'recorder',
          'ecobee',
          'climate.ecobee',
          'onboarding',
          'dhcp',
          'map',
          'remote',
          'light',
          'number',
          'sensor.hacs',
          'sensor.hue',
          'update',
          'blueprint',
          'rpi_power',
          'image',
          'notify',
          'sensor.upnp',
          'stream',
          'search',
          'select',
          'sensor.mobile_app',
          'sun',
        ],
        config_dir: '/config',
        whitelist_external_dirs: ['/media', '/config/www'],
        allowlist_external_dirs: ['/media', '/config/www'],
        allowlist_external_urls: [],
        version: '2022.5.5',
        config_source: 'storage',
        safe_mode: false,
        state: 'RUNNING',
        external_url: null,
        internal_url: null,
        currency: 'USD',
      },
    },
    _srv: {
      state: {
        persistent_notification: {
          create: {
            name: 'Create',
            description: 'Show a notification in the frontend.',
            fields: {
              message: {
                name: 'Message',
                description:
                  'Message body of the notification. [Templates accepted]',
                required: true,
                example: 'Please check your configuration.yaml.',
                selector: {
                  text: null,
                },
              },
              title: {
                name: 'Title',
                description:
                  'Optional title for your notification. [Templates accepted]',
                example: 'Test notification',
                selector: {
                  text: null,
                },
              },
              notification_id: {
                name: 'Notification ID',
                description:
                  'Target ID of the notification, will replace a notification with the same ID.',
                example: 1234,
                selector: {
                  text: null,
                },
              },
            },
          },
          dismiss: {
            name: 'Dismiss',
            description: 'Remove a notification from the frontend.',
            fields: {
              notification_id: {
                name: 'Notification ID',
                description:
                  'Target ID of the notification, which should be removed.',
                required: true,
                example: 1234,
                selector: {
                  text: null,
                },
              },
            },
          },
          mark_read: {
            name: 'Mark read',
            description: 'Mark a notification read.',
            fields: {
              notification_id: {
                name: 'Notification ID',
                description:
                  'Target ID of the notification, which should be mark read.',
                required: true,
                example: 1234,
                selector: {
                  text: null,
                },
              },
            },
          },
        },
        homeassistant: {
          save_persistent_states: {
            name: 'Save Persistent States',
            description:
              'Save the persistent states (for entities derived from RestoreEntity) immediately. Maintain the normal periodic saving interval.',
            fields: {},
          },
          turn_off: {
            name: 'Generic turn off',
            description:
              'Generic service to turn devices off under any domain.',
            fields: {},
            target: {
              entity: {},
            },
          },
          turn_on: {
            name: 'Generic turn on',
            description: 'Generic service to turn devices on under any domain.',
            fields: {},
            target: {
              entity: {},
            },
          },
          toggle: {
            name: 'Generic toggle',
            description:
              'Generic service to toggle devices on/off under any domain',
            fields: {},
            target: {
              entity: {},
            },
          },
          stop: {
            name: 'Stop',
            description: 'Stop the Home Assistant service.',
            fields: {},
          },
          restart: {
            name: 'Restart',
            description: 'Restart the Home Assistant service.',
            fields: {},
          },
          check_config: {
            name: 'Check configuration',
            description:
              'Check the Home Assistant configuration files for errors. Errors will be displayed in the Home Assistant log.',
            fields: {},
          },
          update_entity: {
            name: 'Update entity',
            description: 'Force one or more entities to update its data',
            fields: {},
            target: {
              entity: {},
            },
          },
          reload_core_config: {
            name: 'Reload core configuration',
            description: 'Reload the core configuration.',
            fields: {},
          },
          set_location: {
            name: 'Set location',
            description: 'Update the Home Assistant location.',
            fields: {
              latitude: {
                name: 'Latitude',
                description: 'Latitude of your location.',
                required: true,
                example: 32.87336,
                selector: {
                  text: null,
                },
              },
              longitude: {
                name: 'Longitude',
                description: 'Longitude of your location.',
                required: true,
                example: 117.22743,
                selector: {
                  text: null,
                },
              },
            },
          },
          reload_config_entry: {
            name: 'Reload config entry',
            description: 'Reload a config entry that matches a target.',
            fields: {
              entry_id: {
                advanced: true,
                name: 'Config entry id',
                description: 'A configuration entry id',
                required: false,
                example: '8955375327824e14ba89e4b29cc3ec9a',
                selector: {
                  text: null,
                },
              },
            },
            target: {
              entity: {},
              device: {},
            },
          },
        },
        system_log: {
          clear: {
            name: 'Clear all',
            description: 'Clear all log entries.',
            fields: {},
          },
          write: {
            name: 'Write',
            description: 'Write log entry.',
            fields: {
              message: {
                name: 'Message',
                description: 'Message to log.',
                required: true,
                example: 'Something went wrong',
                selector: {
                  text: null,
                },
              },
              level: {
                name: 'Level',
                description: 'Log level.',
                default: 'error',
                selector: {
                  select: {
                    options: [
                      {
                        label: 'Debug',
                        value: 'debug',
                      },
                      {
                        label: 'Info',
                        value: 'info',
                      },
                      {
                        label: 'Warning',
                        value: 'warning',
                      },
                      {
                        label: 'Error',
                        value: 'error',
                      },
                      {
                        label: 'Critical',
                        value: 'critical',
                      },
                    ],
                  },
                },
              },
              logger: {
                name: 'Logger',
                description:
                  "Logger name under which to log the message. Defaults to 'system_log.external'.",
                example: 'mycomponent.myplatform',
                selector: {
                  text: null,
                },
              },
            },
          },
        },
        recorder: {
          purge: {
            name: 'Purge',
            description:
              'Start purge task - to clean up old data from your database.',
            fields: {
              keep_days: {
                name: 'Days to keep',
                description:
                  'Number of history days to keep in database after purge.',
                selector: {
                  number: {
                    min: 0,
                    max: 365,
                    unit_of_measurement: 'days',
                  },
                },
              },
              repack: {
                name: 'Repack',
                description:
                  'Attempt to save disk space by rewriting the entire database file.',
                default: false,
                selector: {
                  boolean: null,
                },
              },
              apply_filter: {
                name: 'Apply filter',
                description:
                  'Apply entity_id and event_type filter in addition to time based purge.',
                default: false,
                selector: {
                  boolean: null,
                },
              },
            },
          },
          purge_entities: {
            name: 'Purge Entities',
            description:
              'Start purge task to remove specific entities from your database.',
            fields: {
              domains: {
                name: 'Domains to remove',
                description:
                  'List the domains that need to be removed from the recorder database.',
                example: 'sun',
                required: false,
                default: [],
                selector: {
                  object: null,
                },
              },
              entity_globs: {
                name: 'Entity Globs to remove',
                description:
                  'List the glob patterns to select entities for removal from the recorder database.',
                example: 'domain*.object_id*',
                required: false,
                default: [],
                selector: {
                  object: null,
                },
              },
            },
            target: {
              entity: {},
            },
          },
          enable: {
            name: 'Enable',
            description: 'Start the recording of events and state changes',
            fields: {},
          },
          disable: {
            name: 'Disable',
            description: 'Stop the recording of events and state changes',
            fields: {},
          },
        },
        cloud: {
          remote_connect: {
            name: 'Remote connect',
            description:
              'Make instance UI available outside over NabuCasa cloud',
            fields: {},
          },
          remote_disconnect: {
            name: 'Remote disconnect',
            description: 'Disconnect UI from NabuCasa cloud',
            fields: {},
          },
        },
        person: {
          reload: {
            name: 'Reload',
            description: 'Reload the person configuration.',
            fields: {},
          },
        },
        frontend: {
          set_theme: {
            name: 'Set theme',
            description:
              'Set a theme unless the client selected per-device theme.',
            fields: {
              name: {
                name: 'Theme',
                description: 'Name of a predefined theme',
                required: true,
                example: 'default',
                selector: {
                  theme: null,
                },
              },
              mode: {
                name: 'Mode',
                description: 'The mode the theme is for.',
                default: 'light',
                selector: {
                  select: {
                    options: [
                      {
                        label: 'Dark',
                        value: 'dark',
                      },
                      {
                        label: 'Light',
                        value: 'light',
                      },
                    ],
                  },
                },
              },
            },
          },
          reload_themes: {
            name: 'Reload themes',
            description: 'Reload themes from YAML configuration.',
            fields: {},
          },
        },
        hassio: {
          addon_start: {
            name: 'Start add-on',
            description: 'Start add-on.',
            fields: {
              addon: {
                name: 'Add-on',
                required: true,
                description: 'The add-on slug.',
                example: 'core_ssh',
                selector: {
                  addon: null,
                },
              },
            },
          },
          addon_stop: {
            name: 'Stop add-on.',
            description: 'Stop add-on.',
            fields: {
              addon: {
                name: 'Add-on',
                required: true,
                description: 'The add-on slug.',
                example: 'core_ssh',
                selector: {
                  addon: null,
                },
              },
            },
          },
          addon_restart: {
            name: 'Restart add-on.',
            description: 'Restart add-on.',
            fields: {
              addon: {
                name: 'Add-on',
                required: true,
                description: 'The add-on slug.',
                example: 'core_ssh',
                selector: {
                  addon: null,
                },
              },
            },
          },
          addon_update: {
            name: 'Update add-on.',
            description:
              'Update add-on. This service should be used with caution since add-on updates can contain breaking changes. It is highly recommended that you review release notes/change logs before updating an add-on.',
            fields: {
              addon: {
                name: 'Add-on',
                required: true,
                description: 'The add-on slug.',
                example: 'core_ssh',
                selector: {
                  addon: null,
                },
              },
            },
          },
          addon_stdin: {
            name: 'Write data to add-on stdin.',
            description: 'Write data to add-on stdin.',
            fields: {
              addon: {
                name: 'Add-on',
                required: true,
                description: 'The add-on slug.',
                example: 'core_ssh',
                selector: {
                  addon: null,
                },
              },
            },
          },
          host_shutdown: {
            name: 'Poweroff the host system.',
            description: 'Poweroff the host system.',
            fields: {},
          },
          host_reboot: {
            name: 'Reboot the host system.',
            description: 'Reboot the host system.',
            fields: {},
          },
          backup_full: {
            name: 'Create a full backup.',
            description: 'Create a full backup.',
            fields: {
              name: {
                name: 'Name',
                description: 'Optional (default = current date and time).',
                example: 'Backup 1',
                selector: {
                  text: null,
                },
              },
              password: {
                name: 'Password',
                description: 'Optional password.',
                example: 'password',
                selector: {
                  text: null,
                },
              },
              compressed: {
                name: 'Compressed',
                description: 'Use compressed archives',
                default: true,
                selector: {
                  boolean: null,
                },
              },
            },
          },
          backup_partial: {
            name: 'Create a partial backup.',
            description: 'Create a partial backup.',
            fields: {
              homeassistant: {
                name: 'Home Assistant settings',
                description: 'Backup Home Assistant settings',
                selector: {
                  boolean: null,
                },
              },
              addons: {
                name: 'Add-ons',
                description: 'Optional list of add-on slugs.',
                example: ['core_ssh', 'core_samba', 'core_mosquitto'],
                selector: {
                  object: null,
                },
              },
              folders: {
                name: 'Folders',
                description: 'Optional list of directories.',
                example: ['homeassistant', 'share'],
                selector: {
                  object: null,
                },
              },
              name: {
                name: 'Name',
                description: 'Optional (default = current date and time).',
                example: 'Partial backup 1',
                selector: {
                  text: null,
                },
              },
              password: {
                name: 'Password',
                description: 'Optional password.',
                example: 'password',
                selector: {
                  text: null,
                },
              },
              compressed: {
                name: 'Compressed',
                description: 'Use compressed archives',
                default: true,
                selector: {
                  boolean: null,
                },
              },
            },
          },
          restore_full: {
            name: 'Restore from full backup.',
            description: 'Restore from full backup.',
            fields: {
              slug: {
                name: 'Slug',
                required: true,
                description: 'Slug of backup to restore from.',
                selector: {
                  text: null,
                },
              },
              password: {
                name: 'Password',
                description: 'Optional password.',
                example: 'password',
                selector: {
                  text: null,
                },
              },
            },
          },
          restore_partial: {
            name: 'Restore from partial backup.',
            description: 'Restore from partial backup.',
            fields: {
              slug: {
                name: 'Slug',
                required: true,
                description: 'Slug of backup to restore from.',
                selector: {
                  text: null,
                },
              },
              homeassistant: {
                name: 'Home Assistant settings',
                description: 'Restore Home Assistant',
                selector: {
                  boolean: null,
                },
              },
              folders: {
                name: 'Folders',
                description: 'Optional list of directories.',
                example: ['homeassistant', 'share'],
                selector: {
                  object: null,
                },
              },
              addons: {
                name: 'Add-ons',
                description: 'Optional list of add-on slugs.',
                example: ['core_ssh', 'core_samba', 'core_mosquitto'],
                selector: {
                  object: null,
                },
              },
              password: {
                name: 'Password',
                description: 'Optional password.',
                example: 'password',
                selector: {
                  text: null,
                },
              },
            },
          },
        },
        update: {
          install: {
            name: 'Install update',
            description: 'Install an update for this device or service',
            fields: {
              version: {
                name: 'Version',
                description:
                  'Version to install, if omitted, the latest version will be installed.',
                required: false,
                example: '1.0.0',
                selector: {
                  text: null,
                },
              },
              backup: {
                name: 'Backup',
                description:
                  'Backup before installing the update, if supported by the integration.',
                required: false,
                selector: {
                  boolean: null,
                },
              },
            },
            target: {
              entity: {
                domain: 'update',
              },
            },
          },
          skip: {
            name: 'Skip update',
            description: 'Mark currently available update as skipped.',
            fields: {},
            target: {
              entity: {
                domain: 'update',
              },
            },
          },
          clear_skipped: {
            name: 'Clear skipped update',
            description: 'Removes the skipped version marker from an update.',
            fields: {},
            target: {
              entity: {
                domain: 'update',
              },
            },
          },
        },
        logbook: {
          log: {
            name: 'Log',
            description: 'Create a custom entry in your logbook.',
            fields: {
              name: {
                name: 'Name',
                description:
                  'Custom name for an entity, can be referenced with entity_id.',
                required: true,
                example: 'Kitchen',
                selector: {
                  text: null,
                },
              },
              message: {
                name: 'Message',
                description: 'Message of the custom logbook entry.',
                required: true,
                example: 'is being used',
                selector: {
                  text: null,
                },
              },
              entity_id: {
                name: 'Entity ID',
                description: 'Entity to reference in custom logbook entry.',
                selector: {
                  entity: null,
                },
              },
              domain: {
                name: 'Domain',
                description:
                  'Icon of domain to display in custom logbook entry.',
                example: 'light',
                selector: {
                  text: null,
                },
              },
            },
          },
        },
        scene: {
          reload: {
            name: 'Reload',
            description: 'Reload the scene configuration.',
            fields: {},
          },
          apply: {
            name: 'Apply',
            description: 'Activate a scene with configuration.',
            fields: {
              entities: {
                name: 'Entities state',
                description: 'The entities and the state that they need to be.',
                required: true,
                example: {
                  'light.kitchen': 'on',
                  'light.ceiling': {
                    state: 'on',
                    brightness: 80,
                  },
                },
                selector: {
                  object: null,
                },
              },
              transition: {
                name: 'Transition',
                description:
                  'Transition duration it takes to bring devices to the state defined in the scene.',
                selector: {
                  number: {
                    min: 0,
                    max: 300,
                    unit_of_measurement: 'seconds',
                  },
                },
              },
            },
          },
          create: {
            name: 'Create',
            description: 'Creates a new scene.',
            fields: {
              scene_id: {
                name: 'Scene entity ID',
                description: 'The entity_id of the new scene.',
                required: true,
                example: 'all_lights',
                selector: {
                  text: null,
                },
              },
              entities: {
                name: 'Entities state',
                description: 'The entities to control with the scene.',
                example: {
                  'light.tv_back_light': 'on',
                  'light.ceiling': {
                    state: 'on',
                    brightness: 200,
                  },
                },
                selector: {
                  object: null,
                },
              },
              snapshot_entities: {
                name: 'Snapshot entities',
                description: 'The entities of which a snapshot is to be taken',
                example: ['light.ceiling', 'light.kitchen'],
                selector: {
                  object: null,
                },
              },
            },
          },
          turn_on: {
            name: 'Activate',
            description: 'Activate a scene.',
            fields: {
              transition: {
                name: 'Transition',
                description:
                  'Transition duration it takes to bring devices to the state defined in the scene.',
                selector: {
                  number: {
                    min: 0,
                    max: 300,
                    unit_of_measurement: 'seconds',
                  },
                },
              },
            },
            target: {
              entity: {
                domain: 'scene',
              },
            },
          },
        },
        ffmpeg: {
          start: {
            name: 'Start',
            description: 'Send a start command to a ffmpeg based sensor.',
            fields: {
              entity_id: {
                name: 'Entity',
                description:
                  'Name of entity that will start. Platform dependent.',
                selector: {
                  entity: {
                    integration: 'ffmpeg',
                    domain: 'binary_sensor',
                  },
                },
              },
            },
          },
          stop: {
            name: 'Stop',
            description: 'Send a stop command to a ffmpeg based sensor.',
            fields: {
              entity_id: {
                name: 'Entity',
                description:
                  'Name of entity that will stop. Platform dependent.',
                selector: {
                  entity: {
                    integration: 'ffmpeg',
                    domain: 'binary_sensor',
                  },
                },
              },
            },
          },
          restart: {
            name: 'Restart',
            description: 'Send a restart command to a ffmpeg based sensor.',
            fields: {
              entity_id: {
                name: 'Entity',
                description:
                  'Name of entity that will restart. Platform dependent.',
                selector: {
                  entity: {
                    integration: 'ffmpeg',
                    domain: 'binary_sensor',
                  },
                },
              },
            },
          },
        },
        timer: {
          reload: {
            name: '',
            description: '',
            fields: {},
          },
          start: {
            name: 'Start',
            description: 'Start a timer',
            fields: {
              duration: {
                description:
                  'Duration the timer requires to finish. [optional]',
                default: 0,
                example: '00:01:00 or 60',
                selector: {
                  text: null,
                },
              },
            },
            target: {
              entity: {
                domain: 'timer',
              },
            },
          },
          pause: {
            name: 'Pause',
            description: 'Pause a timer.',
            fields: {},
            target: {
              entity: {
                domain: 'timer',
              },
            },
          },
          cancel: {
            name: 'Cancel',
            description: 'Cancel a timer.',
            fields: {},
            target: {
              entity: {
                domain: 'timer',
              },
            },
          },
          finish: {
            name: 'Finish',
            description: 'Finish a timer.',
            fields: {},
            target: {
              entity: {
                domain: 'timer',
              },
            },
          },
        },
        counter: {
          increment: {
            name: 'Increment',
            description: 'Increment a counter.',
            fields: {},
            target: {
              entity: {
                domain: 'counter',
              },
            },
          },
          decrement: {
            name: 'Decrement',
            description: 'Decrement a counter.',
            fields: {},
            target: {
              entity: {
                domain: 'counter',
              },
            },
          },
          reset: {
            name: 'Reset',
            description: 'Reset a counter.',
            fields: {},
            target: {
              entity: {
                domain: 'counter',
              },
            },
          },
          configure: {
            name: 'Configure',
            description: 'Change counter parameters.',
            fields: {
              minimum: {
                name: 'Minimum',
                description:
                  'New minimum value for the counter or None to remove minimum.',
                selector: {
                  number: {
                    min: -9223372036854776000,
                    max: 9223372036854776000,
                    mode: 'box',
                  },
                },
              },
              maximum: {
                name: 'Maximum',
                description:
                  'New maximum value for the counter or None to remove maximum.',
                selector: {
                  number: {
                    min: -9223372036854776000,
                    max: 9223372036854776000,
                    mode: 'box',
                  },
                },
              },
              step: {
                name: 'Step',
                description: 'New value for step.',
                selector: {
                  number: {
                    min: 1,
                    max: 9223372036854776000,
                    mode: 'box',
                  },
                },
              },
              initial: {
                name: 'Initial',
                description: 'New value for initial.',
                selector: {
                  number: {
                    min: 0,
                    max: 9223372036854776000,
                    mode: 'box',
                  },
                },
              },
              value: {
                name: 'Value',
                description: 'New state value.',
                selector: {
                  number: {
                    min: 0,
                    max: 9223372036854776000,
                    mode: 'box',
                  },
                },
              },
            },
            target: {
              entity: {
                domain: 'counter',
              },
            },
          },
        },
        zone: {
          reload: {
            name: 'Reload',
            description: 'Reload the YAML-based zone configuration.',
            fields: {},
          },
        },
        script: {
          reload: {
            name: 'Reload',
            description: 'Reload all the available scripts',
            fields: {},
          },
          turn_on: {
            name: 'Turn on',
            description: 'Turn on script',
            fields: {},
            target: {
              entity: {
                domain: 'script',
              },
            },
          },
          turn_off: {
            name: 'Turn off',
            description: 'Turn off script',
            fields: {},
            target: {
              entity: {
                domain: 'script',
              },
            },
          },
          toggle: {
            name: 'Toggle',
            description: 'Toggle script',
            fields: {},
            target: {
              entity: {
                domain: 'script',
              },
            },
          },
        },
        media_player: {
          turn_on: {
            name: 'Turn on',
            description: 'Turn a media player power on.',
            fields: {},
            target: {
              entity: {
                domain: 'media_player',
              },
            },
          },
          turn_off: {
            name: 'Turn off',
            description: 'Turn a media player power off.',
            fields: {},
            target: {
              entity: {
                domain: 'media_player',
              },
            },
          },
          toggle: {
            name: 'Toggle',
            description: 'Toggles a media player power state.',
            fields: {},
            target: {
              entity: {
                domain: 'media_player',
              },
            },
          },
          volume_up: {
            name: 'Turn up volume',
            description: 'Turn a media player volume up.',
            fields: {},
            target: {
              entity: {
                domain: 'media_player',
              },
            },
          },
          volume_down: {
            name: 'Turn down volume',
            description: 'Turn a media player volume down.',
            fields: {},
            target: {
              entity: {
                domain: 'media_player',
              },
            },
          },
          media_play_pause: {
            name: 'Play/Pause',
            description: 'Toggle media player play/pause state.',
            fields: {},
            target: {
              entity: {
                domain: 'media_player',
              },
            },
          },
          media_play: {
            name: 'Play',
            description: 'Send the media player the command for play.',
            fields: {},
            target: {
              entity: {
                domain: 'media_player',
              },
            },
          },
          media_pause: {
            name: 'Pause',
            description: 'Send the media player the command for pause.',
            fields: {},
            target: {
              entity: {
                domain: 'media_player',
              },
            },
          },
          media_stop: {
            name: 'Stop',
            description: 'Send the media player the stop command.',
            fields: {},
            target: {
              entity: {
                domain: 'media_player',
              },
            },
          },
          media_next_track: {
            name: 'Next',
            description: 'Send the media player the command for next track.',
            fields: {},
            target: {
              entity: {
                domain: 'media_player',
              },
            },
          },
          media_previous_track: {
            name: 'Previous',
            description:
              'Send the media player the command for previous track.',
            fields: {},
            target: {
              entity: {
                domain: 'media_player',
              },
            },
          },
          clear_playlist: {
            name: 'Clear playlist',
            description:
              'Send the media player the command to clear players playlist.',
            fields: {},
            target: {
              entity: {
                domain: 'media_player',
              },
            },
          },
          volume_set: {
            name: 'Set volume',
            description: "Set a media player's volume level.",
            fields: {
              volume_level: {
                name: 'Level',
                description: 'Volume level to set as float.',
                required: true,
                selector: {
                  number: {
                    min: 0,
                    max: 1,
                    step: 0.01,
                  },
                },
              },
            },
            target: {
              entity: {
                domain: 'media_player',
              },
            },
          },
          volume_mute: {
            name: 'Mute volume',
            description: "Mute a media player's volume.",
            fields: {
              is_volume_muted: {
                name: 'Muted',
                description: 'True/false for mute/unmute.',
                required: true,
                selector: {
                  boolean: null,
                },
              },
            },
            target: {
              entity: {
                domain: 'media_player',
              },
            },
          },
          media_seek: {
            name: 'Seek',
            description:
              'Send the media player the command to seek in current playing media.',
            fields: {
              seek_position: {
                name: 'Position',
                description:
                  'Position to seek to. The format is platform dependent.',
                required: true,
                selector: {
                  number: {
                    min: 0,
                    max: 9223372036854776000,
                    step: 0.01,
                    mode: 'box',
                  },
                },
              },
            },
            target: {
              entity: {
                domain: 'media_player',
              },
            },
          },
          join: {
            name: 'Join',
            description:
              'Group players together. Only works on platforms with support for player groups.',
            fields: {
              group_members: {
                name: 'Group members',
                description:
                  'The players which will be synced with the target player.',
                example: [
                  'media_player.multiroom_player2',
                  'media_player.multiroom_player3',
                ],
                selector: {
                  object: null,
                },
              },
            },
            target: {
              entity: {
                domain: 'media_player',
              },
            },
          },
          select_source: {
            name: 'Select source',
            description:
              'Send the media player the command to change input source.',
            fields: {
              source: {
                name: 'Source',
                description:
                  'Name of the source to switch to. Platform dependent.',
                required: true,
                example: 'video1',
                selector: {
                  text: null,
                },
              },
            },
            target: {
              entity: {
                domain: 'media_player',
              },
            },
          },
          select_sound_mode: {
            name: 'Select sound mode',
            description:
              'Send the media player the command to change sound mode.',
            fields: {
              sound_mode: {
                name: 'Sound mode',
                description: 'Name of the sound mode to switch to.',
                example: 'Music',
                selector: {
                  text: null,
                },
              },
            },
            target: {
              entity: {
                domain: 'media_player',
              },
            },
          },
          play_media: {
            name: 'Play media',
            description: 'Send the media player the command for playing media.',
            fields: {
              media_content_id: {
                name: 'Content ID',
                description:
                  'The ID of the content to play. Platform dependent.',
                required: true,
                example: 'https://home-assistant.io/images/cast/splash.png',
                selector: {
                  text: null,
                },
              },
              media_content_type: {
                name: 'Content type',
                description:
                  'The type of the content to play. Like image, music, tvshow, video, episode, channel or playlist.',
                required: true,
                example: 'music',
                selector: {
                  text: null,
                },
              },
            },
            target: {
              entity: {
                domain: 'media_player',
              },
            },
          },
          shuffle_set: {
            name: 'Shuffle',
            description: 'Set shuffling state.',
            fields: {
              shuffle: {
                name: 'Shuffle',
                description: 'True/false for enabling/disabling shuffle.',
                required: true,
                selector: {
                  boolean: null,
                },
              },
            },
            target: {
              entity: {
                domain: 'media_player',
              },
            },
          },
          unjoin: {
            name: 'Unjoin',
            description:
              'Unjoin the player from a group. Only works on platforms with support for player groups.',
            fields: {},
            target: {
              entity: {
                domain: 'media_player',
              },
            },
          },
          repeat_set: {
            name: 'Repeat',
            description: 'Set repeat mode',
            fields: {
              repeat: {
                name: 'Repeat mode',
                description: 'Repeat mode to set.',
                required: true,
                selector: {
                  select: {
                    options: [
                      {
                        label: 'Off',
                        value: 'off',
                      },
                      {
                        label: 'Repeat all',
                        value: 'all',
                      },
                      {
                        label: 'Repeat one',
                        value: 'one',
                      },
                    ],
                  },
                },
              },
            },
            target: {
              entity: {
                domain: 'media_player',
              },
            },
          },
        },
        automation: {
          trigger: {
            name: 'Trigger',
            description: 'Trigger the actions of an automation.',
            fields: {
              skip_condition: {
                name: 'Skip conditions',
                description: 'Whether or not the conditions will be skipped.',
                default: true,
                selector: {
                  boolean: null,
                },
              },
            },
            target: {
              entity: {
                domain: 'automation',
              },
            },
          },
          toggle: {
            name: 'Toggle',
            description: 'Toggle (enable / disable) an automation.',
            fields: {},
            target: {
              entity: {
                domain: 'automation',
              },
            },
          },
          turn_on: {
            name: 'Turn on',
            description: 'Enable an automation.',
            fields: {},
            target: {
              entity: {
                domain: 'automation',
              },
            },
          },
          turn_off: {
            name: 'Turn off',
            description: 'Disable an automation.',
            fields: {
              stop_actions: {
                name: 'Stop actions',
                description: 'Stop currently running actions.',
                default: true,
                selector: {
                  boolean: null,
                },
              },
            },
            target: {
              entity: {
                domain: 'automation',
              },
            },
          },
          reload: {
            name: 'Reload',
            description: 'Reload the automation configuration.',
            fields: {},
          },
        },
        input_select: {
          reload: {
            name: 'Reload',
            description: 'Reload the input_select configuration.',
            fields: {},
          },
          select_option: {
            name: 'Select',
            description: 'Select an option of an input select entity.',
            fields: {
              option: {
                name: 'Option',
                description: 'Option to be selected.',
                required: true,
                example: '"Item A"',
                selector: {
                  text: null,
                },
              },
            },
            target: {
              entity: {
                domain: 'input_select',
              },
            },
          },
          select_next: {
            name: 'Next',
            description: 'Select the next options of an input select entity.',
            fields: {
              cycle: {
                name: 'Cycle',
                description:
                  'If the option should cycle from the last to the first.',
                default: true,
                selector: {
                  boolean: null,
                },
              },
            },
            target: {
              entity: {
                domain: 'input_select',
              },
            },
          },
          select_previous: {
            name: 'Previous',
            description:
              'Select the previous options of an input select entity.',
            fields: {
              cycle: {
                name: 'Cycle',
                description:
                  'If the option should cycle from the first to the last.',
                default: true,
                selector: {
                  boolean: null,
                },
              },
            },
            target: {
              entity: {
                domain: 'input_select',
              },
            },
          },
          select_first: {
            name: 'First',
            description: 'Select the first option of an input select entity.',
            fields: {},
            target: {
              entity: {
                domain: 'input_select',
              },
            },
          },
          select_last: {
            name: 'Last',
            description: 'Select the last option of an input select entity.',
            fields: {},
            target: {
              entity: {
                domain: 'input_select',
              },
            },
          },
          set_options: {
            name: 'Set options',
            description: 'Set the options of an input select entity.',
            fields: {
              options: {
                name: 'Options',
                description: 'Options for the input select entity.',
                required: true,
                example: '["Item A", "Item B", "Item C"]',
                selector: {
                  object: null,
                },
              },
            },
            target: {
              entity: {
                domain: 'input_select',
              },
            },
          },
        },
        input_datetime: {
          reload: {
            name: 'Reload',
            description: 'Reload the input_datetime configuration.',
            fields: {},
          },
          set_datetime: {
            name: 'Set',
            description:
              'This can be used to dynamically set the date and/or time.',
            fields: {
              date: {
                name: 'Date',
                description: 'The target date the entity should be set to.',
                example: '"2019-04-20"',
                selector: {
                  text: null,
                },
              },
              time: {
                name: 'Time',
                description: 'The target time the entity should be set to.',
                example: '"05:04:20"',
                selector: {
                  time: null,
                },
              },
              datetime: {
                name: 'Date & Time',
                description:
                  'The target date & time the entity should be set to.',
                example: '"2019-04-20 05:04:20"',
                selector: {
                  text: null,
                },
              },
              timestamp: {
                name: 'Timestamp',
                description:
                  'The target date & time the entity should be set to as expressed by a UNIX timestamp.',
                selector: {
                  number: {
                    min: 0,
                    max: 9223372036854776000,
                    mode: 'box',
                  },
                },
              },
            },
            target: {
              entity: {
                domain: 'input_datetime',
              },
            },
          },
        },
        input_number: {
          reload: {
            name: 'Reload',
            description: 'Reload the input_number configuration.',
            fields: {},
          },
          set_value: {
            name: 'Set',
            description: 'Set the value of an input number entity.',
            fields: {
              value: {
                name: 'Value',
                description: 'The target value the entity should be set to.',
                required: true,
                selector: {
                  number: {
                    min: 0,
                    max: 9223372036854776000,
                    step: 0.001,
                    mode: 'box',
                  },
                },
              },
            },
            target: {
              entity: {
                domain: 'input_number',
              },
            },
          },
          increment: {
            name: 'Increment',
            description:
              'Increment the value of an input number entity by its stepping.',
            fields: {},
            target: {
              entity: {
                domain: 'input_number',
              },
            },
          },
          decrement: {
            name: 'Decrement',
            description:
              'Decrement the value of an input number entity by its stepping.',
            fields: {},
            target: {
              entity: {
                domain: 'input_number',
              },
            },
          },
        },
        input_text: {
          reload: {
            name: 'Reload',
            description: 'Reload the input_text configuration.',
            fields: {},
          },
          set_value: {
            name: 'Set',
            description: 'Set the value of an input text entity.',
            fields: {
              value: {
                name: 'Value',
                description: 'The target value the entity should be set to.',
                required: true,
                example: 'This is an example text',
                selector: {
                  text: null,
                },
              },
            },
            target: {
              entity: {
                domain: 'input_text',
              },
            },
          },
        },
        remote: {
          turn_off: {
            name: 'Turn Off',
            description: 'Sends the Power Off Command.',
            fields: {},
            target: {
              entity: {
                domain: 'remote',
              },
            },
          },
          turn_on: {
            name: 'Turn On',
            description: 'Sends the Power On Command.',
            fields: {
              activity: {
                name: 'Activity',
                description: 'Activity ID or Activity Name to start.',
                example: 'BedroomTV',
                selector: {
                  text: null,
                },
              },
            },
            target: {
              entity: {
                domain: 'remote',
              },
            },
          },
          toggle: {
            name: 'Toggle',
            description: 'Toggles a device.',
            fields: {},
            target: {
              entity: {
                domain: 'remote',
              },
            },
          },
          send_command: {
            name: 'Send Command',
            description: 'Sends a command or a list of commands to a device.',
            fields: {
              device: {
                name: 'Device',
                description: 'Device ID to send command to.',
                example: '32756745',
                selector: {
                  text: null,
                },
              },
              command: {
                name: 'Command',
                description: 'A single command or a list of commands to send.',
                required: true,
                example: 'Play',
                selector: {
                  object: null,
                },
              },
              num_repeats: {
                name: 'Repeats',
                description:
                  'The number of times you want to repeat the command(s).',
                default: 1,
                selector: {
                  number: {
                    min: 0,
                    max: 255,
                  },
                },
              },
              delay_secs: {
                name: 'Delay Seconds',
                description:
                  'The time you want to wait in between repeated commands.',
                default: 0.4,
                selector: {
                  number: {
                    min: 0,
                    max: 60,
                    step: 0.1,
                    unit_of_measurement: 'seconds',
                  },
                },
              },
              hold_secs: {
                name: 'Hold Seconds',
                description:
                  'The time you want to have it held before the release is send.',
                default: 0,
                selector: {
                  number: {
                    min: 0,
                    max: 60,
                    step: 0.1,
                    unit_of_measurement: 'seconds',
                  },
                },
              },
            },
            target: {
              entity: {
                domain: 'remote',
              },
            },
          },
          learn_command: {
            name: 'Learn Command',
            description:
              'Learns a command or a list of commands from a device.',
            fields: {
              device: {
                name: 'Device',
                description: 'Device ID to learn command from.',
                example: 'television',
                selector: {
                  text: null,
                },
              },
              command: {
                name: 'Command',
                description: 'A single command or a list of commands to learn.',
                example: 'Turn on',
                selector: {
                  object: null,
                },
              },
              command_type: {
                name: 'Command Type',
                description: 'The type of command to be learned.',
                default: 'ir',
                selector: {
                  select: {
                    options: ['ir', 'rf'],
                  },
                },
              },
              alternative: {
                name: 'Alternative',
                description:
                  'If code must be stored as alternative (useful for discrete remotes).',
                selector: {
                  boolean: null,
                },
              },
              timeout: {
                name: 'Timeout',
                description: 'Timeout for the command to be learned.',
                selector: {
                  number: {
                    min: 0,
                    max: 60,
                    step: 5,
                    unit_of_measurement: 'seconds',
                  },
                },
              },
            },
            target: {
              entity: {
                domain: 'remote',
              },
            },
          },
          delete_command: {
            name: 'Delete Command',
            description:
              'Deletes a command or a list of commands from the database.',
            fields: {
              device: {
                name: 'Device',
                description:
                  'Name of the device from which commands will be deleted.',
                example: 'television',
                selector: {
                  text: null,
                },
              },
              command: {
                name: 'Command',
                description:
                  'A single command or a list of commands to delete.',
                required: true,
                example: 'Mute',
                selector: {
                  object: null,
                },
              },
            },
            target: {
              entity: {
                domain: 'remote',
              },
            },
          },
        },
        light: {
          turn_on: {
            name: 'Turn on',
            description:
              'Turn on one or more lights and adjust properties of the light, even when they are turned on already.\n',
            fields: {
              transition: {
                name: 'Transition',
                description: 'Duration it takes to get to next state.',
                selector: {
                  number: {
                    min: 0,
                    max: 300,
                    unit_of_measurement: 'seconds',
                  },
                },
              },
              rgb_color: {
                name: 'Color',
                description:
                  'The color for the light (based on RGB - red, green, blue).',
                selector: {
                  color_rgb: null,
                },
              },
              rgbw_color: {
                name: 'RGBW-color',
                description:
                  'A list containing four integers between 0 and 255 representing the RGBW (red, green, blue, white) color for the light.',
                advanced: true,
                example: '[255, 100, 100, 50]',
                selector: {
                  object: null,
                },
              },
              rgbww_color: {
                name: 'RGBWW-color',
                description:
                  'A list containing five integers between 0 and 255 representing the RGBWW (red, green, blue, cold white, warm white) color for the light.',
                advanced: true,
                example: '[255, 100, 100, 50, 70]',
                selector: {
                  object: null,
                },
              },
              color_name: {
                name: 'Color name',
                description: 'A human readable color name.',
                advanced: true,
                selector: {
                  select: {
                    options: [
                      'homeassistant',
                      'aliceblue',
                      'antiquewhite',
                      'aqua',
                      'aquamarine',
                      'azure',
                      'beige',
                      'bisque',
                      'blanchedalmond',
                      'blue',
                      'blueviolet',
                      'brown',
                      'burlywood',
                      'cadetblue',
                      'chartreuse',
                      'chocolate',
                      'coral',
                      'cornflowerblue',
                      'cornsilk',
                      'crimson',
                      'cyan',
                      'darkblue',
                      'darkcyan',
                      'darkgoldenrod',
                      'darkgray',
                      'darkgreen',
                      'darkgrey',
                      'darkkhaki',
                      'darkmagenta',
                      'darkolivegreen',
                      'darkorange',
                      'darkorchid',
                      'darkred',
                      'darksalmon',
                      'darkseagreen',
                      'darkslateblue',
                      'darkslategray',
                      'darkslategrey',
                      'darkturquoise',
                      'darkviolet',
                      'deeppink',
                      'deepskyblue',
                      'dimgray',
                      'dimgrey',
                      'dodgerblue',
                      'firebrick',
                      'floralwhite',
                      'forestgreen',
                      'fuchsia',
                      'gainsboro',
                      'ghostwhite',
                      'gold',
                      'goldenrod',
                      'gray',
                      'green',
                      'greenyellow',
                      'grey',
                      'honeydew',
                      'hotpink',
                      'indianred',
                      'indigo',
                      'ivory',
                      'khaki',
                      'lavender',
                      'lavenderblush',
                      'lawngreen',
                      'lemonchiffon',
                      'lightblue',
                      'lightcoral',
                      'lightcyan',
                      'lightgoldenrodyellow',
                      'lightgray',
                      'lightgreen',
                      'lightgrey',
                      'lightpink',
                      'lightsalmon',
                      'lightseagreen',
                      'lightskyblue',
                      'lightslategray',
                      'lightslategrey',
                      'lightsteelblue',
                      'lightyellow',
                      'lime',
                      'limegreen',
                      'linen',
                      'magenta',
                      'maroon',
                      'mediumaquamarine',
                      'mediumblue',
                      'mediumorchid',
                      'mediumpurple',
                      'mediumseagreen',
                      'mediumslateblue',
                      'mediumspringgreen',
                      'mediumturquoise',
                      'mediumvioletred',
                      'midnightblue',
                      'mintcream',
                      'mistyrose',
                      'moccasin',
                      'navajowhite',
                      'navy',
                      'navyblue',
                      'oldlace',
                      'olive',
                      'olivedrab',
                      'orange',
                      'orangered',
                      'orchid',
                      'palegoldenrod',
                      'palegreen',
                      'paleturquoise',
                      'palevioletred',
                      'papayawhip',
                      'peachpuff',
                      'peru',
                      'pink',
                      'plum',
                      'powderblue',
                      'purple',
                      'red',
                      'rosybrown',
                      'royalblue',
                      'saddlebrown',
                      'salmon',
                      'sandybrown',
                      'seagreen',
                      'seashell',
                      'sienna',
                      'silver',
                      'skyblue',
                      'slateblue',
                      'slategray',
                      'slategrey',
                      'snow',
                      'springgreen',
                      'steelblue',
                      'tan',
                      'teal',
                      'thistle',
                      'tomato',
                      'turquoise',
                      'violet',
                      'wheat',
                      'white',
                      'whitesmoke',
                      'yellow',
                      'yellowgreen',
                    ],
                  },
                },
              },
              hs_color: {
                name: 'Hue/Sat color',
                description:
                  'Color for the light in hue/sat format. Hue is 0-360 and Sat is 0-100.',
                advanced: true,
                example: '[300, 70]',
                selector: {
                  object: null,
                },
              },
              xy_color: {
                name: 'XY-color',
                description: 'Color for the light in XY-format.',
                advanced: true,
                example: '[0.52, 0.43]',
                selector: {
                  object: null,
                },
              },
              color_temp: {
                name: 'Color temperature',
                description: 'Color temperature for the light in mireds.',
                selector: {
                  color_temp: {
                    min_mireds: 153,
                    max_mireds: 500,
                  },
                },
              },
              kelvin: {
                name: 'Color temperature (Kelvin)',
                description: 'Color temperature for the light in Kelvin.',
                advanced: true,
                selector: {
                  number: {
                    min: 2000,
                    max: 6500,
                    step: 100,
                    unit_of_measurement: 'K',
                  },
                },
              },
              brightness: {
                name: 'Brightness value',
                description:
                  'Number indicating brightness, where 0 turns the light off, 1 is the minimum brightness and 255 is the maximum brightness supported by the light.',
                advanced: true,
                selector: {
                  number: {
                    min: 0,
                    max: 255,
                  },
                },
              },
              brightness_pct: {
                name: 'Brightness',
                description:
                  'Number indicating percentage of full brightness, where 0 turns the light off, 1 is the minimum brightness and 100 is the maximum brightness supported by the light.',
                selector: {
                  number: {
                    min: 0,
                    max: 100,
                    unit_of_measurement: '%',
                  },
                },
              },
              brightness_step: {
                name: 'Brightness step value',
                description: 'Change brightness by an amount.',
                advanced: true,
                selector: {
                  number: {
                    min: -225,
                    max: 255,
                  },
                },
              },
              brightness_step_pct: {
                name: 'Brightness step',
                description: 'Change brightness by a percentage.',
                selector: {
                  number: {
                    min: -100,
                    max: 100,
                    unit_of_measurement: '%',
                  },
                },
              },
              white: {
                name: 'White',
                description:
                  'Set the light to white mode and change its brightness, where 0 turns the light off, 1 is the minimum brightness and 255 is the maximum brightness supported by the light.',
                advanced: true,
                selector: {
                  number: {
                    min: 0,
                    max: 255,
                  },
                },
              },
              profile: {
                name: 'Profile',
                description: 'Name of a light profile to use.',
                advanced: true,
                example: 'relax',
                selector: {
                  text: null,
                },
              },
              flash: {
                name: 'Flash',
                description: 'If the light should flash.',
                advanced: true,
                selector: {
                  select: {
                    options: [
                      {
                        label: 'Long',
                        value: 'long',
                      },
                      {
                        label: 'Short',
                        value: 'short',
                      },
                    ],
                  },
                },
              },
              effect: {
                name: 'Effect',
                description: 'Light effect.',
                selector: {
                  text: null,
                },
              },
            },
            target: {
              entity: {
                domain: 'light',
              },
            },
          },
          turn_off: {
            name: 'Turn off',
            description: 'Turns off one or more lights.',
            fields: {
              transition: {
                name: 'Transition',
                description: 'Duration it takes to get to next state.',
                selector: {
                  number: {
                    min: 0,
                    max: 300,
                    unit_of_measurement: 'seconds',
                  },
                },
              },
              flash: {
                name: 'Flash',
                description: 'If the light should flash.',
                advanced: true,
                selector: {
                  select: {
                    options: [
                      {
                        label: 'Long',
                        value: 'long',
                      },
                      {
                        label: 'Short',
                        value: 'short',
                      },
                    ],
                  },
                },
              },
            },
            target: {
              entity: {
                domain: 'light',
              },
            },
          },
          toggle: {
            name: 'Toggle',
            description:
              'Toggles one or more lights, from on to off, or, off to on, based on their current state.\n',
            fields: {
              transition: {
                name: 'Transition',
                description: 'Duration it takes to get to next state.',
                selector: {
                  number: {
                    min: 0,
                    max: 300,
                    unit_of_measurement: 'seconds',
                  },
                },
              },
              rgb_color: {
                name: 'RGB-color',
                description: 'Color for the light in RGB-format.',
                advanced: true,
                example: '[255, 100, 100]',
                selector: {
                  object: null,
                },
              },
              color_name: {
                name: 'Color name',
                description: 'A human readable color name.',
                advanced: true,
                selector: {
                  select: {
                    options: [
                      'homeassistant',
                      'aliceblue',
                      'antiquewhite',
                      'aqua',
                      'aquamarine',
                      'azure',
                      'beige',
                      'bisque',
                      'blanchedalmond',
                      'blue',
                      'blueviolet',
                      'brown',
                      'burlywood',
                      'cadetblue',
                      'chartreuse',
                      'chocolate',
                      'coral',
                      'cornflowerblue',
                      'cornsilk',
                      'crimson',
                      'cyan',
                      'darkblue',
                      'darkcyan',
                      'darkgoldenrod',
                      'darkgray',
                      'darkgreen',
                      'darkgrey',
                      'darkkhaki',
                      'darkmagenta',
                      'darkolivegreen',
                      'darkorange',
                      'darkorchid',
                      'darkred',
                      'darksalmon',
                      'darkseagreen',
                      'darkslateblue',
                      'darkslategray',
                      'darkslategrey',
                      'darkturquoise',
                      'darkviolet',
                      'deeppink',
                      'deepskyblue',
                      'dimgray',
                      'dimgrey',
                      'dodgerblue',
                      'firebrick',
                      'floralwhite',
                      'forestgreen',
                      'fuchsia',
                      'gainsboro',
                      'ghostwhite',
                      'gold',
                      'goldenrod',
                      'gray',
                      'green',
                      'greenyellow',
                      'grey',
                      'honeydew',
                      'hotpink',
                      'indianred',
                      'indigo',
                      'ivory',
                      'khaki',
                      'lavender',
                      'lavenderblush',
                      'lawngreen',
                      'lemonchiffon',
                      'lightblue',
                      'lightcoral',
                      'lightcyan',
                      'lightgoldenrodyellow',
                      'lightgray',
                      'lightgreen',
                      'lightgrey',
                      'lightpink',
                      'lightsalmon',
                      'lightseagreen',
                      'lightskyblue',
                      'lightslategray',
                      'lightslategrey',
                      'lightsteelblue',
                      'lightyellow',
                      'lime',
                      'limegreen',
                      'linen',
                      'magenta',
                      'maroon',
                      'mediumaquamarine',
                      'mediumblue',
                      'mediumorchid',
                      'mediumpurple',
                      'mediumseagreen',
                      'mediumslateblue',
                      'mediumspringgreen',
                      'mediumturquoise',
                      'mediumvioletred',
                      'midnightblue',
                      'mintcream',
                      'mistyrose',
                      'moccasin',
                      'navajowhite',
                      'navy',
                      'navyblue',
                      'oldlace',
                      'olive',
                      'olivedrab',
                      'orange',
                      'orangered',
                      'orchid',
                      'palegoldenrod',
                      'palegreen',
                      'paleturquoise',
                      'palevioletred',
                      'papayawhip',
                      'peachpuff',
                      'peru',
                      'pink',
                      'plum',
                      'powderblue',
                      'purple',
                      'red',
                      'rosybrown',
                      'royalblue',
                      'saddlebrown',
                      'salmon',
                      'sandybrown',
                      'seagreen',
                      'seashell',
                      'sienna',
                      'silver',
                      'skyblue',
                      'slateblue',
                      'slategray',
                      'slategrey',
                      'snow',
                      'springgreen',
                      'steelblue',
                      'tan',
                      'teal',
                      'thistle',
                      'tomato',
                      'turquoise',
                      'violet',
                      'wheat',
                      'white',
                      'whitesmoke',
                      'yellow',
                      'yellowgreen',
                    ],
                  },
                },
              },
              hs_color: {
                name: 'Hue/Sat color',
                description:
                  'Color for the light in hue/sat format. Hue is 0-360 and Sat is 0-100.',
                advanced: true,
                example: '[300, 70]',
                selector: {
                  object: null,
                },
              },
              xy_color: {
                name: 'XY-color',
                description: 'Color for the light in XY-format.',
                advanced: true,
                example: '[0.52, 0.43]',
                selector: {
                  object: null,
                },
              },
              color_temp: {
                name: 'Color temperature (mireds)',
                description: 'Color temperature for the light in mireds.',
                advanced: true,
                selector: {
                  color_temp: null,
                },
              },
              kelvin: {
                name: 'Color temperature (Kelvin)',
                description: 'Color temperature for the light in Kelvin.',
                advanced: true,
                selector: {
                  number: {
                    min: 2000,
                    max: 6500,
                    step: 100,
                    unit_of_measurement: 'K',
                  },
                },
              },
              white_value: {
                name: 'White level',
                description: 'Number indicating level of white.',
                advanced: true,
                selector: {
                  number: {
                    min: 0,
                    max: 255,
                  },
                },
              },
              brightness: {
                name: 'Brightness value',
                description:
                  'Number indicating brightness, where 0 turns the light off, 1 is the minimum brightness and 255 is the maximum brightness supported by the light.',
                advanced: true,
                selector: {
                  number: {
                    min: 0,
                    max: 255,
                  },
                },
              },
              brightness_pct: {
                name: 'Brightness',
                description:
                  'Number indicating percentage of full brightness, where 0 turns the light off, 1 is the minimum brightness and 100 is the maximum brightness supported by the light.',
                selector: {
                  number: {
                    min: 0,
                    max: 100,
                    unit_of_measurement: '%',
                  },
                },
              },
              profile: {
                name: 'Profile',
                description: 'Name of a light profile to use.',
                advanced: true,
                example: 'relax',
                selector: {
                  text: null,
                },
              },
              flash: {
                name: 'Flash',
                description: 'If the light should flash.',
                advanced: true,
                selector: {
                  select: {
                    options: [
                      {
                        label: 'Long',
                        value: 'long',
                      },
                      {
                        label: 'Short',
                        value: 'short',
                      },
                    ],
                  },
                },
              },
              effect: {
                name: 'Effect',
                description: 'Light effect.',
                selector: {
                  text: null,
                },
              },
            },
            target: {
              entity: {
                domain: 'light',
              },
            },
          },
        },
        input_button: {
          reload: {
            name: '',
            description: '',
            fields: {},
          },
          press: {
            name: 'Press',
            description: 'Press the input button entity.',
            fields: {},
            target: {
              entity: {
                domain: 'input_button',
              },
            },
          },
        },
        input_boolean: {
          reload: {
            name: 'Reload',
            description: 'Reload the input_boolean configuration',
            fields: {},
          },
          turn_on: {
            name: 'Turn on',
            description: 'Turn on an input boolean',
            fields: {},
            target: {
              entity: {
                domain: 'input_boolean',
              },
            },
          },
          turn_off: {
            name: 'Turn off',
            description: 'Turn off an input boolean',
            fields: {},
            target: {
              entity: {
                domain: 'input_boolean',
              },
            },
          },
          toggle: {
            name: 'Toggle',
            description: 'Toggle an input boolean',
            fields: {},
            target: {
              entity: {
                domain: 'input_boolean',
              },
            },
          },
        },
        homekit: {
          reset_accessory: {
            name: 'Reset accessory',
            description: 'Reset a HomeKit accessory',
            fields: {},
            target: {
              entity: {},
            },
          },
          unpair: {
            name: 'Unpair an accessory or bridge',
            description:
              'Forcefully remove all pairings from an accessory to allow re-pairing. Use this service if the accessory is no longer responsive, and you want to avoid deleting and re-adding the entry. Room locations, and accessory preferences will be lost.',
            fields: {},
            target: {
              device: {
                integration: 'homekit',
              },
            },
          },
          reload: {
            name: 'Reload',
            description: 'Reload homekit and re-process YAML configuration',
            fields: {},
          },
        },
        tts: {
          google_translate_say: {
            name: 'Say an TTS message with google_translate',
            description:
              'Say something using text-to-speech on a media player with google_translate.',
            fields: {
              entity_id: {
                name: 'Entity',
                description: 'Name(s) of media player entities.',
                required: true,
                selector: {
                  entity: {
                    domain: 'media_player',
                  },
                },
              },
              message: {
                name: 'Message',
                description: 'Text to speak on devices.',
                example: 'My name is hanna',
                required: true,
                selector: {
                  text: null,
                },
              },
              cache: {
                name: 'Cache',
                description: 'Control file cache of this message.',
                default: false,
                selector: {
                  boolean: null,
                },
              },
              language: {
                name: 'Language',
                description: 'Language to use for speech generation.',
                example: 'ru',
                selector: {
                  text: null,
                },
              },
              options: {
                name: 'Options',
                description:
                  'A dictionary containing platform-specific options. Optional depending on the platform.',
                advanced: true,
                example: 'platform specific',
                selector: {
                  object: null,
                },
              },
            },
          },
          clear_cache: {
            name: 'Clear TTS cache',
            description: 'Remove all text-to-speech cache files and RAM cache.',
            fields: {},
          },
        },
        lifx: {
          set_state: {
            name: 'Set State',
            description:
              'Set a color/brightness and possibly turn the light on/off.',
            fields: {
              infrared: {
                name: 'infrared',
                description:
                  'Automatic infrared level when light brightness is low.',
                selector: {
                  number: {
                    min: 0,
                    max: 255,
                  },
                },
              },
              zones: {
                name: 'Zones',
                description:
                  'List of zone numbers to affect (8 per LIFX Z, starts at 0).',
                example: '[0,5]',
                selector: {
                  object: null,
                },
              },
              transition: {
                name: 'Transition',
                description: 'Duration it takes to get to the final state.',
                selector: {
                  number: {
                    min: 0,
                    max: 3600,
                    unit_of_measurement: 'seconds',
                  },
                },
              },
              power: {
                name: 'Power',
                description:
                  'Turn the light on or off. Leave out to keep the power as it is.',
                selector: {
                  boolean: null,
                },
              },
            },
            target: {
              entity: {
                integration: 'lifx',
                domain: 'light',
              },
            },
          },
          effect_pulse: {
            name: 'Pulse effect',
            description: 'Run a flash effect by changing to a color and back.',
            fields: {
              mode: {
                name: 'Mode',
                description: 'Decides how colors are changed.',
                selector: {
                  select: {
                    options: ['blink', 'breathe', 'ping', 'strobe', 'solid'],
                  },
                },
              },
              brightness: {
                name: 'Brightness',
                description:
                  'Number indicating brightness of the temporary color.',
                selector: {
                  number: {
                    min: 0,
                    max: 255,
                  },
                },
              },
              color_name: {
                name: 'Color name',
                description: 'A human readable color name.',
                example: 'red',
                selector: {
                  text: null,
                },
              },
              rgb_color: {
                name: 'RGB color',
                description: 'The temporary color in RGB-format.',
                example: '[255, 100, 100]',
                selector: {
                  object: null,
                },
              },
              period: {
                name: 'Period',
                description: 'Duration of the effect.',
                default: 1,
                selector: {
                  number: {
                    min: 0.05,
                    max: 60,
                    step: 0.05,
                    unit_of_measurement: 'seconds',
                  },
                },
              },
              cycles: {
                name: 'Cycles',
                description: 'Number of times the effect should run.',
                default: 1,
                selector: {
                  number: {
                    min: 1,
                    max: 10000,
                  },
                },
              },
              power_on: {
                name: 'Power on',
                description:
                  'Powered off lights are temporarily turned on during the effect.',
                default: true,
                selector: {
                  boolean: null,
                },
              },
            },
            target: {
              entity: {
                integration: 'lifx',
                domain: 'light',
              },
            },
          },
          effect_colorloop: {
            name: 'Color loop effect',
            description: 'Run an effect with looping colors.',
            fields: {
              brightness: {
                name: 'Brightness',
                description:
                  'Number indicating brightness of the effect. Leave this out to maintain the current brightness of each participating light.',
                selector: {
                  number: {
                    min: 0,
                    max: 255,
                  },
                },
              },
              period: {
                name: 'Period',
                description: 'Duration between color changes.',
                default: 60,
                selector: {
                  number: {
                    min: 0.05,
                    max: 3600,
                    step: 0.05,
                    unit_of_measurement: 'seconds',
                  },
                },
              },
              change: {
                name: 'Change',
                description:
                  'Hue movement per period, in degrees on a color wheel.',
                default: 20,
                selector: {
                  number: {
                    min: 0,
                    max: 360,
                    unit_of_measurement: '°',
                  },
                },
              },
              spread: {
                name: 'Spread',
                description:
                  'Maximum hue difference between participating lights, in degrees on a color wheel.',
                default: 30,
                selector: {
                  number: {
                    min: 0,
                    max: 360,
                    unit_of_measurement: '°',
                  },
                },
              },
              power_on: {
                name: 'Power on',
                description:
                  'Powered off lights are temporarily turned on during the effect.',
                default: true,
                selector: {
                  boolean: null,
                },
              },
            },
            target: {
              entity: {
                integration: 'lifx',
                domain: 'light',
              },
            },
          },
          effect_stop: {
            name: 'Stop effect',
            description: 'Stop a running effect.',
            fields: {},
            target: {
              entity: {
                integration: 'lifx',
                domain: 'light',
              },
            },
          },
        },
        notify: {
          persistent_notification: {
            name: 'Send a persistent notification',
            description:
              'Sends a notification that is visible in the front-end.',
            fields: {
              message: {
                name: 'Message',
                description: 'Message body of the notification.',
                required: true,
                example: 'The garage door has been open for 10 minutes.',
                selector: {
                  text: null,
                },
              },
              title: {
                name: 'Title',
                description: 'Title for your notification.',
                example: 'Your Garage Door Friend',
                selector: {
                  text: null,
                },
              },
            },
          },
          mobile_app_marks_iphone: {
            name: 'Send a notification via mobile_app_marks_iphone',
            description:
              'Sends a notification message using the mobile_app_marks_iphone integration.',
            fields: {
              message: {
                name: 'Message',
                description: 'Message body of the notification.',
                required: true,
                example: 'The garage door has been open for 10 minutes.',
                selector: {
                  text: null,
                },
              },
              title: {
                name: 'Title',
                description: 'Title for your notification.',
                example: 'Your Garage Door Friend',
                selector: {
                  text: null,
                },
              },
              target: {
                name: 'Target',
                description:
                  'An array of targets to send the notification to. Optional depending on the platform.',
                example: 'platform specific',
                selector: {
                  object: null,
                },
              },
              data: {
                name: 'Data',
                description:
                  'Extended information for notification. Optional depending on the platform.',
                example: 'platform specific',
                selector: {
                  object: null,
                },
              },
            },
          },
          mobile_app_mark_lycks_ipad: {
            name: 'Send a notification via mobile_app_mark_lycks_ipad',
            description:
              'Sends a notification message using the mobile_app_mark_lycks_ipad integration.',
            fields: {
              message: {
                name: 'Message',
                description: 'Message body of the notification.',
                required: true,
                example: 'The garage door has been open for 10 minutes.',
                selector: {
                  text: null,
                },
              },
              title: {
                name: 'Title',
                description: 'Title for your notification.',
                example: 'Your Garage Door Friend',
                selector: {
                  text: null,
                },
              },
              target: {
                name: 'Target',
                description:
                  'An array of targets to send the notification to. Optional depending on the platform.',
                example: 'platform specific',
                selector: {
                  object: null,
                },
              },
              data: {
                name: 'Data',
                description:
                  'Extended information for notification. Optional depending on the platform.',
                example: 'platform specific',
                selector: {
                  object: null,
                },
              },
            },
          },
          notify: {
            name: 'Send a notification with notify',
            description:
              'Sends a notification message using the notify service.',
            fields: {
              message: {
                name: 'Message',
                description: 'Message body of the notification.',
                required: true,
                example: 'The garage door has been open for 10 minutes.',
                selector: {
                  text: null,
                },
              },
              title: {
                name: 'Title',
                description: 'Title for your notification.',
                example: 'Your Garage Door Friend',
                selector: {
                  text: null,
                },
              },
              target: {
                name: 'Target',
                description:
                  'An array of targets to send the notification to. Optional depending on the platform.',
                example: 'platform specific',
                selector: {
                  object: null,
                },
              },
              data: {
                name: 'Data',
                description:
                  'Extended information for notification. Optional depending on the platform.',
                example: 'platform specific',
                selector: {
                  object: null,
                },
              },
            },
          },
        },
        device_tracker: {
          see: {
            name: 'See',
            description: 'Control tracked device.',
            fields: {
              mac: {
                name: 'MAC address',
                description: 'MAC address of device',
                example: 'FF:FF:FF:FF:FF:FF',
                selector: {
                  text: null,
                },
              },
              dev_id: {
                name: 'Device ID',
                description: 'Id of device (find id in known_devices.yaml).',
                example: 'phonedave',
                selector: {
                  text: null,
                },
              },
              host_name: {
                name: 'Host name',
                description: 'Hostname of device',
                example: 'Dave',
                selector: {
                  text: null,
                },
              },
              location_name: {
                name: 'Location name',
                description:
                  'Name of location where device is located (not_home is away).',
                example: 'home',
                selector: {
                  text: null,
                },
              },
              gps: {
                name: 'GPS coordinates',
                description:
                  'GPS coordinates where device is located (latitude, longitude).',
                example: '[51.509802, -0.086692]',
                selector: {
                  object: null,
                },
              },
              gps_accuracy: {
                name: 'GPS accuracy',
                description: 'Accuracy of GPS coordinates.',
                selector: {
                  number: {
                    min: 1,
                    max: 100,
                    unit_of_measurement: '%',
                  },
                },
              },
              battery: {
                name: 'Battery level',
                description: 'Battery level of device.',
                selector: {
                  number: {
                    min: 0,
                    max: 100,
                    unit_of_measurement: '%',
                  },
                },
              },
            },
          },
        },
        hue: {
          hue_activate_scene: {
            name: 'Activate scene',
            description: 'Activate a hue scene stored in the hue hub.',
            fields: {
              group_name: {
                name: 'Group',
                description: 'Name of hue group/room from the hue app.',
                example: 'Living Room',
                selector: {
                  text: null,
                },
              },
              scene_name: {
                name: 'Scene',
                description: 'Name of hue scene from the hue app.',
                example: 'Energize',
                selector: {
                  text: null,
                },
              },
              dynamic: {
                name: 'Dynamic',
                description:
                  'Enable dynamic mode of the scene (V2 bridges and supported scenes only).',
                selector: {
                  boolean: null,
                },
              },
            },
          },
          activate_scene: {
            name: 'Activate Hue Scene',
            description:
              'Activate a Hue scene with more control over the options.',
            fields: {
              transition: {
                name: 'Transition',
                description:
                  'Transition duration it takes to bring devices to the state defined in the scene.',
                selector: {
                  number: {
                    min: 0,
                    max: 300,
                    unit_of_measurement: 'seconds',
                  },
                },
              },
              dynamic: {
                name: 'Dynamic',
                description: 'Enable dynamic mode of the scene.',
                selector: {
                  boolean: null,
                },
              },
              speed: {
                name: 'Speed',
                description: 'Speed of dynamic palette for this scene',
                advanced: true,
                selector: {
                  number: {
                    min: 0,
                    max: 100,
                  },
                },
              },
              brightness: {
                name: 'Brightness',
                description: 'Set brightness for the scene.',
                advanced: true,
                selector: {
                  number: {
                    min: 0,
                    max: 255,
                  },
                },
              },
            },
            target: {
              entity: {
                domain: 'scene',
                integration: 'hue',
              },
            },
          },
        },
        switch: {
          turn_off: {
            name: 'Turn off',
            description: 'Turn a switch off',
            fields: {},
            target: {
              entity: {
                domain: 'switch',
              },
            },
          },
          turn_on: {
            name: 'Turn on',
            description: 'Turn a switch on',
            fields: {},
            target: {
              entity: {
                domain: 'switch',
              },
            },
          },
          toggle: {
            name: 'Toggle',
            description: 'Toggles a switch state',
            fields: {},
            target: {
              entity: {
                domain: 'switch',
              },
            },
          },
        },
        climate: {
          turn_on: {
            name: 'Turn on',
            description: 'Turn climate device on.',
            fields: {},
            target: {
              entity: {
                domain: 'climate',
              },
            },
          },
          turn_off: {
            name: 'Turn off',
            description: 'Turn climate device off.',
            fields: {},
            target: {
              entity: {
                domain: 'climate',
              },
            },
          },
          set_hvac_mode: {
            name: 'Set HVAC mode',
            description: 'Set HVAC operation mode for climate device.',
            fields: {
              hvac_mode: {
                name: 'HVAC mode',
                description: 'New value of operation mode.',
                selector: {
                  select: {
                    options: [
                      {
                        label: 'Off',
                        value: 'off',
                      },
                      {
                        label: 'Auto',
                        value: 'auto',
                      },
                      {
                        label: 'Cool',
                        value: 'cool',
                      },
                      {
                        label: 'Dry',
                        value: 'dry',
                      },
                      {
                        label: 'Fan Only',
                        value: 'fan_only',
                      },
                      {
                        label: 'Heat/Cool',
                        value: 'heat_cool',
                      },
                      {
                        label: 'Heat',
                        value: 'heat',
                      },
                    ],
                  },
                },
              },
            },
            target: {
              entity: {
                domain: 'climate',
              },
            },
          },
          set_preset_mode: {
            name: 'Set preset mode',
            description: 'Set preset mode for climate device.',
            fields: {
              preset_mode: {
                name: 'Preset mode',
                description: 'New value of preset mode.',
                required: true,
                example: 'away',
                selector: {
                  text: null,
                },
              },
            },
            target: {
              entity: {
                domain: 'climate',
              },
            },
          },
          set_aux_heat: {
            name: 'Turn on/off auxiliary heater',
            description: 'Turn auxiliary heater on/off for climate device.',
            fields: {
              aux_heat: {
                name: 'Auxiliary heating',
                description: 'New value of auxiliary heater.',
                required: true,
                selector: {
                  boolean: null,
                },
              },
            },
            target: {
              entity: {
                domain: 'climate',
              },
            },
          },
          set_temperature: {
            name: 'Set temperature',
            description: 'Set target temperature of climate device.',
            fields: {
              temperature: {
                name: 'Temperature',
                description: 'New target temperature for HVAC.',
                selector: {
                  number: {
                    min: 0,
                    max: 250,
                    step: 0.1,
                    mode: 'box',
                  },
                },
              },
              target_temp_high: {
                name: 'Target temperature high',
                description: 'New target high temperature for HVAC.',
                advanced: true,
                selector: {
                  number: {
                    min: 0,
                    max: 250,
                    step: 0.1,
                    mode: 'box',
                  },
                },
              },
              target_temp_low: {
                name: 'Target temperature low',
                description: 'New target low temperature for HVAC.',
                advanced: true,
                selector: {
                  number: {
                    min: 0,
                    max: 250,
                    step: 0.1,
                    mode: 'box',
                  },
                },
              },
              hvac_mode: {
                name: 'HVAC mode',
                description: 'HVAC operation mode to set temperature to.',
                selector: {
                  select: {
                    options: [
                      {
                        label: 'Off',
                        value: 'off',
                      },
                      {
                        label: 'Auto',
                        value: 'auto',
                      },
                      {
                        label: 'Cool',
                        value: 'cool',
                      },
                      {
                        label: 'Dry',
                        value: 'dry',
                      },
                      {
                        label: 'Fan Only',
                        value: 'fan_only',
                      },
                      {
                        label: 'Heat/Cool',
                        value: 'heat_cool',
                      },
                      {
                        label: 'Heat',
                        value: 'heat',
                      },
                    ],
                  },
                },
              },
            },
            target: {
              entity: {
                domain: 'climate',
              },
            },
          },
          set_humidity: {
            name: 'Set target humidity',
            description: 'Set target humidity of climate device.',
            fields: {
              humidity: {
                name: 'Humidity',
                description: 'New target humidity for climate device.',
                required: true,
                selector: {
                  number: {
                    min: 30,
                    max: 99,
                    unit_of_measurement: '%',
                  },
                },
              },
            },
            target: {
              entity: {
                domain: 'climate',
              },
            },
          },
          set_fan_mode: {
            name: 'Set fan mode',
            description: 'Set fan operation for climate device.',
            fields: {
              fan_mode: {
                name: 'Fan mode',
                description: 'New value of fan mode.',
                required: true,
                example: 'low',
                selector: {
                  text: null,
                },
              },
            },
            target: {
              entity: {
                domain: 'climate',
              },
            },
          },
          set_swing_mode: {
            name: 'Set swing mode',
            description: 'Set swing operation for climate device.',
            fields: {
              swing_mode: {
                name: 'Swing mode',
                description: 'New value of swing mode.',
                required: true,
                example: 'horizontal',
                selector: {
                  text: null,
                },
              },
            },
            target: {
              entity: {
                domain: 'climate',
              },
            },
          },
        },
        humidifier: {
          turn_on: {
            name: 'Turn on',
            description: 'Turn humidifier device on.',
            fields: {},
            target: {
              entity: {
                domain: 'humidifier',
              },
            },
          },
          turn_off: {
            name: 'Turn off',
            description: 'Turn humidifier device off.',
            fields: {},
            target: {
              entity: {
                domain: 'humidifier',
              },
            },
          },
          toggle: {
            name: 'Toggle',
            description: 'Toggles a humidifier device.',
            fields: {},
            target: {
              entity: {
                domain: 'humidifier',
              },
            },
          },
          set_mode: {
            name: 'Set mode',
            description: 'Set mode for humidifier device.',
            fields: {
              mode: {
                description: 'New mode',
                required: true,
                example: 'away',
                selector: {
                  text: null,
                },
              },
            },
            target: {
              entity: {
                domain: 'humidifier',
              },
            },
          },
          set_humidity: {
            name: 'Set humidity',
            description: 'Set target humidity of humidifier device.',
            fields: {
              humidity: {
                description: 'New target humidity for humidifier device.',
                required: true,
                selector: {
                  number: {
                    min: 0,
                    max: 100,
                    unit_of_measurement: '%',
                  },
                },
              },
            },
            target: {
              entity: {
                domain: 'humidifier',
              },
            },
          },
        },
        ecobee: {
          create_vacation: {
            name: 'Create vacation',
            description:
              'Create a vacation on the selected thermostat. Note: start/end date and time must all be specified together for these parameters to have an effect. If start/end date and time are not specified, the vacation will start immediately and last 14 days (unless deleted earlier).',
            fields: {
              entity_id: {
                name: 'Entity',
                description:
                  'ecobee thermostat on which to create the vacation.',
                required: true,
                selector: {
                  entity: {
                    integration: 'ecobee',
                    domain: 'climate',
                  },
                },
              },
              vacation_name: {
                name: 'Vacation name',
                description:
                  'Name of the vacation to create; must be unique on the thermostat.',
                required: true,
                example: 'Skiing',
                selector: {
                  text: null,
                },
              },
              cool_temp: {
                name: 'Cool temperature',
                description: 'Cooling temperature during the vacation.',
                required: true,
                selector: {
                  number: {
                    min: 7,
                    max: 95,
                    step: 0.5,
                    unit_of_measurement: '°',
                  },
                },
              },
              heat_temp: {
                name: 'Heat temperature',
                description: 'Heating temperature during the vacation.',
                required: true,
                selector: {
                  number: {
                    min: 7,
                    max: 95,
                    step: 0.5,
                    unit_of_measurement: '°',
                  },
                },
              },
              start_date: {
                name: 'Start date',
                description:
                  'Date the vacation starts in the YYYY-MM-DD format (optional, immediately if not provided along with start_time, end_date, and end_time).',
                example: '2019-03-15',
                selector: {
                  text: null,
                },
              },
              start_time: {
                name: 'start time',
                description:
                  'Time the vacation starts, in the local time of the thermostat, in the 24-hour format "HH:MM:SS"',
                example: '20:00:00',
                selector: {
                  time: null,
                },
              },
              end_date: {
                name: 'End date',
                description:
                  'Date the vacation ends in the YYYY-MM-DD format (optional, 14 days from now if not provided along with start_date, start_time, and end_time).',
                example: '2019-03-20',
                selector: {
                  text: null,
                },
              },
              end_time: {
                name: 'End time',
                description:
                  'Time the vacation ends, in the local time of the thermostat, in the 24-hour format "HH:MM:SS"',
                example: '20:00:00',
                selector: {
                  time: null,
                },
              },
              fan_mode: {
                name: 'Fan mode',
                description: 'Fan mode of the thermostat during the vacation.',
                default: 'auto',
                selector: {
                  select: {
                    options: ['on', 'auto'],
                  },
                },
              },
              fan_min_on_time: {
                name: 'Fan minimum on time',
                description:
                  'Minimum number of minutes to run the fan each hour (0 to 60) during the vacation.',
                default: 0,
                selector: {
                  number: {
                    min: 0,
                    max: 60,
                    unit_of_measurement: 'minutes',
                  },
                },
              },
            },
          },
          delete_vacation: {
            name: 'Delete vacation',
            description: 'Delete a vacation on the selected thermostat.',
            fields: {
              entity_id: {
                name: 'Entity',
                description:
                  'ecobee thermostat on which to delete the vacation.',
                required: true,
                example: 'climate.kitchen',
                selector: {
                  entity: {
                    integration: 'ecobee',
                    domain: 'climate',
                  },
                },
              },
              vacation_name: {
                name: 'Vacation name',
                description: 'Name of the vacation to delete.',
                required: true,
                example: 'Skiing',
                selector: {
                  text: null,
                },
              },
            },
          },
          set_fan_min_on_time: {
            name: 'Set fan minimum on time',
            description: 'Set the minimum fan on time.',
            fields: {
              entity_id: {
                name: 'Entity',
                description: 'Name(s) of entities to change.',
                selector: {
                  entity: {
                    integration: 'ecobee',
                    domain: 'climate',
                  },
                },
              },
              fan_min_on_time: {
                name: 'Fan minimum on time',
                description: 'New value of fan min on time.',
                required: true,
                selector: {
                  number: {
                    min: 0,
                    max: 60,
                    unit_of_measurement: 'minutes',
                  },
                },
              },
            },
          },
          resume_program: {
            name: 'Resume program',
            description: 'Resume the programmed schedule.',
            fields: {
              entity_id: {
                name: 'Entity',
                description: 'Name(s) of entities to change.',
                selector: {
                  entity: {
                    integration: 'ecobee',
                    domain: 'climate',
                  },
                },
              },
              resume_all: {
                name: 'Resume all',
                description:
                  'Resume all events and return to the scheduled program.',
                default: false,
                selector: {
                  boolean: null,
                },
              },
            },
          },
          set_dst_mode: {
            name: 'Set Daylight savings time mode',
            description: 'Enable/disable automatic daylight savings time.',
            fields: {
              dst_enabled: {
                name: 'Daylight savings time enabled',
                description: 'Enable automatic daylight savings time.',
                required: true,
                selector: {
                  boolean: null,
                },
              },
            },
            target: {
              entity: {
                integration: 'ecobee',
                domain: 'climate',
              },
            },
          },
          set_mic_mode: {
            name: 'Set mic mode',
            description: 'Enable/disable Alexa mic (only for Ecobee 4).',
            fields: {
              mic_enabled: {
                name: 'Mic enabled',
                description: 'Enable Alexa mic.',
                required: true,
                selector: {
                  boolean: null,
                },
              },
            },
            target: {
              entity: {
                integration: 'ecobee',
                domain: 'climate',
              },
            },
          },
          set_occupancy_modes: {
            name: 'Set occupancy modes',
            description: 'Enable/disable Smart Home/Away and Follow Me modes.',
            fields: {
              auto_away: {
                name: 'Auto away',
                description: 'Enable Smart Home/Away mode.',
                selector: {
                  boolean: null,
                },
              },
              follow_me: {
                name: 'Follow me',
                description: 'Enable Follow Me mode.',
                selector: {
                  boolean: null,
                },
              },
            },
            target: {
              entity: {
                integration: 'ecobee',
                domain: 'climate',
              },
            },
          },
        },
        vacuum: {
          turn_on: {
            name: 'Turn on',
            description: 'Start a new cleaning task.',
            fields: {},
            target: {
              entity: {
                domain: 'vacuum',
              },
            },
          },
          turn_off: {
            name: 'Turn off',
            description: 'Stop the current cleaning task and return to home.',
            fields: {},
            target: {
              entity: {
                domain: 'vacuum',
              },
            },
          },
          toggle: {
            name: '',
            description: '',
            fields: {},
          },
          start_pause: {
            name: 'Start/Pause',
            description: 'Start, pause, or resume the cleaning task.',
            fields: {},
            target: {
              entity: {
                domain: 'vacuum',
              },
            },
          },
          start: {
            name: 'Start',
            description: 'Start or resume the cleaning task.',
            fields: {},
            target: {
              entity: {
                domain: 'vacuum',
              },
            },
          },
          pause: {
            name: 'Pause',
            description: 'Pause the cleaning task.',
            fields: {},
            target: {
              entity: {
                domain: 'vacuum',
              },
            },
          },
          return_to_base: {
            name: 'Return to base',
            description: 'Tell the vacuum cleaner to return to its dock.',
            fields: {},
            target: {
              entity: {
                domain: 'vacuum',
              },
            },
          },
          clean_spot: {
            name: 'Clean spot',
            description: 'Tell the vacuum cleaner to do a spot clean-up.',
            fields: {},
            target: {
              entity: {
                domain: 'vacuum',
              },
            },
          },
          locate: {
            name: 'Locate',
            description: 'Locate the vacuum cleaner robot.',
            fields: {},
            target: {
              entity: {
                domain: 'vacuum',
              },
            },
          },
          stop: {
            name: 'Stop',
            description: 'Stop the current cleaning task.',
            fields: {},
            target: {
              entity: {
                domain: 'vacuum',
              },
            },
          },
          set_fan_speed: {
            name: 'Set fan speed',
            description: 'Set the fan speed of the vacuum cleaner.',
            fields: {
              fan_speed: {
                name: 'Fan speed',
                description:
                  "Platform dependent vacuum cleaner fan speed, with speed steps, like 'medium' or by percentage, between 0 and 100.",
                required: true,
                example: 'low',
                selector: {
                  text: null,
                },
              },
            },
            target: {
              entity: {
                domain: 'vacuum',
              },
            },
          },
          send_command: {
            name: 'Send command',
            description: 'Send a raw command to the vacuum cleaner.',
            fields: {
              command: {
                name: 'Command',
                description: 'Command to execute.',
                required: true,
                example: 'set_dnd_timer',
                selector: {
                  text: null,
                },
              },
              params: {
                name: 'Parameters',
                description: 'Parameters for the command.',
                example: '{ "key": "value" }',
                selector: {
                  object: null,
                },
              },
            },
            target: {
              entity: {
                domain: 'vacuum',
              },
            },
          },
        },
        select: {
          select_option: {
            name: 'Select',
            description: 'Select an option of an select entity.',
            fields: {
              option: {
                name: 'Option',
                description: 'Option to be selected.',
                required: true,
                example: '"Item A"',
                selector: {
                  text: null,
                },
              },
            },
            target: {
              entity: {
                domain: 'select',
              },
            },
          },
        },
        button: {
          press: {
            name: 'Press',
            description: 'Press the button entity.',
            fields: {},
            target: {
              entity: {
                domain: 'button',
              },
            },
          },
        },
        number: {
          set_value: {
            name: 'Set',
            description: 'Set the value of a Number entity.',
            fields: {
              value: {
                name: 'Value',
                description: 'The target value the entity should be set to.',
                example: 42,
                selector: {
                  text: null,
                },
              },
            },
            target: {
              entity: {
                domain: 'number',
              },
            },
          },
        },
        camera: {
          enable_motion_detection: {
            name: 'Enable motion detection',
            description: 'Enable the motion detection in a camera.',
            fields: {},
            target: {
              entity: {
                domain: 'camera',
              },
            },
          },
          disable_motion_detection: {
            name: 'Disable motion detection',
            description: 'Disable the motion detection in a camera.',
            fields: {},
            target: {
              entity: {
                domain: 'camera',
              },
            },
          },
          turn_off: {
            name: 'Turn off',
            description: 'Turn off camera.',
            fields: {},
            target: {
              entity: {
                domain: 'camera',
              },
            },
          },
          turn_on: {
            name: 'Turn on',
            description: 'Turn on camera.',
            fields: {},
            target: {
              entity: {
                domain: 'camera',
              },
            },
          },
          snapshot: {
            name: 'Take snapshot',
            description: 'Take a snapshot from a camera.',
            fields: {
              filename: {
                name: 'Filename',
                description: 'Template of a Filename. Variable is entity_id.',
                required: true,
                example: '/tmp/snapshot_{{ entity_id.name }}.jpg',
                selector: {
                  text: null,
                },
              },
            },
            target: {
              entity: {
                domain: 'camera',
              },
            },
          },
          play_stream: {
            name: 'Play stream',
            description: 'Play camera stream on supported media player.',
            fields: {
              media_player: {
                name: 'Media Player',
                description: 'Name(s) of media player to stream to.',
                required: true,
                selector: {
                  entity: {
                    domain: 'media_player',
                  },
                },
              },
              format: {
                name: 'Format',
                description: 'Stream format supported by media player.',
                default: 'hls',
                selector: {
                  select: {
                    options: ['hls'],
                  },
                },
              },
            },
            target: {
              entity: {
                domain: 'camera',
              },
            },
          },
          record: {
            name: 'Record',
            description: 'Record live camera feed.',
            fields: {
              filename: {
                name: 'Filename',
                description:
                  'Template of a Filename. Variable is entity_id. Must be mp4.',
                required: true,
                example: '/tmp/snapshot_{{ entity_id.name }}.mp4',
                selector: {
                  text: null,
                },
              },
              duration: {
                name: 'Duration',
                description: 'Target recording length.',
                default: 30,
                selector: {
                  number: {
                    min: 1,
                    max: 3600,
                    unit_of_measurement: 'seconds',
                  },
                },
              },
              lookback: {
                name: 'Lookback',
                description:
                  'Target lookback period to include in addition to duration. Only available if there is currently an active HLS stream.',
                default: 0,
                selector: {
                  number: {
                    min: 0,
                    max: 300,
                    unit_of_measurement: 'seconds',
                  },
                },
              },
            },
            target: {
              entity: {
                domain: 'camera',
              },
            },
          },
        },
        deebot: {
          refresh: {
            name: 'Manually refresh',
            description: 'Manually request a refresh',
            fields: {
              part: {
                name: 'Part',
                description: 'Which part should be refreshed?',
                required: true,
                advanced: false,
                example: 'Status',
                default: 'Status',
                selector: {
                  select: {
                    options: [
                      'Status',
                      'Error',
                      'Fan speed',
                      'Clean logs',
                      'Water',
                      'Battery',
                      'Stats',
                      'Life spans',
                      'Rooms',
                      'Map',
                    ],
                  },
                },
              },
            },
            target: {
              entity: {
                integration: 'deebot',
                domain: 'vacuum',
              },
            },
          },
        },
      },
    },
    _pnl: {
      state: {
        lovelace: {
          component_name: 'lovelace',
          icon: null,
          title: null,
          config: {
            mode: 'storage',
          },
          url_path: 'lovelace',
          require_admin: false,
        },
        config: {
          component_name: 'config',
          icon: 'hass:cog',
          title: 'config',
          config: null,
          url_path: 'config',
          require_admin: true,
        },
        hassio: {
          component_name: 'custom',
          icon: null,
          title: null,
          config: {
            _panel_custom: {
              name: 'hassio-main',
              embed_iframe: true,
              trust_external: false,
              js_url: '/api/hassio/app/entrypoint.js',
            },
          },
          url_path: 'hassio',
          require_admin: true,
        },
        profile: {
          component_name: 'profile',
          icon: null,
          title: null,
          config: null,
          url_path: 'profile',
          require_admin: false,
        },
        'developer-tools': {
          component_name: 'developer-tools',
          icon: 'hass:hammer',
          title: 'developer_tools',
          config: null,
          url_path: 'developer-tools',
          require_admin: true,
        },
        core_ssh: {
          component_name: 'custom',
          icon: 'mdi:console',
          title: 'Terminal',
          config: {
            ingress: 'core_ssh',
            _panel_custom: {
              name: 'hassio-main',
              embed_iframe: true,
              trust_external: false,
              js_url: '/api/hassio/app/entrypoint.js',
            },
          },
          url_path: 'core_ssh',
          require_admin: true,
        },
        map: {
          component_name: 'map',
          icon: 'hass:tooltip-account',
          title: 'map',
          config: null,
          url_path: 'map',
          require_admin: false,
        },
        history: {
          component_name: 'history',
          icon: 'hass:chart-box',
          title: 'history',
          config: null,
          url_path: 'history',
          require_admin: false,
        },
        _my_redirect: {
          component_name: 'my',
          icon: null,
          title: null,
          config: null,
          url_path: '_my_redirect',
          require_admin: false,
        },
        logbook: {
          component_name: 'logbook',
          icon: 'hass:format-list-bulleted-type',
          title: 'logbook',
          config: null,
          url_path: 'logbook',
          require_admin: false,
        },
        'media-browser': {
          component_name: 'media-browser',
          icon: 'hass:play-box-multiple',
          title: 'media_browser',
          config: null,
          url_path: 'media-browser',
          require_admin: false,
        },
        'react-panel-prod': {
          component_name: 'custom',
          icon: 'mdi:home-assistant',
          title: 'React Panel',
          config: {
            name: 'World',
            _panel_custom: {
              name: 'react-panel',
              embed_iframe: true,
              trust_external: false,
              js_url: '/local/react-panel/assets/index.js',
            },
          },
          url_path: 'react-panel-prod',
          require_admin: false,
        },
        energy: {
          component_name: 'energy',
          icon: 'mdi:lightning-bolt',
          title: 'energy',
          config: null,
          url_path: 'energy',
          require_admin: false,
        },
        hacs: {
          component_name: 'custom',
          icon: 'hacs:hacs',
          title: 'HACS',
          config: {
            _panel_custom: {
              name: 'hacs-frontend',
              embed_iframe: true,
              trust_external: false,
              js_url:
                '/hacsfiles/frontend/entrypoint.js?hacstag=20220522162559',
            },
          },
          url_path: 'hacs',
          require_admin: true,
        },
      },
    },
    _thm: {
      state: {
        themes: {},
        default_theme: 'default',
        default_dark_theme: null,
      },
    },
    _usr: {
      state: {
        id: 'fefe8d8a7bec4ab9ad5ca86ac9734a4c',
        name: 'Mark',
        is_owner: true,
        is_admin: true,
        credentials: [
          {
            auth_provider_type: 'homeassistant',
            auth_provider_id: null,
          },
        ],
        mfa_modules: [
          {
            id: 'totp',
            name: 'Authenticator app',
            enabled: false,
          },
        ],
      },
    },
    '_frontendUserData-core': {
      state: {
        showAdvanced: true,
      },
    },
    '_frontendUserData-core-optimistic': {
      state: {
        showAdvanced: true,
      },
    },
    _ntf: {
      state: [
        {
          notification_id: 'config_entry_discovery',
          message:
            'We have discovered new devices on your network. [Check it out](/config/integrations).',
          status: 'unread',
          title: 'New devices discovered',
          created_at: '2022-05-30T15:05:32.554249+00:00',
        },
      ],
    },
  },
  connected: true,
  states: {
    'person.mark_lyck': {
      entity_id: 'person.mark_lyck',
      state: 'home',
      attributes: {
        editable: false,
        id: 'mark_lyck',
        latitude: 38.9293212890625,
        longitude: -77.22917283168587,
        gps_accuracy: 35,
        source: 'device_tracker.mark_lycks_ipad',
        user_id: 'fefe8d8a7bec4ab9ad5ca86ac9734a4c',
        entity_picture:
          '/api/image/serve/40a12e595b7c321dcbc108342b96d3d9/512x512',
        friendly_name: 'Mark',
      },
      context: {
        id: '0181157ff7832261b301f3203b6b3c0d',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-30T15:05:06.362Z',
      last_updated: '2022-05-30T15:05:16.931Z',
    },
    'person.grace_park': {
      entity_id: 'person.grace_park',
      state: 'unknown',
      attributes: {
        editable: false,
        id: 'grace_park',
        user_id: '7d0ed8af5c404c4c86aef565d7dd007a',
        friendly_name: 'Grace',
      },
      context: {
        id: '0181157ff783762f234346a695466775',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-30T15:05:06.364Z',
      last_updated: '2022-05-30T15:05:16.931Z',
    },
    'update.home_assistant_supervisor_update': {
      entity_id: 'update.home_assistant_supervisor_update',
      state: 'off',
      attributes: {
        auto_update: true,
        installed_version: '2022.05.3',
        in_progress: false,
        latest_version: '2022.05.3',
        release_summary: null,
        release_url:
          'https://github.com/home-assistant/supervisor/releases/tag/2022.05.3',
        skipped_version: null,
        title: 'Home Assistant Supervisor',
        entity_picture: 'https://brands.home-assistant.io/hassio/icon.png',
        friendly_name: 'Home Assistant Supervisor: Update',
        supported_features: 1,
      },
      context: {
        id: '0181157fec3689df2767a385ef91bbe6',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-30T15:05:14.038Z',
      last_updated: '2022-05-30T15:05:14.038Z',
    },
    'update.home_assistant_core_update': {
      entity_id: 'update.home_assistant_core_update',
      state: 'off',
      attributes: {
        auto_update: false,
        installed_version: '2022.5.5',
        in_progress: false,
        latest_version: '2022.5.5',
        release_summary: null,
        release_url: 'https://www.home-assistant.io/latest-release-notes/',
        skipped_version: null,
        title: 'Home Assistant Core',
        entity_picture:
          'https://brands.home-assistant.io/homeassistant/icon.png',
        friendly_name: 'Home Assistant Core: Update',
        supported_features: 11,
      },
      context: {
        id: '0181157fec37af47c5e6f35cd759e271',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-30T15:05:14.039Z',
      last_updated: '2022-05-30T15:05:14.039Z',
    },
    'update.terminal_ssh_update': {
      entity_id: 'update.terminal_ssh_update',
      state: 'off',
      attributes: {
        auto_update: false,
        installed_version: '9.4.0',
        in_progress: false,
        latest_version: '9.4.0',
        release_summary:
          '# Changelog\n\n## 9.4.0\n\n- Upgrade Home Assistant CLI to 4.17.0\n- Enabled image signature\n\n## 9.3.0\n\n- Update libwebsockets to 4.2.1\n- Update ttyd to `3e37e33b1cd927ae8f25cfbcf0da268723b6d230`\n\n## 9.2.2\n\n- Fix escape codes in color bash prompt\n\n## 9.2.1\n\n- ',
        release_url: null,
        skipped_version: null,
        title: 'Terminal & SSH',
        entity_picture: '/api/hassio/addons/core_ssh/icon',
        friendly_name: 'Terminal & SSH: Update',
        supported_features: 25,
      },
      context: {
        id: '0181157fec388a603cdbdff4095cb3ab',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-30T15:05:14.040Z',
      last_updated: '2022-05-30T15:05:14.040Z',
    },
    'update.file_editor_update': {
      entity_id: 'update.file_editor_update',
      state: 'off',
      attributes: {
        auto_update: false,
        installed_version: '5.3.3',
        in_progress: false,
        latest_version: '5.3.3',
        release_summary: null,
        release_url: null,
        skipped_version: null,
        title: 'File editor',
        entity_picture: '/api/hassio/addons/core_configurator/icon',
        friendly_name: 'File editor: Update',
        supported_features: 25,
      },
      context: {
        id: '0181157fec381f028eede5960478579c',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-30T15:05:14.040Z',
      last_updated: '2022-05-30T15:05:14.040Z',
    },
    'update.samba_share_update': {
      entity_id: 'update.samba_share_update',
      state: 'off',
      attributes: {
        auto_update: false,
        installed_version: '9.6.1',
        in_progress: false,
        latest_version: '9.6.1',
        release_summary:
          '# Changelog\n\n## 9.6.1\n\n- Remove lo from interface list\n- Exit with error if there are no supported interfaces to run Samba on\n\n## 9.6.0\n\n- Run on all supported interfaces\n\n## 9.5.1\n\n- Add `hassio_api` to add-on configuration\n\n## 9.5.0\n\n- Remove interface ',
        release_url: null,
        skipped_version: null,
        title: 'Samba share',
        entity_picture: '/api/hassio/addons/core_samba/icon',
        friendly_name: 'Samba share: Update',
        supported_features: 25,
      },
      context: {
        id: '0181157fec381c5d603b946c95b5fcf8',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-30T15:05:14.040Z',
      last_updated: '2022-05-30T15:05:14.040Z',
    },
    'update.home_assistant_operating_system_update': {
      entity_id: 'update.home_assistant_operating_system_update',
      state: 'off',
      attributes: {
        auto_update: false,
        installed_version: '8.1',
        in_progress: false,
        latest_version: '8.1',
        release_summary: null,
        release_url:
          'https://github.com/home-assistant/operating-system/releases/tag/8.1',
        skipped_version: null,
        title: 'Home Assistant Operating System',
        entity_picture:
          'https://brands.home-assistant.io/homeassistant/icon.png',
        friendly_name: 'Home Assistant Operating System: Update',
        supported_features: 3,
      },
      context: {
        id: '0181157fec3986985d99d31f0782d4e8',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-30T15:05:14.041Z',
      last_updated: '2022-05-30T15:05:14.041Z',
    },
    'zone.home': {
      entity_id: 'zone.home',
      state: '1',
      attributes: {
        latitude: 38.9291848698784,
        longitude: -77.22924259956928,
        radius: 100,
        passive: false,
        persons: ['person.mark_lyck'],
        editable: true,
        icon: 'mdi:home',
        friendly_name: 'Home',
      },
      context: {
        id: '0181157fec7674544a0a4184bc2b9921',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-30T15:05:14.102Z',
      last_updated: '2022-05-30T15:05:14.102Z',
    },
    'sun.sun': {
      entity_id: 'sun.sun',
      state: 'above_horizon',
      attributes: {
        next_dawn: '2022-05-31T09:11:32.573530+00:00',
        next_dusk: '2022-05-31T01:01:23.597978+00:00',
        next_midnight: '2022-05-31T05:06:39+00:00',
        next_noon: '2022-05-31T17:06:32+00:00',
        next_rising: '2022-05-31T09:43:47.617117+00:00',
        next_setting: '2022-05-31T00:29:08.241159+00:00',
        elevation: 45.85,
        azimuth: 261.68,
        rising: false,
        friendly_name: 'Sun',
      },
      context: {
        id: '0181169ea2c34cfbe62e02a20bdd2ec6',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-30T15:05:14.139Z',
      last_updated: '2022-05-30T20:18:24.067Z',
    },
    'binary_sensor.rpi_power_status': {
      entity_id: 'binary_sensor.rpi_power_status',
      state: 'off',
      attributes: {
        device_class: 'problem',
        icon: 'mdi:raspberry-pi',
        friendly_name: 'RPi Power status',
      },
      context: {
        id: '0181157fed015d640e80ffa44aa34e34',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-30T15:05:14.241Z',
      last_updated: '2022-05-30T15:05:14.241Z',
    },
    'media_player.living_room': {
      entity_id: 'media_player.living_room',
      state: 'standby',
      attributes: {
        source_list: [
          'App Store',
          'Arcade',
          'Computers',
          'Disney+',
          'Fitness',
          'Movies',
          'Music',
          'Netflix',
          'Photos',
          'Podcasts',
          'Prime Video',
          'Search',
          'Settings',
          'TV',
          'TV Shows',
          'YouTube',
        ],
        friendly_name: 'Living Room',
        supported_features: 450487,
      },
      context: {
        id: '0181157ff34e99dd3df9c31ee4263bb1',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-30T15:05:15.846Z',
      last_updated: '2022-05-30T15:05:15.854Z',
    },
    'media_player.kitchen': {
      entity_id: 'media_player.kitchen',
      state: 'idle',
      attributes: {
        volume_level: 0.395,
        friendly_name: 'Kitchen',
        supported_features: 448439,
      },
      context: {
        id: '0181157ff376440499c75b6f3e10a6e5',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-30T15:05:15.894Z',
      last_updated: '2022-05-30T15:05:15.894Z',
    },
    'remote.living_room': {
      entity_id: 'remote.living_room',
      state: 'on',
      attributes: {
        friendly_name: 'Living Room',
        supported_features: 0,
      },
      context: {
        id: '0181157ff344026633397c2e4287e534',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-30T15:05:15.844Z',
      last_updated: '2022-05-30T15:05:15.844Z',
    },
    'remote.kitchen': {
      entity_id: 'remote.kitchen',
      state: 'on',
      attributes: {
        friendly_name: 'Kitchen',
        supported_features: 0,
      },
      context: {
        id: '0181157ff374201e40912600af4d9d4c',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-30T15:05:15.892Z',
      last_updated: '2022-05-30T15:05:15.892Z',
    },
    'sensor.iphone_mark_activity': {
      entity_id: 'sensor.iphone_mark_activity',
      state: 'Walking',
      attributes: {
        Confidence: 'High',
        Types: ['Walking'],
        icon: 'mdi:walk',
        friendly_name: 'iphone mark Activity',
      },
      context: {
        id: '0181157ff1477dd0fde4ffc8ab67f0e1',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-30T15:05:15.336Z',
      last_updated: '2022-05-30T15:05:15.336Z',
    },
    'sensor.iphone_mark_average_active_pace': {
      entity_id: 'sensor.iphone_mark_average_active_pace',
      state: '1',
      attributes: {
        unit_of_measurement: 'm/s',
        icon: 'mdi:speedometer',
        friendly_name: 'iphone mark Average Active Pace',
      },
      context: {
        id: '0181157ff148bec69a185fd2065ca6af',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-30T15:05:15.336Z',
      last_updated: '2022-05-30T15:05:15.336Z',
    },
    'sensor.iphone_mark_bssid': {
      entity_id: 'sensor.iphone_mark_bssid',
      state: '6c:ae:f6:ca:75:88',
      attributes: {
        icon: 'mdi:wifi-star',
        friendly_name: 'iphone mark BSSID',
      },
      context: {
        id: '0181157ff149be0c411eb3e343af248c',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-30T15:05:15.337Z',
      last_updated: '2022-05-30T15:05:15.337Z',
    },
    'sensor.iphone_mark_battery_level': {
      entity_id: 'sensor.iphone_mark_battery_level',
      state: '45',
      attributes: {
        unit_of_measurement: '%',
        device_class: 'battery',
        icon: 'mdi:battery-40',
        friendly_name: 'iphone mark Battery Level',
      },
      context: {
        id: '018115812601598a1230be1ba10628b9',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-30T15:06:34.369Z',
      last_updated: '2022-05-30T15:06:34.369Z',
    },
    'sensor.iphone_mark_battery_state': {
      entity_id: 'sensor.iphone_mark_battery_state',
      state: 'Not Charging',
      attributes: {
        'Low Power Mode': false,
        icon: 'mdi:battery-40',
        friendly_name: 'iphone mark Battery State',
      },
      context: {
        id: '0181157ff149f54c05a0026c7cf1813a',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-30T15:05:15.337Z',
      last_updated: '2022-05-30T15:05:15.337Z',
    },
    'sensor.iphone_mark_connection_type': {
      entity_id: 'sensor.iphone_mark_connection_type',
      state: 'Wi-Fi',
      attributes: {
        icon: 'mdi:wifi',
        friendly_name: 'iphone mark Connection Type',
      },
      context: {
        id: '0181157ff14919db89b84b8ed42833b6',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-30T15:05:15.337Z',
      last_updated: '2022-05-30T15:05:15.337Z',
    },
    'sensor.iphone_mark_distance': {
      entity_id: 'sensor.iphone_mark_distance',
      state: '1374',
      attributes: {
        unit_of_measurement: 'm',
        icon: 'mdi:hiking',
        friendly_name: 'iphone mark Distance',
      },
      context: {
        id: '0181158125ff9a30015d21ec11572ecf',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-30T15:06:34.367Z',
      last_updated: '2022-05-30T15:06:34.367Z',
    },
    'sensor.iphone_mark_floors_ascended': {
      entity_id: 'sensor.iphone_mark_floors_ascended',
      state: '0',
      attributes: {
        unit_of_measurement: 'floors',
        icon: 'mdi:stairs-up',
        friendly_name: 'iphone mark Floors Ascended',
      },
      context: {
        id: '0181157ff14ab809cb4eb4056e171e8c',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-30T15:05:15.338Z',
      last_updated: '2022-05-30T15:05:15.338Z',
    },
    'sensor.iphone_mark_floors_descended': {
      entity_id: 'sensor.iphone_mark_floors_descended',
      state: '0',
      attributes: {
        unit_of_measurement: 'floors',
        icon: 'mdi:stairs-down',
        friendly_name: 'iphone mark Floors Descended',
      },
      context: {
        id: '0181157ff14a735bab0f321d92c9eda7',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-30T15:05:15.338Z',
      last_updated: '2022-05-30T15:05:15.338Z',
    },
    'sensor.iphone_mark_geocoded_location': {
      entity_id: 'sensor.iphone_mark_geocoded_location',
      state: '8231 Crestwood Heights Dr\nMcLean VA 22102\nUnited States',
      attributes: {
        'Administrative Area': 'VA',
        'Areas Of Interest': 'N/A',
        Country: 'United States',
        'Inland Water': 'N/A',
        'ISO Country Code': 'US',
        Locality: 'McLean',
        Location: [38.929229736328125, -77.22957121115603],
        Name: '8231 Crestwood Heights Dr',
        Ocean: 'N/A',
        'Postal Code': '22102',
        'Sub Administrative Area': 'Fairfax County',
        'Sub Locality': 'North Central',
        'Sub Thoroughfare': '8231',
        Thoroughfare: 'Crestwood Heights Dr',
        'Time Zone': 'America/New_York',
        Zones: ['Home'],
        icon: 'mdi:map',
        friendly_name: 'iphone mark Geocoded Location',
      },
      context: {
        id: '0181158126031295894e70c2dc5add10',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-30T15:05:15.339Z',
      last_updated: '2022-05-30T15:06:34.375Z',
    },
    'sensor.iphone_mark_last_update_trigger': {
      entity_id: 'sensor.iphone_mark_last_update_trigger',
      state: 'Launch',
      attributes: {
        icon: 'mdi:cellphone-wireless',
        friendly_name: 'iphone mark Last Update Trigger',
      },
      context: {
        id: '01811581268a74408713be866496b844',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-30T15:06:34.506Z',
      last_updated: '2022-05-30T15:06:34.506Z',
    },
    'sensor.iphone_mark_sim_1': {
      entity_id: 'sensor.iphone_mark_sim_1',
      state: 'Ultra/Mint Mobile',
      attributes: {
        'Allows VoIP': true,
        'Carrier ID': '0000000100000001',
        'Carrier Name': 'Ultra/Mint Mobile',
        'ISO Country Code': 'N/A',
        'Mobile Country Code': 'N/A',
        'Mobile Network Code': 'N/A',
        icon: 'mdi:sim',
        friendly_name: 'iphone mark SIM 1',
      },
      context: {
        id: '0181157ff14b9ce4b2e4057d1b1f877d',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-30T15:05:15.339Z',
      last_updated: '2022-05-30T15:05:15.339Z',
    },
    'sensor.iphone_mark_sim_2': {
      entity_id: 'sensor.iphone_mark_sim_2',
      state: 'Ultra/Mint Mobile',
      attributes: {
        'Allows VoIP': true,
        'Carrier ID': '0000000100000002',
        'Carrier Name': 'Ultra/Mint Mobile',
        'Current Radio Technology': 'Long-Term Evolution (LTE)',
        'ISO Country Code': 'us',
        'Mobile Country Code': '310',
        'Mobile Network Code': '260',
        icon: 'mdi:sim',
        friendly_name: 'iphone mark SIM 2',
      },
      context: {
        id: '0181157ff14c96eac6ad62f1cf140562',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-30T15:05:15.340Z',
      last_updated: '2022-05-30T15:05:15.340Z',
    },
    'sensor.iphone_mark_ssid': {
      entity_id: 'sensor.iphone_mark_ssid',
      state: 'Lyck',
      attributes: {
        icon: 'mdi:wifi',
        friendly_name: 'iphone mark SSID',
      },
      context: {
        id: '0181157ff14c98b11e59dc8dd9a2cadd',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-30T15:05:15.340Z',
      last_updated: '2022-05-30T15:05:15.340Z',
    },
    'sensor.iphone_mark_steps': {
      entity_id: 'sensor.iphone_mark_steps',
      state: '1790',
      attributes: {
        unit_of_measurement: 'steps',
        icon: 'mdi:walk',
        friendly_name: 'iphone mark Steps',
      },
      context: {
        id: '0181158126002f17473fc0a7db86a1bb',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-30T15:06:34.368Z',
      last_updated: '2022-05-30T15:06:34.368Z',
    },
    'sensor.iphone_mark_storage': {
      entity_id: 'sensor.iphone_mark_storage',
      state: '63.19',
      attributes: {
        Available: '61.82 GB',
        'Available (Important)': '165.97 GB',
        'Available (Opportunistic)': '161.68 GB',
        Total: '255.88 GB',
        unit_of_measurement: '% available',
        icon: 'mdi:database',
        friendly_name: 'iphone mark Storage',
      },
      context: {
        id: '018115812601f97f4f33ad1da3a0c453',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-30T15:05:15.341Z',
      last_updated: '2022-05-30T15:06:34.369Z',
    },
    'binary_sensor.iphone_mark_focus': {
      entity_id: 'binary_sensor.iphone_mark_focus',
      state: 'off',
      attributes: {
        icon: 'mdi:moon-waning-crescent',
        friendly_name: 'iphone mark Focus',
      },
      context: {
        id: '0181157ff14dcd07164dfec4cbec274f',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-30T15:05:15.341Z',
      last_updated: '2022-05-30T15:05:15.341Z',
    },
    'sensor.mark_lycks_ipad_battery_level': {
      entity_id: 'sensor.mark_lycks_ipad_battery_level',
      state: '87',
      attributes: {
        unit_of_measurement: '%',
        device_class: 'battery',
        icon: 'mdi:battery-80',
        friendly_name: 'Mark Lyck’s iPad Battery Level',
      },
      context: {
        id: '0181157ff14d9d0f27091d939336f164',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-30T15:05:15.341Z',
      last_updated: '2022-05-30T15:05:15.341Z',
    },
    'sensor.mark_lycks_ipad_battery_state': {
      entity_id: 'sensor.mark_lycks_ipad_battery_state',
      state: 'Not Charging',
      attributes: {
        'Low Power Mode': false,
        icon: 'mdi:battery-80',
        friendly_name: 'Mark Lyck’s iPad Battery State',
      },
      context: {
        id: '0181157ff14e2ff5f2fbe4f2e6e203ec',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-30T15:05:15.342Z',
      last_updated: '2022-05-30T15:05:15.342Z',
    },
    'sensor.mark_lycks_ipad_storage': {
      entity_id: 'sensor.mark_lycks_ipad_storage',
      state: '4.25',
      attributes: {
        Available: '10.31 GB',
        'Available (Important)': '13.08 GB',
        'Available (Opportunistic)': '10.88 GB',
        Total: '255.96 GB',
        unit_of_measurement: '% available',
        icon: 'mdi:database',
        friendly_name: 'Mark Lyck’s iPad Storage',
      },
      context: {
        id: '0181157ff14e614d2432f8545f40b923',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-30T15:05:15.342Z',
      last_updated: '2022-05-30T15:05:15.342Z',
    },
    'sensor.mark_lycks_ipad_ssid': {
      entity_id: 'sensor.mark_lycks_ipad_ssid',
      state: 'Lyck',
      attributes: {
        icon: 'mdi:wifi',
        friendly_name: 'Mark Lyck’s iPad SSID',
      },
      context: {
        id: '0181157ff14eb350ceecd3d7e6ad9e80',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-30T15:05:15.342Z',
      last_updated: '2022-05-30T15:05:15.342Z',
    },
    'sensor.mark_lycks_ipad_geocoded_location': {
      entity_id: 'sensor.mark_lycks_ipad_geocoded_location',
      state: '8231 Crestwood Heights Dr\nMcLean VA 22102\nUnited States',
      attributes: {
        'Administrative Area': 'VA',
        'Areas Of Interest': 'N/A',
        Country: 'United States',
        'Inland Water': 'N/A',
        'ISO Country Code': 'US',
        Locality: 'McLean',
        Location: [38.9293212890625, -77.22917283168587],
        Name: '8231 Crestwood Heights Dr',
        Ocean: 'N/A',
        'Postal Code': '22102',
        'Sub Administrative Area': 'Fairfax County',
        'Sub Locality': 'North Central',
        'Sub Thoroughfare': '8231',
        Thoroughfare: 'Crestwood Heights Dr',
        'Time Zone': 'America/New_York',
        Zones: ['Home'],
        icon: 'mdi:map',
        friendly_name: 'Mark Lyck’s iPad Geocoded Location',
      },
      context: {
        id: '0181157ff14f802fe74501c08c26c3ab',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-30T15:05:15.343Z',
      last_updated: '2022-05-30T15:05:15.343Z',
    },
    'sensor.mark_lycks_ipad_last_update_trigger': {
      entity_id: 'sensor.mark_lycks_ipad_last_update_trigger',
      state: 'Siri',
      attributes: {
        icon: 'mdi:cellphone-wireless',
        friendly_name: 'Mark Lyck’s iPad Last Update Trigger',
      },
      context: {
        id: '0181157ff14fb5bfd462105098ec769f',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-30T15:05:15.343Z',
      last_updated: '2022-05-30T15:05:15.343Z',
    },
    'sensor.mark_lycks_ipad_bssid': {
      entity_id: 'sensor.mark_lycks_ipad_bssid',
      state: '6c:ae:f6:ca:75:88',
      attributes: {
        icon: 'mdi:wifi-star',
        friendly_name: 'Mark Lyck’s iPad BSSID',
      },
      context: {
        id: '0181157ff14f37bc7d61f1fd885745c8',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-30T15:05:15.343Z',
      last_updated: '2022-05-30T15:05:15.343Z',
    },
    'sensor.mark_lycks_ipad_connection_type': {
      entity_id: 'sensor.mark_lycks_ipad_connection_type',
      state: 'Wi-Fi',
      attributes: {
        icon: 'mdi:wifi',
        friendly_name: 'Mark Lyck’s iPad Connection Type',
      },
      context: {
        id: '0181157ff150fefe733f3659232215f3',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-30T15:05:15.344Z',
      last_updated: '2022-05-30T15:05:15.344Z',
    },
    'sensor.mark_lycks_ipad_activity': {
      entity_id: 'sensor.mark_lycks_ipad_activity',
      state: 'Stationary',
      attributes: {
        Confidence: 'High',
        Types: ['Stationary'],
        icon: 'mdi:human-male',
        friendly_name: 'Mark Lyck’s iPad Activity',
      },
      context: {
        id: '0181157ff1507f5d0ac4fa1c526c786c',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-30T15:05:15.344Z',
      last_updated: '2022-05-30T15:05:15.344Z',
    },
    'binary_sensor.mark_lycks_ipad_focus': {
      entity_id: 'binary_sensor.mark_lycks_ipad_focus',
      state: 'off',
      attributes: {
        icon: 'mdi:moon-waning-crescent',
        friendly_name: 'Mark Lyck’s iPad Focus',
      },
      context: {
        id: '0181157ff1502cbfb08ec87e7bf67367',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-30T15:05:15.344Z',
      last_updated: '2022-05-30T15:05:15.344Z',
    },
    'light.lamp': {
      entity_id: 'light.lamp',
      state: 'off',
      attributes: {
        min_mireds: 153,
        max_mireds: 500,
        effect_list: ['None', 'candle', 'fire'],
        supported_color_modes: ['color_temp', 'xy'],
        mode: 'normal',
        dynamics: 'none',
        friendly_name: 'Lamp',
        supported_features: 44,
      },
      context: {
        id: '01811582a2a73e0cd547364c320f6141',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-30T15:08:11.815Z',
      last_updated: '2022-05-30T15:08:11.815Z',
    },
    'light.bedroom': {
      entity_id: 'light.bedroom',
      state: 'off',
      attributes: {
        min_mireds: 153,
        max_mireds: 500,
        supported_color_modes: ['color_temp', 'xy'],
        is_hue_group: true,
        hue_scenes: ['Nightlight', 'Dimmed', 'Bright'],
        hue_type: 'room',
        lights: ['Lamp'],
        dynamics: false,
        icon: 'mdi:lightbulb-group',
        friendly_name: 'Bedroom',
        supported_features: 40,
      },
      context: {
        id: '01811582a2766fa99d43f6b4b76f9571',
        parent_id: null,
        user_id: 'fefe8d8a7bec4ab9ad5ca86ac9734a4c',
      },
      last_changed: '2022-05-30T15:08:12.826Z',
      last_updated: '2022-05-30T15:08:12.826Z',
    },
    'device_tracker.iphone_mark': {
      entity_id: 'device_tracker.iphone_mark',
      state: 'home',
      attributes: {
        source_type: 'gps',
        battery_level: 45,
        latitude: 38.929229736328125,
        longitude: -77.22957121115603,
        gps_accuracy: 55.666666666666664,
        altitude: 161.74649810791016,
        vertical_accuracy: 1.7983700037002563,
        friendly_name: 'iphone mark',
      },
      context: {
        id: '0181158125a8eb4dc596fd999c889fb6',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-30T15:06:34.280Z',
      last_updated: '2022-05-30T15:06:34.280Z',
    },
    'device_tracker.mark_lycks_ipad': {
      entity_id: 'device_tracker.mark_lycks_ipad',
      state: 'home',
      attributes: {
        source_type: 'gps',
        battery_level: 97,
        latitude: 38.9293212890625,
        longitude: -77.22917283168587,
        gps_accuracy: 35,
        altitude: 107.49743270874023,
        vertical_accuracy: 16.559709548950195,
        friendly_name: 'Mark Lyck’s iPad',
      },
      context: {
        id: '0181157ff19755ad63dca9f5ab448a2c',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-30T15:05:15.415Z',
      last_updated: '2022-05-30T15:05:15.415Z',
    },
    'scene.bedroom_bright': {
      entity_id: 'scene.bedroom_bright',
      state: 'unknown',
      attributes: {
        group_name: 'Bedroom',
        group_type: 'room',
        name: 'Bright',
        speed: 0.5,
        brightness: 100,
        is_dynamic: false,
        friendly_name: 'Bedroom Bright',
      },
      context: {
        id: '0181157ff1a1de48e5f5fbfdeedffe95',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-30T15:05:15.425Z',
      last_updated: '2022-05-30T15:05:15.425Z',
    },
    'scene.bedroom_nightlight': {
      entity_id: 'scene.bedroom_nightlight',
      state: 'unknown',
      attributes: {
        group_name: 'Bedroom',
        group_type: 'room',
        name: 'Nightlight',
        speed: 0.5,
        brightness: 0.39,
        is_dynamic: false,
        friendly_name: 'Bedroom Nightlight',
      },
      context: {
        id: '0181157ff1a25cbe7f477d85b33333f7',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-30T15:05:15.426Z',
      last_updated: '2022-05-30T15:05:15.426Z',
    },
    'scene.bedroom_dimmed': {
      entity_id: 'scene.bedroom_dimmed',
      state: 'unknown',
      attributes: {
        group_name: 'Bedroom',
        group_type: 'room',
        name: 'Dimmed',
        speed: 0.5,
        brightness: 30.31,
        is_dynamic: false,
        friendly_name: 'Bedroom Dimmed',
      },
      context: {
        id: '0181157ff1a2c4603c4544ced4352b06',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-30T15:05:15.426Z',
      last_updated: '2022-05-30T15:05:15.426Z',
    },
    'light.bedroom_lamp': {
      entity_id: 'light.bedroom_lamp',
      state: 'off',
      attributes: {
        effect_list: ['effect_pulse', 'effect_stop'],
        supported_color_modes: ['brightness'],
        friendly_name: 'Bedroom lamp',
        supported_features: 37,
      },
      context: {
        id: '0181157ff1c5e8fc81af7a6bf5cee2c7',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-30T15:05:15.461Z',
      last_updated: '2022-05-30T15:05:15.461Z',
    },
    'binary_sensor.eero_wan_status': {
      entity_id: 'binary_sensor.eero_wan_status',
      state: 'on',
      attributes: {
        device_class: 'connectivity',
        friendly_name: 'eero wan status',
      },
      context: {
        id: '0181157ff1d15efdcfb8d1f26d47bc97',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-30T15:05:15.473Z',
      last_updated: '2022-05-30T15:05:15.473Z',
    },
    'sensor.eero_external_ip': {
      entity_id: 'sensor.eero_external_ip',
      state: '108.28.69.66',
      attributes: {
        icon: 'mdi:server-network',
        friendly_name: 'eero External IP',
      },
      context: {
        id: '0181157ff1d23b81104ce9bf5d89b5b5',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-30T15:05:15.474Z',
      last_updated: '2022-05-30T15:05:15.474Z',
    },
    'sensor.eero_wan_status': {
      entity_id: 'sensor.eero_wan_status',
      state: 'Connected',
      attributes: {
        icon: 'mdi:server-network',
        friendly_name: 'eero wan status',
      },
      context: {
        id: '0181157ff1d36a98fdd2184b32e2fd5b',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-30T15:05:15.475Z',
      last_updated: '2022-05-30T15:05:15.475Z',
    },
    'light.desk_light': {
      entity_id: 'light.desk_light',
      state: 'on',
      attributes: {
        min_mireds: 111,
        max_mireds: 666,
        effect_list: ['effect_colorloop', 'effect_pulse', 'effect_stop'],
        supported_color_modes: ['color_temp', 'hs'],
        color_mode: 'hs',
        brightness: 255,
        hs_color: [254.997, 100],
        rgb_color: [63, 0, 255],
        xy_color: [0.157, 0.05],
        icon: 'mdi:led-strip-variant',
        friendly_name: 'Desk light',
        supported_features: 55,
      },
      context: {
        id: '01811699a7f3738af6e131fa85a4337b',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-30T20:12:52.277Z',
      last_updated: '2022-05-30T20:12:57.715Z',
    },
    'sensor.hacs': {
      entity_id: 'sensor.hacs',
      state: '2',
      attributes: {
        repositories: [
          {
            name: 'hacs/integration',
            display_name: 'HACS',
            installed_version: '1.25.2',
            available_version: '1.25.5',
          },
          {
            name: 'thomasloven/lovelace-state-switch',
            display_name: 'state-switch',
            installed_version: '1.9.3',
            available_version: '1.9.5',
          },
        ],
        unit_of_measurement: 'pending update(s)',
        icon: 'hacs:hacs',
        friendly_name: 'hacs',
      },
      context: {
        id: '018115800a053ee99746103935783ad6',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-30T15:05:21.669Z',
      last_updated: '2022-05-30T15:05:21.669Z',
    },
    'binary_sensor.my_ecobee_occupancy': {
      entity_id: 'binary_sensor.my_ecobee_occupancy',
      state: 'on',
      attributes: {
        device_class: 'occupancy',
        friendly_name: 'My ecobee Occupancy',
      },
      context: {
        id: '01811693169644f3e64bf2bdef53cfd5',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-30T20:05:47.286Z',
      last_updated: '2022-05-30T20:05:47.286Z',
    },
    'binary_sensor.bedroom_sensor_occupancy': {
      entity_id: 'binary_sensor.bedroom_sensor_occupancy',
      state: 'on',
      attributes: {
        device_class: 'occupancy',
        friendly_name: 'bedroom sensor Occupancy',
      },
      context: {
        id: '01811695d5bd8ae89b2920b50ded5043',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-30T20:08:47.293Z',
      last_updated: '2022-05-30T20:08:47.293Z',
    },
    'binary_sensor.office_occupancy': {
      entity_id: 'binary_sensor.office_occupancy',
      state: 'on',
      attributes: {
        device_class: 'occupancy',
        friendly_name: 'Office Occupancy',
      },
      context: {
        id: '01811695d5bd3136c7e5ab0a9ffec866',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-30T20:08:47.293Z',
      last_updated: '2022-05-30T20:08:47.293Z',
    },
    'sensor.my_ecobee_temperature': {
      entity_id: 'sensor.my_ecobee_temperature',
      state: '76.4',
      attributes: {
        state_class: 'measurement',
        unit_of_measurement: '°F',
        device_class: 'temperature',
        friendly_name: 'My ecobee Temperature',
      },
      context: {
        id: '018116a1478932ff6fbfb5d41fa93cb2',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-30T20:21:17.321Z',
      last_updated: '2022-05-30T20:21:17.321Z',
    },
    'sensor.my_ecobee_humidity': {
      entity_id: 'sensor.my_ecobee_humidity',
      state: '51',
      attributes: {
        state_class: 'measurement',
        unit_of_measurement: '%',
        device_class: 'humidity',
        friendly_name: 'My ecobee Humidity',
      },
      context: {
        id: '018116a1478a778cd76eb1553a92dd48',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-30T20:21:17.322Z',
      last_updated: '2022-05-30T20:21:17.322Z',
    },
    'sensor.bedroom_sensor_temperature': {
      entity_id: 'sensor.bedroom_sensor_temperature',
      state: '76.6',
      attributes: {
        state_class: 'measurement',
        unit_of_measurement: '°F',
        device_class: 'temperature',
        friendly_name: 'bedroom sensor Temperature',
      },
      context: {
        id: '0181169bc93b933ff514528049d602e5',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-30T20:15:17.307Z',
      last_updated: '2022-05-30T20:15:17.307Z',
    },
    'sensor.office_temperature': {
      entity_id: 'sensor.office_temperature',
      state: '77.8',
      attributes: {
        state_class: 'measurement',
        unit_of_measurement: '°F',
        device_class: 'temperature',
        friendly_name: 'Office Temperature',
      },
      context: {
        id: '018116a1478b361ab3db2f37c154494b',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-30T20:21:17.323Z',
      last_updated: '2022-05-30T20:21:17.323Z',
    },
    'climate.ecobee': {
      entity_id: 'climate.ecobee',
      state: 'cool',
      attributes: {
        hvac_modes: ['heat_cool', 'heat', 'cool', 'off'],
        min_temp: 44.6,
        max_temp: 95,
        target_temp_step: 0.5,
        fan_modes: ['auto', 'on'],
        preset_modes: ['Away', 'Home', 'Sleep'],
        current_temperature: 76.9,
        temperature: 75,
        target_temp_high: null,
        target_temp_low: null,
        current_humidity: 51,
        fan_mode: 'auto',
        hvac_action: 'cooling',
        preset_mode: 'temp',
        aux_heat: 'off',
        fan: 'on',
        climate_mode: 'Home',
        equipment_running: 'compCool1,fan',
        fan_min_on_time: 0,
        icon: 'thermo',
        friendly_name: 'Thermostat',
        supported_features: 91,
      },
      context: {
        id: '018116a1475886caebbfc05dbdacb505',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-30T15:05:16.603Z',
      last_updated: '2022-05-30T20:21:17.272Z',
    },
    'weather.my_ecobee': {
      entity_id: 'weather.my_ecobee',
      state: 'partlycloudy',
      attributes: {
        temperature: 89,
        humidity: 46,
        pressure: 30.06,
        wind_bearing: 174,
        wind_speed: 8,
        visibility: 13,
        forecast: [
          {
            condition: 'partlycloudy',
            temperature: 89,
            templow: 67,
            wind_bearing: 174,
            wind_speed: 8,
            datetime: '2022-05-30T20:21:47.652433+00:00',
          },
          {
            condition: 'sunny',
            temperature: 91,
            templow: 73,
            wind_bearing: 253,
            wind_speed: 4,
            datetime: '2022-05-31T20:21:47.652433+00:00',
          },
          {
            condition: 'partlycloudy',
            temperature: 91,
            templow: 77,
            wind_bearing: 270,
            wind_speed: 5,
            datetime: '2022-06-01T20:21:47.652433+00:00',
          },
          {
            condition: 'rainy',
            temperature: 83,
            templow: 73,
            wind_bearing: 309,
            wind_speed: 5,
            datetime: '2022-06-02T20:21:47.652433+00:00',
          },
          {
            condition: 'sunny',
            temperature: 77,
            templow: 66,
            wind_bearing: 328,
            wind_speed: 5,
            datetime: '2022-06-03T20:21:47.652433+00:00',
          },
        ],
        attribution:
          'Ecobee weather provided by FI:NDV at 2022-05-30 20:00:45 UTC',
        friendly_name: 'My ecobee',
      },
      context: {
        id: '018116a1be05fcd218a0b854bbbf0df3',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-30T19:02:47.149Z',
      last_updated: '2022-05-30T20:21:47.653Z',
    },
    'vacuum.vacuum': {
      entity_id: 'vacuum.vacuum',
      state: 'docked',
      attributes: {
        fan_speed_list: ['quiet', 'normal', 'max', 'max+'],
        battery_level: 100,
        battery_icon: 'mdi:battery-charging-100',
        fan_speed: null,
        last_error: 'NoError: Robot is operational (0)',
        friendly_name: 'Vacuum',
        supported_features: 15228,
      },
      context: {
        id: '01811688ea161b4478c33f935c051fe9',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-30T16:30:42.301Z',
      last_updated: '2022-05-30T19:54:40.535Z',
    },
    'button.vacuum_life_span_side_brush_reset': {
      entity_id: 'button.vacuum_life_span_side_brush_reset',
      state: 'unknown',
      attributes: {
        icon: 'mdi:broom',
        friendly_name: 'Vacuum life span side brush reset',
      },
      context: {
        id: '018115a21579372c875451206de21a82',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-30T15:42:32.825Z',
      last_updated: '2022-05-30T15:42:32.825Z',
    },
    'button.vacuum_life_span_brush_reset': {
      entity_id: 'button.vacuum_life_span_brush_reset',
      state: 'unknown',
      attributes: {
        icon: 'mdi:broom',
        friendly_name: 'Vacuum life span brush reset',
      },
      context: {
        id: '018115a2157aeb5c25f2d9c8e2becee1',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-30T15:42:32.826Z',
      last_updated: '2022-05-30T15:42:32.826Z',
    },
    'button.vacuum_life_span_filter_reset': {
      entity_id: 'button.vacuum_life_span_filter_reset',
      state: 'unknown',
      attributes: {
        icon: 'mdi:air-filter',
        friendly_name: 'Vacuum life span filter reset',
      },
      context: {
        id: '018115a2157adb595cb35cba5be1e1ef',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-30T15:42:32.826Z',
      last_updated: '2022-05-30T15:42:32.826Z',
    },
    'button.vacuum_relocate': {
      entity_id: 'button.vacuum_relocate',
      state: 'unknown',
      attributes: {
        icon: 'mdi:map-marker-question',
        friendly_name: 'Vacuum relocate',
      },
      context: {
        id: '018115a2157b6a7fd071fbaac8734f59',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-30T15:42:32.827Z',
      last_updated: '2022-05-30T15:42:32.827Z',
    },
    'sensor.disk_use_home': {
      entity_id: 'sensor.disk_use_home',
      state: 'unavailable',
      attributes: {
        restored: true,
        state_class: 'measurement',
        icon: 'mdi:harddisk',
        friendly_name: 'Disk use /home',
        supported_features: 0,
        unit_of_measurement: 'GiB',
      },
      context: {
        id: '0181157ff77f965a9f297e14120fdfe6',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-30T15:05:16.927Z',
      last_updated: '2022-05-30T15:05:16.927Z',
    },
    'sensor.disk_free_home': {
      entity_id: 'sensor.disk_free_home',
      state: 'unavailable',
      attributes: {
        restored: true,
        state_class: 'measurement',
        icon: 'mdi:harddisk',
        friendly_name: 'Disk free /home',
        supported_features: 0,
        unit_of_measurement: 'GiB',
      },
      context: {
        id: '0181157ff77f1660084a12b7ea8065ec',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-30T15:05:16.927Z',
      last_updated: '2022-05-30T15:05:16.927Z',
    },
    'sensor.disk_use_percent_home': {
      entity_id: 'sensor.disk_use_percent_home',
      state: 'unavailable',
      attributes: {
        restored: true,
        state_class: 'measurement',
        icon: 'mdi:harddisk',
        friendly_name: 'Disk use (percent) /home',
        supported_features: 0,
        unit_of_measurement: '%',
      },
      context: {
        id: '0181157ff77f0f34f92af42169e1132c',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-30T15:05:16.927Z',
      last_updated: '2022-05-30T15:05:16.927Z',
    },
    'sensor.memory_free': {
      entity_id: 'sensor.memory_free',
      state: 'unavailable',
      attributes: {
        restored: true,
        state_class: 'measurement',
        icon: 'mdi:memory',
        friendly_name: 'Memory free',
        supported_features: 0,
        unit_of_measurement: 'MiB',
      },
      context: {
        id: '0181157ff77fd6d48c4c82ac792a73ac',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-30T15:05:16.927Z',
      last_updated: '2022-05-30T15:05:16.927Z',
    },
    'sensor.memory_use': {
      entity_id: 'sensor.memory_use',
      state: 'unavailable',
      attributes: {
        restored: true,
        state_class: 'measurement',
        icon: 'mdi:memory',
        friendly_name: 'Memory use',
        supported_features: 0,
        unit_of_measurement: 'MiB',
      },
      context: {
        id: '0181157ff77f5774a0f03e216f1511d9',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-30T15:05:16.927Z',
      last_updated: '2022-05-30T15:05:16.927Z',
    },
    'sensor.memory_use_percent': {
      entity_id: 'sensor.memory_use_percent',
      state: 'unavailable',
      attributes: {
        restored: true,
        state_class: 'measurement',
        icon: 'mdi:memory',
        friendly_name: 'Memory use (percent)',
        supported_features: 0,
        unit_of_measurement: '%',
      },
      context: {
        id: '0181157ff77f6945b3aabf0b3be9904a',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-30T15:05:16.927Z',
      last_updated: '2022-05-30T15:05:16.927Z',
    },
    'sensor.network_in_eth0': {
      entity_id: 'sensor.network_in_eth0',
      state: 'unavailable',
      attributes: {
        restored: true,
        state_class: 'total_increasing',
        icon: 'mdi:server-network',
        friendly_name: 'Network in eth0',
        supported_features: 0,
        unit_of_measurement: 'MiB',
      },
      context: {
        id: '0181157ff7802476565d9ba188211e4f',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-30T15:05:16.928Z',
      last_updated: '2022-05-30T15:05:16.928Z',
    },
    'sensor.network_out_eth0': {
      entity_id: 'sensor.network_out_eth0',
      state: 'unavailable',
      attributes: {
        restored: true,
        state_class: 'total_increasing',
        icon: 'mdi:server-network',
        friendly_name: 'Network out eth0',
        supported_features: 0,
        unit_of_measurement: 'MiB',
      },
      context: {
        id: '0181157ff780b92779d9c5061f5af76c',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-30T15:05:16.928Z',
      last_updated: '2022-05-30T15:05:16.928Z',
    },
    'sensor.network_throughput_in_eth0': {
      entity_id: 'sensor.network_throughput_in_eth0',
      state: 'unavailable',
      attributes: {
        restored: true,
        state_class: 'measurement',
        icon: 'mdi:server-network',
        friendly_name: 'Network throughput in eth0',
        supported_features: 0,
        unit_of_measurement: 'MB/s',
      },
      context: {
        id: '0181157ff780a8cd305ce60720efd28d',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-30T15:05:16.928Z',
      last_updated: '2022-05-30T15:05:16.928Z',
    },
    'sensor.network_throughput_out_eth0': {
      entity_id: 'sensor.network_throughput_out_eth0',
      state: 'unavailable',
      attributes: {
        restored: true,
        state_class: 'measurement',
        icon: 'mdi:server-network',
        friendly_name: 'Network throughput out eth0',
        supported_features: 0,
        unit_of_measurement: 'MB/s',
      },
      context: {
        id: '0181157ff7804ef969549befce939c4c',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-30T15:05:16.928Z',
      last_updated: '2022-05-30T15:05:16.928Z',
    },
    'sensor.ipv4_address_eth0': {
      entity_id: 'sensor.ipv4_address_eth0',
      state: 'unavailable',
      attributes: {
        restored: true,
        icon: 'mdi:server-network',
        friendly_name: 'IPv4 address eth0',
        supported_features: 0,
      },
      context: {
        id: '0181157ff780e5345594d227ab2121b6',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-30T15:05:16.928Z',
      last_updated: '2022-05-30T15:05:16.928Z',
    },
    'sensor.packets_in_eth0': {
      entity_id: 'sensor.packets_in_eth0',
      state: 'unavailable',
      attributes: {
        restored: true,
        state_class: 'total_increasing',
        icon: 'mdi:server-network',
        friendly_name: 'Packets in eth0',
        supported_features: 0,
      },
      context: {
        id: '0181157ff780f0deacec085c370318c1',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-30T15:05:16.928Z',
      last_updated: '2022-05-30T15:05:16.928Z',
    },
    'sensor.packets_out_eth0': {
      entity_id: 'sensor.packets_out_eth0',
      state: 'unavailable',
      attributes: {
        restored: true,
        state_class: 'total_increasing',
        icon: 'mdi:server-network',
        friendly_name: 'Packets out eth0',
        supported_features: 0,
      },
      context: {
        id: '0181157ff78049db5d99f7550ff0f7c9',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-30T15:05:16.928Z',
      last_updated: '2022-05-30T15:05:16.928Z',
    },
    'sensor.processor_use': {
      entity_id: 'sensor.processor_use',
      state: 'unavailable',
      attributes: {
        restored: true,
        state_class: 'measurement',
        icon: 'mdi:cpu-64-bit',
        friendly_name: 'Processor use',
        supported_features: 0,
        unit_of_measurement: '%',
      },
      context: {
        id: '0181157ff780ed2cd633db914001ca07',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-30T15:05:16.928Z',
      last_updated: '2022-05-30T15:05:16.928Z',
    },
    'persistent_notification.config_entry_discovery': {
      entity_id: 'persistent_notification.config_entry_discovery',
      state: 'notifying',
      attributes: {
        message:
          'We have discovered new devices on your network. [Check it out](/config/integrations).',
        title: 'New devices discovered',
        friendly_name: 'New devices discovered',
      },
      context: {
        id: '0181158034896e03f7f58374efa60995',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-30T15:05:32.553Z',
      last_updated: '2022-05-30T15:05:32.553Z',
    },
  },
  config: {
    latitude: 38.9291848698784,
    longitude: -77.22924259956928,
    elevation: 162,
    unit_system: {
      length: 'mi',
      accumulated_precipitation: 'in',
      mass: 'lb',
      pressure: 'psi',
      temperature: '°F',
      volume: 'gal',
      wind_speed: 'mph',
    },
    location_name: 'Home',
    time_zone: 'America/New_York',
    components: [
      'switch',
      'device_tracker.mobile_app',
      'hue',
      'ffmpeg',
      'tts.google_translate',
      'input_datetime',
      'history',
      'homekit',
      'binary_sensor.mobile_app',
      'button.deebot',
      'weather',
      'persistent_notification',
      'device_automation',
      'config',
      'automation',
      'media_player.apple_tv',
      'default_config',
      'binary_sensor.ecobee',
      'input_text',
      'input_button',
      'binary_sensor.hue',
      'http',
      'input_boolean',
      'logbook',
      'system_health',
      'analytics',
      'vacuum',
      'media_source',
      'lifx',
      'tag',
      'number.deebot',
      'light.lifx',
      'upnp',
      'device_tracker',
      'humidifier.ecobee',
      'websocket_api',
      'deebot',
      'frontend',
      'scene.homeassistant',
      'diagnostics',
      'binary_sensor.rpi_power',
      'binary_sensor.upnp',
      'switch.hue',
      'notify.mobile_app',
      'cloud',
      'scene.hue',
      'trace',
      'sensor.energy',
      'system_log',
      'script',
      'sensor.hassio',
      'hacs',
      'humidifier',
      'webhook',
      'vacuum.deebot',
      'binary_sensor.hassio',
      'camera',
      'climate',
      'input_number',
      'lovelace',
      'energy',
      'person',
      'sensor.ecobee',
      'remote.apple_tv',
      'counter',
      'my',
      'select.deebot',
      'scene',
      'switch.deebot',
      'api',
      'light.hue',
      'zeroconf',
      'update.hassio',
      'zone',
      'auth',
      'weather.ecobee',
      'tts',
      'binary_sensor',
      'network',
      'homeassistant',
      'hassio',
      'usb',
      'apple_tv',
      'binary_sensor.deebot',
      'panel_custom',
      'button',
      'timer',
      'media_player',
      'camera.deebot',
      'ssdp',
      'sensor.deebot',
      'input_select',
      'sensor',
      'mobile_app',
      'recorder',
      'ecobee',
      'climate.ecobee',
      'onboarding',
      'dhcp',
      'map',
      'remote',
      'light',
      'number',
      'sensor.hacs',
      'sensor.hue',
      'update',
      'blueprint',
      'rpi_power',
      'image',
      'notify',
      'sensor.upnp',
      'stream',
      'search',
      'select',
      'sensor.mobile_app',
      'sun',
    ],
    config_dir: '/config',
    whitelist_external_dirs: ['/media', '/config/www'],
    allowlist_external_dirs: ['/media', '/config/www'],
    allowlist_external_urls: [],
    version: '2022.5.5',
    config_source: 'storage',
    safe_mode: false,
    state: 'RUNNING',
    external_url: null,
    internal_url: null,
    currency: 'USD',
  },
  themes: {
    themes: {},
    default_theme: 'default',
    default_dark_theme: null,
    theme: 'default',
    darkMode: true,
  },
  selectedTheme: null,
  panels: {
    lovelace: {
      component_name: 'lovelace',
      icon: null,
      title: null,
      config: {
        mode: 'storage',
      },
      url_path: 'lovelace',
      require_admin: false,
    },
    config: {
      component_name: 'config',
      icon: 'hass:cog',
      title: 'config',
      config: null,
      url_path: 'config',
      require_admin: true,
    },
    hassio: {
      component_name: 'custom',
      icon: null,
      title: null,
      config: {
        _panel_custom: {
          name: 'hassio-main',
          embed_iframe: true,
          trust_external: false,
          js_url: '/api/hassio/app/entrypoint.js',
        },
      },
      url_path: 'hassio',
      require_admin: true,
    },
    profile: {
      component_name: 'profile',
      icon: null,
      title: null,
      config: null,
      url_path: 'profile',
      require_admin: false,
    },
    'developer-tools': {
      component_name: 'developer-tools',
      icon: 'hass:hammer',
      title: 'developer_tools',
      config: null,
      url_path: 'developer-tools',
      require_admin: true,
    },
    core_ssh: {
      component_name: 'custom',
      icon: 'mdi:console',
      title: 'Terminal',
      config: {
        ingress: 'core_ssh',
        _panel_custom: {
          name: 'hassio-main',
          embed_iframe: true,
          trust_external: false,
          js_url: '/api/hassio/app/entrypoint.js',
        },
      },
      url_path: 'core_ssh',
      require_admin: true,
    },
    map: {
      component_name: 'map',
      icon: 'hass:tooltip-account',
      title: 'map',
      config: null,
      url_path: 'map',
      require_admin: false,
    },
    history: {
      component_name: 'history',
      icon: 'hass:chart-box',
      title: 'history',
      config: null,
      url_path: 'history',
      require_admin: false,
    },
    _my_redirect: {
      component_name: 'my',
      icon: null,
      title: null,
      config: null,
      url_path: '_my_redirect',
      require_admin: false,
    },
    logbook: {
      component_name: 'logbook',
      icon: 'hass:format-list-bulleted-type',
      title: 'logbook',
      config: null,
      url_path: 'logbook',
      require_admin: false,
    },
    'media-browser': {
      component_name: 'media-browser',
      icon: 'hass:play-box-multiple',
      title: 'media_browser',
      config: null,
      url_path: 'media-browser',
      require_admin: false,
    },
    'react-panel-prod': {
      component_name: 'custom',
      icon: 'mdi:home-assistant',
      title: 'React Panel',
      config: {
        name: 'World',
        _panel_custom: {
          name: 'react-panel',
          embed_iframe: true,
          trust_external: false,
          js_url: '/local/react-panel/assets/index.js',
        },
      },
      url_path: 'react-panel-prod',
      require_admin: false,
    },
    energy: {
      component_name: 'energy',
      icon: 'mdi:lightning-bolt',
      title: 'energy',
      config: null,
      url_path: 'energy',
      require_admin: false,
    },
    hacs: {
      component_name: 'custom',
      icon: 'hacs:hacs',
      title: 'HACS',
      config: {
        _panel_custom: {
          name: 'hacs-frontend',
          embed_iframe: true,
          trust_external: false,
          js_url: '/hacsfiles/frontend/entrypoint.js?hacstag=20220522162559',
        },
      },
      url_path: 'hacs',
      require_admin: true,
    },
  },
  services: {
    persistent_notification: {
      create: {
        name: 'Create',
        description: 'Show a notification in the frontend.',
        fields: {
          message: {
            name: 'Message',
            description:
              'Message body of the notification. [Templates accepted]',
            required: true,
            example: 'Please check your configuration.yaml.',
            selector: {
              text: null,
            },
          },
          title: {
            name: 'Title',
            description:
              'Optional title for your notification. [Templates accepted]',
            example: 'Test notification',
            selector: {
              text: null,
            },
          },
          notification_id: {
            name: 'Notification ID',
            description:
              'Target ID of the notification, will replace a notification with the same ID.',
            example: 1234,
            selector: {
              text: null,
            },
          },
        },
      },
      dismiss: {
        name: 'Dismiss',
        description: 'Remove a notification from the frontend.',
        fields: {
          notification_id: {
            name: 'Notification ID',
            description:
              'Target ID of the notification, which should be removed.',
            required: true,
            example: 1234,
            selector: {
              text: null,
            },
          },
        },
      },
      mark_read: {
        name: 'Mark read',
        description: 'Mark a notification read.',
        fields: {
          notification_id: {
            name: 'Notification ID',
            description:
              'Target ID of the notification, which should be mark read.',
            required: true,
            example: 1234,
            selector: {
              text: null,
            },
          },
        },
      },
    },
    homeassistant: {
      save_persistent_states: {
        name: 'Save Persistent States',
        description:
          'Save the persistent states (for entities derived from RestoreEntity) immediately. Maintain the normal periodic saving interval.',
        fields: {},
      },
      turn_off: {
        name: 'Generic turn off',
        description: 'Generic service to turn devices off under any domain.',
        fields: {},
        target: {
          entity: {},
        },
      },
      turn_on: {
        name: 'Generic turn on',
        description: 'Generic service to turn devices on under any domain.',
        fields: {},
        target: {
          entity: {},
        },
      },
      toggle: {
        name: 'Generic toggle',
        description:
          'Generic service to toggle devices on/off under any domain',
        fields: {},
        target: {
          entity: {},
        },
      },
      stop: {
        name: 'Stop',
        description: 'Stop the Home Assistant service.',
        fields: {},
      },
      restart: {
        name: 'Restart',
        description: 'Restart the Home Assistant service.',
        fields: {},
      },
      check_config: {
        name: 'Check configuration',
        description:
          'Check the Home Assistant configuration files for errors. Errors will be displayed in the Home Assistant log.',
        fields: {},
      },
      update_entity: {
        name: 'Update entity',
        description: 'Force one or more entities to update its data',
        fields: {},
        target: {
          entity: {},
        },
      },
      reload_core_config: {
        name: 'Reload core configuration',
        description: 'Reload the core configuration.',
        fields: {},
      },
      set_location: {
        name: 'Set location',
        description: 'Update the Home Assistant location.',
        fields: {
          latitude: {
            name: 'Latitude',
            description: 'Latitude of your location.',
            required: true,
            example: 32.87336,
            selector: {
              text: null,
            },
          },
          longitude: {
            name: 'Longitude',
            description: 'Longitude of your location.',
            required: true,
            example: 117.22743,
            selector: {
              text: null,
            },
          },
        },
      },
      reload_config_entry: {
        name: 'Reload config entry',
        description: 'Reload a config entry that matches a target.',
        fields: {
          entry_id: {
            advanced: true,
            name: 'Config entry id',
            description: 'A configuration entry id',
            required: false,
            example: '8955375327824e14ba89e4b29cc3ec9a',
            selector: {
              text: null,
            },
          },
        },
        target: {
          entity: {},
          device: {},
        },
      },
    },
    system_log: {
      clear: {
        name: 'Clear all',
        description: 'Clear all log entries.',
        fields: {},
      },
      write: {
        name: 'Write',
        description: 'Write log entry.',
        fields: {
          message: {
            name: 'Message',
            description: 'Message to log.',
            required: true,
            example: 'Something went wrong',
            selector: {
              text: null,
            },
          },
          level: {
            name: 'Level',
            description: 'Log level.',
            default: 'error',
            selector: {
              select: {
                options: [
                  {
                    label: 'Debug',
                    value: 'debug',
                  },
                  {
                    label: 'Info',
                    value: 'info',
                  },
                  {
                    label: 'Warning',
                    value: 'warning',
                  },
                  {
                    label: 'Error',
                    value: 'error',
                  },
                  {
                    label: 'Critical',
                    value: 'critical',
                  },
                ],
              },
            },
          },
          logger: {
            name: 'Logger',
            description:
              "Logger name under which to log the message. Defaults to 'system_log.external'.",
            example: 'mycomponent.myplatform',
            selector: {
              text: null,
            },
          },
        },
      },
    },
    recorder: {
      purge: {
        name: 'Purge',
        description:
          'Start purge task - to clean up old data from your database.',
        fields: {
          keep_days: {
            name: 'Days to keep',
            description:
              'Number of history days to keep in database after purge.',
            selector: {
              number: {
                min: 0,
                max: 365,
                unit_of_measurement: 'days',
              },
            },
          },
          repack: {
            name: 'Repack',
            description:
              'Attempt to save disk space by rewriting the entire database file.',
            default: false,
            selector: {
              boolean: null,
            },
          },
          apply_filter: {
            name: 'Apply filter',
            description:
              'Apply entity_id and event_type filter in addition to time based purge.',
            default: false,
            selector: {
              boolean: null,
            },
          },
        },
      },
      purge_entities: {
        name: 'Purge Entities',
        description:
          'Start purge task to remove specific entities from your database.',
        fields: {
          domains: {
            name: 'Domains to remove',
            description:
              'List the domains that need to be removed from the recorder database.',
            example: 'sun',
            required: false,
            default: [],
            selector: {
              object: null,
            },
          },
          entity_globs: {
            name: 'Entity Globs to remove',
            description:
              'List the glob patterns to select entities for removal from the recorder database.',
            example: 'domain*.object_id*',
            required: false,
            default: [],
            selector: {
              object: null,
            },
          },
        },
        target: {
          entity: {},
        },
      },
      enable: {
        name: 'Enable',
        description: 'Start the recording of events and state changes',
        fields: {},
      },
      disable: {
        name: 'Disable',
        description: 'Stop the recording of events and state changes',
        fields: {},
      },
    },
    cloud: {
      remote_connect: {
        name: 'Remote connect',
        description: 'Make instance UI available outside over NabuCasa cloud',
        fields: {},
      },
      remote_disconnect: {
        name: 'Remote disconnect',
        description: 'Disconnect UI from NabuCasa cloud',
        fields: {},
      },
    },
    person: {
      reload: {
        name: 'Reload',
        description: 'Reload the person configuration.',
        fields: {},
      },
    },
    frontend: {
      set_theme: {
        name: 'Set theme',
        description: 'Set a theme unless the client selected per-device theme.',
        fields: {
          name: {
            name: 'Theme',
            description: 'Name of a predefined theme',
            required: true,
            example: 'default',
            selector: {
              theme: null,
            },
          },
          mode: {
            name: 'Mode',
            description: 'The mode the theme is for.',
            default: 'light',
            selector: {
              select: {
                options: [
                  {
                    label: 'Dark',
                    value: 'dark',
                  },
                  {
                    label: 'Light',
                    value: 'light',
                  },
                ],
              },
            },
          },
        },
      },
      reload_themes: {
        name: 'Reload themes',
        description: 'Reload themes from YAML configuration.',
        fields: {},
      },
    },
    hassio: {
      addon_start: {
        name: 'Start add-on',
        description: 'Start add-on.',
        fields: {
          addon: {
            name: 'Add-on',
            required: true,
            description: 'The add-on slug.',
            example: 'core_ssh',
            selector: {
              addon: null,
            },
          },
        },
      },
      addon_stop: {
        name: 'Stop add-on.',
        description: 'Stop add-on.',
        fields: {
          addon: {
            name: 'Add-on',
            required: true,
            description: 'The add-on slug.',
            example: 'core_ssh',
            selector: {
              addon: null,
            },
          },
        },
      },
      addon_restart: {
        name: 'Restart add-on.',
        description: 'Restart add-on.',
        fields: {
          addon: {
            name: 'Add-on',
            required: true,
            description: 'The add-on slug.',
            example: 'core_ssh',
            selector: {
              addon: null,
            },
          },
        },
      },
      addon_update: {
        name: 'Update add-on.',
        description:
          'Update add-on. This service should be used with caution since add-on updates can contain breaking changes. It is highly recommended that you review release notes/change logs before updating an add-on.',
        fields: {
          addon: {
            name: 'Add-on',
            required: true,
            description: 'The add-on slug.',
            example: 'core_ssh',
            selector: {
              addon: null,
            },
          },
        },
      },
      addon_stdin: {
        name: 'Write data to add-on stdin.',
        description: 'Write data to add-on stdin.',
        fields: {
          addon: {
            name: 'Add-on',
            required: true,
            description: 'The add-on slug.',
            example: 'core_ssh',
            selector: {
              addon: null,
            },
          },
        },
      },
      host_shutdown: {
        name: 'Poweroff the host system.',
        description: 'Poweroff the host system.',
        fields: {},
      },
      host_reboot: {
        name: 'Reboot the host system.',
        description: 'Reboot the host system.',
        fields: {},
      },
      backup_full: {
        name: 'Create a full backup.',
        description: 'Create a full backup.',
        fields: {
          name: {
            name: 'Name',
            description: 'Optional (default = current date and time).',
            example: 'Backup 1',
            selector: {
              text: null,
            },
          },
          password: {
            name: 'Password',
            description: 'Optional password.',
            example: 'password',
            selector: {
              text: null,
            },
          },
          compressed: {
            name: 'Compressed',
            description: 'Use compressed archives',
            default: true,
            selector: {
              boolean: null,
            },
          },
        },
      },
      backup_partial: {
        name: 'Create a partial backup.',
        description: 'Create a partial backup.',
        fields: {
          homeassistant: {
            name: 'Home Assistant settings',
            description: 'Backup Home Assistant settings',
            selector: {
              boolean: null,
            },
          },
          addons: {
            name: 'Add-ons',
            description: 'Optional list of add-on slugs.',
            example: ['core_ssh', 'core_samba', 'core_mosquitto'],
            selector: {
              object: null,
            },
          },
          folders: {
            name: 'Folders',
            description: 'Optional list of directories.',
            example: ['homeassistant', 'share'],
            selector: {
              object: null,
            },
          },
          name: {
            name: 'Name',
            description: 'Optional (default = current date and time).',
            example: 'Partial backup 1',
            selector: {
              text: null,
            },
          },
          password: {
            name: 'Password',
            description: 'Optional password.',
            example: 'password',
            selector: {
              text: null,
            },
          },
          compressed: {
            name: 'Compressed',
            description: 'Use compressed archives',
            default: true,
            selector: {
              boolean: null,
            },
          },
        },
      },
      restore_full: {
        name: 'Restore from full backup.',
        description: 'Restore from full backup.',
        fields: {
          slug: {
            name: 'Slug',
            required: true,
            description: 'Slug of backup to restore from.',
            selector: {
              text: null,
            },
          },
          password: {
            name: 'Password',
            description: 'Optional password.',
            example: 'password',
            selector: {
              text: null,
            },
          },
        },
      },
      restore_partial: {
        name: 'Restore from partial backup.',
        description: 'Restore from partial backup.',
        fields: {
          slug: {
            name: 'Slug',
            required: true,
            description: 'Slug of backup to restore from.',
            selector: {
              text: null,
            },
          },
          homeassistant: {
            name: 'Home Assistant settings',
            description: 'Restore Home Assistant',
            selector: {
              boolean: null,
            },
          },
          folders: {
            name: 'Folders',
            description: 'Optional list of directories.',
            example: ['homeassistant', 'share'],
            selector: {
              object: null,
            },
          },
          addons: {
            name: 'Add-ons',
            description: 'Optional list of add-on slugs.',
            example: ['core_ssh', 'core_samba', 'core_mosquitto'],
            selector: {
              object: null,
            },
          },
          password: {
            name: 'Password',
            description: 'Optional password.',
            example: 'password',
            selector: {
              text: null,
            },
          },
        },
      },
    },
    update: {
      install: {
        name: 'Install update',
        description: 'Install an update for this device or service',
        fields: {
          version: {
            name: 'Version',
            description:
              'Version to install, if omitted, the latest version will be installed.',
            required: false,
            example: '1.0.0',
            selector: {
              text: null,
            },
          },
          backup: {
            name: 'Backup',
            description:
              'Backup before installing the update, if supported by the integration.',
            required: false,
            selector: {
              boolean: null,
            },
          },
        },
        target: {
          entity: {
            domain: 'update',
          },
        },
      },
      skip: {
        name: 'Skip update',
        description: 'Mark currently available update as skipped.',
        fields: {},
        target: {
          entity: {
            domain: 'update',
          },
        },
      },
      clear_skipped: {
        name: 'Clear skipped update',
        description: 'Removes the skipped version marker from an update.',
        fields: {},
        target: {
          entity: {
            domain: 'update',
          },
        },
      },
    },
    logbook: {
      log: {
        name: 'Log',
        description: 'Create a custom entry in your logbook.',
        fields: {
          name: {
            name: 'Name',
            description:
              'Custom name for an entity, can be referenced with entity_id.',
            required: true,
            example: 'Kitchen',
            selector: {
              text: null,
            },
          },
          message: {
            name: 'Message',
            description: 'Message of the custom logbook entry.',
            required: true,
            example: 'is being used',
            selector: {
              text: null,
            },
          },
          entity_id: {
            name: 'Entity ID',
            description: 'Entity to reference in custom logbook entry.',
            selector: {
              entity: null,
            },
          },
          domain: {
            name: 'Domain',
            description: 'Icon of domain to display in custom logbook entry.',
            example: 'light',
            selector: {
              text: null,
            },
          },
        },
      },
    },
    scene: {
      reload: {
        name: 'Reload',
        description: 'Reload the scene configuration.',
        fields: {},
      },
      apply: {
        name: 'Apply',
        description: 'Activate a scene with configuration.',
        fields: {
          entities: {
            name: 'Entities state',
            description: 'The entities and the state that they need to be.',
            required: true,
            example: {
              'light.kitchen': 'on',
              'light.ceiling': {
                state: 'on',
                brightness: 80,
              },
            },
            selector: {
              object: null,
            },
          },
          transition: {
            name: 'Transition',
            description:
              'Transition duration it takes to bring devices to the state defined in the scene.',
            selector: {
              number: {
                min: 0,
                max: 300,
                unit_of_measurement: 'seconds',
              },
            },
          },
        },
      },
      create: {
        name: 'Create',
        description: 'Creates a new scene.',
        fields: {
          scene_id: {
            name: 'Scene entity ID',
            description: 'The entity_id of the new scene.',
            required: true,
            example: 'all_lights',
            selector: {
              text: null,
            },
          },
          entities: {
            name: 'Entities state',
            description: 'The entities to control with the scene.',
            example: {
              'light.tv_back_light': 'on',
              'light.ceiling': {
                state: 'on',
                brightness: 200,
              },
            },
            selector: {
              object: null,
            },
          },
          snapshot_entities: {
            name: 'Snapshot entities',
            description: 'The entities of which a snapshot is to be taken',
            example: ['light.ceiling', 'light.kitchen'],
            selector: {
              object: null,
            },
          },
        },
      },
      turn_on: {
        name: 'Activate',
        description: 'Activate a scene.',
        fields: {
          transition: {
            name: 'Transition',
            description:
              'Transition duration it takes to bring devices to the state defined in the scene.',
            selector: {
              number: {
                min: 0,
                max: 300,
                unit_of_measurement: 'seconds',
              },
            },
          },
        },
        target: {
          entity: {
            domain: 'scene',
          },
        },
      },
    },
    ffmpeg: {
      start: {
        name: 'Start',
        description: 'Send a start command to a ffmpeg based sensor.',
        fields: {
          entity_id: {
            name: 'Entity',
            description: 'Name of entity that will start. Platform dependent.',
            selector: {
              entity: {
                integration: 'ffmpeg',
                domain: 'binary_sensor',
              },
            },
          },
        },
      },
      stop: {
        name: 'Stop',
        description: 'Send a stop command to a ffmpeg based sensor.',
        fields: {
          entity_id: {
            name: 'Entity',
            description: 'Name of entity that will stop. Platform dependent.',
            selector: {
              entity: {
                integration: 'ffmpeg',
                domain: 'binary_sensor',
              },
            },
          },
        },
      },
      restart: {
        name: 'Restart',
        description: 'Send a restart command to a ffmpeg based sensor.',
        fields: {
          entity_id: {
            name: 'Entity',
            description:
              'Name of entity that will restart. Platform dependent.',
            selector: {
              entity: {
                integration: 'ffmpeg',
                domain: 'binary_sensor',
              },
            },
          },
        },
      },
    },
    timer: {
      reload: {
        name: '',
        description: '',
        fields: {},
      },
      start: {
        name: 'Start',
        description: 'Start a timer',
        fields: {
          duration: {
            description: 'Duration the timer requires to finish. [optional]',
            default: 0,
            example: '00:01:00 or 60',
            selector: {
              text: null,
            },
          },
        },
        target: {
          entity: {
            domain: 'timer',
          },
        },
      },
      pause: {
        name: 'Pause',
        description: 'Pause a timer.',
        fields: {},
        target: {
          entity: {
            domain: 'timer',
          },
        },
      },
      cancel: {
        name: 'Cancel',
        description: 'Cancel a timer.',
        fields: {},
        target: {
          entity: {
            domain: 'timer',
          },
        },
      },
      finish: {
        name: 'Finish',
        description: 'Finish a timer.',
        fields: {},
        target: {
          entity: {
            domain: 'timer',
          },
        },
      },
    },
    counter: {
      increment: {
        name: 'Increment',
        description: 'Increment a counter.',
        fields: {},
        target: {
          entity: {
            domain: 'counter',
          },
        },
      },
      decrement: {
        name: 'Decrement',
        description: 'Decrement a counter.',
        fields: {},
        target: {
          entity: {
            domain: 'counter',
          },
        },
      },
      reset: {
        name: 'Reset',
        description: 'Reset a counter.',
        fields: {},
        target: {
          entity: {
            domain: 'counter',
          },
        },
      },
      configure: {
        name: 'Configure',
        description: 'Change counter parameters.',
        fields: {
          minimum: {
            name: 'Minimum',
            description:
              'New minimum value for the counter or None to remove minimum.',
            selector: {
              number: {
                min: -9223372036854776000,
                max: 9223372036854776000,
                mode: 'box',
              },
            },
          },
          maximum: {
            name: 'Maximum',
            description:
              'New maximum value for the counter or None to remove maximum.',
            selector: {
              number: {
                min: -9223372036854776000,
                max: 9223372036854776000,
                mode: 'box',
              },
            },
          },
          step: {
            name: 'Step',
            description: 'New value for step.',
            selector: {
              number: {
                min: 1,
                max: 9223372036854776000,
                mode: 'box',
              },
            },
          },
          initial: {
            name: 'Initial',
            description: 'New value for initial.',
            selector: {
              number: {
                min: 0,
                max: 9223372036854776000,
                mode: 'box',
              },
            },
          },
          value: {
            name: 'Value',
            description: 'New state value.',
            selector: {
              number: {
                min: 0,
                max: 9223372036854776000,
                mode: 'box',
              },
            },
          },
        },
        target: {
          entity: {
            domain: 'counter',
          },
        },
      },
    },
    zone: {
      reload: {
        name: 'Reload',
        description: 'Reload the YAML-based zone configuration.',
        fields: {},
      },
    },
    script: {
      reload: {
        name: 'Reload',
        description: 'Reload all the available scripts',
        fields: {},
      },
      turn_on: {
        name: 'Turn on',
        description: 'Turn on script',
        fields: {},
        target: {
          entity: {
            domain: 'script',
          },
        },
      },
      turn_off: {
        name: 'Turn off',
        description: 'Turn off script',
        fields: {},
        target: {
          entity: {
            domain: 'script',
          },
        },
      },
      toggle: {
        name: 'Toggle',
        description: 'Toggle script',
        fields: {},
        target: {
          entity: {
            domain: 'script',
          },
        },
      },
    },
    media_player: {
      turn_on: {
        name: 'Turn on',
        description: 'Turn a media player power on.',
        fields: {},
        target: {
          entity: {
            domain: 'media_player',
          },
        },
      },
      turn_off: {
        name: 'Turn off',
        description: 'Turn a media player power off.',
        fields: {},
        target: {
          entity: {
            domain: 'media_player',
          },
        },
      },
      toggle: {
        name: 'Toggle',
        description: 'Toggles a media player power state.',
        fields: {},
        target: {
          entity: {
            domain: 'media_player',
          },
        },
      },
      volume_up: {
        name: 'Turn up volume',
        description: 'Turn a media player volume up.',
        fields: {},
        target: {
          entity: {
            domain: 'media_player',
          },
        },
      },
      volume_down: {
        name: 'Turn down volume',
        description: 'Turn a media player volume down.',
        fields: {},
        target: {
          entity: {
            domain: 'media_player',
          },
        },
      },
      media_play_pause: {
        name: 'Play/Pause',
        description: 'Toggle media player play/pause state.',
        fields: {},
        target: {
          entity: {
            domain: 'media_player',
          },
        },
      },
      media_play: {
        name: 'Play',
        description: 'Send the media player the command for play.',
        fields: {},
        target: {
          entity: {
            domain: 'media_player',
          },
        },
      },
      media_pause: {
        name: 'Pause',
        description: 'Send the media player the command for pause.',
        fields: {},
        target: {
          entity: {
            domain: 'media_player',
          },
        },
      },
      media_stop: {
        name: 'Stop',
        description: 'Send the media player the stop command.',
        fields: {},
        target: {
          entity: {
            domain: 'media_player',
          },
        },
      },
      media_next_track: {
        name: 'Next',
        description: 'Send the media player the command for next track.',
        fields: {},
        target: {
          entity: {
            domain: 'media_player',
          },
        },
      },
      media_previous_track: {
        name: 'Previous',
        description: 'Send the media player the command for previous track.',
        fields: {},
        target: {
          entity: {
            domain: 'media_player',
          },
        },
      },
      clear_playlist: {
        name: 'Clear playlist',
        description:
          'Send the media player the command to clear players playlist.',
        fields: {},
        target: {
          entity: {
            domain: 'media_player',
          },
        },
      },
      volume_set: {
        name: 'Set volume',
        description: "Set a media player's volume level.",
        fields: {
          volume_level: {
            name: 'Level',
            description: 'Volume level to set as float.',
            required: true,
            selector: {
              number: {
                min: 0,
                max: 1,
                step: 0.01,
              },
            },
          },
        },
        target: {
          entity: {
            domain: 'media_player',
          },
        },
      },
      volume_mute: {
        name: 'Mute volume',
        description: "Mute a media player's volume.",
        fields: {
          is_volume_muted: {
            name: 'Muted',
            description: 'True/false for mute/unmute.',
            required: true,
            selector: {
              boolean: null,
            },
          },
        },
        target: {
          entity: {
            domain: 'media_player',
          },
        },
      },
      media_seek: {
        name: 'Seek',
        description:
          'Send the media player the command to seek in current playing media.',
        fields: {
          seek_position: {
            name: 'Position',
            description:
              'Position to seek to. The format is platform dependent.',
            required: true,
            selector: {
              number: {
                min: 0,
                max: 9223372036854776000,
                step: 0.01,
                mode: 'box',
              },
            },
          },
        },
        target: {
          entity: {
            domain: 'media_player',
          },
        },
      },
      join: {
        name: 'Join',
        description:
          'Group players together. Only works on platforms with support for player groups.',
        fields: {
          group_members: {
            name: 'Group members',
            description:
              'The players which will be synced with the target player.',
            example: [
              'media_player.multiroom_player2',
              'media_player.multiroom_player3',
            ],
            selector: {
              object: null,
            },
          },
        },
        target: {
          entity: {
            domain: 'media_player',
          },
        },
      },
      select_source: {
        name: 'Select source',
        description:
          'Send the media player the command to change input source.',
        fields: {
          source: {
            name: 'Source',
            description: 'Name of the source to switch to. Platform dependent.',
            required: true,
            example: 'video1',
            selector: {
              text: null,
            },
          },
        },
        target: {
          entity: {
            domain: 'media_player',
          },
        },
      },
      select_sound_mode: {
        name: 'Select sound mode',
        description: 'Send the media player the command to change sound mode.',
        fields: {
          sound_mode: {
            name: 'Sound mode',
            description: 'Name of the sound mode to switch to.',
            example: 'Music',
            selector: {
              text: null,
            },
          },
        },
        target: {
          entity: {
            domain: 'media_player',
          },
        },
      },
      play_media: {
        name: 'Play media',
        description: 'Send the media player the command for playing media.',
        fields: {
          media_content_id: {
            name: 'Content ID',
            description: 'The ID of the content to play. Platform dependent.',
            required: true,
            example: 'https://home-assistant.io/images/cast/splash.png',
            selector: {
              text: null,
            },
          },
          media_content_type: {
            name: 'Content type',
            description:
              'The type of the content to play. Like image, music, tvshow, video, episode, channel or playlist.',
            required: true,
            example: 'music',
            selector: {
              text: null,
            },
          },
        },
        target: {
          entity: {
            domain: 'media_player',
          },
        },
      },
      shuffle_set: {
        name: 'Shuffle',
        description: 'Set shuffling state.',
        fields: {
          shuffle: {
            name: 'Shuffle',
            description: 'True/false for enabling/disabling shuffle.',
            required: true,
            selector: {
              boolean: null,
            },
          },
        },
        target: {
          entity: {
            domain: 'media_player',
          },
        },
      },
      unjoin: {
        name: 'Unjoin',
        description:
          'Unjoin the player from a group. Only works on platforms with support for player groups.',
        fields: {},
        target: {
          entity: {
            domain: 'media_player',
          },
        },
      },
      repeat_set: {
        name: 'Repeat',
        description: 'Set repeat mode',
        fields: {
          repeat: {
            name: 'Repeat mode',
            description: 'Repeat mode to set.',
            required: true,
            selector: {
              select: {
                options: [
                  {
                    label: 'Off',
                    value: 'off',
                  },
                  {
                    label: 'Repeat all',
                    value: 'all',
                  },
                  {
                    label: 'Repeat one',
                    value: 'one',
                  },
                ],
              },
            },
          },
        },
        target: {
          entity: {
            domain: 'media_player',
          },
        },
      },
    },
    automation: {
      trigger: {
        name: 'Trigger',
        description: 'Trigger the actions of an automation.',
        fields: {
          skip_condition: {
            name: 'Skip conditions',
            description: 'Whether or not the conditions will be skipped.',
            default: true,
            selector: {
              boolean: null,
            },
          },
        },
        target: {
          entity: {
            domain: 'automation',
          },
        },
      },
      toggle: {
        name: 'Toggle',
        description: 'Toggle (enable / disable) an automation.',
        fields: {},
        target: {
          entity: {
            domain: 'automation',
          },
        },
      },
      turn_on: {
        name: 'Turn on',
        description: 'Enable an automation.',
        fields: {},
        target: {
          entity: {
            domain: 'automation',
          },
        },
      },
      turn_off: {
        name: 'Turn off',
        description: 'Disable an automation.',
        fields: {
          stop_actions: {
            name: 'Stop actions',
            description: 'Stop currently running actions.',
            default: true,
            selector: {
              boolean: null,
            },
          },
        },
        target: {
          entity: {
            domain: 'automation',
          },
        },
      },
      reload: {
        name: 'Reload',
        description: 'Reload the automation configuration.',
        fields: {},
      },
    },
    input_select: {
      reload: {
        name: 'Reload',
        description: 'Reload the input_select configuration.',
        fields: {},
      },
      select_option: {
        name: 'Select',
        description: 'Select an option of an input select entity.',
        fields: {
          option: {
            name: 'Option',
            description: 'Option to be selected.',
            required: true,
            example: '"Item A"',
            selector: {
              text: null,
            },
          },
        },
        target: {
          entity: {
            domain: 'input_select',
          },
        },
      },
      select_next: {
        name: 'Next',
        description: 'Select the next options of an input select entity.',
        fields: {
          cycle: {
            name: 'Cycle',
            description:
              'If the option should cycle from the last to the first.',
            default: true,
            selector: {
              boolean: null,
            },
          },
        },
        target: {
          entity: {
            domain: 'input_select',
          },
        },
      },
      select_previous: {
        name: 'Previous',
        description: 'Select the previous options of an input select entity.',
        fields: {
          cycle: {
            name: 'Cycle',
            description:
              'If the option should cycle from the first to the last.',
            default: true,
            selector: {
              boolean: null,
            },
          },
        },
        target: {
          entity: {
            domain: 'input_select',
          },
        },
      },
      select_first: {
        name: 'First',
        description: 'Select the first option of an input select entity.',
        fields: {},
        target: {
          entity: {
            domain: 'input_select',
          },
        },
      },
      select_last: {
        name: 'Last',
        description: 'Select the last option of an input select entity.',
        fields: {},
        target: {
          entity: {
            domain: 'input_select',
          },
        },
      },
      set_options: {
        name: 'Set options',
        description: 'Set the options of an input select entity.',
        fields: {
          options: {
            name: 'Options',
            description: 'Options for the input select entity.',
            required: true,
            example: '["Item A", "Item B", "Item C"]',
            selector: {
              object: null,
            },
          },
        },
        target: {
          entity: {
            domain: 'input_select',
          },
        },
      },
    },
    input_datetime: {
      reload: {
        name: 'Reload',
        description: 'Reload the input_datetime configuration.',
        fields: {},
      },
      set_datetime: {
        name: 'Set',
        description:
          'This can be used to dynamically set the date and/or time.',
        fields: {
          date: {
            name: 'Date',
            description: 'The target date the entity should be set to.',
            example: '"2019-04-20"',
            selector: {
              text: null,
            },
          },
          time: {
            name: 'Time',
            description: 'The target time the entity should be set to.',
            example: '"05:04:20"',
            selector: {
              time: null,
            },
          },
          datetime: {
            name: 'Date & Time',
            description: 'The target date & time the entity should be set to.',
            example: '"2019-04-20 05:04:20"',
            selector: {
              text: null,
            },
          },
          timestamp: {
            name: 'Timestamp',
            description:
              'The target date & time the entity should be set to as expressed by a UNIX timestamp.',
            selector: {
              number: {
                min: 0,
                max: 9223372036854776000,
                mode: 'box',
              },
            },
          },
        },
        target: {
          entity: {
            domain: 'input_datetime',
          },
        },
      },
    },
    input_number: {
      reload: {
        name: 'Reload',
        description: 'Reload the input_number configuration.',
        fields: {},
      },
      set_value: {
        name: 'Set',
        description: 'Set the value of an input number entity.',
        fields: {
          value: {
            name: 'Value',
            description: 'The target value the entity should be set to.',
            required: true,
            selector: {
              number: {
                min: 0,
                max: 9223372036854776000,
                step: 0.001,
                mode: 'box',
              },
            },
          },
        },
        target: {
          entity: {
            domain: 'input_number',
          },
        },
      },
      increment: {
        name: 'Increment',
        description:
          'Increment the value of an input number entity by its stepping.',
        fields: {},
        target: {
          entity: {
            domain: 'input_number',
          },
        },
      },
      decrement: {
        name: 'Decrement',
        description:
          'Decrement the value of an input number entity by its stepping.',
        fields: {},
        target: {
          entity: {
            domain: 'input_number',
          },
        },
      },
    },
    input_text: {
      reload: {
        name: 'Reload',
        description: 'Reload the input_text configuration.',
        fields: {},
      },
      set_value: {
        name: 'Set',
        description: 'Set the value of an input text entity.',
        fields: {
          value: {
            name: 'Value',
            description: 'The target value the entity should be set to.',
            required: true,
            example: 'This is an example text',
            selector: {
              text: null,
            },
          },
        },
        target: {
          entity: {
            domain: 'input_text',
          },
        },
      },
    },
    remote: {
      turn_off: {
        name: 'Turn Off',
        description: 'Sends the Power Off Command.',
        fields: {},
        target: {
          entity: {
            domain: 'remote',
          },
        },
      },
      turn_on: {
        name: 'Turn On',
        description: 'Sends the Power On Command.',
        fields: {
          activity: {
            name: 'Activity',
            description: 'Activity ID or Activity Name to start.',
            example: 'BedroomTV',
            selector: {
              text: null,
            },
          },
        },
        target: {
          entity: {
            domain: 'remote',
          },
        },
      },
      toggle: {
        name: 'Toggle',
        description: 'Toggles a device.',
        fields: {},
        target: {
          entity: {
            domain: 'remote',
          },
        },
      },
      send_command: {
        name: 'Send Command',
        description: 'Sends a command or a list of commands to a device.',
        fields: {
          device: {
            name: 'Device',
            description: 'Device ID to send command to.',
            example: '32756745',
            selector: {
              text: null,
            },
          },
          command: {
            name: 'Command',
            description: 'A single command or a list of commands to send.',
            required: true,
            example: 'Play',
            selector: {
              object: null,
            },
          },
          num_repeats: {
            name: 'Repeats',
            description:
              'The number of times you want to repeat the command(s).',
            default: 1,
            selector: {
              number: {
                min: 0,
                max: 255,
              },
            },
          },
          delay_secs: {
            name: 'Delay Seconds',
            description:
              'The time you want to wait in between repeated commands.',
            default: 0.4,
            selector: {
              number: {
                min: 0,
                max: 60,
                step: 0.1,
                unit_of_measurement: 'seconds',
              },
            },
          },
          hold_secs: {
            name: 'Hold Seconds',
            description:
              'The time you want to have it held before the release is send.',
            default: 0,
            selector: {
              number: {
                min: 0,
                max: 60,
                step: 0.1,
                unit_of_measurement: 'seconds',
              },
            },
          },
        },
        target: {
          entity: {
            domain: 'remote',
          },
        },
      },
      learn_command: {
        name: 'Learn Command',
        description: 'Learns a command or a list of commands from a device.',
        fields: {
          device: {
            name: 'Device',
            description: 'Device ID to learn command from.',
            example: 'television',
            selector: {
              text: null,
            },
          },
          command: {
            name: 'Command',
            description: 'A single command or a list of commands to learn.',
            example: 'Turn on',
            selector: {
              object: null,
            },
          },
          command_type: {
            name: 'Command Type',
            description: 'The type of command to be learned.',
            default: 'ir',
            selector: {
              select: {
                options: ['ir', 'rf'],
              },
            },
          },
          alternative: {
            name: 'Alternative',
            description:
              'If code must be stored as alternative (useful for discrete remotes).',
            selector: {
              boolean: null,
            },
          },
          timeout: {
            name: 'Timeout',
            description: 'Timeout for the command to be learned.',
            selector: {
              number: {
                min: 0,
                max: 60,
                step: 5,
                unit_of_measurement: 'seconds',
              },
            },
          },
        },
        target: {
          entity: {
            domain: 'remote',
          },
        },
      },
      delete_command: {
        name: 'Delete Command',
        description:
          'Deletes a command or a list of commands from the database.',
        fields: {
          device: {
            name: 'Device',
            description:
              'Name of the device from which commands will be deleted.',
            example: 'television',
            selector: {
              text: null,
            },
          },
          command: {
            name: 'Command',
            description: 'A single command or a list of commands to delete.',
            required: true,
            example: 'Mute',
            selector: {
              object: null,
            },
          },
        },
        target: {
          entity: {
            domain: 'remote',
          },
        },
      },
    },
    light: {
      turn_on: {
        name: 'Turn on',
        description:
          'Turn on one or more lights and adjust properties of the light, even when they are turned on already.\n',
        fields: {
          transition: {
            name: 'Transition',
            description: 'Duration it takes to get to next state.',
            selector: {
              number: {
                min: 0,
                max: 300,
                unit_of_measurement: 'seconds',
              },
            },
          },
          rgb_color: {
            name: 'Color',
            description:
              'The color for the light (based on RGB - red, green, blue).',
            selector: {
              color_rgb: null,
            },
          },
          rgbw_color: {
            name: 'RGBW-color',
            description:
              'A list containing four integers between 0 and 255 representing the RGBW (red, green, blue, white) color for the light.',
            advanced: true,
            example: '[255, 100, 100, 50]',
            selector: {
              object: null,
            },
          },
          rgbww_color: {
            name: 'RGBWW-color',
            description:
              'A list containing five integers between 0 and 255 representing the RGBWW (red, green, blue, cold white, warm white) color for the light.',
            advanced: true,
            example: '[255, 100, 100, 50, 70]',
            selector: {
              object: null,
            },
          },
          color_name: {
            name: 'Color name',
            description: 'A human readable color name.',
            advanced: true,
            selector: {
              select: {
                options: [
                  'homeassistant',
                  'aliceblue',
                  'antiquewhite',
                  'aqua',
                  'aquamarine',
                  'azure',
                  'beige',
                  'bisque',
                  'blanchedalmond',
                  'blue',
                  'blueviolet',
                  'brown',
                  'burlywood',
                  'cadetblue',
                  'chartreuse',
                  'chocolate',
                  'coral',
                  'cornflowerblue',
                  'cornsilk',
                  'crimson',
                  'cyan',
                  'darkblue',
                  'darkcyan',
                  'darkgoldenrod',
                  'darkgray',
                  'darkgreen',
                  'darkgrey',
                  'darkkhaki',
                  'darkmagenta',
                  'darkolivegreen',
                  'darkorange',
                  'darkorchid',
                  'darkred',
                  'darksalmon',
                  'darkseagreen',
                  'darkslateblue',
                  'darkslategray',
                  'darkslategrey',
                  'darkturquoise',
                  'darkviolet',
                  'deeppink',
                  'deepskyblue',
                  'dimgray',
                  'dimgrey',
                  'dodgerblue',
                  'firebrick',
                  'floralwhite',
                  'forestgreen',
                  'fuchsia',
                  'gainsboro',
                  'ghostwhite',
                  'gold',
                  'goldenrod',
                  'gray',
                  'green',
                  'greenyellow',
                  'grey',
                  'honeydew',
                  'hotpink',
                  'indianred',
                  'indigo',
                  'ivory',
                  'khaki',
                  'lavender',
                  'lavenderblush',
                  'lawngreen',
                  'lemonchiffon',
                  'lightblue',
                  'lightcoral',
                  'lightcyan',
                  'lightgoldenrodyellow',
                  'lightgray',
                  'lightgreen',
                  'lightgrey',
                  'lightpink',
                  'lightsalmon',
                  'lightseagreen',
                  'lightskyblue',
                  'lightslategray',
                  'lightslategrey',
                  'lightsteelblue',
                  'lightyellow',
                  'lime',
                  'limegreen',
                  'linen',
                  'magenta',
                  'maroon',
                  'mediumaquamarine',
                  'mediumblue',
                  'mediumorchid',
                  'mediumpurple',
                  'mediumseagreen',
                  'mediumslateblue',
                  'mediumspringgreen',
                  'mediumturquoise',
                  'mediumvioletred',
                  'midnightblue',
                  'mintcream',
                  'mistyrose',
                  'moccasin',
                  'navajowhite',
                  'navy',
                  'navyblue',
                  'oldlace',
                  'olive',
                  'olivedrab',
                  'orange',
                  'orangered',
                  'orchid',
                  'palegoldenrod',
                  'palegreen',
                  'paleturquoise',
                  'palevioletred',
                  'papayawhip',
                  'peachpuff',
                  'peru',
                  'pink',
                  'plum',
                  'powderblue',
                  'purple',
                  'red',
                  'rosybrown',
                  'royalblue',
                  'saddlebrown',
                  'salmon',
                  'sandybrown',
                  'seagreen',
                  'seashell',
                  'sienna',
                  'silver',
                  'skyblue',
                  'slateblue',
                  'slategray',
                  'slategrey',
                  'snow',
                  'springgreen',
                  'steelblue',
                  'tan',
                  'teal',
                  'thistle',
                  'tomato',
                  'turquoise',
                  'violet',
                  'wheat',
                  'white',
                  'whitesmoke',
                  'yellow',
                  'yellowgreen',
                ],
              },
            },
          },
          hs_color: {
            name: 'Hue/Sat color',
            description:
              'Color for the light in hue/sat format. Hue is 0-360 and Sat is 0-100.',
            advanced: true,
            example: '[300, 70]',
            selector: {
              object: null,
            },
          },
          xy_color: {
            name: 'XY-color',
            description: 'Color for the light in XY-format.',
            advanced: true,
            example: '[0.52, 0.43]',
            selector: {
              object: null,
            },
          },
          color_temp: {
            name: 'Color temperature',
            description: 'Color temperature for the light in mireds.',
            selector: {
              color_temp: {
                min_mireds: 153,
                max_mireds: 500,
              },
            },
          },
          kelvin: {
            name: 'Color temperature (Kelvin)',
            description: 'Color temperature for the light in Kelvin.',
            advanced: true,
            selector: {
              number: {
                min: 2000,
                max: 6500,
                step: 100,
                unit_of_measurement: 'K',
              },
            },
          },
          brightness: {
            name: 'Brightness value',
            description:
              'Number indicating brightness, where 0 turns the light off, 1 is the minimum brightness and 255 is the maximum brightness supported by the light.',
            advanced: true,
            selector: {
              number: {
                min: 0,
                max: 255,
              },
            },
          },
          brightness_pct: {
            name: 'Brightness',
            description:
              'Number indicating percentage of full brightness, where 0 turns the light off, 1 is the minimum brightness and 100 is the maximum brightness supported by the light.',
            selector: {
              number: {
                min: 0,
                max: 100,
                unit_of_measurement: '%',
              },
            },
          },
          brightness_step: {
            name: 'Brightness step value',
            description: 'Change brightness by an amount.',
            advanced: true,
            selector: {
              number: {
                min: -225,
                max: 255,
              },
            },
          },
          brightness_step_pct: {
            name: 'Brightness step',
            description: 'Change brightness by a percentage.',
            selector: {
              number: {
                min: -100,
                max: 100,
                unit_of_measurement: '%',
              },
            },
          },
          white: {
            name: 'White',
            description:
              'Set the light to white mode and change its brightness, where 0 turns the light off, 1 is the minimum brightness and 255 is the maximum brightness supported by the light.',
            advanced: true,
            selector: {
              number: {
                min: 0,
                max: 255,
              },
            },
          },
          profile: {
            name: 'Profile',
            description: 'Name of a light profile to use.',
            advanced: true,
            example: 'relax',
            selector: {
              text: null,
            },
          },
          flash: {
            name: 'Flash',
            description: 'If the light should flash.',
            advanced: true,
            selector: {
              select: {
                options: [
                  {
                    label: 'Long',
                    value: 'long',
                  },
                  {
                    label: 'Short',
                    value: 'short',
                  },
                ],
              },
            },
          },
          effect: {
            name: 'Effect',
            description: 'Light effect.',
            selector: {
              text: null,
            },
          },
        },
        target: {
          entity: {
            domain: 'light',
          },
        },
      },
      turn_off: {
        name: 'Turn off',
        description: 'Turns off one or more lights.',
        fields: {
          transition: {
            name: 'Transition',
            description: 'Duration it takes to get to next state.',
            selector: {
              number: {
                min: 0,
                max: 300,
                unit_of_measurement: 'seconds',
              },
            },
          },
          flash: {
            name: 'Flash',
            description: 'If the light should flash.',
            advanced: true,
            selector: {
              select: {
                options: [
                  {
                    label: 'Long',
                    value: 'long',
                  },
                  {
                    label: 'Short',
                    value: 'short',
                  },
                ],
              },
            },
          },
        },
        target: {
          entity: {
            domain: 'light',
          },
        },
      },
      toggle: {
        name: 'Toggle',
        description:
          'Toggles one or more lights, from on to off, or, off to on, based on their current state.\n',
        fields: {
          transition: {
            name: 'Transition',
            description: 'Duration it takes to get to next state.',
            selector: {
              number: {
                min: 0,
                max: 300,
                unit_of_measurement: 'seconds',
              },
            },
          },
          rgb_color: {
            name: 'RGB-color',
            description: 'Color for the light in RGB-format.',
            advanced: true,
            example: '[255, 100, 100]',
            selector: {
              object: null,
            },
          },
          color_name: {
            name: 'Color name',
            description: 'A human readable color name.',
            advanced: true,
            selector: {
              select: {
                options: [
                  'homeassistant',
                  'aliceblue',
                  'antiquewhite',
                  'aqua',
                  'aquamarine',
                  'azure',
                  'beige',
                  'bisque',
                  'blanchedalmond',
                  'blue',
                  'blueviolet',
                  'brown',
                  'burlywood',
                  'cadetblue',
                  'chartreuse',
                  'chocolate',
                  'coral',
                  'cornflowerblue',
                  'cornsilk',
                  'crimson',
                  'cyan',
                  'darkblue',
                  'darkcyan',
                  'darkgoldenrod',
                  'darkgray',
                  'darkgreen',
                  'darkgrey',
                  'darkkhaki',
                  'darkmagenta',
                  'darkolivegreen',
                  'darkorange',
                  'darkorchid',
                  'darkred',
                  'darksalmon',
                  'darkseagreen',
                  'darkslateblue',
                  'darkslategray',
                  'darkslategrey',
                  'darkturquoise',
                  'darkviolet',
                  'deeppink',
                  'deepskyblue',
                  'dimgray',
                  'dimgrey',
                  'dodgerblue',
                  'firebrick',
                  'floralwhite',
                  'forestgreen',
                  'fuchsia',
                  'gainsboro',
                  'ghostwhite',
                  'gold',
                  'goldenrod',
                  'gray',
                  'green',
                  'greenyellow',
                  'grey',
                  'honeydew',
                  'hotpink',
                  'indianred',
                  'indigo',
                  'ivory',
                  'khaki',
                  'lavender',
                  'lavenderblush',
                  'lawngreen',
                  'lemonchiffon',
                  'lightblue',
                  'lightcoral',
                  'lightcyan',
                  'lightgoldenrodyellow',
                  'lightgray',
                  'lightgreen',
                  'lightgrey',
                  'lightpink',
                  'lightsalmon',
                  'lightseagreen',
                  'lightskyblue',
                  'lightslategray',
                  'lightslategrey',
                  'lightsteelblue',
                  'lightyellow',
                  'lime',
                  'limegreen',
                  'linen',
                  'magenta',
                  'maroon',
                  'mediumaquamarine',
                  'mediumblue',
                  'mediumorchid',
                  'mediumpurple',
                  'mediumseagreen',
                  'mediumslateblue',
                  'mediumspringgreen',
                  'mediumturquoise',
                  'mediumvioletred',
                  'midnightblue',
                  'mintcream',
                  'mistyrose',
                  'moccasin',
                  'navajowhite',
                  'navy',
                  'navyblue',
                  'oldlace',
                  'olive',
                  'olivedrab',
                  'orange',
                  'orangered',
                  'orchid',
                  'palegoldenrod',
                  'palegreen',
                  'paleturquoise',
                  'palevioletred',
                  'papayawhip',
                  'peachpuff',
                  'peru',
                  'pink',
                  'plum',
                  'powderblue',
                  'purple',
                  'red',
                  'rosybrown',
                  'royalblue',
                  'saddlebrown',
                  'salmon',
                  'sandybrown',
                  'seagreen',
                  'seashell',
                  'sienna',
                  'silver',
                  'skyblue',
                  'slateblue',
                  'slategray',
                  'slategrey',
                  'snow',
                  'springgreen',
                  'steelblue',
                  'tan',
                  'teal',
                  'thistle',
                  'tomato',
                  'turquoise',
                  'violet',
                  'wheat',
                  'white',
                  'whitesmoke',
                  'yellow',
                  'yellowgreen',
                ],
              },
            },
          },
          hs_color: {
            name: 'Hue/Sat color',
            description:
              'Color for the light in hue/sat format. Hue is 0-360 and Sat is 0-100.',
            advanced: true,
            example: '[300, 70]',
            selector: {
              object: null,
            },
          },
          xy_color: {
            name: 'XY-color',
            description: 'Color for the light in XY-format.',
            advanced: true,
            example: '[0.52, 0.43]',
            selector: {
              object: null,
            },
          },
          color_temp: {
            name: 'Color temperature (mireds)',
            description: 'Color temperature for the light in mireds.',
            advanced: true,
            selector: {
              color_temp: null,
            },
          },
          kelvin: {
            name: 'Color temperature (Kelvin)',
            description: 'Color temperature for the light in Kelvin.',
            advanced: true,
            selector: {
              number: {
                min: 2000,
                max: 6500,
                step: 100,
                unit_of_measurement: 'K',
              },
            },
          },
          white_value: {
            name: 'White level',
            description: 'Number indicating level of white.',
            advanced: true,
            selector: {
              number: {
                min: 0,
                max: 255,
              },
            },
          },
          brightness: {
            name: 'Brightness value',
            description:
              'Number indicating brightness, where 0 turns the light off, 1 is the minimum brightness and 255 is the maximum brightness supported by the light.',
            advanced: true,
            selector: {
              number: {
                min: 0,
                max: 255,
              },
            },
          },
          brightness_pct: {
            name: 'Brightness',
            description:
              'Number indicating percentage of full brightness, where 0 turns the light off, 1 is the minimum brightness and 100 is the maximum brightness supported by the light.',
            selector: {
              number: {
                min: 0,
                max: 100,
                unit_of_measurement: '%',
              },
            },
          },
          profile: {
            name: 'Profile',
            description: 'Name of a light profile to use.',
            advanced: true,
            example: 'relax',
            selector: {
              text: null,
            },
          },
          flash: {
            name: 'Flash',
            description: 'If the light should flash.',
            advanced: true,
            selector: {
              select: {
                options: [
                  {
                    label: 'Long',
                    value: 'long',
                  },
                  {
                    label: 'Short',
                    value: 'short',
                  },
                ],
              },
            },
          },
          effect: {
            name: 'Effect',
            description: 'Light effect.',
            selector: {
              text: null,
            },
          },
        },
        target: {
          entity: {
            domain: 'light',
          },
        },
      },
    },
    input_button: {
      reload: {
        name: '',
        description: '',
        fields: {},
      },
      press: {
        name: 'Press',
        description: 'Press the input button entity.',
        fields: {},
        target: {
          entity: {
            domain: 'input_button',
          },
        },
      },
    },
    input_boolean: {
      reload: {
        name: 'Reload',
        description: 'Reload the input_boolean configuration',
        fields: {},
      },
      turn_on: {
        name: 'Turn on',
        description: 'Turn on an input boolean',
        fields: {},
        target: {
          entity: {
            domain: 'input_boolean',
          },
        },
      },
      turn_off: {
        name: 'Turn off',
        description: 'Turn off an input boolean',
        fields: {},
        target: {
          entity: {
            domain: 'input_boolean',
          },
        },
      },
      toggle: {
        name: 'Toggle',
        description: 'Toggle an input boolean',
        fields: {},
        target: {
          entity: {
            domain: 'input_boolean',
          },
        },
      },
    },
    homekit: {
      reset_accessory: {
        name: 'Reset accessory',
        description: 'Reset a HomeKit accessory',
        fields: {},
        target: {
          entity: {},
        },
      },
      unpair: {
        name: 'Unpair an accessory or bridge',
        description:
          'Forcefully remove all pairings from an accessory to allow re-pairing. Use this service if the accessory is no longer responsive, and you want to avoid deleting and re-adding the entry. Room locations, and accessory preferences will be lost.',
        fields: {},
        target: {
          device: {
            integration: 'homekit',
          },
        },
      },
      reload: {
        name: 'Reload',
        description: 'Reload homekit and re-process YAML configuration',
        fields: {},
      },
    },
    tts: {
      google_translate_say: {
        name: 'Say an TTS message with google_translate',
        description:
          'Say something using text-to-speech on a media player with google_translate.',
        fields: {
          entity_id: {
            name: 'Entity',
            description: 'Name(s) of media player entities.',
            required: true,
            selector: {
              entity: {
                domain: 'media_player',
              },
            },
          },
          message: {
            name: 'Message',
            description: 'Text to speak on devices.',
            example: 'My name is hanna',
            required: true,
            selector: {
              text: null,
            },
          },
          cache: {
            name: 'Cache',
            description: 'Control file cache of this message.',
            default: false,
            selector: {
              boolean: null,
            },
          },
          language: {
            name: 'Language',
            description: 'Language to use for speech generation.',
            example: 'ru',
            selector: {
              text: null,
            },
          },
          options: {
            name: 'Options',
            description:
              'A dictionary containing platform-specific options. Optional depending on the platform.',
            advanced: true,
            example: 'platform specific',
            selector: {
              object: null,
            },
          },
        },
      },
      clear_cache: {
        name: 'Clear TTS cache',
        description: 'Remove all text-to-speech cache files and RAM cache.',
        fields: {},
      },
    },
    lifx: {
      set_state: {
        name: 'Set State',
        description:
          'Set a color/brightness and possibly turn the light on/off.',
        fields: {
          infrared: {
            name: 'infrared',
            description:
              'Automatic infrared level when light brightness is low.',
            selector: {
              number: {
                min: 0,
                max: 255,
              },
            },
          },
          zones: {
            name: 'Zones',
            description:
              'List of zone numbers to affect (8 per LIFX Z, starts at 0).',
            example: '[0,5]',
            selector: {
              object: null,
            },
          },
          transition: {
            name: 'Transition',
            description: 'Duration it takes to get to the final state.',
            selector: {
              number: {
                min: 0,
                max: 3600,
                unit_of_measurement: 'seconds',
              },
            },
          },
          power: {
            name: 'Power',
            description:
              'Turn the light on or off. Leave out to keep the power as it is.',
            selector: {
              boolean: null,
            },
          },
        },
        target: {
          entity: {
            integration: 'lifx',
            domain: 'light',
          },
        },
      },
      effect_pulse: {
        name: 'Pulse effect',
        description: 'Run a flash effect by changing to a color and back.',
        fields: {
          mode: {
            name: 'Mode',
            description: 'Decides how colors are changed.',
            selector: {
              select: {
                options: ['blink', 'breathe', 'ping', 'strobe', 'solid'],
              },
            },
          },
          brightness: {
            name: 'Brightness',
            description: 'Number indicating brightness of the temporary color.',
            selector: {
              number: {
                min: 0,
                max: 255,
              },
            },
          },
          color_name: {
            name: 'Color name',
            description: 'A human readable color name.',
            example: 'red',
            selector: {
              text: null,
            },
          },
          rgb_color: {
            name: 'RGB color',
            description: 'The temporary color in RGB-format.',
            example: '[255, 100, 100]',
            selector: {
              object: null,
            },
          },
          period: {
            name: 'Period',
            description: 'Duration of the effect.',
            default: 1,
            selector: {
              number: {
                min: 0.05,
                max: 60,
                step: 0.05,
                unit_of_measurement: 'seconds',
              },
            },
          },
          cycles: {
            name: 'Cycles',
            description: 'Number of times the effect should run.',
            default: 1,
            selector: {
              number: {
                min: 1,
                max: 10000,
              },
            },
          },
          power_on: {
            name: 'Power on',
            description:
              'Powered off lights are temporarily turned on during the effect.',
            default: true,
            selector: {
              boolean: null,
            },
          },
        },
        target: {
          entity: {
            integration: 'lifx',
            domain: 'light',
          },
        },
      },
      effect_colorloop: {
        name: 'Color loop effect',
        description: 'Run an effect with looping colors.',
        fields: {
          brightness: {
            name: 'Brightness',
            description:
              'Number indicating brightness of the effect. Leave this out to maintain the current brightness of each participating light.',
            selector: {
              number: {
                min: 0,
                max: 255,
              },
            },
          },
          period: {
            name: 'Period',
            description: 'Duration between color changes.',
            default: 60,
            selector: {
              number: {
                min: 0.05,
                max: 3600,
                step: 0.05,
                unit_of_measurement: 'seconds',
              },
            },
          },
          change: {
            name: 'Change',
            description:
              'Hue movement per period, in degrees on a color wheel.',
            default: 20,
            selector: {
              number: {
                min: 0,
                max: 360,
                unit_of_measurement: '°',
              },
            },
          },
          spread: {
            name: 'Spread',
            description:
              'Maximum hue difference between participating lights, in degrees on a color wheel.',
            default: 30,
            selector: {
              number: {
                min: 0,
                max: 360,
                unit_of_measurement: '°',
              },
            },
          },
          power_on: {
            name: 'Power on',
            description:
              'Powered off lights are temporarily turned on during the effect.',
            default: true,
            selector: {
              boolean: null,
            },
          },
        },
        target: {
          entity: {
            integration: 'lifx',
            domain: 'light',
          },
        },
      },
      effect_stop: {
        name: 'Stop effect',
        description: 'Stop a running effect.',
        fields: {},
        target: {
          entity: {
            integration: 'lifx',
            domain: 'light',
          },
        },
      },
    },
    notify: {
      persistent_notification: {
        name: 'Send a persistent notification',
        description: 'Sends a notification that is visible in the front-end.',
        fields: {
          message: {
            name: 'Message',
            description: 'Message body of the notification.',
            required: true,
            example: 'The garage door has been open for 10 minutes.',
            selector: {
              text: null,
            },
          },
          title: {
            name: 'Title',
            description: 'Title for your notification.',
            example: 'Your Garage Door Friend',
            selector: {
              text: null,
            },
          },
        },
      },
      mobile_app_marks_iphone: {
        name: 'Send a notification via mobile_app_marks_iphone',
        description:
          'Sends a notification message using the mobile_app_marks_iphone integration.',
        fields: {
          message: {
            name: 'Message',
            description: 'Message body of the notification.',
            required: true,
            example: 'The garage door has been open for 10 minutes.',
            selector: {
              text: null,
            },
          },
          title: {
            name: 'Title',
            description: 'Title for your notification.',
            example: 'Your Garage Door Friend',
            selector: {
              text: null,
            },
          },
          target: {
            name: 'Target',
            description:
              'An array of targets to send the notification to. Optional depending on the platform.',
            example: 'platform specific',
            selector: {
              object: null,
            },
          },
          data: {
            name: 'Data',
            description:
              'Extended information for notification. Optional depending on the platform.',
            example: 'platform specific',
            selector: {
              object: null,
            },
          },
        },
      },
      mobile_app_mark_lycks_ipad: {
        name: 'Send a notification via mobile_app_mark_lycks_ipad',
        description:
          'Sends a notification message using the mobile_app_mark_lycks_ipad integration.',
        fields: {
          message: {
            name: 'Message',
            description: 'Message body of the notification.',
            required: true,
            example: 'The garage door has been open for 10 minutes.',
            selector: {
              text: null,
            },
          },
          title: {
            name: 'Title',
            description: 'Title for your notification.',
            example: 'Your Garage Door Friend',
            selector: {
              text: null,
            },
          },
          target: {
            name: 'Target',
            description:
              'An array of targets to send the notification to. Optional depending on the platform.',
            example: 'platform specific',
            selector: {
              object: null,
            },
          },
          data: {
            name: 'Data',
            description:
              'Extended information for notification. Optional depending on the platform.',
            example: 'platform specific',
            selector: {
              object: null,
            },
          },
        },
      },
      notify: {
        name: 'Send a notification with notify',
        description: 'Sends a notification message using the notify service.',
        fields: {
          message: {
            name: 'Message',
            description: 'Message body of the notification.',
            required: true,
            example: 'The garage door has been open for 10 minutes.',
            selector: {
              text: null,
            },
          },
          title: {
            name: 'Title',
            description: 'Title for your notification.',
            example: 'Your Garage Door Friend',
            selector: {
              text: null,
            },
          },
          target: {
            name: 'Target',
            description:
              'An array of targets to send the notification to. Optional depending on the platform.',
            example: 'platform specific',
            selector: {
              object: null,
            },
          },
          data: {
            name: 'Data',
            description:
              'Extended information for notification. Optional depending on the platform.',
            example: 'platform specific',
            selector: {
              object: null,
            },
          },
        },
      },
    },
    device_tracker: {
      see: {
        name: 'See',
        description: 'Control tracked device.',
        fields: {
          mac: {
            name: 'MAC address',
            description: 'MAC address of device',
            example: 'FF:FF:FF:FF:FF:FF',
            selector: {
              text: null,
            },
          },
          dev_id: {
            name: 'Device ID',
            description: 'Id of device (find id in known_devices.yaml).',
            example: 'phonedave',
            selector: {
              text: null,
            },
          },
          host_name: {
            name: 'Host name',
            description: 'Hostname of device',
            example: 'Dave',
            selector: {
              text: null,
            },
          },
          location_name: {
            name: 'Location name',
            description:
              'Name of location where device is located (not_home is away).',
            example: 'home',
            selector: {
              text: null,
            },
          },
          gps: {
            name: 'GPS coordinates',
            description:
              'GPS coordinates where device is located (latitude, longitude).',
            example: '[51.509802, -0.086692]',
            selector: {
              object: null,
            },
          },
          gps_accuracy: {
            name: 'GPS accuracy',
            description: 'Accuracy of GPS coordinates.',
            selector: {
              number: {
                min: 1,
                max: 100,
                unit_of_measurement: '%',
              },
            },
          },
          battery: {
            name: 'Battery level',
            description: 'Battery level of device.',
            selector: {
              number: {
                min: 0,
                max: 100,
                unit_of_measurement: '%',
              },
            },
          },
        },
      },
    },
    hue: {
      hue_activate_scene: {
        name: 'Activate scene',
        description: 'Activate a hue scene stored in the hue hub.',
        fields: {
          group_name: {
            name: 'Group',
            description: 'Name of hue group/room from the hue app.',
            example: 'Living Room',
            selector: {
              text: null,
            },
          },
          scene_name: {
            name: 'Scene',
            description: 'Name of hue scene from the hue app.',
            example: 'Energize',
            selector: {
              text: null,
            },
          },
          dynamic: {
            name: 'Dynamic',
            description:
              'Enable dynamic mode of the scene (V2 bridges and supported scenes only).',
            selector: {
              boolean: null,
            },
          },
        },
      },
      activate_scene: {
        name: 'Activate Hue Scene',
        description: 'Activate a Hue scene with more control over the options.',
        fields: {
          transition: {
            name: 'Transition',
            description:
              'Transition duration it takes to bring devices to the state defined in the scene.',
            selector: {
              number: {
                min: 0,
                max: 300,
                unit_of_measurement: 'seconds',
              },
            },
          },
          dynamic: {
            name: 'Dynamic',
            description: 'Enable dynamic mode of the scene.',
            selector: {
              boolean: null,
            },
          },
          speed: {
            name: 'Speed',
            description: 'Speed of dynamic palette for this scene',
            advanced: true,
            selector: {
              number: {
                min: 0,
                max: 100,
              },
            },
          },
          brightness: {
            name: 'Brightness',
            description: 'Set brightness for the scene.',
            advanced: true,
            selector: {
              number: {
                min: 0,
                max: 255,
              },
            },
          },
        },
        target: {
          entity: {
            domain: 'scene',
            integration: 'hue',
          },
        },
      },
    },
    switch: {
      turn_off: {
        name: 'Turn off',
        description: 'Turn a switch off',
        fields: {},
        target: {
          entity: {
            domain: 'switch',
          },
        },
      },
      turn_on: {
        name: 'Turn on',
        description: 'Turn a switch on',
        fields: {},
        target: {
          entity: {
            domain: 'switch',
          },
        },
      },
      toggle: {
        name: 'Toggle',
        description: 'Toggles a switch state',
        fields: {},
        target: {
          entity: {
            domain: 'switch',
          },
        },
      },
    },
    climate: {
      turn_on: {
        name: 'Turn on',
        description: 'Turn climate device on.',
        fields: {},
        target: {
          entity: {
            domain: 'climate',
          },
        },
      },
      turn_off: {
        name: 'Turn off',
        description: 'Turn climate device off.',
        fields: {},
        target: {
          entity: {
            domain: 'climate',
          },
        },
      },
      set_hvac_mode: {
        name: 'Set HVAC mode',
        description: 'Set HVAC operation mode for climate device.',
        fields: {
          hvac_mode: {
            name: 'HVAC mode',
            description: 'New value of operation mode.',
            selector: {
              select: {
                options: [
                  {
                    label: 'Off',
                    value: 'off',
                  },
                  {
                    label: 'Auto',
                    value: 'auto',
                  },
                  {
                    label: 'Cool',
                    value: 'cool',
                  },
                  {
                    label: 'Dry',
                    value: 'dry',
                  },
                  {
                    label: 'Fan Only',
                    value: 'fan_only',
                  },
                  {
                    label: 'Heat/Cool',
                    value: 'heat_cool',
                  },
                  {
                    label: 'Heat',
                    value: 'heat',
                  },
                ],
              },
            },
          },
        },
        target: {
          entity: {
            domain: 'climate',
          },
        },
      },
      set_preset_mode: {
        name: 'Set preset mode',
        description: 'Set preset mode for climate device.',
        fields: {
          preset_mode: {
            name: 'Preset mode',
            description: 'New value of preset mode.',
            required: true,
            example: 'away',
            selector: {
              text: null,
            },
          },
        },
        target: {
          entity: {
            domain: 'climate',
          },
        },
      },
      set_aux_heat: {
        name: 'Turn on/off auxiliary heater',
        description: 'Turn auxiliary heater on/off for climate device.',
        fields: {
          aux_heat: {
            name: 'Auxiliary heating',
            description: 'New value of auxiliary heater.',
            required: true,
            selector: {
              boolean: null,
            },
          },
        },
        target: {
          entity: {
            domain: 'climate',
          },
        },
      },
      set_temperature: {
        name: 'Set temperature',
        description: 'Set target temperature of climate device.',
        fields: {
          temperature: {
            name: 'Temperature',
            description: 'New target temperature for HVAC.',
            selector: {
              number: {
                min: 0,
                max: 250,
                step: 0.1,
                mode: 'box',
              },
            },
          },
          target_temp_high: {
            name: 'Target temperature high',
            description: 'New target high temperature for HVAC.',
            advanced: true,
            selector: {
              number: {
                min: 0,
                max: 250,
                step: 0.1,
                mode: 'box',
              },
            },
          },
          target_temp_low: {
            name: 'Target temperature low',
            description: 'New target low temperature for HVAC.',
            advanced: true,
            selector: {
              number: {
                min: 0,
                max: 250,
                step: 0.1,
                mode: 'box',
              },
            },
          },
          hvac_mode: {
            name: 'HVAC mode',
            description: 'HVAC operation mode to set temperature to.',
            selector: {
              select: {
                options: [
                  {
                    label: 'Off',
                    value: 'off',
                  },
                  {
                    label: 'Auto',
                    value: 'auto',
                  },
                  {
                    label: 'Cool',
                    value: 'cool',
                  },
                  {
                    label: 'Dry',
                    value: 'dry',
                  },
                  {
                    label: 'Fan Only',
                    value: 'fan_only',
                  },
                  {
                    label: 'Heat/Cool',
                    value: 'heat_cool',
                  },
                  {
                    label: 'Heat',
                    value: 'heat',
                  },
                ],
              },
            },
          },
        },
        target: {
          entity: {
            domain: 'climate',
          },
        },
      },
      set_humidity: {
        name: 'Set target humidity',
        description: 'Set target humidity of climate device.',
        fields: {
          humidity: {
            name: 'Humidity',
            description: 'New target humidity for climate device.',
            required: true,
            selector: {
              number: {
                min: 30,
                max: 99,
                unit_of_measurement: '%',
              },
            },
          },
        },
        target: {
          entity: {
            domain: 'climate',
          },
        },
      },
      set_fan_mode: {
        name: 'Set fan mode',
        description: 'Set fan operation for climate device.',
        fields: {
          fan_mode: {
            name: 'Fan mode',
            description: 'New value of fan mode.',
            required: true,
            example: 'low',
            selector: {
              text: null,
            },
          },
        },
        target: {
          entity: {
            domain: 'climate',
          },
        },
      },
      set_swing_mode: {
        name: 'Set swing mode',
        description: 'Set swing operation for climate device.',
        fields: {
          swing_mode: {
            name: 'Swing mode',
            description: 'New value of swing mode.',
            required: true,
            example: 'horizontal',
            selector: {
              text: null,
            },
          },
        },
        target: {
          entity: {
            domain: 'climate',
          },
        },
      },
    },
    humidifier: {
      turn_on: {
        name: 'Turn on',
        description: 'Turn humidifier device on.',
        fields: {},
        target: {
          entity: {
            domain: 'humidifier',
          },
        },
      },
      turn_off: {
        name: 'Turn off',
        description: 'Turn humidifier device off.',
        fields: {},
        target: {
          entity: {
            domain: 'humidifier',
          },
        },
      },
      toggle: {
        name: 'Toggle',
        description: 'Toggles a humidifier device.',
        fields: {},
        target: {
          entity: {
            domain: 'humidifier',
          },
        },
      },
      set_mode: {
        name: 'Set mode',
        description: 'Set mode for humidifier device.',
        fields: {
          mode: {
            description: 'New mode',
            required: true,
            example: 'away',
            selector: {
              text: null,
            },
          },
        },
        target: {
          entity: {
            domain: 'humidifier',
          },
        },
      },
      set_humidity: {
        name: 'Set humidity',
        description: 'Set target humidity of humidifier device.',
        fields: {
          humidity: {
            description: 'New target humidity for humidifier device.',
            required: true,
            selector: {
              number: {
                min: 0,
                max: 100,
                unit_of_measurement: '%',
              },
            },
          },
        },
        target: {
          entity: {
            domain: 'humidifier',
          },
        },
      },
    },
    ecobee: {
      create_vacation: {
        name: 'Create vacation',
        description:
          'Create a vacation on the selected thermostat. Note: start/end date and time must all be specified together for these parameters to have an effect. If start/end date and time are not specified, the vacation will start immediately and last 14 days (unless deleted earlier).',
        fields: {
          entity_id: {
            name: 'Entity',
            description: 'ecobee thermostat on which to create the vacation.',
            required: true,
            selector: {
              entity: {
                integration: 'ecobee',
                domain: 'climate',
              },
            },
          },
          vacation_name: {
            name: 'Vacation name',
            description:
              'Name of the vacation to create; must be unique on the thermostat.',
            required: true,
            example: 'Skiing',
            selector: {
              text: null,
            },
          },
          cool_temp: {
            name: 'Cool temperature',
            description: 'Cooling temperature during the vacation.',
            required: true,
            selector: {
              number: {
                min: 7,
                max: 95,
                step: 0.5,
                unit_of_measurement: '°',
              },
            },
          },
          heat_temp: {
            name: 'Heat temperature',
            description: 'Heating temperature during the vacation.',
            required: true,
            selector: {
              number: {
                min: 7,
                max: 95,
                step: 0.5,
                unit_of_measurement: '°',
              },
            },
          },
          start_date: {
            name: 'Start date',
            description:
              'Date the vacation starts in the YYYY-MM-DD format (optional, immediately if not provided along with start_time, end_date, and end_time).',
            example: '2019-03-15',
            selector: {
              text: null,
            },
          },
          start_time: {
            name: 'start time',
            description:
              'Time the vacation starts, in the local time of the thermostat, in the 24-hour format "HH:MM:SS"',
            example: '20:00:00',
            selector: {
              time: null,
            },
          },
          end_date: {
            name: 'End date',
            description:
              'Date the vacation ends in the YYYY-MM-DD format (optional, 14 days from now if not provided along with start_date, start_time, and end_time).',
            example: '2019-03-20',
            selector: {
              text: null,
            },
          },
          end_time: {
            name: 'End time',
            description:
              'Time the vacation ends, in the local time of the thermostat, in the 24-hour format "HH:MM:SS"',
            example: '20:00:00',
            selector: {
              time: null,
            },
          },
          fan_mode: {
            name: 'Fan mode',
            description: 'Fan mode of the thermostat during the vacation.',
            default: 'auto',
            selector: {
              select: {
                options: ['on', 'auto'],
              },
            },
          },
          fan_min_on_time: {
            name: 'Fan minimum on time',
            description:
              'Minimum number of minutes to run the fan each hour (0 to 60) during the vacation.',
            default: 0,
            selector: {
              number: {
                min: 0,
                max: 60,
                unit_of_measurement: 'minutes',
              },
            },
          },
        },
      },
      delete_vacation: {
        name: 'Delete vacation',
        description: 'Delete a vacation on the selected thermostat.',
        fields: {
          entity_id: {
            name: 'Entity',
            description: 'ecobee thermostat on which to delete the vacation.',
            required: true,
            example: 'climate.kitchen',
            selector: {
              entity: {
                integration: 'ecobee',
                domain: 'climate',
              },
            },
          },
          vacation_name: {
            name: 'Vacation name',
            description: 'Name of the vacation to delete.',
            required: true,
            example: 'Skiing',
            selector: {
              text: null,
            },
          },
        },
      },
      set_fan_min_on_time: {
        name: 'Set fan minimum on time',
        description: 'Set the minimum fan on time.',
        fields: {
          entity_id: {
            name: 'Entity',
            description: 'Name(s) of entities to change.',
            selector: {
              entity: {
                integration: 'ecobee',
                domain: 'climate',
              },
            },
          },
          fan_min_on_time: {
            name: 'Fan minimum on time',
            description: 'New value of fan min on time.',
            required: true,
            selector: {
              number: {
                min: 0,
                max: 60,
                unit_of_measurement: 'minutes',
              },
            },
          },
        },
      },
      resume_program: {
        name: 'Resume program',
        description: 'Resume the programmed schedule.',
        fields: {
          entity_id: {
            name: 'Entity',
            description: 'Name(s) of entities to change.',
            selector: {
              entity: {
                integration: 'ecobee',
                domain: 'climate',
              },
            },
          },
          resume_all: {
            name: 'Resume all',
            description:
              'Resume all events and return to the scheduled program.',
            default: false,
            selector: {
              boolean: null,
            },
          },
        },
      },
      set_dst_mode: {
        name: 'Set Daylight savings time mode',
        description: 'Enable/disable automatic daylight savings time.',
        fields: {
          dst_enabled: {
            name: 'Daylight savings time enabled',
            description: 'Enable automatic daylight savings time.',
            required: true,
            selector: {
              boolean: null,
            },
          },
        },
        target: {
          entity: {
            integration: 'ecobee',
            domain: 'climate',
          },
        },
      },
      set_mic_mode: {
        name: 'Set mic mode',
        description: 'Enable/disable Alexa mic (only for Ecobee 4).',
        fields: {
          mic_enabled: {
            name: 'Mic enabled',
            description: 'Enable Alexa mic.',
            required: true,
            selector: {
              boolean: null,
            },
          },
        },
        target: {
          entity: {
            integration: 'ecobee',
            domain: 'climate',
          },
        },
      },
      set_occupancy_modes: {
        name: 'Set occupancy modes',
        description: 'Enable/disable Smart Home/Away and Follow Me modes.',
        fields: {
          auto_away: {
            name: 'Auto away',
            description: 'Enable Smart Home/Away mode.',
            selector: {
              boolean: null,
            },
          },
          follow_me: {
            name: 'Follow me',
            description: 'Enable Follow Me mode.',
            selector: {
              boolean: null,
            },
          },
        },
        target: {
          entity: {
            integration: 'ecobee',
            domain: 'climate',
          },
        },
      },
    },
    vacuum: {
      turn_on: {
        name: 'Turn on',
        description: 'Start a new cleaning task.',
        fields: {},
        target: {
          entity: {
            domain: 'vacuum',
          },
        },
      },
      turn_off: {
        name: 'Turn off',
        description: 'Stop the current cleaning task and return to home.',
        fields: {},
        target: {
          entity: {
            domain: 'vacuum',
          },
        },
      },
      toggle: {
        name: '',
        description: '',
        fields: {},
      },
      start_pause: {
        name: 'Start/Pause',
        description: 'Start, pause, or resume the cleaning task.',
        fields: {},
        target: {
          entity: {
            domain: 'vacuum',
          },
        },
      },
      start: {
        name: 'Start',
        description: 'Start or resume the cleaning task.',
        fields: {},
        target: {
          entity: {
            domain: 'vacuum',
          },
        },
      },
      pause: {
        name: 'Pause',
        description: 'Pause the cleaning task.',
        fields: {},
        target: {
          entity: {
            domain: 'vacuum',
          },
        },
      },
      return_to_base: {
        name: 'Return to base',
        description: 'Tell the vacuum cleaner to return to its dock.',
        fields: {},
        target: {
          entity: {
            domain: 'vacuum',
          },
        },
      },
      clean_spot: {
        name: 'Clean spot',
        description: 'Tell the vacuum cleaner to do a spot clean-up.',
        fields: {},
        target: {
          entity: {
            domain: 'vacuum',
          },
        },
      },
      locate: {
        name: 'Locate',
        description: 'Locate the vacuum cleaner robot.',
        fields: {},
        target: {
          entity: {
            domain: 'vacuum',
          },
        },
      },
      stop: {
        name: 'Stop',
        description: 'Stop the current cleaning task.',
        fields: {},
        target: {
          entity: {
            domain: 'vacuum',
          },
        },
      },
      set_fan_speed: {
        name: 'Set fan speed',
        description: 'Set the fan speed of the vacuum cleaner.',
        fields: {
          fan_speed: {
            name: 'Fan speed',
            description:
              "Platform dependent vacuum cleaner fan speed, with speed steps, like 'medium' or by percentage, between 0 and 100.",
            required: true,
            example: 'low',
            selector: {
              text: null,
            },
          },
        },
        target: {
          entity: {
            domain: 'vacuum',
          },
        },
      },
      send_command: {
        name: 'Send command',
        description: 'Send a raw command to the vacuum cleaner.',
        fields: {
          command: {
            name: 'Command',
            description: 'Command to execute.',
            required: true,
            example: 'set_dnd_timer',
            selector: {
              text: null,
            },
          },
          params: {
            name: 'Parameters',
            description: 'Parameters for the command.',
            example: '{ "key": "value" }',
            selector: {
              object: null,
            },
          },
        },
        target: {
          entity: {
            domain: 'vacuum',
          },
        },
      },
    },
    select: {
      select_option: {
        name: 'Select',
        description: 'Select an option of an select entity.',
        fields: {
          option: {
            name: 'Option',
            description: 'Option to be selected.',
            required: true,
            example: '"Item A"',
            selector: {
              text: null,
            },
          },
        },
        target: {
          entity: {
            domain: 'select',
          },
        },
      },
    },
    button: {
      press: {
        name: 'Press',
        description: 'Press the button entity.',
        fields: {},
        target: {
          entity: {
            domain: 'button',
          },
        },
      },
    },
    number: {
      set_value: {
        name: 'Set',
        description: 'Set the value of a Number entity.',
        fields: {
          value: {
            name: 'Value',
            description: 'The target value the entity should be set to.',
            example: 42,
            selector: {
              text: null,
            },
          },
        },
        target: {
          entity: {
            domain: 'number',
          },
        },
      },
    },
    camera: {
      enable_motion_detection: {
        name: 'Enable motion detection',
        description: 'Enable the motion detection in a camera.',
        fields: {},
        target: {
          entity: {
            domain: 'camera',
          },
        },
      },
      disable_motion_detection: {
        name: 'Disable motion detection',
        description: 'Disable the motion detection in a camera.',
        fields: {},
        target: {
          entity: {
            domain: 'camera',
          },
        },
      },
      turn_off: {
        name: 'Turn off',
        description: 'Turn off camera.',
        fields: {},
        target: {
          entity: {
            domain: 'camera',
          },
        },
      },
      turn_on: {
        name: 'Turn on',
        description: 'Turn on camera.',
        fields: {},
        target: {
          entity: {
            domain: 'camera',
          },
        },
      },
      snapshot: {
        name: 'Take snapshot',
        description: 'Take a snapshot from a camera.',
        fields: {
          filename: {
            name: 'Filename',
            description: 'Template of a Filename. Variable is entity_id.',
            required: true,
            example: '/tmp/snapshot_{{ entity_id.name }}.jpg',
            selector: {
              text: null,
            },
          },
        },
        target: {
          entity: {
            domain: 'camera',
          },
        },
      },
      play_stream: {
        name: 'Play stream',
        description: 'Play camera stream on supported media player.',
        fields: {
          media_player: {
            name: 'Media Player',
            description: 'Name(s) of media player to stream to.',
            required: true,
            selector: {
              entity: {
                domain: 'media_player',
              },
            },
          },
          format: {
            name: 'Format',
            description: 'Stream format supported by media player.',
            default: 'hls',
            selector: {
              select: {
                options: ['hls'],
              },
            },
          },
        },
        target: {
          entity: {
            domain: 'camera',
          },
        },
      },
      record: {
        name: 'Record',
        description: 'Record live camera feed.',
        fields: {
          filename: {
            name: 'Filename',
            description:
              'Template of a Filename. Variable is entity_id. Must be mp4.',
            required: true,
            example: '/tmp/snapshot_{{ entity_id.name }}.mp4',
            selector: {
              text: null,
            },
          },
          duration: {
            name: 'Duration',
            description: 'Target recording length.',
            default: 30,
            selector: {
              number: {
                min: 1,
                max: 3600,
                unit_of_measurement: 'seconds',
              },
            },
          },
          lookback: {
            name: 'Lookback',
            description:
              'Target lookback period to include in addition to duration. Only available if there is currently an active HLS stream.',
            default: 0,
            selector: {
              number: {
                min: 0,
                max: 300,
                unit_of_measurement: 'seconds',
              },
            },
          },
        },
        target: {
          entity: {
            domain: 'camera',
          },
        },
      },
    },
    deebot: {
      refresh: {
        name: 'Manually refresh',
        description: 'Manually request a refresh',
        fields: {
          part: {
            name: 'Part',
            description: 'Which part should be refreshed?',
            required: true,
            advanced: false,
            example: 'Status',
            default: 'Status',
            selector: {
              select: {
                options: [
                  'Status',
                  'Error',
                  'Fan speed',
                  'Clean logs',
                  'Water',
                  'Battery',
                  'Stats',
                  'Life spans',
                  'Rooms',
                  'Map',
                ],
              },
            },
          },
        },
        target: {
          entity: {
            integration: 'deebot',
            domain: 'vacuum',
          },
        },
      },
    },
  },
  user: {
    id: 'fefe8d8a7bec4ab9ad5ca86ac9734a4c',
    name: 'Mark',
    is_owner: true,
    is_admin: true,
    credentials: [
      {
        auth_provider_type: 'homeassistant',
        auth_provider_id: null,
      },
    ],
    mfa_modules: [
      {
        id: 'totp',
        name: 'Authenticator app',
        enabled: false,
      },
    ],
  },
  panelUrl: 'react-panel-prod',
  defaultPanel: 'lovelace',
  language: 'en',
  selectedLanguage: null,
  locale: {
    language: 'en',
    number_format: 'language',
    time_format: 'language',
  },
  resources: {
    en: {
      'panel.energy': 'Energy',
      'panel.calendar': 'Calendar',
      'panel.config': 'Settings',
      'panel.states': 'Overview',
      'panel.map': 'Map',
      'panel.logbook': 'Logbook',
      'panel.history': 'History',
      'panel.mailbox': 'Mailbox',
      'panel.shopping_list': 'Shopping List',
      'panel.developer_tools': 'Developer Tools',
      'panel.media_browser': 'Media',
      'panel.profile': 'Profile',
      'state.default.on': 'On',
      'state.default.off': 'Off',
      'state.default.unknown': 'Unknown',
      'state.default.unavailable': 'Unavailable',
      'state_attributes.climate.fan_mode.off': 'Off',
      'state_attributes.climate.fan_mode.on': 'On',
      'state_attributes.climate.fan_mode.auto': 'Auto',
      'state_attributes.climate.preset_mode.none': 'None',
      'state_attributes.climate.preset_mode.eco': 'Eco',
      'state_attributes.climate.preset_mode.away': 'Away',
      'state_attributes.climate.preset_mode.boost': 'Boost',
      'state_attributes.climate.preset_mode.comfort': 'Comfort',
      'state_attributes.climate.preset_mode.home': 'Home',
      'state_attributes.climate.preset_mode.sleep': 'Sleep',
      'state_attributes.climate.preset_mode.activity': 'Activity',
      'state_attributes.climate.hvac_action.off': 'Off',
      'state_attributes.climate.hvac_action.heating': 'Heating',
      'state_attributes.climate.hvac_action.cooling': 'Cooling',
      'state_attributes.climate.hvac_action.drying': 'Drying',
      'state_attributes.climate.hvac_action.idle': 'Idle',
      'state_attributes.climate.hvac_action.fan': 'Fan',
      'state_attributes.humidifier.mode.normal': 'Normal',
      'state_attributes.humidifier.mode.eco': 'Eco',
      'state_attributes.humidifier.mode.away': 'Away',
      'state_attributes.humidifier.mode.boost': 'Boost',
      'state_attributes.humidifier.mode.comfort': 'Comfort',
      'state_attributes.humidifier.mode.home': 'Home',
      'state_attributes.humidifier.mode.sleep': 'Sleep',
      'state_attributes.humidifier.mode.auto': 'Auto',
      'state_attributes.humidifier.mode.baby': 'Baby',
      'state_badge.default.unknown': 'Unk',
      'state_badge.default.unavailable': 'Unavai',
      'state_badge.default.error': 'Error',
      'state_badge.default.entity_not_found': 'Entity not found',
      'state_badge.alarm_control_panel.armed': 'Armed',
      'state_badge.alarm_control_panel.disarmed': 'Disarm',
      'state_badge.alarm_control_panel.armed_home': 'Armed',
      'state_badge.alarm_control_panel.armed_away': 'Armed',
      'state_badge.alarm_control_panel.armed_night': 'Armed',
      'state_badge.alarm_control_panel.armed_vacation': 'Armed',
      'state_badge.alarm_control_panel.armed_custom_bypass': 'Armed',
      'state_badge.alarm_control_panel.pending': 'Pend',
      'state_badge.alarm_control_panel.arming': 'Arming',
      'state_badge.alarm_control_panel.disarming': 'Disarm',
      'state_badge.alarm_control_panel.triggered': 'Trig',
      'state_badge.device_tracker.home': 'Home',
      'state_badge.device_tracker.not_home': 'Away',
      'state_badge.person.home': 'Home',
      'state_badge.person.not_home': 'Away',
      'groups.owner': 'Owner',
      'groups.system-admin': 'Administrators',
      'groups.system-users': 'Users',
      'groups.system-read-only': 'Read-Only Users',
      'config_entry.disabled_by.user': 'User',
      'config_entry.disabled_by.integration': 'Integration',
      'config_entry.disabled_by.config_entry': 'Config entry',
      'config_entry.disabled_by.device': 'Device',
      'config_entry.hidden_by.user': 'User',
      'config_entry.hidden_by.integration': 'Integration',
      'config_entry.hidden_by.device': 'Device',
      'ui.backup.upload_backup': 'Upload backup',
      'ui.card.alarm_control_panel.code': 'Code',
      'ui.card.alarm_control_panel.clear_code': 'Clear',
      'ui.card.alarm_control_panel.disarm': 'Disarm',
      'ui.card.alarm_control_panel.arm_home': 'Arm home',
      'ui.card.alarm_control_panel.arm_away': 'Arm away',
      'ui.card.alarm_control_panel.arm_night': 'Arm night',
      'ui.card.alarm_control_panel.arm_vacation': 'Arm vacation',
      'ui.card.alarm_control_panel.arm_custom_bypass': 'Custom bypass',
      'ui.card.area.area_not_found': 'Area not found.',
      'ui.card.automation.last_triggered': 'Last triggered',
      'ui.card.automation.trigger': 'Run Actions',
      'ui.card.button.press': 'Press',
      'ui.card.camera.not_available': 'Image not available',
      'ui.card.climate.currently': 'Currently',
      'ui.card.climate.on_off': 'On / off',
      'ui.card.climate.target_temperature': 'Target temperature',
      'ui.card.climate.target_temperature_entity': '{name} target temperature',
      'ui.card.climate.target_temperature_mode':
        '{name} target temperature {mode}',
      'ui.card.climate.current_temperature': '{name} current temperature',
      'ui.card.climate.heating': '{name} heating',
      'ui.card.climate.cooling': '{name} cooling',
      'ui.card.climate.high': 'high',
      'ui.card.climate.low': 'low',
      'ui.card.climate.target_humidity': 'Target humidity',
      'ui.card.climate.operation': 'Operation',
      'ui.card.climate.fan_mode': 'Fan mode',
      'ui.card.climate.swing_mode': 'Swing mode',
      'ui.card.climate.preset_mode': 'Preset',
      'ui.card.climate.away_mode': 'Away mode',
      'ui.card.climate.aux_heat': 'Aux heat',
      'ui.card.counter.actions.increment': 'increment',
      'ui.card.counter.actions.decrement': 'decrement',
      'ui.card.counter.actions.reset': 'reset',
      'ui.card.cover.position': 'Position',
      'ui.card.cover.tilt_position': 'Tilt position',
      'ui.card.fan.speed': 'Speed',
      'ui.card.fan.preset_mode': 'Preset Mode',
      'ui.card.fan.oscillate': 'Oscillate',
      'ui.card.fan.direction': 'Direction',
      'ui.card.fan.forward': 'Forward',
      'ui.card.fan.reverse': 'Reverse',
      'ui.card.humidifier.humidity': 'Target humidity',
      'ui.card.humidifier.mode': 'Mode',
      'ui.card.humidifier.target_humidity_entity': '{name} target humidity',
      'ui.card.humidifier.on_entity': '{name} on',
      'ui.card.light.brightness': 'Brightness',
      'ui.card.light.color_temperature': 'Color temperature',
      'ui.card.light.white_value': 'White brightness',
      'ui.card.light.color_brightness': 'Color brightness',
      'ui.card.light.cold_white_value': 'Cold white brightness',
      'ui.card.light.warm_white_value': 'Warm white brightness',
      'ui.card.light.effect': 'Effect',
      'ui.card.lock.code': 'Code',
      'ui.card.lock.lock': 'Lock',
      'ui.card.lock.unlock': 'Unlock',
      'ui.card.media_player.source': 'Source',
      'ui.card.media_player.sound_mode': 'Sound mode',
      'ui.card.media_player.browse_media': 'Browse media',
      'ui.card.media_player.turn_on': 'Turn on',
      'ui.card.media_player.turn_off': 'Turn off',
      'ui.card.media_player.media_play': 'Play',
      'ui.card.media_player.media_play_pause': 'Play/pause',
      'ui.card.media_player.media_pause': 'Pause',
      'ui.card.media_player.media_stop': 'Stop',
      'ui.card.media_player.media_next_track': 'Next track',
      'ui.card.media_player.media_previous_track': 'Previous track',
      'ui.card.media_player.media_volume_up': 'Volume up',
      'ui.card.media_player.media_volume_down': 'Volume down',
      'ui.card.media_player.media_volume_mute': 'Volume mute',
      'ui.card.media_player.media_volume_unmute': 'Volume unmute',
      'ui.card.media_player.repeat_set': 'Repeat mode',
      'ui.card.media_player.shuffle_set': 'Shuffle',
      'ui.card.media_player.text_to_speak': 'Text to speak',
      'ui.card.media_player.nothing_playing': 'Nothing Playing',
      'ui.card.persistent_notification.dismiss': 'Dismiss',
      'ui.card.scene.activate': 'Activate',
      'ui.card.script.run': 'Run',
      'ui.card.script.cancel': 'Cancel',
      'ui.card.script.cancel_multiple': 'Cancel {number}',
      'ui.card.service.run': 'Run',
      'ui.card.update.installing': 'Installing',
      'ui.card.update.installing_with_progress': 'Installing ({progress}%)',
      'ui.card.update.up_to_date': 'Up-to-date',
      'ui.card.timer.actions.start': 'start',
      'ui.card.timer.actions.pause': 'pause',
      'ui.card.timer.actions.cancel': 'cancel',
      'ui.card.timer.actions.finish': 'finish',
      'ui.card.vacuum.actions.resume_cleaning': 'Resume cleaning',
      'ui.card.vacuum.actions.return_to_base': 'Return to dock',
      'ui.card.vacuum.actions.start_cleaning': 'Start cleaning',
      'ui.card.vacuum.actions.turn_on': 'Turn on',
      'ui.card.vacuum.actions.turn_off': 'Turn off',
      'ui.card.water_heater.currently': 'Currently',
      'ui.card.water_heater.on_off': 'On / off',
      'ui.card.water_heater.target_temperature': 'Target temperature',
      'ui.card.water_heater.operation': 'Operation',
      'ui.card.water_heater.away_mode': 'Away mode',
      'ui.card.weather.attributes.air_pressure': 'Air pressure',
      'ui.card.weather.attributes.humidity': 'Humidity',
      'ui.card.weather.attributes.temperature': 'Temperature',
      'ui.card.weather.attributes.visibility': 'Visibility',
      'ui.card.weather.attributes.wind_speed': 'Wind speed',
      'ui.card.weather.attributes.precipitation': 'Precipitation',
      'ui.card.weather.cardinal_direction.e': 'E',
      'ui.card.weather.cardinal_direction.ene': 'ENE',
      'ui.card.weather.cardinal_direction.ese': 'ESE',
      'ui.card.weather.cardinal_direction.n': 'N',
      'ui.card.weather.cardinal_direction.ne': 'NE',
      'ui.card.weather.cardinal_direction.nne': 'NNE',
      'ui.card.weather.cardinal_direction.nw': 'NW',
      'ui.card.weather.cardinal_direction.nnw': 'NNW',
      'ui.card.weather.cardinal_direction.s': 'S',
      'ui.card.weather.cardinal_direction.se': 'SE',
      'ui.card.weather.cardinal_direction.sse': 'SSE',
      'ui.card.weather.cardinal_direction.ssw': 'SSW',
      'ui.card.weather.cardinal_direction.sw': 'SW',
      'ui.card.weather.cardinal_direction.w': 'W',
      'ui.card.weather.cardinal_direction.wnw': 'WNW',
      'ui.card.weather.cardinal_direction.wsw': 'WSW',
      'ui.card.weather.day': 'Day',
      'ui.card.weather.night': 'Night',
      'ui.card.weather.forecast': 'Forecast',
      'ui.card.weather.high': 'High',
      'ui.card.weather.low': 'Low',
      'ui.common.and': 'and',
      'ui.common.continue': 'Continue',
      'ui.common.previous': 'Previous',
      'ui.common.loading': 'Loading',
      'ui.common.refresh': 'Refresh',
      'ui.common.cancel': 'Cancel',
      'ui.common.delete': 'Delete',
      'ui.common.remove': 'Remove',
      'ui.common.enable': 'Enable',
      'ui.common.disable': 'Disable',
      'ui.common.hide': 'Hide',
      'ui.common.close': 'Close',
      'ui.common.clear': 'Clear',
      'ui.common.leave': 'Leave',
      'ui.common.stay': 'Stay',
      'ui.common.next': 'Next',
      'ui.common.back': 'Back',
      'ui.common.undo': 'Undo',
      'ui.common.move': 'Move',
      'ui.common.save': 'Save',
      'ui.common.edit': 'Edit',
      'ui.common.submit': 'Submit',
      'ui.common.rename': 'Rename',
      'ui.common.yes': 'Yes',
      'ui.common.no': 'No',
      'ui.common.not_now': 'Not now',
      'ui.common.skip': 'Skip',
      'ui.common.menu': 'Menu',
      'ui.common.overflow_menu': 'Overflow menu',
      'ui.common.help': 'Help',
      'ui.common.successfully_saved': 'Successfully saved',
      'ui.common.successfully_deleted': 'Successfully deleted',
      'ui.common.error_required': 'Required',
      'ui.common.copied': 'Copied',
      'ui.common.copied_clipboard': 'Copied to clipboard',
      'ui.components.selectors.media.pick_media_player': 'Select media player',
      'ui.components.selectors.media.browse_not_supported':
        'Media player does not support browsing media.',
      'ui.components.selectors.media.pick_media': 'Pick media',
      'ui.components.selectors.media.browse_media': 'Browse media',
      'ui.components.selectors.media.manual': 'Manually enter Media ID',
      'ui.components.selectors.media.media_content_id': 'Media content ID',
      'ui.components.selectors.media.media_content_type': 'Media content type',
      'ui.components.logbook.entries_not_found': 'No logbook events found.',
      'ui.components.logbook.by': 'by',
      'ui.components.logbook.by_service': 'by service',
      'ui.components.logbook.show_trace': 'Show trace',
      'ui.components.logbook.retrieval_error': 'Could not load logbook',
      'ui.components.logbook.messages.was_away': 'was detected away',
      'ui.components.logbook.messages.was_at_state': 'was detected at {state}',
      'ui.components.logbook.messages.rose': 'rose',
      'ui.components.logbook.messages.set': 'set',
      'ui.components.logbook.messages.was_low': 'was low',
      'ui.components.logbook.messages.was_normal': 'was normal',
      'ui.components.logbook.messages.was_connected': 'was connected',
      'ui.components.logbook.messages.was_disconnected': 'was disconnected',
      'ui.components.logbook.messages.was_opened': 'was opened',
      'ui.components.logbook.messages.was_closed': 'was closed',
      'ui.components.logbook.messages.is_opening': 'is opening',
      'ui.components.logbook.messages.is_closing': 'is closing',
      'ui.components.logbook.messages.was_unlocked': 'was unlocked',
      'ui.components.logbook.messages.was_locked': 'was locked',
      'ui.components.logbook.messages.was_plugged_in': 'was plugged in',
      'ui.components.logbook.messages.was_unplugged': 'was unplugged',
      'ui.components.logbook.messages.was_at_home': 'was detected at home',
      'ui.components.logbook.messages.was_unsafe': 'was unsafe',
      'ui.components.logbook.messages.was_safe': 'was safe',
      'ui.components.logbook.messages.detected_device_class':
        'detected {device_class}',
      'ui.components.logbook.messages.cleared_device_class':
        'cleared (no {device_class} detected)',
      'ui.components.logbook.messages.turned_off': 'turned off',
      'ui.components.logbook.messages.turned_on': 'turned on',
      'ui.components.logbook.messages.changed_to_state': 'changed to {state}',
      'ui.components.logbook.messages.became_unavailable': 'became unavailable',
      'ui.components.logbook.messages.detected_tampering': 'detected tampering',
      'ui.components.logbook.messages.cleared_tampering': 'cleared tampering',
      'ui.components.entity.entity-picker.entity': 'Entity',
      'ui.components.entity.entity-picker.edit': 'Edit',
      'ui.components.entity.entity-picker.clear': 'Clear',
      'ui.components.entity.entity-picker.no_entities':
        "You don't have any entities",
      'ui.components.entity.entity-picker.no_match':
        'No matching entities found',
      'ui.components.entity.entity-picker.show_entities': 'Show entities',
      'ui.components.entity.entity-attribute-picker.attribute': 'Attribute',
      'ui.components.entity.entity-attribute-picker.show_attributes':
        'Show attributes',
      'ui.components.target-picker.expand': 'Expand',
      'ui.components.target-picker.expand_area_id':
        'Split this area into separate devices and entities.',
      'ui.components.target-picker.expand_device_id':
        'Split this device into separate entities.',
      'ui.components.target-picker.remove': 'Remove',
      'ui.components.target-picker.remove_area_id': 'Remove area',
      'ui.components.target-picker.remove_device_id': 'Remove device',
      'ui.components.target-picker.remove_entity_id': 'Remove entity',
      'ui.components.target-picker.add_area_id': 'Choose area',
      'ui.components.target-picker.add_device_id': 'Choose device',
      'ui.components.target-picker.add_entity_id': 'Choose entity',
      'ui.components.theme-picker.theme': 'Theme',
      'ui.components.theme-picker.no_theme': 'No theme',
      'ui.components.user-picker.no_user': 'No user',
      'ui.components.user-picker.add_user': 'Add user',
      'ui.components.user-picker.remove_user': 'Remove user',
      'ui.components.blueprint-picker.select_blueprint': 'Select a Blueprint',
      'ui.components.blueprint-picker.add_user': 'Add user',
      'ui.components.blueprint-picker.remove_user': 'Remove user',
      'ui.components.device-picker.clear': 'Clear',
      'ui.components.device-picker.toggle': 'Toggle',
      'ui.components.device-picker.show_devices': 'Show devices',
      'ui.components.device-picker.no_devices': "You don't have any devices",
      'ui.components.device-picker.no_match': 'No matching devices found',
      'ui.components.device-picker.device': 'Device',
      'ui.components.device-picker.no_area': 'No area',
      'ui.components.area-picker.clear': 'Clear',
      'ui.components.area-picker.show_areas': 'Show areas',
      'ui.components.area-picker.area': 'Area',
      'ui.components.area-picker.add_new_sugestion': "Add new area ''{name}''",
      'ui.components.area-picker.add_new': 'Add new area…',
      'ui.components.area-picker.no_areas': "You don't have any areas",
      'ui.components.area-picker.no_match': 'No matching areas found',
      'ui.components.area-picker.add_dialog.title': 'Add new area',
      'ui.components.area-picker.add_dialog.text':
        'Enter the name of the new area.',
      'ui.components.area-picker.add_dialog.name': 'Name',
      'ui.components.area-picker.add_dialog.add': 'Add',
      'ui.components.area-picker.add_dialog.failed_create_area':
        'Failed to create area.',
      'ui.components.statistic-picker.statistic': 'Statistic',
      'ui.components.statistic-picker.no_statistics':
        "You don't have any statistics",
      'ui.components.statistic-picker.no_match': 'No matching statistics found',
      'ui.components.statistic-picker.missing_entity':
        'Why is my entity not listed?',
      'ui.components.statistic-picker.learn_more':
        'Learn more about statistics',
      'ui.components.addon-picker.addon': 'Add-on',
      'ui.components.addon-picker.error.no_supervisor.title': 'No Supervisor',
      'ui.components.addon-picker.error.no_supervisor.description':
        'Add-ons are not supported.',
      'ui.components.addon-picker.error.fetch_addons.title':
        'Error loading add-ons',
      'ui.components.addon-picker.error.fetch_addons.description':
        'There was an error loading add-ons.',
      'ui.components.related-filter-menu.filter': 'Filter',
      'ui.components.related-filter-menu.filter_by_entity': 'Filter by entity',
      'ui.components.related-filter-menu.filter_by_device': 'Filter by device',
      'ui.components.related-filter-menu.filter_by_area': 'Filter by area',
      'ui.components.related-filter-menu.filtered_by_entity':
        'entity: {entity_name}',
      'ui.components.related-filter-menu.filtered_by_device':
        'device: {device_name}',
      'ui.components.related-filter-menu.filtered_by_area': 'area: {area_name}',
      'ui.components.picture-upload.label': 'Picture',
      'ui.components.picture-upload.unsupported_format':
        'Unsupported format, please choose a JPEG, PNG or GIF image.',
      'ui.components.date-range-picker.start_date': 'Start date',
      'ui.components.date-range-picker.end_date': 'End date',
      'ui.components.date-range-picker.select': 'Select',
      'ui.components.date-range-picker.ranges.today': 'Today',
      'ui.components.date-range-picker.ranges.yesterday': 'Yesterday',
      'ui.components.date-range-picker.ranges.this_week': 'This week',
      'ui.components.date-range-picker.ranges.last_week': 'Last week',
      'ui.components.relative_time.never': 'Never',
      'ui.components.history_charts.history_disabled':
        'History integration disabled',
      'ui.components.history_charts.loading_history': 'Loading state history…',
      'ui.components.history_charts.no_history_found':
        'No state history found.',
      'ui.components.statistics_charts.loading_statistics':
        'Loading statistics…',
      'ui.components.statistics_charts.no_statistics_found':
        'No statistics found.',
      'ui.components.statistics_charts.statistic_types.min': 'min',
      'ui.components.statistics_charts.statistic_types.max': 'max',
      'ui.components.statistics_charts.statistic_types.mean': 'mean',
      'ui.components.statistics_charts.statistic_types.sum': 'sum',
      'ui.components.service-picker.service': 'Service',
      'ui.components.service-control.required': 'This field is required',
      'ui.components.service-control.target': 'Targets',
      'ui.components.service-control.target_description':
        'What should this service use as targeted areas, devices or entities.',
      'ui.components.service-control.service_data': 'Service data',
      'ui.components.service-control.integration_doc':
        'Integration documentation',
      'ui.components.related-items.no_related_found': 'No related items found.',
      'ui.components.related-items.integration': 'Integration',
      'ui.components.related-items.device': 'Device',
      'ui.components.related-items.area': 'Area',
      'ui.components.related-items.entity': 'Related entities',
      'ui.components.related-items.group': 'Part of the following groups',
      'ui.components.related-items.scene': 'Part of the following scenes',
      'ui.components.related-items.script': 'Part of the following scripts',
      'ui.components.related-items.automation':
        'Part of the following automations',
      'ui.components.data-table.search': 'Search',
      'ui.components.data-table.no-data': 'No data',
      'ui.components.data-table.filtering_by': 'Filtering by',
      'ui.components.data-table.hidden': '{number} hidden',
      'ui.components.data-table.clear': 'Clear',
      'ui.components.media-browser.tts.message': 'Message',
      'ui.components.media-browser.tts.example_message':
        'Hello {name}, you can play any text on any supported media player!',
      'ui.components.media-browser.tts.language': 'Language',
      'ui.components.media-browser.tts.gender': 'Gender',
      'ui.components.media-browser.tts.gender_male': 'Male',
      'ui.components.media-browser.tts.gender_female': 'Female',
      'ui.components.media-browser.tts.action_play': 'Say',
      'ui.components.media-browser.tts.action_pick': 'Select',
      'ui.components.media-browser.tts.set_as_default':
        'Set as default options',
      'ui.components.media-browser.tts.faild_to_store_defaults':
        'Failed to store defaults: {error}',
      'ui.components.media-browser.pick': 'Pick',
      'ui.components.media-browser.play': 'Play',
      'ui.components.media-browser.play-media': 'Play Media',
      'ui.components.media-browser.pick-media': 'Pick Media',
      'ui.components.media-browser.no_items': 'No items',
      'ui.components.media-browser.not_shown':
        '{count} incompatible {count, plural,\n  one {item}\n  other {items}\n} hidden',
      'ui.components.media-browser.choose_player': 'Choose Player',
      'ui.components.media-browser.media-player-browser': 'Media',
      'ui.components.media-browser.web-browser': 'Web Browser',
      'ui.components.media-browser.media_player': 'Media Player',
      'ui.components.media-browser.audio_not_supported':
        'Your browser does not support the audio element.',
      'ui.components.media-browser.video_not_supported':
        'Your browser does not support the video element.',
      'ui.components.media-browser.media_not_supported':
        'The Browser Media Player does not support this type of media',
      'ui.components.media-browser.media_browsing_error':
        'Media Browsing Error',
      'ui.components.media-browser.learn_adding_local_media':
        'Learn more about adding media in the {documentation}.',
      'ui.components.media-browser.local_media_files':
        'Place your video, audio and image files in the media directory to be able to browse and play them in the browser or on supported media players.',
      'ui.components.media-browser.documentation': 'documentation',
      'ui.components.media-browser.no_local_media_found':
        'No local media found',
      'ui.components.media-browser.no_media_folder':
        'It looks like you have not yet created a media directory.',
      'ui.components.media-browser.setup_local_help':
        'Check the {documentation} on how to setup local media.',
      'ui.components.media-browser.file_management.title': 'Media Management',
      'ui.components.media-browser.file_management.manage': 'Manage',
      'ui.components.media-browser.file_management.no_items':
        'No media items found',
      'ui.components.media-browser.file_management.folders_not_supported':
        'Folders can not be managed via the UI.',
      'ui.components.media-browser.file_management.highlight_button':
        'Click here to upload your first media',
      'ui.components.media-browser.file_management.upload_failed':
        'Upload failed: {reason}',
      'ui.components.media-browser.file_management.add_media': 'Add Media',
      'ui.components.media-browser.file_management.uploading':
        'Uploading {count} {count, plural,\n  one {file}\n  other {files}\n}',
      'ui.components.media-browser.file_management.confirm_delete':
        'Do you want to delete {count} {count, plural,\n  one {file}\n  other {files}\n}?',
      'ui.components.media-browser.file_management.delete': 'Delete {count}',
      'ui.components.media-browser.file_management.deleting':
        'Deleting {count}',
      'ui.components.media-browser.class.album': 'Album',
      'ui.components.media-browser.class.app': 'App',
      'ui.components.media-browser.class.artist': 'Artist',
      'ui.components.media-browser.class.channel': 'Channel',
      'ui.components.media-browser.class.composer': 'Composer',
      'ui.components.media-browser.class.contributing_artist':
        'Contributing Artist',
      'ui.components.media-browser.class.directory': 'Library',
      'ui.components.media-browser.class.episode': 'Episode',
      'ui.components.media-browser.class.game': 'Game',
      'ui.components.media-browser.class.genre': 'Genre',
      'ui.components.media-browser.class.image': 'Image',
      'ui.components.media-browser.class.movie': 'Movie',
      'ui.components.media-browser.class.music': 'Music',
      'ui.components.media-browser.class.playlist': 'Playlist',
      'ui.components.media-browser.class.podcast': 'Podcast',
      'ui.components.media-browser.class.season': 'Season',
      'ui.components.media-browser.class.track': 'Track',
      'ui.components.media-browser.class.tv_show': 'TV Show',
      'ui.components.media-browser.class.url': 'URL',
      'ui.components.media-browser.class.video': 'Video',
      'ui.components.calendar.my_calendars': 'My Calendars',
      'ui.components.calendar.today': 'Today',
      'ui.components.attributes.expansion_header': 'Attributes',
      'ui.components.qr-scanner.select_camera': 'Select camera',
      'ui.components.qr-scanner.only_https_supported':
        'You can only use your camera to scan a QR code when using HTTPS.',
      'ui.components.qr-scanner.not_supported':
        "Your browser doesn't support QR scanning.",
      'ui.components.qr-scanner.manual_input':
        'You can scan the QR code with another QR scanner and paste the code in the input below',
      'ui.components.qr-scanner.enter_qr_code': 'Enter QR code value',
      'ui.components.climate-control.temperature_up': 'Increase temperature',
      'ui.components.climate-control.temperature_down': 'Decrease temperature',
      'ui.dialogs.quick-bar.commands.reload.reload': '{domain}',
      'ui.dialogs.quick-bar.commands.reload.core': 'Location & customizations',
      'ui.dialogs.quick-bar.commands.reload.group':
        'Groups, group entities, and notify services',
      'ui.dialogs.quick-bar.commands.reload.automation': 'Automations',
      'ui.dialogs.quick-bar.commands.reload.script': 'Scripts',
      'ui.dialogs.quick-bar.commands.reload.scene': 'Scenes',
      'ui.dialogs.quick-bar.commands.reload.person': 'People',
      'ui.dialogs.quick-bar.commands.reload.zone': 'Zones',
      'ui.dialogs.quick-bar.commands.reload.input_boolean': 'Input booleans',
      'ui.dialogs.quick-bar.commands.reload.input_text': 'Input texts',
      'ui.dialogs.quick-bar.commands.reload.input_number': 'Input numbers',
      'ui.dialogs.quick-bar.commands.reload.input_datetime': 'Input date times',
      'ui.dialogs.quick-bar.commands.reload.input_select': 'Input selects',
      'ui.dialogs.quick-bar.commands.reload.template': 'Template entities',
      'ui.dialogs.quick-bar.commands.reload.universal':
        'Universal media player entities',
      'ui.dialogs.quick-bar.commands.reload.rest':
        'Rest entities and notify services',
      'ui.dialogs.quick-bar.commands.reload.command_line':
        'Command line entities',
      'ui.dialogs.quick-bar.commands.reload.filter': 'Filter entities',
      'ui.dialogs.quick-bar.commands.reload.statistics': 'Statistics entities',
      'ui.dialogs.quick-bar.commands.reload.generic':
        'Generic IP camera entities',
      'ui.dialogs.quick-bar.commands.reload.generic_thermostat':
        'Generic thermostat entities',
      'ui.dialogs.quick-bar.commands.reload.homekit': 'HomeKit',
      'ui.dialogs.quick-bar.commands.reload.min_max': 'Min/max entities',
      'ui.dialogs.quick-bar.commands.reload.history_stats':
        'History stats entities',
      'ui.dialogs.quick-bar.commands.reload.trend': 'Trend entities',
      'ui.dialogs.quick-bar.commands.reload.ping':
        'Ping binary sensor entities',
      'ui.dialogs.quick-bar.commands.reload.filesize': 'File size entities',
      'ui.dialogs.quick-bar.commands.reload.telegram':
        'Telegram notify services',
      'ui.dialogs.quick-bar.commands.reload.smtp': 'SMTP notify services',
      'ui.dialogs.quick-bar.commands.reload.mqtt':
        'Manually configured MQTT entities',
      'ui.dialogs.quick-bar.commands.reload.rpi_gpio':
        'Raspberry Pi GPIO entities',
      'ui.dialogs.quick-bar.commands.reload.themes': 'Themes',
      'ui.dialogs.quick-bar.commands.server_control.perform_action':
        '{action} server',
      'ui.dialogs.quick-bar.commands.server_control.restart': 'Restart',
      'ui.dialogs.quick-bar.commands.server_control.stop': 'Stop',
      'ui.dialogs.quick-bar.commands.types.reload': 'Reload',
      'ui.dialogs.quick-bar.commands.types.navigation': 'Navigate',
      'ui.dialogs.quick-bar.commands.types.server_control': 'Server',
      'ui.dialogs.quick-bar.commands.navigation.logs': 'Logs',
      'ui.dialogs.quick-bar.commands.navigation.automation': 'Automations',
      'ui.dialogs.quick-bar.commands.navigation.script': 'Scripts',
      'ui.dialogs.quick-bar.commands.navigation.integrations': 'Integrations',
      'ui.dialogs.quick-bar.commands.navigation.areas': 'Areas',
      'ui.dialogs.quick-bar.commands.navigation.scene': 'Scenes',
      'ui.dialogs.quick-bar.commands.navigation.helpers': 'Helpers',
      'ui.dialogs.quick-bar.commands.navigation.tags': 'Tags',
      'ui.dialogs.quick-bar.commands.navigation.person': 'People',
      'ui.dialogs.quick-bar.commands.navigation.devices': 'Devices',
      'ui.dialogs.quick-bar.commands.navigation.entities': 'Entities',
      'ui.dialogs.quick-bar.commands.navigation.energy': 'Energy Configuration',
      'ui.dialogs.quick-bar.commands.navigation.lovelace': 'Dashboards',
      'ui.dialogs.quick-bar.commands.navigation.zone': 'Zones',
      'ui.dialogs.quick-bar.commands.navigation.users': 'Users',
      'ui.dialogs.quick-bar.commands.navigation.info': 'About',
      'ui.dialogs.quick-bar.commands.navigation.network': 'Network',
      'ui.dialogs.quick-bar.commands.navigation.updates': 'Updates',
      'ui.dialogs.quick-bar.commands.navigation.hardware': 'Hardware',
      'ui.dialogs.quick-bar.commands.navigation.storage': 'Storage',
      'ui.dialogs.quick-bar.commands.navigation.general': 'General',
      'ui.dialogs.quick-bar.commands.navigation.backups': 'Backups',
      'ui.dialogs.quick-bar.commands.navigation.backup': 'Backups',
      'ui.dialogs.quick-bar.commands.navigation.analytics': 'Analytics',
      'ui.dialogs.quick-bar.commands.navigation.system_health': 'System Health',
      'ui.dialogs.quick-bar.commands.navigation.blueprint': 'Blueprints',
      'ui.dialogs.quick-bar.commands.navigation.server_control': 'YAML',
      'ui.dialogs.quick-bar.commands.navigation.system': 'System',
      'ui.dialogs.quick-bar.commands.navigation.addon_dashboard':
        'Add-on Dashboard',
      'ui.dialogs.quick-bar.commands.navigation.addon_store': 'Add-on Store',
      'ui.dialogs.quick-bar.commands.navigation.addon_info': '{addon} Info',
      'ui.dialogs.quick-bar.filter_placeholder': 'Entity Filter',
      'ui.dialogs.quick-bar.title': 'Quick Search',
      'ui.dialogs.quick-bar.key_c_hint':
        "Press 'c' on any page to open the search bar",
      'ui.dialogs.quick-bar.nothing_found': 'Nothing found!',
      'ui.dialogs.voice_command.did_not_hear':
        'Home Assistant did not hear anything',
      'ui.dialogs.voice_command.found': 'I found the following for you:',
      'ui.dialogs.voice_command.error': 'Oops, an error has occurred',
      'ui.dialogs.voice_command.how_can_i_help': 'How can I help?',
      'ui.dialogs.voice_command.label': "Type a question and press 'Enter'",
      'ui.dialogs.voice_command.label_voice':
        "Type and press 'Enter' or tap the microphone to speak",
      'ui.dialogs.generic.cancel': 'Cancel',
      'ui.dialogs.generic.ok': 'OK',
      'ui.dialogs.generic.default_confirmation_title': 'Are you sure?',
      'ui.dialogs.generic.close': 'Close',
      'ui.dialogs.image_cropper.crop': 'Crop',
      'ui.dialogs.more_info_control.dismiss': 'Dismiss dialog',
      'ui.dialogs.more_info_control.settings': 'Entity settings',
      'ui.dialogs.more_info_control.edit': 'Edit entity',
      'ui.dialogs.more_info_control.details': 'Details',
      'ui.dialogs.more_info_control.history': 'History',
      'ui.dialogs.more_info_control.logbook': 'Logbook',
      'ui.dialogs.more_info_control.last_changed': 'Last changed',
      'ui.dialogs.more_info_control.last_updated': 'Last updated',
      'ui.dialogs.more_info_control.show_more': 'Show more',
      'ui.dialogs.more_info_control.script.last_action': 'Last action',
      'ui.dialogs.more_info_control.script.last_triggered': 'Last triggered',
      'ui.dialogs.more_info_control.sun.elevation': 'Elevation',
      'ui.dialogs.more_info_control.sun.rising': 'Rising',
      'ui.dialogs.more_info_control.sun.setting': 'Setting',
      'ui.dialogs.more_info_control.update.installed_version':
        'Installed version',
      'ui.dialogs.more_info_control.update.latest_version': 'Latest version',
      'ui.dialogs.more_info_control.update.release_announcement':
        'Read release announcement',
      'ui.dialogs.more_info_control.update.skip': 'Skip',
      'ui.dialogs.more_info_control.update.clear_skipped': 'Clear skipped',
      'ui.dialogs.more_info_control.update.install': 'Install',
      'ui.dialogs.more_info_control.update.create_backup':
        'Create backup before updating',
      'ui.dialogs.more_info_control.updater.title': 'Update Instructions',
      'ui.dialogs.more_info_control.remote.activity': 'Current activity',
      'ui.dialogs.more_info_control.restored.not_provided':
        'This entity is currently unavailable and is an orphan to a removed, changed or dysfunctional integration or device.',
      'ui.dialogs.more_info_control.restored.remove_intro':
        'If the entity is no longer in use, you can clean it up by removing it.',
      'ui.dialogs.more_info_control.restored.remove_action': 'Remove entity',
      'ui.dialogs.more_info_control.restored.confirm_remove_title':
        'Remove entity?',
      'ui.dialogs.more_info_control.restored.confirm_remove_text':
        'Are you sure you want to remove this entity?',
      'ui.dialogs.more_info_control.vacuum.status': 'Status',
      'ui.dialogs.more_info_control.vacuum.commands':
        'Vacuum cleaner commands:',
      'ui.dialogs.more_info_control.vacuum.fan_speed': 'Fan speed',
      'ui.dialogs.more_info_control.vacuum.start': 'Start',
      'ui.dialogs.more_info_control.vacuum.pause': 'Pause',
      'ui.dialogs.more_info_control.vacuum.stop': 'Stop',
      'ui.dialogs.more_info_control.vacuum.clean_spot': 'Clean spot',
      'ui.dialogs.more_info_control.vacuum.locate': 'Locate',
      'ui.dialogs.more_info_control.vacuum.return_home': 'Return home',
      'ui.dialogs.more_info_control.vacuum.start_pause': 'Start/Pause',
      'ui.dialogs.more_info_control.person.create_zone':
        'Create zone from current location',
      'ui.dialogs.more_info_control.cover.open_cover': 'Open cover',
      'ui.dialogs.more_info_control.cover.close_cover': 'Close cover',
      'ui.dialogs.more_info_control.cover.open_tilt_cover': 'Open cover tilt',
      'ui.dialogs.more_info_control.cover.close_tilt_cover': 'Close cover tilt',
      'ui.dialogs.more_info_control.cover.stop_cover': 'Stop cover',
      'ui.dialogs.entity_registry.settings': 'Settings',
      'ui.dialogs.entity_registry.control': 'Control',
      'ui.dialogs.entity_registry.related': 'Related',
      'ui.dialogs.entity_registry.dismiss': 'Dismiss',
      'ui.dialogs.entity_registry.no_unique_id':
        "This entity (''{entity_id}'') does not have a unique ID, therefore its settings cannot be managed from the UI. See the {faq_link} for more detail.",
      'ui.dialogs.entity_registry.faq': 'documentation',
      'ui.dialogs.entity_registry.editor.name': 'Name',
      'ui.dialogs.entity_registry.editor.icon': 'Icon',
      'ui.dialogs.entity_registry.editor.icon_error':
        "Icons should be in the format 'prefix:iconname', e.g. 'mdi:home'",
      'ui.dialogs.entity_registry.editor.entity_id': 'Entity ID',
      'ui.dialogs.entity_registry.editor.unit_of_measurement':
        'Unit of Measurement',
      'ui.dialogs.entity_registry.editor.device_class': 'Show as',
      'ui.dialogs.entity_registry.editor.device_classes.binary_sensor.door':
        'Door',
      'ui.dialogs.entity_registry.editor.device_classes.binary_sensor.garage_door':
        'Garage door',
      'ui.dialogs.entity_registry.editor.device_classes.binary_sensor.window':
        'Window',
      'ui.dialogs.entity_registry.editor.device_classes.binary_sensor.opening':
        'Opening',
      'ui.dialogs.entity_registry.editor.device_classes.binary_sensor.battery':
        'Battery',
      'ui.dialogs.entity_registry.editor.device_classes.binary_sensor.battery_charging':
        'Battery charging',
      'ui.dialogs.entity_registry.editor.device_classes.binary_sensor.carbon_monoxide':
        'Carbon monoxide',
      'ui.dialogs.entity_registry.editor.device_classes.binary_sensor.cold':
        'Cold',
      'ui.dialogs.entity_registry.editor.device_classes.binary_sensor.connectivity':
        'Connectivity',
      'ui.dialogs.entity_registry.editor.device_classes.binary_sensor.gas':
        'Gas',
      'ui.dialogs.entity_registry.editor.device_classes.binary_sensor.heat':
        'Heat',
      'ui.dialogs.entity_registry.editor.device_classes.binary_sensor.light':
        'Light',
      'ui.dialogs.entity_registry.editor.device_classes.binary_sensor.lock':
        'Lock',
      'ui.dialogs.entity_registry.editor.device_classes.binary_sensor.moisture':
        'Moisture',
      'ui.dialogs.entity_registry.editor.device_classes.binary_sensor.motion':
        'Motion',
      'ui.dialogs.entity_registry.editor.device_classes.binary_sensor.moving':
        'Moving',
      'ui.dialogs.entity_registry.editor.device_classes.binary_sensor.occupancy':
        'Occupancy',
      'ui.dialogs.entity_registry.editor.device_classes.binary_sensor.plug':
        'Plug',
      'ui.dialogs.entity_registry.editor.device_classes.binary_sensor.power':
        'Power',
      'ui.dialogs.entity_registry.editor.device_classes.binary_sensor.presence':
        'Presence',
      'ui.dialogs.entity_registry.editor.device_classes.binary_sensor.problem':
        'Problem',
      'ui.dialogs.entity_registry.editor.device_classes.binary_sensor.running':
        'Running',
      'ui.dialogs.entity_registry.editor.device_classes.binary_sensor.safety':
        'Safety',
      'ui.dialogs.entity_registry.editor.device_classes.binary_sensor.smoke':
        'Smoke',
      'ui.dialogs.entity_registry.editor.device_classes.binary_sensor.sound':
        'Sound',
      'ui.dialogs.entity_registry.editor.device_classes.binary_sensor.tamper':
        'Tamper',
      'ui.dialogs.entity_registry.editor.device_classes.binary_sensor.update':
        'Update',
      'ui.dialogs.entity_registry.editor.device_classes.binary_sensor.vibration':
        'Vibration',
      'ui.dialogs.entity_registry.editor.device_classes.cover.door': 'Door',
      'ui.dialogs.entity_registry.editor.device_classes.cover.garage':
        'Garage door',
      'ui.dialogs.entity_registry.editor.device_classes.cover.gate': 'Gate',
      'ui.dialogs.entity_registry.editor.device_classes.cover.window': 'Window',
      'ui.dialogs.entity_registry.editor.device_classes.cover.shade': 'Shade',
      'ui.dialogs.entity_registry.editor.device_classes.cover.awning': 'Awning',
      'ui.dialogs.entity_registry.editor.device_classes.cover.blind': 'Blind',
      'ui.dialogs.entity_registry.editor.device_classes.cover.curtain':
        'Curtain',
      'ui.dialogs.entity_registry.editor.device_classes.cover.damper': 'Damper',
      'ui.dialogs.entity_registry.editor.device_classes.cover.shutter':
        'Shutter',
      'ui.dialogs.entity_registry.editor.unavailable':
        'This entity is unavailable.',
      'ui.dialogs.entity_registry.editor.entity_status': 'Entity status',
      'ui.dialogs.entity_registry.editor.change_area': 'Change Area',
      'ui.dialogs.entity_registry.editor.enabled_label': 'Enabled',
      'ui.dialogs.entity_registry.editor.disabled_label': 'Disabled',
      'ui.dialogs.entity_registry.editor.enabled_cause':
        'Cannot change status. Disabled by {cause}.',
      'ui.dialogs.entity_registry.editor.hidden_label': 'Hidden',
      'ui.dialogs.entity_registry.editor.hidden_cause': 'Hidden by {cause}.',
      'ui.dialogs.entity_registry.editor.device_disabled':
        'The device of this entity is disabled.',
      'ui.dialogs.entity_registry.editor.open_device_settings':
        'Open device settings',
      'ui.dialogs.entity_registry.editor.switch_as_x_confirm':
        'This switch will be hidden and a new {domain} will be added. Your existing configurations using the switch will continue to work.',
      'ui.dialogs.entity_registry.editor.enabled_description':
        'Disabled entities will not be added to Home Assistant.',
      'ui.dialogs.entity_registry.editor.enabled_delay_confirm':
        'The enabled entities will be added to Home Assistant in {delay} seconds',
      'ui.dialogs.entity_registry.editor.enabled_restart_confirm':
        'Restart Home Assistant to finish enabling the entities',
      'ui.dialogs.entity_registry.editor.hidden_description':
        'Hidden entities will not be shown on your dashboard. Their history is still tracked and you can still interact with them with services.',
      'ui.dialogs.entity_registry.editor.delete': 'Delete',
      'ui.dialogs.entity_registry.editor.confirm_delete':
        'Are you sure you want to delete this entity?',
      'ui.dialogs.entity_registry.editor.update': 'Update',
      'ui.dialogs.entity_registry.editor.note':
        'Note: This might not work yet with all integrations.',
      'ui.dialogs.entity_registry.editor.advanced': 'Advanced settings',
      'ui.dialogs.entity_registry.editor.area': 'Set entity area only',
      'ui.dialogs.entity_registry.editor.area_note':
        'By default the entities of a device are in the same area as the device. If you change the area of this entity, it will no longer follow the area of the device.',
      'ui.dialogs.entity_registry.editor.follow_device_area':
        'Follow device area',
      'ui.dialogs.entity_registry.editor.change_device_area':
        'Change device area',
      'ui.dialogs.entity_registry.editor.configure_state':
        '{integration} options',
      'ui.dialogs.helper_settings.platform_not_loaded':
        "The {platform} integration is not loaded. Please add it to your configuration either by adding 'default_config:' or ''{platform}:''.",
      'ui.dialogs.helper_settings.yaml_not_editable':
        'The settings of this entity cannot be edited from the UI. Only entities set up from the UI are configurable from the UI.',
      'ui.dialogs.helper_settings.required_error_msg': 'This field is required',
      'ui.dialogs.helper_settings.generic.name': 'Name',
      'ui.dialogs.helper_settings.generic.icon': 'Icon',
      'ui.dialogs.helper_settings.input_datetime.date': 'Date',
      'ui.dialogs.helper_settings.input_datetime.time': 'Time',
      'ui.dialogs.helper_settings.input_datetime.datetime': 'Date and time',
      'ui.dialogs.helper_settings.input_datetime.mode':
        'What do you want to input',
      'ui.dialogs.helper_settings.input_text.min': 'Minimum length',
      'ui.dialogs.helper_settings.input_text.max': 'Maximum length',
      'ui.dialogs.helper_settings.input_text.mode': 'Display mode',
      'ui.dialogs.helper_settings.input_text.text': 'Text',
      'ui.dialogs.helper_settings.input_text.password': 'Password',
      'ui.dialogs.helper_settings.input_text.pattern':
        'Regex pattern for client-side validation',
      'ui.dialogs.helper_settings.input_number.min': 'Minimum value',
      'ui.dialogs.helper_settings.input_number.max': 'Maximum value',
      'ui.dialogs.helper_settings.input_number.mode': 'Display mode',
      'ui.dialogs.helper_settings.input_number.box': 'Input field',
      'ui.dialogs.helper_settings.input_number.slider': 'Slider',
      'ui.dialogs.helper_settings.input_number.step': 'Step size',
      'ui.dialogs.helper_settings.input_number.unit_of_measurement':
        'Unit of measurement',
      'ui.dialogs.helper_settings.input_select.options': 'Options',
      'ui.dialogs.helper_settings.input_select.add_option': 'Add option',
      'ui.dialogs.helper_settings.input_select.no_options':
        'There are no options yet.',
      'ui.dialogs.helper_settings.input_select.add': 'Add',
      'ui.dialogs.helper_settings.counter.minimum': 'Minimum value',
      'ui.dialogs.helper_settings.counter.maximum': 'Maximum value',
      'ui.dialogs.helper_settings.counter.initial': 'Initial value',
      'ui.dialogs.helper_settings.counter.restore':
        'Restore the last known value when Home Assistant starts',
      'ui.dialogs.helper_settings.counter.step': 'Step size',
      'ui.dialogs.helper_settings.timer.duration': 'Duration',
      'ui.dialogs.helper_settings.timer.restore': 'Restore?',
      'ui.dialogs.options_flow.form.header': 'Options',
      'ui.dialogs.options_flow.loading.loading_flow':
        'Please wait while the options for {integration} are being initialized',
      'ui.dialogs.options_flow.loading.loading_step':
        'Loading next step for {integration}',
      'ui.dialogs.options_flow.success.description':
        'Options successfully saved.',
      'ui.dialogs.config_entry_system_options.title':
        'System Options for {integration}',
      'ui.dialogs.config_entry_system_options.enable_new_entities_label':
        'Enable newly added entities.',
      'ui.dialogs.config_entry_system_options.enable_new_entities_description':
        'If newly discovered devices for {integration} should be automatically added.',
      'ui.dialogs.config_entry_system_options.enable_polling_label':
        'Enable polling for updates.',
      'ui.dialogs.config_entry_system_options.enable_polling_description':
        'If Home Assistant should automatically poll {integration} entities for updates.',
      'ui.dialogs.config_entry_system_options.restart_home_assistant':
        'You need to restart Home Assistant for your changes to take effect.',
      'ui.dialogs.config_entry_system_options.update': 'Update',
      'ui.dialogs.zha_reconfigure_device.heading': 'Reconfiguring device',
      'ui.dialogs.zha_reconfigure_device.configuring_alt': 'Configuring',
      'ui.dialogs.zha_reconfigure_device.introduction':
        'Reconfigure a device on your Zigbee network. Use this feature if your device is not functioning correctly.',
      'ui.dialogs.zha_reconfigure_device.battery_device_warning':
        "You will need to wake battery powered devices before starting the reconfiguration process. Refer to your device's manual for instructions on how to wake the device.",
      'ui.dialogs.zha_reconfigure_device.run_in_background':
        'You can close this dialog and the reconfiguration will continue in the background.',
      'ui.dialogs.zha_reconfigure_device.start_reconfiguration':
        'Start Reconfiguration',
      'ui.dialogs.zha_reconfigure_device.in_progress':
        'The device is being reconfigured. This may take some time.',
      'ui.dialogs.zha_reconfigure_device.configuration_failed':
        'The device reconfiguration failed. Additional information may be available in the logs.',
      'ui.dialogs.zha_reconfigure_device.configuration_complete':
        'Device reconfiguration complete.',
      'ui.dialogs.zha_reconfigure_device.button_show': 'Show Details',
      'ui.dialogs.zha_reconfigure_device.button_hide': 'Hide Details',
      'ui.dialogs.zha_reconfigure_device.cluster_header': 'Cluster',
      'ui.dialogs.zha_reconfigure_device.bind_header': 'Binding',
      'ui.dialogs.zha_reconfigure_device.reporting_header': 'Reporting',
      'ui.dialogs.zha_reconfigure_device.attribute': 'Attribute',
      'ui.dialogs.zha_reconfigure_device.min_max_change': 'min/max/change',
      'ui.dialogs.zha_device_info.manuf': 'by {manufacturer}',
      'ui.dialogs.zha_device_info.no_area': 'No Area',
      'ui.dialogs.zha_device_info.device_signature': 'Zigbee device signature',
      'ui.dialogs.zha_device_info.device_children': 'Zigbee device children',
      'ui.dialogs.zha_device_info.buttons.add': 'Add Devices via this device',
      'ui.dialogs.zha_device_info.buttons.remove': 'Remove Device',
      'ui.dialogs.zha_device_info.buttons.clusters': 'Manage Clusters',
      'ui.dialogs.zha_device_info.buttons.reconfigure': 'Reconfigure Device',
      'ui.dialogs.zha_device_info.buttons.zigbee_information':
        'Zigbee device signature',
      'ui.dialogs.zha_device_info.buttons.device_children': 'View Children',
      'ui.dialogs.zha_device_info.buttons.view_in_visualization':
        'View in Visualization',
      'ui.dialogs.zha_device_info.services.reconfigure':
        'Reconfigure ZHA device (heal device). Use this if you are having issues with the device. If the device in question is a battery powered device please ensure it is awake and accepting commands when you use this service.',
      'ui.dialogs.zha_device_info.services.updateDeviceName':
        'Set a custom name for this device in the device registry.',
      'ui.dialogs.zha_device_info.services.remove':
        'Remove a device from the Zigbee network.',
      'ui.dialogs.zha_device_info.services.zigbee_information':
        'View the Zigbee information for the device.',
      'ui.dialogs.zha_device_info.confirmations.remove':
        'Are you sure that you want to remove the device?',
      'ui.dialogs.zha_device_info.quirk': 'Quirk',
      'ui.dialogs.zha_device_info.last_seen': 'Last Seen',
      'ui.dialogs.zha_device_info.power_source': 'Power Source',
      'ui.dialogs.zha_device_info.unknown': 'Unknown',
      'ui.dialogs.zha_device_info.zha_device_card.device_name_placeholder':
        'Change device name',
      'ui.dialogs.domain_toggler.title': 'Toggle Domains',
      'ui.dialogs.domain_toggler.reset_entities': 'Reset Entities',
      'ui.dialogs.mqtt_device_debug_info.title': '{device} debug info',
      'ui.dialogs.mqtt_device_debug_info.deserialize':
        'Attempt to parse MQTT messages as JSON',
      'ui.dialogs.mqtt_device_debug_info.entities': 'Entities',
      'ui.dialogs.mqtt_device_debug_info.no_entities': 'No entities',
      'ui.dialogs.mqtt_device_debug_info.no_triggers': 'No triggers',
      'ui.dialogs.mqtt_device_debug_info.payload_display': 'Payload display',
      'ui.dialogs.mqtt_device_debug_info.recent_messages':
        '{n} most recently received message(s)',
      'ui.dialogs.mqtt_device_debug_info.recent_tx_messages':
        '{n} most recently transmitted message(s)',
      'ui.dialogs.mqtt_device_debug_info.show_as_yaml': 'Show as YAML',
      'ui.dialogs.mqtt_device_debug_info.triggers': 'Triggers',
      'ui.dialogs.unsupported.title':
        'You are running an unsupported installation',
      'ui.dialogs.unsupported.description':
        'Below is a list of issues found with your installation, click on the links to learn how you can resolve the issues.',
      'ui.dialogs.unsupported.reasons.apparmor':
        'AppArmor is not enabled on the host',
      'ui.dialogs.unsupported.reasons.content_trust':
        'Content-trust validation is disabled',
      'ui.dialogs.unsupported.reasons.dbus': 'DBUS',
      'ui.dialogs.unsupported.reasons.docker_configuration':
        'Docker Configuration',
      'ui.dialogs.unsupported.reasons.docker_version': 'Docker Version',
      'ui.dialogs.unsupported.reasons.job_conditions': 'Ignored job conditions',
      'ui.dialogs.unsupported.reasons.lxc': 'LXC',
      'ui.dialogs.unsupported.reasons.network_manager': 'Network Manager',
      'ui.dialogs.unsupported.reasons.os': 'Operating System',
      'ui.dialogs.unsupported.reasons.os_agent': 'OS Agent',
      'ui.dialogs.unsupported.reasons.privileged':
        'Supervisor is not privileged',
      'ui.dialogs.unsupported.reasons.software':
        'Unsupported software detected',
      'ui.dialogs.unsupported.reasons.source_mods': 'Source modifications',
      'ui.dialogs.unsupported.reasons.systemd': 'Systemd',
      'ui.dialogs.unsupported.reasons.systemd_resolved': 'Systemd-Resolved',
      'ui.dialogs.unhealthy.title': 'Your installation is unhealthy',
      'ui.dialogs.unhealthy.description':
        'Running an unhealthy installation will cause issues. Below is a list of issues found with your installation, click on the links to learn how you can resolve the issues.',
      'ui.dialogs.unhealthy.reasons.privileged': 'Supervisor is not privileged',
      'ui.dialogs.unhealthy.reasons.supervisor':
        'Supervisor was not able to update',
      'ui.dialogs.unhealthy.reasons.setup': 'Setup of the Supervisor failed',
      'ui.dialogs.unhealthy.reasons.docker':
        'The Docker environment is not working properly',
      'ui.dialogs.unhealthy.reasons.untrusted': 'Detected untrusted content',
      'ui.dialogs.join_beta_channel.title': 'Join the beta channel',
      'ui.dialogs.join_beta_channel.warning':
        'Beta releases are for testers and early adopters and can contain unstable code changes',
      'ui.dialogs.join_beta_channel.backup':
        'Make sure you have backups of your data before you activate this feature.',
      'ui.dialogs.join_beta_channel.release_items':
        'This includes beta releases for:',
      'ui.dialogs.join_beta_channel.confirm':
        'Do you want to join the beta channel?',
      'ui.duration.second':
        '{count} {count, plural,\n  one {second}\n  other {seconds}\n}',
      'ui.duration.minute':
        '{count} {count, plural,\n  one {minute}\n  other {minutes}\n}',
      'ui.duration.hour':
        '{count} {count, plural,\n  one {hour}\n  other {hours}\n}',
      'ui.duration.day':
        '{count} {count, plural,\n  one {day}\n  other {days}\n}',
      'ui.duration.week':
        '{count} {count, plural,\n  one {week}\n  other {weeks}\n}',
      'ui.errors.config.no_type_provided': 'No type provided.',
      'ui.errors.config.error_detected': 'Configuration errors detected',
      'ui.errors.config.editor_not_available':
        "No visual editor available for type ''{type}''.",
      'ui.errors.config.editor_not_supported':
        'Visual editor is not supported for this configuration',
      'ui.errors.config.edit_in_yaml_supported':
        'You can still edit your config in YAML.',
      'ui.errors.config.key_missing': "Required key ''{key}'' is missing.",
      'ui.errors.config.key_not_expected':
        "Key ''{key}'' is not expected or not supported by the visual editor.",
      'ui.errors.config.key_wrong_type':
        "The provided value for ''{key}'' is not supported by the visual editor. We support ({type_correct}) but received ({type_wrong}).",
      'ui.errors.config.no_template_editor_support':
        'Templates not supported in visual editor',
      'ui.errors.supervisor.title': 'Could not load the Supervisor panel!',
      'ui.errors.supervisor.wait':
        'If you just started, make sure you have given the Supervisor enough time to start.',
      'ui.errors.supervisor.ask': 'Ask for help',
      'ui.errors.supervisor.reboot': 'Try a reboot of the host',
      'ui.errors.supervisor.observer': 'Check the Observer',
      'ui.errors.supervisor.system_health': 'Check System Health',
      'ui.login-form.password': 'Password',
      'ui.login-form.remember': 'Remember',
      'ui.login-form.log_in': 'Log in',
      'ui.notification_drawer.click_to_configure':
        'Click button to configure {entity}',
      'ui.notification_drawer.empty': 'No Notifications',
      'ui.notification_drawer.title': 'Notifications',
      'ui.notification_drawer.close': 'Close',
      'ui.notification_drawer.dismiss_all': 'Dismiss all',
      'ui.notification_toast.service_call_failed':
        'Failed to call service {service}.',
      'ui.notification_toast.connection_lost': 'Connection lost. Reconnecting…',
      'ui.notification_toast.started': 'Home Assistant has started!',
      'ui.notification_toast.starting':
        'Home Assistant is starting, not everything will be available until it is finished.',
      'ui.notification_toast.wrapping_up_startup':
        'Wrapping up startup, not everything will be available until it is finished.',
      'ui.notification_toast.integration_starting':
        'Starting {integration}, not everything will be available until it is finished.',
      'ui.notification_toast.triggered': 'Triggered {name}',
      'ui.notification_toast.dismiss': 'Dismiss',
      'ui.notification_toast.no_matching_link_found':
        'No matching My link found for {path}',
      'ui.sidebar.external_app_configuration': 'App Configuration',
      'ui.sidebar.sidebar_toggle': 'Sidebar Toggle',
      'ui.sidebar.done': 'Done',
      'ui.sidebar.hide_panel': 'Hide panel',
      'ui.sidebar.show_panel': 'Show panel',
      'ui.tips.key_c_hint': "Press 'c' on any page to open the command dialog",
      'ui.tips.key_e_hint':
        "Press 'e' on any page to open the entity search dialog",
      'ui.tips.key_m_hint':
        "Press 'm' on any page to get the My Home Assistant link",
      'component.sun.state._.above_horizon': 'Above horizon',
      'component.sun.state._.below_horizon': 'Below horizon',
      'component.humidifier.state._.off': 'Off',
      'component.humidifier.state._.on': 'On',
      'component.script.state._.off': 'Off',
      'component.script.state._.on': 'On',
      'component.light.state._.off': 'Off',
      'component.light.state._.on': 'On',
      'component.remote.state._.off': 'Off',
      'component.remote.state._.on': 'On',
      'component.sensor.state._.off': 'Off',
      'component.sensor.state._.on': 'On',
      'component.device_tracker.state._.home': 'Home',
      'component.device_tracker.state._.not_home': 'Away',
      'component.media_player.state._.buffering': 'Buffering',
      'component.media_player.state._.idle': 'Idle',
      'component.media_player.state._.off': 'Off',
      'component.media_player.state._.on': 'On',
      'component.media_player.state._.paused': 'Paused',
      'component.media_player.state._.playing': 'Playing',
      'component.media_player.state._.standby': 'Standby',
      'component.timer.state._.active': 'Active',
      'component.timer.state._.idle': 'Idle',
      'component.timer.state._.paused': 'Paused',
      'component.vacuum.state._.cleaning': 'Cleaning',
      'component.vacuum.state._.docked': 'Docked',
      'component.vacuum.state._.error': 'Error',
      'component.vacuum.state._.idle': 'Idle',
      'component.vacuum.state._.off': 'Off',
      'component.vacuum.state._.on': 'On',
      'component.vacuum.state._.paused': 'Paused',
      'component.vacuum.state._.returning': 'Returning to dock',
      'component.input_boolean.state._.off': 'Off',
      'component.input_boolean.state._.on': 'On',
      'component.binary_sensor.state._.off': 'Off',
      'component.binary_sensor.state._.on': 'On',
      'component.binary_sensor.state.battery.off': 'Normal',
      'component.binary_sensor.state.battery.on': 'Low',
      'component.binary_sensor.state.battery_charging.off': 'Not charging',
      'component.binary_sensor.state.battery_charging.on': 'Charging',
      'component.binary_sensor.state.carbon_monoxide.off': 'Clear',
      'component.binary_sensor.state.carbon_monoxide.on': 'Detected',
      'component.binary_sensor.state.co.off': 'Clear',
      'component.binary_sensor.state.co.on': 'Detected',
      'component.binary_sensor.state.cold.off': 'Normal',
      'component.binary_sensor.state.cold.on': 'Cold',
      'component.binary_sensor.state.connectivity.off': 'Disconnected',
      'component.binary_sensor.state.connectivity.on': 'Connected',
      'component.binary_sensor.state.door.off': 'Closed',
      'component.binary_sensor.state.door.on': 'Open',
      'component.binary_sensor.state.garage_door.off': 'Closed',
      'component.binary_sensor.state.garage_door.on': 'Open',
      'component.binary_sensor.state.gas.off': 'Clear',
      'component.binary_sensor.state.gas.on': 'Detected',
      'component.binary_sensor.state.heat.off': 'Normal',
      'component.binary_sensor.state.heat.on': 'Hot',
      'component.binary_sensor.state.light.off': 'No light',
      'component.binary_sensor.state.light.on': 'Light detected',
      'component.binary_sensor.state.lock.off': 'Locked',
      'component.binary_sensor.state.lock.on': 'Unlocked',
      'component.binary_sensor.state.moisture.off': 'Dry',
      'component.binary_sensor.state.moisture.on': 'Wet',
      'component.binary_sensor.state.motion.off': 'Clear',
      'component.binary_sensor.state.motion.on': 'Detected',
      'component.binary_sensor.state.moving.off': 'Not moving',
      'component.binary_sensor.state.moving.on': 'Moving',
      'component.binary_sensor.state.occupancy.off': 'Clear',
      'component.binary_sensor.state.occupancy.on': 'Detected',
      'component.binary_sensor.state.opening.off': 'Closed',
      'component.binary_sensor.state.opening.on': 'Open',
      'component.binary_sensor.state.plug.off': 'Unplugged',
      'component.binary_sensor.state.plug.on': 'Plugged in',
      'component.binary_sensor.state.presence.off': 'Away',
      'component.binary_sensor.state.presence.on': 'Home',
      'component.binary_sensor.state.problem.off': 'OK',
      'component.binary_sensor.state.problem.on': 'Problem',
      'component.binary_sensor.state.running.off': 'Not running',
      'component.binary_sensor.state.running.on': 'Running',
      'component.binary_sensor.state.safety.off': 'Safe',
      'component.binary_sensor.state.safety.on': 'Unsafe',
      'component.binary_sensor.state.smoke.off': 'Clear',
      'component.binary_sensor.state.smoke.on': 'Detected',
      'component.binary_sensor.state.sound.off': 'Clear',
      'component.binary_sensor.state.sound.on': 'Detected',
      'component.binary_sensor.state.update.off': 'Up-to-date',
      'component.binary_sensor.state.update.on': 'Update available',
      'component.binary_sensor.state.vibration.off': 'Clear',
      'component.binary_sensor.state.vibration.on': 'Detected',
      'component.binary_sensor.state.window.off': 'Closed',
      'component.binary_sensor.state.window.on': 'Open',
      'component.automation.state._.off': 'Off',
      'component.automation.state._.on': 'On',
      'component.weather.state._.clear-night': 'Clear, night',
      'component.weather.state._.cloudy': 'Cloudy',
      'component.weather.state._.exceptional': 'Exceptional',
      'component.weather.state._.fog': 'Fog',
      'component.weather.state._.hail': 'Hail',
      'component.weather.state._.lightning': 'Lightning',
      'component.weather.state._.lightning-rainy': 'Lightning, rainy',
      'component.weather.state._.partlycloudy': 'Partly cloudy',
      'component.weather.state._.pouring': 'Pouring',
      'component.weather.state._.rainy': 'Rainy',
      'component.weather.state._.snowy': 'Snowy',
      'component.weather.state._.snowy-rainy': 'Snowy, rainy',
      'component.weather.state._.sunny': 'Sunny',
      'component.weather.state._.windy': 'Windy',
      'component.weather.state._.windy-variant': 'Windy',
      'component.person.state._.home': 'Home',
      'component.person.state._.not_home': 'Away',
      'component.climate.state._.auto': 'Auto',
      'component.climate.state._.cool': 'Cool',
      'component.climate.state._.dry': 'Dry',
      'component.climate.state._.fan_only': 'Fan only',
      'component.climate.state._.heat': 'Heat',
      'component.climate.state._.heat_cool': 'Heat/Cool',
      'component.climate.state._.off': 'Off',
      'component.switch.state._.off': 'Off',
      'component.switch.state._.on': 'On',
      'component.camera.state._.idle': 'Idle',
      'component.camera.state._.recording': 'Recording',
      'component.camera.state._.streaming': 'Streaming',
    },
  },
  translationMetadata: {
    fragments: [
      'my',
      'config',
      'lovelace',
      'mailbox',
      'media-browser',
      'map',
      'profile',
      'shopping_list',
      'page-authorize',
      'page-demo',
      'developer-tools',
      'page-onboarding',
      'custom',
      'energy',
    ],
    translations: {
      af: {
        nativeName: 'Afrikaans',
        hash: '6c72659b863c44dcb6e86982c68c7b33',
      },
      ar: {
        nativeName: 'العربية',
        isRTL: true,
        hash: '522e33faf9f9af9051de091bab9f7024',
      },
      bg: {
        nativeName: 'Български',
        hash: '6964004426ef370d90c24f56fb1ac3e2',
      },
      bn: {
        nativeName: 'বাংলা',
        hash: 'cf53ee2d49057c20323f7d5b2198d1b2',
      },
      bs: {
        nativeName: 'Bosanski',
        hash: '18c9567b09c4a627157bb73f181b99bb',
      },
      ca: {
        nativeName: 'Català',
        hash: '1f260f71e3873d274d5edf3778bf18b1',
      },
      cs: {
        nativeName: 'Čeština',
        hash: '7499d659eda60ab6816a9dd6e8a8634a',
      },
      cy: {
        nativeName: 'Cymraeg',
        hash: '76bd6e25e1df42cd0efa6948c07ce618',
      },
      da: {
        nativeName: 'Dansk',
        hash: '3608a9880f15540a66126777a23220af',
      },
      de: {
        nativeName: 'Deutsch',
        hash: 'd5697e0d5c89626f71eaf163dfbdda8c',
      },
      el: {
        nativeName: 'Ελληνικά',
        hash: '73af22bc03360baa9a8c7038aa5f4f3c',
      },
      en: {
        nativeName: 'English',
        hash: 'e47f5cd90fd355dbe1c94488a34e71e4',
      },
      'en-GB': {
        nativeName: 'English (GB)',
        hash: '1043473b93d0f14bca853b1381ce316e',
      },
      eo: {
        nativeName: 'Esperanto',
        hash: '0b365a7cc20fb3a846ef390ba1ef7095',
      },
      es: {
        nativeName: 'Español',
        hash: 'ae2c5b755bd3d398552717e5880beffb',
      },
      'es-419': {
        nativeName: 'Español (Latin America)',
        hash: '0344bd74c312c75220a955f92d1f0737',
      },
      et: {
        nativeName: 'Eesti',
        hash: 'a34d29740c0a0dfb4bc5a7096c0fa336',
      },
      eu: {
        nativeName: 'Euskara',
        hash: '4e08d2e2984ed51c1e358a64d3291ae5',
      },
      fa: {
        nativeName: 'فارسی',
        isRTL: true,
        hash: '33a4e581829593387999293e19d6ef62',
      },
      fi: {
        nativeName: 'Suomi',
        hash: '3611e440e86b6ada90c28e35e109a20f',
      },
      fy: {
        nativeName: 'Frysk',
        hash: 'd19d6379c3b2584b81e502ce089a10b2',
      },
      fr: {
        nativeName: 'Français',
        hash: '14fd90693fd0bf0fb0d893d29e7ca554',
      },
      gl: {
        nativeName: 'Galego',
        hash: '082d1ab4515d88793cb73732c326039a',
      },
      gsw: {
        nativeName: 'Schwiizerdütsch',
        hash: '54919ff551cc03c575f0f77af4a2f369',
      },
      he: {
        nativeName: 'עברית',
        isRTL: true,
        hash: '95d42e3b7d9cc6a9b0314c21228ab9a9',
      },
      hi: {
        nativeName: 'हिन्दी',
        hash: 'c846f7b7adf7b852f24849bb9798018c',
      },
      hr: {
        nativeName: 'Hrvatski',
        hash: '89261d8e5a198e685818e905a1541177',
      },
      hu: {
        nativeName: 'Magyar',
        hash: '5cc595177b4434d10dad8238e96123e2',
      },
      hy: {
        nativeName: 'Հայերեն',
        hash: '324b07717e37fc81dadbc2f2a15eac0b',
      },
      id: {
        nativeName: 'Indonesia',
        hash: '6d5be2ed36a9dc1eee063c9303a58623',
      },
      it: {
        nativeName: 'Italiano',
        hash: '3d79dfef9d645392aeeb818409d9be69',
      },
      is: {
        nativeName: 'Íslenska',
        hash: '258116a4e2111e6ed7a10cb6f36d3e8a',
      },
      ja: {
        nativeName: '日本語',
        hash: '885fc8c6d3071fff14e4924fecbaa8a5',
      },
      ka: {
        nativeName: 'Kartuli',
        hash: '1b00ff78bea2c983593419c0e5b8f3a2',
      },
      ko: {
        nativeName: '한국어',
        hash: '0c4660dd30801d156ebf936045f121c0',
      },
      lb: {
        nativeName: 'Lëtzebuergesch',
        hash: '0ab7f3ac58ca82e9e35c01239f19c664',
      },
      lt: {
        nativeName: 'Lietuvių',
        hash: 'dee99066abbf161fd08fe9b58674cea5',
      },
      lv: {
        nativeName: 'Latviešu',
        hash: '7e8ef8fb5835c9934279270a0b91707d',
      },
      nl: {
        nativeName: 'Nederlands',
        hash: 'a46a25ad3bbbcedd7acf698908ff49aa',
      },
      nb: {
        nativeName: 'Norsk Bokmål',
        hash: 'cab47a92da86272698231c32e82a0e9c',
      },
      nn: {
        nativeName: 'Norsk Nynorsk',
        hash: '005c8e90d7848288692d8cd1dd2719e9',
      },
      pl: {
        nativeName: 'Polski',
        hash: '5063171f619eefaaed65437e23e11101',
      },
      pt: {
        nativeName: 'Português',
        hash: 'da08e7424555c37ffac08d0ca42c212d',
      },
      'pt-BR': {
        nativeName: 'Português (BR)',
        hash: '5a06deedb0787ed7332809e08a708a73',
      },
      ro: {
        nativeName: 'Română',
        hash: 'fde451d9fb569cd7c977e37d39e19a2f',
      },
      ru: {
        nativeName: 'Русский',
        hash: '395a9e737952c3669dfb9d5ddee5d9f6',
      },
      sk: {
        nativeName: 'Slovenčina',
        hash: '3487f3b4fbbc8c36c6e1119dff79ac36',
      },
      sl: {
        nativeName: 'Slovenščina',
        hash: '01a74913c156fd5b7bb123edcc6a8d3b',
      },
      sr: {
        nativeName: 'Српски',
        hash: '73ae4776f3475c80b14c50649ff5705f',
      },
      'sr-Latn': {
        nativeName: 'Srpski',
        hash: '48921a9b11ea799ee29aca4624fa0c31',
      },
      sv: {
        nativeName: 'Svenska',
        hash: 'df51b7ab1508fe4cdaef7c4a86cf1466',
      },
      ta: {
        nativeName: 'தமிழ்',
        hash: '820133b1116b45778491d7f4a04fc447',
      },
      te: {
        nativeName: 'తెలుగు',
        hash: '6df0c1ce68771bc03cdacb02c76985a2',
      },
      th: {
        nativeName: 'ภาษาไทย',
        hash: 'ca7986c093256d34443bc8ce872518f6',
      },
      tr: {
        nativeName: 'Türkçe',
        hash: '44a68f4e1206230248741a4fdbfb3ab1',
      },
      uk: {
        nativeName: 'Українська',
        hash: '313386b0ab57be33ee892cbc6f9e8890',
      },
      ur: {
        nativeName: 'اُردُو',
        hash: '089db9047494bc95cb2a57652ded798b',
      },
      vi: {
        nativeName: 'Tiếng Việt',
        hash: 'f753bd6579d72082d10b81a1bb030620',
      },
      'zh-Hans': {
        nativeName: '简体中文',
        hash: '3398a2ab6c683fe7eb8179549f26ff9c',
      },
      'zh-Hant': {
        nativeName: '繁體中文',
        hash: 'edce80e1af8c0f10af524bf891a6eac0',
      },
      test: {
        nativeName: 'Test',
        hash: '7fd3724b3e84ea65a4b0fde6fced62e1',
      },
    },
  },
  dockedSidebar: 'auto',
  vibrate: true,
  suspendWhenHidden: true,
  enableShortcuts: true,
  moreInfoEntityId: null,
  userData: {
    showAdvanced: true,
  },
}

hass.callService = (
  domain: string,
  service: string,
  data: { entity_id: string; brightness?: string }
) => {
  console.log('🚀 callService: ', domain, service, data)
}

export default hass
