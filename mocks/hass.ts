// import { message } from 'antd'

const hass: any = {
  auth: {
    data: {
      access_token:
        'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiI5M2U0YzRkZjRmNTY0ODMyYjg5YjYwY2E5NzdhNzY1MSIsImlhdCI6MTY1Mzg2NjM3MywiZXhwIjoxNjUzODY4MTczfQ.P_AWistsaDeTZmzTwpBtZdurD2lb6vFZohoHrxk8qcE',
      token_type: 'Bearer',
      expires_in: 1800,
      hassUrl: 'http://homeassistant.local:8123',
      clientId: 'http://homeassistant.local:8123/',
      expires: 1653868173648,
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
            'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiI5M2U0YzRkZjRmNTY0ODMyYjg5YjYwY2E5NzdhNzY1MSIsImlhdCI6MTY1Mzg2NjM3MywiZXhwIjoxNjUzODY4MTczfQ.P_AWistsaDeTZmzTwpBtZdurD2lb6vFZohoHrxk8qcE',
          token_type: 'Bearer',
          expires_in: 1800,
          hassUrl: 'http://homeassistant.local:8123',
          clientId: 'http://homeassistant.local:8123/',
          expires: 1653868173648,
          refresh_token:
            '0ee0286c422930fbc597111ff8eb2754e4aae7d006a6dcaaabbdcd5966fe9107a69fcf24c7fce72fc7ed5801511a63c22fd4904031fe8c376c1b1f718c1791f3',
        },
      },
    },
    commandId: 45,
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
            id: '018111d801dd14d84e1df38347f52ae5',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-29T22:02:57.885Z',
          last_updated: '2022-05-29T22:02:57.885Z',
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
            id: '01810e72c2900fe4d90328bfb106c3de',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-29T06:13:20.390Z',
          last_updated: '2022-05-29T06:13:30.896Z',
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
            id: '01810e72b6ceefa1b482e71bf7049705',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-29T06:13:27.886Z',
          last_updated: '2022-05-29T06:13:27.886Z',
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
            id: '01810e72b6cf12d6068b015a562ffb28',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-29T06:13:27.887Z',
          last_updated: '2022-05-29T06:13:27.887Z',
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
            id: '01810e72b6cf481e6bc63932aa666f40',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-29T06:13:27.887Z',
          last_updated: '2022-05-29T06:13:27.887Z',
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
            id: '01810e72b6d04db8a3fba2a3d74809ba',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-29T06:13:27.888Z',
          last_updated: '2022-05-29T06:13:27.888Z',
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
            id: '01810e72b6d05ee3d023a5384287fa6d',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-29T06:13:27.888Z',
          last_updated: '2022-05-29T06:13:27.888Z',
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
            id: '01810e72b6d1d15c2d66f4fdd46301da',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-29T06:13:27.889Z',
          last_updated: '2022-05-29T06:13:27.889Z',
        },
        'sun.sun': {
          entity_id: 'sun.sun',
          state: 'above_horizon',
          attributes: {
            next_dawn: '2022-05-30T09:12:03.478472+00:00',
            next_dusk: '2022-05-30T01:00:35.085666+00:00',
            next_midnight: '2022-05-30T05:06:30+00:00',
            next_noon: '2022-05-30T17:06:24+00:00',
            next_rising: '2022-05-30T09:44:14.106863+00:00',
            next_setting: '2022-05-30T00:28:24.126536+00:00',
            elevation: 7.09,
            azimuth: 292.38,
            rising: false,
            friendly_name: 'Sun',
          },
          context: {
            id: '01811232911a873dbf59a65b80c9b65b',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-29T09:46:42.454Z',
          last_updated: '2022-05-29T23:41:52.794Z',
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
            id: '018111d801e6250951c302c9b822898e',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-29T22:02:57.894Z',
          last_updated: '2022-05-29T22:02:57.894Z',
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
            id: '01810e72b86ba3d9f7fe317b8b2a1357',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-29T06:13:28.299Z',
          last_updated: '2022-05-29T06:13:28.299Z',
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
            app_id: '',
            friendly_name: 'Living Room',
            supported_features: 450487,
          },
          context: {
            id: '0181121d34be7dd74dd761dbe49a06d9',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-29T23:18:32.894Z',
          last_updated: '2022-05-29T23:18:32.894Z',
        },
        'remote.living_room': {
          entity_id: 'remote.living_room',
          state: 'on',
          attributes: {
            friendly_name: 'Living Room',
            supported_features: 0,
          },
          context: {
            id: '01810e72bea4d92be33c66216a65f0a7',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-29T06:13:29.892Z',
          last_updated: '2022-05-29T06:13:29.892Z',
        },
        'sensor.iphone_mark_activity': {
          entity_id: 'sensor.iphone_mark_activity',
          state: 'Cycling',
          attributes: {
            Confidence: 'High',
            Types: ['Cycling'],
            icon: 'mdi:bike',
            friendly_name: 'iphone mark Activity',
          },
          context: {
            id: '018111a43ac027604ad714bb6eb761a5',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-29T21:06:24.576Z',
          last_updated: '2022-05-29T21:06:24.576Z',
        },
        'sensor.iphone_mark_average_active_pace': {
          entity_id: 'sensor.iphone_mark_average_active_pace',
          state: '0',
          attributes: {
            unit_of_measurement: 'm/s',
            icon: 'mdi:speedometer',
            friendly_name: 'iphone mark Average Active Pace',
          },
          context: {
            id: '018111a43a8d44b036362461523adcb7',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-29T21:06:24.525Z',
          last_updated: '2022-05-29T21:06:24.525Z',
        },
        'sensor.iphone_mark_bssid': {
          entity_id: 'sensor.iphone_mark_bssid',
          state: '6c:ae:f6:ca:75:86',
          attributes: {
            icon: 'mdi:wifi-star',
            friendly_name: 'iphone mark BSSID',
          },
          context: {
            id: '018111a43ac2afb2e658e9b1103d53b5',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-29T21:06:24.578Z',
          last_updated: '2022-05-29T21:06:24.578Z',
        },
        'sensor.iphone_mark_battery_level': {
          entity_id: 'sensor.iphone_mark_battery_level',
          state: '73',
          attributes: {
            unit_of_measurement: '%',
            device_class: 'battery',
            icon: 'mdi:battery-70',
            friendly_name: 'iphone mark Battery Level',
          },
          context: {
            id: '018111a43a8d89bbb0a3e125b19b5bbb',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-29T21:06:24.525Z',
          last_updated: '2022-05-29T21:06:24.525Z',
        },
        'sensor.iphone_mark_battery_state': {
          entity_id: 'sensor.iphone_mark_battery_state',
          state: 'Not Charging',
          attributes: {
            'Low Power Mode': false,
            icon: 'mdi:battery-70',
            friendly_name: 'iphone mark Battery State',
          },
          context: {
            id: '018111a43a8dcfca8184dcb42039e0ef',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-29T06:13:29.388Z',
          last_updated: '2022-05-29T21:06:24.525Z',
        },
        'sensor.iphone_mark_connection_type': {
          entity_id: 'sensor.iphone_mark_connection_type',
          state: 'Wi-Fi',
          attributes: {
            icon: 'mdi:wifi',
            friendly_name: 'iphone mark Connection Type',
          },
          context: {
            id: '018111a43ac24a8f5d40ab96d88e8e51',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-29T21:06:24.578Z',
          last_updated: '2022-05-29T21:06:24.578Z',
        },
        'sensor.iphone_mark_distance': {
          entity_id: 'sensor.iphone_mark_distance',
          state: '4471',
          attributes: {
            unit_of_measurement: 'm',
            icon: 'mdi:hiking',
            friendly_name: 'iphone mark Distance',
          },
          context: {
            id: '018111a43ac084241feca16d01030950',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-29T21:06:24.576Z',
          last_updated: '2022-05-29T21:06:24.576Z',
        },
        'sensor.iphone_mark_floors_ascended': {
          entity_id: 'sensor.iphone_mark_floors_ascended',
          state: '2',
          attributes: {
            unit_of_measurement: 'floors',
            icon: 'mdi:stairs-up',
            friendly_name: 'iphone mark Floors Ascended',
          },
          context: {
            id: '018110fee1cdf403b4e7f2dbfdb1a7a4',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-29T18:05:48.365Z',
          last_updated: '2022-05-29T18:05:48.365Z',
        },
        'sensor.iphone_mark_floors_descended': {
          entity_id: 'sensor.iphone_mark_floors_descended',
          state: '2',
          attributes: {
            unit_of_measurement: 'floors',
            icon: 'mdi:stairs-down',
            friendly_name: 'iphone mark Floors Descended',
          },
          context: {
            id: '018110fee1ce5dfb54b82746896c7448',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-29T18:05:48.366Z',
          last_updated: '2022-05-29T18:05:48.366Z',
        },
        'sensor.iphone_mark_geocoded_location': {
          entity_id: 'sensor.iphone_mark_geocoded_location',
          state: '1515 Lincoln Cir\nMcLean VA 22102\nUnited States',
          attributes: {
            'Administrative Area': 'VA',
            'Areas Of Interest': 'N/A',
            Country: 'United States',
            'Inland Water': 'N/A',
            'ISO Country Code': 'US',
            Locality: 'McLean',
            Location: [38.929351806640625, -77.22998610582583],
            Name: '1515 Lincoln Cir',
            Ocean: 'N/A',
            'Postal Code': '22102',
            'Sub Administrative Area': 'Fairfax County',
            'Sub Locality': 'North Central',
            'Sub Thoroughfare': '1515',
            Thoroughfare: 'Lincoln Cir',
            'Time Zone': 'America/New_York',
            Zones: ['Home'],
            icon: 'mdi:map',
            friendly_name: 'iphone mark Geocoded Location',
          },
          context: {
            id: '018111a43a8f5f37d8840b1eb5d82cab',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-29T21:06:24.527Z',
          last_updated: '2022-05-29T21:06:24.527Z',
        },
        'sensor.iphone_mark_last_update_trigger': {
          entity_id: 'sensor.iphone_mark_last_update_trigger',
          state: 'Signaled',
          attributes: {
            icon: 'mdi:cellphone-wireless',
            friendly_name: 'iphone mark Last Update Trigger',
          },
          context: {
            id: '018111a43ac3004e2d5bc2ecfc3b69c1',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-29T21:06:24.579Z',
          last_updated: '2022-05-29T21:06:24.579Z',
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
            id: '01810e72bcb05409104f6db03cc9fc6e',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-29T06:13:29.392Z',
          last_updated: '2022-05-29T06:13:29.392Z',
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
            id: '01810e72bcb1ddcbf267cb731f208793',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-29T06:13:29.393Z',
          last_updated: '2022-05-29T06:13:29.393Z',
        },
        'sensor.iphone_mark_ssid': {
          entity_id: 'sensor.iphone_mark_ssid',
          state: 'Lyck',
          attributes: {
            icon: 'mdi:wifi',
            friendly_name: 'iphone mark SSID',
          },
          context: {
            id: '018111a43ac2524016e87a87521f2219',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-29T21:06:24.578Z',
          last_updated: '2022-05-29T21:06:24.578Z',
        },
        'sensor.iphone_mark_steps': {
          entity_id: 'sensor.iphone_mark_steps',
          state: '5781',
          attributes: {
            unit_of_measurement: 'steps',
            icon: 'mdi:walk',
            friendly_name: 'iphone mark Steps',
          },
          context: {
            id: '018111a43ac1e5e3e350ec3e4de35c2b',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-29T21:06:24.577Z',
          last_updated: '2022-05-29T21:06:24.577Z',
        },
        'sensor.iphone_mark_storage': {
          entity_id: 'sensor.iphone_mark_storage',
          state: '63.28',
          attributes: {
            Available: '62.07 GB',
            'Available (Important)': '166.24 GB',
            'Available (Opportunistic)': '161.93 GB',
            Total: '255.88 GB',
            unit_of_measurement: '% available',
            icon: 'mdi:database',
            friendly_name: 'iphone mark Storage',
          },
          context: {
            id: '018111a43a8e434652a7327af2867c3d',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-29T21:06:24.526Z',
          last_updated: '2022-05-29T21:06:24.526Z',
        },
        'binary_sensor.iphone_mark_focus': {
          entity_id: 'binary_sensor.iphone_mark_focus',
          state: 'off',
          attributes: {
            icon: 'mdi:moon-waning-crescent',
            friendly_name: 'iphone mark Focus',
          },
          context: {
            id: '01810f4225d070a9e6a31c602aee7ff0',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-29T10:00:02.256Z',
          last_updated: '2022-05-29T10:00:02.256Z',
        },
        'device_tracker.iphone_mark': {
          entity_id: 'device_tracker.iphone_mark',
          state: 'home',
          attributes: {
            source_type: 'gps',
            battery_level: 73,
            latitude: 38.929351806640625,
            longitude: -77.22998610582583,
            gps_accuracy: 77,
            altitude: 152.62384033203125,
            vertical_accuracy: 4.974974155426025,
            friendly_name: 'iphone mark',
          },
          context: {
            id: '018111a43a8b78fb83faaf6a5c8bc8fb',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-29T21:06:24.523Z',
          last_updated: '2022-05-29T21:06:24.523Z',
        },
        'binary_sensor.my_ecobee_occupancy': {
          entity_id: 'binary_sensor.my_ecobee_occupancy',
          state: 'on',
          attributes: {
            device_class: 'occupancy',
            friendly_name: 'My ecobee Occupancy',
          },
          context: {
            id: '018112223bbcd04fb152d07a4043c8a0',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-29T23:24:02.364Z',
          last_updated: '2022-05-29T23:24:02.364Z',
        },
        'binary_sensor.bedroom_sensor_occupancy': {
          entity_id: 'binary_sensor.bedroom_sensor_occupancy',
          state: 'on',
          attributes: {
            device_class: 'occupancy',
            friendly_name: 'bedroom sensor Occupancy',
          },
          context: {
            id: '018112256ee9aa41a834c24f61fd29a1',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-29T23:27:32.074Z',
          last_updated: '2022-05-29T23:27:32.074Z',
        },
        'binary_sensor.office_occupancy': {
          entity_id: 'binary_sensor.office_occupancy',
          state: 'on',
          attributes: {
            device_class: 'occupancy',
            friendly_name: 'Office Occupancy',
          },
          context: {
            id: '01811222afbfb6e184ef10426acff4f4',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-29T23:24:32.063Z',
          last_updated: '2022-05-29T23:24:32.063Z',
        },
        'sensor.my_ecobee_temperature': {
          entity_id: 'sensor.my_ecobee_temperature',
          state: '79.4',
          attributes: {
            state_class: 'measurement',
            unit_of_measurement: '°F',
            device_class: 'temperature',
            friendly_name: 'My ecobee Temperature',
          },
          context: {
            id: '0181122dac5e89c11f6bfb26f642070e',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-29T23:36:32.094Z',
          last_updated: '2022-05-29T23:36:32.094Z',
        },
        'sensor.my_ecobee_humidity': {
          entity_id: 'sensor.my_ecobee_humidity',
          state: '49',
          attributes: {
            state_class: 'measurement',
            unit_of_measurement: '%',
            device_class: 'humidity',
            friendly_name: 'My ecobee Humidity',
          },
          context: {
            id: '018112282e13b53a8c032422e3d3468c',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-29T23:30:32.083Z',
          last_updated: '2022-05-29T23:30:32.083Z',
        },
        'sensor.bedroom_sensor_temperature': {
          entity_id: 'sensor.bedroom_sensor_temperature',
          state: '77.1',
          attributes: {
            state_class: 'measurement',
            unit_of_measurement: '°F',
            device_class: 'temperature',
            friendly_name: 'bedroom sensor Temperature',
          },
          context: {
            id: '018112306b873ea3140ec43a3459810b',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-29T23:39:32.104Z',
          last_updated: '2022-05-29T23:39:32.104Z',
        },
        'sensor.office_temperature': {
          entity_id: 'sensor.office_temperature',
          state: '78.9',
          attributes: {
            state_class: 'measurement',
            unit_of_measurement: '°F',
            device_class: 'temperature',
            friendly_name: 'Office Temperature',
          },
          context: {
            id: '0181122dac60d3aca29662fc5e96f751',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-29T23:36:32.096Z',
          last_updated: '2022-05-29T23:36:32.096Z',
        },
        'climate.ecobee': {
          entity_id: 'climate.ecobee',
          state: 'off',
          attributes: {
            hvac_modes: ['heat_cool', 'heat', 'cool', 'off'],
            min_temp: 44.6,
            max_temp: 95,
            target_temp_step: 0.5,
            fan_modes: ['auto', 'on'],
            preset_modes: ['Away', 'Home', 'Sleep'],
            current_temperature: 78.4,
            temperature: null,
            target_temp_high: null,
            target_temp_low: null,
            current_humidity: 49,
            fan_mode: 'auto',
            hvac_action: 'idle',
            preset_mode: 'temp',
            aux_heat: 'off',
            fan: 'off',
            climate_mode: 'Home',
            equipment_running: '',
            fan_min_on_time: 0,
            icon: 'thermo',
            friendly_name: 'Thermostat',
            supported_features: 91,
          },
          context: {
            id: '0181122da741502974b5e6fd71805ba4',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-29T22:39:30.718Z',
          last_updated: '2022-05-29T23:36:30.785Z',
        },
        'weather.my_ecobee': {
          entity_id: 'weather.my_ecobee',
          state: 'sunny',
          attributes: {
            temperature: 78,
            humidity: 51,
            pressure: 30.03,
            wind_bearing: 188,
            wind_speed: 4,
            visibility: 10,
            forecast: [
              {
                condition: 'sunny',
                temperature: 83,
                templow: 63,
                wind_bearing: 188,
                wind_speed: 4,
                datetime: '2022-05-29T23:41:32.243057+00:00',
              },
              {
                condition: 'sunny',
                temperature: 87,
                templow: 68,
                wind_bearing: 188,
                wind_speed: 4,
                datetime: '2022-05-30T23:41:32.243057+00:00',
              },
              {
                condition: 'sunny',
                temperature: 91,
                templow: 72,
                wind_bearing: 244,
                wind_speed: 4,
                datetime: '2022-05-31T23:41:32.243057+00:00',
              },
              {
                condition: 'partlycloudy',
                temperature: 90,
                templow: 77,
                wind_bearing: 265,
                wind_speed: 5,
                datetime: '2022-06-01T23:41:32.243057+00:00',
              },
              {
                condition: 'rainy',
                temperature: 81,
                templow: 73,
                wind_bearing: 329,
                wind_speed: 5,
                datetime: '2022-06-02T23:41:32.243057+00:00',
              },
            ],
            attribution:
              'Ecobee weather provided by FI:NDV at 2022-05-29 23:30:37 UTC',
            friendly_name: 'My ecobee',
          },
          context: {
            id: '0181123240d39b14c1e617a0171cf2d7',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-29T22:33:32.104Z',
          last_updated: '2022-05-29T23:41:32.243Z',
        },
        'binary_sensor.eero_wan_status': {
          entity_id: 'binary_sensor.eero_wan_status',
          state: 'on',
          attributes: {
            device_class: 'connectivity',
            friendly_name: 'eero wan status',
          },
          context: {
            id: '01810e72bda036722280ed7f2f5a4f57',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-29T06:13:29.632Z',
          last_updated: '2022-05-29T06:13:29.632Z',
        },
        'sensor.eero_external_ip': {
          entity_id: 'sensor.eero_external_ip',
          state: '108.28.69.66',
          attributes: {
            icon: 'mdi:server-network',
            friendly_name: 'eero External IP',
          },
          context: {
            id: '01810e72bda152aebacf6f908adca729',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-29T06:13:29.633Z',
          last_updated: '2022-05-29T06:13:29.633Z',
        },
        'sensor.eero_wan_status': {
          entity_id: 'sensor.eero_wan_status',
          state: 'Connected',
          attributes: {
            icon: 'mdi:server-network',
            friendly_name: 'eero wan status',
          },
          context: {
            id: '01810e72bda2afafa51730d29593fd8c',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-29T06:13:29.634Z',
          last_updated: '2022-05-29T06:13:29.634Z',
        },
        'light.desk_light': {
          entity_id: 'light.desk_light',
          state: 'on',
          attributes: {
            min_mireds: 111,
            max_mireds: 666,
            effect_list: ['effect_colorloop', 'effect_pulse', 'effect_stop'],
            supported_color_modes: ['color_temp', 'hs'],
            color_mode: 'color_temp',
            brightness: 119,
            color_temp: 364,
            hs_color: [28.295, 64.242],
            rgb_color: [255, 168, 91],
            xy_color: [0.521, 0.387],
            icon: 'mdi:led-strip-variant',
            friendly_name: 'Desk light',
            supported_features: 55,
          },
          context: {
            id: '0181121ef05311cbeb8a02236a820e07',
            parent_id: null,
            user_id: 'fefe8d8a7bec4ab9ad5ca86ac9734a4c',
          },
          last_changed: '2022-05-29T23:20:23.925Z',
          last_updated: '2022-05-29T23:20:26.914Z',
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
                available_version: '1.9.4',
              },
            ],
            unit_of_measurement: 'pending update(s)',
            icon: 'hacs:hacs',
            friendly_name: 'hacs',
          },
          context: {
            id: '018111e1b01594461bce5ef5d3140ae5',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-29T22:13:32.309Z',
          last_updated: '2022-05-29T22:13:32.309Z',
        },
        'button.alfred_life_span_side_brush_reset': {
          entity_id: 'button.alfred_life_span_side_brush_reset',
          state: 'unknown',
          attributes: {
            icon: 'mdi:broom',
            friendly_name: 'Alfred life span side brush reset',
          },
          context: {
            id: '01810e72c2439aafc87a3411faf56ad2',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-29T06:13:30.819Z',
          last_updated: '2022-05-29T06:13:30.819Z',
        },
        'button.alfred_life_span_brush_reset': {
          entity_id: 'button.alfred_life_span_brush_reset',
          state: 'unknown',
          attributes: {
            icon: 'mdi:broom',
            friendly_name: 'Alfred life span brush reset',
          },
          context: {
            id: '01810e72c2449e0eff897e203ca92051',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-29T06:13:30.820Z',
          last_updated: '2022-05-29T06:13:30.820Z',
        },
        'button.alfred_life_span_filter_reset': {
          entity_id: 'button.alfred_life_span_filter_reset',
          state: 'unknown',
          attributes: {
            icon: 'mdi:air-filter',
            friendly_name: 'Alfred life span filter reset',
          },
          context: {
            id: '01810e72c244c78c69058040774cbbb5',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-29T06:13:30.820Z',
          last_updated: '2022-05-29T06:13:30.820Z',
        },
        'button.alfred_relocate': {
          entity_id: 'button.alfred_relocate',
          state: 'unknown',
          attributes: {
            icon: 'mdi:map-marker-question',
            friendly_name: 'Alfred relocate',
          },
          context: {
            id: '01810e72c24458498ea94f37299687d8',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-29T06:13:30.820Z',
          last_updated: '2022-05-29T06:13:30.820Z',
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
            id: '01810e72c261d0bd8c4b150e0e57db67',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-29T06:13:30.849Z',
          last_updated: '2022-05-29T06:13:30.849Z',
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
            id: '01810e72c261ef03b893be6fa994da00',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-29T06:13:30.849Z',
          last_updated: '2022-05-29T06:13:30.849Z',
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
            id: '01810e72c26187b06e36d8676af87ca3',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-29T06:13:30.849Z',
          last_updated: '2022-05-29T06:13:30.849Z',
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
            id: '01810e72c261e03fbdff6ea2f55b5467',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-29T06:13:30.849Z',
          last_updated: '2022-05-29T06:13:30.849Z',
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
            id: '01810e72c2618c9f0576de4141d28857',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-29T06:13:30.849Z',
          last_updated: '2022-05-29T06:13:30.849Z',
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
            id: '01810e72c261792ca60eedc560a247a9',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-29T06:13:30.849Z',
          last_updated: '2022-05-29T06:13:30.849Z',
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
            id: '01810e72c261c024a4426e2d3a36dcbd',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-29T06:13:30.849Z',
          last_updated: '2022-05-29T06:13:30.849Z',
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
            id: '01810e72c26203e03a65408f60a4ef39',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-29T06:13:30.850Z',
          last_updated: '2022-05-29T06:13:30.850Z',
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
            id: '01810e72c262e9e1aeb087a1bdba8e92',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-29T06:13:30.850Z',
          last_updated: '2022-05-29T06:13:30.850Z',
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
            id: '01810e72c262eacb89e5071d4f97f495',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-29T06:13:30.850Z',
          last_updated: '2022-05-29T06:13:30.850Z',
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
            id: '01810e72c262e53b177d0b00b5f889b6',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-29T06:13:30.850Z',
          last_updated: '2022-05-29T06:13:30.850Z',
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
            id: '01810e72c2622969676d8f9a6cbd1803',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-29T06:13:30.850Z',
          last_updated: '2022-05-29T06:13:30.850Z',
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
            id: '01810e72c26295d19ac153b1d60446ad',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-29T06:13:30.850Z',
          last_updated: '2022-05-29T06:13:30.850Z',
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
            id: '01810e72c263ecf7962845398e62d807',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-29T06:13:30.851Z',
          last_updated: '2022-05-29T06:13:30.851Z',
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
            id: '01810e72dc7da7d5d7e2f0c3a38350ce',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-29T06:13:37.533Z',
          last_updated: '2022-05-29T06:13:37.533Z',
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
            id: '018111d801dcc2e5bcafb8c267025bc1',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-29T22:02:57.884Z',
          last_updated: '2022-05-29T22:02:57.884Z',
        },
        'sensor.mark_lycks_ipad_battery_level': {
          entity_id: 'sensor.mark_lycks_ipad_battery_level',
          state: '96',
          attributes: {
            unit_of_measurement: '%',
            device_class: 'battery',
            icon: 'mdi:battery-90',
            friendly_name: 'Mark Lyck’s iPad Battery Level',
          },
          context: {
            id: '018111e5057c7707264f299349c68830',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-29T22:17:10.780Z',
          last_updated: '2022-05-29T22:17:10.780Z',
        },
        'sensor.mark_lycks_ipad_battery_state': {
          entity_id: 'sensor.mark_lycks_ipad_battery_state',
          state: 'Not Charging',
          attributes: {
            'Low Power Mode': false,
            icon: 'mdi:battery-90',
            friendly_name: 'Mark Lyck’s iPad Battery State',
          },
          context: {
            id: '018111d6db509818d4d258372309b784',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-29T22:01:42.480Z',
          last_updated: '2022-05-29T22:01:42.480Z',
        },
        'sensor.mark_lycks_ipad_storage': {
          entity_id: 'sensor.mark_lycks_ipad_storage',
          state: '4.33',
          attributes: {
            Available: '10.52 GB',
            'Available (Important)': '13.28 GB',
            'Available (Opportunistic)': '11.08 GB',
            Total: '255.96 GB',
            unit_of_measurement: '% available',
            icon: 'mdi:database',
            friendly_name: 'Mark Lyck’s iPad Storage',
          },
          context: {
            id: '018111e5057de01f91131fa50eb6271f',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-29T22:17:10.781Z',
          last_updated: '2022-05-29T22:17:10.781Z',
        },
        'sensor.mark_lycks_ipad_ssid': {
          entity_id: 'sensor.mark_lycks_ipad_ssid',
          state: 'Lyck',
          attributes: {
            icon: 'mdi:wifi',
            friendly_name: 'Mark Lyck’s iPad SSID',
          },
          context: {
            id: '018111d7fbe1c8ebdeff620236b18ea8',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-29T22:02:56.353Z',
          last_updated: '2022-05-29T22:02:56.353Z',
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
            id: '018111d8026a57fbefbfc9346e4c0648',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-29T22:02:58.026Z',
          last_updated: '2022-05-29T22:02:58.026Z',
        },
        'sensor.mark_lycks_ipad_last_update_trigger': {
          entity_id: 'sensor.mark_lycks_ipad_last_update_trigger',
          state: 'Launch',
          attributes: {
            icon: 'mdi:cellphone-wireless',
            friendly_name: 'Mark Lyck’s iPad Last Update Trigger',
          },
          context: {
            id: '018111e5057ee9a5a3b8310517310b5d',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-29T22:17:10.782Z',
          last_updated: '2022-05-29T22:17:10.782Z',
        },
        'sensor.mark_lycks_ipad_bssid': {
          entity_id: 'sensor.mark_lycks_ipad_bssid',
          state: '6c:ae:f6:ca:75:88',
          attributes: {
            icon: 'mdi:wifi-star',
            friendly_name: 'Mark Lyck’s iPad BSSID',
          },
          context: {
            id: '018111d7fbe13a72a4b24ce60f39836a',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-29T22:02:56.353Z',
          last_updated: '2022-05-29T22:02:56.353Z',
        },
        'sensor.mark_lycks_ipad_connection_type': {
          entity_id: 'sensor.mark_lycks_ipad_connection_type',
          state: 'Wi-Fi',
          attributes: {
            icon: 'mdi:wifi',
            friendly_name: 'Mark Lyck’s iPad Connection Type',
          },
          context: {
            id: '018111d6db6a0bbad12d2e1cccea6ce1',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-29T22:01:42.506Z',
          last_updated: '2022-05-29T22:01:42.506Z',
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
            id: '018111e5057c170a88b722b2937254c4',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-29T22:17:10.780Z',
          last_updated: '2022-05-29T22:17:10.780Z',
        },
        'binary_sensor.mark_lycks_ipad_focus': {
          entity_id: 'binary_sensor.mark_lycks_ipad_focus',
          state: 'off',
          attributes: {
            icon: 'mdi:moon-waning-crescent',
            friendly_name: 'Mark Lyck’s iPad Focus',
          },
          context: {
            id: '018111d7fc26594a9e5fb30d0865fa0b',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-29T22:02:56.422Z',
          last_updated: '2022-05-29T22:02:56.422Z',
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
            id: '018112218e4224c5ea8a07bf8a9395f5',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-29T23:23:17.954Z',
          last_updated: '2022-05-29T23:23:17.954Z',
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
            id: '018112240140b856f4606822691a538f',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-29T23:25:58.464Z',
          last_updated: '2022-05-29T23:25:58.464Z',
        },
        'remote.kitchen': {
          entity_id: 'remote.kitchen',
          state: 'on',
          attributes: {
            friendly_name: 'Kitchen',
            supported_features: 0,
          },
          context: {
            id: '018112240138721e13245eead61cb61e',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-29T23:25:58.456Z',
          last_updated: '2022-05-29T23:25:58.456Z',
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
            id: '0181122511b1b7d7c75da1b2ea6fd99f',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-29T23:27:08.209Z',
          last_updated: '2022-05-29T23:27:08.209Z',
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
            id: '0181122511b49a29fe23cb3315082643',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-29T23:27:08.212Z',
          last_updated: '2022-05-29T23:27:08.212Z',
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
            id: '0181122511d0954dd0ae7a41b276fc29',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-29T23:27:08.240Z',
          last_updated: '2022-05-29T23:27:08.240Z',
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
            id: '0181122511d116d2953064784586b8d0',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-29T23:27:08.241Z',
          last_updated: '2022-05-29T23:27:08.241Z',
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
            id: '0181122511d17f88f926dd2750e2203c',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-29T23:27:08.241Z',
          last_updated: '2022-05-29T23:27:08.241Z',
        },
        'vacuum.alfred': {
          entity_id: 'vacuum.alfred',
          state: 'error',
          attributes: {
            fan_speed_list: ['quiet', 'normal', 'max', 'max+'],
            battery_level: 100,
            battery_icon: 'mdi:battery',
            fan_speed: 'max',
            rooms: {
              default: [1, 0, 2, 3],
            },
            last_error: 'WheelAbnormal: Driving Wheel malfunction (103)',
            friendly_name: 'Alfred',
            supported_features: 15228,
          },
          context: {
            id: '0181122fef5bd2cc690bf9abb9306b4e',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-29T23:39:00.315Z',
          last_updated: '2022-05-29T23:39:00.315Z',
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
          'sensor',
          'notify.mobile_app',
          'switch',
          'webhook',
          'binary_sensor.hassio',
          'number.deebot',
          'diagnostics',
          'auth',
          'my',
          'light.lifx',
          'switch.hue',
          'search',
          'camera',
          'network',
          'remote.apple_tv',
          'cloud',
          'homekit',
          'sensor.energy',
          'api',
          'stream',
          'media_source',
          'button',
          'persistent_notification',
          'image',
          'input_number',
          'tag',
          'sun',
          'history',
          'upnp',
          'vacuum',
          'zeroconf',
          'sensor.mobile_app',
          'deebot',
          'weather',
          'person',
          'map',
          'scene',
          'ecobee',
          'update.hassio',
          'analytics',
          'device_tracker.mobile_app',
          'hacs',
          'hassio',
          'weather.ecobee',
          'notify',
          'input_button',
          'panel_custom',
          'climate.ecobee',
          'mobile_app',
          'remote',
          'input_text',
          'scene.homeassistant',
          'websocket_api',
          'binary_sensor.hue',
          'sensor.hacs',
          'binary_sensor.upnp',
          'climate',
          'energy',
          'ssdp',
          'light',
          'switch.deebot',
          'spotify',
          'frontend',
          'ffmpeg',
          'http',
          'input_select',
          'counter',
          'homeassistant',
          'select.deebot',
          'trace',
          'tts.google_translate',
          'binary_sensor.ecobee',
          'dhcp',
          'media_player',
          'timer',
          'update',
          'select',
          'button.deebot',
          'sensor.upnp',
          'system_log',
          'logbook',
          'lovelace',
          'zone',
          'binary_sensor.rpi_power',
          'sensor.deebot',
          'lifx',
          'automation',
          'system_health',
          'config',
          'device_tracker',
          'device_automation',
          'binary_sensor.mobile_app',
          'humidifier.ecobee',
          'sensor.ecobee',
          'number',
          'apple_tv',
          'scene.hue',
          'vacuum.deebot',
          'usb',
          'recorder',
          'default_config',
          'binary_sensor',
          'sensor.hue',
          'sensor.hassio',
          'light.hue',
          'camera.deebot',
          'rpi_power',
          'media_player.apple_tv',
          'blueprint',
          'hue',
          'binary_sensor.deebot',
          'input_boolean',
          'input_datetime',
          'tts',
          'onboarding',
          'script',
          'humidifier',
        ],
        config_dir: '/config',
        whitelist_external_dirs: ['/config/www', '/media'],
        allowlist_external_dirs: ['/config/www', '/media'],
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
        zone: {
          reload: {
            name: 'Reload',
            description: 'Reload the YAML-based zone configuration.',
            fields: {},
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
        history: {
          component_name: 'history',
          icon: 'hass:chart-box',
          title: 'history',
          config: null,
          url_path: 'history',
          require_admin: false,
        },
        map: {
          component_name: 'map',
          icon: 'hass:tooltip-account',
          title: 'map',
          config: null,
          url_path: 'map',
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
        'react-panel-prod': {
          component_name: 'custom',
          icon: 'mdi:react',
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
        'media-browser': {
          component_name: 'media-browser',
          icon: 'hass:play-box-multiple',
          title: 'media_browser',
          config: null,
          url_path: 'media-browser',
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
          created_at: '2022-05-29T06:13:52.785182+00:00',
        },
      ],
    },
    suspendReconnectPromise: {},
    _entityRegistry: {
      state: [
        {
          area_id: null,
          config_entry_id: '81abb50cd05e637e78ce8ffc1bd8ece5',
          device_id: 'c40ec3846150441dbdf7fb844ac76b7c',
          disabled_by: null,
          entity_category: 'config',
          entity_id: 'update.home_assistant_supervisor_update',
          hidden_by: null,
          icon: null,
          name: null,
          platform: 'hassio',
        },
        {
          area_id: null,
          config_entry_id: '81abb50cd05e637e78ce8ffc1bd8ece5',
          device_id: 'e40c956932361dfb70dc90487e4a6c00',
          disabled_by: null,
          entity_category: 'config',
          entity_id: 'update.home_assistant_core_update',
          hidden_by: null,
          icon: null,
          name: null,
          platform: 'hassio',
        },
        {
          area_id: null,
          config_entry_id: '81abb50cd05e637e78ce8ffc1bd8ece5',
          device_id: '592ff961dd999b23b88cff5f1fc91a5a',
          disabled_by: null,
          entity_category: 'config',
          entity_id: 'update.home_assistant_operating_system_update',
          hidden_by: null,
          icon: null,
          name: null,
          platform: 'hassio',
        },
        {
          area_id: null,
          config_entry_id: '81abb50cd05e637e78ce8ffc1bd8ece5',
          device_id: '592ff961dd999b23b88cff5f1fc91a5a',
          disabled_by: 'integration',
          entity_category: null,
          entity_id:
            'binary_sensor.home_assistant_operating_system_update_available',
          hidden_by: null,
          icon: null,
          name: null,
          platform: 'hassio',
        },
        {
          area_id: null,
          config_entry_id: '81abb50cd05e637e78ce8ffc1bd8ece5',
          device_id: '592ff961dd999b23b88cff5f1fc91a5a',
          disabled_by: 'integration',
          entity_category: null,
          entity_id: 'sensor.home_assistant_operating_system_version',
          hidden_by: null,
          icon: null,
          name: null,
          platform: 'hassio',
        },
        {
          area_id: null,
          config_entry_id: '81abb50cd05e637e78ce8ffc1bd8ece5',
          device_id: '592ff961dd999b23b88cff5f1fc91a5a',
          disabled_by: 'integration',
          entity_category: null,
          entity_id: 'sensor.home_assistant_operating_system_newest_version',
          hidden_by: null,
          icon: null,
          name: null,
          platform: 'hassio',
        },
        {
          area_id: null,
          config_entry_id: null,
          device_id: null,
          disabled_by: null,
          entity_category: null,
          entity_id: 'person.mark_lyck',
          hidden_by: null,
          icon: null,
          name: null,
          platform: 'person',
        },
        {
          area_id: null,
          config_entry_id: 'cfc7545e66b53f7b590854dcf476c714',
          device_id: null,
          disabled_by: null,
          entity_category: null,
          entity_id: 'binary_sensor.rpi_power_status',
          hidden_by: null,
          icon: null,
          name: null,
          platform: 'rpi_power',
        },
        {
          area_id: null,
          config_entry_id: '6553b08a54e759183eb21e55246c87db',
          device_id: '91a0e116955932841b3e33452fb7c039',
          disabled_by: null,
          entity_category: null,
          entity_id: 'binary_sensor.eero_wan_status',
          hidden_by: null,
          icon: null,
          name: null,
          platform: 'upnp',
        },
        {
          area_id: null,
          config_entry_id: '6553b08a54e759183eb21e55246c87db',
          device_id: '91a0e116955932841b3e33452fb7c039',
          disabled_by: null,
          entity_category: null,
          entity_id: 'sensor.eero_external_ip',
          hidden_by: null,
          icon: null,
          name: null,
          platform: 'upnp',
        },
        {
          area_id: null,
          config_entry_id: '6553b08a54e759183eb21e55246c87db',
          device_id: '91a0e116955932841b3e33452fb7c039',
          disabled_by: 'integration',
          entity_category: null,
          entity_id: 'sensor.eero_uptime',
          hidden_by: null,
          icon: null,
          name: null,
          platform: 'upnp',
        },
        {
          area_id: null,
          config_entry_id: '6553b08a54e759183eb21e55246c87db',
          device_id: '91a0e116955932841b3e33452fb7c039',
          disabled_by: null,
          entity_category: null,
          entity_id: 'sensor.eero_wan_status',
          hidden_by: null,
          icon: null,
          name: null,
          platform: 'upnp',
        },
        {
          area_id: null,
          config_entry_id: '8b1efce286c43d58e546fbf1023e7b84',
          device_id: 'c35be712a606328aab890763dc2cdc63',
          disabled_by: null,
          entity_category: null,
          entity_id: 'media_player.living_room',
          hidden_by: null,
          icon: null,
          name: null,
          platform: 'apple_tv',
        },
        {
          area_id: null,
          config_entry_id: '8b1efce286c43d58e546fbf1023e7b84',
          device_id: 'c35be712a606328aab890763dc2cdc63',
          disabled_by: null,
          entity_category: null,
          entity_id: 'remote.living_room',
          hidden_by: null,
          icon: null,
          name: null,
          platform: 'apple_tv',
        },
        {
          area_id: null,
          config_entry_id: '81abb50cd05e637e78ce8ffc1bd8ece5',
          device_id: '40134c6f10c3d80bce0df7a865c288d0',
          disabled_by: 'integration',
          entity_category: null,
          entity_id: 'binary_sensor.terminal_ssh_update_available',
          hidden_by: null,
          icon: null,
          name: null,
          platform: 'hassio',
        },
        {
          area_id: null,
          config_entry_id: '81abb50cd05e637e78ce8ffc1bd8ece5',
          device_id: '40134c6f10c3d80bce0df7a865c288d0',
          disabled_by: 'integration',
          entity_category: null,
          entity_id: 'binary_sensor.terminal_ssh_running',
          hidden_by: null,
          icon: null,
          name: null,
          platform: 'hassio',
        },
        {
          area_id: null,
          config_entry_id: '81abb50cd05e637e78ce8ffc1bd8ece5',
          device_id: '40134c6f10c3d80bce0df7a865c288d0',
          disabled_by: 'integration',
          entity_category: null,
          entity_id: 'sensor.terminal_ssh_version',
          hidden_by: null,
          icon: null,
          name: null,
          platform: 'hassio',
        },
        {
          area_id: null,
          config_entry_id: '81abb50cd05e637e78ce8ffc1bd8ece5',
          device_id: '40134c6f10c3d80bce0df7a865c288d0',
          disabled_by: 'integration',
          entity_category: null,
          entity_id: 'sensor.terminal_ssh_newest_version',
          hidden_by: null,
          icon: null,
          name: null,
          platform: 'hassio',
        },
        {
          area_id: null,
          config_entry_id: '81abb50cd05e637e78ce8ffc1bd8ece5',
          device_id: '40134c6f10c3d80bce0df7a865c288d0',
          disabled_by: 'integration',
          entity_category: null,
          entity_id: 'sensor.terminal_ssh_cpu_percent',
          hidden_by: null,
          icon: null,
          name: null,
          platform: 'hassio',
        },
        {
          area_id: null,
          config_entry_id: '81abb50cd05e637e78ce8ffc1bd8ece5',
          device_id: '40134c6f10c3d80bce0df7a865c288d0',
          disabled_by: 'integration',
          entity_category: null,
          entity_id: 'sensor.terminal_ssh_memory_percent',
          hidden_by: null,
          icon: null,
          name: null,
          platform: 'hassio',
        },
        {
          area_id: null,
          config_entry_id: '81abb50cd05e637e78ce8ffc1bd8ece5',
          device_id: '40134c6f10c3d80bce0df7a865c288d0',
          disabled_by: null,
          entity_category: 'config',
          entity_id: 'update.terminal_ssh_update',
          hidden_by: null,
          icon: null,
          name: null,
          platform: 'hassio',
        },
        {
          area_id: null,
          config_entry_id: '88eb99e4abfc6756fa3768877c333031',
          device_id: 'b4947e60f088d0d142ef6ad17a87b024',
          disabled_by: null,
          entity_category: null,
          entity_id: 'sensor.hacs',
          hidden_by: null,
          icon: null,
          name: null,
          platform: 'hacs',
        },
        {
          area_id: null,
          config_entry_id: '81abb50cd05e637e78ce8ffc1bd8ece5',
          device_id: 'b33d8e6ffc27f96efa724a42718fb94f',
          disabled_by: 'integration',
          entity_category: null,
          entity_id: 'binary_sensor.file_editor_update_available',
          hidden_by: null,
          icon: null,
          name: null,
          platform: 'hassio',
        },
        {
          area_id: null,
          config_entry_id: '81abb50cd05e637e78ce8ffc1bd8ece5',
          device_id: 'b33d8e6ffc27f96efa724a42718fb94f',
          disabled_by: 'integration',
          entity_category: null,
          entity_id: 'binary_sensor.file_editor_running',
          hidden_by: null,
          icon: null,
          name: null,
          platform: 'hassio',
        },
        {
          area_id: null,
          config_entry_id: '81abb50cd05e637e78ce8ffc1bd8ece5',
          device_id: 'b33d8e6ffc27f96efa724a42718fb94f',
          disabled_by: 'integration',
          entity_category: null,
          entity_id: 'sensor.file_editor_version',
          hidden_by: null,
          icon: null,
          name: null,
          platform: 'hassio',
        },
        {
          area_id: null,
          config_entry_id: '81abb50cd05e637e78ce8ffc1bd8ece5',
          device_id: 'b33d8e6ffc27f96efa724a42718fb94f',
          disabled_by: 'integration',
          entity_category: null,
          entity_id: 'sensor.file_editor_newest_version',
          hidden_by: null,
          icon: null,
          name: null,
          platform: 'hassio',
        },
        {
          area_id: null,
          config_entry_id: '81abb50cd05e637e78ce8ffc1bd8ece5',
          device_id: 'b33d8e6ffc27f96efa724a42718fb94f',
          disabled_by: 'integration',
          entity_category: null,
          entity_id: 'sensor.file_editor_cpu_percent',
          hidden_by: null,
          icon: null,
          name: null,
          platform: 'hassio',
        },
        {
          area_id: null,
          config_entry_id: '81abb50cd05e637e78ce8ffc1bd8ece5',
          device_id: 'b33d8e6ffc27f96efa724a42718fb94f',
          disabled_by: 'integration',
          entity_category: null,
          entity_id: 'sensor.file_editor_memory_percent',
          hidden_by: null,
          icon: null,
          name: null,
          platform: 'hassio',
        },
        {
          area_id: null,
          config_entry_id: '81abb50cd05e637e78ce8ffc1bd8ece5',
          device_id: 'b33d8e6ffc27f96efa724a42718fb94f',
          disabled_by: null,
          entity_category: 'config',
          entity_id: 'update.file_editor_update',
          hidden_by: null,
          icon: null,
          name: null,
          platform: 'hassio',
        },
        {
          area_id: null,
          config_entry_id: null,
          device_id: null,
          disabled_by: null,
          entity_category: null,
          entity_id: 'person.grace_park',
          hidden_by: null,
          icon: null,
          name: null,
          platform: 'person',
        },
        {
          area_id: null,
          config_entry_id: '81abb50cd05e637e78ce8ffc1bd8ece5',
          device_id: '3415df19e2fa2a01decef3c563b4d252',
          disabled_by: 'integration',
          entity_category: null,
          entity_id: 'binary_sensor.samba_share_update_available',
          hidden_by: null,
          icon: null,
          name: null,
          platform: 'hassio',
        },
        {
          area_id: null,
          config_entry_id: '81abb50cd05e637e78ce8ffc1bd8ece5',
          device_id: '3415df19e2fa2a01decef3c563b4d252',
          disabled_by: 'integration',
          entity_category: null,
          entity_id: 'binary_sensor.samba_share_running',
          hidden_by: null,
          icon: null,
          name: null,
          platform: 'hassio',
        },
        {
          area_id: null,
          config_entry_id: '81abb50cd05e637e78ce8ffc1bd8ece5',
          device_id: '3415df19e2fa2a01decef3c563b4d252',
          disabled_by: 'integration',
          entity_category: null,
          entity_id: 'sensor.samba_share_version',
          hidden_by: null,
          icon: null,
          name: null,
          platform: 'hassio',
        },
        {
          area_id: null,
          config_entry_id: '81abb50cd05e637e78ce8ffc1bd8ece5',
          device_id: '3415df19e2fa2a01decef3c563b4d252',
          disabled_by: 'integration',
          entity_category: null,
          entity_id: 'sensor.samba_share_newest_version',
          hidden_by: null,
          icon: null,
          name: null,
          platform: 'hassio',
        },
        {
          area_id: null,
          config_entry_id: '81abb50cd05e637e78ce8ffc1bd8ece5',
          device_id: '3415df19e2fa2a01decef3c563b4d252',
          disabled_by: 'integration',
          entity_category: null,
          entity_id: 'sensor.samba_share_cpu_percent',
          hidden_by: null,
          icon: null,
          name: null,
          platform: 'hassio',
        },
        {
          area_id: null,
          config_entry_id: '81abb50cd05e637e78ce8ffc1bd8ece5',
          device_id: '3415df19e2fa2a01decef3c563b4d252',
          disabled_by: 'integration',
          entity_category: null,
          entity_id: 'sensor.samba_share_memory_percent',
          hidden_by: null,
          icon: null,
          name: null,
          platform: 'hassio',
        },
        {
          area_id: null,
          config_entry_id: '81abb50cd05e637e78ce8ffc1bd8ece5',
          device_id: '3415df19e2fa2a01decef3c563b4d252',
          disabled_by: null,
          entity_category: 'config',
          entity_id: 'update.samba_share_update',
          hidden_by: null,
          icon: null,
          name: null,
          platform: 'hassio',
        },
        {
          area_id: null,
          config_entry_id: null,
          device_id: null,
          disabled_by: null,
          entity_category: null,
          entity_id: 'sensor.disk_use_home',
          hidden_by: null,
          icon: null,
          name: null,
          platform: 'systemmonitor',
        },
        {
          area_id: null,
          config_entry_id: null,
          device_id: null,
          disabled_by: null,
          entity_category: null,
          entity_id: 'sensor.disk_free_home',
          hidden_by: null,
          icon: null,
          name: null,
          platform: 'systemmonitor',
        },
        {
          area_id: null,
          config_entry_id: null,
          device_id: null,
          disabled_by: null,
          entity_category: null,
          entity_id: 'sensor.disk_use_percent_home',
          hidden_by: null,
          icon: null,
          name: null,
          platform: 'systemmonitor',
        },
        {
          area_id: null,
          config_entry_id: null,
          device_id: null,
          disabled_by: null,
          entity_category: null,
          entity_id: 'sensor.memory_free',
          hidden_by: null,
          icon: null,
          name: null,
          platform: 'systemmonitor',
        },
        {
          area_id: null,
          config_entry_id: null,
          device_id: null,
          disabled_by: null,
          entity_category: null,
          entity_id: 'sensor.memory_use',
          hidden_by: null,
          icon: null,
          name: null,
          platform: 'systemmonitor',
        },
        {
          area_id: null,
          config_entry_id: null,
          device_id: null,
          disabled_by: null,
          entity_category: null,
          entity_id: 'sensor.memory_use_percent',
          hidden_by: null,
          icon: null,
          name: null,
          platform: 'systemmonitor',
        },
        {
          area_id: null,
          config_entry_id: null,
          device_id: null,
          disabled_by: null,
          entity_category: null,
          entity_id: 'sensor.network_in_eth0',
          hidden_by: null,
          icon: null,
          name: null,
          platform: 'systemmonitor',
        },
        {
          area_id: null,
          config_entry_id: null,
          device_id: null,
          disabled_by: null,
          entity_category: null,
          entity_id: 'sensor.network_out_eth0',
          hidden_by: null,
          icon: null,
          name: null,
          platform: 'systemmonitor',
        },
        {
          area_id: null,
          config_entry_id: null,
          device_id: null,
          disabled_by: null,
          entity_category: null,
          entity_id: 'sensor.network_throughput_in_eth0',
          hidden_by: null,
          icon: null,
          name: null,
          platform: 'systemmonitor',
        },
        {
          area_id: null,
          config_entry_id: null,
          device_id: null,
          disabled_by: null,
          entity_category: null,
          entity_id: 'sensor.network_throughput_out_eth0',
          hidden_by: null,
          icon: null,
          name: null,
          platform: 'systemmonitor',
        },
        {
          area_id: null,
          config_entry_id: null,
          device_id: null,
          disabled_by: null,
          entity_category: null,
          entity_id: 'sensor.ipv4_address_eth0',
          hidden_by: null,
          icon: null,
          name: null,
          platform: 'systemmonitor',
        },
        {
          area_id: null,
          config_entry_id: null,
          device_id: null,
          disabled_by: null,
          entity_category: null,
          entity_id: 'sensor.packets_in_eth0',
          hidden_by: null,
          icon: null,
          name: null,
          platform: 'systemmonitor',
        },
        {
          area_id: null,
          config_entry_id: null,
          device_id: null,
          disabled_by: null,
          entity_category: null,
          entity_id: 'sensor.packets_out_eth0',
          hidden_by: null,
          icon: null,
          name: null,
          platform: 'systemmonitor',
        },
        {
          area_id: null,
          config_entry_id: null,
          device_id: null,
          disabled_by: null,
          entity_category: null,
          entity_id: 'sensor.processor_use',
          hidden_by: null,
          icon: null,
          name: null,
          platform: 'systemmonitor',
        },
        {
          area_id: null,
          config_entry_id: 'a2bf4d40e0a6bd613cfb1671731a5e84',
          device_id: '6a9949cf8224ca02e51d2c05fc977615',
          disabled_by: null,
          entity_category: null,
          entity_id: 'binary_sensor.my_ecobee_occupancy',
          hidden_by: null,
          icon: null,
          name: null,
          platform: 'ecobee',
        },
        {
          area_id: null,
          config_entry_id: 'a2bf4d40e0a6bd613cfb1671731a5e84',
          device_id: '05f334441a2db910659050ecfac51f20',
          disabled_by: null,
          entity_category: null,
          entity_id: 'binary_sensor.bedroom_sensor_occupancy',
          hidden_by: null,
          icon: null,
          name: null,
          platform: 'ecobee',
        },
        {
          area_id: null,
          config_entry_id: 'a2bf4d40e0a6bd613cfb1671731a5e84',
          device_id: '3129383117ae11806e910b07a842cded',
          disabled_by: null,
          entity_category: null,
          entity_id: 'binary_sensor.office_occupancy',
          hidden_by: null,
          icon: null,
          name: null,
          platform: 'ecobee',
        },
        {
          area_id: null,
          config_entry_id: 'a2bf4d40e0a6bd613cfb1671731a5e84',
          device_id: '6a9949cf8224ca02e51d2c05fc977615',
          disabled_by: null,
          entity_category: null,
          entity_id: 'sensor.my_ecobee_temperature',
          hidden_by: null,
          icon: null,
          name: null,
          platform: 'ecobee',
        },
        {
          area_id: null,
          config_entry_id: 'a2bf4d40e0a6bd613cfb1671731a5e84',
          device_id: '6a9949cf8224ca02e51d2c05fc977615',
          disabled_by: null,
          entity_category: null,
          entity_id: 'sensor.my_ecobee_humidity',
          hidden_by: null,
          icon: null,
          name: null,
          platform: 'ecobee',
        },
        {
          area_id: null,
          config_entry_id: 'a2bf4d40e0a6bd613cfb1671731a5e84',
          device_id: '05f334441a2db910659050ecfac51f20',
          disabled_by: null,
          entity_category: null,
          entity_id: 'sensor.bedroom_sensor_temperature',
          hidden_by: null,
          icon: null,
          name: null,
          platform: 'ecobee',
        },
        {
          area_id: null,
          config_entry_id: 'a2bf4d40e0a6bd613cfb1671731a5e84',
          device_id: '3129383117ae11806e910b07a842cded',
          disabled_by: null,
          entity_category: null,
          entity_id: 'sensor.office_temperature',
          hidden_by: null,
          icon: null,
          name: null,
          platform: 'ecobee',
        },
        {
          area_id: null,
          config_entry_id: 'a2bf4d40e0a6bd613cfb1671731a5e84',
          device_id: '6a9949cf8224ca02e51d2c05fc977615',
          disabled_by: null,
          entity_category: null,
          entity_id: 'weather.my_ecobee',
          hidden_by: null,
          icon: null,
          name: null,
          platform: 'ecobee',
        },
        {
          area_id: null,
          config_entry_id: '74e09360447ef7f2fd59c5e0c958dbde',
          device_id: 'a912e0f6028857e99da19c8601bf9b5f',
          disabled_by: null,
          entity_category: null,
          entity_id: 'light.desk_light',
          hidden_by: null,
          icon: 'mdi:led-strip-variant',
          name: 'Desk light',
          platform: 'lifx',
        },
        {
          area_id: null,
          config_entry_id: '57af008c2a7c63c7c8fa6525c7ccaf12',
          device_id: 'ed77c3b94b720de3331d12b0c6ad6675',
          disabled_by: 'integration',
          entity_category: 'diagnostic',
          entity_id: 'binary_sensor.alfred_mop_attached',
          hidden_by: null,
          icon: null,
          name: null,
          platform: 'deebot',
        },
        {
          area_id: null,
          config_entry_id: '57af008c2a7c63c7c8fa6525c7ccaf12',
          device_id: 'ed77c3b94b720de3331d12b0c6ad6675',
          disabled_by: 'integration',
          entity_category: 'diagnostic',
          entity_id: 'sensor.alfred_life_span_side_brush',
          hidden_by: null,
          icon: null,
          name: null,
          platform: 'deebot',
        },
        {
          area_id: null,
          config_entry_id: '57af008c2a7c63c7c8fa6525c7ccaf12',
          device_id: 'ed77c3b94b720de3331d12b0c6ad6675',
          disabled_by: 'integration',
          entity_category: 'diagnostic',
          entity_id: 'sensor.alfred_life_span_brush',
          hidden_by: null,
          icon: null,
          name: null,
          platform: 'deebot',
        },
        {
          area_id: null,
          config_entry_id: '57af008c2a7c63c7c8fa6525c7ccaf12',
          device_id: 'ed77c3b94b720de3331d12b0c6ad6675',
          disabled_by: 'integration',
          entity_category: 'diagnostic',
          entity_id: 'sensor.alfred_life_span_filter',
          hidden_by: null,
          icon: null,
          name: null,
          platform: 'deebot',
        },
        {
          area_id: null,
          config_entry_id: '57af008c2a7c63c7c8fa6525c7ccaf12',
          device_id: 'ed77c3b94b720de3331d12b0c6ad6675',
          disabled_by: 'integration',
          entity_category: null,
          entity_id: 'sensor.alfred_last_cleaning',
          hidden_by: null,
          icon: null,
          name: null,
          platform: 'deebot',
        },
        {
          area_id: null,
          config_entry_id: '57af008c2a7c63c7c8fa6525c7ccaf12',
          device_id: 'ed77c3b94b720de3331d12b0c6ad6675',
          disabled_by: 'integration',
          entity_category: 'diagnostic',
          entity_id: 'sensor.alfred_last_error',
          hidden_by: null,
          icon: null,
          name: null,
          platform: 'deebot',
        },
        {
          area_id: null,
          config_entry_id: '57af008c2a7c63c7c8fa6525c7ccaf12',
          device_id: 'ed77c3b94b720de3331d12b0c6ad6675',
          disabled_by: 'integration',
          entity_category: null,
          entity_id: 'sensor.alfred_stats_area',
          hidden_by: null,
          icon: null,
          name: null,
          platform: 'deebot',
        },
        {
          area_id: null,
          config_entry_id: '57af008c2a7c63c7c8fa6525c7ccaf12',
          device_id: 'ed77c3b94b720de3331d12b0c6ad6675',
          disabled_by: 'integration',
          entity_category: null,
          entity_id: 'sensor.alfred_stats_time',
          hidden_by: null,
          icon: null,
          name: null,
          platform: 'deebot',
        },
        {
          area_id: null,
          config_entry_id: '57af008c2a7c63c7c8fa6525c7ccaf12',
          device_id: 'ed77c3b94b720de3331d12b0c6ad6675',
          disabled_by: 'integration',
          entity_category: null,
          entity_id: 'sensor.alfred_stats_type',
          hidden_by: null,
          icon: null,
          name: null,
          platform: 'deebot',
        },
        {
          area_id: null,
          config_entry_id: '57af008c2a7c63c7c8fa6525c7ccaf12',
          device_id: 'ed77c3b94b720de3331d12b0c6ad6675',
          disabled_by: 'integration',
          entity_category: null,
          entity_id: 'sensor.alfred_stats_total_area',
          hidden_by: null,
          icon: null,
          name: null,
          platform: 'deebot',
        },
        {
          area_id: null,
          config_entry_id: '57af008c2a7c63c7c8fa6525c7ccaf12',
          device_id: 'ed77c3b94b720de3331d12b0c6ad6675',
          disabled_by: 'integration',
          entity_category: null,
          entity_id: 'sensor.alfred_stats_total_time',
          hidden_by: null,
          icon: null,
          name: null,
          platform: 'deebot',
        },
        {
          area_id: null,
          config_entry_id: '57af008c2a7c63c7c8fa6525c7ccaf12',
          device_id: 'ed77c3b94b720de3331d12b0c6ad6675',
          disabled_by: 'integration',
          entity_category: null,
          entity_id: 'sensor.alfred_stats_total_cleanings',
          hidden_by: null,
          icon: null,
          name: null,
          platform: 'deebot',
        },
        {
          area_id: null,
          config_entry_id: '57af008c2a7c63c7c8fa6525c7ccaf12',
          device_id: 'ed77c3b94b720de3331d12b0c6ad6675',
          disabled_by: null,
          entity_category: 'config',
          entity_id: 'button.alfred_life_span_side_brush_reset',
          hidden_by: null,
          icon: null,
          name: null,
          platform: 'deebot',
        },
        {
          area_id: null,
          config_entry_id: '57af008c2a7c63c7c8fa6525c7ccaf12',
          device_id: 'ed77c3b94b720de3331d12b0c6ad6675',
          disabled_by: null,
          entity_category: 'config',
          entity_id: 'button.alfred_life_span_brush_reset',
          hidden_by: null,
          icon: null,
          name: null,
          platform: 'deebot',
        },
        {
          area_id: null,
          config_entry_id: '57af008c2a7c63c7c8fa6525c7ccaf12',
          device_id: 'ed77c3b94b720de3331d12b0c6ad6675',
          disabled_by: null,
          entity_category: 'config',
          entity_id: 'button.alfred_life_span_filter_reset',
          hidden_by: null,
          icon: null,
          name: null,
          platform: 'deebot',
        },
        {
          area_id: null,
          config_entry_id: '57af008c2a7c63c7c8fa6525c7ccaf12',
          device_id: 'ed77c3b94b720de3331d12b0c6ad6675',
          disabled_by: null,
          entity_category: 'diagnostic',
          entity_id: 'button.alfred_relocate',
          hidden_by: null,
          icon: null,
          name: null,
          platform: 'deebot',
        },
        {
          area_id: null,
          config_entry_id: '57af008c2a7c63c7c8fa6525c7ccaf12',
          device_id: 'ed77c3b94b720de3331d12b0c6ad6675',
          disabled_by: 'integration',
          entity_category: 'config',
          entity_id: 'number.alfred_volume',
          hidden_by: null,
          icon: null,
          name: null,
          platform: 'deebot',
        },
        {
          area_id: null,
          config_entry_id: '57af008c2a7c63c7c8fa6525c7ccaf12',
          device_id: 'ed77c3b94b720de3331d12b0c6ad6675',
          disabled_by: 'integration',
          entity_category: 'config',
          entity_id: 'switch.alfred_advanced_mode',
          hidden_by: null,
          icon: null,
          name: null,
          platform: 'deebot',
        },
        {
          area_id: null,
          config_entry_id: '57af008c2a7c63c7c8fa6525c7ccaf12',
          device_id: 'ed77c3b94b720de3331d12b0c6ad6675',
          disabled_by: 'integration',
          entity_category: 'config',
          entity_id: 'switch.alfred_continuous_cleaning',
          hidden_by: null,
          icon: null,
          name: null,
          platform: 'deebot',
        },
        {
          area_id: null,
          config_entry_id: '57af008c2a7c63c7c8fa6525c7ccaf12',
          device_id: 'ed77c3b94b720de3331d12b0c6ad6675',
          disabled_by: 'integration',
          entity_category: 'config',
          entity_id: 'switch.alfred_carpet_auto_fan_speed_boost',
          hidden_by: null,
          icon: null,
          name: null,
          platform: 'deebot',
        },
        {
          area_id: null,
          config_entry_id: '57af008c2a7c63c7c8fa6525c7ccaf12',
          device_id: 'ed77c3b94b720de3331d12b0c6ad6675',
          disabled_by: 'integration',
          entity_category: 'config',
          entity_id: 'select.alfred_water_amount',
          hidden_by: null,
          icon: null,
          name: null,
          platform: 'deebot',
        },
        {
          area_id: null,
          config_entry_id: '57af008c2a7c63c7c8fa6525c7ccaf12',
          device_id: 'ed77c3b94b720de3331d12b0c6ad6675',
          disabled_by: 'integration',
          entity_category: null,
          entity_id: 'camera.alfred_live_map',
          hidden_by: null,
          icon: null,
          name: null,
          platform: 'deebot',
        },
        {
          area_id: null,
          config_entry_id: '9724eecea67a45ed05e7c1eab505d321',
          device_id: 'f784f812426f9f0d9778f751540bea2d',
          disabled_by: null,
          entity_category: 'diagnostic',
          entity_id: 'device_tracker.iphone_mark',
          hidden_by: null,
          icon: null,
          name: 'iphone mark',
          platform: 'mobile_app',
        },
        {
          area_id: null,
          config_entry_id: '9724eecea67a45ed05e7c1eab505d321',
          device_id: 'f784f812426f9f0d9778f751540bea2d',
          disabled_by: null,
          entity_category: null,
          entity_id: 'sensor.iphone_mark_activity',
          hidden_by: null,
          icon: null,
          name: 'iphone mark Activity',
          platform: 'mobile_app',
        },
        {
          area_id: null,
          config_entry_id: '9724eecea67a45ed05e7c1eab505d321',
          device_id: 'f784f812426f9f0d9778f751540bea2d',
          disabled_by: null,
          entity_category: null,
          entity_id: 'sensor.iphone_mark_average_active_pace',
          hidden_by: null,
          icon: null,
          name: 'iphone mark Average Active Pace',
          platform: 'mobile_app',
        },
        {
          area_id: null,
          config_entry_id: '9724eecea67a45ed05e7c1eab505d321',
          device_id: 'f784f812426f9f0d9778f751540bea2d',
          disabled_by: null,
          entity_category: null,
          entity_id: 'sensor.iphone_mark_bssid',
          hidden_by: null,
          icon: null,
          name: 'iphone mark BSSID',
          platform: 'mobile_app',
        },
        {
          area_id: null,
          config_entry_id: '9724eecea67a45ed05e7c1eab505d321',
          device_id: 'f784f812426f9f0d9778f751540bea2d',
          disabled_by: null,
          entity_category: null,
          entity_id: 'sensor.iphone_mark_battery_level',
          hidden_by: null,
          icon: null,
          name: 'iphone mark Battery Level',
          platform: 'mobile_app',
        },
        {
          area_id: null,
          config_entry_id: '9724eecea67a45ed05e7c1eab505d321',
          device_id: 'f784f812426f9f0d9778f751540bea2d',
          disabled_by: null,
          entity_category: null,
          entity_id: 'sensor.iphone_mark_battery_state',
          hidden_by: null,
          icon: null,
          name: 'iphone mark Battery State',
          platform: 'mobile_app',
        },
        {
          area_id: null,
          config_entry_id: '9724eecea67a45ed05e7c1eab505d321',
          device_id: 'f784f812426f9f0d9778f751540bea2d',
          disabled_by: null,
          entity_category: null,
          entity_id: 'sensor.iphone_mark_connection_type',
          hidden_by: null,
          icon: null,
          name: 'iphone mark Connection Type',
          platform: 'mobile_app',
        },
        {
          area_id: null,
          config_entry_id: '9724eecea67a45ed05e7c1eab505d321',
          device_id: 'f784f812426f9f0d9778f751540bea2d',
          disabled_by: null,
          entity_category: null,
          entity_id: 'sensor.iphone_mark_distance',
          hidden_by: null,
          icon: null,
          name: 'iphone mark Distance',
          platform: 'mobile_app',
        },
        {
          area_id: null,
          config_entry_id: '9724eecea67a45ed05e7c1eab505d321',
          device_id: 'f784f812426f9f0d9778f751540bea2d',
          disabled_by: null,
          entity_category: null,
          entity_id: 'sensor.iphone_mark_floors_ascended',
          hidden_by: null,
          icon: null,
          name: 'iphone mark Floors Ascended',
          platform: 'mobile_app',
        },
        {
          area_id: null,
          config_entry_id: '9724eecea67a45ed05e7c1eab505d321',
          device_id: 'f784f812426f9f0d9778f751540bea2d',
          disabled_by: null,
          entity_category: null,
          entity_id: 'sensor.iphone_mark_floors_descended',
          hidden_by: null,
          icon: null,
          name: 'iphone mark Floors Descended',
          platform: 'mobile_app',
        },
        {
          area_id: null,
          config_entry_id: '9724eecea67a45ed05e7c1eab505d321',
          device_id: 'f784f812426f9f0d9778f751540bea2d',
          disabled_by: null,
          entity_category: null,
          entity_id: 'binary_sensor.iphone_mark_focus',
          hidden_by: null,
          icon: null,
          name: 'iphone mark Focus',
          platform: 'mobile_app',
        },
        {
          area_id: null,
          config_entry_id: '9724eecea67a45ed05e7c1eab505d321',
          device_id: 'f784f812426f9f0d9778f751540bea2d',
          disabled_by: null,
          entity_category: null,
          entity_id: 'sensor.iphone_mark_geocoded_location',
          hidden_by: null,
          icon: null,
          name: 'iphone mark Geocoded Location',
          platform: 'mobile_app',
        },
        {
          area_id: null,
          config_entry_id: '9724eecea67a45ed05e7c1eab505d321',
          device_id: 'f784f812426f9f0d9778f751540bea2d',
          disabled_by: null,
          entity_category: null,
          entity_id: 'sensor.iphone_mark_last_update_trigger',
          hidden_by: null,
          icon: null,
          name: 'iphone mark Last Update Trigger',
          platform: 'mobile_app',
        },
        {
          area_id: null,
          config_entry_id: '9724eecea67a45ed05e7c1eab505d321',
          device_id: 'f784f812426f9f0d9778f751540bea2d',
          disabled_by: null,
          entity_category: null,
          entity_id: 'sensor.iphone_mark_sim_1',
          hidden_by: null,
          icon: null,
          name: 'iphone mark SIM 1',
          platform: 'mobile_app',
        },
        {
          area_id: null,
          config_entry_id: '9724eecea67a45ed05e7c1eab505d321',
          device_id: 'f784f812426f9f0d9778f751540bea2d',
          disabled_by: null,
          entity_category: null,
          entity_id: 'sensor.iphone_mark_sim_2',
          hidden_by: null,
          icon: null,
          name: 'iphone mark SIM 2',
          platform: 'mobile_app',
        },
        {
          area_id: null,
          config_entry_id: '9724eecea67a45ed05e7c1eab505d321',
          device_id: 'f784f812426f9f0d9778f751540bea2d',
          disabled_by: null,
          entity_category: null,
          entity_id: 'sensor.iphone_mark_ssid',
          hidden_by: null,
          icon: null,
          name: 'iphone mark SSID',
          platform: 'mobile_app',
        },
        {
          area_id: null,
          config_entry_id: '9724eecea67a45ed05e7c1eab505d321',
          device_id: 'f784f812426f9f0d9778f751540bea2d',
          disabled_by: null,
          entity_category: null,
          entity_id: 'sensor.iphone_mark_steps',
          hidden_by: null,
          icon: null,
          name: 'iphone mark Steps',
          platform: 'mobile_app',
        },
        {
          area_id: null,
          config_entry_id: '9724eecea67a45ed05e7c1eab505d321',
          device_id: 'f784f812426f9f0d9778f751540bea2d',
          disabled_by: null,
          entity_category: null,
          entity_id: 'sensor.iphone_mark_storage',
          hidden_by: null,
          icon: null,
          name: 'iphone mark Storage',
          platform: 'mobile_app',
        },
        {
          area_id: null,
          config_entry_id: 'a2bf4d40e0a6bd613cfb1671731a5e84',
          device_id: '6a9949cf8224ca02e51d2c05fc977615',
          disabled_by: null,
          entity_category: null,
          entity_id: 'climate.ecobee',
          hidden_by: null,
          icon: 'thermo',
          name: 'Thermostat',
          platform: 'ecobee',
        },
        {
          area_id: null,
          config_entry_id: '001516fed90a7fb4319285d32c0ce1d4',
          device_id: 'a04b11e7286fc8796a00fe2dd3eab8c8',
          disabled_by: null,
          entity_category: 'diagnostic',
          entity_id: 'device_tracker.mark_lycks_ipad',
          hidden_by: null,
          icon: null,
          name: null,
          platform: 'mobile_app',
        },
        {
          area_id: null,
          config_entry_id: '001516fed90a7fb4319285d32c0ce1d4',
          device_id: 'a04b11e7286fc8796a00fe2dd3eab8c8',
          disabled_by: null,
          entity_category: null,
          entity_id: 'sensor.mark_lycks_ipad_battery_level',
          hidden_by: null,
          icon: null,
          name: null,
          platform: 'mobile_app',
        },
        {
          area_id: null,
          config_entry_id: '001516fed90a7fb4319285d32c0ce1d4',
          device_id: 'a04b11e7286fc8796a00fe2dd3eab8c8',
          disabled_by: null,
          entity_category: null,
          entity_id: 'sensor.mark_lycks_ipad_battery_state',
          hidden_by: null,
          icon: null,
          name: null,
          platform: 'mobile_app',
        },
        {
          area_id: null,
          config_entry_id: '001516fed90a7fb4319285d32c0ce1d4',
          device_id: 'a04b11e7286fc8796a00fe2dd3eab8c8',
          disabled_by: null,
          entity_category: null,
          entity_id: 'sensor.mark_lycks_ipad_storage',
          hidden_by: null,
          icon: null,
          name: null,
          platform: 'mobile_app',
        },
        {
          area_id: null,
          config_entry_id: '001516fed90a7fb4319285d32c0ce1d4',
          device_id: 'a04b11e7286fc8796a00fe2dd3eab8c8',
          disabled_by: null,
          entity_category: null,
          entity_id: 'sensor.mark_lycks_ipad_ssid',
          hidden_by: null,
          icon: null,
          name: null,
          platform: 'mobile_app',
        },
        {
          area_id: null,
          config_entry_id: '001516fed90a7fb4319285d32c0ce1d4',
          device_id: 'a04b11e7286fc8796a00fe2dd3eab8c8',
          disabled_by: null,
          entity_category: null,
          entity_id: 'sensor.mark_lycks_ipad_geocoded_location',
          hidden_by: null,
          icon: null,
          name: null,
          platform: 'mobile_app',
        },
        {
          area_id: null,
          config_entry_id: '001516fed90a7fb4319285d32c0ce1d4',
          device_id: 'a04b11e7286fc8796a00fe2dd3eab8c8',
          disabled_by: null,
          entity_category: null,
          entity_id: 'sensor.mark_lycks_ipad_last_update_trigger',
          hidden_by: null,
          icon: null,
          name: null,
          platform: 'mobile_app',
        },
        {
          area_id: null,
          config_entry_id: '001516fed90a7fb4319285d32c0ce1d4',
          device_id: 'a04b11e7286fc8796a00fe2dd3eab8c8',
          disabled_by: null,
          entity_category: null,
          entity_id: 'sensor.mark_lycks_ipad_bssid',
          hidden_by: null,
          icon: null,
          name: null,
          platform: 'mobile_app',
        },
        {
          area_id: null,
          config_entry_id: '001516fed90a7fb4319285d32c0ce1d4',
          device_id: 'a04b11e7286fc8796a00fe2dd3eab8c8',
          disabled_by: null,
          entity_category: null,
          entity_id: 'sensor.mark_lycks_ipad_connection_type',
          hidden_by: null,
          icon: null,
          name: null,
          platform: 'mobile_app',
        },
        {
          area_id: null,
          config_entry_id: '001516fed90a7fb4319285d32c0ce1d4',
          device_id: 'a04b11e7286fc8796a00fe2dd3eab8c8',
          disabled_by: null,
          entity_category: null,
          entity_id: 'sensor.mark_lycks_ipad_activity',
          hidden_by: null,
          icon: null,
          name: null,
          platform: 'mobile_app',
        },
        {
          area_id: null,
          config_entry_id: '001516fed90a7fb4319285d32c0ce1d4',
          device_id: 'a04b11e7286fc8796a00fe2dd3eab8c8',
          disabled_by: null,
          entity_category: null,
          entity_id: 'binary_sensor.mark_lycks_ipad_focus',
          hidden_by: null,
          icon: null,
          name: null,
          platform: 'mobile_app',
        },
        {
          area_id: null,
          config_entry_id: '74e09360447ef7f2fd59c5e0c958dbde',
          device_id: '3bcac0f4b4c8d97dc76518bce05b55b8',
          disabled_by: null,
          entity_category: null,
          entity_id: 'light.bedroom_lamp',
          hidden_by: null,
          icon: null,
          name: 'Bedroom lamp',
          platform: 'lifx',
        },
        {
          area_id: null,
          config_entry_id: 'fbfff6b1dff6394ab350a28596cc80f6',
          device_id: '348ff8fb1423b63e5675937fc3a50611',
          disabled_by: null,
          entity_category: null,
          entity_id: 'media_player.kitchen',
          hidden_by: null,
          icon: null,
          name: null,
          platform: 'apple_tv',
        },
        {
          area_id: null,
          config_entry_id: 'fbfff6b1dff6394ab350a28596cc80f6',
          device_id: '348ff8fb1423b63e5675937fc3a50611',
          disabled_by: null,
          entity_category: null,
          entity_id: 'remote.kitchen',
          hidden_by: null,
          icon: null,
          name: null,
          platform: 'apple_tv',
        },
        {
          area_id: null,
          config_entry_id: '5a6b2aa04f4ea4c6de35aaf3692cb56a',
          device_id: '41f485c85bd3b4e5b302870436cb07cf',
          disabled_by: null,
          entity_category: null,
          entity_id: 'light.lamp',
          hidden_by: null,
          icon: null,
          name: null,
          platform: 'hue',
        },
        {
          area_id: null,
          config_entry_id: '5a6b2aa04f4ea4c6de35aaf3692cb56a',
          device_id: '63fdb333f10dd684a95acb58334066ec',
          disabled_by: null,
          entity_category: null,
          entity_id: 'light.bedroom',
          hidden_by: null,
          icon: null,
          name: null,
          platform: 'hue',
        },
        {
          area_id: null,
          config_entry_id: '5a6b2aa04f4ea4c6de35aaf3692cb56a',
          device_id: '63fdb333f10dd684a95acb58334066ec',
          disabled_by: null,
          entity_category: null,
          entity_id: 'scene.bedroom_bright',
          hidden_by: null,
          icon: null,
          name: null,
          platform: 'hue',
        },
        {
          area_id: null,
          config_entry_id: '5a6b2aa04f4ea4c6de35aaf3692cb56a',
          device_id: '63fdb333f10dd684a95acb58334066ec',
          disabled_by: null,
          entity_category: null,
          entity_id: 'scene.bedroom_nightlight',
          hidden_by: null,
          icon: null,
          name: null,
          platform: 'hue',
        },
        {
          area_id: null,
          config_entry_id: '5a6b2aa04f4ea4c6de35aaf3692cb56a',
          device_id: '63fdb333f10dd684a95acb58334066ec',
          disabled_by: null,
          entity_category: null,
          entity_id: 'scene.bedroom_dimmed',
          hidden_by: null,
          icon: null,
          name: null,
          platform: 'hue',
        },
        {
          area_id: null,
          config_entry_id: '5a6b2aa04f4ea4c6de35aaf3692cb56a',
          device_id: '41f485c85bd3b4e5b302870436cb07cf',
          disabled_by: 'integration',
          entity_category: 'diagnostic',
          entity_id: 'sensor.lamp_zigbee_connectivity',
          hidden_by: null,
          icon: null,
          name: null,
          platform: 'hue',
        },
        {
          area_id: null,
          config_entry_id: '5a6b2aa04f4ea4c6de35aaf3692cb56a',
          device_id: 'a696028e6bc64c7a6771c62255e0c639',
          disabled_by: 'integration',
          entity_category: 'diagnostic',
          entity_id: 'sensor.philips_hue_zigbee_connectivity',
          hidden_by: null,
          icon: null,
          name: null,
          platform: 'hue',
        },
        {
          area_id: null,
          config_entry_id: '57af008c2a7c63c7c8fa6525c7ccaf12',
          device_id: 'ed77c3b94b720de3331d12b0c6ad6675',
          disabled_by: null,
          entity_category: null,
          entity_id: 'vacuum.alfred',
          hidden_by: null,
          icon: null,
          name: null,
          platform: 'deebot',
        },
      ],
    },
    _dr: {
      state: [
        {
          area_id: null,
          configuration_url: null,
          config_entries: ['81abb50cd05e637e78ce8ffc1bd8ece5'],
          connections: [],
          disabled_by: null,
          entry_type: 'service',
          id: 'e40c956932361dfb70dc90487e4a6c00',
          identifiers: [['hassio', 'core']],
          manufacturer: 'Home Assistant',
          model: 'Home Assistant Core',
          name_by_user: null,
          name: 'Home Assistant Core',
          sw_version: '2022.5.5',
          hw_version: null,
          via_device_id: null,
        },
        {
          area_id: null,
          configuration_url: null,
          config_entries: ['81abb50cd05e637e78ce8ffc1bd8ece5'],
          connections: [],
          disabled_by: null,
          entry_type: 'service',
          id: 'c40ec3846150441dbdf7fb844ac76b7c',
          identifiers: [['hassio', 'supervisor']],
          manufacturer: 'Home Assistant',
          model: 'Home Assistant Supervisor',
          name_by_user: null,
          name: 'Home Assistant Supervisor',
          sw_version: '2022.05.3',
          hw_version: null,
          via_device_id: null,
        },
        {
          area_id: null,
          configuration_url: null,
          config_entries: ['81abb50cd05e637e78ce8ffc1bd8ece5'],
          connections: [],
          disabled_by: null,
          entry_type: 'service',
          id: '592ff961dd999b23b88cff5f1fc91a5a',
          identifiers: [['hassio', 'OS']],
          manufacturer: 'Home Assistant',
          model: 'Home Assistant Operating System',
          name_by_user: null,
          name: 'Home Assistant Operating System',
          sw_version: '8.1',
          hw_version: null,
          via_device_id: null,
        },
        {
          area_id: 'living_room',
          configuration_url: null,
          config_entries: ['dc60dce4c9e33ad43c406d8f3b149ccd'],
          connections: [['mac', '7c:d8:8f:ad:04:fc']],
          disabled_by: null,
          entry_type: 'service',
          id: 'e35ef64e92a53e76d7108c33d8259495',
          identifiers: [
            ['homekit', 'dc60dce4c9e33ad43c406d8f3b149ccd', 'homekit.bridge'],
          ],
          manufacturer: 'Home Assistant',
          model: 'HomeKit Bridge',
          name_by_user: null,
          name: 'Home Assistant Bridge (HASS Bridge)',
          sw_version: null,
          hw_version: null,
          via_device_id: null,
        },
        {
          area_id: 'office',
          configuration_url: null,
          config_entries: ['74e09360447ef7f2fd59c5e0c958dbde'],
          connections: [['mac', 'd0:73:d5:42:13:7c']],
          disabled_by: null,
          entry_type: null,
          id: 'a912e0f6028857e99da19c8601bf9b5f',
          identifiers: [['lifx', 'd0:73:d5:42:13:7c']],
          manufacturer: 'LIFX',
          model: 'LIFX Z',
          name_by_user: null,
          name: 'Desk Light',
          sw_version: null,
          hw_version: null,
          via_device_id: null,
        },
        {
          area_id: null,
          configuration_url: null,
          config_entries: ['74e09360447ef7f2fd59c5e0c958dbde'],
          connections: [['mac', 'd0:73:d5:37:01:87']],
          disabled_by: null,
          entry_type: null,
          id: '3bcac0f4b4c8d97dc76518bce05b55b8',
          identifiers: [['lifx', 'd0:73:d5:37:01:87']],
          manufacturer: 'LIFX',
          model: 'LIFX Mini White',
          name_by_user: null,
          name: 'Bedroom Lamp',
          sw_version: null,
          hw_version: null,
          via_device_id: null,
        },
        {
          area_id: 'living_room',
          configuration_url: null,
          config_entries: ['6553b08a54e759183eb21e55246c87db'],
          connections: [
            ['mac', '6c:ae:f6:ca:75:92'],
            ['upnp', 'uuid:fcdb9233-a63f-41da-b42c-7cfeb99c8adf'],
          ],
          disabled_by: null,
          entry_type: null,
          id: '91a0e116955932841b3e33452fb7c039',
          identifiers: [
            [
              'upnp',
              'uuid:fcdb9233-a63f-41da-b42c-7cfeb99c8adf::urn:schemas-upnp-org:device:InternetGatewayDevice:1',
            ],
          ],
          manufacturer: 'eero inc.',
          model: '',
          name_by_user: null,
          name: 'eero',
          sw_version: null,
          hw_version: null,
          via_device_id: null,
        },
        {
          area_id: 'living_room',
          configuration_url: null,
          config_entries: ['8b1efce286c43d58e546fbf1023e7b84'],
          connections: [['mac', 'f0:b3:ec:7a:90:23']],
          disabled_by: null,
          entry_type: null,
          id: 'c35be712a606328aab890763dc2cdc63',
          identifiers: [['apple_tv', 'F0:B3:EC:7A:90:23']],
          manufacturer: 'Apple',
          model: 'Apple TV 4K (gen2)',
          name_by_user: null,
          name: 'Living Room',
          sw_version: '15.4.1',
          hw_version: null,
          via_device_id: null,
        },
        {
          area_id: null,
          configuration_url: 'homeassistant://hassio/addon/core_ssh',
          config_entries: ['81abb50cd05e637e78ce8ffc1bd8ece5'],
          connections: [],
          disabled_by: null,
          entry_type: 'service',
          id: '40134c6f10c3d80bce0df7a865c288d0',
          identifiers: [['hassio', 'core_ssh']],
          manufacturer: 'Official add-ons',
          model: 'Home Assistant Add-on',
          name_by_user: null,
          name: 'Terminal & SSH',
          sw_version: '9.4.0',
          hw_version: null,
          via_device_id: null,
        },
        {
          area_id: null,
          configuration_url: null,
          config_entries: ['9724eecea67a45ed05e7c1eab505d321'],
          connections: [],
          disabled_by: null,
          entry_type: null,
          id: 'f784f812426f9f0d9778f751540bea2d',
          identifiers: [['mobile_app', '3D6BAD1D-5826-4F54-89CC-776E81E88020']],
          manufacturer: 'Apple',
          model: 'iPhone13,3',
          name_by_user: 'iphone mark',
          name: 'Mark’s iPhone',
          sw_version: '15.4.1',
          hw_version: null,
          via_device_id: null,
        },
        {
          area_id: null,
          configuration_url: 'homeassistant://hacs',
          config_entries: ['88eb99e4abfc6756fa3768877c333031'],
          connections: [],
          disabled_by: null,
          entry_type: 'service',
          id: 'b4947e60f088d0d142ef6ad17a87b024',
          identifiers: [
            [
              'hacs',
              '0717a0cd-745c-48fd-9b16-c8534c9704f9-bc944b0f-fd42-4a58-a072-ade38d1444cd',
            ],
          ],
          manufacturer: 'hacs.xyz',
          model: '',
          name_by_user: null,
          name: 'HACS',
          sw_version: '1.25.2',
          hw_version: null,
          via_device_id: null,
        },
        {
          area_id: null,
          configuration_url: 'homeassistant://hassio/addon/core_configurator',
          config_entries: ['81abb50cd05e637e78ce8ffc1bd8ece5'],
          connections: [],
          disabled_by: null,
          entry_type: 'service',
          id: 'b33d8e6ffc27f96efa724a42718fb94f',
          identifiers: [['hassio', 'core_configurator']],
          manufacturer: 'Official add-ons',
          model: 'Home Assistant Add-on',
          name_by_user: null,
          name: 'File editor',
          sw_version: '5.3.3',
          hw_version: null,
          via_device_id: null,
        },
        {
          area_id: null,
          configuration_url: 'homeassistant://hassio/addon/core_samba',
          config_entries: ['81abb50cd05e637e78ce8ffc1bd8ece5'],
          connections: [],
          disabled_by: null,
          entry_type: 'service',
          id: '3415df19e2fa2a01decef3c563b4d252',
          identifiers: [['hassio', 'core_samba']],
          manufacturer: 'Official add-ons',
          model: 'Home Assistant Add-on',
          name_by_user: null,
          name: 'Samba share',
          sw_version: '9.6.1',
          hw_version: null,
          via_device_id: null,
        },
        {
          area_id: 'hallway',
          configuration_url: null,
          config_entries: ['a2bf4d40e0a6bd613cfb1671731a5e84'],
          connections: [],
          disabled_by: null,
          entry_type: null,
          id: '6a9949cf8224ca02e51d2c05fc977615',
          identifiers: [['ecobee', '521701489054']],
          manufacturer: 'ecobee',
          model: 'ecobee4 Smart Thermostat',
          name_by_user: null,
          name: 'My ecobee',
          sw_version: null,
          hw_version: null,
          via_device_id: null,
        },
        {
          area_id: 'bedroom',
          configuration_url: null,
          config_entries: ['a2bf4d40e0a6bd613cfb1671731a5e84'],
          connections: [],
          disabled_by: null,
          entry_type: null,
          id: '05f334441a2db910659050ecfac51f20',
          identifiers: [['ecobee', 'K6L3']],
          manufacturer: 'ecobee',
          model: 'ecobee Room Sensor',
          name_by_user: null,
          name: 'bedroom sensor',
          sw_version: null,
          hw_version: null,
          via_device_id: null,
        },
        {
          area_id: 'office',
          configuration_url: null,
          config_entries: ['a2bf4d40e0a6bd613cfb1671731a5e84'],
          connections: [],
          disabled_by: null,
          entry_type: null,
          id: '3129383117ae11806e910b07a842cded',
          identifiers: [['ecobee', 'G33X']],
          manufacturer: 'ecobee',
          model: 'ecobee Room Sensor',
          name_by_user: null,
          name: 'Office',
          sw_version: null,
          hw_version: null,
          via_device_id: null,
        },
        {
          area_id: 'living_room',
          configuration_url: null,
          config_entries: ['57af008c2a7c63c7c8fa6525c7ccaf12'],
          connections: [],
          disabled_by: null,
          entry_type: null,
          id: 'ed77c3b94b720de3331d12b0c6ad6675',
          identifiers: [['deebot', '438e0f91-5944-41ee-9b6f-f6e26a7d3003']],
          manufacturer: 'Ecovacs',
          model: 'DEEBOT OZMO T8+',
          name_by_user: null,
          name: 'Alfred',
          sw_version: null,
          hw_version: null,
          via_device_id: null,
        },
        {
          area_id: null,
          configuration_url: null,
          config_entries: ['001516fed90a7fb4319285d32c0ce1d4'],
          connections: [],
          disabled_by: null,
          entry_type: null,
          id: 'a04b11e7286fc8796a00fe2dd3eab8c8',
          identifiers: [['mobile_app', '84631B44-82DB-4B66-9550-6A3199C19494']],
          manufacturer: 'Apple',
          model: 'iPad8,1',
          name_by_user: null,
          name: 'Mark Lyck’s iPad',
          sw_version: '15.4',
          hw_version: null,
          via_device_id: null,
        },
        {
          area_id: 'kitchen',
          configuration_url: null,
          config_entries: ['fbfff6b1dff6394ab350a28596cc80f6'],
          connections: [['mac', 'e0:2b:96:a2:0d:40']],
          disabled_by: null,
          entry_type: null,
          id: '348ff8fb1423b63e5675937fc3a50611',
          identifiers: [['apple_tv', 'E0:2B:96:A2:0D:40']],
          manufacturer: 'Apple',
          model: 'HomePod Mini',
          name_by_user: null,
          name: 'Kitchen',
          sw_version: '15.5.1',
          hw_version: null,
          via_device_id: null,
        },
        {
          area_id: 'bedroom',
          configuration_url: null,
          config_entries: ['5a6b2aa04f4ea4c6de35aaf3692cb56a'],
          connections: [['mac', '00:17:88:01:09:53:7e:99']],
          disabled_by: null,
          entry_type: null,
          id: '41f485c85bd3b4e5b302870436cb07cf',
          identifiers: [['hue', 'ea3e88fd-1a1b-4be7-ad3e-ec983dae7414']],
          manufacturer: 'Signify Netherlands B.V.',
          model: 'Hue color Lamp (LCA003)',
          name_by_user: null,
          name: 'Lamp',
          sw_version: '1.93.7',
          hw_version: null,
          via_device_id: null,
        },
        {
          area_id: null,
          configuration_url: null,
          config_entries: ['5a6b2aa04f4ea4c6de35aaf3692cb56a'],
          connections: [
            ['mac', 'ec:b5:fa:34:85:db'],
            ['mac', '00:17:88:01:05:34:85:db'],
          ],
          disabled_by: null,
          entry_type: null,
          id: 'a696028e6bc64c7a6771c62255e0c639',
          identifiers: [
            ['hue', '25c6e6f5-ffd4-440b-97e1-83dcfb039d1b'],
            ['hue', 'ecb5fafffe3485db'],
          ],
          manufacturer: 'Signify Netherlands B.V.',
          model: 'BSB002',
          name_by_user: null,
          name: 'Philips hue',
          sw_version: '1.51.1951086030',
          hw_version: null,
          via_device_id: null,
        },
        {
          area_id: 'bedroom',
          configuration_url: null,
          config_entries: ['5a6b2aa04f4ea4c6de35aaf3692cb56a'],
          connections: [],
          disabled_by: null,
          entry_type: 'service',
          id: '63fdb333f10dd684a95acb58334066ec',
          identifiers: [['hue', '071d7480-181f-46fe-a771-293537b40195']],
          manufacturer: 'Signify Netherlands B.V.',
          model: 'Room',
          name_by_user: null,
          name: 'Bedroom',
          sw_version: null,
          hw_version: null,
          via_device_id: 'a696028e6bc64c7a6771c62255e0c639',
        },
      ],
    },
    _configFlowProgress: {
      state: [
        {
          flow_id: '38b0d99357b00f5b9d72930aa949bd82',
          handler: 'apple_tv',
          context: {
            source: 'zeroconf',
            address: '192.168.4.102',
            title_placeholders: {
              name: 'Projector',
              type: 'Apple TV 4K (gen2)',
            },
            all_identifiers: ['EC:A9:07:06:EE:09', 'ECA90706EE09'],
            unique_id: 'EC:A9:07:06:EE:09',
            identifier: 'EC:A9:07:06:EE:09',
          },
          step_id: 'confirm',
        },
      ],
    },
    _areaRegistry: {
      state: [
        {
          area_id: 'bedroom',
          name: 'Bedroom',
          picture: null,
        },
        {
          area_id: 'hallway',
          name: 'Hallway',
          picture: null,
        },
        {
          area_id: 'kitchen',
          name: 'Kitchen',
          picture: null,
        },
        {
          area_id: 'living_room',
          name: 'Living Room',
          picture: null,
        },
        {
          area_id: 'office',
          name: 'Office',
          picture: null,
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
        id: '018111d801dd14d84e1df38347f52ae5',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-29T22:02:57.885Z',
      last_updated: '2022-05-29T22:02:57.885Z',
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
        id: '01810e72c2900fe4d90328bfb106c3de',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-29T06:13:20.390Z',
      last_updated: '2022-05-29T06:13:30.896Z',
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
        id: '01810e72b6ceefa1b482e71bf7049705',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-29T06:13:27.886Z',
      last_updated: '2022-05-29T06:13:27.886Z',
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
        id: '01810e72b6cf12d6068b015a562ffb28',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-29T06:13:27.887Z',
      last_updated: '2022-05-29T06:13:27.887Z',
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
        id: '01810e72b6cf481e6bc63932aa666f40',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-29T06:13:27.887Z',
      last_updated: '2022-05-29T06:13:27.887Z',
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
        id: '01810e72b6d04db8a3fba2a3d74809ba',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-29T06:13:27.888Z',
      last_updated: '2022-05-29T06:13:27.888Z',
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
        id: '01810e72b6d05ee3d023a5384287fa6d',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-29T06:13:27.888Z',
      last_updated: '2022-05-29T06:13:27.888Z',
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
        id: '01810e72b6d1d15c2d66f4fdd46301da',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-29T06:13:27.889Z',
      last_updated: '2022-05-29T06:13:27.889Z',
    },
    'sun.sun': {
      entity_id: 'sun.sun',
      state: 'above_horizon',
      attributes: {
        next_dawn: '2022-05-30T09:12:03.478472+00:00',
        next_dusk: '2022-05-30T01:00:35.085666+00:00',
        next_midnight: '2022-05-30T05:06:30+00:00',
        next_noon: '2022-05-30T17:06:24+00:00',
        next_rising: '2022-05-30T09:44:14.106863+00:00',
        next_setting: '2022-05-30T00:28:24.126536+00:00',
        elevation: 7.09,
        azimuth: 292.38,
        rising: false,
        friendly_name: 'Sun',
      },
      context: {
        id: '01811232911a873dbf59a65b80c9b65b',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-29T09:46:42.454Z',
      last_updated: '2022-05-29T23:41:52.794Z',
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
        id: '018111d801e6250951c302c9b822898e',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-29T22:02:57.894Z',
      last_updated: '2022-05-29T22:02:57.894Z',
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
        id: '01810e72b86ba3d9f7fe317b8b2a1357',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-29T06:13:28.299Z',
      last_updated: '2022-05-29T06:13:28.299Z',
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
        app_id: '',
        friendly_name: 'Living Room',
        supported_features: 450487,
      },
      context: {
        id: '0181121d34be7dd74dd761dbe49a06d9',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-29T23:18:32.894Z',
      last_updated: '2022-05-29T23:18:32.894Z',
    },
    'remote.living_room': {
      entity_id: 'remote.living_room',
      state: 'on',
      attributes: {
        friendly_name: 'Living Room',
        supported_features: 0,
      },
      context: {
        id: '01810e72bea4d92be33c66216a65f0a7',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-29T06:13:29.892Z',
      last_updated: '2022-05-29T06:13:29.892Z',
    },
    'sensor.iphone_mark_activity': {
      entity_id: 'sensor.iphone_mark_activity',
      state: 'Cycling',
      attributes: {
        Confidence: 'High',
        Types: ['Cycling'],
        icon: 'mdi:bike',
        friendly_name: 'iphone mark Activity',
      },
      context: {
        id: '018111a43ac027604ad714bb6eb761a5',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-29T21:06:24.576Z',
      last_updated: '2022-05-29T21:06:24.576Z',
    },
    'sensor.iphone_mark_average_active_pace': {
      entity_id: 'sensor.iphone_mark_average_active_pace',
      state: '0',
      attributes: {
        unit_of_measurement: 'm/s',
        icon: 'mdi:speedometer',
        friendly_name: 'iphone mark Average Active Pace',
      },
      context: {
        id: '018111a43a8d44b036362461523adcb7',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-29T21:06:24.525Z',
      last_updated: '2022-05-29T21:06:24.525Z',
    },
    'sensor.iphone_mark_bssid': {
      entity_id: 'sensor.iphone_mark_bssid',
      state: '6c:ae:f6:ca:75:86',
      attributes: {
        icon: 'mdi:wifi-star',
        friendly_name: 'iphone mark BSSID',
      },
      context: {
        id: '018111a43ac2afb2e658e9b1103d53b5',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-29T21:06:24.578Z',
      last_updated: '2022-05-29T21:06:24.578Z',
    },
    'sensor.iphone_mark_battery_level': {
      entity_id: 'sensor.iphone_mark_battery_level',
      state: '73',
      attributes: {
        unit_of_measurement: '%',
        device_class: 'battery',
        icon: 'mdi:battery-70',
        friendly_name: 'iphone mark Battery Level',
      },
      context: {
        id: '018111a43a8d89bbb0a3e125b19b5bbb',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-29T21:06:24.525Z',
      last_updated: '2022-05-29T21:06:24.525Z',
    },
    'sensor.iphone_mark_battery_state': {
      entity_id: 'sensor.iphone_mark_battery_state',
      state: 'Not Charging',
      attributes: {
        'Low Power Mode': false,
        icon: 'mdi:battery-70',
        friendly_name: 'iphone mark Battery State',
      },
      context: {
        id: '018111a43a8dcfca8184dcb42039e0ef',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-29T06:13:29.388Z',
      last_updated: '2022-05-29T21:06:24.525Z',
    },
    'sensor.iphone_mark_connection_type': {
      entity_id: 'sensor.iphone_mark_connection_type',
      state: 'Wi-Fi',
      attributes: {
        icon: 'mdi:wifi',
        friendly_name: 'iphone mark Connection Type',
      },
      context: {
        id: '018111a43ac24a8f5d40ab96d88e8e51',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-29T21:06:24.578Z',
      last_updated: '2022-05-29T21:06:24.578Z',
    },
    'sensor.iphone_mark_distance': {
      entity_id: 'sensor.iphone_mark_distance',
      state: '4471',
      attributes: {
        unit_of_measurement: 'm',
        icon: 'mdi:hiking',
        friendly_name: 'iphone mark Distance',
      },
      context: {
        id: '018111a43ac084241feca16d01030950',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-29T21:06:24.576Z',
      last_updated: '2022-05-29T21:06:24.576Z',
    },
    'sensor.iphone_mark_floors_ascended': {
      entity_id: 'sensor.iphone_mark_floors_ascended',
      state: '2',
      attributes: {
        unit_of_measurement: 'floors',
        icon: 'mdi:stairs-up',
        friendly_name: 'iphone mark Floors Ascended',
      },
      context: {
        id: '018110fee1cdf403b4e7f2dbfdb1a7a4',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-29T18:05:48.365Z',
      last_updated: '2022-05-29T18:05:48.365Z',
    },
    'sensor.iphone_mark_floors_descended': {
      entity_id: 'sensor.iphone_mark_floors_descended',
      state: '2',
      attributes: {
        unit_of_measurement: 'floors',
        icon: 'mdi:stairs-down',
        friendly_name: 'iphone mark Floors Descended',
      },
      context: {
        id: '018110fee1ce5dfb54b82746896c7448',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-29T18:05:48.366Z',
      last_updated: '2022-05-29T18:05:48.366Z',
    },
    'sensor.iphone_mark_geocoded_location': {
      entity_id: 'sensor.iphone_mark_geocoded_location',
      state: '1515 Lincoln Cir\nMcLean VA 22102\nUnited States',
      attributes: {
        'Administrative Area': 'VA',
        'Areas Of Interest': 'N/A',
        Country: 'United States',
        'Inland Water': 'N/A',
        'ISO Country Code': 'US',
        Locality: 'McLean',
        Location: [38.929351806640625, -77.22998610582583],
        Name: '1515 Lincoln Cir',
        Ocean: 'N/A',
        'Postal Code': '22102',
        'Sub Administrative Area': 'Fairfax County',
        'Sub Locality': 'North Central',
        'Sub Thoroughfare': '1515',
        Thoroughfare: 'Lincoln Cir',
        'Time Zone': 'America/New_York',
        Zones: ['Home'],
        icon: 'mdi:map',
        friendly_name: 'iphone mark Geocoded Location',
      },
      context: {
        id: '018111a43a8f5f37d8840b1eb5d82cab',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-29T21:06:24.527Z',
      last_updated: '2022-05-29T21:06:24.527Z',
    },
    'sensor.iphone_mark_last_update_trigger': {
      entity_id: 'sensor.iphone_mark_last_update_trigger',
      state: 'Signaled',
      attributes: {
        icon: 'mdi:cellphone-wireless',
        friendly_name: 'iphone mark Last Update Trigger',
      },
      context: {
        id: '018111a43ac3004e2d5bc2ecfc3b69c1',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-29T21:06:24.579Z',
      last_updated: '2022-05-29T21:06:24.579Z',
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
        id: '01810e72bcb05409104f6db03cc9fc6e',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-29T06:13:29.392Z',
      last_updated: '2022-05-29T06:13:29.392Z',
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
        id: '01810e72bcb1ddcbf267cb731f208793',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-29T06:13:29.393Z',
      last_updated: '2022-05-29T06:13:29.393Z',
    },
    'sensor.iphone_mark_ssid': {
      entity_id: 'sensor.iphone_mark_ssid',
      state: 'Lyck',
      attributes: {
        icon: 'mdi:wifi',
        friendly_name: 'iphone mark SSID',
      },
      context: {
        id: '018111a43ac2524016e87a87521f2219',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-29T21:06:24.578Z',
      last_updated: '2022-05-29T21:06:24.578Z',
    },
    'sensor.iphone_mark_steps': {
      entity_id: 'sensor.iphone_mark_steps',
      state: '5781',
      attributes: {
        unit_of_measurement: 'steps',
        icon: 'mdi:walk',
        friendly_name: 'iphone mark Steps',
      },
      context: {
        id: '018111a43ac1e5e3e350ec3e4de35c2b',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-29T21:06:24.577Z',
      last_updated: '2022-05-29T21:06:24.577Z',
    },
    'sensor.iphone_mark_storage': {
      entity_id: 'sensor.iphone_mark_storage',
      state: '63.28',
      attributes: {
        Available: '62.07 GB',
        'Available (Important)': '166.24 GB',
        'Available (Opportunistic)': '161.93 GB',
        Total: '255.88 GB',
        unit_of_measurement: '% available',
        icon: 'mdi:database',
        friendly_name: 'iphone mark Storage',
      },
      context: {
        id: '018111a43a8e434652a7327af2867c3d',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-29T21:06:24.526Z',
      last_updated: '2022-05-29T21:06:24.526Z',
    },
    'binary_sensor.iphone_mark_focus': {
      entity_id: 'binary_sensor.iphone_mark_focus',
      state: 'off',
      attributes: {
        icon: 'mdi:moon-waning-crescent',
        friendly_name: 'iphone mark Focus',
      },
      context: {
        id: '01810f4225d070a9e6a31c602aee7ff0',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-29T10:00:02.256Z',
      last_updated: '2022-05-29T10:00:02.256Z',
    },
    'device_tracker.iphone_mark': {
      entity_id: 'device_tracker.iphone_mark',
      state: 'home',
      attributes: {
        source_type: 'gps',
        battery_level: 73,
        latitude: 38.929351806640625,
        longitude: -77.22998610582583,
        gps_accuracy: 77,
        altitude: 152.62384033203125,
        vertical_accuracy: 4.974974155426025,
        friendly_name: 'iphone mark',
      },
      context: {
        id: '018111a43a8b78fb83faaf6a5c8bc8fb',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-29T21:06:24.523Z',
      last_updated: '2022-05-29T21:06:24.523Z',
    },
    'binary_sensor.my_ecobee_occupancy': {
      entity_id: 'binary_sensor.my_ecobee_occupancy',
      state: 'on',
      attributes: {
        device_class: 'occupancy',
        friendly_name: 'My ecobee Occupancy',
      },
      context: {
        id: '018112223bbcd04fb152d07a4043c8a0',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-29T23:24:02.364Z',
      last_updated: '2022-05-29T23:24:02.364Z',
    },
    'binary_sensor.bedroom_sensor_occupancy': {
      entity_id: 'binary_sensor.bedroom_sensor_occupancy',
      state: 'on',
      attributes: {
        device_class: 'occupancy',
        friendly_name: 'bedroom sensor Occupancy',
      },
      context: {
        id: '018112256ee9aa41a834c24f61fd29a1',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-29T23:27:32.074Z',
      last_updated: '2022-05-29T23:27:32.074Z',
    },
    'binary_sensor.office_occupancy': {
      entity_id: 'binary_sensor.office_occupancy',
      state: 'on',
      attributes: {
        device_class: 'occupancy',
        friendly_name: 'Office Occupancy',
      },
      context: {
        id: '01811222afbfb6e184ef10426acff4f4',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-29T23:24:32.063Z',
      last_updated: '2022-05-29T23:24:32.063Z',
    },
    'sensor.my_ecobee_temperature': {
      entity_id: 'sensor.my_ecobee_temperature',
      state: '79.4',
      attributes: {
        state_class: 'measurement',
        unit_of_measurement: '°F',
        device_class: 'temperature',
        friendly_name: 'My ecobee Temperature',
      },
      context: {
        id: '0181122dac5e89c11f6bfb26f642070e',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-29T23:36:32.094Z',
      last_updated: '2022-05-29T23:36:32.094Z',
    },
    'sensor.my_ecobee_humidity': {
      entity_id: 'sensor.my_ecobee_humidity',
      state: '49',
      attributes: {
        state_class: 'measurement',
        unit_of_measurement: '%',
        device_class: 'humidity',
        friendly_name: 'My ecobee Humidity',
      },
      context: {
        id: '018112282e13b53a8c032422e3d3468c',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-29T23:30:32.083Z',
      last_updated: '2022-05-29T23:30:32.083Z',
    },
    'sensor.bedroom_sensor_temperature': {
      entity_id: 'sensor.bedroom_sensor_temperature',
      state: '77.1',
      attributes: {
        state_class: 'measurement',
        unit_of_measurement: '°F',
        device_class: 'temperature',
        friendly_name: 'bedroom sensor Temperature',
      },
      context: {
        id: '018112306b873ea3140ec43a3459810b',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-29T23:39:32.104Z',
      last_updated: '2022-05-29T23:39:32.104Z',
    },
    'sensor.office_temperature': {
      entity_id: 'sensor.office_temperature',
      state: '78.9',
      attributes: {
        state_class: 'measurement',
        unit_of_measurement: '°F',
        device_class: 'temperature',
        friendly_name: 'Office Temperature',
      },
      context: {
        id: '0181122dac60d3aca29662fc5e96f751',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-29T23:36:32.096Z',
      last_updated: '2022-05-29T23:36:32.096Z',
    },
    'climate.ecobee': {
      entity_id: 'climate.ecobee',
      state: 'off',
      attributes: {
        hvac_modes: ['heat_cool', 'heat', 'cool', 'off'],
        min_temp: 44.6,
        max_temp: 95,
        target_temp_step: 0.5,
        fan_modes: ['auto', 'on'],
        preset_modes: ['Away', 'Home', 'Sleep'],
        current_temperature: 78.4,
        temperature: null,
        target_temp_high: null,
        target_temp_low: null,
        current_humidity: 49,
        fan_mode: 'auto',
        hvac_action: 'idle',
        preset_mode: 'temp',
        aux_heat: 'off',
        fan: 'off',
        climate_mode: 'Home',
        equipment_running: '',
        fan_min_on_time: 0,
        icon: 'thermo',
        friendly_name: 'Thermostat',
        supported_features: 91,
      },
      context: {
        id: '0181122da741502974b5e6fd71805ba4',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-29T22:39:30.718Z',
      last_updated: '2022-05-29T23:36:30.785Z',
    },
    'weather.my_ecobee': {
      entity_id: 'weather.my_ecobee',
      state: 'sunny',
      attributes: {
        temperature: 78,
        humidity: 51,
        pressure: 30.03,
        wind_bearing: 188,
        wind_speed: 4,
        visibility: 10,
        forecast: [
          {
            condition: 'sunny',
            temperature: 83,
            templow: 63,
            wind_bearing: 188,
            wind_speed: 4,
            datetime: '2022-05-29T23:41:32.243057+00:00',
          },
          {
            condition: 'sunny',
            temperature: 87,
            templow: 68,
            wind_bearing: 188,
            wind_speed: 4,
            datetime: '2022-05-30T23:41:32.243057+00:00',
          },
          {
            condition: 'sunny',
            temperature: 91,
            templow: 72,
            wind_bearing: 244,
            wind_speed: 4,
            datetime: '2022-05-31T23:41:32.243057+00:00',
          },
          {
            condition: 'partlycloudy',
            temperature: 90,
            templow: 77,
            wind_bearing: 265,
            wind_speed: 5,
            datetime: '2022-06-01T23:41:32.243057+00:00',
          },
          {
            condition: 'rainy',
            temperature: 81,
            templow: 73,
            wind_bearing: 329,
            wind_speed: 5,
            datetime: '2022-06-02T23:41:32.243057+00:00',
          },
        ],
        attribution:
          'Ecobee weather provided by FI:NDV at 2022-05-29 23:30:37 UTC',
        friendly_name: 'My ecobee',
      },
      context: {
        id: '0181123240d39b14c1e617a0171cf2d7',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-29T22:33:32.104Z',
      last_updated: '2022-05-29T23:41:32.243Z',
    },
    'binary_sensor.eero_wan_status': {
      entity_id: 'binary_sensor.eero_wan_status',
      state: 'on',
      attributes: {
        device_class: 'connectivity',
        friendly_name: 'eero wan status',
      },
      context: {
        id: '01810e72bda036722280ed7f2f5a4f57',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-29T06:13:29.632Z',
      last_updated: '2022-05-29T06:13:29.632Z',
    },
    'sensor.eero_external_ip': {
      entity_id: 'sensor.eero_external_ip',
      state: '108.28.69.66',
      attributes: {
        icon: 'mdi:server-network',
        friendly_name: 'eero External IP',
      },
      context: {
        id: '01810e72bda152aebacf6f908adca729',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-29T06:13:29.633Z',
      last_updated: '2022-05-29T06:13:29.633Z',
    },
    'sensor.eero_wan_status': {
      entity_id: 'sensor.eero_wan_status',
      state: 'Connected',
      attributes: {
        icon: 'mdi:server-network',
        friendly_name: 'eero wan status',
      },
      context: {
        id: '01810e72bda2afafa51730d29593fd8c',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-29T06:13:29.634Z',
      last_updated: '2022-05-29T06:13:29.634Z',
    },
    'light.desk_light': {
      entity_id: 'light.desk_light',
      state: 'on',
      attributes: {
        min_mireds: 111,
        max_mireds: 666,
        effect_list: ['effect_colorloop', 'effect_pulse', 'effect_stop'],
        supported_color_modes: ['color_temp', 'hs'],
        color_mode: 'color_temp',
        brightness: 119,
        color_temp: 364,
        hs_color: [28.295, 64.242],
        rgb_color: [255, 168, 91],
        xy_color: [0.521, 0.387],
        icon: 'mdi:led-strip-variant',
        friendly_name: 'Desk light',
        supported_features: 55,
      },
      context: {
        id: '0181121ef05311cbeb8a02236a820e07',
        parent_id: null,
        user_id: 'fefe8d8a7bec4ab9ad5ca86ac9734a4c',
      },
      last_changed: '2022-05-29T23:20:23.925Z',
      last_updated: '2022-05-29T23:20:26.914Z',
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
            available_version: '1.9.4',
          },
        ],
        unit_of_measurement: 'pending update(s)',
        icon: 'hacs:hacs',
        friendly_name: 'hacs',
      },
      context: {
        id: '018111e1b01594461bce5ef5d3140ae5',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-29T22:13:32.309Z',
      last_updated: '2022-05-29T22:13:32.309Z',
    },
    'button.alfred_life_span_side_brush_reset': {
      entity_id: 'button.alfred_life_span_side_brush_reset',
      state: 'unknown',
      attributes: {
        icon: 'mdi:broom',
        friendly_name: 'Alfred life span side brush reset',
      },
      context: {
        id: '01810e72c2439aafc87a3411faf56ad2',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-29T06:13:30.819Z',
      last_updated: '2022-05-29T06:13:30.819Z',
    },
    'button.alfred_life_span_brush_reset': {
      entity_id: 'button.alfred_life_span_brush_reset',
      state: 'unknown',
      attributes: {
        icon: 'mdi:broom',
        friendly_name: 'Alfred life span brush reset',
      },
      context: {
        id: '01810e72c2449e0eff897e203ca92051',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-29T06:13:30.820Z',
      last_updated: '2022-05-29T06:13:30.820Z',
    },
    'button.alfred_life_span_filter_reset': {
      entity_id: 'button.alfred_life_span_filter_reset',
      state: 'unknown',
      attributes: {
        icon: 'mdi:air-filter',
        friendly_name: 'Alfred life span filter reset',
      },
      context: {
        id: '01810e72c244c78c69058040774cbbb5',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-29T06:13:30.820Z',
      last_updated: '2022-05-29T06:13:30.820Z',
    },
    'button.alfred_relocate': {
      entity_id: 'button.alfred_relocate',
      state: 'unknown',
      attributes: {
        icon: 'mdi:map-marker-question',
        friendly_name: 'Alfred relocate',
      },
      context: {
        id: '01810e72c24458498ea94f37299687d8',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-29T06:13:30.820Z',
      last_updated: '2022-05-29T06:13:30.820Z',
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
        id: '01810e72c261d0bd8c4b150e0e57db67',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-29T06:13:30.849Z',
      last_updated: '2022-05-29T06:13:30.849Z',
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
        id: '01810e72c261ef03b893be6fa994da00',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-29T06:13:30.849Z',
      last_updated: '2022-05-29T06:13:30.849Z',
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
        id: '01810e72c26187b06e36d8676af87ca3',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-29T06:13:30.849Z',
      last_updated: '2022-05-29T06:13:30.849Z',
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
        id: '01810e72c261e03fbdff6ea2f55b5467',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-29T06:13:30.849Z',
      last_updated: '2022-05-29T06:13:30.849Z',
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
        id: '01810e72c2618c9f0576de4141d28857',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-29T06:13:30.849Z',
      last_updated: '2022-05-29T06:13:30.849Z',
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
        id: '01810e72c261792ca60eedc560a247a9',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-29T06:13:30.849Z',
      last_updated: '2022-05-29T06:13:30.849Z',
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
        id: '01810e72c261c024a4426e2d3a36dcbd',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-29T06:13:30.849Z',
      last_updated: '2022-05-29T06:13:30.849Z',
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
        id: '01810e72c26203e03a65408f60a4ef39',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-29T06:13:30.850Z',
      last_updated: '2022-05-29T06:13:30.850Z',
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
        id: '01810e72c262e9e1aeb087a1bdba8e92',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-29T06:13:30.850Z',
      last_updated: '2022-05-29T06:13:30.850Z',
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
        id: '01810e72c262eacb89e5071d4f97f495',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-29T06:13:30.850Z',
      last_updated: '2022-05-29T06:13:30.850Z',
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
        id: '01810e72c262e53b177d0b00b5f889b6',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-29T06:13:30.850Z',
      last_updated: '2022-05-29T06:13:30.850Z',
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
        id: '01810e72c2622969676d8f9a6cbd1803',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-29T06:13:30.850Z',
      last_updated: '2022-05-29T06:13:30.850Z',
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
        id: '01810e72c26295d19ac153b1d60446ad',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-29T06:13:30.850Z',
      last_updated: '2022-05-29T06:13:30.850Z',
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
        id: '01810e72c263ecf7962845398e62d807',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-29T06:13:30.851Z',
      last_updated: '2022-05-29T06:13:30.851Z',
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
        id: '01810e72dc7da7d5d7e2f0c3a38350ce',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-29T06:13:37.533Z',
      last_updated: '2022-05-29T06:13:37.533Z',
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
        id: '018111d801dcc2e5bcafb8c267025bc1',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-29T22:02:57.884Z',
      last_updated: '2022-05-29T22:02:57.884Z',
    },
    'sensor.mark_lycks_ipad_battery_level': {
      entity_id: 'sensor.mark_lycks_ipad_battery_level',
      state: '96',
      attributes: {
        unit_of_measurement: '%',
        device_class: 'battery',
        icon: 'mdi:battery-90',
        friendly_name: 'Mark Lyck’s iPad Battery Level',
      },
      context: {
        id: '018111e5057c7707264f299349c68830',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-29T22:17:10.780Z',
      last_updated: '2022-05-29T22:17:10.780Z',
    },
    'sensor.mark_lycks_ipad_battery_state': {
      entity_id: 'sensor.mark_lycks_ipad_battery_state',
      state: 'Not Charging',
      attributes: {
        'Low Power Mode': false,
        icon: 'mdi:battery-90',
        friendly_name: 'Mark Lyck’s iPad Battery State',
      },
      context: {
        id: '018111d6db509818d4d258372309b784',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-29T22:01:42.480Z',
      last_updated: '2022-05-29T22:01:42.480Z',
    },
    'sensor.mark_lycks_ipad_storage': {
      entity_id: 'sensor.mark_lycks_ipad_storage',
      state: '4.33',
      attributes: {
        Available: '10.52 GB',
        'Available (Important)': '13.28 GB',
        'Available (Opportunistic)': '11.08 GB',
        Total: '255.96 GB',
        unit_of_measurement: '% available',
        icon: 'mdi:database',
        friendly_name: 'Mark Lyck’s iPad Storage',
      },
      context: {
        id: '018111e5057de01f91131fa50eb6271f',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-29T22:17:10.781Z',
      last_updated: '2022-05-29T22:17:10.781Z',
    },
    'sensor.mark_lycks_ipad_ssid': {
      entity_id: 'sensor.mark_lycks_ipad_ssid',
      state: 'Lyck',
      attributes: {
        icon: 'mdi:wifi',
        friendly_name: 'Mark Lyck’s iPad SSID',
      },
      context: {
        id: '018111d7fbe1c8ebdeff620236b18ea8',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-29T22:02:56.353Z',
      last_updated: '2022-05-29T22:02:56.353Z',
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
        id: '018111d8026a57fbefbfc9346e4c0648',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-29T22:02:58.026Z',
      last_updated: '2022-05-29T22:02:58.026Z',
    },
    'sensor.mark_lycks_ipad_last_update_trigger': {
      entity_id: 'sensor.mark_lycks_ipad_last_update_trigger',
      state: 'Launch',
      attributes: {
        icon: 'mdi:cellphone-wireless',
        friendly_name: 'Mark Lyck’s iPad Last Update Trigger',
      },
      context: {
        id: '018111e5057ee9a5a3b8310517310b5d',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-29T22:17:10.782Z',
      last_updated: '2022-05-29T22:17:10.782Z',
    },
    'sensor.mark_lycks_ipad_bssid': {
      entity_id: 'sensor.mark_lycks_ipad_bssid',
      state: '6c:ae:f6:ca:75:88',
      attributes: {
        icon: 'mdi:wifi-star',
        friendly_name: 'Mark Lyck’s iPad BSSID',
      },
      context: {
        id: '018111d7fbe13a72a4b24ce60f39836a',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-29T22:02:56.353Z',
      last_updated: '2022-05-29T22:02:56.353Z',
    },
    'sensor.mark_lycks_ipad_connection_type': {
      entity_id: 'sensor.mark_lycks_ipad_connection_type',
      state: 'Wi-Fi',
      attributes: {
        icon: 'mdi:wifi',
        friendly_name: 'Mark Lyck’s iPad Connection Type',
      },
      context: {
        id: '018111d6db6a0bbad12d2e1cccea6ce1',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-29T22:01:42.506Z',
      last_updated: '2022-05-29T22:01:42.506Z',
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
        id: '018111e5057c170a88b722b2937254c4',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-29T22:17:10.780Z',
      last_updated: '2022-05-29T22:17:10.780Z',
    },
    'binary_sensor.mark_lycks_ipad_focus': {
      entity_id: 'binary_sensor.mark_lycks_ipad_focus',
      state: 'off',
      attributes: {
        icon: 'mdi:moon-waning-crescent',
        friendly_name: 'Mark Lyck’s iPad Focus',
      },
      context: {
        id: '018111d7fc26594a9e5fb30d0865fa0b',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-29T22:02:56.422Z',
      last_updated: '2022-05-29T22:02:56.422Z',
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
        id: '018112218e4224c5ea8a07bf8a9395f5',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-29T23:23:17.954Z',
      last_updated: '2022-05-29T23:23:17.954Z',
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
        id: '018112240140b856f4606822691a538f',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-29T23:25:58.464Z',
      last_updated: '2022-05-29T23:25:58.464Z',
    },
    'remote.kitchen': {
      entity_id: 'remote.kitchen',
      state: 'on',
      attributes: {
        friendly_name: 'Kitchen',
        supported_features: 0,
      },
      context: {
        id: '018112240138721e13245eead61cb61e',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-29T23:25:58.456Z',
      last_updated: '2022-05-29T23:25:58.456Z',
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
        id: '0181122511b1b7d7c75da1b2ea6fd99f',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-29T23:27:08.209Z',
      last_updated: '2022-05-29T23:27:08.209Z',
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
        id: '0181122511b49a29fe23cb3315082643',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-29T23:27:08.212Z',
      last_updated: '2022-05-29T23:27:08.212Z',
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
        id: '0181122511d0954dd0ae7a41b276fc29',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-29T23:27:08.240Z',
      last_updated: '2022-05-29T23:27:08.240Z',
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
        id: '0181122511d116d2953064784586b8d0',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-29T23:27:08.241Z',
      last_updated: '2022-05-29T23:27:08.241Z',
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
        id: '0181122511d17f88f926dd2750e2203c',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-29T23:27:08.241Z',
      last_updated: '2022-05-29T23:27:08.241Z',
    },
    'vacuum.alfred': {
      entity_id: 'vacuum.alfred',
      state: 'error',
      attributes: {
        fan_speed_list: ['quiet', 'normal', 'max', 'max+'],
        battery_level: 100,
        battery_icon: 'mdi:battery',
        fan_speed: 'max',
        rooms: {
          default: [1, 0, 2, 3],
        },
        last_error: 'WheelAbnormal: Driving Wheel malfunction (103)',
        friendly_name: 'Alfred',
        supported_features: 15228,
      },
      context: {
        id: '0181122fef5bd2cc690bf9abb9306b4e',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-29T23:39:00.315Z',
      last_updated: '2022-05-29T23:39:00.315Z',
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
      'sensor',
      'notify.mobile_app',
      'switch',
      'webhook',
      'binary_sensor.hassio',
      'number.deebot',
      'diagnostics',
      'auth',
      'my',
      'light.lifx',
      'switch.hue',
      'search',
      'camera',
      'network',
      'remote.apple_tv',
      'cloud',
      'homekit',
      'sensor.energy',
      'api',
      'stream',
      'media_source',
      'button',
      'persistent_notification',
      'image',
      'input_number',
      'tag',
      'sun',
      'history',
      'upnp',
      'vacuum',
      'zeroconf',
      'sensor.mobile_app',
      'deebot',
      'weather',
      'person',
      'map',
      'scene',
      'ecobee',
      'update.hassio',
      'analytics',
      'device_tracker.mobile_app',
      'hacs',
      'hassio',
      'weather.ecobee',
      'notify',
      'input_button',
      'panel_custom',
      'climate.ecobee',
      'mobile_app',
      'remote',
      'input_text',
      'scene.homeassistant',
      'websocket_api',
      'binary_sensor.hue',
      'sensor.hacs',
      'binary_sensor.upnp',
      'climate',
      'energy',
      'ssdp',
      'light',
      'switch.deebot',
      'spotify',
      'frontend',
      'ffmpeg',
      'http',
      'input_select',
      'counter',
      'homeassistant',
      'select.deebot',
      'trace',
      'tts.google_translate',
      'binary_sensor.ecobee',
      'dhcp',
      'media_player',
      'timer',
      'update',
      'select',
      'button.deebot',
      'sensor.upnp',
      'system_log',
      'logbook',
      'lovelace',
      'zone',
      'binary_sensor.rpi_power',
      'sensor.deebot',
      'lifx',
      'automation',
      'system_health',
      'config',
      'device_tracker',
      'device_automation',
      'binary_sensor.mobile_app',
      'humidifier.ecobee',
      'sensor.ecobee',
      'number',
      'apple_tv',
      'scene.hue',
      'vacuum.deebot',
      'usb',
      'recorder',
      'default_config',
      'binary_sensor',
      'sensor.hue',
      'sensor.hassio',
      'light.hue',
      'camera.deebot',
      'rpi_power',
      'media_player.apple_tv',
      'blueprint',
      'hue',
      'binary_sensor.deebot',
      'input_boolean',
      'input_datetime',
      'tts',
      'onboarding',
      'script',
      'humidifier',
    ],
    config_dir: '/config',
    whitelist_external_dirs: ['/config/www', '/media'],
    allowlist_external_dirs: ['/config/www', '/media'],
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
    history: {
      component_name: 'history',
      icon: 'hass:chart-box',
      title: 'history',
      config: null,
      url_path: 'history',
      require_admin: false,
    },
    map: {
      component_name: 'map',
      icon: 'hass:tooltip-account',
      title: 'map',
      config: null,
      url_path: 'map',
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
    'react-panel-prod': {
      component_name: 'custom',
      icon: 'mdi:react',
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
    'media-browser': {
      component_name: 'media-browser',
      icon: 'hass:play-box-multiple',
      title: 'media_browser',
      config: null,
      url_path: 'media-browser',
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
    zone: {
      reload: {
        name: 'Reload',
        description: 'Reload the YAML-based zone configuration.',
        fields: {},
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
      'ui.panel.custom.external_panel.question_trust':
        'Do you trust the external panel {name} at {link}?',
      'ui.panel.custom.external_panel.complete_access':
        'It will have access to all data in Home Assistant.',
      'ui.panel.custom.external_panel.hide_message':
        'Check docs for the panel_custom component to hide this message',
      'component.climate.state._.auto': 'Auto',
      'component.climate.state._.cool': 'Cool',
      'component.climate.state._.dry': 'Dry',
      'component.climate.state._.fan_only': 'Fan only',
      'component.climate.state._.heat': 'Heat',
      'component.climate.state._.heat_cool': 'Heat/Cool',
      'component.climate.state._.off': 'Off',
      'component.humidifier.state._.off': 'Off',
      'component.humidifier.state._.on': 'On',
      'component.script.state._.off': 'Off',
      'component.script.state._.on': 'On',
      'component.input_boolean.state._.off': 'Off',
      'component.input_boolean.state._.on': 'On',
      'component.remote.state._.off': 'Off',
      'component.remote.state._.on': 'On',
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
      'component.person.state._.home': 'Home',
      'component.person.state._.not_home': 'Away',
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
      'component.vacuum.state._.cleaning': 'Cleaning',
      'component.vacuum.state._.docked': 'Docked',
      'component.vacuum.state._.error': 'Error',
      'component.vacuum.state._.idle': 'Idle',
      'component.vacuum.state._.off': 'Off',
      'component.vacuum.state._.on': 'On',
      'component.vacuum.state._.paused': 'Paused',
      'component.vacuum.state._.returning': 'Returning to dock',
      'component.device_tracker.state._.home': 'Home',
      'component.device_tracker.state._.not_home': 'Away',
      'component.sun.state._.above_horizon': 'Above horizon',
      'component.sun.state._.below_horizon': 'Below horizon',
      'component.automation.state._.off': 'Off',
      'component.automation.state._.on': 'On',
      'component.timer.state._.active': 'Active',
      'component.timer.state._.idle': 'Idle',
      'component.timer.state._.paused': 'Paused',
      'component.media_player.state._.buffering': 'Buffering',
      'component.media_player.state._.idle': 'Idle',
      'component.media_player.state._.off': 'Off',
      'component.media_player.state._.on': 'On',
      'component.media_player.state._.paused': 'Paused',
      'component.media_player.state._.playing': 'Playing',
      'component.media_player.state._.standby': 'Standby',
      'component.camera.state._.idle': 'Idle',
      'component.camera.state._.recording': 'Recording',
      'component.camera.state._.streaming': 'Streaming',
      'component.switch.state._.off': 'Off',
      'component.switch.state._.on': 'On',
      'component.light.state._.off': 'Off',
      'component.light.state._.on': 'On',
      'component.sensor.state._.off': 'Off',
      'component.sensor.state._.on': 'On',
      'ui.panel.config.header': 'Configure Home Assistant',
      'ui.panel.config.dashboard.devices.main': 'Devices & Services',
      'ui.panel.config.dashboard.devices.secondary':
        'Integrations, devices, entities and helpers',
      'ui.panel.config.dashboard.automations.main': 'Automations & Scenes',
      'ui.panel.config.dashboard.automations.secondary':
        'Automations, scenes, scripts and blueprints',
      'ui.panel.config.dashboard.backup.main': 'Backup',
      'ui.panel.config.dashboard.backup.secondary':
        'Generate backups of your Home Assistant configuration',
      'ui.panel.config.dashboard.supervisor.main': 'Add-ons',
      'ui.panel.config.dashboard.supervisor.secondary':
        'Run extra applications next to Home Assistant',
      'ui.panel.config.dashboard.dashboards.main': 'Dashboards',
      'ui.panel.config.dashboard.dashboards.secondary':
        'Organize how you interact with your home',
      'ui.panel.config.dashboard.energy.main': 'Energy',
      'ui.panel.config.dashboard.energy.secondary':
        'Monitor your energy production and consumption',
      'ui.panel.config.dashboard.tags.main': 'Tags',
      'ui.panel.config.dashboard.tags.secondary': 'Setup NFC tags and QR codes',
      'ui.panel.config.dashboard.people.main': 'People',
      'ui.panel.config.dashboard.people.secondary':
        'Manage who can access your home',
      'ui.panel.config.dashboard.areas.main': 'Areas & Zones',
      'ui.panel.config.dashboard.areas.secondary':
        'Manage locations in and around your house',
      'ui.panel.config.dashboard.companion.main': 'Companion App',
      'ui.panel.config.dashboard.companion.secondary':
        'Location and notifications',
      'ui.panel.config.dashboard.system.main': 'System',
      'ui.panel.config.dashboard.system.secondary':
        'Create backups, check logs or reboot your system',
      'ui.panel.config.dashboard.about.main': 'About',
      'ui.panel.config.dashboard.about.secondary':
        'Version information, credits and more',
      'ui.panel.config.common.editor.confirm_unsaved':
        'You have unsaved changes. Are you sure you want to leave?',
      'ui.panel.config.common.learn_more': 'Learn more',
      'ui.panel.config.updates.caption': 'Updates',
      'ui.panel.config.updates.description':
        'Manage updates of Home Assistant, add-ons and devices',
      'ui.panel.config.updates.no_updates': 'No updates available',
      'ui.panel.config.updates.no_update_entities.title':
        'Unable to check for updates',
      'ui.panel.config.updates.no_update_entities.description':
        'You do not have any integrations that provide updates.',
      'ui.panel.config.updates.check_updates': 'Check for updates',
      'ui.panel.config.updates.no_new_updates': 'No new updates found',
      'ui.panel.config.updates.updates_refreshed':
        '{count} {count, plural,\n  one {update}\n  other {updates}\n} refreshed',
      'ui.panel.config.updates.title':
        '{count} {count, plural,\n  one {update}\n  other {updates}\n}',
      'ui.panel.config.updates.unable_to_fetch': 'Unable to load updates',
      'ui.panel.config.updates.version_available':
        'Version {version_available} is available',
      'ui.panel.config.updates.more_updates': '+{count} updates',
      'ui.panel.config.updates.show': 'show',
      'ui.panel.config.updates.show_skipped': 'Show skipped',
      'ui.panel.config.updates.hide_skipped': 'Hide skipped',
      'ui.panel.config.updates.join_beta': 'Join beta channel',
      'ui.panel.config.updates.leave_beta': 'Leave beta channel',
      'ui.panel.config.updates.skipped': 'Skipped',
      'ui.panel.config.areas.caption': 'Areas',
      'ui.panel.config.areas.description':
        'Group devices and entities into areas',
      'ui.panel.config.areas.edit_settings': 'Area settings',
      'ui.panel.config.areas.add_picture': 'Add a picture',
      'ui.panel.config.areas.assigned_to_area': 'Assigned to this area',
      'ui.panel.config.areas.targeting_area': 'Targeting this area',
      'ui.panel.config.areas.data_table.area': 'Area',
      'ui.panel.config.areas.data_table.devices': 'Devices',
      'ui.panel.config.areas.data_table.entities': 'Entities',
      'ui.panel.config.areas.picker.header': 'Areas',
      'ui.panel.config.areas.picker.introduction':
        'Areas are used to organize where devices are. This information will be used throughout Home Assistant to help you in organizing your interface, permissions and integrations with other systems.',
      'ui.panel.config.areas.picker.introduction2':
        'To place devices in an area, use the link below to navigate to the integrations page and then click on a configured integration to get to the device cards.',
      'ui.panel.config.areas.picker.integrations_page': 'Integrations page',
      'ui.panel.config.areas.picker.no_areas':
        'Looks like you have no areas yet!',
      'ui.panel.config.areas.picker.create_area': 'Create Area',
      'ui.panel.config.areas.editor.default_name': 'New Area',
      'ui.panel.config.areas.editor.delete': 'Delete',
      'ui.panel.config.areas.editor.update': 'Update',
      'ui.panel.config.areas.editor.create': 'Create',
      'ui.panel.config.areas.editor.name': 'Name',
      'ui.panel.config.areas.editor.name_required': 'Name is required',
      'ui.panel.config.areas.editor.area_id': 'Area ID',
      'ui.panel.config.areas.editor.unknown_error': 'Unknown error',
      'ui.panel.config.areas.editor.linked_entities_caption': 'Entities',
      'ui.panel.config.areas.editor.no_linked_entities':
        'There are no entities linked to this area.',
      'ui.panel.config.areas.delete.confirmation_title':
        'Are you sure you want to delete this area?',
      'ui.panel.config.areas.delete.confirmation_text':
        'All devices in this area will become unassigned.',
      'ui.panel.config.backup.caption': 'Backups',
      'ui.panel.config.backup.description': 'Last backup {relative_time}',
      'ui.panel.config.backup.description_no_backup':
        'Manage backups and restore Home Assistant to a previous state',
      'ui.panel.config.backup.create_backup': 'Create backup',
      'ui.panel.config.backup.creating_backup':
        'Backup is currently being created',
      'ui.panel.config.backup.download_backup': 'Download backup',
      'ui.panel.config.backup.remove_backup': 'Delete backup',
      'ui.panel.config.backup.name': 'Backup name',
      'ui.panel.config.backup.size': 'Size',
      'ui.panel.config.backup.created': 'Created',
      'ui.panel.config.backup.no_backups': "You don't have any backups yet.",
      'ui.panel.config.backup.create.title': 'Create backup',
      'ui.panel.config.backup.create.description':
        'Create a backup of your current configuration directory, this will take some time.',
      'ui.panel.config.backup.create.confirm': 'create',
      'ui.panel.config.backup.remove.title': 'Remove backup',
      'ui.panel.config.backup.remove.description':
        'Are you sure you want to remove the backup with the name {name}?',
      'ui.panel.config.backup.remove.confirm': 'Remove',
      'ui.panel.config.backup.picker.search': 'Search backups',
      'ui.panel.config.tag.caption': 'Tags',
      'ui.panel.config.tag.description':
        'Trigger automations when an NFC tag, QR code, etc. is scanned',
      'ui.panel.config.tag.learn_more': 'Learn more about tags',
      'ui.panel.config.tag.no_tags': 'No tags',
      'ui.panel.config.tag.add_tag': 'Add tag',
      'ui.panel.config.tag.write': 'Write',
      'ui.panel.config.tag.edit': 'Edit',
      'ui.panel.config.tag.never_scanned': 'Never scanned',
      'ui.panel.config.tag.create_automation': 'Create automation with tag',
      'ui.panel.config.tag.confirm_remove_title': 'Remove tag?',
      'ui.panel.config.tag.confirm_remove':
        'Are you sure you want to remove tag {tag}?',
      'ui.panel.config.tag.automation_title': 'Tag {name} is scanned',
      'ui.panel.config.tag.headers.icon': 'Icon',
      'ui.panel.config.tag.headers.name': 'Name',
      'ui.panel.config.tag.headers.last_scanned': 'Last scanned',
      'ui.panel.config.tag.headers.write': 'Write',
      'ui.panel.config.tag.detail.new_tag': 'New tag',
      'ui.panel.config.tag.detail.name': 'Name',
      'ui.panel.config.tag.detail.description': 'Description',
      'ui.panel.config.tag.detail.tag_id': 'Tag ID',
      'ui.panel.config.tag.detail.tag_id_placeholder':
        'Autogenerated when left empty',
      'ui.panel.config.tag.detail.delete': 'Delete',
      'ui.panel.config.tag.detail.update': 'Update',
      'ui.panel.config.tag.detail.create': 'Create',
      'ui.panel.config.tag.detail.create_and_write': 'Create and Write',
      'ui.panel.config.tag.detail.usage':
        'A tag can trigger an automation when scanned, you can use NFC tags, QR codes or any other kind of tag. Use our {companion_link} to write this tag to a programmable NFC tag or create a QR code below.',
      'ui.panel.config.tag.detail.companion_apps': 'companion apps',
      'ui.panel.config.energy.caption': 'Energy',
      'ui.panel.config.energy.description':
        'Monitor your energy production and consumption',
      'ui.panel.config.energy.new_device_info':
        'After setting up a new device, it can take up to 2 hours for new data to arrive in your energy dashboard.',
      'ui.panel.config.energy.delete_source':
        'Are you sure you want to delete this source?',
      'ui.panel.config.energy.delete_integration':
        'Are you sure you want to delete this integration? It will remove the entities it provides',
      'ui.panel.config.energy.grid.title': 'Electricity grid',
      'ui.panel.config.energy.grid.sub':
        'Configure the amount of energy that you consume from the grid and, if you produce energy, give back to the grid. This allows Home Assistant to track your whole home energy usage.',
      'ui.panel.config.energy.grid.learn_more':
        'More information on how to get started.',
      'ui.panel.config.energy.grid.grid_consumption': 'Grid consumption',
      'ui.panel.config.energy.grid.add_consumption': 'Add consumption',
      'ui.panel.config.energy.grid.return_to_grid': 'Return to grid',
      'ui.panel.config.energy.grid.add_return': 'Add return',
      'ui.panel.config.energy.grid.grid_carbon_footprint':
        'Grid carbon footprint',
      'ui.panel.config.energy.grid.add_co2_signal':
        'Add CO2 signal integration',
      'ui.panel.config.energy.grid.flow_dialog.from.header':
        'Configure grid consumption',
      'ui.panel.config.energy.grid.flow_dialog.from.paragraph':
        'Grid consumption is the energy that flows from the energy grid to your home.',
      'ui.panel.config.energy.grid.flow_dialog.from.energy_stat':
        'Consumed Energy (kWh)',
      'ui.panel.config.energy.grid.flow_dialog.from.cost_para':
        'Select how Home Assistant should keep track of the costs of the consumed energy.',
      'ui.panel.config.energy.grid.flow_dialog.from.no_cost':
        'Do not track costs',
      'ui.panel.config.energy.grid.flow_dialog.from.cost_stat':
        'Use an entity tracking the total costs',
      'ui.panel.config.energy.grid.flow_dialog.from.cost_stat_input':
        'Total Costs Entity',
      'ui.panel.config.energy.grid.flow_dialog.from.cost_entity':
        'Use an entity with current price',
      'ui.panel.config.energy.grid.flow_dialog.from.cost_entity_input':
        'Entity with the current price',
      'ui.panel.config.energy.grid.flow_dialog.from.cost_number':
        'Use a static price',
      'ui.panel.config.energy.grid.flow_dialog.from.cost_number_input':
        'Price per kWh',
      'ui.panel.config.energy.grid.flow_dialog.from.cost_number_suffix':
        '{currency}/kWh',
      'ui.panel.config.energy.grid.flow_dialog.to.header':
        'Configure grid production',
      'ui.panel.config.energy.grid.flow_dialog.to.paragraph':
        'Grid production is the energy that flows from your solar panels to the grid.',
      'ui.panel.config.energy.grid.flow_dialog.to.energy_stat':
        'Energy returned to the grid (kWh)',
      'ui.panel.config.energy.grid.flow_dialog.to.cost_para':
        'Do you get money back when you return energy to the grid?',
      'ui.panel.config.energy.grid.flow_dialog.to.no_cost':
        'I do not get money back',
      'ui.panel.config.energy.grid.flow_dialog.to.cost_stat':
        'Use an entity tracking the total recieved money',
      'ui.panel.config.energy.grid.flow_dialog.to.cost_stat_input':
        'Total Compensation Entity',
      'ui.panel.config.energy.grid.flow_dialog.to.cost_entity':
        'Use an entity with current rate',
      'ui.panel.config.energy.grid.flow_dialog.to.cost_entity_input':
        'Entity with the current rate',
      'ui.panel.config.energy.grid.flow_dialog.to.cost_number':
        'Use a static rate',
      'ui.panel.config.energy.grid.flow_dialog.to.cost_number_input':
        'Rate per kWh',
      'ui.panel.config.energy.grid.flow_dialog.to.cost_number_suffix':
        '{currency}/kWh',
      'ui.panel.config.energy.solar.title': 'Solar Panels',
      'ui.panel.config.energy.solar.sub':
        'Let Home Assistant monitor your solar panels and give you insight on their performance.',
      'ui.panel.config.energy.solar.learn_more':
        'More information on how to get started.',
      'ui.panel.config.energy.solar.solar_production': 'Solar production',
      'ui.panel.config.energy.solar.add_solar_production':
        'Add solar production',
      'ui.panel.config.energy.solar.stat_production':
        'Your solar energy production',
      'ui.panel.config.energy.solar.stat_return_to_grid':
        'Solar energy returned to the grid',
      'ui.panel.config.energy.solar.stat_predicted_production':
        'Prediction of your solar energy production',
      'ui.panel.config.energy.solar.dialog.header': 'Configure solar panels',
      'ui.panel.config.energy.solar.dialog.solar_production_energy':
        'Solar production energy (kWh)',
      'ui.panel.config.energy.solar.dialog.solar_production_forecast':
        'Solar production forecast',
      'ui.panel.config.energy.solar.dialog.solar_production_forecast_description':
        'Adding solar production forecast information will allow you to quickly see your expected production for today.',
      'ui.panel.config.energy.solar.dialog.dont_forecast_production':
        "Don't forecast production",
      'ui.panel.config.energy.solar.dialog.forecast_production':
        'Forecast Production',
      'ui.panel.config.energy.solar.dialog.add_forecast': 'Add forecast',
      'ui.panel.config.energy.battery.title': 'Home Battery Storage',
      'ui.panel.config.energy.battery.sub':
        'If you have a battery system, you can configure it to monitor how much energy was stored and used from your battery.',
      'ui.panel.config.energy.battery.learn_more':
        'More information on how to get started.',
      'ui.panel.config.energy.battery.battery_systems': 'Battery systems',
      'ui.panel.config.energy.battery.add_battery_system': 'Add battery system',
      'ui.panel.config.energy.battery.dialog.header':
        'Configure battery system',
      'ui.panel.config.energy.battery.dialog.energy_into_battery':
        'Energy going in to the battery (kWh)',
      'ui.panel.config.energy.battery.dialog.energy_out_of_battery':
        'Energy coming out of the battery (kWh)',
      'ui.panel.config.energy.gas.title': 'Gas Consumption',
      'ui.panel.config.energy.gas.sub':
        'Let Home Assistant monitor your gas usage.',
      'ui.panel.config.energy.gas.learn_more':
        'More information on how to get started.',
      'ui.panel.config.energy.gas.gas_consumption': 'Gas consumption',
      'ui.panel.config.energy.gas.add_gas_source': 'Add gas source',
      'ui.panel.config.energy.gas.dialog.header': 'Configure gas consumption',
      'ui.panel.config.energy.gas.dialog.paragraph':
        'Gas consumption is the volume of gas that flows to your home.',
      'ui.panel.config.energy.gas.dialog.energy_stat': 'Consumed Energy (m³)',
      'ui.panel.config.energy.gas.dialog.cost_para':
        'Select how Home Assistant should keep track of the costs of the consumed energy.',
      'ui.panel.config.energy.gas.dialog.no_cost': 'Do not track costs',
      'ui.panel.config.energy.gas.dialog.cost_stat':
        'Use an entity tracking the total costs',
      'ui.panel.config.energy.gas.dialog.cost_stat_input': 'Total Costs Entity',
      'ui.panel.config.energy.gas.dialog.cost_entity':
        'Use an entity with current price',
      'ui.panel.config.energy.gas.dialog.cost_entity_input':
        'Entity with the current price per {unit}',
      'ui.panel.config.energy.gas.dialog.cost_number': 'Use a static price',
      'ui.panel.config.energy.gas.dialog.cost_number_input': 'Price per {unit}',
      'ui.panel.config.energy.gas.dialog.gas_usage': 'Gas usage',
      'ui.panel.config.energy.gas.dialog.m3_or_kWh': 'ft³, m³, Wh, kWh or MWh',
      'ui.panel.config.energy.device_consumption.title': 'Individual devices',
      'ui.panel.config.energy.device_consumption.sub':
        'Tracking the energy usage of individual devices allows Home Assistant to break down your energy usage by device.',
      'ui.panel.config.energy.device_consumption.learn_more':
        'More information on how to get started.',
      'ui.panel.config.energy.device_consumption.add_stat':
        'Pick entity to track energy of',
      'ui.panel.config.energy.device_consumption.selected_stat':
        'Tracking energy for',
      'ui.panel.config.energy.device_consumption.devices': 'Devices',
      'ui.panel.config.energy.device_consumption.add_device': 'Add device',
      'ui.panel.config.energy.device_consumption.dialog.header': 'Add a device',
      'ui.panel.config.energy.device_consumption.dialog.device_consumption_energy':
        'Device consumption energy (kWh)',
      'ui.panel.config.energy.device_consumption.dialog.selected_stat_intro':
        'Select the entity that represents the device energy usage.',
      'ui.panel.config.energy.validation.issues.entity_not_defined.title':
        'Entity not defined',
      'ui.panel.config.energy.validation.issues.entity_not_defined.description':
        'Check the integration or your configuration that provides:',
      'ui.panel.config.energy.validation.issues.recorder_untracked.title':
        'Entity not tracked',
      'ui.panel.config.energy.validation.issues.recorder_untracked.description':
        'The recorder has been configured to exclude these configured entities:',
      'ui.panel.config.energy.validation.issues.entity_unavailable.title':
        'Entity unavailable',
      'ui.panel.config.energy.validation.issues.entity_unavailable.description':
        'The state of these configured entities are currently not available:',
      'ui.panel.config.energy.validation.issues.entity_state_non_numeric.title':
        'Entity has non-numeric state',
      'ui.panel.config.energy.validation.issues.entity_state_non_numeric.description':
        'The following entities have a state that cannot be parsed as a number:',
      'ui.panel.config.energy.validation.issues.entity_negative_state.title':
        'Entity has a negative state',
      'ui.panel.config.energy.validation.issues.entity_negative_state.description':
        'The following entities have a negative state while a positive state is expected:',
      'ui.panel.config.energy.validation.issues.entity_unexpected_unit_energy.title':
        'Unexpected unit of measurement',
      'ui.panel.config.energy.validation.issues.entity_unexpected_unit_energy.description':
        "The following entities do not have the expected units of measurement 'Wh', 'kWh' or 'MWh':",
      'ui.panel.config.energy.validation.issues.entity_unexpected_unit_gas.title':
        'Unexpected unit of measurement',
      'ui.panel.config.energy.validation.issues.entity_unexpected_unit_gas.description':
        "The following entities do not have the expected units of measurement 'Wh', 'kWh' or 'MWh' for an energy sensor or 'm³' or 'ft³' for a gas sensor:",
      'ui.panel.config.energy.validation.issues.entity_unexpected_unit_energy_price.title':
        'Unexpected unit of measurement',
      'ui.panel.config.energy.validation.issues.entity_unexpected_unit_energy_price.description':
        "The following entities do not have the expected units of measurement ''{currency}/kWh'', ''{currency}/Wh'' or ''{currency}/MWh'':",
      'ui.panel.config.energy.validation.issues.entity_unexpected_unit_gas_price.title':
        'Unexpected unit of measurement',
      'ui.panel.config.energy.validation.issues.entity_unexpected_unit_gas_price.description':
        "The following entities do not have the expected units of measurement ''{currency}/kWh'', ''{currency}/Wh'', ''{currency}/MWh'', ''{currency}/m³'' or ''{currency}/ft³'':",
      'ui.panel.config.energy.validation.issues.entity_unexpected_state_class.title':
        'Unexpected state class',
      'ui.panel.config.energy.validation.issues.entity_unexpected_state_class.description':
        'The following entities do not have the expected state class:',
      'ui.panel.config.energy.validation.issues.entity_unexpected_device_class.title':
        'Unexpected device class',
      'ui.panel.config.energy.validation.issues.entity_unexpected_device_class.description':
        'The following entities do not have the expected device class:',
      'ui.panel.config.energy.validation.issues.entity_state_class_measurement_no_last_reset.title':
        'Last reset missing',
      'ui.panel.config.energy.validation.issues.entity_state_class_measurement_no_last_reset.description':
        "The following entities have state class 'measurement' but 'last_reset' is missing:",
      'ui.panel.config.helpers.caption': 'Helpers',
      'ui.panel.config.helpers.description':
        'Elements that help build automations',
      'ui.panel.config.helpers.types.input_text': 'Text',
      'ui.panel.config.helpers.types.input_number': 'Number',
      'ui.panel.config.helpers.types.input_select': 'Dropdown',
      'ui.panel.config.helpers.types.input_boolean': 'Toggle',
      'ui.panel.config.helpers.types.input_button': 'Button',
      'ui.panel.config.helpers.types.input_datetime': 'Date and/or time',
      'ui.panel.config.helpers.types.counter': 'Counter',
      'ui.panel.config.helpers.types.timer': 'Timer',
      'ui.panel.config.helpers.picker.headers.icon': 'Icon',
      'ui.panel.config.helpers.picker.headers.name': 'Name',
      'ui.panel.config.helpers.picker.headers.entity_id': 'Entity ID',
      'ui.panel.config.helpers.picker.headers.type': 'Type',
      'ui.panel.config.helpers.picker.headers.editable': 'Editable',
      'ui.panel.config.helpers.picker.add_helper': 'Add helper',
      'ui.panel.config.helpers.picker.no_helpers':
        "Looks like you don't have any helpers yet!",
      'ui.panel.config.helpers.dialog.create': 'Create',
      'ui.panel.config.helpers.dialog.add_helper': 'Add helper',
      'ui.panel.config.helpers.dialog.add_platform': 'Add {platform}',
      'ui.panel.config.core.caption': 'General',
      'ui.panel.config.core.description': 'Name, time zone and locale settings',
      'ui.panel.config.core.section.core.header': 'General Configuration',
      'ui.panel.config.core.section.core.introduction':
        'Manage your location, network and analytics.',
      'ui.panel.config.core.section.core.core_config.edit_requires_storage':
        'Editor disabled because config stored in configuration.yaml.',
      'ui.panel.config.core.section.core.core_config.location_name': 'Name',
      'ui.panel.config.core.section.core.core_config.latitude': 'Latitude',
      'ui.panel.config.core.section.core.core_config.longitude': 'Longitude',
      'ui.panel.config.core.section.core.core_config.elevation': 'Elevation',
      'ui.panel.config.core.section.core.core_config.elevation_meters':
        'meters',
      'ui.panel.config.core.section.core.core_config.time_zone': 'Time Zone',
      'ui.panel.config.core.section.core.core_config.unit_system':
        'Unit System',
      'ui.panel.config.core.section.core.core_config.unit_system_imperial':
        'Imperial',
      'ui.panel.config.core.section.core.core_config.unit_system_metric':
        'Metric',
      'ui.panel.config.core.section.core.core_config.imperial_example':
        'Fahrenheit, pounds',
      'ui.panel.config.core.section.core.core_config.metric_example':
        'Celsius, kilograms',
      'ui.panel.config.core.section.core.core_config.find_currency_value':
        'Find my value',
      'ui.panel.config.core.section.core.core_config.save_button': 'Save',
      'ui.panel.config.core.section.core.core_config.currency': 'Currency',
      'ui.panel.config.core.section.core.core_config.edit_location':
        'Edit location',
      'ui.panel.config.core.section.core.core_config.edit_location_description':
        'Location can be changed in zone settings',
      'ui.panel.config.url.caption': 'Home Assistant URL',
      'ui.panel.config.url.description':
        'Configure what website addresses Home Assistant should share with other devices when they need to fetch data from Home Assistant (eg. to play text-to-speech or other hosted media).',
      'ui.panel.config.url.internal_url_label': 'Local Network',
      'ui.panel.config.url.external_url_label': 'Internet',
      'ui.panel.config.url.external_use_ha_cloud': 'Use Home Assistant Cloud',
      'ui.panel.config.url.external_get_ha_cloud':
        'Access from anywhere, add Google & Alexa easily',
      'ui.panel.config.url.ha_cloud_remote_not_enabled':
        'Your Home Assistant Cloud remote connection is currently not enabled.',
      'ui.panel.config.url.enable_remote': 'Enable',
      'ui.panel.config.url.internal_url_automatic': 'Automatic',
      'ui.panel.config.url.internal_url_https_error_title':
        'Invalid local network URL',
      'ui.panel.config.url.internal_url_https_error_description':
        'You have configured an HTTPS certificate in Home Assistant. This means that your internal URL needs to be set to a domain covered by the certficate.',
      'ui.panel.config.hardware.caption': 'Hardware',
      'ui.panel.config.hardware.description':
        'Configure your hub and connected hardware',
      'ui.panel.config.hardware.available_hardware.failed_to_get':
        'Failed to get available hardware',
      'ui.panel.config.hardware.available_hardware.title': 'All Hardware',
      'ui.panel.config.hardware.available_hardware.subsystem': 'Subsystem',
      'ui.panel.config.hardware.available_hardware.device_path': 'Device path',
      'ui.panel.config.hardware.available_hardware.id': 'ID',
      'ui.panel.config.hardware.available_hardware.attributes': 'Attributes',
      'ui.panel.config.hardware.reboot_host': 'Reboot host',
      'ui.panel.config.hardware.reboot_host_confirm':
        'Are you sure you want to reboot your host?',
      'ui.panel.config.hardware.failed_to_reboot_host': 'Failed to reboot host',
      'ui.panel.config.hardware.shutdown_host': 'Shutdown host',
      'ui.panel.config.hardware.shutdown_host_confirm':
        'Are you sure you want to shutdown your host?',
      'ui.panel.config.hardware.failed_to_shutdown_host':
        'Failed to shutdown host',
      'ui.panel.config.hardware.board': 'Board',
      'ui.panel.config.info.caption': 'About',
      'ui.panel.config.info.copy_menu': 'Copy menu',
      'ui.panel.config.info.copy_raw': 'Raw Text',
      'ui.panel.config.info.copy_github': 'For GitHub',
      'ui.panel.config.info.description':
        'Version, loaded integrations and links to documentation',
      'ui.panel.config.info.home_assistant_logo': 'Home Assistant logo',
      'ui.panel.config.info.path_configuration':
        'Path to configuration.yaml: {path}',
      'ui.panel.config.info.developed_by':
        'Developed by a bunch of awesome people.',
      'ui.panel.config.info.license': 'Published under the Apache 2.0 license',
      'ui.panel.config.info.source': 'Source:',
      'ui.panel.config.info.server': 'server',
      'ui.panel.config.info.frontend': 'frontend-ui',
      'ui.panel.config.info.built_using': 'Built using',
      'ui.panel.config.info.icons_by': 'Icons by',
      'ui.panel.config.info.frontend_version':
        'Frontend version: {version} - {type}',
      'ui.panel.config.info.custom_uis': 'Custom UIs:',
      'ui.panel.config.info.system_health_error':
        "System Health component is not loaded. Add 'system_health:' to configuration.yaml",
      'ui.panel.config.info.documentation': 'Documentation',
      'ui.panel.config.info.issues': 'Issues',
      'ui.panel.config.info.setup_time': 'Setup time',
      'ui.panel.config.info.system_health.manage': 'Manage',
      'ui.panel.config.info.system_health.more_info': 'more info',
      'ui.panel.config.logs.caption': 'Logs',
      'ui.panel.config.logs.description':
        'View and search logs to diagnose issues',
      'ui.panel.config.logs.details': 'Log Details ({level})',
      'ui.panel.config.logs.search': 'Search logs',
      'ui.panel.config.logs.failed_get_logs':
        'Failed to get {provider} logs, {error}',
      'ui.panel.config.logs.no_issues_search':
        "No issues found for search term ''{term}''",
      'ui.panel.config.logs.load_logs': 'Load Full Logs',
      'ui.panel.config.logs.loading_log': 'Loading error log…',
      'ui.panel.config.logs.no_errors': 'No errors have been reported',
      'ui.panel.config.logs.no_issues': 'There are no new issues!',
      'ui.panel.config.logs.clear': 'Clear',
      'ui.panel.config.logs.refresh': 'Refresh',
      'ui.panel.config.logs.copy': 'Copy log entry',
      'ui.panel.config.logs.log_provider': 'Log Provider',
      'ui.panel.config.logs.multiple_messages':
        'message first occurred at {time} and shows up {counter} times',
      'ui.panel.config.logs.level.critical': 'CRITICAL',
      'ui.panel.config.logs.level.error': 'ERROR',
      'ui.panel.config.logs.level.warning': 'WARNING',
      'ui.panel.config.logs.level.info': 'INFO',
      'ui.panel.config.logs.level.debug': 'DEBUG',
      'ui.panel.config.logs.custom_integration': 'custom integration',
      'ui.panel.config.logs.error_from_custom_integration':
        'This error originated from a custom integration.',
      'ui.panel.config.logs.full_logs': 'Full logs',
      'ui.panel.config.lovelace.caption': 'Dashboards',
      'ui.panel.config.lovelace.description':
        'Create customized sets of cards to control your home',
      'ui.panel.config.lovelace.dashboards.default_dashboard':
        'This is the default dashboard',
      'ui.panel.config.lovelace.dashboards.caption': 'Dashboards',
      'ui.panel.config.lovelace.dashboards.conf_mode.yaml': 'YAML file',
      'ui.panel.config.lovelace.dashboards.conf_mode.storage': 'UI controlled',
      'ui.panel.config.lovelace.dashboards.picker.headers.icon': 'Icon',
      'ui.panel.config.lovelace.dashboards.picker.headers.title': 'Title',
      'ui.panel.config.lovelace.dashboards.picker.headers.conf_mode':
        'Configuration method',
      'ui.panel.config.lovelace.dashboards.picker.headers.default': 'Default',
      'ui.panel.config.lovelace.dashboards.picker.headers.require_admin':
        'Admin only',
      'ui.panel.config.lovelace.dashboards.picker.headers.sidebar':
        'Show in sidebar',
      'ui.panel.config.lovelace.dashboards.picker.headers.filename': 'Filename',
      'ui.panel.config.lovelace.dashboards.picker.headers.url': 'Open',
      'ui.panel.config.lovelace.dashboards.picker.open': 'Open',
      'ui.panel.config.lovelace.dashboards.picker.add_dashboard':
        'Add dashboard',
      'ui.panel.config.lovelace.dashboards.confirm_delete_title':
        'Delete {dashboard_title}?',
      'ui.panel.config.lovelace.dashboards.confirm_delete_text':
        'Your dashboard will be permanently deleted.',
      'ui.panel.config.lovelace.dashboards.cant_edit_yaml':
        'Dashboards created in YAML cannot be edited from the UI. Change them in configuration.yaml.',
      'ui.panel.config.lovelace.dashboards.cant_edit_default':
        'The default dashboard, Overview, cannot be edited from the UI. You can hide it by setting another dashboard as default.',
      'ui.panel.config.lovelace.dashboards.detail.edit_dashboard':
        'Edit dashboard',
      'ui.panel.config.lovelace.dashboards.detail.new_dashboard':
        'Add new dashboard',
      'ui.panel.config.lovelace.dashboards.detail.dismiss': 'Close',
      'ui.panel.config.lovelace.dashboards.detail.show_sidebar':
        'Show in sidebar',
      'ui.panel.config.lovelace.dashboards.detail.icon': 'Icon',
      'ui.panel.config.lovelace.dashboards.detail.title': 'Title',
      'ui.panel.config.lovelace.dashboards.detail.title_required':
        'Title is required.',
      'ui.panel.config.lovelace.dashboards.detail.url': 'URL',
      'ui.panel.config.lovelace.dashboards.detail.url_error_msg':
        'The URL should contain a - and cannot contain spaces or special characters, except for _ and -',
      'ui.panel.config.lovelace.dashboards.detail.require_admin': 'Admin only',
      'ui.panel.config.lovelace.dashboards.detail.delete': 'Delete',
      'ui.panel.config.lovelace.dashboards.detail.update': 'Update',
      'ui.panel.config.lovelace.dashboards.detail.create': 'Create',
      'ui.panel.config.lovelace.dashboards.detail.set_default':
        'Set as default on this device',
      'ui.panel.config.lovelace.dashboards.detail.remove_default':
        'Remove as default on this device',
      'ui.panel.config.lovelace.resources.caption': 'Resources',
      'ui.panel.config.lovelace.resources.types.css': 'Stylesheet',
      'ui.panel.config.lovelace.resources.types.html': 'HTML (deprecated)',
      'ui.panel.config.lovelace.resources.types.js':
        'JavaScript File (deprecated)',
      'ui.panel.config.lovelace.resources.types.module': 'JavaScript Module',
      'ui.panel.config.lovelace.resources.picker.headers.url': 'URL',
      'ui.panel.config.lovelace.resources.picker.headers.type': 'Type',
      'ui.panel.config.lovelace.resources.picker.no_resources': 'No resources',
      'ui.panel.config.lovelace.resources.picker.add_resource': 'Add resource',
      'ui.panel.config.lovelace.resources.confirm_delete':
        'Are you sure you want to delete this resource?',
      'ui.panel.config.lovelace.resources.refresh_header':
        'Do you want to refresh?',
      'ui.panel.config.lovelace.resources.refresh_body':
        'You have to refresh the page to complete the removal. Do you want to refresh now?',
      'ui.panel.config.lovelace.resources.cant_edit_yaml':
        'You are using your dashboard in YAML mode, therefore you cannot manage your resources through the UI. Manage them in configuration.yaml.',
      'ui.panel.config.lovelace.resources.detail.new_resource':
        'Add new resource',
      'ui.panel.config.lovelace.resources.detail.dismiss': 'Close',
      'ui.panel.config.lovelace.resources.detail.warning_header':
        'Be cautious!',
      'ui.panel.config.lovelace.resources.detail.warning_text':
        'Adding resources can be dangerous, make sure you know the source of the resource and trust them. Bad resources could seriously harm your system.',
      'ui.panel.config.lovelace.resources.detail.url': 'URL',
      'ui.panel.config.lovelace.resources.detail.url_error_msg':
        'URL is a required field',
      'ui.panel.config.lovelace.resources.detail.type': 'Resource type',
      'ui.panel.config.lovelace.resources.detail.delete': 'Delete',
      'ui.panel.config.lovelace.resources.detail.update': 'Update',
      'ui.panel.config.lovelace.resources.detail.create': 'Create',
      'ui.panel.config.automation.caption': 'Automations',
      'ui.panel.config.automation.description':
        'Create custom behavior rules for your home',
      'ui.panel.config.automation.picker.header': 'Automation Editor',
      'ui.panel.config.automation.picker.introduction':
        'The automation editor allows you to create and edit automations. Please follow the link below to read the instructions to make sure that you have configured Home Assistant correctly.',
      'ui.panel.config.automation.picker.learn_more':
        'Learn more about automations',
      'ui.panel.config.automation.picker.pick_automation':
        'Pick automation to edit',
      'ui.panel.config.automation.picker.no_automations':
        "We couldn't find any automations",
      'ui.panel.config.automation.picker.add_automation': 'Create automation',
      'ui.panel.config.automation.picker.only_editable':
        'Only automations in automations.yaml are editable.',
      'ui.panel.config.automation.picker.dev_only_editable':
        'Only automations that have a unique ID assigned are debuggable.',
      'ui.panel.config.automation.picker.edit_automation': 'Edit automation',
      'ui.panel.config.automation.picker.dev_automation': 'Debug automation',
      'ui.panel.config.automation.picker.show_info_automation':
        'Show info about automation',
      'ui.panel.config.automation.picker.delete_automation':
        'Delete automation',
      'ui.panel.config.automation.picker.delete_confirm':
        'Are you sure you want to delete this automation?',
      'ui.panel.config.automation.picker.duplicate_automation':
        'Duplicate automation',
      'ui.panel.config.automation.picker.duplicate': 'Duplicate',
      'ui.panel.config.automation.picker.headers.toggle': 'Enable/disable',
      'ui.panel.config.automation.picker.headers.name': 'Name',
      'ui.panel.config.automation.picker.headers.trigger': 'Trigger',
      'ui.panel.config.automation.picker.headers.actions': 'Actions',
      'ui.panel.config.automation.dialog_new.header': 'Create a new automation',
      'ui.panel.config.automation.dialog_new.how':
        'How do you want to create your new automation?',
      'ui.panel.config.automation.dialog_new.blueprint.use_blueprint':
        'Use a blueprint',
      'ui.panel.config.automation.dialog_new.thingtalk.header':
        'Describe the automation you want to create',
      'ui.panel.config.automation.dialog_new.thingtalk.intro':
        'And we will try to create it for you. For example: Turn the lights off when I leave.',
      'ui.panel.config.automation.dialog_new.thingtalk.input_label':
        'What should this automation do?',
      'ui.panel.config.automation.dialog_new.thingtalk.create': 'Create',
      'ui.panel.config.automation.dialog_new.start_empty':
        'Start with an empty automation',
      'ui.panel.config.automation.dialog_new.start_empty_description':
        'Create a new automation from scratch',
      'ui.panel.config.automation.editor.enable_disable':
        'Enable/Disable automation',
      'ui.panel.config.automation.editor.show_trace': 'Show trace',
      'ui.panel.config.automation.editor.introduction':
        'Use automations to bring your home to life.',
      'ui.panel.config.automation.editor.default_name': 'New Automation',
      'ui.panel.config.automation.editor.load_error_not_editable':
        'Only automations in automations.yaml are editable.',
      'ui.panel.config.automation.editor.load_error_unknown':
        'Error loading automation ({err_no}).',
      'ui.panel.config.automation.editor.save': 'Save',
      'ui.panel.config.automation.editor.unsaved_confirm':
        'You have unsaved changes. Are you sure you want to leave?',
      'ui.panel.config.automation.editor.alias': 'Name',
      'ui.panel.config.automation.editor.move_up': 'Move up',
      'ui.panel.config.automation.editor.move_down': 'Move down',
      'ui.panel.config.automation.editor.description.label': 'Description',
      'ui.panel.config.automation.editor.description.placeholder':
        'Optional description',
      'ui.panel.config.automation.editor.description.add': 'Add description',
      'ui.panel.config.automation.editor.blueprint.header': 'Blueprint',
      'ui.panel.config.automation.editor.blueprint.blueprint_to_use':
        'Blueprint to use',
      'ui.panel.config.automation.editor.blueprint.no_blueprints':
        "You don't have any blueprints",
      'ui.panel.config.automation.editor.blueprint.no_inputs':
        "This blueprint doesn't have any inputs.",
      'ui.panel.config.automation.editor.modes.label': 'Mode',
      'ui.panel.config.automation.editor.modes.description':
        'The mode controls what happens when the automation is triggered while the actions are still running from a previous trigger. Check the {documentation_link} for more info.',
      'ui.panel.config.automation.editor.modes.documentation':
        'automation documentation',
      'ui.panel.config.automation.editor.modes.single': 'Single (default)',
      'ui.panel.config.automation.editor.modes.restart': 'Restart',
      'ui.panel.config.automation.editor.modes.queued': 'Queued',
      'ui.panel.config.automation.editor.modes.parallel': 'Parallel',
      'ui.panel.config.automation.editor.max.queued': 'Queue length',
      'ui.panel.config.automation.editor.max.parallel':
        'Max number of parallel runs',
      'ui.panel.config.automation.editor.edit_yaml': 'Edit in YAML',
      'ui.panel.config.automation.editor.edit_ui': 'Edit in visual editor',
      'ui.panel.config.automation.editor.copy_to_clipboard':
        'Copy to Clipboard',
      'ui.panel.config.automation.editor.triggers.name': 'Trigger',
      'ui.panel.config.automation.editor.triggers.header': 'Triggers',
      'ui.panel.config.automation.editor.triggers.introduction':
        'Triggers are what starts the processing of an automation rule. It is possible to specify multiple triggers for the same rule. Once a trigger starts, Home Assistant will validate the conditions, if any, and call the action.',
      'ui.panel.config.automation.editor.triggers.learn_more':
        'Learn more about triggers',
      'ui.panel.config.automation.editor.triggers.triggered': 'Triggered',
      'ui.panel.config.automation.editor.triggers.add': 'Add trigger',
      'ui.panel.config.automation.editor.triggers.id': 'Trigger ID',
      'ui.panel.config.automation.editor.triggers.edit_id': 'Edit trigger ID',
      'ui.panel.config.automation.editor.triggers.duplicate': 'Duplicate',
      'ui.panel.config.automation.editor.triggers.delete': 'Delete',
      'ui.panel.config.automation.editor.triggers.delete_confirm':
        'Are you sure you want to delete this?',
      'ui.panel.config.automation.editor.triggers.unsupported_platform':
        'No visual editor support for platform: {platform}',
      'ui.panel.config.automation.editor.triggers.type_select': 'Trigger type',
      'ui.panel.config.automation.editor.triggers.type.calendar.label':
        'Calendar',
      'ui.panel.config.automation.editor.triggers.type.calendar.event':
        'Event:',
      'ui.panel.config.automation.editor.triggers.type.calendar.start':
        'Event Start',
      'ui.panel.config.automation.editor.triggers.type.calendar.end':
        'Event End',
      'ui.panel.config.automation.editor.triggers.type.device.label': 'Device',
      'ui.panel.config.automation.editor.triggers.type.device.trigger':
        'Trigger',
      'ui.panel.config.automation.editor.triggers.type.device.extra_fields.above':
        'Above',
      'ui.panel.config.automation.editor.triggers.type.device.extra_fields.below':
        'Below',
      'ui.panel.config.automation.editor.triggers.type.device.extra_fields.for':
        'Duration (optional)',
      'ui.panel.config.automation.editor.triggers.type.device.extra_fields.zone':
        'Zone',
      'ui.panel.config.automation.editor.triggers.type.event.label': 'Event',
      'ui.panel.config.automation.editor.triggers.type.event.event_type':
        'Event type',
      'ui.panel.config.automation.editor.triggers.type.event.event_data':
        'Event data',
      'ui.panel.config.automation.editor.triggers.type.event.context_users':
        'Limit to events triggered by',
      'ui.panel.config.automation.editor.triggers.type.event.context_user_picked':
        'User firing event',
      'ui.panel.config.automation.editor.triggers.type.event.context_user_pick':
        'Select user',
      'ui.panel.config.automation.editor.triggers.type.geo_location.label':
        'Geolocation',
      'ui.panel.config.automation.editor.triggers.type.geo_location.source':
        'Source',
      'ui.panel.config.automation.editor.triggers.type.geo_location.zone':
        'Zone',
      'ui.panel.config.automation.editor.triggers.type.geo_location.event':
        'Event',
      'ui.panel.config.automation.editor.triggers.type.geo_location.enter':
        'Enter',
      'ui.panel.config.automation.editor.triggers.type.geo_location.leave':
        'Leave',
      'ui.panel.config.automation.editor.triggers.type.state.label': 'State',
      'ui.panel.config.automation.editor.triggers.type.state.attribute':
        'Attribute (optional)',
      'ui.panel.config.automation.editor.triggers.type.state.from':
        'From (optional)',
      'ui.panel.config.automation.editor.triggers.type.state.for':
        'For (optional)',
      'ui.panel.config.automation.editor.triggers.type.state.to':
        'To (optional)',
      'ui.panel.config.automation.editor.triggers.type.homeassistant.label':
        'Home Assistant',
      'ui.panel.config.automation.editor.triggers.type.homeassistant.event':
        'Event:',
      'ui.panel.config.automation.editor.triggers.type.homeassistant.start':
        'Start',
      'ui.panel.config.automation.editor.triggers.type.homeassistant.shutdown':
        'Shutdown',
      'ui.panel.config.automation.editor.triggers.type.mqtt.label': 'MQTT',
      'ui.panel.config.automation.editor.triggers.type.mqtt.topic': 'Topic',
      'ui.panel.config.automation.editor.triggers.type.mqtt.payload':
        'Payload (optional)',
      'ui.panel.config.automation.editor.triggers.type.numeric_state.label':
        'Numeric state',
      'ui.panel.config.automation.editor.triggers.type.numeric_state.above':
        'Above',
      'ui.panel.config.automation.editor.triggers.type.numeric_state.below':
        'Below',
      'ui.panel.config.automation.editor.triggers.type.numeric_state.value_template':
        'Value template (optional)',
      'ui.panel.config.automation.editor.triggers.type.sun.label': 'Sun',
      'ui.panel.config.automation.editor.triggers.type.sun.event': 'Event:',
      'ui.panel.config.automation.editor.triggers.type.sun.sunrise': 'Sunrise',
      'ui.panel.config.automation.editor.triggers.type.sun.sunset': 'Sunset',
      'ui.panel.config.automation.editor.triggers.type.sun.offset':
        'Offset (optional)',
      'ui.panel.config.automation.editor.triggers.type.tag.label': 'Tag',
      'ui.panel.config.automation.editor.triggers.type.template.label':
        'Template',
      'ui.panel.config.automation.editor.triggers.type.template.value_template':
        'Value template',
      'ui.panel.config.automation.editor.triggers.type.time.type_value':
        'Fixed time',
      'ui.panel.config.automation.editor.triggers.type.time.type_input':
        'Value of a date/time helper',
      'ui.panel.config.automation.editor.triggers.type.time.label': 'Time',
      'ui.panel.config.automation.editor.triggers.type.time.at': 'At time',
      'ui.panel.config.automation.editor.triggers.type.time.mode': 'Mode',
      'ui.panel.config.automation.editor.triggers.type.time_pattern.label':
        'Time Pattern',
      'ui.panel.config.automation.editor.triggers.type.time_pattern.hours':
        'Hours',
      'ui.panel.config.automation.editor.triggers.type.time_pattern.minutes':
        'Minutes',
      'ui.panel.config.automation.editor.triggers.type.time_pattern.seconds':
        'Seconds',
      'ui.panel.config.automation.editor.triggers.type.webhook.copy_url':
        'Copy URL to Clipboard',
      'ui.panel.config.automation.editor.triggers.type.webhook.label':
        'Webhook',
      'ui.panel.config.automation.editor.triggers.type.webhook.webhook_id':
        'Webhook ID',
      'ui.panel.config.automation.editor.triggers.type.webhook.webhook_id_helper':
        'Treat this ID like a password: keep it secret, and make it hard to guess.',
      'ui.panel.config.automation.editor.triggers.type.zone.label': 'Zone',
      'ui.panel.config.automation.editor.triggers.type.zone.entity':
        'Entity with location',
      'ui.panel.config.automation.editor.triggers.type.zone.zone': 'Zone',
      'ui.panel.config.automation.editor.triggers.type.zone.event': 'Event:',
      'ui.panel.config.automation.editor.triggers.type.zone.enter': 'Enter',
      'ui.panel.config.automation.editor.triggers.type.zone.leave': 'Leave',
      'ui.panel.config.automation.editor.conditions.name': 'Condition',
      'ui.panel.config.automation.editor.conditions.header': 'Conditions',
      'ui.panel.config.automation.editor.conditions.introduction':
        'Conditions are optional and will prevent the automation from running unless all conditions are satisfied.',
      'ui.panel.config.automation.editor.conditions.learn_more':
        'Learn more about conditions',
      'ui.panel.config.automation.editor.conditions.add': 'Add condition',
      'ui.panel.config.automation.editor.conditions.test': 'Test',
      'ui.panel.config.automation.editor.conditions.invalid_condition':
        'Invalid condition configuration',
      'ui.panel.config.automation.editor.conditions.test_failed':
        'Error occurred while testing condition',
      'ui.panel.config.automation.editor.conditions.duplicate': 'Duplicate',
      'ui.panel.config.automation.editor.conditions.delete': 'Delete',
      'ui.panel.config.automation.editor.conditions.delete_confirm':
        'Are you sure you want to delete this?',
      'ui.panel.config.automation.editor.conditions.unsupported_condition':
        'No visual editor support for condition: {condition}',
      'ui.panel.config.automation.editor.conditions.type_select':
        'Condition type',
      'ui.panel.config.automation.editor.conditions.type.and.label': 'And',
      'ui.panel.config.automation.editor.conditions.type.device.label':
        'Device',
      'ui.panel.config.automation.editor.conditions.type.device.condition':
        'Condition',
      'ui.panel.config.automation.editor.conditions.type.device.extra_fields.above':
        'Above',
      'ui.panel.config.automation.editor.conditions.type.device.extra_fields.below':
        'Below',
      'ui.panel.config.automation.editor.conditions.type.device.extra_fields.for':
        'Duration',
      'ui.panel.config.automation.editor.conditions.type.device.extra_fields.hvac_mode':
        'HVAC mode',
      'ui.panel.config.automation.editor.conditions.type.device.extra_fields.preset_mode':
        'Preset mode',
      'ui.panel.config.automation.editor.conditions.type.not.label': 'Not',
      'ui.panel.config.automation.editor.conditions.type.numeric_state.label':
        'Numeric state',
      'ui.panel.config.automation.editor.conditions.type.numeric_state.above':
        'Above',
      'ui.panel.config.automation.editor.conditions.type.numeric_state.below':
        'Below',
      'ui.panel.config.automation.editor.conditions.type.numeric_state.value_template':
        'Value template (optional)',
      'ui.panel.config.automation.editor.conditions.type.or.label': 'Or',
      'ui.panel.config.automation.editor.conditions.type.state.label': 'State',
      'ui.panel.config.automation.editor.conditions.type.state.state': 'State',
      'ui.panel.config.automation.editor.conditions.type.sun.label': 'Sun',
      'ui.panel.config.automation.editor.conditions.type.sun.before': 'Before',
      'ui.panel.config.automation.editor.conditions.type.sun.after': 'After',
      'ui.panel.config.automation.editor.conditions.type.sun.before_offset':
        'Before offset (optional)',
      'ui.panel.config.automation.editor.conditions.type.sun.after_offset':
        'After offset (optional)',
      'ui.panel.config.automation.editor.conditions.type.sun.sunrise':
        'Sunrise',
      'ui.panel.config.automation.editor.conditions.type.sun.sunset': 'Sunset',
      'ui.panel.config.automation.editor.conditions.type.template.label':
        'Template',
      'ui.panel.config.automation.editor.conditions.type.template.value_template':
        'Value template',
      'ui.panel.config.automation.editor.conditions.type.time.type_value':
        'Fixed time',
      'ui.panel.config.automation.editor.conditions.type.time.type_input':
        'Value of a date/time helper',
      'ui.panel.config.automation.editor.conditions.type.time.label': 'Time',
      'ui.panel.config.automation.editor.conditions.type.time.after': 'After',
      'ui.panel.config.automation.editor.conditions.type.time.before': 'Before',
      'ui.panel.config.automation.editor.conditions.type.time.weekday':
        'Weekdays',
      'ui.panel.config.automation.editor.conditions.type.time.mode_after':
        'After',
      'ui.panel.config.automation.editor.conditions.type.time.mode_before':
        'Before',
      'ui.panel.config.automation.editor.conditions.type.time.weekdays.mon':
        'Monday',
      'ui.panel.config.automation.editor.conditions.type.time.weekdays.tue':
        'Tuesday',
      'ui.panel.config.automation.editor.conditions.type.time.weekdays.wed':
        'Wednesday',
      'ui.panel.config.automation.editor.conditions.type.time.weekdays.thu':
        'Thursday',
      'ui.panel.config.automation.editor.conditions.type.time.weekdays.fri':
        'Friday',
      'ui.panel.config.automation.editor.conditions.type.time.weekdays.sat':
        'Saturday',
      'ui.panel.config.automation.editor.conditions.type.time.weekdays.sun':
        'Sunday',
      'ui.panel.config.automation.editor.conditions.type.trigger.label':
        'Triggered by',
      'ui.panel.config.automation.editor.conditions.type.trigger.no_triggers':
        'No triggers have an ID set. You can set an ID using the trigger menu button.',
      'ui.panel.config.automation.editor.conditions.type.trigger.id': 'Trigger',
      'ui.panel.config.automation.editor.conditions.type.zone.label': 'Zone',
      'ui.panel.config.automation.editor.conditions.type.zone.entity':
        'Entity with location',
      'ui.panel.config.automation.editor.conditions.type.zone.zone': 'Zone',
      'ui.panel.config.automation.editor.actions.name': 'Action',
      'ui.panel.config.automation.editor.actions.header': 'Actions',
      'ui.panel.config.automation.editor.actions.introduction':
        'The actions are what Home Assistant will do when the automation is triggered.',
      'ui.panel.config.automation.editor.actions.learn_more':
        'Learn more about actions',
      'ui.panel.config.automation.editor.actions.add': 'Add action',
      'ui.panel.config.automation.editor.actions.invalid_action':
        'Invalid action',
      'ui.panel.config.automation.editor.actions.run_action': 'Run action',
      'ui.panel.config.automation.editor.actions.run_action_error':
        'Error running action',
      'ui.panel.config.automation.editor.actions.run_action_success':
        'Action run successfully',
      'ui.panel.config.automation.editor.actions.duplicate': 'Duplicate',
      'ui.panel.config.automation.editor.actions.enable': 'Enable',
      'ui.panel.config.automation.editor.actions.disable': 'Disable',
      'ui.panel.config.automation.editor.actions.disabled': 'Disabled',
      'ui.panel.config.automation.editor.actions.delete': 'Delete',
      'ui.panel.config.automation.editor.actions.delete_confirm':
        'Are you sure you want to delete this?',
      'ui.panel.config.automation.editor.actions.unsupported_action':
        'No visual editor support for action: {action}',
      'ui.panel.config.automation.editor.actions.type_select': 'Action type',
      'ui.panel.config.automation.editor.actions.type.service.label':
        'Call service',
      'ui.panel.config.automation.editor.actions.type.play_media.label':
        'Play media',
      'ui.panel.config.automation.editor.actions.type.delay.label':
        'Wait for time to pass (delay)',
      'ui.panel.config.automation.editor.actions.type.delay.delay': 'Duration',
      'ui.panel.config.automation.editor.actions.type.wait_template.label':
        'Wait for a template',
      'ui.panel.config.automation.editor.actions.type.wait_template.wait_template':
        'Wait Template',
      'ui.panel.config.automation.editor.actions.type.wait_template.timeout':
        'Timeout (optional)',
      'ui.panel.config.automation.editor.actions.type.wait_template.continue_timeout':
        'Continue on timeout',
      'ui.panel.config.automation.editor.actions.type.wait_for_trigger.label':
        'Wait for a trigger',
      'ui.panel.config.automation.editor.actions.type.wait_for_trigger.timeout':
        'Timeout (optional)',
      'ui.panel.config.automation.editor.actions.type.wait_for_trigger.continue_timeout':
        'Continue on timeout',
      'ui.panel.config.automation.editor.actions.type.condition.label':
        'Condition',
      'ui.panel.config.automation.editor.actions.type.event.label':
        'Fire event',
      'ui.panel.config.automation.editor.actions.type.event.event': 'Event',
      'ui.panel.config.automation.editor.actions.type.event.event_data':
        'Event data',
      'ui.panel.config.automation.editor.actions.type.device_id.label':
        'Device',
      'ui.panel.config.automation.editor.actions.type.device_id.action':
        'Action',
      'ui.panel.config.automation.editor.actions.type.device_id.extra_fields.code':
        'Code',
      'ui.panel.config.automation.editor.actions.type.device_id.extra_fields.message':
        'Message',
      'ui.panel.config.automation.editor.actions.type.device_id.extra_fields.title':
        'Title',
      'ui.panel.config.automation.editor.actions.type.device_id.extra_fields.position':
        'Position',
      'ui.panel.config.automation.editor.actions.type.device_id.extra_fields.mode':
        'Mode',
      'ui.panel.config.automation.editor.actions.type.device_id.extra_fields.humidity':
        'Humidity',
      'ui.panel.config.automation.editor.actions.type.device_id.extra_fields.value':
        'Value',
      'ui.panel.config.automation.editor.actions.type.device_id.extra_fields.brightness_pct':
        'Brightness',
      'ui.panel.config.automation.editor.actions.type.device_id.extra_fields.flash':
        'Flash',
      'ui.panel.config.automation.editor.actions.type.activate_scene.label':
        'Activate scene',
      'ui.panel.config.automation.editor.actions.type.repeat.label': 'Repeat',
      'ui.panel.config.automation.editor.actions.type.repeat.type_select':
        'Repeat type',
      'ui.panel.config.automation.editor.actions.type.repeat.type.count.label':
        'Count',
      'ui.panel.config.automation.editor.actions.type.repeat.type.while.label':
        'While',
      'ui.panel.config.automation.editor.actions.type.repeat.type.while.conditions':
        'While conditions',
      'ui.panel.config.automation.editor.actions.type.repeat.type.until.label':
        'Until',
      'ui.panel.config.automation.editor.actions.type.repeat.type.until.conditions':
        'Until conditions',
      'ui.panel.config.automation.editor.actions.type.repeat.sequence':
        'Actions',
      'ui.panel.config.automation.editor.actions.type.choose.label': 'Choose',
      'ui.panel.config.automation.editor.actions.type.choose.default':
        'Default actions',
      'ui.panel.config.automation.editor.actions.type.choose.option':
        'Option {number}',
      'ui.panel.config.automation.editor.actions.type.choose.add_option':
        'Add option',
      'ui.panel.config.automation.editor.actions.type.choose.remove_option':
        'Remove option',
      'ui.panel.config.automation.editor.actions.type.choose.conditions':
        'Conditions',
      'ui.panel.config.automation.editor.actions.type.choose.sequence':
        'Actions',
      'ui.panel.config.automation.editor.actions.type.if.label': 'If-then',
      'ui.panel.config.automation.editor.actions.type.if.if': 'If',
      'ui.panel.config.automation.editor.actions.type.if.then': 'Then',
      'ui.panel.config.automation.editor.actions.type.if.else': 'Else',
      'ui.panel.config.automation.editor.actions.type.stop.label': 'Stop',
      'ui.panel.config.automation.editor.actions.type.stop.stop':
        'Reason for stopping',
      'ui.panel.config.automation.editor.actions.type.stop.error':
        'Stop because of an unexpected error',
      'ui.panel.config.automation.editor.actions.type.parallel.label':
        'Run in parallel',
      'ui.panel.config.automation.thingtalk.create': 'Create automation',
      'ui.panel.config.automation.thingtalk.task_selection.header':
        'Create a new automation',
      'ui.panel.config.automation.thingtalk.task_selection.introduction':
        'Type below what this automation should do, and we will try to convert it into a Home Assistant automation.',
      'ui.panel.config.automation.thingtalk.task_selection.language_note':
        'Note: Only English is supported for now.',
      'ui.panel.config.automation.thingtalk.task_selection.for_example':
        'For example:',
      'ui.panel.config.automation.thingtalk.task_selection.error_empty':
        'Enter a command or tap skip.',
      'ui.panel.config.automation.thingtalk.task_selection.error_unsupported':
        "We couldn't create an automation for that (yet?).",
      'ui.panel.config.automation.thingtalk.link_devices.header':
        'Great! Now we need to link some devices',
      'ui.panel.config.automation.thingtalk.link_devices.ambiguous_entities':
        'One or more devices have more than one matching entity, please pick the one you want to use.',
      'ui.panel.config.automation.thingtalk.link_devices.unknown_placeholder':
        'Unknown placeholder',
      'ui.panel.config.automation.trace.refresh': 'Refresh',
      'ui.panel.config.automation.trace.download_trace': 'Download trace',
      'ui.panel.config.automation.trace.edit_automation': 'Edit automation',
      'ui.panel.config.automation.trace.older_trace': 'Older trace',
      'ui.panel.config.automation.trace.newer_trace': 'Newer trace',
      'ui.panel.config.blueprint.caption': 'Blueprints',
      'ui.panel.config.blueprint.description': 'Manage blueprints',
      'ui.panel.config.blueprint.overview.header': 'Blueprint Editor',
      'ui.panel.config.blueprint.overview.introduction':
        'The blueprint configuration allows you to import and manage your blueprints.',
      'ui.panel.config.blueprint.overview.learn_more':
        'Learn more about using blueprints',
      'ui.panel.config.blueprint.overview.headers.name': 'Name',
      'ui.panel.config.blueprint.overview.headers.type': 'Type',
      'ui.panel.config.blueprint.overview.headers.file_name': 'File name',
      'ui.panel.config.blueprint.overview.types.automation': 'Automation',
      'ui.panel.config.blueprint.overview.types.script': 'Script',
      'ui.panel.config.blueprint.overview.confirm_delete_header':
        'Delete this blueprint?',
      'ui.panel.config.blueprint.overview.confirm_delete_text':
        'Are you sure you want to delete this blueprint?',
      'ui.panel.config.blueprint.overview.add_blueprint': 'Import blueprint',
      'ui.panel.config.blueprint.overview.create_automation':
        'Create automation',
      'ui.panel.config.blueprint.overview.create_script': 'Create script',
      'ui.panel.config.blueprint.overview.delete_blueprint': 'Delete blueprint',
      'ui.panel.config.blueprint.overview.share_blueprint': 'Share blueprint',
      'ui.panel.config.blueprint.overview.share_blueprint_no_url':
        'Unable to share blueprint: no source url',
      'ui.panel.config.blueprint.overview.discover_more':
        'Discover more blueprints',
      'ui.panel.config.blueprint.add.header': 'Import a blueprint',
      'ui.panel.config.blueprint.add.import_header': "Blueprint ''{name}''",
      'ui.panel.config.blueprint.add.import_introduction_link':
        'You can import blueprints of other users from Github and the {community_link}. Enter the URL of the blueprint below.',
      'ui.panel.config.blueprint.add.community_forums': 'community forums',
      'ui.panel.config.blueprint.add.url': 'URL of the blueprint',
      'ui.panel.config.blueprint.add.raw_blueprint': 'Blueprint content',
      'ui.panel.config.blueprint.add.importing': 'Loading blueprint…',
      'ui.panel.config.blueprint.add.import_btn': 'Preview blueprint',
      'ui.panel.config.blueprint.add.saving': 'Importing blueprint…',
      'ui.panel.config.blueprint.add.save_btn': 'Import blueprint',
      'ui.panel.config.blueprint.add.error_no_url':
        'Please enter the URL of the blueprint.',
      'ui.panel.config.blueprint.add.unsupported_blueprint':
        'This blueprint is not supported',
      'ui.panel.config.blueprint.add.file_name': 'Blueprint Path',
      'ui.panel.config.script.caption': 'Scripts',
      'ui.panel.config.script.description': 'Execute a sequence of actions',
      'ui.panel.config.script.picker.header': 'Script Editor',
      'ui.panel.config.script.picker.introduction':
        'The script editor allows you to create and edit scripts. Please follow the link below to read the instructions to make sure that you have configured Home Assistant correctly.',
      'ui.panel.config.script.picker.learn_more': 'Learn more about scripts',
      'ui.panel.config.script.picker.no_scripts':
        'We couldn’t find any scripts',
      'ui.panel.config.script.picker.add_script': 'Add script',
      'ui.panel.config.script.picker.show_info': 'Show info about script',
      'ui.panel.config.script.picker.run_script': 'Run script',
      'ui.panel.config.script.picker.edit_script': 'Edit script',
      'ui.panel.config.script.picker.dev_script': 'Debug script',
      'ui.panel.config.script.picker.headers.name': 'Name',
      'ui.panel.config.script.picker.headers.state': 'State',
      'ui.panel.config.script.picker.duplicate_script': 'Duplicate script',
      'ui.panel.config.script.picker.duplicate': 'Duplicate',
      'ui.panel.config.script.editor.alias': 'Name',
      'ui.panel.config.script.editor.icon': 'Icon',
      'ui.panel.config.script.editor.id': 'Entity ID',
      'ui.panel.config.script.editor.id_already_exists_save_error':
        "You can't save this script because the ID is not unique, pick another ID or leave it blank to automatically generate one.",
      'ui.panel.config.script.editor.id_already_exists':
        'This ID already exists',
      'ui.panel.config.script.editor.introduction':
        'Use scripts to run a sequence of actions.',
      'ui.panel.config.script.editor.show_trace': 'Show trace',
      'ui.panel.config.script.editor.header': 'Script: {name}',
      'ui.panel.config.script.editor.default_name': 'New Script',
      'ui.panel.config.script.editor.modes.label': 'Mode',
      'ui.panel.config.script.editor.modes.description':
        'The mode controls what happens when script is invoked while it is still running from one or more previous invocations. Check the {documentation_link} for more info.',
      'ui.panel.config.script.editor.modes.documentation':
        'script documentation',
      'ui.panel.config.script.editor.modes.single': 'Single (default)',
      'ui.panel.config.script.editor.modes.restart': 'Restart',
      'ui.panel.config.script.editor.modes.queued': 'Queued',
      'ui.panel.config.script.editor.modes.parallel': 'Parallel',
      'ui.panel.config.script.editor.max.queued': 'Queue length',
      'ui.panel.config.script.editor.max.parallel':
        'Max number of parallel runs',
      'ui.panel.config.script.editor.load_error_not_editable':
        'Only scripts inside scripts.yaml are editable.',
      'ui.panel.config.script.editor.delete_confirm':
        'Are you sure you want to delete this script?',
      'ui.panel.config.script.editor.delete_script': 'Delete script',
      'ui.panel.config.script.editor.save_script': 'Save script',
      'ui.panel.config.script.editor.sequence': 'Sequence',
      'ui.panel.config.script.editor.sequence_sentence':
        'The sequence of actions of this script.',
      'ui.panel.config.script.editor.link_available_actions':
        'Learn more about available actions.',
      'ui.panel.config.scene.caption': 'Scenes',
      'ui.panel.config.scene.description':
        'Capture device states and easily recall them later',
      'ui.panel.config.scene.activated': 'Activated scene {name}.',
      'ui.panel.config.scene.picker.header': 'Scene Editor',
      'ui.panel.config.scene.picker.introduction':
        'The scene editor allows you to create and edit scenes. Please follow the link below to read the instructions to make sure that you have configured Home Assistant correctly.',
      'ui.panel.config.scene.picker.learn_more': 'Learn more about scenes',
      'ui.panel.config.scene.picker.pick_scene': 'Pick scene to edit',
      'ui.panel.config.scene.picker.no_scenes': 'We couldn’t find any scenes',
      'ui.panel.config.scene.picker.add_scene': 'Add scene',
      'ui.panel.config.scene.picker.only_editable':
        'Only scenes defined in scenes.yaml are editable.',
      'ui.panel.config.scene.picker.edit_scene': 'Edit scene',
      'ui.panel.config.scene.picker.show_info_scene': 'Show info about scene',
      'ui.panel.config.scene.picker.delete_scene': 'Delete scene',
      'ui.panel.config.scene.picker.delete_confirm':
        'Are you sure you want to delete this scene?',
      'ui.panel.config.scene.picker.duplicate_scene': 'Duplicate scene',
      'ui.panel.config.scene.picker.duplicate': 'Duplicate',
      'ui.panel.config.scene.picker.headers.activate': 'Activate',
      'ui.panel.config.scene.picker.headers.state': 'State',
      'ui.panel.config.scene.picker.headers.name': 'Name',
      'ui.panel.config.scene.picker.headers.show_info': 'Show information',
      'ui.panel.config.scene.picker.headers.edit': 'Edit',
      'ui.panel.config.scene.editor.introduction':
        'Use scenes to bring your home to life.',
      'ui.panel.config.scene.editor.default_name': 'New Scene',
      'ui.panel.config.scene.editor.load_error_not_editable':
        'Only scenes in scenes.yaml are editable.',
      'ui.panel.config.scene.editor.load_error_unknown':
        'Error loading scene ({err_no}).',
      'ui.panel.config.scene.editor.save': 'Save',
      'ui.panel.config.scene.editor.unsaved_confirm':
        'You have unsaved changes. Are you sure you want to leave?',
      'ui.panel.config.scene.editor.name': 'Name',
      'ui.panel.config.scene.editor.icon': 'Icon',
      'ui.panel.config.scene.editor.area': 'Area',
      'ui.panel.config.scene.editor.devices.header': 'Devices',
      'ui.panel.config.scene.editor.devices.introduction':
        'Add the devices that you want to be included in your scene. Set all the devices to the state you want for this scene.',
      'ui.panel.config.scene.editor.devices.add': 'Add a device',
      'ui.panel.config.scene.editor.devices.delete': 'Delete device',
      'ui.panel.config.scene.editor.entities.header': 'Entities',
      'ui.panel.config.scene.editor.entities.introduction':
        'Entities that do not belong to a device can be set here.',
      'ui.panel.config.scene.editor.entities.without_device':
        'Entities without device',
      'ui.panel.config.scene.editor.entities.device_entities':
        'If you add an entity that belongs to a device, the device will be added.',
      'ui.panel.config.scene.editor.entities.add': 'Add an entity',
      'ui.panel.config.scene.editor.entities.delete': 'Delete entity',
      'ui.panel.config.cloud.description_login': 'Logged in and connected',
      'ui.panel.config.cloud.description_not_login': 'Not logged in',
      'ui.panel.config.cloud.description_features':
        'Control home when away and integrate with Alexa and Google Assistant',
      'ui.panel.config.cloud.login.title': 'Cloud Login',
      'ui.panel.config.cloud.login.introduction':
        'Home Assistant Cloud provides you with a secure remote connection to your instance while away from home. It also allows you to connect with cloud-only services: Amazon Alexa and Google Assistant.',
      'ui.panel.config.cloud.login.introduction2':
        'This service is run by our partner ',
      'ui.panel.config.cloud.login.introduction2a':
        ', a company founded by the founders of Home Assistant.',
      'ui.panel.config.cloud.login.introduction3':
        'Home Assistant Cloud is a subscription service with a free one month trial. No payment information necessary.',
      'ui.panel.config.cloud.login.learn_more_link':
        'Learn more about Home Assistant Cloud',
      'ui.panel.config.cloud.login.dismiss': 'Dismiss',
      'ui.panel.config.cloud.login.sign_in': 'Sign in',
      'ui.panel.config.cloud.login.email': 'Email',
      'ui.panel.config.cloud.login.email_error_msg': 'Invalid email',
      'ui.panel.config.cloud.login.password': 'Password',
      'ui.panel.config.cloud.login.password_error_msg':
        'Passwords are at least 8 characters',
      'ui.panel.config.cloud.login.forgot_password': 'Forgot password?',
      'ui.panel.config.cloud.login.start_trial':
        'Start your free 1 month trial',
      'ui.panel.config.cloud.login.trial_info':
        'No payment information necessary',
      'ui.panel.config.cloud.login.alert_password_change_required':
        'You need to change your password before logging in.',
      'ui.panel.config.cloud.login.alert_email_confirm_necessary':
        'You need to confirm your email before logging in.',
      'ui.panel.config.cloud.forgot_password.title': 'Forgot password',
      'ui.panel.config.cloud.forgot_password.subtitle': 'Forgot your password',
      'ui.panel.config.cloud.forgot_password.instructions':
        'Enter your email address and we will send you a link to reset your password.',
      'ui.panel.config.cloud.forgot_password.email': 'Email',
      'ui.panel.config.cloud.forgot_password.email_error_msg': 'Invalid email',
      'ui.panel.config.cloud.forgot_password.send_reset_email':
        'Send reset email',
      'ui.panel.config.cloud.forgot_password.check_your_email':
        'Check your email for instructions on how to reset your password.',
      'ui.panel.config.cloud.register.title': 'Register Account',
      'ui.panel.config.cloud.register.headline': 'Start your free trial',
      'ui.panel.config.cloud.register.information':
        'Create an account to start your free one month trial with Home Assistant Cloud. No payment information necessary.',
      'ui.panel.config.cloud.register.information2':
        'The trial will give you access to all the benefits of Home Assistant Cloud, including:',
      'ui.panel.config.cloud.register.feature_remote_control':
        'Control of Home Assistant away from home',
      'ui.panel.config.cloud.register.feature_google_home':
        'Integration with Google Assistant',
      'ui.panel.config.cloud.register.feature_amazon_alexa':
        'Integration with Amazon Alexa',
      'ui.panel.config.cloud.register.feature_webhook_apps':
        'Easy integration with webhook-based apps like OwnTracks',
      'ui.panel.config.cloud.register.information3':
        'This service is run by our partner ',
      'ui.panel.config.cloud.register.information3a':
        ', a company founded by the founders of Home Assistant.',
      'ui.panel.config.cloud.register.information4':
        'By registering an account you agree to the following terms and conditions.',
      'ui.panel.config.cloud.register.link_terms_conditions':
        'Terms and Conditions',
      'ui.panel.config.cloud.register.link_privacy_policy': 'Privacy Policy',
      'ui.panel.config.cloud.register.create_account': 'Create Account',
      'ui.panel.config.cloud.register.email_address': 'Email address',
      'ui.panel.config.cloud.register.email_error_msg': 'Invalid email',
      'ui.panel.config.cloud.register.password': 'Password',
      'ui.panel.config.cloud.register.password_error_msg':
        'Passwords are at least 8 characters',
      'ui.panel.config.cloud.register.start_trial': 'Start Trial',
      'ui.panel.config.cloud.register.resend_confirm_email':
        'Resend confirmation email',
      'ui.panel.config.cloud.register.account_created':
        'Account created! Check your email for instructions on how to activate your account.',
      'ui.panel.config.cloud.account.thank_you_note':
        "Thank you for being part of Home Assistant Cloud. It's because of people like you that we are able to make a great home automation experience for everyone. Thank you!",
      'ui.panel.config.cloud.account.nabu_casa_account': 'Nabu Casa Account',
      'ui.panel.config.cloud.account.connection_status':
        'Cloud connection status',
      'ui.panel.config.cloud.account.manage_account': 'Manage Account',
      'ui.panel.config.cloud.account.sign_out': 'Sign out',
      'ui.panel.config.cloud.account.sign_out_confirm':
        'Are you sure you want to sign out?',
      'ui.panel.config.cloud.account.integrations': 'Integrations',
      'ui.panel.config.cloud.account.integrations_introduction':
        'Integrations for Home Assistant Cloud allow you to connect with services in the cloud without having to expose your Home Assistant instance publicly on the internet.',
      'ui.panel.config.cloud.account.integrations_introduction2':
        'Check the website for ',
      'ui.panel.config.cloud.account.integrations_link_all_features':
        ' all available features',
      'ui.panel.config.cloud.account.connected': 'Connected',
      'ui.panel.config.cloud.account.connecting': 'Connecting…',
      'ui.panel.config.cloud.account.not_connected': 'Not Connected',
      'ui.panel.config.cloud.account.fetching_subscription':
        'Fetching subscription…',
      'ui.panel.config.cloud.account.tts.title': 'Text to Speech',
      'ui.panel.config.cloud.account.tts.info':
        'Bring personality to your home by having it speak to you by using our Text-to-Speech services. You can use this in automations and scripts by using the {service} service.',
      'ui.panel.config.cloud.account.tts.default_language':
        'Default language to use',
      'ui.panel.config.cloud.account.tts.default_gender':
        'Default gender to use',
      'ui.panel.config.cloud.account.tts.male': 'Male',
      'ui.panel.config.cloud.account.tts.female': 'Female',
      'ui.panel.config.cloud.account.tts.try': 'Try',
      'ui.panel.config.cloud.account.tts.dialog.header': 'Try Text to Speech',
      'ui.panel.config.cloud.account.tts.dialog.example_message':
        'Hello {name}, you can play any text on any supported media player!',
      'ui.panel.config.cloud.account.tts.dialog.target': 'Target',
      'ui.panel.config.cloud.account.tts.dialog.target_browser': 'Browser',
      'ui.panel.config.cloud.account.tts.dialog.play': 'Play',
      'ui.panel.config.cloud.account.tts.dialog.create_automation':
        'Create Automation',
      'ui.panel.config.cloud.account.remote.title': 'Remote Control',
      'ui.panel.config.cloud.account.remote.connected': 'Connected',
      'ui.panel.config.cloud.account.remote.not_connected': 'Not Connected',
      'ui.panel.config.cloud.account.remote.reconnecting':
        'Not connected. Trying to reconnect.',
      'ui.panel.config.cloud.account.remote.access_is_being_prepared':
        "Remote control is being prepared. We will notify you when it's ready.",
      'ui.panel.config.cloud.account.remote.info':
        'Home Assistant Cloud provides a secure remote connection to your instance while away from home.',
      'ui.panel.config.cloud.account.remote.instance_is_available':
        'Your instance is available at',
      'ui.panel.config.cloud.account.remote.instance_will_be_available':
        'Your instance will be available at',
      'ui.panel.config.cloud.account.remote.link_learn_how_it_works':
        'Learn how it works',
      'ui.panel.config.cloud.account.remote.certificate_info':
        'Certificate Info',
      'ui.panel.config.cloud.account.alexa.title': 'Alexa',
      'ui.panel.config.cloud.account.alexa.info':
        "With the Alexa integration for Home Assistant Cloud you'll be able to control all your Home Assistant devices via any Alexa-enabled device.",
      'ui.panel.config.cloud.account.alexa.enable_ha_skill':
        'Enable the Home Assistant skill for Alexa',
      'ui.panel.config.cloud.account.alexa.config_documentation':
        'Configuration documentation',
      'ui.panel.config.cloud.account.alexa.enable_state_reporting':
        'Enable State Reporting',
      'ui.panel.config.cloud.account.alexa.info_state_reporting':
        'If you enable state reporting, Home Assistant will send all state changes of exposed entities to Amazon. This allows you to always see the latest states in the Alexa app and use the state changes to create routines.',
      'ui.panel.config.cloud.account.alexa.sync_entities':
        'Sync Entities to Amazon',
      'ui.panel.config.cloud.account.alexa.manage_entities': 'Manage Entities',
      'ui.panel.config.cloud.account.alexa.sync_entities_error':
        'Failed to sync entities:',
      'ui.panel.config.cloud.account.alexa.state_reporting_error':
        'Unable to {enable_disable} report state.',
      'ui.panel.config.cloud.account.alexa.enable': 'enable',
      'ui.panel.config.cloud.account.alexa.disable': 'disable',
      'ui.panel.config.cloud.account.alexa.not_configured_title':
        'Alexa is not activated',
      'ui.panel.config.cloud.account.alexa.not_configured_text':
        'Before you can use Alexa, you need to activate the Home Assistant skill for Alexa in the Alexa app.',
      'ui.panel.config.cloud.account.google.title': 'Google Assistant',
      'ui.panel.config.cloud.account.google.info':
        "With the Google Assistant integration for Home Assistant Cloud you'll be able to control all your Home Assistant devices via any Google Assistant-enabled device.",
      'ui.panel.config.cloud.account.google.http_use_ssl_warning_title':
        'Local communication unavailable',
      'ui.panel.config.cloud.account.google.http_use_ssl_warning_text':
        'Google devices will not be able to talk locally with Home Assistant because you have configured an SSL certificate for your HTTP integration.',
      'ui.panel.config.cloud.account.google.enable_ha_skill':
        'Activate the Home Assistant Cloud skill for Google Assistant',
      'ui.panel.config.cloud.account.google.config_documentation':
        'Configuration documentation',
      'ui.panel.config.cloud.account.google.enable_state_reporting':
        'Enable State Reporting',
      'ui.panel.config.cloud.account.google.info_state_reporting':
        'If you enable state reporting, Home Assistant will send all state changes of exposed entities to Google. This speeds up voice commands and allows you to always see the latest states in the Google app.',
      'ui.panel.config.cloud.account.google.security_devices':
        'Security Devices',
      'ui.panel.config.cloud.account.google.enter_pin_info':
        'Please enter a PIN to interact with security devices. Security devices are doors, garage doors and locks. You will be asked to say/enter this PIN when interacting with such devices via Google Assistant.',
      'ui.panel.config.cloud.account.google.devices_pin':
        'Security Devices PIN',
      'ui.panel.config.cloud.account.google.enter_pin_hint':
        'Enter a PIN to use security devices',
      'ui.panel.config.cloud.account.google.sync_entities':
        'Sync Entities to Google',
      'ui.panel.config.cloud.account.google.manage_entities': 'Manage Entities',
      'ui.panel.config.cloud.account.google.enter_pin_error':
        'Unable to store PIN:',
      'ui.panel.config.cloud.account.google.not_configured_title':
        'Google Assistant is not activated',
      'ui.panel.config.cloud.account.google.not_configured_text':
        'Before you can use Google Assistant, you need to activate the Home Assistant Cloud skill for Google Assistant in the Google Home app.',
      'ui.panel.config.cloud.account.google.sync_failed_title':
        'Syncing failed',
      'ui.panel.config.cloud.account.google.sync_failed_text':
        'Syncing your entities failed, try again or check the logs.',
      'ui.panel.config.cloud.account.webhooks.title': 'Webhooks',
      'ui.panel.config.cloud.account.webhooks.info':
        'Anything that is configured to be triggered by a webhook can be given a publicly accessible URL to allow you to send data back to Home Assistant from anywhere, without exposing your instance to the internet.',
      'ui.panel.config.cloud.account.webhooks.no_hooks_yet':
        'Looks like you have no webhooks yet. Get started by configuring a ',
      'ui.panel.config.cloud.account.webhooks.no_hooks_yet_link_integration':
        'webhook-based integration',
      'ui.panel.config.cloud.account.webhooks.no_hooks_yet2':
        ' or by creating a ',
      'ui.panel.config.cloud.account.webhooks.no_hooks_yet_link_automation':
        'webhook automation',
      'ui.panel.config.cloud.account.webhooks.link_learn_more':
        'Learn more about creating webhook-powered automations.',
      'ui.panel.config.cloud.account.webhooks.loading': 'Loading…',
      'ui.panel.config.cloud.account.webhooks.manage': 'Manage',
      'ui.panel.config.cloud.account.webhooks.disable_hook_error_msg':
        'Failed to disable webhook:',
      'ui.panel.config.cloud.alexa.title': 'Alexa',
      'ui.panel.config.cloud.alexa.banner':
        'Editing which entities are exposed via this UI is disabled because you have configured entity filters in configuration.yaml.',
      'ui.panel.config.cloud.alexa.exposed_entities': 'Exposed entities',
      'ui.panel.config.cloud.alexa.not_exposed_entities':
        'Not exposed entities',
      'ui.panel.config.cloud.alexa.manage_domains': 'Manage domains',
      'ui.panel.config.cloud.alexa.expose_entity': 'Expose entity',
      'ui.panel.config.cloud.alexa.dont_expose_entity': "Don't expose entity",
      'ui.panel.config.cloud.alexa.follow_domain': 'Follow domain',
      'ui.panel.config.cloud.alexa.exposed': '{selected} exposed',
      'ui.panel.config.cloud.alexa.not_exposed': '{selected} not exposed',
      'ui.panel.config.cloud.alexa.expose': 'Expose to Alexa',
      'ui.panel.config.cloud.dialog_certificate.certificate_information':
        'Certificate Information',
      'ui.panel.config.cloud.dialog_certificate.certificate_expiration_date':
        'Certificate expiration date:',
      'ui.panel.config.cloud.dialog_certificate.will_be_auto_renewed':
        'will be automatically renewed',
      'ui.panel.config.cloud.dialog_certificate.fingerprint':
        'Certificate fingerprint:',
      'ui.panel.config.cloud.dialog_certificate.close': 'Close',
      'ui.panel.config.cloud.google.title': 'Google Assistant',
      'ui.panel.config.cloud.google.expose': 'Expose to Google Assistant',
      'ui.panel.config.cloud.google.disable_2FA':
        'Disable two factor authentication',
      'ui.panel.config.cloud.google.banner':
        'Editing which entities are exposed via this UI is disabled because you have configured entity filters in configuration.yaml.',
      'ui.panel.config.cloud.google.exposed_entities': 'Exposed entities',
      'ui.panel.config.cloud.google.not_exposed_entities':
        'Not exposed entities',
      'ui.panel.config.cloud.google.manage_domains': 'Manage domains',
      'ui.panel.config.cloud.google.expose_entity': 'Expose entity',
      'ui.panel.config.cloud.google.dont_expose_entity': "Don't expose entity",
      'ui.panel.config.cloud.google.follow_domain': 'Follow domain',
      'ui.panel.config.cloud.google.exposed': '{selected} exposed',
      'ui.panel.config.cloud.google.not_exposed': '{selected} not exposed',
      'ui.panel.config.cloud.google.sync_to_google':
        'Synchronizing changes to Google.',
      'ui.panel.config.cloud.dialog_cloudhook.webhook_for':
        'Webhook for {name}',
      'ui.panel.config.cloud.dialog_cloudhook.available_at':
        'The webhook is available at the following URL:',
      'ui.panel.config.cloud.dialog_cloudhook.managed_by_integration':
        'This webhook is managed by an integration and cannot be disabled.',
      'ui.panel.config.cloud.dialog_cloudhook.info_disable_webhook':
        'If you no longer want to use this webhook, you can',
      'ui.panel.config.cloud.dialog_cloudhook.link_disable_webhook':
        'disable it',
      'ui.panel.config.cloud.dialog_cloudhook.view_documentation':
        'View documentation',
      'ui.panel.config.cloud.dialog_cloudhook.close': 'Close',
      'ui.panel.config.cloud.dialog_cloudhook.confirm_disable':
        'Are you sure you want to disable this webhook?',
      'ui.panel.config.cloud.dialog_cloudhook.copied_to_clipboard':
        'Copied to clipboard',
      'ui.panel.config.devices.add_prompt':
        'No {name} have been added using this {type} yet. You can add one by clicking the + button above.',
      'ui.panel.config.devices.caption': 'Devices',
      'ui.panel.config.devices.description': 'Manage configured devices',
      'ui.panel.config.devices.device_info': '{type} info',
      'ui.panel.config.devices.edit_settings': 'Edit settings',
      'ui.panel.config.devices.unnamed_device': 'Unnamed {type}',
      'ui.panel.config.devices.unknown_error': 'Unknown error',
      'ui.panel.config.devices.name': 'Name',
      'ui.panel.config.devices.update': 'Update',
      'ui.panel.config.devices.no_devices': 'No devices',
      'ui.panel.config.devices.enabled_label': 'Enable {type}',
      'ui.panel.config.devices.enabled_cause':
        'The {type} is disabled by {cause}.',
      'ui.panel.config.devices.disabled_by.user': 'User',
      'ui.panel.config.devices.disabled_by.integration': 'Integration',
      'ui.panel.config.devices.disabled_by.config_entry': 'Config entry',
      'ui.panel.config.devices.enabled_description':
        'Disabled devices will not be shown and entities belonging to the device will be disabled and not added to Home Assistant.',
      'ui.panel.config.devices.open_configuration_url_device': 'Visit device',
      'ui.panel.config.devices.open_configuration_url_service': 'Visit service',
      'ui.panel.config.devices.download_diagnostics': 'Download diagnostics',
      'ui.panel.config.devices.download_diagnostics_integration':
        'Download {integration} diagnostics',
      'ui.panel.config.devices.delete_device': 'Delete device',
      'ui.panel.config.devices.delete_device_integration':
        'Remove {integration} from device',
      'ui.panel.config.devices.type.device_heading': 'Device',
      'ui.panel.config.devices.type.device': 'device',
      'ui.panel.config.devices.type.service_heading': 'Service',
      'ui.panel.config.devices.type.service': 'service',
      'ui.panel.config.devices.automation.automations_heading': 'Automations',
      'ui.panel.config.devices.automation.automations': 'automations',
      'ui.panel.config.devices.automation.no_automations': 'No automations',
      'ui.panel.config.devices.automation.unknown_automation':
        'Unknown automation',
      'ui.panel.config.devices.automation.create':
        'Create automation with {type}',
      'ui.panel.config.devices.automation.create_disable':
        "Can't create automation with disabled {type}",
      'ui.panel.config.devices.automation.triggers.caption':
        'Do something when…',
      'ui.panel.config.devices.automation.triggers.no_triggers': 'No triggers',
      'ui.panel.config.devices.automation.triggers.unknown_trigger':
        'Unknown trigger',
      'ui.panel.config.devices.automation.conditions.caption':
        'Only do something if…',
      'ui.panel.config.devices.automation.conditions.no_conditions':
        'No conditions',
      'ui.panel.config.devices.automation.conditions.unknown_condition':
        'Unknown condition',
      'ui.panel.config.devices.automation.actions.caption':
        'When something is triggered…',
      'ui.panel.config.devices.automation.actions.no_actions': 'No actions',
      'ui.panel.config.devices.automation.actions.unknown_action':
        'Unknown action',
      'ui.panel.config.devices.automation.no_device_automations':
        'There are no automations available for this device.',
      'ui.panel.config.devices.script.scripts_heading': 'Scripts',
      'ui.panel.config.devices.script.scripts': 'scripts',
      'ui.panel.config.devices.script.no_scripts': 'No scripts',
      'ui.panel.config.devices.script.create': 'Create script with {type}',
      'ui.panel.config.devices.script.create_disable':
        "Can't create script with disabled {type}",
      'ui.panel.config.devices.scene.scenes_heading': 'Scenes',
      'ui.panel.config.devices.scene.scenes': 'scenes',
      'ui.panel.config.devices.scene.no_scenes': 'No scenes',
      'ui.panel.config.devices.scene.create': 'Create scene with {type}',
      'ui.panel.config.devices.scene.create_disable':
        "Can't create scene with disabled {type}",
      'ui.panel.config.devices.cant_edit':
        'You can only edit items that are created in the UI.',
      'ui.panel.config.devices.device_not_found': 'Device / service not found.',
      'ui.panel.config.devices.entities.entities': 'Entities',
      'ui.panel.config.devices.entities.control': 'Controls',
      'ui.panel.config.devices.entities.sensor': 'Sensors',
      'ui.panel.config.devices.entities.diagnostic': 'Diagnostic',
      'ui.panel.config.devices.entities.config': 'Configuration',
      'ui.panel.config.devices.entities.add_entities_lovelace':
        'Add to dashboard',
      'ui.panel.config.devices.entities.none': 'This device has no entities',
      'ui.panel.config.devices.entities.show_less': 'Show less',
      'ui.panel.config.devices.entities.hidden_entities':
        '+{count} {count, plural,\n  one {entity}\n  other {entities}\n} not shown',
      'ui.panel.config.devices.entities.hidden': 'Hidden',
      'ui.panel.config.devices.confirm_rename_entity_ids':
        'Do you also want to rename the entity IDs of your entities?',
      'ui.panel.config.devices.confirm_rename_entity_ids_warning':
        'This will not change any configuration (like automations, scripts, scenes, dashboards) that is currently using these entities! You will have to update them yourself to use the new entity IDs!',
      'ui.panel.config.devices.confirm_disable_config_entry':
        'There are no more devices for the config entry {entry_name}, do you want to instead disable the config entry?',
      'ui.panel.config.devices.update_device_error':
        'Updating the device failed',
      'ui.panel.config.devices.disabled': 'Disabled',
      'ui.panel.config.devices.data_table.device': 'Device',
      'ui.panel.config.devices.data_table.manufacturer': 'Manufacturer',
      'ui.panel.config.devices.data_table.model': 'Model',
      'ui.panel.config.devices.data_table.area': 'Area',
      'ui.panel.config.devices.data_table.integration': 'Integration',
      'ui.panel.config.devices.data_table.battery': 'Battery',
      'ui.panel.config.devices.data_table.disabled_by': 'Disabled',
      'ui.panel.config.devices.data_table.no_devices': 'No devices',
      'ui.panel.config.devices.data_table.no_integration': 'No integration',
      'ui.panel.config.devices.delete': 'Delete',
      'ui.panel.config.devices.confirm_delete':
        'Are you sure you want to delete this device?',
      'ui.panel.config.devices.picker.search': 'Search devices',
      'ui.panel.config.devices.picker.filter.filter': 'Filter',
      'ui.panel.config.devices.picker.filter.show_disabled':
        'Show disabled devices',
      'ui.panel.config.devices.picker.filter.hidden_devices':
        '{number} {number, plural,\n  one {device}\n  other {devices}\n} not shown',
      'ui.panel.config.devices.picker.filter.show_all': 'Show all',
      'ui.panel.config.entities.caption': 'Entities',
      'ui.panel.config.entities.description': 'Manage known entities',
      'ui.panel.config.entities.picker.header': 'Entities',
      'ui.panel.config.entities.picker.introduction':
        'Home Assistant keeps a registry of every entity it has ever seen that can be uniquely identified. Each of these entities will have an entity ID assigned which will be reserved for just this entity.',
      'ui.panel.config.entities.picker.introduction2':
        'Use the entity registry to override the name, change the entity ID or remove the entry from Home Assistant.',
      'ui.panel.config.entities.picker.search': 'Search entities',
      'ui.panel.config.entities.picker.filter.filter': 'Filter',
      'ui.panel.config.entities.picker.filter.show_hidden':
        'Show hidden entities',
      'ui.panel.config.entities.picker.filter.show_disabled':
        'Show disabled entities',
      'ui.panel.config.entities.picker.filter.show_unavailable':
        'Show unavailable entities',
      'ui.panel.config.entities.picker.filter.show_readonly':
        'Show read-only entities',
      'ui.panel.config.entities.picker.filter.hidden_entities':
        '{number} {number, plural,\n  one {entity}\n  other {entities}\n} not shown',
      'ui.panel.config.entities.picker.filter.show_all': 'Show all',
      'ui.panel.config.entities.picker.status.restored': 'Restored',
      'ui.panel.config.entities.picker.status.unavailable': 'Unavailable',
      'ui.panel.config.entities.picker.status.disabled': 'Disabled',
      'ui.panel.config.entities.picker.status.readonly': 'Read-only',
      'ui.panel.config.entities.picker.status.hidden': 'Hidden',
      'ui.panel.config.entities.picker.status.ok': 'Ok',
      'ui.panel.config.entities.picker.headers.state_icon': 'State icon',
      'ui.panel.config.entities.picker.headers.name': 'Name',
      'ui.panel.config.entities.picker.headers.entity_id': 'Entity ID',
      'ui.panel.config.entities.picker.headers.integration': 'Integration',
      'ui.panel.config.entities.picker.headers.area': 'Area',
      'ui.panel.config.entities.picker.headers.disabled_by': 'Disabled by',
      'ui.panel.config.entities.picker.headers.status': 'Status',
      'ui.panel.config.entities.picker.selected': '{number} selected',
      'ui.panel.config.entities.picker.enable_selected.button':
        'Enable selected',
      'ui.panel.config.entities.picker.enable_selected.confirm_title':
        'Do you want to enable {number} {number, plural,\n  one {entity}\n  other {entities}\n}?',
      'ui.panel.config.entities.picker.enable_selected.confirm_text':
        'This will make them available in Home Assistant again if they are now disabled.',
      'ui.panel.config.entities.picker.disable_selected.button':
        'Disable selected',
      'ui.panel.config.entities.picker.disable_selected.confirm_title':
        'Do you want to disable {number} {number, plural,\n  one {entity}\n  other {entities}\n}?',
      'ui.panel.config.entities.picker.disable_selected.confirm_text':
        'Disabled entities will not be added to Home Assistant.',
      'ui.panel.config.entities.picker.remove_selected.button':
        'Remove selected',
      'ui.panel.config.entities.picker.remove_selected.confirm_title':
        'Do you want to remove {number} {number, plural,\n  one {entity}\n  other {entities}\n}?',
      'ui.panel.config.entities.picker.remove_selected.confirm_partly_title':
        'Only {number} {number, plural,\n  one {selected entity}\n  other {selected entities}\n} can be removed.',
      'ui.panel.config.entities.picker.remove_selected.confirm_text':
        'You should remove them from your dashboard config and automations if they contain these entities.',
      'ui.panel.config.entities.picker.remove_selected.confirm_partly_text':
        'You can only remove {removable} of the selected {selected} entities. Entities can only be removed when the integration is no longer providing the entities. Sometimes you have to restart Home Assistant before you can remove the entities of a removed integration. Are you sure you want to remove the removable entities?',
      'ui.panel.config.entities.picker.hide_selected.button': 'Hide selected',
      'ui.panel.config.entities.picker.hide_selected.confirm_title':
        'Do you want to hide {number} {number, plural,\n  one {entity}\n  other {entities}\n}?',
      'ui.panel.config.entities.picker.hide_selected.confirm_text':
        'Hidden entities will not be shown on your dashboard. Their history is still tracked and you can still interact with them with services.',
      'ui.panel.config.person.caption': 'People',
      'ui.panel.config.person.description':
        'Manage the people that Home Assistant tracks',
      'ui.panel.config.person.introduction':
        'Here you can add each person of interest in Home Assistant.',
      'ui.panel.config.person.note_about_persons_configured_in_yaml':
        'People configured via configuration.yaml cannot be edited via the UI.',
      'ui.panel.config.person.learn_more': 'Learn more about people',
      'ui.panel.config.person.no_persons_created_yet':
        'Looks like you have not added any people yet.',
      'ui.panel.config.person.create_person': 'Create Person',
      'ui.panel.config.person.add_person': 'Add Person',
      'ui.panel.config.person.confirm_delete':
        'Are you sure you want to delete this person?',
      'ui.panel.config.person.confirm_delete2':
        'All devices belonging to this person will become unassigned.',
      'ui.panel.config.person.person_not_found_title': 'Person Not Found',
      'ui.panel.config.person.person_not_found':
        "We couldn't find the person you were trying to edit.",
      'ui.panel.config.person.detail.new_person': 'New Person',
      'ui.panel.config.person.detail.name': 'Name',
      'ui.panel.config.person.detail.name_error_msg': 'Name is required',
      'ui.panel.config.person.detail.linked_user': 'Linked User',
      'ui.panel.config.person.detail.device_tracker_intro':
        'Select the devices that belong to this person.',
      'ui.panel.config.person.detail.no_device_tracker_available_intro':
        'When you have devices that indicate the presence of a person, you will be able to assign them to a person here. You can add your first device by adding a presence-detection integration from the integrations page.',
      'ui.panel.config.person.detail.link_presence_detection_integrations':
        'Presence Detection Integrations',
      'ui.panel.config.person.detail.link_integrations_page':
        'Integrations page',
      'ui.panel.config.person.detail.device_tracker_picked': 'Track Device',
      'ui.panel.config.person.detail.device_tracker_pick':
        'Pick device to track',
      'ui.panel.config.person.detail.delete': 'Delete',
      'ui.panel.config.person.detail.create': 'Create',
      'ui.panel.config.person.detail.update': 'Update',
      'ui.panel.config.person.detail.confirm_delete_user':
        'Are you sure you want to delete the user account for {name}? You can still track the user, but the person will no longer be able to login.',
      'ui.panel.config.person.detail.admin': 'Administrator',
      'ui.panel.config.person.detail.local_only':
        'Can only log in from the local network',
      'ui.panel.config.person.detail.allow_login': 'Allow person to login',
      'ui.panel.config.zone.caption': 'Zones',
      'ui.panel.config.zone.description':
        'Manage the zones you want to track people in',
      'ui.panel.config.zone.introduction':
        'Zones allow you to specify certain regions on earth. When a person is within a zone, the state will take the name from the zone. Zones can also be used as a trigger or condition inside automation setups.',
      'ui.panel.config.zone.no_zones_created_yet':
        'Looks like you have not added any zones yet.',
      'ui.panel.config.zone.create_zone': 'Add Zone',
      'ui.panel.config.zone.add_zone': 'Add Zone',
      'ui.panel.config.zone.edit_zone': 'Edit Zone',
      'ui.panel.config.zone.edit_home': 'Edit Home',
      'ui.panel.config.zone.confirm_delete':
        'Are you sure you want to delete this zone?',
      'ui.panel.config.zone.can_not_edit': 'Unable to edit zone',
      'ui.panel.config.zone.configured_in_yaml':
        'Zones configured via configuration.yaml cannot be edited via the UI.',
      'ui.panel.config.zone.edit_home_zone':
        "The radius of the Home zone can't be edited from the frontend yet. Drag the marker on the map to move the home zone.",
      'ui.panel.config.zone.edit_home_zone_narrow':
        "The radius of the Home zone can't be edited from the frontend yet. The location can be changed from the general configuration.",
      'ui.panel.config.zone.go_to_core_config': 'Go to general configuration?',
      'ui.panel.config.zone.home_zone_core_config':
        "The location of your home zone is editable from the general configuration page. The radius of the Home zone can't be edited from the frontend yet. Do you want to go to the general configuration?",
      'ui.panel.config.zone.detail.new_zone': 'New Zone',
      'ui.panel.config.zone.detail.name': 'Name',
      'ui.panel.config.zone.detail.icon': 'Icon',
      'ui.panel.config.zone.detail.icon_error_msg':
        "Icon should be in the format ''prefix:iconname'', for example: ''mdi:home''",
      'ui.panel.config.zone.detail.radius': 'Radius',
      'ui.panel.config.zone.detail.latitude': 'Latitude',
      'ui.panel.config.zone.detail.longitude': 'Longitude',
      'ui.panel.config.zone.detail.passive': 'Passive',
      'ui.panel.config.zone.detail.passive_note':
        'Passive zones are hidden in the frontend and are not used as location for device trackers. This is useful if you just want to use it for automations.',
      'ui.panel.config.zone.detail.required_error_msg':
        'This field is required',
      'ui.panel.config.zone.detail.delete': 'Delete',
      'ui.panel.config.zone.detail.create': 'Add',
      'ui.panel.config.zone.detail.update': 'Update',
      'ui.panel.config.zone.core_location_dialog': 'Home Assistant Location',
      'ui.panel.config.integrations.caption': 'Integrations',
      'ui.panel.config.integrations.description':
        'Manage integrations with services or devices',
      'ui.panel.config.integrations.integration': 'integration',
      'ui.panel.config.integrations.discovered': 'Discovered',
      'ui.panel.config.integrations.attention': 'Attention required',
      'ui.panel.config.integrations.configured': 'Configured',
      'ui.panel.config.integrations.new': 'Set up a new integration',
      'ui.panel.config.integrations.confirm_new':
        'Do you want to set up {integration}?',
      'ui.panel.config.integrations.add_integration': 'Add integration',
      'ui.panel.config.integrations.no_integrations':
        "Seems like you don't have any integrations configured yet. Click on the button below to add your first integration!",
      'ui.panel.config.integrations.note_about_integrations':
        'No integrations matched your search, the integration you want to set up might not be available to set up via the UI yet.',
      'ui.panel.config.integrations.note_about_website_reference':
        'More are available on the ',
      'ui.panel.config.integrations.home_assistant_website':
        'Home Assistant website',
      'ui.panel.config.integrations.configure': 'Configure',
      'ui.panel.config.integrations.reconfigure': 'Reconfigure',
      'ui.panel.config.integrations.none': 'Nothing configured yet',
      'ui.panel.config.integrations.none_found': 'No integrations found',
      'ui.panel.config.integrations.none_found_detail':
        'Adjust your search criteria.',
      'ui.panel.config.integrations.integration_not_found':
        'Integration not found.',
      'ui.panel.config.integrations.details': 'Integration details',
      'ui.panel.config.integrations.rename_dialog':
        'Edit the name of this config entry',
      'ui.panel.config.integrations.rename_input_label': 'Entry name',
      'ui.panel.config.integrations.search': 'Search integrations',
      'ui.panel.config.integrations.add_zwave_js_device': 'Add Z-Wave device',
      'ui.panel.config.integrations.add_zha_device': 'Add Zigbee device',
      'ui.panel.config.integrations.disable.show_disabled':
        'Show disabled integrations',
      'ui.panel.config.integrations.disable.disabled_integrations':
        '{number} disabled',
      'ui.panel.config.integrations.disable.show': 'Show',
      'ui.panel.config.integrations.ignore.ignore': 'Ignore',
      'ui.panel.config.integrations.ignore.confirm_ignore_title':
        'Ignore discovery of {name}?',
      'ui.panel.config.integrations.ignore.confirm_ignore':
        "Are you sure you don't want to set up this integration? You can undo this by clicking the 'Show ignored integrations' in the overflow menu on the top right.",
      'ui.panel.config.integrations.ignore.show_ignored':
        'Show ignored integrations',
      'ui.panel.config.integrations.ignore.ignored': 'Ignored',
      'ui.panel.config.integrations.ignore.confirm_delete_ignore_title':
        'Stop ignoring {name}?',
      'ui.panel.config.integrations.ignore.confirm_delete_ignore':
        'This will make the integration appear in your discovered integrations again when it gets discovered. This might require a restart or take some time.',
      'ui.panel.config.integrations.ignore.stop_ignore': 'Stop ignoring',
      'ui.panel.config.integrations.config_entry.devices':
        '{count} {count, plural,\n  one {device}\n  other {devices}\n}',
      'ui.panel.config.integrations.config_entry.entities':
        '{count} {count, plural,\n  one {entity}\n  other {entities}\n}',
      'ui.panel.config.integrations.config_entry.services':
        '{count} {count, plural,\n  one {service}\n  other {services}\n}',
      'ui.panel.config.integrations.config_entry.rename': 'Rename',
      'ui.panel.config.integrations.config_entry.configure': 'Configure',
      'ui.panel.config.integrations.config_entry.system_options':
        'System options',
      'ui.panel.config.integrations.config_entry.documentation':
        'Documentation',
      'ui.panel.config.integrations.config_entry.download_diagnostics':
        'Download diagnostics',
      'ui.panel.config.integrations.config_entry.known_issues': 'Known issues',
      'ui.panel.config.integrations.config_entry.delete': 'Delete',
      'ui.panel.config.integrations.config_entry.delete_confirm':
        'Are you sure you want to delete the {title} integration?',
      'ui.panel.config.integrations.config_entry.reload': 'Reload',
      'ui.panel.config.integrations.config_entry.restart_confirm':
        'Restart Home Assistant to finish removing this integration',
      'ui.panel.config.integrations.config_entry.reload_confirm':
        'The integration was reloaded',
      'ui.panel.config.integrations.config_entry.reload_restart_confirm':
        'Restart Home Assistant to finish reloading this integration',
      'ui.panel.config.integrations.config_entry.disable_restart_confirm':
        'Restart Home Assistant to finish disabling this integration',
      'ui.panel.config.integrations.config_entry.enable_restart_confirm':
        'Restart Home Assistant to finish enabling this integration',
      'ui.panel.config.integrations.config_entry.disable_error':
        'Enabling or disabling of the integration failed',
      'ui.panel.config.integrations.config_entry.manuf': 'by {manufacturer}',
      'ui.panel.config.integrations.config_entry.via': 'Connected via',
      'ui.panel.config.integrations.config_entry.firmware':
        'Firmware: {version}',
      'ui.panel.config.integrations.config_entry.hardware':
        'Hardware: {version}',
      'ui.panel.config.integrations.config_entry.version': 'Version: {version}',
      'ui.panel.config.integrations.config_entry.unnamed_entry':
        'Unnamed entry',
      'ui.panel.config.integrations.config_entry.unknown_via_device':
        'Unknown device',
      'ui.panel.config.integrations.config_entry.area': 'In {area}',
      'ui.panel.config.integrations.config_entry.no_area': 'No Area',
      'ui.panel.config.integrations.config_entry.not_loaded': 'Not loaded',
      'ui.panel.config.integrations.config_entry.check_the_logs':
        'Check the logs',
      'ui.panel.config.integrations.config_entry.disable.disabled': 'Disabled',
      'ui.panel.config.integrations.config_entry.disable.disabled_cause':
        'Disabled by {cause}',
      'ui.panel.config.integrations.config_entry.disable.disabled_by.user':
        'user',
      'ui.panel.config.integrations.config_entry.disable.disabled_by.integration':
        'integration',
      'ui.panel.config.integrations.config_entry.disable.disabled_by.device':
        'device',
      'ui.panel.config.integrations.config_entry.disable.disable_confirm':
        'Are you sure you want to disable this config entry? Its devices and entities will be disabled.',
      'ui.panel.config.integrations.config_entry.provided_by_custom_integration':
        'Provided by a custom integration',
      'ui.panel.config.integrations.config_entry.depends_on_cloud':
        'Depends on the cloud',
      'ui.panel.config.integrations.config_entry.disabled_polling':
        'Automatic polling for updated data disabled',
      'ui.panel.config.integrations.config_entry.state.loaded': 'Loaded',
      'ui.panel.config.integrations.config_entry.state.setup_error':
        'Failed to set up',
      'ui.panel.config.integrations.config_entry.state.migration_error':
        'Migration error',
      'ui.panel.config.integrations.config_entry.state.setup_retry':
        'Retrying setup',
      'ui.panel.config.integrations.config_entry.state.not_loaded':
        'Not loaded',
      'ui.panel.config.integrations.config_entry.state.failed_unload':
        'Failed to unload',
      'ui.panel.config.integrations.config_entry.open_configuration_url':
        'Visit device',
      'ui.panel.config.integrations.config_flow.success': 'Success',
      'ui.panel.config.integrations.config_flow.aborted': 'Aborted',
      'ui.panel.config.integrations.config_flow.close': 'Close',
      'ui.panel.config.integrations.config_flow.dismiss': 'Dismiss dialog',
      'ui.panel.config.integrations.config_flow.finish': 'Finish',
      'ui.panel.config.integrations.config_flow.submit': 'Submit',
      'ui.panel.config.integrations.config_flow.next': 'Next',
      'ui.panel.config.integrations.config_flow.found_following_devices':
        'We found the following devices',
      'ui.panel.config.integrations.config_flow.no_config_flow':
        'This integration does not support configuration via the UI. If you followed this link from the Home Assistant website, make sure you run the latest version of Home Assistant.',
      'ui.panel.config.integrations.config_flow.not_all_required_fields':
        'Not all required fields are filled in.',
      'ui.panel.config.integrations.config_flow.error_saving_area':
        'Error saving area: {error}',
      'ui.panel.config.integrations.config_flow.created_config':
        'Created configuration for {name}.',
      'ui.panel.config.integrations.config_flow.external_step.description':
        'This step requires you to visit an external website to be completed.',
      'ui.panel.config.integrations.config_flow.external_step.open_site':
        'Open website',
      'ui.panel.config.integrations.config_flow.pick_flow_step.title':
        'We discovered these, want to set them up?',
      'ui.panel.config.integrations.config_flow.pick_flow_step.new_flow':
        'No, set up an other instance of {integration}',
      'ui.panel.config.integrations.config_flow.loading.loading_flow':
        'Please wait while {integration} is being setup',
      'ui.panel.config.integrations.config_flow.loading.loading_step':
        'Loading next step for {integration}',
      'ui.panel.config.integrations.config_flow.loading.fallback_title':
        'the integration',
      'ui.panel.config.integrations.config_flow.error': 'Error',
      'ui.panel.config.integrations.config_flow.could_not_load':
        'Config flow could not be loaded',
      'ui.panel.config.integrations.config_flow.not_loaded':
        'The integration could not be loaded, try to restart Home Assistant.',
      'ui.panel.config.users.caption': 'Users',
      'ui.panel.config.users.description':
        'Manage the Home Assistant user accounts',
      'ui.panel.config.users.users_privileges_note':
        "The user group feature is a work in progress. The user will be unable to administer the instance via the UI. We're still auditing all management API endpoints to ensure that they correctly limit access to administrators.",
      'ui.panel.config.users.is_not_active': 'Disabled',
      'ui.panel.config.users.is_system': 'System user',
      'ui.panel.config.users.is_local': 'Local user',
      'ui.panel.config.users.is_owner': 'Owner',
      'ui.panel.config.users.picker.headers.name': 'Display name',
      'ui.panel.config.users.picker.headers.username': 'Username',
      'ui.panel.config.users.picker.headers.group': 'Group',
      'ui.panel.config.users.picker.headers.system': 'System',
      'ui.panel.config.users.picker.headers.is_active': 'Active',
      'ui.panel.config.users.picker.headers.local': 'Local',
      'ui.panel.config.users.picker.headers.icon': 'Icon',
      'ui.panel.config.users.picker.add_user': 'Add user',
      'ui.panel.config.users.editor.caption': 'View user',
      'ui.panel.config.users.editor.name': 'Display name',
      'ui.panel.config.users.editor.username': 'Username',
      'ui.panel.config.users.editor.change_password': 'Change password',
      'ui.panel.config.users.editor.new_password': 'New Password',
      'ui.panel.config.users.editor.password_changed':
        'Password was changed successfully',
      'ui.panel.config.users.editor.activate_user': 'Activate user',
      'ui.panel.config.users.editor.deactivate_user': 'Deactivate user',
      'ui.panel.config.users.editor.delete_user': 'Delete user',
      'ui.panel.config.users.editor.update_user': 'Update',
      'ui.panel.config.users.editor.id': 'ID',
      'ui.panel.config.users.editor.owner': 'Owner',
      'ui.panel.config.users.editor.admin': 'Administrator',
      'ui.panel.config.users.editor.group': 'Group',
      'ui.panel.config.users.editor.active': 'Active',
      'ui.panel.config.users.editor.local_only':
        'Can only log in from the local network',
      'ui.panel.config.users.editor.system_generated': 'System user',
      'ui.panel.config.users.editor.system_generated_users_not_removable':
        'Unable to remove system users.',
      'ui.panel.config.users.editor.system_generated_users_not_editable':
        'Unable to update system users.',
      'ui.panel.config.users.editor.unnamed_user': 'Unnamed User',
      'ui.panel.config.users.editor.confirm_user_deletion':
        'Are you sure you want to delete {name}?',
      'ui.panel.config.users.editor.active_tooltip':
        'Controls if user can login',
      'ui.panel.config.users.add_user.caption': 'Add user',
      'ui.panel.config.users.add_user.password': 'Password',
      'ui.panel.config.users.add_user.password_confirm': 'Confirm Password',
      'ui.panel.config.users.add_user.password_not_match':
        "Passwords don't match",
      'ui.panel.config.users.add_user.local_only': 'Local only',
      'ui.panel.config.users.add_user.create': 'Create',
      'ui.panel.config.mqtt.title': 'MQTT',
      'ui.panel.config.mqtt.description_publish': 'Publish a packet',
      'ui.panel.config.mqtt.topic': 'topic',
      'ui.panel.config.mqtt.payload': 'Payload (template allowed)',
      'ui.panel.config.mqtt.publish': 'Publish',
      'ui.panel.config.mqtt.description_listen': 'Listen to a topic',
      'ui.panel.config.mqtt.listening_to': 'Listening to',
      'ui.panel.config.mqtt.subscribe_to': 'Topic to subscribe to',
      'ui.panel.config.mqtt.start_listening': 'Start listening',
      'ui.panel.config.mqtt.stop_listening': 'Stop listening',
      'ui.panel.config.mqtt.message_received':
        'Message {id} received on {topic} at {time}:',
      'ui.panel.config.zha.common.clusters': 'Clusters',
      'ui.panel.config.zha.common.manufacturer_code_override':
        'Manufacturer Code Override',
      'ui.panel.config.zha.common.value': 'Value',
      'ui.panel.config.zha.configuration_page.shortcuts_title': 'Shortcuts',
      'ui.panel.config.zha.configuration_page.update_button':
        'Update Configuration',
      'ui.panel.config.zha.add_device_page.spinner':
        'Searching for Zigbee devices…',
      'ui.panel.config.zha.add_device_page.pairing_mode':
        'Make sure your devices are in pairing mode. Check the instructions of your device on how to do this.',
      'ui.panel.config.zha.add_device_page.discovered_text':
        'Devices will show up here once discovered.',
      'ui.panel.config.zha.add_device_page.no_devices_found':
        'No devices were found, make sure they are in pairing mode and keep them awake while Home Assistant is searching.',
      'ui.panel.config.zha.add_device_page.search_again': 'Search Again',
      'ui.panel.config.zha.add_device': 'Add Device',
      'ui.panel.config.zha.clusters.header': 'Clusters',
      'ui.panel.config.zha.clusters.help_cluster_dropdown':
        'Select a cluster to view attributes and commands.',
      'ui.panel.config.zha.clusters.introduction':
        'Clusters are the building blocks for Zigbee functionality. They separate functionality into logical units. There are client and server types and that are comprised of attributes and commands.',
      'ui.panel.config.zha.cluster_attributes.header': 'Cluster Attributes',
      'ui.panel.config.zha.cluster_attributes.introduction':
        'View and edit cluster attributes.',
      'ui.panel.config.zha.cluster_attributes.attributes_of_cluster':
        'Attributes of the selected cluster',
      'ui.panel.config.zha.cluster_attributes.get_zigbee_attribute':
        'Get Zigbee Attribute',
      'ui.panel.config.zha.cluster_attributes.set_zigbee_attribute':
        'Set Zigbee Attribute',
      'ui.panel.config.zha.cluster_attributes.help_attribute_dropdown':
        'Select an attribute to view or set its value.',
      'ui.panel.config.zha.cluster_attributes.help_get_zigbee_attribute':
        'Get the value for the selected attribute.',
      'ui.panel.config.zha.cluster_attributes.help_set_zigbee_attribute':
        'Set attribute value for the specified cluster on the specified entity.',
      'ui.panel.config.zha.cluster_commands.header': 'Cluster Commands',
      'ui.panel.config.zha.cluster_commands.introduction':
        'View and issue cluster commands.',
      'ui.panel.config.zha.cluster_commands.commands_of_cluster':
        'Commands of the selected cluster',
      'ui.panel.config.zha.cluster_commands.issue_zigbee_command':
        'Issue Zigbee Command',
      'ui.panel.config.zha.cluster_commands.help_command_dropdown':
        'Select a command to interact with.',
      'ui.panel.config.zha.device_pairing_card.PAIRED': 'Device Found',
      'ui.panel.config.zha.device_pairing_card.PAIRED_status_text':
        'Starting Interview',
      'ui.panel.config.zha.device_pairing_card.INTERVIEW_COMPLETE':
        'Interview Complete',
      'ui.panel.config.zha.device_pairing_card.INTERVIEW_COMPLETE_status_text':
        'Configuring',
      'ui.panel.config.zha.device_pairing_card.CONFIGURED':
        'Configuration Complete',
      'ui.panel.config.zha.device_pairing_card.CONFIGURED_status_text':
        'Initializing',
      'ui.panel.config.zha.device_pairing_card.INITIALIZED':
        'Initialization Complete',
      'ui.panel.config.zha.device_pairing_card.INITIALIZED_status_text':
        'The device is ready to use',
      'ui.panel.config.zha.network.caption': 'Network',
      'ui.panel.config.zha.groups.add_group': 'Create Group',
      'ui.panel.config.zha.groups.caption': 'Groups',
      'ui.panel.config.zha.groups.groups': 'Groups',
      'ui.panel.config.zha.groups.group_id': 'Group ID',
      'ui.panel.config.zha.groups.members': 'Devices',
      'ui.panel.config.zha.groups.group_info': 'Group Information',
      'ui.panel.config.zha.groups.group_details':
        'Here are all the details for the selected Zigbee group.',
      'ui.panel.config.zha.groups.group_not_found': 'Group not found!',
      'ui.panel.config.zha.groups.add_members': 'Add Devices',
      'ui.panel.config.zha.groups.remove_members': 'Remove Device',
      'ui.panel.config.zha.groups.removing_members': 'Removing Devices',
      'ui.panel.config.zha.groups.create_group_details':
        'Enter the required details to create a new Zigbee group',
      'ui.panel.config.zha.groups.group_name_placeholder': 'Group Name',
      'ui.panel.config.zha.groups.create_group': 'Create Group',
      'ui.panel.config.zha.groups.create': 'Create Group',
      'ui.panel.config.zha.groups.creating_group': 'Creating Group',
      'ui.panel.config.zha.groups.delete': 'Delete Group',
      'ui.panel.config.zha.visualization.header': 'Network Visualization',
      'ui.panel.config.zha.visualization.caption': 'Visualization',
      'ui.panel.config.zha.visualization.highlight_label': 'Highlight Devices',
      'ui.panel.config.zha.visualization.zoom_label': 'Zoom To Device',
      'ui.panel.config.zha.visualization.auto_zoom': 'Auto Zoom',
      'ui.panel.config.zha.visualization.enable_physics': 'Enable Physics',
      'ui.panel.config.zha.visualization.refresh_topology': 'Refresh Topology',
      'ui.panel.config.zha.group_binding.header': 'Group Binding',
      'ui.panel.config.zha.group_binding.introduction':
        'Bind and unbind groups.',
      'ui.panel.config.zha.group_binding.group_picker_label': 'Bindable Groups',
      'ui.panel.config.zha.group_binding.group_picker_help':
        'Select a group to issue a bind command.',
      'ui.panel.config.zha.group_binding.cluster_selection_help':
        'Select clusters to bind to the selected group.',
      'ui.panel.config.zha.group_binding.bind_button_label': 'Bind Group',
      'ui.panel.config.zha.group_binding.unbind_button_label': 'Unbind Group',
      'ui.panel.config.zha.group_binding.bind_button_help':
        'Bind the selected group to the selected device clusters.',
      'ui.panel.config.zha.group_binding.unbind_button_help':
        'Unbind the selected group from the selected device clusters.',
      'ui.panel.config.zwave_js.navigation.network': 'Network',
      'ui.panel.config.zwave_js.navigation.logs': 'Logs',
      'ui.panel.config.zwave_js.common.network': 'Network',
      'ui.panel.config.zwave_js.common.node_id': 'Device ID',
      'ui.panel.config.zwave_js.common.home_id': 'Home ID',
      'ui.panel.config.zwave_js.common.source': 'Source',
      'ui.panel.config.zwave_js.common.back': 'Back',
      'ui.panel.config.zwave_js.common.add_node': 'Add device',
      'ui.panel.config.zwave_js.common.remove_node': 'Remove device',
      'ui.panel.config.zwave_js.common.reconfigure_server':
        'Re-configure Server',
      'ui.panel.config.zwave_js.common.heal_network': 'Heal Network',
      'ui.panel.config.zwave_js.common.in_progress_inclusion_exclusion':
        'Z-Wave JS is searching for devices',
      'ui.panel.config.zwave_js.common.cancel_inclusion_exclusion':
        'Stop Searching',
      'ui.panel.config.zwave_js.dashboard.header': 'Manage your Z-Wave Network',
      'ui.panel.config.zwave_js.dashboard.introduction':
        'Manage your Z-Wave network and Z-Wave devices',
      'ui.panel.config.zwave_js.dashboard.driver_version': 'Driver Version',
      'ui.panel.config.zwave_js.dashboard.server_version': 'Server Version',
      'ui.panel.config.zwave_js.dashboard.home_id': 'Home ID',
      'ui.panel.config.zwave_js.dashboard.server_url': 'Server URL',
      'ui.panel.config.zwave_js.dashboard.devices':
        '{count} {count, plural,\n  one {device}\n  other {devices}\n}',
      'ui.panel.config.zwave_js.dashboard.provisioned_devices':
        'Provisioned devices',
      'ui.panel.config.zwave_js.dashboard.not_ready': '{count} not ready',
      'ui.panel.config.zwave_js.device_info.zwave_info': 'Z-Wave Info',
      'ui.panel.config.zwave_js.device_info.node_status': 'Device Status',
      'ui.panel.config.zwave_js.device_info.node_ready': 'Device Ready',
      'ui.panel.config.zwave_js.device_info.device_config': 'Configure Device',
      'ui.panel.config.zwave_js.device_info.reinterview_device':
        'Re-interview Device',
      'ui.panel.config.zwave_js.device_info.heal_node': 'Heal Device',
      'ui.panel.config.zwave_js.device_info.remove_failed':
        'Remove Failed Device',
      'ui.panel.config.zwave_js.device_info.highest_security':
        'Highest Security',
      'ui.panel.config.zwave_js.device_info.unknown': 'Unknown',
      'ui.panel.config.zwave_js.device_info.zwave_plus': 'Z-Wave Plus',
      'ui.panel.config.zwave_js.device_info.zwave_plus_version':
        'Version {version}',
      'ui.panel.config.zwave_js.node_config.header':
        'Z-Wave Device Configuration',
      'ui.panel.config.zwave_js.node_config.introduction':
        'Manage and adjust device specific configuration parameters for the selected device',
      'ui.panel.config.zwave_js.node_config.attribution':
        'Device configuration parameters and descriptions are provided by the {device_database}',
      'ui.panel.config.zwave_js.node_config.zwave_js_device_database':
        'Z-Wave JS Device Database',
      'ui.panel.config.zwave_js.node_config.battery_device_notice':
        'Battery devices must be awake to update their config. Please refer to your device manual for instructions on how to wake the device.',
      'ui.panel.config.zwave_js.node_config.parameter_is_read_only':
        'This parameter is read-only.',
      'ui.panel.config.zwave_js.node_config.error_device_not_found':
        'Device not found',
      'ui.panel.config.zwave_js.node_config.set_param_accepted':
        'The parameter has been updated.',
      'ui.panel.config.zwave_js.node_config.set_param_queued':
        'The parameter change has been queued, and will be updated when the device wakes up.',
      'ui.panel.config.zwave_js.node_config.set_param_error':
        'An error occurred.',
      'ui.panel.config.zwave_js.node_config.parameter': 'Parameter',
      'ui.panel.config.zwave_js.node_status.unknown': 'Unknown',
      'ui.panel.config.zwave_js.node_status.asleep': 'Asleep',
      'ui.panel.config.zwave_js.node_status.awake': 'Awake',
      'ui.panel.config.zwave_js.node_status.dead': 'Dead',
      'ui.panel.config.zwave_js.node_status.alive': 'Alive',
      'ui.panel.config.zwave_js.network_status.connected': 'Connected',
      'ui.panel.config.zwave_js.network_status.connecting': 'Connecting',
      'ui.panel.config.zwave_js.network_status.unknown': 'Unknown',
      'ui.panel.config.zwave_js.add_node.title': 'Add a Z-Wave Device',
      'ui.panel.config.zwave_js.add_node.searching_device':
        'Searching for devices…',
      'ui.panel.config.zwave_js.add_node.follow_device_instructions':
        'Follow the directions that came with your device to trigger pairing on the device.',
      'ui.panel.config.zwave_js.add_node.choose_inclusion_strategy':
        'How do you want to add your device',
      'ui.panel.config.zwave_js.add_node.qr_code': 'QR Code',
      'ui.panel.config.zwave_js.add_node.qr_code_paragraph':
        'If your device supports SmartStart you can scan the QR code for easy pairing.',
      'ui.panel.config.zwave_js.add_node.scan_qr_code': 'Scan QR code',
      'ui.panel.config.zwave_js.add_node.inclusion_failed':
        'The device could not be added.',
      'ui.panel.config.zwave_js.add_node.check_logs':
        'Please check the logs for more information.',
      'ui.panel.config.zwave_js.add_node.inclusion_finished':
        'The device has been added.',
      'ui.panel.config.zwave_js.add_node.provisioning_finished':
        'The device has been added. Once you power it on, it will become available.',
      'ui.panel.config.zwave_js.add_node.view_device': 'View Device',
      'ui.panel.config.zwave_js.add_node.interview_started':
        'The device is being interviewed. This may take some time.',
      'ui.panel.config.zwave_js.add_node.interview_failed':
        'The device interview failed. Additional information may be available in the logs.',
      'ui.panel.config.zwave_js.provisioned.dsk': 'DSK',
      'ui.panel.config.zwave_js.provisioned.security_classes':
        'Security classes',
      'ui.panel.config.zwave_js.provisioned.unprovison': 'Unprovison',
      'ui.panel.config.zwave_js.provisioned.included': 'Included',
      'ui.panel.config.zwave_js.provisioned.not_included': 'Not Included',
      'ui.panel.config.zwave_js.provisioned.confirm_unprovision_title':
        'Are you sure you want to unprovision the device?',
      'ui.panel.config.zwave_js.provisioned.confirm_unprovision_text':
        'If you unprovision the device it will not be added to Home Assistant when it is powered on. If it is already added to Home Assistant, removing the provisioned device will not remove it from Home Assistant.',
      'ui.panel.config.zwave_js.security_classes.None.title': 'None',
      'ui.panel.config.zwave_js.security_classes.S2_Unauthenticated.title':
        'S2 Unauthenticated',
      'ui.panel.config.zwave_js.security_classes.S2_Unauthenticated.description':
        'Like S2 Authenticated, but without verification that the correct device is included',
      'ui.panel.config.zwave_js.security_classes.S2_Authenticated.title':
        'S2 Authenticated',
      'ui.panel.config.zwave_js.security_classes.S2_Authenticated.description':
        'Example: Lighting, Sensors and Security Systems',
      'ui.panel.config.zwave_js.security_classes.S2_AccessControl.title':
        'S2 Access Control',
      'ui.panel.config.zwave_js.security_classes.S2_AccessControl.description':
        'Example: Door Locks and Garage Doors',
      'ui.panel.config.zwave_js.security_classes.S0_Legacy.title': 'S0 Legacy',
      'ui.panel.config.zwave_js.security_classes.S0_Legacy.description':
        'Example: Legacy Door Locks without S2 support',
      'ui.panel.config.zwave_js.remove_node.title': 'Remove a Z-Wave device',
      'ui.panel.config.zwave_js.remove_node.introduction':
        'Remove a device from your Z-Wave network, and remove the associated device and entities from Home Assistant.',
      'ui.panel.config.zwave_js.remove_node.start_exclusion': 'Start Exclusion',
      'ui.panel.config.zwave_js.remove_node.cancel_exclusion':
        'Cancel Exclusion',
      'ui.panel.config.zwave_js.remove_node.controller_in_exclusion_mode':
        'Your Z-Wave controller is now in exclusion mode.',
      'ui.panel.config.zwave_js.remove_node.follow_device_instructions':
        'Follow the directions that came with your device to trigger exclusion on the device.',
      'ui.panel.config.zwave_js.remove_node.exclusion_failed':
        'The device could not be removed. Please check the logs for more information.',
      'ui.panel.config.zwave_js.remove_node.exclusion_finished':
        'Device {id} has been removed from your Z-Wave network.',
      'ui.panel.config.zwave_js.remove_failed_node.title':
        'Remove a Failed Z-Wave Device',
      'ui.panel.config.zwave_js.remove_failed_node.introduction':
        'Remove a failed device from your Z-Wave network. Use this if you are unable to exclude a device normally because it is broken.',
      'ui.panel.config.zwave_js.remove_failed_node.remove_device':
        'Remove Device',
      'ui.panel.config.zwave_js.remove_failed_node.in_progress':
        'The device removal is in progress.',
      'ui.panel.config.zwave_js.remove_failed_node.removal_finished':
        'Device {id} has been removed from your Z-Wave network.',
      'ui.panel.config.zwave_js.remove_failed_node.removal_failed':
        'The device could not be removed from your Z-Wave network.',
      'ui.panel.config.zwave_js.reinterview_node.title':
        'Re-interview a Z-Wave Device',
      'ui.panel.config.zwave_js.reinterview_node.introduction':
        'Re-interview a device on your Z-Wave network. Use this feature if your device has missing or incorrect functionality.',
      'ui.panel.config.zwave_js.reinterview_node.battery_device_warning':
        "You will need to wake battery powered devices before starting the re-interview. Refer to your device's manual for instructions on how to wake the device.",
      'ui.panel.config.zwave_js.reinterview_node.run_in_background':
        'You can close this dialog and the interview will continue in the background.',
      'ui.panel.config.zwave_js.reinterview_node.start_reinterview':
        'Start Re-interview',
      'ui.panel.config.zwave_js.reinterview_node.in_progress':
        'The device is being interviewed. This may take some time.',
      'ui.panel.config.zwave_js.reinterview_node.interview_failed':
        'The device interview failed. Additional information may be available in the logs.',
      'ui.panel.config.zwave_js.reinterview_node.interview_complete':
        'Device interview complete.',
      'ui.panel.config.zwave_js.heal_network.title': 'Heal your Z-Wave Network',
      'ui.panel.config.zwave_js.heal_network.introduction':
        'Start a network heal on your Z-Wave network. A network heal will cause all devices to re-calculate their routes back to the controller and is recommended if you have recently moved devices or your controller.',
      'ui.panel.config.zwave_js.heal_network.traffic_warning':
        'The healing process generates a large amount of traffic on the Z-Wave network. This may cause devices to respond slowly (or not at all) while the heal is in progress.',
      'ui.panel.config.zwave_js.heal_network.start_heal': 'Start Healing',
      'ui.panel.config.zwave_js.heal_network.in_progress':
        'Network healing is in progress. This will take some time.',
      'ui.panel.config.zwave_js.heal_network.run_in_background':
        'You can close this dialog and the network healing will continue in the background.',
      'ui.panel.config.zwave_js.heal_network.stop_heal': 'Stop Healing',
      'ui.panel.config.zwave_js.heal_network.healing_complete':
        'Network healing is complete.',
      'ui.panel.config.zwave_js.heal_network.healing_failed':
        'Healing failed. Additional information may be available in the logs.',
      'ui.panel.config.zwave_js.heal_network.healing_cancelled':
        'Network healing has been cancelled.',
      'ui.panel.config.zwave_js.heal_node.title': 'Heal a Z-Wave Device',
      'ui.panel.config.zwave_js.heal_node.introduction':
        'Tell {device} to update its routes back to the controller. This can help with communication issues if you have recently moved the device or your controller.',
      'ui.panel.config.zwave_js.heal_node.traffic_warning':
        'The healing process generates a large amount of traffic on the Z-Wave network. This may cause devices to respond slowly (or not at all) while the heal is in progress.',
      'ui.panel.config.zwave_js.heal_node.start_heal': 'Heal Device',
      'ui.panel.config.zwave_js.heal_node.healing_failed':
        '{device} could not be healed.',
      'ui.panel.config.zwave_js.heal_node.healing_failed_check_logs':
        'Additional information may be available in the logs.',
      'ui.panel.config.zwave_js.heal_node.healing_complete':
        '{device} has been healed.',
      'ui.panel.config.zwave_js.heal_node.in_progress':
        '{device} healing is in progress.',
      'ui.panel.config.zwave_js.heal_node.network_heal_in_progress':
        'A Z-Wave network heal is already in progress. Please wait for it to finish before healing an individual device.',
      'ui.panel.config.zwave_js.logs.title': 'Z-Wave JS Logs',
      'ui.panel.config.zwave_js.logs.log_level': 'Log Level',
      'ui.panel.config.zwave_js.logs.subscribed_to_logs':
        'Subscribed to Z-Wave JS Log Messages…',
      'ui.panel.config.zwave_js.logs.log_level_changed':
        'Log Level changed to: {level}',
      'ui.panel.config.zwave_js.logs.download_logs': 'Download logs',
      'ui.panel.config.tips.tip': 'Tip!',
      'ui.panel.config.tips.join':
        'Join the community on our {forums}, {twitter}, {discord}, {blog} or {newsletter}',
      'ui.panel.config.analytics.caption': 'Analytics',
      'ui.panel.config.analytics.description':
        'Learn how to share data to improve Home Assistant',
      'ui.panel.config.network.caption': 'Network',
      'ui.panel.config.network.description': 'External access {state}',
      'ui.panel.config.network.enabled': 'enabled',
      'ui.panel.config.network.disabled': 'disabled',
      'ui.panel.config.network.supervisor.title':
        'Configure network interfaces',
      'ui.panel.config.network.supervisor.connected_to': 'Connected to {ssid}',
      'ui.panel.config.network.supervisor.scan_ap': 'Scan for access points',
      'ui.panel.config.network.supervisor.open': 'Open',
      'ui.panel.config.network.supervisor.wep': 'WEP',
      'ui.panel.config.network.supervisor.wpa': 'wpa-psk',
      'ui.panel.config.network.supervisor.warning':
        'If you are changing the Wi-Fi, IP or gateway addresses, you might lose the connection!',
      'ui.panel.config.network.supervisor.static': 'Static',
      'ui.panel.config.network.supervisor.dhcp': 'DHCP',
      'ui.panel.config.network.supervisor.disabled': 'Disabled',
      'ui.panel.config.network.supervisor.ip_netmask': 'IP address/Netmask',
      'ui.panel.config.network.supervisor.gateway': 'Gateway address',
      'ui.panel.config.network.supervisor.dns_servers': 'DNS Servers',
      'ui.panel.config.network.supervisor.unsaved':
        'You have unsaved changes, these will get lost if you change tabs, do you want to continue?',
      'ui.panel.config.network.supervisor.failed_to_change':
        'Failed to change network settings',
      'ui.panel.config.storage.caption': 'Storage',
      'ui.panel.config.storage.description':
        '{percent_used} used - {free_space} free',
      'ui.panel.config.storage.used_space': 'Used Space',
      'ui.panel.config.storage.emmc_lifetime_used': 'eMMC Lifetime Used',
      'ui.panel.config.storage.datadisk.title': 'Move datadisk',
      'ui.panel.config.storage.datadisk.description':
        "You are currently using ''{current_path}'' as datadisk. Moving data disks will reboot your device and it's estimated to take {time} minutes. Your Home Assistant installation will not be accessible during this period. Do not disconnect the power during the move!",
      'ui.panel.config.storage.datadisk.select_device': 'Select new datadisk',
      'ui.panel.config.storage.datadisk.no_devices':
        'No suitable attached devices found',
      'ui.panel.config.storage.datadisk.moving_desc':
        'Rebooting and moving datadisk. Please have patience',
      'ui.panel.config.storage.datadisk.moving': 'Moving datadisk',
      'ui.panel.config.storage.datadisk.loading_devices': 'Loading devices',
      'ui.panel.config.storage.datadisk.cancel': 'Cancel',
      'ui.panel.config.storage.datadisk.failed_to_move':
        'Failed to move datadisk',
      'ui.panel.config.storage.datadisk.move': 'Move',
      'ui.panel.config.system_health.caption': 'System Health',
      'ui.panel.config.system_health.description':
        'Status, metrics and integration startup time',
      'ui.panel.config.system_health.cpu_usage': 'Processor Usage',
      'ui.panel.config.system_health.ram_usage': 'Memory Usage',
      'ui.panel.config.system_health.core_stats': 'Core Metrics',
      'ui.panel.config.system_health.supervisor_stats': 'Supervisor Metrics',
      'ui.panel.config.system_health.integration_start_time':
        'Integration Startup Time',
      'ui.panel.config.system_dashboard.confirm_restart_text':
        'Restarting Home Assistant will stop all your active dashboards, automations and scripts.',
      'ui.panel.config.system_dashboard.confirm_restart_title':
        'Restart Home Assistant?',
      'ui.panel.config.system_dashboard.restart_homeassistant_short': 'Restart',
      'ui.panel.config.system_dashboard.restart_error':
        'Failed to restart Home Assistant',
      'component.humidifier.title': 'Humidifier',
      'component.script.title': 'Script',
      'component.onboarding.title': 'Home Assistant Onboarding',
      'component.tts.title': 'Text-to-Speech (TTS)',
      'component.input_datetime.title': 'Input datetime',
      'component.input_boolean.title': 'Input boolean',
      'component.hue.title': 'Philips Hue',
      'component.blueprint.title': 'Blueprint',
      'component.rpi_power.title': 'Raspberry Pi Power Supply Checker',
      'component.binary_sensor.title': 'Binary sensor',
      'component.default_config.title': 'Default Config',
      'component.recorder.title': 'Recorder',
      'component.usb.title': 'USB Discovery',
      'component.apple_tv.title': 'Apple TV',
      'component.number.title': 'Number',
      'component.device_automation.title': 'Device Automation',
      'component.device_tracker.title': 'Device tracker',
      'component.config.title': 'Configuration',
      'component.system_health.title': 'System Health',
      'component.automation.title': 'Automation',
      'component.lifx.title': 'LIFX',
      'component.zone.title': 'Zone',
      'component.lovelace.title': 'Dashboards',
      'component.logbook.title': 'Logbook',
      'component.system_log.title': 'System Log',
      'component.select.title': 'Select',
      'component.update.title': 'Update',
      'component.timer.title': 'Timer',
      'component.media_player.title': 'Media player',
      'component.dhcp.title': 'DHCP Discovery',
      'component.trace.title': 'Trace',
      'component.homeassistant.title': 'Home Assistant Core Integration',
      'component.counter.title': 'Counter',
      'component.input_select.title': 'Input select',
      'component.http.title': 'HTTP',
      'component.ffmpeg.title': 'FFmpeg',
      'component.frontend.title': 'Home Assistant Frontend',
      'component.spotify.title': 'Spotify',
      'component.light.title': 'Light',
      'component.ssdp.title': 'Simple Service Discovery Protocol (SSDP)',
      'component.energy.title': 'Energy',
      'component.climate.title': 'Climate',
      'component.websocket_api.title': 'Home Assistant WebSocket API',
      'component.input_text.title': 'Input text',
      'component.remote.title': 'Remote',
      'component.mobile_app.title': 'Mobile App',
      'component.panel_custom.title': 'Custom Panel',
      'component.input_button.title': 'Input Button',
      'component.notify.title': 'Notifications',
      'component.hassio.title': 'Home Assistant Supervisor',
      'component.hacs.title': 'HACS',
      'component.analytics.title': 'Analytics',
      'component.ecobee.title': 'ecobee',
      'component.scene.title': 'Scene',
      'component.map.title': 'Map',
      'component.person.title': 'Person',
      'component.weather.title': 'Weather',
      'component.deebot.title': 'Deebot 4 Home Assistant',
      'component.zeroconf.title': 'Zero-configuration networking (zeroconf)',
      'component.vacuum.title': 'Vacuum',
      'component.upnp.title': 'UPnP/IGD',
      'component.history.title': 'History',
      'component.sun.title': 'Sun',
      'component.tag.title': 'Tag',
      'component.input_number.title': 'Input number',
      'component.image.title': 'Image',
      'component.persistent_notification.title': 'Persistent Notification',
      'component.button.title': 'Button',
      'component.media_source.title': 'Media Source',
      'component.stream.title': 'Stream',
      'component.api.title': 'Home Assistant API',
      'component.homekit.title': 'HomeKit',
      'component.cloud.title': 'Home Assistant Cloud',
      'component.network.title': 'Network Configuration',
      'component.camera.title': 'Camera',
      'component.search.title': 'Search',
      'component.my.title': 'My Home Assistant',
      'component.auth.title': 'Auth',
      'component.diagnostics.title': 'Diagnostics',
      'component.webhook.title': 'Webhook',
      'component.switch.title': 'Switch',
      'component.sensor.title': 'Sensor',
      'component.version.title': 'Version',
      'component.generic.title': 'Generic Camera',
      'component.owntracks.title': 'OwnTracks',
      'component.directv.title': 'DirecTV',
      'component.opentherm_gw.title': 'OpenTherm Gateway',
      'component.flume.title': 'Flume',
      'component.mutesync.title': 'mutesync',
      'component.twentemilieu.title': 'Twente Milieu',
      'component.omnilogic.title': 'Hayward Omnilogic',
      'component.freedompro.title': 'Freedompro',
      'component.shopping_list.title': 'Shopping List',
      'component.switchbot.title': 'SwitchBot',
      'component.panasonic_viera.title': 'Panasonic Viera',
      'component.mikrotik.title': 'Mikrotik',
      'component.notion.title': 'Notion',
      'component.trafikverket_weatherstation.title':
        'Trafikverket Weather Station',
      'component.sma.title': 'SMA Solar',
      'component.airly.title': 'Airly',
      'component.amberelectric.title': 'Amber Electric',
      'component.pvoutput.title': 'PVOutput',
      'component.braviatv.title': 'Sony Bravia TV',
      'component.airnow.title': 'AirNow',
      'component.rachio.title': 'Rachio',
      'component.tailscale.title': 'Tailscale',
      'component.airthings.title': 'Airthings',
      'component.plum_lightpad.title': 'Plum Lightpad',
      'component.aseko_pool_live.title': 'Aseko Pool Live',
      'component.logi_circle.title': 'Logi Circle',
      'component.intellifire.title': 'IntelliFire',
      'component.coinbase.title': 'Coinbase',
      'component.cpuspeed.title': 'CPU Speed',
      'component.gogogate2.title': 'Gogogate2 and ismartgate',
      'component.arcam_fmj.title': 'Arcam FMJ Receivers',
      'component.melcloud.title': 'MELCloud',
      'component.eafm.title': 'Environment Agency Flood Gauges',
      'component.tibber.title': 'Tibber',
      'component.meteo_france.title': 'Météo-France',
      'component.gdacs.title':
        'Global Disaster Alert and Coordination System (GDACS)',
      'component.deluge.title': 'Deluge',
      'component.unifi.title': 'UniFi Network',
      'component.iqvia.title': 'IQVIA',
      'component.elgato.title': 'Elgato Light',
      'component.atag.title': 'Atag',
      'component.srp_energy.title': 'SRP Energy',
      'component.luftdaten.title': 'Sensor.Community',
      'component.nzbget.title': 'NZBGet',
      'component.sms.title': 'SMS notifications via GSM-modem',
      'component.acmeda.title': 'Rollease Acmeda Automate',
      'component.vlc_telnet.title': 'VLC media player via Telnet',
      'component.twinkly.title': 'Twinkly',
      'component.spider.title': 'Itho Daalderop Spider',
      'component.picnic.title': 'Picnic',
      'component.coronavirus.title': 'Coronavirus (COVID-19)',
      'component.nanoleaf.title': 'Nanoleaf',
      'component.mailgun.title': 'Mailgun',
      'component.nexia.title': 'Nexia/American Standard/Trane',
      'component.guardian.title': 'Elexa Guardian',
      'component.philips_js.title': 'Philips TV',
      'component.epson.title': 'Epson',
      'component.geofency.title': 'Geofency',
      'component.derivative.title': 'Derivative sensor',
      'component.elmax.title': 'Elmax Cloud Setup',
      'component.knx.title': 'KNX',
      'component.youless.title': 'YouLess',
      'component.radio_browser.title': 'Radio Browser',
      'component.locative.title': 'Locative',
      'component.overkiz.title': 'Overkiz (by Somfy)',
      'component.cert_expiry.title': 'Certificate Expiry',
      'component.myq.title': 'MyQ',
      'component.abode.title': 'Abode',
      'component.webostv.title': 'LG webOS Smart TV',
      'component.ondilo_ico.title': 'Ondilo ICO',
      'component.venstar.title': 'Venstar',
      'component.yale_smart_alarm.title': 'Yale Smart Living',
      'component.co2signal.title': 'CO2 Signal',
      'component.rainforest_eagle.title': 'Rainforest Eagle',
      'component.fronius.title': 'Fronius',
      'component.openuv.title': 'OpenUV',
      'component.awair.title': 'Awair',
      'component.juicenet.title': 'JuiceNet',
      'component.honeywell.title': 'Honeywell Total Connect Comfort (US)',
      'component.crownstone.title': 'Crownstone',
      'component.androidtv.title': 'Android TV',
      'component.fritzbox_callmonitor.title': 'AVM FRITZ!Box Call Monitor',
      'component.starline.title': 'StarLine',
      'component.homematicip_cloud.title': 'HomematicIP Cloud',
      'component.xiaomi_aqara.title': 'Xiaomi Gateway (Aqara)',
      'component.airzone.title': 'Airzone',
      'component.samsungtv.title': 'Samsung Smart TV',
      'component.geonetnz_quakes.title': 'GeoNet NZ Quakes',
      'component.ezviz.title': 'Ezviz',
      'component.flunearyou.title': 'Flu Near You',
      'component.ios.title': 'Home Assistant iOS',
      'component.nam.title': 'Nettigo Air Monitor',
      'component.sabnzbd.title': 'SABnzbd',
      'component.fjaraskupan.title': 'Fjäråskupan',
      'component.speedtestdotnet.title': 'Speedtest.net',
      'component.esphome.title': 'ESPHome',
      'component.toon.title': 'Toon',
      'component.flux_led.title': 'Magic Home',
      'component.vallox.title': 'Vallox',
      'component.dexcom.title': 'Dexcom',
      'component.zwave_js.title': 'Z-Wave JS',
      'component.dunehd.title': 'Dune HD',
      'component.ovo_energy.title': 'OVO Energy',
      'component.wiffi.title': 'Wiffi',
      'component.solax.title': 'SolaX Power',
      'component.litterrobot.title': 'Litter-Robot',
      'component.dialogflow.title': 'Dialogflow',
      'component.sonarr.title': 'Sonarr',
      'component.meater.title': 'Meater',
      'component.geonetnz_volcano.title': 'GeoNet NZ Volcano',
      'component.simplisafe.title': 'SimpliSafe',
      'component.nmap_tracker.title': 'Nmap Tracker',
      'component.ipp.title': 'Internet Printing Protocol (IPP)',
      'component.tankerkoenig.title': 'Tankerkoenig',
      'component.poolsense.title': 'PoolSense',
      'component.aurora.title': 'NOAA Aurora Sensor',
      'component.wled.title': 'WLED',
      'component.neato.title': 'Neato Botvac',
      'component.harmony.title': 'Logitech Harmony Hub',
      'component.netgear.title': 'NETGEAR',
      'component.doorbird.title': 'DoorBird',
      'component.rainmachine.title': 'RainMachine',
      'component.environment_canada.title': 'Environment Canada',
      'component.rituals_perfume_genie.title': 'Rituals Perfume Genie',
      'component.nuheat.title': 'NuHeat',
      'component.vilfo.title': 'Vilfo Router',
      'component.almond.title': 'Almond',
      'component.transmission.title': 'Transmission',
      'component.vulcan.title': 'Uonet+ Vulcan',
      'component.sonos.title': 'Sonos',
      'component.filesize.title': 'Filesize',
      'component.moehlenhoff_alpha2.title': 'Möhlenhoff Alpha2',
      'component.ambee.title': 'Ambee',
      'component.syncthing.title': 'Syncthing',
      'component.hunterdouglas_powerview.title': 'Hunter Douglas PowerView',
      'component.kraken.title': 'Kraken',
      'component.asuswrt.title': 'ASUSWRT',
      'component.fibaro.title': 'Fibaro',
      'component.cast.title': 'Google Cast',
      'component.open_meteo.title': 'Open-Meteo',
      'component.netatmo.title': 'Netatmo',
      'component.bsblan.title': 'BSB-Lan',
      'component.oncue.title': 'Oncue by Kohler',
      'component.octoprint.title': 'OctoPrint',
      'component.nfandroidtv.title': 'Notifications for Android TV / Fire TV',
      'component.alarmdecoder.title': 'AlarmDecoder',
      'component.faa_delays.title': 'FAA Delays',
      'component.icloud.title': 'Apple iCloud',
      'component.huisbaasje.title': 'Huisbaasje',
      'component.smarttub.title': 'SmartTub',
      'component.pure_energie.title': 'Pure Energie',
      'component.peco.title': 'PECO Outage Counter',
      'component.bmw_connected_drive.title': 'BMW Connected Drive',
      'component.mill.title': 'Mill',
      'component.keenetic_ndms2.title': 'Keenetic NDMS2 Router',
      'component.iss.title': 'International Space Station (ISS)',
      'component.smhi.title': 'SMHI',
      'component.emonitor.title': 'SiteSage Emonitor',
      'component.enocean.title': 'EnOcean',
      'component.whirlpool.title': 'Whirlpool Sixth Sense',
      'component.github.title': 'GitHub',
      'component.tod.title': 'Times of the Day Sensor',
      'component.roku.title': 'Roku',
      'component.smappee.title': 'Smappee',
      'component.fivem.title': 'FiveM',
      'component.agent_dvr.title': 'Agent DVR',
      'component.yamaha_musiccast.title': 'MusicCast',
      'component.ipma.title': 'Instituto Português do Mar e Atmosfera (IPMA)',
      'component.squeezebox.title': 'Squeezebox (Logitech Media Server)',
      'component.discord.title': 'Discord',
      'component.aurora_abb_powerone.title': 'Aurora ABB PowerOne Solar PV',
      'component.plex.title': 'Plex Media Server',
      'component.hyperion.title': 'Hyperion',
      'component.gios.title': 'GIOŚ',
      'component.openweathermap.title': 'OpenWeatherMap',
      'component.onvif.title': 'ONVIF',
      'component.group.title': 'Group',
      'component.wilight.title': 'WiLight',
      'component.totalconnect.title': 'Total Connect',
      'component.switcher_kis.title': 'Switcher',
      'component.isy994.title': 'Universal Devices ISY994',
      'component.qnap_qsw.title': 'QNAP QSW',
      'component.watttime.title': 'WattTime',
      'component.vera.title': 'Vera',
      'component.vesync.title': 'VeSync',
      'component.ridwell.title': 'Ridwell',
      'component.wolflink.title': 'Wolf SmartSet Service',
      'component.xiaomi_miio.title': 'Xiaomi Miio',
      'component.nest.title': 'Nest',
      'component.plugwise.title': 'Plugwise',
      'component.hlk_sw16.title': 'Hi-Link HLK-SW16',
      'component.homekit_controller.title': 'HomeKit Controller',
      'component.foscam.title': 'Foscam',
      'component.progettihwsw.title': 'ProgettiHWSW Automation',
      'component.surepetcare.title': 'Sure Petcare',
      'component.soma.title': 'Soma Connect',
      'component.screenlogic.title': 'Pentair ScreenLogic',
      'component.tesla_wall_connector.title': 'Tesla Wall Connector',
      'component.dlna_dmr.title': 'DLNA Digital Media Renderer',
      'component.risco.title': 'Risco',
      'component.izone.title': 'iZone',
      'component.advantage_air.title': 'Advantage Air',
      'component.traccar.title': 'Traccar',
      'component.home_connect.title': 'Home Connect',
      'component.roomba.title': 'iRobot Roomba and Braava',
      'component.blebox.title': 'BleBox devices',
      'component.tasmota.title': 'Tasmota',
      'component.zwave_me.title': 'Z-Wave.Me',
      'component.forecast_solar.title': 'Forecast.Solar',
      'component.flick_electric.title': 'Flick Electric',
      'component.devolo_home_control.title': 'devolo Home Control',
      'component.adguard.title': 'AdGuard Home',
      'component.launch_library.title': 'Launch Library',
      'component.forked_daapd.title': 'forked-daapd',
      'component.met_eireann.title': 'Met Éireann',
      'component.volumio.title': 'Volumio',
      'component.cloudflare.title': 'Cloudflare',
      'component.habitica.title': 'Habitica',
      'component.life360.title': 'Life360',
      'component.lyric.title': 'Honeywell Lyric',
      'component.pvpc_hourly_pricing.title':
        'Spain electricity hourly pricing (PVPC)',
      'component.axis.title': 'Axis',
      'component.elkm1.title': 'Elk-M1 Control',
      'component.tile.title': 'Tile',
      'component.rdw.title': 'RDW',
      'component.local_ip.title': 'Local IP Address',
      'component.islamic_prayer_times.title': 'Islamic Prayer Times',
      'component.iotawatt.title': 'IoTaWatt',
      'component.tractive.title': 'Tractive',
      'component.bond.title': 'Bond',
      'component.litejet.title': 'LiteJet',
      'component.dsmr.title': 'DSMR Slimme Meter',
      'component.season.title': 'Season',
      'component.twilio.title': 'Twilio',
      'component.roon.title': 'RoonLabs music player',
      'component.unifiprotect.title': 'UniFi Protect',
      'component.trafikverket_train.title': 'Trafikverket Train',
      'component.lutron_caseta.title': 'Lutron Caséta',
      'component.brother.title': 'Brother Printer',
      'component.onewire.title': '1-Wire',
      'component.nuki.title': 'Nuki',
      'component.sia.title': 'SIA Alarm Systems',
      'component.google_travel_time.title': 'Google Maps Travel Time',
      'component.tplink.title': 'TP-Link Kasa Smart',
      'component.flo.title': 'Flo',
      'component.hvv_departures.title': 'HVV Departures',
      'component.blink.title': 'Blink',
      'component.ring.title': 'Ring',
      'component.adax.title': 'Adax',
      'component.insteon.title': 'Insteon',
      'component.homewizard.title': 'HomeWizard Energy',
      'component.uptimerobot.title': 'UptimeRobot',
      'component.profiler.title': 'Profiler',
      'component.min_max.title': 'Min / max / mean / median sensor',
      'component.slimproto.title': 'SlimProto (Squeezebox players)',
      'component.lookin.title': 'LOOKin',
      'component.vicare.title': 'Viessmann ViCare',
      'component.whois.title': 'Whois',
      'component.stookalert.title': 'RIVM Stookalert',
      'component.yeelight.title': 'Yeelight',
      'component.kodi.title': 'Kodi',
      'component.bosch_shc.title': 'Bosch SHC',
      'component.rfxtrx.title': 'RFXCOM RFXtrx',
      'component.august.title': 'August',
      'component.syncthru.title': 'Samsung SyncThru Printer',
      'component.sensibo.title': 'Sensibo',
      'component.monoprice.title': 'Monoprice 6-Zone Amplifier',
      'component.ambiclimate.title': 'Ambiclimate',
      'component.zerproc.title': 'Zerproc',
      'component.denonavr.title': 'Denon AVR Network Receivers',
      'component.synology_dsm.title': 'Synology DSM',
      'component.aussie_broadband.title': 'Aussie Broadband',
      'component.dynalite.title': 'Philips Dynalite',
      'component.garages_amsterdam.title': 'Garages Amsterdam',
      'component.hisense_aehw4a1.title': 'Hisense AEH-W4A1',
      'component.konnected.title': 'Konnected.io',
      'component.jellyfin.title': 'Jellyfin',
      'component.rtsp_to_webrtc.title': 'RTSPtoWebRTC',
      'component.accuweather.title': 'AccuWeather',
      'component.mysensors.title': 'MySensors',
      'component.tuya.title': 'Tuya',
      'component.somfy_mylink.title': 'Somfy MyLink',
      'component.econet.title': 'Rheem EcoNet Products',
      'component.modern_forms.title': 'Modern Forms',
      'component.sentry.title': 'Sentry',
      'component.nws.title': 'National Weather Service (NWS)',
      'component.kulersky.title': 'Kuler Sky',
      'component.google.title': 'Google Calendars',
      'component.coolmaster.title': 'CoolMasterNet',
      'component.minecraft_server.title': 'Minecraft Server',
      'component.trafikverket_ferry.title': 'Trafikverket Ferry',
      'component.system_bridge.title': 'System Bridge',
      'component.ps4.title': 'Sony PlayStation 4',
      'component.pi_hole.title': 'Pi-hole',
      'component.nightscout.title': 'Nightscout',
      'component.fritzbox.title': 'AVM FRITZ!SmartHome',
      'component.subaru.title': 'Subaru',
      'component.withings.title': 'Withings',
      'component.tellduslive.title': 'Telldus Live',
      'component.powerwall.title': 'Tesla Powerwall',
      'component.efergy.title': 'Efergy',
      'component.mjpeg.title': 'MJPEG IP Camera',
      'component.daikin.title': 'Daikin AC',
      'component.point.title': 'Minut Point',
      'component.hive.title': 'Hive',
      'component.integration.title':
        'Integration - Riemann sum integral sensor',
      'component.canary.title': 'Canary',
      'component.evil_genius_labs.title': 'Evil Genius Labs',
      'component.steamist.title': 'Steamist',
      'component.brunt.title': 'Brunt Blind Engine',
      'component.upb.title': 'Universal Powerline Bus (UPB)',
      'component.wiz.title': 'WiZ',
      'component.tautulli.title': 'Tautulli',
      'component.dnsip.title': 'DNS IP',
      'component.renault.title': 'Renault',
      'component.aemet.title': 'AEMET OpenData',
      'component.metoffice.title': 'Met Office',
      'component.glances.title': 'Glances',
      'component.wallbox.title': 'Wallbox',
      'component.kmtronic.title': 'KMtronic',
      'component.devolo_home_network.title': 'devolo Home Network',
      'component.airvisual.title': 'AirVisual',
      'component.azure_devops.title': 'Azure DevOps',
      'component.opengarage.title': 'OpenGarage',
      'component.xbox.title': 'Xbox',
      'component.modem_callerid.title': 'Phone Modem',
      'component.met.title': 'Meteorologisk institutt (Met.no)',
      'component.mqtt.title': 'MQTT',
      'component.recollect_waste.title': 'ReCollect Waste',
      'component.kostal_plenticore.title': 'Kostal Plenticore Solar Inverter',
      'component.plaato.title': 'Plaato',
      'component.songpal.title': 'Sony Songpal',
      'component.nut.title': 'Network UPS Tools (NUT)',
      'component.vizio.title': 'VIZIO SmartCast',
      'component.ifttt.title': 'IFTTT',
      'component.ialarm.title': 'Antifurto365 iAlarm',
      'component.ukraine_alarm.title': 'Ukraine Alarm',
      'component.prosegur.title': 'Prosegur Alarm',
      'component.gpslogger.title': 'GPSLogger',
      'component.sharkiq.title': 'Shark IQ',
      'component.tolo.title': 'TOLO Sauna',
      'component.dlna_dms.title': 'DLNA Digital Media Server',
      'component.shelly.title': 'Shelly',
      'component.sense.title': 'Sense',
      'component.velbus.title': 'Velbus',
      'component.tradfri.title': 'IKEA TRÅDFRI',
      'component.deconz.title': 'deCONZ',
      'component.verisure.title': 'Verisure',
      'component.meteoclimatic.title': 'Meteoclimatic',
      'component.control4.title': 'Control4',
      'component.smartthings.title': 'SmartThings',
      'component.kaleidescape.title': 'Kaleidescape',
      'component.azure_event_hub.title': 'Azure Event Hub',
      'component.ambient_station.title': 'Ambient Weather Station',
      'component.hangouts.title': 'Google Chat',
      'component.ruckus_unleashed.title': 'Ruckus Unleashed',
      'component.huawei_lte.title': 'Huawei LTE',
      'component.upcloud.title': 'UpCloud',
      'component.flipr.title': 'Flipr',
      'component.goodwe.title': 'GoodWe Inverter',
      'component.steam_online.title': 'Steam',
      'component.sql.title': 'SQL',
      'component.smart_meter_texas.title': 'Smart Meter Texas',
      'component.tomorrowio.title': 'Tomorrow.io',
      'component.solaredge.title': 'SolarEdge',
      'component.nina.title': 'NINA',
      'component.enphase_envoy.title': 'Enphase Envoy',
      'component.switch_as_x.title': 'Change device type of a switch',
      'component.sleepiq.title': 'SleepIQ',
      'component.iaqualink.title': 'Jandy iAqualink',
      'component.zha.title': 'Zigbee Home Automation',
      'component.growatt_server.title': 'Growatt Server',
      'component.somfy.title': 'Somfy',
      'component.freebox.title': 'Freebox',
      'component.home_plus_control.title': 'Legrand Home+ Control',
      'component.senz.title': 'nVent RAYCHEM SENZ',
      'component.senseme.title': 'SenseME',
      'component.emulated_roku.title': 'Emulated Roku',
      'component.p1_monitor.title': 'P1 Monitor',
      'component.solarlog.title': 'Solar-Log',
      'component.airtouch4.title': 'AirTouch 4',
      'component.utility_meter.title': 'Utility Meter',
      'component.mullvad.title': 'Mullvad VPN',
      'component.waze_travel_time.title': 'Waze Travel Time',
      'component.threshold.title': 'Threshold Sensor',
      'component.buienradar.title': 'Buienradar',
      'component.fireservicerota.title': 'FireServiceRota',
      'component.mazda.title': 'Mazda Connected Services',
      'component.goalzero.title': 'Goal Zero Yeti',
      'component.motioneye.title': 'motionEye',
      'component.wemo.title': 'Belkin WeMo',
      'component.uptime.title': 'Uptime',
      'component.fritz.title': 'AVM FRITZ!Box Tools',
      'component.moon.title': 'Moon',
      'component.gree.title': 'Gree Climate',
      'component.heos.title': 'Denon HEOS',
      'component.tado.title': 'Tado',
      'component.broadlink.title': 'Broadlink',
      'component.balboa.title': 'Balboa Spa Client',
      'component.motion_blinds.title': 'Motion Blinds',
      'component.apple_tv.config.abort.already_configured':
        'Device is already configured',
      'component.apple_tv.config.abort.already_configured_device':
        'Device is already configured',
      'component.apple_tv.config.abort.already_in_progress':
        'Configuration flow is already in progress',
      'component.apple_tv.config.abort.backoff':
        'Device does not accept pairing requests at this time (you might have entered an invalid PIN code too many times), try again later.',
      'component.apple_tv.config.abort.device_did_not_pair':
        'No attempt to finish pairing process was made from the device.',
      'component.apple_tv.config.abort.device_not_found':
        'Device was not found during discovery, please try adding it again.',
      'component.apple_tv.config.abort.inconsistent_device':
        'Expected protocols were not found during discovery. This normally indicates a problem with multicast DNS (Zeroconf). Please try adding the device again.',
      'component.apple_tv.config.abort.invalid_config':
        'The configuration for this device is incomplete. Please try adding it again.',
      'component.apple_tv.config.abort.ipv6_not_supported':
        'IPv6 is not supported.',
      'component.apple_tv.config.abort.no_devices_found':
        'No devices found on the network',
      'component.apple_tv.config.abort.reauth_successful':
        'Re-authentication was successful',
      'component.apple_tv.config.abort.setup_failed':
        'Failed to set up device.',
      'component.apple_tv.config.abort.unknown': 'Unexpected error',
      'component.apple_tv.config.error.already_configured':
        'Device is already configured',
      'component.apple_tv.config.error.invalid_auth': 'Invalid authentication',
      'component.apple_tv.config.error.no_devices_found':
        'No devices found on the network',
      'component.apple_tv.config.error.no_usable_service':
        'A device was found but could not identify any way to establish a connection to it. If you keep seeing this message, try specifying its IP address or restarting your Apple TV.',
      'component.apple_tv.config.error.unknown': 'Unexpected error',
      'component.apple_tv.config.flow_title': '{name} ({type})',
      'component.apple_tv.config.step.confirm.description':
        'You are about to add `{name}` of type `{type}` to Home Assistant.\n\n**To complete the process, you may have to enter multiple PIN codes.**\n\nPlease note that you will *not* be able to power off your Apple TV with this integration. Only the media player in Home Assistant will turn off!',
      'component.apple_tv.config.step.confirm.title': 'Confirm adding Apple TV',
      'component.apple_tv.config.step.pair_no_pin.description':
        'Pairing is required for the `{protocol}` service. Please enter PIN {pin} on your device to continue.',
      'component.apple_tv.config.step.pair_no_pin.title': 'Pairing',
      'component.apple_tv.config.step.pair_with_pin.data.pin': 'PIN Code',
      'component.apple_tv.config.step.pair_with_pin.description':
        'Pairing is required for the `{protocol}` protocol. Please enter the PIN code displayed on screen. Leading zeros shall be omitted, i.e. enter 123 if the displayed code is 0123.',
      'component.apple_tv.config.step.pair_with_pin.title': 'Pairing',
      'component.apple_tv.config.step.password.description':
        'A password is required by `{protocol}`. This is not yet supported, please disable password to continue.',
      'component.apple_tv.config.step.password.title': 'Password required',
      'component.apple_tv.config.step.protocol_disabled.description':
        'Pairing is required for `{protocol}` but it is disabled on the device. Please review potential access restrictions (e.g. allow all devices on the local network to connect) on the device.\n\nYou may continue without pairing this protocol, but some functionality will be limited.',
      'component.apple_tv.config.step.protocol_disabled.title':
        'Pairing not possible',
      'component.apple_tv.config.step.reconfigure.description':
        'Reconfigure this device to restore its functionality.',
      'component.apple_tv.config.step.reconfigure.title':
        'Device reconfiguration',
      'component.apple_tv.config.step.service_problem.description':
        'A problem occurred while pairing protocol `{protocol}`. It will be ignored.',
      'component.apple_tv.config.step.service_problem.title':
        'Failed to add service',
      'component.apple_tv.config.step.user.data.device_input': 'Device',
      'component.apple_tv.config.step.user.description':
        'Start by entering the device name (e.g. Kitchen or Bedroom) or IP address of the Apple TV you want to add.\n\nIf you cannot see your device or experience any issues, try specifying the device IP address.',
      'component.apple_tv.config.step.user.title': 'Setup a new Apple TV',
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
  _domain: string,
  _service: string,
  data: { entity_id: string; brightness?: string }
) => {
  console.log('🚀 data', data)
}

export default hass
