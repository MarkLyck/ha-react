import { message } from 'antd'

const hass = {
  callService: (
    domain: string,
    service: string,
    data: { entity_id: string; brightness?: string }
  ) => {
    console.log('🚀 data', data)
    message.success(`callService: ${domain}, ${service}, ${data.entity_id}`)
  },
  auth: {
    data: {
      access_token: 'access_xxx',
      token_type: 'Bearer',
      expires_in: 1800,
      hassUrl: 'http://homeassistant.local:8123',
      clientId: 'http://homeassistant.local:8123/',
      expires: 1653767956903,
      refresh_token: 'refresh_xxx',
    },
  },
  connection: {
    options: {
      setupRetry: 0,
      auth: {
        data: {
          access_token: 'access_xxx',
          token_type: 'Bearer',
          expires_in: 1800,
          hassUrl: 'http://homeassistant.local:8123',
          clientId: 'http://homeassistant.local:8123/',
          expires: 1653767956903,
          refresh_token: 'refresh_xxx',
        },
      },
    },
    commandId: 21,
    commands: {},
    eventListeners: {},
    closeRequested: false,
    socket: {
      haVersion: '2022.5.5',
    },
    haVersion: '2022.5.5',
    _ent: {
      state: {
        'person.first_last': {
          entity_id: 'person.first_last',
          state: 'unknown',
          attributes: {
            editable: false,
            id: 'first_last',
            user_id: 'fefe8d8a7bec4ab9ad5ca86ac9734a4c',
            entity_picture:
              '/api/image/serve/40a12e595b7c321dcbc108342b96d3d9/512x512',
            friendly_name: 'Mark',
          },
          context: {
            id: '01810c29ed25e513b417fba55a640827',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-28T19:34:33.052Z',
          last_updated: '2022-05-28T19:34:43.237Z',
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
            id: '01810c29ed254197c2392ad9c3d6bf87',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-28T19:34:33.054Z',
          last_updated: '2022-05-28T19:34:43.237Z',
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
            id: '01810c29ddf2b297519669d398b83ec6',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-28T19:34:39.346Z',
          last_updated: '2022-05-28T19:34:39.346Z',
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
            id: '01810c29ddf34d1a1e9b7adbdea96838',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-28T19:34:39.347Z',
          last_updated: '2022-05-28T19:34:39.347Z',
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
            id: '01810c29ddf38424b84c4ab2ab7c8a19',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-28T19:34:39.348Z',
          last_updated: '2022-05-28T19:34:39.348Z',
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
            id: '01810c29ddf4558a26d6582b76373383',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-28T19:34:39.348Z',
          last_updated: '2022-05-28T19:34:39.348Z',
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
            id: '01810c29ddf461d53c930afbd842864f',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-28T19:34:39.348Z',
          last_updated: '2022-05-28T19:34:39.348Z',
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
            id: '01810c29ddf58b9801383f60f7b19257',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-28T19:34:39.349Z',
          last_updated: '2022-05-28T19:34:39.349Z',
        },
        'sun.sun': {
          entity_id: 'sun.sun',
          state: 'above_horizon',
          attributes: {
            next_dawn: '2022-05-29T09:12:36.366587+00:00',
            next_dusk: '2022-05-29T00:59:45.451871+00:00',
            next_midnight: '2022-05-29T05:06:22+00:00',
            next_noon: '2022-05-29T17:06:16+00:00',
            next_rising: '2022-05-29T09:44:42.442374+00:00',
            next_setting: '2022-05-29T00:27:39.027454+00:00',
            elevation: 53.9,
            azimuth: 252.18,
            rising: false,
            friendly_name: 'Sun',
          },
          context: {
            id: '01810c29de3ebb05b47670119f424ce3',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-28T19:34:39.422Z',
          last_updated: '2022-05-28T19:34:39.422Z',
        },
        'zone.home': {
          entity_id: 'zone.home',
          state: '0',
          attributes: {
            latitude: 38.9291848698784,
            longitude: -77.22924259956928,
            radius: 100,
            passive: false,
            persons: [],
            editable: true,
            icon: 'mdi:home',
            friendly_name: 'Home',
          },
          context: {
            id: '01810c29df2620182824cd16f3f8dcca',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-28T19:34:39.654Z',
          last_updated: '2022-05-28T19:34:39.654Z',
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
            id: '01810c29df60e16206ae6532cd3d8e0b',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-28T19:34:39.712Z',
          last_updated: '2022-05-28T19:34:39.712Z',
        },
        'media_player.living_room': {
          entity_id: 'media_player.living_room',
          state: 'paused',
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
            media_content_type: 'music',
            media_duration: 264,
            media_position: 32,
            media_position_updated_at: '2022-05-28T19:34:41.222884+00:00',
            media_title: 'Sad Song feat. Elena Coats',
            media_artist: 'We the Kings',
            media_album_name: 'Stripped',
            app_id: 'com.apple.TVMusic',
            app_name: 'Music',
            shuffle: true,
            repeat: 'off',
            entity_picture:
              '/api/media_player_proxy/media_player.living_room?token=5e06197296f0a29b234b18e04d73493d17edc05a9eb1d89566a3ad3d21b68ccf&cache=Music125/v4/ac/8d/da/ac8ddad8-cf5a-4c9c-0833-8c0c7dcc61c5/stripped_cover_1600x1600.jpg',
            friendly_name: 'Living Room',
            supported_features: 450487,
          },
          context: {
            id: '01810c29e547cd92bb826864ff25606b',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-28T19:34:41.213Z',
          last_updated: '2022-05-28T19:34:41.223Z',
        },
        'remote.living_room': {
          entity_id: 'remote.living_room',
          state: 'on',
          attributes: {
            friendly_name: 'Living Room',
            supported_features: 0,
          },
          context: {
            id: '01810c29e538def7fa6317531d19592e',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-28T19:34:41.208Z',
          last_updated: '2022-05-28T19:34:41.208Z',
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
            id: '01810c29e298ad92cb812d9c16c37903',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-28T19:34:40.537Z',
          last_updated: '2022-05-28T19:34:40.537Z',
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
            id: '01810c29e2995e60204cbc991acaa1f9',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-28T19:34:40.537Z',
          last_updated: '2022-05-28T19:34:40.537Z',
        },
        'sensor.iphone_mark_bssid': {
          entity_id: 'sensor.iphone_mark_bssid',
          state: '6c:ae:f6:ca:75:88',
          attributes: {
            icon: 'mdi:wifi-star',
            friendly_name: 'iphone mark BSSID',
          },
          context: {
            id: '01810c29e299a288a5c3b26fd5cd47a5',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-28T19:34:40.537Z',
          last_updated: '2022-05-28T19:34:40.537Z',
        },
        'sensor.iphone_mark_battery_level': {
          entity_id: 'sensor.iphone_mark_battery_level',
          state: '85',
          attributes: {
            unit_of_measurement: '%',
            device_class: 'battery',
            icon: 'mdi:battery-80',
            friendly_name: 'iphone mark Battery Level',
          },
          context: {
            id: '01810c29e29a5b90be9dc73c15153538',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-28T19:34:40.538Z',
          last_updated: '2022-05-28T19:34:40.538Z',
        },
        'sensor.iphone_mark_battery_state': {
          entity_id: 'sensor.iphone_mark_battery_state',
          state: 'Not Charging',
          attributes: {
            'Low Power Mode': false,
            icon: 'mdi:battery-80',
            friendly_name: 'iphone mark Battery State',
          },
          context: {
            id: '01810c29e29a4bdab3bb7753b3f867ee',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-28T19:34:40.538Z',
          last_updated: '2022-05-28T19:34:40.538Z',
        },
        'sensor.iphone_mark_connection_type': {
          entity_id: 'sensor.iphone_mark_connection_type',
          state: 'Wi-Fi',
          attributes: {
            icon: 'mdi:wifi',
            friendly_name: 'iphone mark Connection Type',
          },
          context: {
            id: '01810c29e29a1212f5243677be59d594',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-28T19:34:40.538Z',
          last_updated: '2022-05-28T19:34:40.538Z',
        },
        'sensor.iphone_mark_distance': {
          entity_id: 'sensor.iphone_mark_distance',
          state: '1029',
          attributes: {
            unit_of_measurement: 'm',
            icon: 'mdi:hiking',
            friendly_name: 'iphone mark Distance',
          },
          context: {
            id: '01810c29e29be32642c30c8241c08241',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-28T19:34:40.539Z',
          last_updated: '2022-05-28T19:34:40.539Z',
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
            id: '01810c29e29bbfd9a5c6f847b4d02412',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-28T19:34:40.539Z',
          last_updated: '2022-05-28T19:34:40.539Z',
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
            id: '01810c29e29c29c9582530c8c3fe78a5',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-28T19:34:40.540Z',
          last_updated: '2022-05-28T19:34:40.540Z',
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
            Location: [38.929229736328125, -77.22927715772039],
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
            id: '01810c29e29caef34e45a103fc9418f5',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-28T19:34:40.540Z',
          last_updated: '2022-05-28T19:34:40.540Z',
        },
        'sensor.iphone_mark_last_update_trigger': {
          entity_id: 'sensor.iphone_mark_last_update_trigger',
          state: 'Launch',
          attributes: {
            icon: 'mdi:cellphone-wireless',
            friendly_name: 'iphone mark Last Update Trigger',
          },
          context: {
            id: '01810c29e29ca1412c1f05242cfff27a',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-28T19:34:40.540Z',
          last_updated: '2022-05-28T19:34:40.540Z',
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
            id: '01810c29e29df9b98f50cabd163e0311',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-28T19:34:40.541Z',
          last_updated: '2022-05-28T19:34:40.541Z',
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
            id: '01810c29e29daf8dd95ab746708175d6',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-28T19:34:40.541Z',
          last_updated: '2022-05-28T19:34:40.541Z',
        },
        'sensor.iphone_mark_ssid': {
          entity_id: 'sensor.iphone_mark_ssid',
          state: 'Lyck',
          attributes: {
            icon: 'mdi:wifi',
            friendly_name: 'iphone mark SSID',
          },
          context: {
            id: '01810c29e29e9a56d2bab2b3529d7583',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-28T19:34:40.542Z',
          last_updated: '2022-05-28T19:34:40.542Z',
        },
        'sensor.iphone_mark_steps': {
          entity_id: 'sensor.iphone_mark_steps',
          state: '1285',
          attributes: {
            unit_of_measurement: 'steps',
            icon: 'mdi:walk',
            friendly_name: 'iphone mark Steps',
          },
          context: {
            id: '01810c29e29e39031d4867281ce3d46c',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-28T19:34:40.542Z',
          last_updated: '2022-05-28T19:34:40.542Z',
        },
        'sensor.iphone_mark_storage': {
          entity_id: 'sensor.iphone_mark_storage',
          state: '62.69',
          attributes: {
            Available: '60.56 GB',
            'Available (Important)': '164.99 GB',
            'Available (Opportunistic)': '160.42 GB',
            Total: '255.88 GB',
            unit_of_measurement: '% available',
            icon: 'mdi:database',
            friendly_name: 'iphone mark Storage',
          },
          context: {
            id: '01810c29e29ec43eb5a4c04514246d1b',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-28T19:34:40.542Z',
          last_updated: '2022-05-28T19:34:40.542Z',
        },
        'binary_sensor.iphone_mark_focus': {
          entity_id: 'binary_sensor.iphone_mark_focus',
          state: 'off',
          attributes: {
            icon: 'mdi:moon-waning-crescent',
            friendly_name: 'iphone mark Focus',
          },
          context: {
            id: '01810c29e29fdd203566c8c07da861ea',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-28T19:34:40.543Z',
          last_updated: '2022-05-28T19:34:40.543Z',
        },
        'device_tracker.iphone_mark': {
          entity_id: 'device_tracker.iphone_mark',
          state: 'home',
          attributes: {
            source_type: 'gps',
            battery_level: 80,
            latitude: 38.929229736328125,
            longitude: -77.22927715772039,
            gps_accuracy: 35,
            altitude: 162.77061462402344,
            vertical_accuracy: 5.059759616851807,
            friendly_name: 'iphone mark',
          },
          context: {
            id: '01810c29e409a6418bdd976cffa4e772',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-28T19:34:40.905Z',
          last_updated: '2022-05-28T19:34:40.905Z',
        },
        'binary_sensor.ecobee_occupancy': {
          entity_id: 'binary_sensor.ecobee_occupancy',
          state: 'on',
          attributes: {
            device_class: 'occupancy',
            friendly_name: 'My ecobee Occupancy',
          },
          context: {
            id: '01810c29e42be52bd6e0896717655b12',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-28T19:34:40.939Z',
          last_updated: '2022-05-28T19:34:40.939Z',
        },
        'binary_sensor.bedroom_sensor_occupancy': {
          entity_id: 'binary_sensor.bedroom_sensor_occupancy',
          state: 'off',
          attributes: {
            device_class: 'occupancy',
            friendly_name: 'bedroom sensor Occupancy',
          },
          context: {
            id: '01810c29e42cda5fc7f41f27f46cb642',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-28T19:34:40.940Z',
          last_updated: '2022-05-28T19:34:40.940Z',
        },
        'binary_sensor.office_occupancy': {
          entity_id: 'binary_sensor.office_occupancy',
          state: 'on',
          attributes: {
            device_class: 'occupancy',
            friendly_name: 'Office Occupancy',
          },
          context: {
            id: '01810c29e42d096fd5849073b10acdeb',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-28T19:34:40.941Z',
          last_updated: '2022-05-28T19:34:40.941Z',
        },
        'sensor.ecobee_temperature': {
          entity_id: 'sensor.ecobee_temperature',
          state: '75.3',
          attributes: {
            state_class: 'measurement',
            unit_of_measurement: '°F',
            device_class: 'temperature',
            friendly_name: 'My ecobee Temperature',
          },
          context: {
            id: '01810c29e42dc85c587f46915a1b0481',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-28T19:34:40.941Z',
          last_updated: '2022-05-28T19:34:40.941Z',
        },
        'sensor.ecobee_humidity': {
          entity_id: 'sensor.ecobee_humidity',
          state: '54',
          attributes: {
            state_class: 'measurement',
            unit_of_measurement: '%',
            device_class: 'humidity',
            friendly_name: 'My ecobee Humidity',
          },
          context: {
            id: '01810c29e42e27356bf1b307ea0ff9d9',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-28T19:34:40.942Z',
          last_updated: '2022-05-28T19:34:40.942Z',
        },
        'sensor.bedroom_sensor_temperature': {
          entity_id: 'sensor.bedroom_sensor_temperature',
          state: '75.3',
          attributes: {
            state_class: 'measurement',
            unit_of_measurement: '°F',
            device_class: 'temperature',
            friendly_name: 'bedroom sensor Temperature',
          },
          context: {
            id: '01810c29e42fbaf0150d29a99d256e3a',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-28T19:34:40.943Z',
          last_updated: '2022-05-28T19:34:40.943Z',
        },
        'sensor.office_temperature': {
          entity_id: 'sensor.office_temperature',
          state: '76.9',
          attributes: {
            state_class: 'measurement',
            unit_of_measurement: '°F',
            device_class: 'temperature',
            friendly_name: 'Office Temperature',
          },
          context: {
            id: '01810c29e430acef2b91050ace33d1e0',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-28T19:34:40.944Z',
          last_updated: '2022-05-28T19:34:40.944Z',
        },
        'weather.ecobee': {
          entity_id: 'weather.ecobee',
          state: 'partlycloudy',
          attributes: {
            temperature: 79,
            humidity: 46,
            pressure: 29.83,
            wind_bearing: 289,
            wind_speed: 9,
            visibility: 13,
            forecast: [
              {
                condition: 'partlycloudy',
                temperature: 79,
                templow: 64,
                wind_bearing: 289,
                wind_speed: 9,
                datetime: '2022-05-28T19:36:10.980419+00:00',
              },
              {
                condition: 'sunny',
                temperature: 81,
                templow: 66,
                wind_bearing: 96,
                wind_speed: 3,
                datetime: '2022-05-29T19:36:10.980419+00:00',
              },
              {
                condition: 'sunny',
                temperature: 87,
                templow: 69,
                wind_bearing: 195,
                wind_speed: 4,
                datetime: '2022-05-30T19:36:10.980419+00:00',
              },
              {
                condition: 'sunny',
                temperature: 90,
                templow: 73,
                wind_bearing: 251,
                wind_speed: 4,
                datetime: '2022-05-31T19:36:10.980419+00:00',
              },
              {
                condition: 'partlycloudy',
                temperature: 88,
                templow: 77,
                wind_bearing: 43,
                wind_speed: 4,
                datetime: '2022-06-01T19:36:10.980419+00:00',
              },
            ],
            attribution:
              'Ecobee weather provided by FI:NDV at 2022-05-28 19:30:45 UTC',
            friendly_name: 'My ecobee',
          },
          context: {
            id: '01810c2b43e4f072b8371ac26c7e9a5e',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-28T19:34:40.962Z',
          last_updated: '2022-05-28T19:36:10.980Z',
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
            temperature: 77,
            target_temp_high: null,
            target_temp_low: null,
            current_humidity: 54,
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
            id: '01810c29e4445057ccad10e676a4b1ae',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-28T19:34:40.964Z',
          last_updated: '2022-05-28T19:34:40.964Z',
        },
        'light.couch_lamp': {
          entity_id: 'light.couch_lamp',
          state: 'off',
          attributes: {
            effect_list: ['effect_pulse', 'effect_stop'],
            supported_color_modes: ['brightness'],
            friendly_name: 'Couch Lamp',
            supported_features: 37,
          },
          context: {
            id: '01810c29e477afc62c4959dcbf4a1487',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-28T19:34:41.015Z',
          last_updated: '2022-05-28T19:34:41.015Z',
        },
        'binary_sensor.eero_wan_status': {
          entity_id: 'binary_sensor.eero_wan_status',
          state: 'on',
          attributes: {
            device_class: 'connectivity',
            friendly_name: 'eero wan status',
          },
          context: {
            id: '01810c29e47f4da6a27a7e686fd6dc5f',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-28T19:34:41.023Z',
          last_updated: '2022-05-28T19:34:41.023Z',
        },
        'sensor.eero_external_ip': {
          entity_id: 'sensor.eero_external_ip',
          state: '108.28.69.66',
          attributes: {
            icon: 'mdi:server-network',
            friendly_name: 'eero External IP',
          },
          context: {
            id: '01810c29e4808fb518280984b9782bb5',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-28T19:34:41.024Z',
          last_updated: '2022-05-28T19:34:41.024Z',
        },
        'sensor.eero_wan_status': {
          entity_id: 'sensor.eero_wan_status',
          state: 'Connected',
          attributes: {
            icon: 'mdi:server-network',
            friendly_name: 'eero wan status',
          },
          context: {
            id: '01810c29e481c5d6c71dc9397c039aa0',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-28T19:34:41.025Z',
          last_updated: '2022-05-28T19:34:41.025Z',
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
            brightness: 255,
            color_temp: 364,
            hs_color: [28.295, 64.242],
            rgb_color: [255, 168, 91],
            xy_color: [0.521, 0.387],
            icon: 'mdi:led-strip-variant',
            friendly_name: 'Desk light',
            supported_features: 55,
          },
          context: {
            id: '01810c29e484982c85c74ffe6d7f4756',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-28T19:34:41.029Z',
          last_updated: '2022-05-28T19:34:41.029Z',
        },
        'sensor.hacs': {
          entity_id: 'sensor.hacs',
          state: '0',
          attributes: {
            repositories: [],
            unit_of_measurement: 'pending update(s)',
            icon: 'hacs:hacs',
            friendly_name: 'hacs',
          },
          context: {
            id: '01810c2a08aa49416de8ea07e011f5cc',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-28T19:34:50.282Z',
          last_updated: '2022-05-28T19:34:50.282Z',
        },
        'vacuum.alfred_2': {
          entity_id: 'vacuum.alfred_2',
          state: 'error',
          attributes: {
            fan_speed_list: ['quiet', 'normal', 'max', 'max+'],
            battery_level: 87,
            battery_icon: 'mdi:battery-90',
            fan_speed: 'max',
            rooms: {
              default: [0, 1, 2, 3],
            },
            last_error: 'WheelAbnormal: Driving Wheel malfunction (103)',
            friendly_name: 'Alfred',
            supported_features: 15228,
          },
          context: {
            id: '01810c2a1fc680d477f5304c2c5dbcf5',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-28T19:34:46.142Z',
          last_updated: '2022-05-28T19:34:56.198Z',
        },
        'button.alfred_life_span_side_brush_reset': {
          entity_id: 'button.alfred_life_span_side_brush_reset',
          state: 'unknown',
          attributes: {
            icon: 'mdi:broom',
            friendly_name: 'Alfred life span side brush reset',
          },
          context: {
            id: '01810c29ecf7cc1b3d70d99d2e83019c',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-28T19:34:43.191Z',
          last_updated: '2022-05-28T19:34:43.191Z',
        },
        'button.alfred_life_span_brush_reset': {
          entity_id: 'button.alfred_life_span_brush_reset',
          state: 'unknown',
          attributes: {
            icon: 'mdi:broom',
            friendly_name: 'Alfred life span brush reset',
          },
          context: {
            id: '01810c29ecf76e2d852d107ce0d62a6b',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-28T19:34:43.191Z',
          last_updated: '2022-05-28T19:34:43.191Z',
        },
        'button.alfred_life_span_filter_reset': {
          entity_id: 'button.alfred_life_span_filter_reset',
          state: 'unknown',
          attributes: {
            icon: 'mdi:air-filter',
            friendly_name: 'Alfred life span filter reset',
          },
          context: {
            id: '01810c29ecf87df21b5daff0fc279364',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-28T19:34:43.192Z',
          last_updated: '2022-05-28T19:34:43.192Z',
        },
        'button.alfred_relocate': {
          entity_id: 'button.alfred_relocate',
          state: 'unknown',
          attributes: {
            icon: 'mdi:map-marker-question',
            friendly_name: 'Alfred relocate',
          },
          context: {
            id: '01810c29ecf8de927ab9c6974b2d3e90',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-28T19:34:43.192Z',
          last_updated: '2022-05-28T19:34:43.192Z',
        },
        'input_number.empty': {
          entity_id: 'input_number.empty',
          state: 'unavailable',
          attributes: {
            restored: true,
            supported_features: 0,
          },
          context: {
            id: '01810c29ecfc01e769c133ba80c281d5',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-28T19:34:43.196Z',
          last_updated: '2022-05-28T19:34:43.196Z',
        },
        'input_boolean.dummy1': {
          entity_id: 'input_boolean.dummy1',
          state: 'unavailable',
          attributes: {
            restored: true,
            supported_features: 0,
          },
          context: {
            id: '01810c29ecfdb0ad16a1c5de30cc6ad8',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-28T19:34:43.197Z',
          last_updated: '2022-05-28T19:34:43.197Z',
        },
        'input_boolean.empty': {
          entity_id: 'input_boolean.empty',
          state: 'unavailable',
          attributes: {
            restored: true,
            supported_features: 0,
          },
          context: {
            id: '01810c29ecfdca903690d221d4852642',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-28T19:34:43.197Z',
          last_updated: '2022-05-28T19:34:43.197Z',
        },
        'input_boolean.remote_control': {
          entity_id: 'input_boolean.remote_control',
          state: 'unavailable',
          attributes: {
            restored: true,
            supported_features: 0,
          },
          context: {
            id: '01810c29ecfd9c13b670a5c48d7a51ff',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-28T19:34:43.197Z',
          last_updated: '2022-05-28T19:34:43.197Z',
        },
        'input_text.opacity_on': {
          entity_id: 'input_text.opacity_on',
          state: 'unavailable',
          attributes: {
            restored: true,
            supported_features: 0,
          },
          context: {
            id: '01810c29ecfda895812952ce4e9d730e',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-28T19:34:43.197Z',
          last_updated: '2022-05-28T19:34:43.197Z',
        },
        'input_text.opacity_off': {
          entity_id: 'input_text.opacity_off',
          state: 'unavailable',
          attributes: {
            restored: true,
            supported_features: 0,
          },
          context: {
            id: '01810c29ecfd8e0e7293dd6a622ee279',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-28T19:34:43.197Z',
          last_updated: '2022-05-28T19:34:43.197Z',
        },
        'input_text.opacity_unavailable': {
          entity_id: 'input_text.opacity_unavailable',
          state: 'unavailable',
          attributes: {
            restored: true,
            supported_features: 0,
          },
          context: {
            id: '01810c29ecfd8bdc0e88aa07c9c8d767',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-28T19:34:43.197Z',
          last_updated: '2022-05-28T19:34:43.197Z',
        },
        'input_text.card_box_shadow_light_color': {
          entity_id: 'input_text.card_box_shadow_light_color',
          state: 'unavailable',
          attributes: {
            restored: true,
            supported_features: 0,
          },
          context: {
            id: '01810c29ecfd67419d1e18379b934c6e',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-28T19:34:43.197Z',
          last_updated: '2022-05-28T19:34:43.197Z',
        },
        'input_text.color_unavailable': {
          entity_id: 'input_text.color_unavailable',
          state: 'unavailable',
          attributes: {
            restored: true,
            supported_features: 0,
          },
          context: {
            id: '01810c29ecfd8d1b61cf6998141fa464',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-28T19:34:43.197Z',
          last_updated: '2022-05-28T19:34:43.197Z',
        },
        'input_text.header_badge_icon_color': {
          entity_id: 'input_text.header_badge_icon_color',
          state: 'unavailable',
          attributes: {
            restored: true,
            supported_features: 0,
          },
          context: {
            id: '01810c29ecfe86b3bda2530afcba38e2',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-28T19:34:43.198Z',
          last_updated: '2022-05-28T19:34:43.198Z',
        },
        'input_text.header_badge_background': {
          entity_id: 'input_text.header_badge_background',
          state: 'unavailable',
          attributes: {
            restored: true,
            supported_features: 0,
          },
          context: {
            id: '01810c29ecfe48ddeab71fe9d91cea6b',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-28T19:34:43.198Z',
          last_updated: '2022-05-28T19:34:43.198Z',
        },
        'input_text.header_badge_color': {
          entity_id: 'input_text.header_badge_color',
          state: 'unavailable',
          attributes: {
            restored: true,
            supported_features: 0,
          },
          context: {
            id: '01810c29ecfecb9465525555a3e086a8',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-28T19:34:43.198Z',
          last_updated: '2022-05-28T19:34:43.198Z',
        },
        'input_text.header_badge_text_color': {
          entity_id: 'input_text.header_badge_text_color',
          state: 'unavailable',
          attributes: {
            restored: true,
            supported_features: 0,
          },
          context: {
            id: '01810c29ecfebbec72721ee684f23e66',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-28T19:34:43.198Z',
          last_updated: '2022-05-28T19:34:43.198Z',
        },
        'input_text.header_border_radius': {
          entity_id: 'input_text.header_border_radius',
          state: 'unavailable',
          attributes: {
            restored: true,
            supported_features: 0,
          },
          context: {
            id: '01810c29ecfe30eb4880d5489947dd04',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-28T19:34:43.198Z',
          last_updated: '2022-05-28T19:34:43.198Z',
        },
        'input_text.header_box_shadow': {
          entity_id: 'input_text.header_box_shadow',
          state: 'unavailable',
          attributes: {
            restored: true,
            supported_features: 0,
          },
          context: {
            id: '01810c29ecfedc836070fd634e737673',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-28T19:34:43.198Z',
          last_updated: '2022-05-28T19:34:43.198Z',
        },
        'input_text.footer_box_shadow': {
          entity_id: 'input_text.footer_box_shadow',
          state: 'unavailable',
          attributes: {
            restored: true,
            supported_features: 0,
          },
          context: {
            id: '01810c29ecfe2033b36df3a8f769c402',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-28T19:34:43.198Z',
          last_updated: '2022-05-28T19:34:43.198Z',
        },
        'input_text.nav_bar_color': {
          entity_id: 'input_text.nav_bar_color',
          state: 'unavailable',
          attributes: {
            restored: true,
            supported_features: 0,
          },
          context: {
            id: '01810c29ecfef1afbe15c618f6ac04bb',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-28T19:34:43.198Z',
          last_updated: '2022-05-28T19:34:43.198Z',
        },
        'input_text.nav_bar_text_color': {
          entity_id: 'input_text.nav_bar_text_color',
          state: 'unavailable',
          attributes: {
            restored: true,
            supported_features: 0,
          },
          context: {
            id: '01810c29ecff36ce6809f72ca85cd317',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-28T19:34:43.199Z',
          last_updated: '2022-05-28T19:34:43.199Z',
        },
        'input_text.card_color': {
          entity_id: 'input_text.card_color',
          state: 'unavailable',
          attributes: {
            restored: true,
            supported_features: 0,
          },
          context: {
            id: '01810c29ecff5225bed88905d333e0b4',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-28T19:34:43.199Z',
          last_updated: '2022-05-28T19:34:43.199Z',
        },
        'input_text.card_border_style': {
          entity_id: 'input_text.card_border_style',
          state: 'unavailable',
          attributes: {
            restored: true,
            supported_features: 0,
          },
          context: {
            id: '01810c29ecffc4e527d9fe017a8467d6',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-28T19:34:43.199Z',
          last_updated: '2022-05-28T19:34:43.199Z',
        },
        'input_text.card_border_width': {
          entity_id: 'input_text.card_border_width',
          state: 'unavailable',
          attributes: {
            restored: true,
            supported_features: 0,
          },
          context: {
            id: '01810c29ecfff562de26cb322abbe965',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-28T19:34:43.199Z',
          last_updated: '2022-05-28T19:34:43.199Z',
        },
        'input_text.card_border_color': {
          entity_id: 'input_text.card_border_color',
          state: 'unavailable',
          attributes: {
            restored: true,
            supported_features: 0,
          },
          context: {
            id: '01810c29ecffb0a172148f83115824f2',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-28T19:34:43.199Z',
          last_updated: '2022-05-28T19:34:43.199Z',
        },
        'input_text.card_border_radius': {
          entity_id: 'input_text.card_border_radius',
          state: 'unavailable',
          attributes: {
            restored: true,
            supported_features: 0,
          },
          context: {
            id: '01810c29ecffcf971cd436786953c8dd',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-28T19:34:43.199Z',
          last_updated: '2022-05-28T19:34:43.199Z',
        },
        'input_text.card_box_shadow': {
          entity_id: 'input_text.card_box_shadow',
          state: 'unavailable',
          attributes: {
            restored: true,
            supported_features: 0,
          },
          context: {
            id: '01810c29ecff1b1920614a6d187f1310',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-28T19:34:43.199Z',
          last_updated: '2022-05-28T19:34:43.199Z',
        },
        'input_text.header_color': {
          entity_id: 'input_text.header_color',
          state: 'unavailable',
          attributes: {
            restored: true,
            supported_features: 0,
          },
          context: {
            id: '01810c29ecffecb71a6724bc95c79055',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-28T19:34:43.199Z',
          last_updated: '2022-05-28T19:34:43.199Z',
        },
        'input_text.header_text_color': {
          entity_id: 'input_text.header_text_color',
          state: 'unavailable',
          attributes: {
            restored: true,
            supported_features: 0,
          },
          context: {
            id: '01810c29ed00f4c062b92007e46e8e28',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-28T19:34:43.200Z',
          last_updated: '2022-05-28T19:34:43.200Z',
        },
        'input_text.text_color': {
          entity_id: 'input_text.text_color',
          state: 'unavailable',
          attributes: {
            restored: true,
            supported_features: 0,
          },
          context: {
            id: '01810c29ed001a765781ddf54014a1f4',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-28T19:34:43.200Z',
          last_updated: '2022-05-28T19:34:43.200Z',
        },
        'input_text.secondary_text_color': {
          entity_id: 'input_text.secondary_text_color',
          state: 'unavailable',
          attributes: {
            restored: true,
            supported_features: 0,
          },
          context: {
            id: '01810c29ed00280f889b0c47d083810f',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-28T19:34:43.200Z',
          last_updated: '2022-05-28T19:34:43.200Z',
        },
        'input_text.background_image': {
          entity_id: 'input_text.background_image',
          state: 'unavailable',
          attributes: {
            restored: true,
            supported_features: 0,
          },
          context: {
            id: '01810c29ed0036826a2a479923deff2e',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-28T19:34:43.200Z',
          last_updated: '2022-05-28T19:34:43.200Z',
        },
        'input_text.icon_color_default': {
          entity_id: 'input_text.icon_color_default',
          state: 'unavailable',
          attributes: {
            restored: true,
            supported_features: 0,
          },
          context: {
            id: '01810c29ed004c5fc80861401b43b798',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-28T19:34:43.200Z',
          last_updated: '2022-05-28T19:34:43.200Z',
        },
        'input_text.icon_color_active': {
          entity_id: 'input_text.icon_color_active',
          state: 'unavailable',
          attributes: {
            restored: true,
            supported_features: 0,
          },
          context: {
            id: '01810c29ed00987998a8fb7c1e69b100',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-28T19:34:43.200Z',
          last_updated: '2022-05-28T19:34:43.200Z',
        },
        'input_text.font_family': {
          entity_id: 'input_text.font_family',
          state: 'unavailable',
          attributes: {
            restored: true,
            supported_features: 0,
          },
          context: {
            id: '01810c29ed00512bdf60f1fe28d6b3aa',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-28T19:34:43.200Z',
          last_updated: '2022-05-28T19:34:43.200Z',
        },
        'input_text.header_font_size': {
          entity_id: 'input_text.header_font_size',
          state: 'unavailable',
          attributes: {
            restored: true,
            supported_features: 0,
          },
          context: {
            id: '01810c29ed00ec36c2fded6efe2bf79e',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-28T19:34:43.200Z',
          last_updated: '2022-05-28T19:34:43.200Z',
        },
        'input_text.header_font_weight': {
          entity_id: 'input_text.header_font_weight',
          state: 'unavailable',
          attributes: {
            restored: true,
            supported_features: 0,
          },
          context: {
            id: '01810c29ed01fda261ca8425ab99d7b7',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-28T19:34:43.201Z',
          last_updated: '2022-05-28T19:34:43.201Z',
        },
        'input_text.subtitle_font_size': {
          entity_id: 'input_text.subtitle_font_size',
          state: 'unavailable',
          attributes: {
            restored: true,
            supported_features: 0,
          },
          context: {
            id: '01810c29ed01d57f265605b10c263e31',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-28T19:34:43.201Z',
          last_updated: '2022-05-28T19:34:43.201Z',
        },
        'input_text.subtitle_font_weight': {
          entity_id: 'input_text.subtitle_font_weight',
          state: 'unavailable',
          attributes: {
            restored: true,
            supported_features: 0,
          },
          context: {
            id: '01810c29ed0120b16356344b6ec62e02',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-28T19:34:43.201Z',
          last_updated: '2022-05-28T19:34:43.201Z',
        },
        'input_text.subtitle_text_color': {
          entity_id: 'input_text.subtitle_text_color',
          state: 'unavailable',
          attributes: {
            restored: true,
            supported_features: 0,
          },
          context: {
            id: '01810c29ed01b1c8cf9077cdcb7400f4',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-28T19:34:43.201Z',
          last_updated: '2022-05-28T19:34:43.201Z',
        },
        'input_text.title_text_color': {
          entity_id: 'input_text.title_text_color',
          state: 'unavailable',
          attributes: {
            restored: true,
            supported_features: 0,
          },
          context: {
            id: '01810c29ed01c765baa50a33c0c15fdc',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-28T19:34:43.201Z',
          last_updated: '2022-05-28T19:34:43.201Z',
        },
        'input_text.title_text_font_size': {
          entity_id: 'input_text.title_text_font_size',
          state: 'unavailable',
          attributes: {
            restored: true,
            supported_features: 0,
          },
          context: {
            id: '01810c29ed01188bbaab97e1ee42d29d',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-28T19:34:43.201Z',
          last_updated: '2022-05-28T19:34:43.201Z',
        },
        'input_text.title_text_font_weight': {
          entity_id: 'input_text.title_text_font_weight',
          state: 'unavailable',
          attributes: {
            restored: true,
            supported_features: 0,
          },
          context: {
            id: '01810c29ed01e2b204a4d1b2cd3fc565',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-28T19:34:43.201Z',
          last_updated: '2022-05-28T19:34:43.201Z',
        },
        'input_text.title_text_background_color': {
          entity_id: 'input_text.title_text_background_color',
          state: 'unavailable',
          attributes: {
            restored: true,
            supported_features: 0,
          },
          context: {
            id: '01810c29ed019266b4acb19d778594e7',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-28T19:34:43.201Z',
          last_updated: '2022-05-28T19:34:43.201Z',
        },
        'input_text.title_text_justify_self': {
          entity_id: 'input_text.title_text_justify_self',
          state: 'unavailable',
          attributes: {
            restored: true,
            supported_features: 0,
          },
          context: {
            id: '01810c29ed01462b8bdd76816d8b6a58',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-28T19:34:43.202Z',
          last_updated: '2022-05-28T19:34:43.202Z',
        },
        'input_text.title_text_border_radius': {
          entity_id: 'input_text.title_text_border_radius',
          state: 'unavailable',
          attributes: {
            restored: true,
            supported_features: 0,
          },
          context: {
            id: '01810c29ed02f33ed4b3301a3ff17dc4',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-28T19:34:43.202Z',
          last_updated: '2022-05-28T19:34:43.202Z',
        },
        'input_text.title_text_box_shadow': {
          entity_id: 'input_text.title_text_box_shadow',
          state: 'unavailable',
          attributes: {
            restored: true,
            supported_features: 0,
          },
          context: {
            id: '01810c29ed02100aaab573a9335471f8',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-28T19:34:43.202Z',
          last_updated: '2022-05-28T19:34:43.202Z',
        },
        'input_text.title_text_padding': {
          entity_id: 'input_text.title_text_padding',
          state: 'unavailable',
          attributes: {
            restored: true,
            supported_features: 0,
          },
          context: {
            id: '01810c29ed02af2751ca1390954e71fc',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-28T19:34:43.202Z',
          last_updated: '2022-05-28T19:34:43.202Z',
        },
        'input_text.title_text_border_style': {
          entity_id: 'input_text.title_text_border_style',
          state: 'unavailable',
          attributes: {
            restored: true,
            supported_features: 0,
          },
          context: {
            id: '01810c29ed02e5fddf2a3b28ff83059f',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-28T19:34:43.202Z',
          last_updated: '2022-05-28T19:34:43.202Z',
        },
        'input_text.title_text_border_width': {
          entity_id: 'input_text.title_text_border_width',
          state: 'unavailable',
          attributes: {
            restored: true,
            supported_features: 0,
          },
          context: {
            id: '01810c29ed02eb8c3c3d50c3b30e1496',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-28T19:34:43.202Z',
          last_updated: '2022-05-28T19:34:43.202Z',
        },
        'input_text.title_text_border_color': {
          entity_id: 'input_text.title_text_border_color',
          state: 'unavailable',
          attributes: {
            restored: true,
            supported_features: 0,
          },
          context: {
            id: '01810c29ed024bca8d9abdfed8f7c7d3',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-28T19:34:43.202Z',
          last_updated: '2022-05-28T19:34:43.202Z',
        },
        'input_text.button_color_active': {
          entity_id: 'input_text.button_color_active',
          state: 'unavailable',
          attributes: {
            restored: true,
            supported_features: 0,
          },
          context: {
            id: '01810c29ed025e4bddd014dc77b5611f',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-28T19:34:43.202Z',
          last_updated: '2022-05-28T19:34:43.202Z',
        },
        'input_text.button_name_font_size': {
          entity_id: 'input_text.button_name_font_size',
          state: 'unavailable',
          attributes: {
            restored: true,
            supported_features: 0,
          },
          context: {
            id: '01810c29ed02d63fa7a45223f15616e8',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-28T19:34:43.202Z',
          last_updated: '2022-05-28T19:34:43.202Z',
        },
        'input_text.button_name_font_weight': {
          entity_id: 'input_text.button_name_font_weight',
          state: 'unavailable',
          attributes: {
            restored: true,
            supported_features: 0,
          },
          context: {
            id: '01810c29ed03afb865fb80510730038b',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-28T19:34:43.203Z',
          last_updated: '2022-05-28T19:34:43.203Z',
        },
        'input_text.button_label_font_size': {
          entity_id: 'input_text.button_label_font_size',
          state: 'unavailable',
          attributes: {
            restored: true,
            supported_features: 0,
          },
          context: {
            id: '01810c29ed0375f77007af07b9c2fb47',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-28T19:34:43.203Z',
          last_updated: '2022-05-28T19:34:43.203Z',
        },
        'input_text.button_label_font_weight': {
          entity_id: 'input_text.button_label_font_weight',
          state: 'unavailable',
          attributes: {
            restored: true,
            supported_features: 0,
          },
          context: {
            id: '01810c29ed032666e02d6dee3feb40d6',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-28T19:34:43.203Z',
          last_updated: '2022-05-28T19:34:43.203Z',
        },
        'input_text.button_state_font_size': {
          entity_id: 'input_text.button_state_font_size',
          state: 'unavailable',
          attributes: {
            restored: true,
            supported_features: 0,
          },
          context: {
            id: '01810c29ed03780bf99a4a2f6b7722db',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-28T19:34:43.203Z',
          last_updated: '2022-05-28T19:34:43.203Z',
        },
        'input_text.button_state_font_weight': {
          entity_id: 'input_text.button_state_font_weight',
          state: 'unavailable',
          attributes: {
            restored: true,
            supported_features: 0,
          },
          context: {
            id: '01810c29ed03b5009a92fbec53efff9c',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-28T19:34:43.203Z',
          last_updated: '2022-05-28T19:34:43.203Z',
        },
        'input_text.button_name_color': {
          entity_id: 'input_text.button_name_color',
          state: 'unavailable',
          attributes: {
            restored: true,
            supported_features: 0,
          },
          context: {
            id: '01810c29ed032a82494bf88ff0168ac0',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-28T19:34:43.203Z',
          last_updated: '2022-05-28T19:34:43.203Z',
        },
        'input_text.button_name_color_active': {
          entity_id: 'input_text.button_name_color_active',
          state: 'unavailable',
          attributes: {
            restored: true,
            supported_features: 0,
          },
          context: {
            id: '01810c29ed03c7f83e9158549c2fd676',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-28T19:34:43.203Z',
          last_updated: '2022-05-28T19:34:43.203Z',
        },
        'input_text.button_label_color': {
          entity_id: 'input_text.button_label_color',
          state: 'unavailable',
          attributes: {
            restored: true,
            supported_features: 0,
          },
          context: {
            id: '01810c29ed030386c3b4ebb9c31e874f',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-28T19:34:43.203Z',
          last_updated: '2022-05-28T19:34:43.203Z',
        },
        'input_text.button_label_color_active': {
          entity_id: 'input_text.button_label_color_active',
          state: 'unavailable',
          attributes: {
            restored: true,
            supported_features: 0,
          },
          context: {
            id: '01810c29ed04a16e0560b0329a1ed831',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-28T19:34:43.204Z',
          last_updated: '2022-05-28T19:34:43.204Z',
        },
        'input_text.button_state_color': {
          entity_id: 'input_text.button_state_color',
          state: 'unavailable',
          attributes: {
            restored: true,
            supported_features: 0,
          },
          context: {
            id: '01810c29ed049b0064dd356ecf2d7009',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-28T19:34:43.204Z',
          last_updated: '2022-05-28T19:34:43.204Z',
        },
        'input_text.button_state_color_active': {
          entity_id: 'input_text.button_state_color_active',
          state: 'unavailable',
          attributes: {
            restored: true,
            supported_features: 0,
          },
          context: {
            id: '01810c29ed042ac31a541d428bafdc30',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-28T19:34:43.204Z',
          last_updated: '2022-05-28T19:34:43.204Z',
        },
        'input_text.badge_background_color': {
          entity_id: 'input_text.badge_background_color',
          state: 'unavailable',
          attributes: {
            restored: true,
            supported_features: 0,
          },
          context: {
            id: '01810c29ed041a4e3641371813ab14ff',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-28T19:34:43.204Z',
          last_updated: '2022-05-28T19:34:43.204Z',
        },
        'input_text.badge_text_color': {
          entity_id: 'input_text.badge_text_color',
          state: 'unavailable',
          attributes: {
            restored: true,
            supported_features: 0,
          },
          context: {
            id: '01810c29ed042bd7e861cbd928c5c3cc',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-28T19:34:43.204Z',
          last_updated: '2022-05-28T19:34:43.204Z',
        },
        'input_text.badge_font_size': {
          entity_id: 'input_text.badge_font_size',
          state: 'unavailable',
          attributes: {
            restored: true,
            supported_features: 0,
          },
          context: {
            id: '01810c29ed04f8ec98ff53911789ec19',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-28T19:34:43.204Z',
          last_updated: '2022-05-28T19:34:43.204Z',
        },
        'input_text.badge_font_weight': {
          entity_id: 'input_text.badge_font_weight',
          state: 'unavailable',
          attributes: {
            restored: true,
            supported_features: 0,
          },
          context: {
            id: '01810c29ed043555101a180522ba15cd',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-28T19:34:43.204Z',
          last_updated: '2022-05-28T19:34:43.204Z',
        },
        'input_text.badge_text_transform': {
          entity_id: 'input_text.badge_text_transform',
          state: 'unavailable',
          attributes: {
            restored: true,
            supported_features: 0,
          },
          context: {
            id: '01810c29ed04ac212c2617b611186a6e',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-28T19:34:43.204Z',
          last_updated: '2022-05-28T19:34:43.204Z',
        },
        'input_text.button_box_shadow_active': {
          entity_id: 'input_text.button_box_shadow_active',
          state: 'unavailable',
          attributes: {
            restored: true,
            supported_features: 0,
          },
          context: {
            id: '01810c29ed05d4fbb9c076db9f4155d4',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-28T19:34:43.205Z',
          last_updated: '2022-05-28T19:34:43.205Z',
        },
        'input_text.lock_color_active': {
          entity_id: 'input_text.lock_color_active',
          state: 'unavailable',
          attributes: {
            restored: true,
            supported_features: 0,
          },
          context: {
            id: '01810c29ed05994fd37c81ac5ea4e311',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-28T19:34:43.205Z',
          last_updated: '2022-05-28T19:34:43.205Z',
        },
        'input_text.lock_color_inactive': {
          entity_id: 'input_text.lock_color_inactive',
          state: 'unavailable',
          attributes: {
            restored: true,
            supported_features: 0,
          },
          context: {
            id: '01810c29ed059fefda59ffb375037cd4',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-28T19:34:43.205Z',
          last_updated: '2022-05-28T19:34:43.205Z',
        },
        'input_text.dark_color_unavailable': {
          entity_id: 'input_text.dark_color_unavailable',
          state: 'unavailable',
          attributes: {
            restored: true,
            supported_features: 0,
          },
          context: {
            id: '01810c29ed05d32356e384964dc313e6',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-28T19:34:43.205Z',
          last_updated: '2022-05-28T19:34:43.205Z',
        },
        'input_text.dark_lock_color_active': {
          entity_id: 'input_text.dark_lock_color_active',
          state: 'unavailable',
          attributes: {
            restored: true,
            supported_features: 0,
          },
          context: {
            id: '01810c29ed05df3958b7844ef01ebdb7',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-28T19:34:43.205Z',
          last_updated: '2022-05-28T19:34:43.205Z',
        },
        'input_text.dark_lock_color_inactive': {
          entity_id: 'input_text.dark_lock_color_inactive',
          state: 'unavailable',
          attributes: {
            restored: true,
            supported_features: 0,
          },
          context: {
            id: '01810c29ed05de373ccd6cd26d773258',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-28T19:34:43.205Z',
          last_updated: '2022-05-28T19:34:43.205Z',
        },
        'input_text.dark_header_box_shadow': {
          entity_id: 'input_text.dark_header_box_shadow',
          state: 'unavailable',
          attributes: {
            restored: true,
            supported_features: 0,
          },
          context: {
            id: '01810c29ed05c6ab96e910cce2313221',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-28T19:34:43.205Z',
          last_updated: '2022-05-28T19:34:43.205Z',
        },
        'input_text.dark_button_box_shadow_active': {
          entity_id: 'input_text.dark_button_box_shadow_active',
          state: 'unavailable',
          attributes: {
            restored: true,
            supported_features: 0,
          },
          context: {
            id: '01810c29ed05c6b5b98ba8be5353772e',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-28T19:34:43.205Z',
          last_updated: '2022-05-28T19:34:43.205Z',
        },
        'input_text.dark_footer_box_shadow': {
          entity_id: 'input_text.dark_footer_box_shadow',
          state: 'unavailable',
          attributes: {
            restored: true,
            supported_features: 0,
          },
          context: {
            id: '01810c29ed05224ef58422ecab37a8dc',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-28T19:34:43.205Z',
          last_updated: '2022-05-28T19:34:43.205Z',
        },
        'input_text.dark_header_border_radius': {
          entity_id: 'input_text.dark_header_border_radius',
          state: 'unavailable',
          attributes: {
            restored: true,
            supported_features: 0,
          },
          context: {
            id: '01810c29ed06e7fc704d705fc8ea2e74',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-28T19:34:43.206Z',
          last_updated: '2022-05-28T19:34:43.206Z',
        },
        'input_text.dark_header_badge_icon_color': {
          entity_id: 'input_text.dark_header_badge_icon_color',
          state: 'unavailable',
          attributes: {
            restored: true,
            supported_features: 0,
          },
          context: {
            id: '01810c29ed0657f704de0bbfe7a63111',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-28T19:34:43.206Z',
          last_updated: '2022-05-28T19:34:43.206Z',
        },
        'input_text.dark_header_badge_background': {
          entity_id: 'input_text.dark_header_badge_background',
          state: 'unavailable',
          attributes: {
            restored: true,
            supported_features: 0,
          },
          context: {
            id: '01810c29ed06da7fb3a66db627d700ee',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-28T19:34:43.206Z',
          last_updated: '2022-05-28T19:34:43.206Z',
        },
        'input_text.dark_header_badge_color': {
          entity_id: 'input_text.dark_header_badge_color',
          state: 'unavailable',
          attributes: {
            restored: true,
            supported_features: 0,
          },
          context: {
            id: '01810c29ed07c97a98e6f3ce7076c506',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-28T19:34:43.207Z',
          last_updated: '2022-05-28T19:34:43.207Z',
        },
        'input_text.dark_header_badge_text_color': {
          entity_id: 'input_text.dark_header_badge_text_color',
          state: 'unavailable',
          attributes: {
            restored: true,
            supported_features: 0,
          },
          context: {
            id: '01810c29ed07142018efa63dd2718ff7',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-28T19:34:43.207Z',
          last_updated: '2022-05-28T19:34:43.207Z',
        },
        'input_text.dark_nav_bar_color': {
          entity_id: 'input_text.dark_nav_bar_color',
          state: 'unavailable',
          attributes: {
            restored: true,
            supported_features: 0,
          },
          context: {
            id: '01810c29ed078dc993d03816291ebe40',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-28T19:34:43.207Z',
          last_updated: '2022-05-28T19:34:43.207Z',
        },
        'input_text.dark_nav_bar_text_color': {
          entity_id: 'input_text.dark_nav_bar_text_color',
          state: 'unavailable',
          attributes: {
            restored: true,
            supported_features: 0,
          },
          context: {
            id: '01810c29ed07de0b3abe9bf2dbf0c13a',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-28T19:34:43.207Z',
          last_updated: '2022-05-28T19:34:43.207Z',
        },
        'input_text.dark_card_color': {
          entity_id: 'input_text.dark_card_color',
          state: 'unavailable',
          attributes: {
            restored: true,
            supported_features: 0,
          },
          context: {
            id: '01810c29ed087d2740c78b2e36898da4',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-28T19:34:43.208Z',
          last_updated: '2022-05-28T19:34:43.208Z',
        },
        'input_text.dark_card_border_style': {
          entity_id: 'input_text.dark_card_border_style',
          state: 'unavailable',
          attributes: {
            restored: true,
            supported_features: 0,
          },
          context: {
            id: '01810c29ed08869604f2060e40865a86',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-28T19:34:43.208Z',
          last_updated: '2022-05-28T19:34:43.208Z',
        },
        'input_text.dark_card_border_width': {
          entity_id: 'input_text.dark_card_border_width',
          state: 'unavailable',
          attributes: {
            restored: true,
            supported_features: 0,
          },
          context: {
            id: '01810c29ed086e69c537f1dd4d8c40b2',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-28T19:34:43.208Z',
          last_updated: '2022-05-28T19:34:43.208Z',
        },
        'input_text.dark_card_border_color': {
          entity_id: 'input_text.dark_card_border_color',
          state: 'unavailable',
          attributes: {
            restored: true,
            supported_features: 0,
          },
          context: {
            id: '01810c29ed08f01951e0d373f6767f5f',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-28T19:34:43.208Z',
          last_updated: '2022-05-28T19:34:43.208Z',
        },
        'input_text.dark_card_border_radius': {
          entity_id: 'input_text.dark_card_border_radius',
          state: 'unavailable',
          attributes: {
            restored: true,
            supported_features: 0,
          },
          context: {
            id: '01810c29ed0842d24dd872a81c050083',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-28T19:34:43.208Z',
          last_updated: '2022-05-28T19:34:43.208Z',
        },
        'input_text.dark_card_box_shadow': {
          entity_id: 'input_text.dark_card_box_shadow',
          state: 'unavailable',
          attributes: {
            restored: true,
            supported_features: 0,
          },
          context: {
            id: '01810c29ed08cd51da6d7b8c444a65a1',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-28T19:34:43.208Z',
          last_updated: '2022-05-28T19:34:43.208Z',
        },
        'input_text.dark_header_color': {
          entity_id: 'input_text.dark_header_color',
          state: 'unavailable',
          attributes: {
            restored: true,
            supported_features: 0,
          },
          context: {
            id: '01810c29ed08a2679d004a492648662e',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-28T19:34:43.208Z',
          last_updated: '2022-05-28T19:34:43.208Z',
        },
        'input_text.dark_header_text_color': {
          entity_id: 'input_text.dark_header_text_color',
          state: 'unavailable',
          attributes: {
            restored: true,
            supported_features: 0,
          },
          context: {
            id: '01810c29ed08239027f2b6af38f44c02',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-28T19:34:43.208Z',
          last_updated: '2022-05-28T19:34:43.208Z',
        },
        'input_text.dark_text_color': {
          entity_id: 'input_text.dark_text_color',
          state: 'unavailable',
          attributes: {
            restored: true,
            supported_features: 0,
          },
          context: {
            id: '01810c29ed08bcf0b001d6e00396f8fe',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-28T19:34:43.208Z',
          last_updated: '2022-05-28T19:34:43.208Z',
        },
        'input_text.dark_secondary_text_color': {
          entity_id: 'input_text.dark_secondary_text_color',
          state: 'unavailable',
          attributes: {
            restored: true,
            supported_features: 0,
          },
          context: {
            id: '01810c29ed09d555b9f30a057e1e9819',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-28T19:34:43.209Z',
          last_updated: '2022-05-28T19:34:43.209Z',
        },
        'input_text.dark_background_image': {
          entity_id: 'input_text.dark_background_image',
          state: 'unavailable',
          attributes: {
            restored: true,
            supported_features: 0,
          },
          context: {
            id: '01810c29ed0938cb9b9c48a9963e678c',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-28T19:34:43.209Z',
          last_updated: '2022-05-28T19:34:43.209Z',
        },
        'input_text.dark_icon_color_default': {
          entity_id: 'input_text.dark_icon_color_default',
          state: 'unavailable',
          attributes: {
            restored: true,
            supported_features: 0,
          },
          context: {
            id: '01810c29ed096daec5c3f6d35951fc8d',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-28T19:34:43.209Z',
          last_updated: '2022-05-28T19:34:43.209Z',
        },
        'input_text.dark_icon_color_active': {
          entity_id: 'input_text.dark_icon_color_active',
          state: 'unavailable',
          attributes: {
            restored: true,
            supported_features: 0,
          },
          context: {
            id: '01810c29ed098707e163505426a6d5df',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-28T19:34:43.209Z',
          last_updated: '2022-05-28T19:34:43.209Z',
        },
        'input_text.dark_font_family': {
          entity_id: 'input_text.dark_font_family',
          state: 'unavailable',
          attributes: {
            restored: true,
            supported_features: 0,
          },
          context: {
            id: '01810c29ed0958bbf7a301b1ff50b525',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-28T19:34:43.209Z',
          last_updated: '2022-05-28T19:34:43.209Z',
        },
        'input_text.dark_header_font_size': {
          entity_id: 'input_text.dark_header_font_size',
          state: 'unavailable',
          attributes: {
            restored: true,
            supported_features: 0,
          },
          context: {
            id: '01810c29ed09e9b2c0e54327b2a9f5d5',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-28T19:34:43.209Z',
          last_updated: '2022-05-28T19:34:43.209Z',
        },
        'input_text.dark_header_font_weight': {
          entity_id: 'input_text.dark_header_font_weight',
          state: 'unavailable',
          attributes: {
            restored: true,
            supported_features: 0,
          },
          context: {
            id: '01810c29ed09ff057c5d02fe35e1aba9',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-28T19:34:43.209Z',
          last_updated: '2022-05-28T19:34:43.209Z',
        },
        'input_text.dark_subtitle_font_size': {
          entity_id: 'input_text.dark_subtitle_font_size',
          state: 'unavailable',
          attributes: {
            restored: true,
            supported_features: 0,
          },
          context: {
            id: '01810c29ed092eab3083a0db399ea27c',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-28T19:34:43.209Z',
          last_updated: '2022-05-28T19:34:43.209Z',
        },
        'input_text.dark_subtitle_font_weight': {
          entity_id: 'input_text.dark_subtitle_font_weight',
          state: 'unavailable',
          attributes: {
            restored: true,
            supported_features: 0,
          },
          context: {
            id: '01810c29ed0a7ce4f588d98fd6c6f55d',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-28T19:34:43.210Z',
          last_updated: '2022-05-28T19:34:43.210Z',
        },
        'input_text.dark_subtitle_text_color': {
          entity_id: 'input_text.dark_subtitle_text_color',
          state: 'unavailable',
          attributes: {
            restored: true,
            supported_features: 0,
          },
          context: {
            id: '01810c29ed0ac84f5c94eb18d1e6e60e',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-28T19:34:43.210Z',
          last_updated: '2022-05-28T19:34:43.210Z',
        },
        'input_text.dark_title_text_color': {
          entity_id: 'input_text.dark_title_text_color',
          state: 'unavailable',
          attributes: {
            restored: true,
            supported_features: 0,
          },
          context: {
            id: '01810c29ed0a33f51c1d9667db8b8d6b',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-28T19:34:43.210Z',
          last_updated: '2022-05-28T19:34:43.210Z',
        },
        'input_text.dark_title_text_font_size': {
          entity_id: 'input_text.dark_title_text_font_size',
          state: 'unavailable',
          attributes: {
            restored: true,
            supported_features: 0,
          },
          context: {
            id: '01810c29ed0a18c0f4f5abf2b9ff1ba3',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-28T19:34:43.210Z',
          last_updated: '2022-05-28T19:34:43.210Z',
        },
        'input_text.dark_title_text_font_weight': {
          entity_id: 'input_text.dark_title_text_font_weight',
          state: 'unavailable',
          attributes: {
            restored: true,
            supported_features: 0,
          },
          context: {
            id: '01810c29ed0a86a308bf45419a46a721',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-28T19:34:43.210Z',
          last_updated: '2022-05-28T19:34:43.210Z',
        },
        'input_text.dark_title_text_background_color': {
          entity_id: 'input_text.dark_title_text_background_color',
          state: 'unavailable',
          attributes: {
            restored: true,
            supported_features: 0,
          },
          context: {
            id: '01810c29ed0a82648fd7e1cb713798e3',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-28T19:34:43.210Z',
          last_updated: '2022-05-28T19:34:43.210Z',
        },
        'input_text.dark_title_text_justify_self': {
          entity_id: 'input_text.dark_title_text_justify_self',
          state: 'unavailable',
          attributes: {
            restored: true,
            supported_features: 0,
          },
          context: {
            id: '01810c29ed0a4a3e4f9d671cae9ea924',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-28T19:34:43.210Z',
          last_updated: '2022-05-28T19:34:43.210Z',
        },
        'input_text.dark_title_text_border_radius': {
          entity_id: 'input_text.dark_title_text_border_radius',
          state: 'unavailable',
          attributes: {
            restored: true,
            supported_features: 0,
          },
          context: {
            id: '01810c29ed0af48d5543fe894ed77de4',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-28T19:34:43.210Z',
          last_updated: '2022-05-28T19:34:43.210Z',
        },
        'input_text.dark_title_text_box_shadow': {
          entity_id: 'input_text.dark_title_text_box_shadow',
          state: 'unavailable',
          attributes: {
            restored: true,
            supported_features: 0,
          },
          context: {
            id: '01810c29ed0a54f8d11732d02c0734d3',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-28T19:34:43.210Z',
          last_updated: '2022-05-28T19:34:43.210Z',
        },
        'input_text.dark_title_text_padding': {
          entity_id: 'input_text.dark_title_text_padding',
          state: 'unavailable',
          attributes: {
            restored: true,
            supported_features: 0,
          },
          context: {
            id: '01810c29ed0b1c67461b2d5d1d8b306c',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-28T19:34:43.211Z',
          last_updated: '2022-05-28T19:34:43.211Z',
        },
        'input_text.dark_title_text_border_style': {
          entity_id: 'input_text.dark_title_text_border_style',
          state: 'unavailable',
          attributes: {
            restored: true,
            supported_features: 0,
          },
          context: {
            id: '01810c29ed0bd05912cfb5d1b77a424c',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-28T19:34:43.211Z',
          last_updated: '2022-05-28T19:34:43.211Z',
        },
        'input_text.dark_title_text_border_width': {
          entity_id: 'input_text.dark_title_text_border_width',
          state: 'unavailable',
          attributes: {
            restored: true,
            supported_features: 0,
          },
          context: {
            id: '01810c29ed0b7a3b55e05ba79a6086c1',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-28T19:34:43.211Z',
          last_updated: '2022-05-28T19:34:43.211Z',
        },
        'input_text.dark_title_text_border_color': {
          entity_id: 'input_text.dark_title_text_border_color',
          state: 'unavailable',
          attributes: {
            restored: true,
            supported_features: 0,
          },
          context: {
            id: '01810c29ed0b6de64994a0bcce0b34c2',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-28T19:34:43.211Z',
          last_updated: '2022-05-28T19:34:43.211Z',
        },
        'input_text.dark_button_color_active': {
          entity_id: 'input_text.dark_button_color_active',
          state: 'unavailable',
          attributes: {
            restored: true,
            supported_features: 0,
          },
          context: {
            id: '01810c29ed0b545aa0583239d59c2953',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-28T19:34:43.211Z',
          last_updated: '2022-05-28T19:34:43.211Z',
        },
        'input_text.dark_button_name_font_size': {
          entity_id: 'input_text.dark_button_name_font_size',
          state: 'unavailable',
          attributes: {
            restored: true,
            supported_features: 0,
          },
          context: {
            id: '01810c29ed0bf4257823bb3120bbcfbd',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-28T19:34:43.211Z',
          last_updated: '2022-05-28T19:34:43.211Z',
        },
        'input_text.dark_button_name_font_weight': {
          entity_id: 'input_text.dark_button_name_font_weight',
          state: 'unavailable',
          attributes: {
            restored: true,
            supported_features: 0,
          },
          context: {
            id: '01810c29ed0bc52063e18e9b49a2d92d',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-28T19:34:43.211Z',
          last_updated: '2022-05-28T19:34:43.211Z',
        },
        'input_text.dark_button_label_font_size': {
          entity_id: 'input_text.dark_button_label_font_size',
          state: 'unavailable',
          attributes: {
            restored: true,
            supported_features: 0,
          },
          context: {
            id: '01810c29ed0b922adcc1e675decc7da6',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-28T19:34:43.211Z',
          last_updated: '2022-05-28T19:34:43.211Z',
        },
        'input_text.dark_button_label_font_weight': {
          entity_id: 'input_text.dark_button_label_font_weight',
          state: 'unavailable',
          attributes: {
            restored: true,
            supported_features: 0,
          },
          context: {
            id: '01810c29ed0c7352df3208edc94e818e',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-28T19:34:43.212Z',
          last_updated: '2022-05-28T19:34:43.212Z',
        },
        'input_text.dark_button_state_font_size': {
          entity_id: 'input_text.dark_button_state_font_size',
          state: 'unavailable',
          attributes: {
            restored: true,
            supported_features: 0,
          },
          context: {
            id: '01810c29ed0c9ef5f6cd7571899cb342',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-28T19:34:43.212Z',
          last_updated: '2022-05-28T19:34:43.212Z',
        },
        'input_text.dark_button_state_font_weight': {
          entity_id: 'input_text.dark_button_state_font_weight',
          state: 'unavailable',
          attributes: {
            restored: true,
            supported_features: 0,
          },
          context: {
            id: '01810c29ed0cd0b12b3100325559ec24',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-28T19:34:43.212Z',
          last_updated: '2022-05-28T19:34:43.212Z',
        },
        'input_text.dark_button_name_color': {
          entity_id: 'input_text.dark_button_name_color',
          state: 'unavailable',
          attributes: {
            restored: true,
            supported_features: 0,
          },
          context: {
            id: '01810c29ed0c2bc243fc95bc252362ba',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-28T19:34:43.212Z',
          last_updated: '2022-05-28T19:34:43.212Z',
        },
        'input_text.dark_button_name_color_active': {
          entity_id: 'input_text.dark_button_name_color_active',
          state: 'unavailable',
          attributes: {
            restored: true,
            supported_features: 0,
          },
          context: {
            id: '01810c29ed0c03cbdd8c75537e753af1',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-28T19:34:43.212Z',
          last_updated: '2022-05-28T19:34:43.212Z',
        },
        'input_text.dark_button_label_color': {
          entity_id: 'input_text.dark_button_label_color',
          state: 'unavailable',
          attributes: {
            restored: true,
            supported_features: 0,
          },
          context: {
            id: '01810c29ed0c10a98dd655ece98edb93',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-28T19:34:43.212Z',
          last_updated: '2022-05-28T19:34:43.212Z',
        },
        'input_text.dark_button_label_color_active': {
          entity_id: 'input_text.dark_button_label_color_active',
          state: 'unavailable',
          attributes: {
            restored: true,
            supported_features: 0,
          },
          context: {
            id: '01810c29ed0c6662e8af0d60a6fde06d',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-28T19:34:43.212Z',
          last_updated: '2022-05-28T19:34:43.212Z',
        },
        'input_text.dark_button_state_color': {
          entity_id: 'input_text.dark_button_state_color',
          state: 'unavailable',
          attributes: {
            restored: true,
            supported_features: 0,
          },
          context: {
            id: '01810c29ed0ceb751fd39b7bb4fbe981',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-28T19:34:43.212Z',
          last_updated: '2022-05-28T19:34:43.212Z',
        },
        'input_text.dark_button_state_color_active': {
          entity_id: 'input_text.dark_button_state_color_active',
          state: 'unavailable',
          attributes: {
            restored: true,
            supported_features: 0,
          },
          context: {
            id: '01810c29ed0dcd3c749fe121f40ece77',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-28T19:34:43.213Z',
          last_updated: '2022-05-28T19:34:43.213Z',
        },
        'input_text.dark_badge_font_size': {
          entity_id: 'input_text.dark_badge_font_size',
          state: 'unavailable',
          attributes: {
            restored: true,
            supported_features: 0,
          },
          context: {
            id: '01810c29ed0d7917aa45ee3c21c13d36',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-28T19:34:43.213Z',
          last_updated: '2022-05-28T19:34:43.213Z',
        },
        'input_text.dark_badge_font_weight': {
          entity_id: 'input_text.dark_badge_font_weight',
          state: 'unavailable',
          attributes: {
            restored: true,
            supported_features: 0,
          },
          context: {
            id: '01810c29ed0deaaca6ec00d060f5c525',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-28T19:34:43.213Z',
          last_updated: '2022-05-28T19:34:43.213Z',
        },
        'input_text.dark_badge_text_transform': {
          entity_id: 'input_text.dark_badge_text_transform',
          state: 'unavailable',
          attributes: {
            restored: true,
            supported_features: 0,
          },
          context: {
            id: '01810c29ed0d72d26cad09566f27d6c4',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-28T19:34:43.213Z',
          last_updated: '2022-05-28T19:34:43.213Z',
        },
        'input_text.dark_badge_background_color': {
          entity_id: 'input_text.dark_badge_background_color',
          state: 'unavailable',
          attributes: {
            restored: true,
            supported_features: 0,
          },
          context: {
            id: '01810c29ed0d2b648217d6daaeddf6a5',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-28T19:34:43.213Z',
          last_updated: '2022-05-28T19:34:43.213Z',
        },
        'input_text.dark_badge_text_color': {
          entity_id: 'input_text.dark_badge_text_color',
          state: 'unavailable',
          attributes: {
            restored: true,
            supported_features: 0,
          },
          context: {
            id: '01810c29ed0dba3a6a23a4c46ca72424',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-28T19:34:43.213Z',
          last_updated: '2022-05-28T19:34:43.213Z',
        },
        'input_text.good_morning': {
          entity_id: 'input_text.good_morning',
          state: 'unavailable',
          attributes: {
            restored: true,
            supported_features: 0,
          },
          context: {
            id: '01810c29ed0d4eb0b14b3b4ebf86db52',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-28T19:34:43.213Z',
          last_updated: '2022-05-28T19:34:43.213Z',
        },
        'input_text.good_afternoon': {
          entity_id: 'input_text.good_afternoon',
          state: 'unavailable',
          attributes: {
            restored: true,
            supported_features: 0,
          },
          context: {
            id: '01810c29ed0d61af1ab2f66f142247a9',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-28T19:34:43.213Z',
          last_updated: '2022-05-28T19:34:43.213Z',
        },
        'input_text.good_evening': {
          entity_id: 'input_text.good_evening',
          state: 'unavailable',
          attributes: {
            restored: true,
            supported_features: 0,
          },
          context: {
            id: '01810c29ed0ecfcd813a3ace1ad7fea4',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-28T19:34:43.214Z',
          last_updated: '2022-05-28T19:34:43.214Z',
        },
        'input_text.good_night': {
          entity_id: 'input_text.good_night',
          state: 'unavailable',
          attributes: {
            restored: true,
            supported_features: 0,
          },
          context: {
            id: '01810c29ed0e68d42f77c6444a49c546',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-28T19:34:43.214Z',
          last_updated: '2022-05-28T19:34:43.214Z',
        },
        'input_select.settings_light_dark': {
          entity_id: 'input_select.settings_light_dark',
          state: 'unavailable',
          attributes: {
            restored: true,
            options: ['Light', 'Dark'],
            friendly_name: 'Theme Settings',
            supported_features: 0,
          },
          context: {
            id: '01810c29ed0e1be4528099b4afca1a73',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-28T19:34:43.214Z',
          last_updated: '2022-05-28T19:34:43.214Z',
        },
        'input_select.theme_selector_light': {
          entity_id: 'input_select.theme_selector_light',
          state: 'unavailable',
          attributes: {
            restored: true,
            options: ['HKI Default', 'HKI Custom Light', 'HKI Custom Dark'],
            friendly_name: 'Theme Selector Light',
            supported_features: 0,
          },
          context: {
            id: '01810c29ed0ebf218ce2eedbae1d07f7',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-28T19:34:43.214Z',
          last_updated: '2022-05-28T19:34:43.214Z',
        },
        'input_select.theme_selector_dark': {
          entity_id: 'input_select.theme_selector_dark',
          state: 'unavailable',
          attributes: {
            restored: true,
            options: ['HKI Default', 'HKI Custom Light', 'HKI Custom Dark'],
            friendly_name: 'Theme Selector Dark',
            supported_features: 0,
          },
          context: {
            id: '01810c29ed0e6c779ed40d3377169985',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-28T19:34:43.214Z',
          last_updated: '2022-05-28T19:34:43.214Z',
        },
        'input_select.navigation_bar_direction': {
          entity_id: 'input_select.navigation_bar_direction',
          state: 'unavailable',
          attributes: {
            restored: true,
            options: ['Left', 'Right'],
            supported_features: 0,
          },
          context: {
            id: '01810c29ed0e380503ca343cfbda3d49',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-28T19:34:43.214Z',
          last_updated: '2022-05-28T19:34:43.214Z',
        },
        'input_select.navigation_bar_options': {
          entity_id: 'input_select.navigation_bar_options',
          state: 'unavailable',
          attributes: {
            restored: true,
            options: ['Date', 'Time', 'User', 'Hide'],
            supported_features: 0,
          },
          context: {
            id: '01810c29ed0eea1e157292030756bbbb',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-28T19:34:43.214Z',
          last_updated: '2022-05-28T19:34:43.214Z',
        },
        'input_select.navigation_bar': {
          entity_id: 'input_select.navigation_bar',
          state: 'unavailable',
          attributes: {
            restored: true,
            options: ['Off', 'Top', 'Bottom'],
            supported_features: 0,
          },
          context: {
            id: '01810c29ed0ed7a7bcc30e2342e493b3',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-28T19:34:43.215Z',
          last_updated: '2022-05-28T19:34:43.215Z',
        },
        'input_select.find_my': {
          entity_id: 'input_select.find_my',
          state: 'unavailable',
          attributes: {
            restored: true,
            options: ['Persons', 'Devices', 'Vehicles'],
            supported_features: 0,
          },
          context: {
            id: '01810c29ed0f465bfd0f5be8d5bc3f65',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-28T19:34:43.215Z',
          last_updated: '2022-05-28T19:34:43.215Z',
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
            id: '01810c29ed0f96ba4a268efc54f08044',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-28T19:34:43.215Z',
          last_updated: '2022-05-28T19:34:43.215Z',
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
            id: '01810c29ed0f6c70294a1c0a6876ca8b',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-28T19:34:43.215Z',
          last_updated: '2022-05-28T19:34:43.215Z',
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
            id: '01810c29ed0fc5a323616272488809a4',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-28T19:34:43.215Z',
          last_updated: '2022-05-28T19:34:43.215Z',
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
            id: '01810c29ed0f7f38a8919aec75ea2a28',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-28T19:34:43.215Z',
          last_updated: '2022-05-28T19:34:43.215Z',
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
            id: '01810c29ed0f473f41ffb834b4987f30',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-28T19:34:43.215Z',
          last_updated: '2022-05-28T19:34:43.215Z',
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
            id: '01810c29ed0fce058aa50e21c8c060f5',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-28T19:34:43.215Z',
          last_updated: '2022-05-28T19:34:43.215Z',
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
            id: '01810c29ed10fcb6aa0f2282bfb8c23e',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-28T19:34:43.216Z',
          last_updated: '2022-05-28T19:34:43.216Z',
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
            id: '01810c29ed106c62fbd6d0da64da187a',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-28T19:34:43.216Z',
          last_updated: '2022-05-28T19:34:43.216Z',
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
            id: '01810c29ed108c7fe0dac9fc205c0db1',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-28T19:34:43.216Z',
          last_updated: '2022-05-28T19:34:43.216Z',
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
            id: '01810c29ed1086209cbe76ade7a2c2d4',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-28T19:34:43.216Z',
          last_updated: '2022-05-28T19:34:43.216Z',
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
            id: '01810c29ed10683377220d75f5f61164',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-28T19:34:43.216Z',
          last_updated: '2022-05-28T19:34:43.216Z',
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
            id: '01810c29ed1057a72f356db491784221',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-28T19:34:43.216Z',
          last_updated: '2022-05-28T19:34:43.216Z',
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
            id: '01810c29ed10ff33c8d276bc8f018644',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-28T19:34:43.216Z',
          last_updated: '2022-05-28T19:34:43.216Z',
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
            id: '01810c29ed109ba10851a7ab1b037cd8',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-28T19:34:43.216Z',
          last_updated: '2022-05-28T19:34:43.216Z',
        },
        'script.hki_dark_default': {
          entity_id: 'script.hki_dark_default',
          state: 'unavailable',
          attributes: {
            restored: true,
            friendly_name: 'hki_dark_default',
            supported_features: 0,
          },
          context: {
            id: '01810c29ed1017791f63c542f80b5899',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-28T19:34:43.216Z',
          last_updated: '2022-05-28T19:34:43.216Z',
        },
        'script.hki_dark_empty': {
          entity_id: 'script.hki_dark_empty',
          state: 'unavailable',
          attributes: {
            restored: true,
            friendly_name: 'hki_dark_empty',
            supported_features: 0,
          },
          context: {
            id: '01810c29ed11bd313bcf0b96da4ebdcc',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-28T19:34:43.217Z',
          last_updated: '2022-05-28T19:34:43.217Z',
        },
        'script.hki_light_default': {
          entity_id: 'script.hki_light_default',
          state: 'unavailable',
          attributes: {
            restored: true,
            friendly_name: 'hki_light_default',
            supported_features: 0,
          },
          context: {
            id: '01810c29ed11a99953a98d996961053a',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-28T19:34:43.217Z',
          last_updated: '2022-05-28T19:34:43.217Z',
        },
        'script.hki_light_empty': {
          entity_id: 'script.hki_light_empty',
          state: 'unavailable',
          attributes: {
            restored: true,
            friendly_name: 'hki_light_empty',
            supported_features: 0,
          },
          context: {
            id: '01810c29ed1101f0b10ccf3b0550249e',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-28T19:34:43.217Z',
          last_updated: '2022-05-28T19:34:43.217Z',
        },
        'script.hki_header_greeting_default': {
          entity_id: 'script.hki_header_greeting_default',
          state: 'unavailable',
          attributes: {
            restored: true,
            friendly_name: 'hki_header_greeting_default',
            supported_features: 0,
          },
          context: {
            id: '01810c29ed1175789b71d049cb77c6e7',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-28T19:34:43.217Z',
          last_updated: '2022-05-28T19:34:43.217Z',
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
            id: '01810c29fb01c46ac449509647cacd12',
            parent_id: null,
            user_id: null,
          },
          last_changed: '2022-05-28T19:34:46.785Z',
          last_updated: '2022-05-28T19:34:46.785Z',
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
          'tts',
          'rpi_power',
          'frontend',
          'sensor.hassio',
          'zeroconf',
          'system_health',
          'camera',
          'input_datetime',
          'ecobee',
          'timer',
          'select.deebot',
          'default_config',
          'lovelace',
          'input_button',
          'sun',
          'search',
          'auth',
          'binary_sensor.hassio',
          'climate',
          'camera.deebot',
          'person',
          'my',
          'tag',
          'counter',
          'notify',
          'media_source',
          'stream',
          'input_text',
          'image',
          'scene.homeassistant',
          'system_log',
          'remote.apple_tv',
          'device_tracker.mobile_app',
          'switch',
          'humidifier',
          'notify.mobile_app',
          'sensor.upnp',
          'binary_sensor.ecobee',
          'cloud',
          'ffmpeg',
          'diagnostics',
          'input_boolean',
          'weather',
          'ssdp',
          'sensor',
          'scene',
          'webhook',
          'api',
          'usb',
          'recorder',
          'persistent_notification',
          'apple_tv',
          'update.hassio',
          'binary_sensor.deebot',
          'upnp',
          'binary_sensor.mobile_app',
          'device_automation',
          'hassio',
          'zone',
          'media_player',
          'climate.ecobee',
          'websocket_api',
          'sensor.mobile_app',
          'onboarding',
          'analytics',
          'switch.deebot',
          'http',
          'homeassistant',
          'lifx',
          'device_tracker',
          'dhcp',
          'button',
          'vacuum',
          'trace',
          'script',
          'sensor.deebot',
          'light.lifx',
          'energy',
          'number.deebot',
          'button.deebot',
          'sensor.ecobee',
          'homekit',
          'number',
          'light',
          'binary_sensor.upnp',
          'humidifier.ecobee',
          'update',
          'network',
          'mobile_app',
          'weather.ecobee',
          'sensor.energy',
          'logbook',
          'binary_sensor',
          'select',
          'history',
          'panel_custom',
          'vacuum.deebot',
          'remote',
          'blueprint',
          'config',
          'sensor.hacs',
          'automation',
          'deebot',
          'input_number',
          'hacs',
          'binary_sensor.rpi_power',
          'tts.google_translate',
          'media_player.apple_tv',
          'input_select',
          'map',
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
        'lovelace-homekit': {
          component_name: 'lovelace',
          icon: 'mdi:home-assistant',
          title: 'Homekit',
          config: {
            mode: 'storage',
          },
          url_path: 'lovelace-homekit',
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
              js_url: '/local/react-panel/index.js',
            },
          },
          url_path: 'react-panel-prod',
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
          created_at: '2022-05-28T19:35:20.408941+00:00',
        },
      ],
    },
    suspendReconnectPromise: {},
  },
  connected: true,
  states: {
    'person.first_last': {
      entity_id: 'person.first_last',
      state: 'unknown',
      attributes: {
        editable: false,
        id: 'first_last',
        user_id: 'fefe8d8a7bec4ab9ad5ca86ac9734a4c',
        entity_picture:
          '/api/image/serve/40a12e595b7c321dcbc108342b96d3d9/512x512',
        friendly_name: 'Mark',
      },
      context: {
        id: '01810c29ed25e513b417fba55a640827',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-28T19:34:33.052Z',
      last_updated: '2022-05-28T19:34:43.237Z',
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
        id: '01810c29ed254197c2392ad9c3d6bf87',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-28T19:34:33.054Z',
      last_updated: '2022-05-28T19:34:43.237Z',
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
        id: '01810c29ddf2b297519669d398b83ec6',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-28T19:34:39.346Z',
      last_updated: '2022-05-28T19:34:39.346Z',
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
        id: '01810c29ddf34d1a1e9b7adbdea96838',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-28T19:34:39.347Z',
      last_updated: '2022-05-28T19:34:39.347Z',
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
        id: '01810c29ddf38424b84c4ab2ab7c8a19',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-28T19:34:39.348Z',
      last_updated: '2022-05-28T19:34:39.348Z',
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
        id: '01810c29ddf4558a26d6582b76373383',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-28T19:34:39.348Z',
      last_updated: '2022-05-28T19:34:39.348Z',
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
        id: '01810c29ddf461d53c930afbd842864f',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-28T19:34:39.348Z',
      last_updated: '2022-05-28T19:34:39.348Z',
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
        id: '01810c29ddf58b9801383f60f7b19257',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-28T19:34:39.349Z',
      last_updated: '2022-05-28T19:34:39.349Z',
    },
    'sun.sun': {
      entity_id: 'sun.sun',
      state: 'above_horizon',
      attributes: {
        next_dawn: '2022-05-29T09:12:36.366587+00:00',
        next_dusk: '2022-05-29T00:59:45.451871+00:00',
        next_midnight: '2022-05-29T05:06:22+00:00',
        next_noon: '2022-05-29T17:06:16+00:00',
        next_rising: '2022-05-29T09:44:42.442374+00:00',
        next_setting: '2022-05-29T00:27:39.027454+00:00',
        elevation: 53.9,
        azimuth: 252.18,
        rising: false,
        friendly_name: 'Sun',
      },
      context: {
        id: '01810c29de3ebb05b47670119f424ce3',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-28T19:34:39.422Z',
      last_updated: '2022-05-28T19:34:39.422Z',
    },
    'zone.home': {
      entity_id: 'zone.home',
      state: '0',
      attributes: {
        latitude: 38.9291848698784,
        longitude: -77.22924259956928,
        radius: 100,
        passive: false,
        persons: [],
        editable: true,
        icon: 'mdi:home',
        friendly_name: 'Home',
      },
      context: {
        id: '01810c29df2620182824cd16f3f8dcca',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-28T19:34:39.654Z',
      last_updated: '2022-05-28T19:34:39.654Z',
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
        id: '01810c29df60e16206ae6532cd3d8e0b',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-28T19:34:39.712Z',
      last_updated: '2022-05-28T19:34:39.712Z',
    },
    'media_player.living_room': {
      entity_id: 'media_player.living_room',
      state: 'paused',
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
        media_content_type: 'music',
        media_duration: 264,
        media_position: 32,
        media_position_updated_at: '2022-05-28T19:34:41.222884+00:00',
        media_title: 'Sad Song feat. Elena Coats',
        media_artist: 'We the Kings',
        media_album_name: 'Stripped',
        app_id: 'com.apple.TVMusic',
        app_name: 'Music',
        shuffle: true,
        repeat: 'off',
        entity_picture:
          '/api/media_player_proxy/media_player.living_room?token=5e06197296f0a29b234b18e04d73493d17edc05a9eb1d89566a3ad3d21b68ccf&cache=Music125/v4/ac/8d/da/ac8ddad8-cf5a-4c9c-0833-8c0c7dcc61c5/stripped_cover_1600x1600.jpg',
        friendly_name: 'Living Room',
        supported_features: 450487,
      },
      context: {
        id: '01810c29e547cd92bb826864ff25606b',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-28T19:34:41.213Z',
      last_updated: '2022-05-28T19:34:41.223Z',
    },
    'remote.living_room': {
      entity_id: 'remote.living_room',
      state: 'on',
      attributes: {
        friendly_name: 'Living Room',
        supported_features: 0,
      },
      context: {
        id: '01810c29e538def7fa6317531d19592e',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-28T19:34:41.208Z',
      last_updated: '2022-05-28T19:34:41.208Z',
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
        id: '01810c29e298ad92cb812d9c16c37903',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-28T19:34:40.537Z',
      last_updated: '2022-05-28T19:34:40.537Z',
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
        id: '01810c29e2995e60204cbc991acaa1f9',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-28T19:34:40.537Z',
      last_updated: '2022-05-28T19:34:40.537Z',
    },
    'sensor.iphone_mark_bssid': {
      entity_id: 'sensor.iphone_mark_bssid',
      state: '6c:ae:f6:ca:75:88',
      attributes: {
        icon: 'mdi:wifi-star',
        friendly_name: 'iphone mark BSSID',
      },
      context: {
        id: '01810c29e299a288a5c3b26fd5cd47a5',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-28T19:34:40.537Z',
      last_updated: '2022-05-28T19:34:40.537Z',
    },
    'sensor.iphone_mark_battery_level': {
      entity_id: 'sensor.iphone_mark_battery_level',
      state: '85',
      attributes: {
        unit_of_measurement: '%',
        device_class: 'battery',
        icon: 'mdi:battery-80',
        friendly_name: 'iphone mark Battery Level',
      },
      context: {
        id: '01810c29e29a5b90be9dc73c15153538',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-28T19:34:40.538Z',
      last_updated: '2022-05-28T19:34:40.538Z',
    },
    'sensor.iphone_mark_battery_state': {
      entity_id: 'sensor.iphone_mark_battery_state',
      state: 'Not Charging',
      attributes: {
        'Low Power Mode': false,
        icon: 'mdi:battery-80',
        friendly_name: 'iphone mark Battery State',
      },
      context: {
        id: '01810c29e29a4bdab3bb7753b3f867ee',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-28T19:34:40.538Z',
      last_updated: '2022-05-28T19:34:40.538Z',
    },
    'sensor.iphone_mark_connection_type': {
      entity_id: 'sensor.iphone_mark_connection_type',
      state: 'Wi-Fi',
      attributes: {
        icon: 'mdi:wifi',
        friendly_name: 'iphone mark Connection Type',
      },
      context: {
        id: '01810c29e29a1212f5243677be59d594',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-28T19:34:40.538Z',
      last_updated: '2022-05-28T19:34:40.538Z',
    },
    'sensor.iphone_mark_distance': {
      entity_id: 'sensor.iphone_mark_distance',
      state: '1029',
      attributes: {
        unit_of_measurement: 'm',
        icon: 'mdi:hiking',
        friendly_name: 'iphone mark Distance',
      },
      context: {
        id: '01810c29e29be32642c30c8241c08241',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-28T19:34:40.539Z',
      last_updated: '2022-05-28T19:34:40.539Z',
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
        id: '01810c29e29bbfd9a5c6f847b4d02412',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-28T19:34:40.539Z',
      last_updated: '2022-05-28T19:34:40.539Z',
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
        id: '01810c29e29c29c9582530c8c3fe78a5',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-28T19:34:40.540Z',
      last_updated: '2022-05-28T19:34:40.540Z',
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
        Location: [38.929229736328125, -77.22927715772039],
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
        id: '01810c29e29caef34e45a103fc9418f5',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-28T19:34:40.540Z',
      last_updated: '2022-05-28T19:34:40.540Z',
    },
    'sensor.iphone_mark_last_update_trigger': {
      entity_id: 'sensor.iphone_mark_last_update_trigger',
      state: 'Launch',
      attributes: {
        icon: 'mdi:cellphone-wireless',
        friendly_name: 'iphone mark Last Update Trigger',
      },
      context: {
        id: '01810c29e29ca1412c1f05242cfff27a',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-28T19:34:40.540Z',
      last_updated: '2022-05-28T19:34:40.540Z',
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
        id: '01810c29e29df9b98f50cabd163e0311',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-28T19:34:40.541Z',
      last_updated: '2022-05-28T19:34:40.541Z',
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
        id: '01810c29e29daf8dd95ab746708175d6',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-28T19:34:40.541Z',
      last_updated: '2022-05-28T19:34:40.541Z',
    },
    'sensor.iphone_mark_ssid': {
      entity_id: 'sensor.iphone_mark_ssid',
      state: 'Lyck',
      attributes: {
        icon: 'mdi:wifi',
        friendly_name: 'iphone mark SSID',
      },
      context: {
        id: '01810c29e29e9a56d2bab2b3529d7583',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-28T19:34:40.542Z',
      last_updated: '2022-05-28T19:34:40.542Z',
    },
    'sensor.iphone_mark_steps': {
      entity_id: 'sensor.iphone_mark_steps',
      state: '1285',
      attributes: {
        unit_of_measurement: 'steps',
        icon: 'mdi:walk',
        friendly_name: 'iphone mark Steps',
      },
      context: {
        id: '01810c29e29e39031d4867281ce3d46c',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-28T19:34:40.542Z',
      last_updated: '2022-05-28T19:34:40.542Z',
    },
    'sensor.iphone_mark_storage': {
      entity_id: 'sensor.iphone_mark_storage',
      state: '62.69',
      attributes: {
        Available: '60.56 GB',
        'Available (Important)': '164.99 GB',
        'Available (Opportunistic)': '160.42 GB',
        Total: '255.88 GB',
        unit_of_measurement: '% available',
        icon: 'mdi:database',
        friendly_name: 'iphone mark Storage',
      },
      context: {
        id: '01810c29e29ec43eb5a4c04514246d1b',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-28T19:34:40.542Z',
      last_updated: '2022-05-28T19:34:40.542Z',
    },
    'binary_sensor.iphone_mark_focus': {
      entity_id: 'binary_sensor.iphone_mark_focus',
      state: 'off',
      attributes: {
        icon: 'mdi:moon-waning-crescent',
        friendly_name: 'iphone mark Focus',
      },
      context: {
        id: '01810c29e29fdd203566c8c07da861ea',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-28T19:34:40.543Z',
      last_updated: '2022-05-28T19:34:40.543Z',
    },
    'device_tracker.iphone_mark': {
      entity_id: 'device_tracker.iphone_mark',
      state: 'home',
      attributes: {
        source_type: 'gps',
        battery_level: 80,
        latitude: 38.929229736328125,
        longitude: -77.22927715772039,
        gps_accuracy: 35,
        altitude: 162.77061462402344,
        vertical_accuracy: 5.059759616851807,
        friendly_name: 'iphone mark',
      },
      context: {
        id: '01810c29e409a6418bdd976cffa4e772',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-28T19:34:40.905Z',
      last_updated: '2022-05-28T19:34:40.905Z',
    },
    'binary_sensor.ecobee_occupancy': {
      entity_id: 'binary_sensor.ecobee_occupancy',
      state: 'on',
      attributes: {
        device_class: 'occupancy',
        friendly_name: 'My ecobee Occupancy',
      },
      context: {
        id: '01810c29e42be52bd6e0896717655b12',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-28T19:34:40.939Z',
      last_updated: '2022-05-28T19:34:40.939Z',
    },
    'binary_sensor.bedroom_sensor_occupancy': {
      entity_id: 'binary_sensor.bedroom_sensor_occupancy',
      state: 'off',
      attributes: {
        device_class: 'occupancy',
        friendly_name: 'bedroom sensor Occupancy',
      },
      context: {
        id: '01810c29e42cda5fc7f41f27f46cb642',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-28T19:34:40.940Z',
      last_updated: '2022-05-28T19:34:40.940Z',
    },
    'binary_sensor.office_occupancy': {
      entity_id: 'binary_sensor.office_occupancy',
      state: 'on',
      attributes: {
        device_class: 'occupancy',
        friendly_name: 'Office Occupancy',
      },
      context: {
        id: '01810c29e42d096fd5849073b10acdeb',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-28T19:34:40.941Z',
      last_updated: '2022-05-28T19:34:40.941Z',
    },
    'sensor.ecobee_temperature': {
      entity_id: 'sensor.ecobee_temperature',
      state: '75.3',
      attributes: {
        state_class: 'measurement',
        unit_of_measurement: '°F',
        device_class: 'temperature',
        friendly_name: 'My ecobee Temperature',
      },
      context: {
        id: '01810c29e42dc85c587f46915a1b0481',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-28T19:34:40.941Z',
      last_updated: '2022-05-28T19:34:40.941Z',
    },
    'sensor.ecobee_humidity': {
      entity_id: 'sensor.ecobee_humidity',
      state: '54',
      attributes: {
        state_class: 'measurement',
        unit_of_measurement: '%',
        device_class: 'humidity',
        friendly_name: 'My ecobee Humidity',
      },
      context: {
        id: '01810c29e42e27356bf1b307ea0ff9d9',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-28T19:34:40.942Z',
      last_updated: '2022-05-28T19:34:40.942Z',
    },
    'sensor.bedroom_sensor_temperature': {
      entity_id: 'sensor.bedroom_sensor_temperature',
      state: '75.3',
      attributes: {
        state_class: 'measurement',
        unit_of_measurement: '°F',
        device_class: 'temperature',
        friendly_name: 'bedroom sensor Temperature',
      },
      context: {
        id: '01810c29e42fbaf0150d29a99d256e3a',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-28T19:34:40.943Z',
      last_updated: '2022-05-28T19:34:40.943Z',
    },
    'sensor.office_temperature': {
      entity_id: 'sensor.office_temperature',
      state: '76.9',
      attributes: {
        state_class: 'measurement',
        unit_of_measurement: '°F',
        device_class: 'temperature',
        friendly_name: 'Office Temperature',
      },
      context: {
        id: '01810c29e430acef2b91050ace33d1e0',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-28T19:34:40.944Z',
      last_updated: '2022-05-28T19:34:40.944Z',
    },
    'weather.ecobee': {
      entity_id: 'weather.ecobee',
      state: 'partlycloudy',
      attributes: {
        temperature: 79,
        humidity: 46,
        pressure: 29.83,
        wind_bearing: 289,
        wind_speed: 9,
        visibility: 13,
        forecast: [
          {
            condition: 'partlycloudy',
            temperature: 79,
            templow: 64,
            wind_bearing: 289,
            wind_speed: 9,
            datetime: '2022-05-28T19:34:40.962620+00:00',
          },
          {
            condition: 'sunny',
            temperature: 81,
            templow: 66,
            wind_bearing: 96,
            wind_speed: 3,
            datetime: '2022-05-29T19:34:40.962620+00:00',
          },
          {
            condition: 'sunny',
            temperature: 87,
            templow: 69,
            wind_bearing: 195,
            wind_speed: 4,
            datetime: '2022-05-30T19:34:40.962620+00:00',
          },
          {
            condition: 'sunny',
            temperature: 90,
            templow: 73,
            wind_bearing: 251,
            wind_speed: 4,
            datetime: '2022-05-31T19:34:40.962620+00:00',
          },
          {
            condition: 'partlycloudy',
            temperature: 88,
            templow: 77,
            wind_bearing: 43,
            wind_speed: 4,
            datetime: '2022-06-01T19:34:40.962620+00:00',
          },
        ],
        attribution:
          'Ecobee weather provided by FI:NDV at 2022-05-28 19:30:45 UTC',
        friendly_name: 'My ecobee',
      },
      context: {
        id: '01810c29e442fed14febad0befe9b36f',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-28T19:34:40.962Z',
      last_updated: '2022-05-28T19:34:40.962Z',
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
        temperature: 77,
        target_temp_high: null,
        target_temp_low: null,
        current_humidity: 54,
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
        id: '01810c29e4445057ccad10e676a4b1ae',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-28T19:34:40.964Z',
      last_updated: '2022-05-28T19:34:40.964Z',
    },
    'light.couch_lamp': {
      entity_id: 'light.couch_lamp',
      state: 'off',
      attributes: {
        effect_list: ['effect_pulse', 'effect_stop'],
        supported_color_modes: ['brightness'],
        friendly_name: 'Couch Lamp',
        supported_features: 37,
      },
      context: {
        id: '01810c29e477afc62c4959dcbf4a1487',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-28T19:34:41.015Z',
      last_updated: '2022-05-28T19:34:41.015Z',
    },
    'binary_sensor.eero_wan_status': {
      entity_id: 'binary_sensor.eero_wan_status',
      state: 'on',
      attributes: {
        device_class: 'connectivity',
        friendly_name: 'eero wan status',
      },
      context: {
        id: '01810c29e47f4da6a27a7e686fd6dc5f',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-28T19:34:41.023Z',
      last_updated: '2022-05-28T19:34:41.023Z',
    },
    'sensor.eero_external_ip': {
      entity_id: 'sensor.eero_external_ip',
      state: '108.28.69.66',
      attributes: {
        icon: 'mdi:server-network',
        friendly_name: 'eero External IP',
      },
      context: {
        id: '01810c29e4808fb518280984b9782bb5',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-28T19:34:41.024Z',
      last_updated: '2022-05-28T19:34:41.024Z',
    },
    'sensor.eero_wan_status': {
      entity_id: 'sensor.eero_wan_status',
      state: 'Connected',
      attributes: {
        icon: 'mdi:server-network',
        friendly_name: 'eero wan status',
      },
      context: {
        id: '01810c29e481c5d6c71dc9397c039aa0',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-28T19:34:41.025Z',
      last_updated: '2022-05-28T19:34:41.025Z',
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
        brightness: 255,
        color_temp: 364,
        hs_color: [28.295, 64.242],
        rgb_color: [255, 168, 91],
        xy_color: [0.521, 0.387],
        icon: 'mdi:led-strip-variant',
        friendly_name: 'Desk light',
        supported_features: 55,
      },
      context: {
        id: '01810c29e484982c85c74ffe6d7f4756',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-28T19:34:41.029Z',
      last_updated: '2022-05-28T19:34:41.029Z',
    },
    'sensor.hacs': {
      entity_id: 'sensor.hacs',
      state: '0',
      attributes: {
        repositories: [],
        unit_of_measurement: 'pending update(s)',
        icon: 'hacs:hacs',
        friendly_name: 'hacs',
      },
      context: {
        id: '01810c2a08aa49416de8ea07e011f5cc',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-28T19:34:50.282Z',
      last_updated: '2022-05-28T19:34:50.282Z',
    },
    'vacuum.alfred_2': {
      entity_id: 'vacuum.alfred_2',
      state: 'error',
      attributes: {
        fan_speed_list: ['quiet', 'normal', 'max', 'max+'],
        battery_level: 87,
        battery_icon: 'mdi:battery-90',
        fan_speed: 'max',
        rooms: {
          default: [0, 1, 2, 3],
        },
        last_error: 'WheelAbnormal: Driving Wheel malfunction (103)',
        friendly_name: 'Alfred',
        supported_features: 15228,
      },
      context: {
        id: '01810c2a1fc680d477f5304c2c5dbcf5',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-28T19:34:46.142Z',
      last_updated: '2022-05-28T19:34:56.198Z',
    },
    'button.alfred_life_span_side_brush_reset': {
      entity_id: 'button.alfred_life_span_side_brush_reset',
      state: 'unknown',
      attributes: {
        icon: 'mdi:broom',
        friendly_name: 'Alfred life span side brush reset',
      },
      context: {
        id: '01810c29ecf7cc1b3d70d99d2e83019c',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-28T19:34:43.191Z',
      last_updated: '2022-05-28T19:34:43.191Z',
    },
    'button.alfred_life_span_brush_reset': {
      entity_id: 'button.alfred_life_span_brush_reset',
      state: 'unknown',
      attributes: {
        icon: 'mdi:broom',
        friendly_name: 'Alfred life span brush reset',
      },
      context: {
        id: '01810c29ecf76e2d852d107ce0d62a6b',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-28T19:34:43.191Z',
      last_updated: '2022-05-28T19:34:43.191Z',
    },
    'button.alfred_life_span_filter_reset': {
      entity_id: 'button.alfred_life_span_filter_reset',
      state: 'unknown',
      attributes: {
        icon: 'mdi:air-filter',
        friendly_name: 'Alfred life span filter reset',
      },
      context: {
        id: '01810c29ecf87df21b5daff0fc279364',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-28T19:34:43.192Z',
      last_updated: '2022-05-28T19:34:43.192Z',
    },
    'button.alfred_relocate': {
      entity_id: 'button.alfred_relocate',
      state: 'unknown',
      attributes: {
        icon: 'mdi:map-marker-question',
        friendly_name: 'Alfred relocate',
      },
      context: {
        id: '01810c29ecf8de927ab9c6974b2d3e90',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-28T19:34:43.192Z',
      last_updated: '2022-05-28T19:34:43.192Z',
    },
    'input_number.empty': {
      entity_id: 'input_number.empty',
      state: 'unavailable',
      attributes: {
        restored: true,
        supported_features: 0,
      },
      context: {
        id: '01810c29ecfc01e769c133ba80c281d5',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-28T19:34:43.196Z',
      last_updated: '2022-05-28T19:34:43.196Z',
    },
    'input_boolean.dummy1': {
      entity_id: 'input_boolean.dummy1',
      state: 'unavailable',
      attributes: {
        restored: true,
        supported_features: 0,
      },
      context: {
        id: '01810c29ecfdb0ad16a1c5de30cc6ad8',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-28T19:34:43.197Z',
      last_updated: '2022-05-28T19:34:43.197Z',
    },
    'input_boolean.empty': {
      entity_id: 'input_boolean.empty',
      state: 'unavailable',
      attributes: {
        restored: true,
        supported_features: 0,
      },
      context: {
        id: '01810c29ecfdca903690d221d4852642',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-28T19:34:43.197Z',
      last_updated: '2022-05-28T19:34:43.197Z',
    },
    'input_boolean.remote_control': {
      entity_id: 'input_boolean.remote_control',
      state: 'unavailable',
      attributes: {
        restored: true,
        supported_features: 0,
      },
      context: {
        id: '01810c29ecfd9c13b670a5c48d7a51ff',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-28T19:34:43.197Z',
      last_updated: '2022-05-28T19:34:43.197Z',
    },
    'input_text.opacity_on': {
      entity_id: 'input_text.opacity_on',
      state: 'unavailable',
      attributes: {
        restored: true,
        supported_features: 0,
      },
      context: {
        id: '01810c29ecfda895812952ce4e9d730e',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-28T19:34:43.197Z',
      last_updated: '2022-05-28T19:34:43.197Z',
    },
    'input_text.opacity_off': {
      entity_id: 'input_text.opacity_off',
      state: 'unavailable',
      attributes: {
        restored: true,
        supported_features: 0,
      },
      context: {
        id: '01810c29ecfd8e0e7293dd6a622ee279',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-28T19:34:43.197Z',
      last_updated: '2022-05-28T19:34:43.197Z',
    },
    'input_text.opacity_unavailable': {
      entity_id: 'input_text.opacity_unavailable',
      state: 'unavailable',
      attributes: {
        restored: true,
        supported_features: 0,
      },
      context: {
        id: '01810c29ecfd8bdc0e88aa07c9c8d767',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-28T19:34:43.197Z',
      last_updated: '2022-05-28T19:34:43.197Z',
    },
    'input_text.card_box_shadow_light_color': {
      entity_id: 'input_text.card_box_shadow_light_color',
      state: 'unavailable',
      attributes: {
        restored: true,
        supported_features: 0,
      },
      context: {
        id: '01810c29ecfd67419d1e18379b934c6e',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-28T19:34:43.197Z',
      last_updated: '2022-05-28T19:34:43.197Z',
    },
    'input_text.color_unavailable': {
      entity_id: 'input_text.color_unavailable',
      state: 'unavailable',
      attributes: {
        restored: true,
        supported_features: 0,
      },
      context: {
        id: '01810c29ecfd8d1b61cf6998141fa464',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-28T19:34:43.197Z',
      last_updated: '2022-05-28T19:34:43.197Z',
    },
    'input_text.header_badge_icon_color': {
      entity_id: 'input_text.header_badge_icon_color',
      state: 'unavailable',
      attributes: {
        restored: true,
        supported_features: 0,
      },
      context: {
        id: '01810c29ecfe86b3bda2530afcba38e2',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-28T19:34:43.198Z',
      last_updated: '2022-05-28T19:34:43.198Z',
    },
    'input_text.header_badge_background': {
      entity_id: 'input_text.header_badge_background',
      state: 'unavailable',
      attributes: {
        restored: true,
        supported_features: 0,
      },
      context: {
        id: '01810c29ecfe48ddeab71fe9d91cea6b',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-28T19:34:43.198Z',
      last_updated: '2022-05-28T19:34:43.198Z',
    },
    'input_text.header_badge_color': {
      entity_id: 'input_text.header_badge_color',
      state: 'unavailable',
      attributes: {
        restored: true,
        supported_features: 0,
      },
      context: {
        id: '01810c29ecfecb9465525555a3e086a8',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-28T19:34:43.198Z',
      last_updated: '2022-05-28T19:34:43.198Z',
    },
    'input_text.header_badge_text_color': {
      entity_id: 'input_text.header_badge_text_color',
      state: 'unavailable',
      attributes: {
        restored: true,
        supported_features: 0,
      },
      context: {
        id: '01810c29ecfebbec72721ee684f23e66',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-28T19:34:43.198Z',
      last_updated: '2022-05-28T19:34:43.198Z',
    },
    'input_text.header_border_radius': {
      entity_id: 'input_text.header_border_radius',
      state: 'unavailable',
      attributes: {
        restored: true,
        supported_features: 0,
      },
      context: {
        id: '01810c29ecfe30eb4880d5489947dd04',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-28T19:34:43.198Z',
      last_updated: '2022-05-28T19:34:43.198Z',
    },
    'input_text.header_box_shadow': {
      entity_id: 'input_text.header_box_shadow',
      state: 'unavailable',
      attributes: {
        restored: true,
        supported_features: 0,
      },
      context: {
        id: '01810c29ecfedc836070fd634e737673',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-28T19:34:43.198Z',
      last_updated: '2022-05-28T19:34:43.198Z',
    },
    'input_text.footer_box_shadow': {
      entity_id: 'input_text.footer_box_shadow',
      state: 'unavailable',
      attributes: {
        restored: true,
        supported_features: 0,
      },
      context: {
        id: '01810c29ecfe2033b36df3a8f769c402',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-28T19:34:43.198Z',
      last_updated: '2022-05-28T19:34:43.198Z',
    },
    'input_text.nav_bar_color': {
      entity_id: 'input_text.nav_bar_color',
      state: 'unavailable',
      attributes: {
        restored: true,
        supported_features: 0,
      },
      context: {
        id: '01810c29ecfef1afbe15c618f6ac04bb',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-28T19:34:43.198Z',
      last_updated: '2022-05-28T19:34:43.198Z',
    },
    'input_text.nav_bar_text_color': {
      entity_id: 'input_text.nav_bar_text_color',
      state: 'unavailable',
      attributes: {
        restored: true,
        supported_features: 0,
      },
      context: {
        id: '01810c29ecff36ce6809f72ca85cd317',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-28T19:34:43.199Z',
      last_updated: '2022-05-28T19:34:43.199Z',
    },
    'input_text.card_color': {
      entity_id: 'input_text.card_color',
      state: 'unavailable',
      attributes: {
        restored: true,
        supported_features: 0,
      },
      context: {
        id: '01810c29ecff5225bed88905d333e0b4',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-28T19:34:43.199Z',
      last_updated: '2022-05-28T19:34:43.199Z',
    },
    'input_text.card_border_style': {
      entity_id: 'input_text.card_border_style',
      state: 'unavailable',
      attributes: {
        restored: true,
        supported_features: 0,
      },
      context: {
        id: '01810c29ecffc4e527d9fe017a8467d6',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-28T19:34:43.199Z',
      last_updated: '2022-05-28T19:34:43.199Z',
    },
    'input_text.card_border_width': {
      entity_id: 'input_text.card_border_width',
      state: 'unavailable',
      attributes: {
        restored: true,
        supported_features: 0,
      },
      context: {
        id: '01810c29ecfff562de26cb322abbe965',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-28T19:34:43.199Z',
      last_updated: '2022-05-28T19:34:43.199Z',
    },
    'input_text.card_border_color': {
      entity_id: 'input_text.card_border_color',
      state: 'unavailable',
      attributes: {
        restored: true,
        supported_features: 0,
      },
      context: {
        id: '01810c29ecffb0a172148f83115824f2',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-28T19:34:43.199Z',
      last_updated: '2022-05-28T19:34:43.199Z',
    },
    'input_text.card_border_radius': {
      entity_id: 'input_text.card_border_radius',
      state: 'unavailable',
      attributes: {
        restored: true,
        supported_features: 0,
      },
      context: {
        id: '01810c29ecffcf971cd436786953c8dd',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-28T19:34:43.199Z',
      last_updated: '2022-05-28T19:34:43.199Z',
    },
    'input_text.card_box_shadow': {
      entity_id: 'input_text.card_box_shadow',
      state: 'unavailable',
      attributes: {
        restored: true,
        supported_features: 0,
      },
      context: {
        id: '01810c29ecff1b1920614a6d187f1310',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-28T19:34:43.199Z',
      last_updated: '2022-05-28T19:34:43.199Z',
    },
    'input_text.header_color': {
      entity_id: 'input_text.header_color',
      state: 'unavailable',
      attributes: {
        restored: true,
        supported_features: 0,
      },
      context: {
        id: '01810c29ecffecb71a6724bc95c79055',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-28T19:34:43.199Z',
      last_updated: '2022-05-28T19:34:43.199Z',
    },
    'input_text.header_text_color': {
      entity_id: 'input_text.header_text_color',
      state: 'unavailable',
      attributes: {
        restored: true,
        supported_features: 0,
      },
      context: {
        id: '01810c29ed00f4c062b92007e46e8e28',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-28T19:34:43.200Z',
      last_updated: '2022-05-28T19:34:43.200Z',
    },
    'input_text.text_color': {
      entity_id: 'input_text.text_color',
      state: 'unavailable',
      attributes: {
        restored: true,
        supported_features: 0,
      },
      context: {
        id: '01810c29ed001a765781ddf54014a1f4',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-28T19:34:43.200Z',
      last_updated: '2022-05-28T19:34:43.200Z',
    },
    'input_text.secondary_text_color': {
      entity_id: 'input_text.secondary_text_color',
      state: 'unavailable',
      attributes: {
        restored: true,
        supported_features: 0,
      },
      context: {
        id: '01810c29ed00280f889b0c47d083810f',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-28T19:34:43.200Z',
      last_updated: '2022-05-28T19:34:43.200Z',
    },
    'input_text.background_image': {
      entity_id: 'input_text.background_image',
      state: 'unavailable',
      attributes: {
        restored: true,
        supported_features: 0,
      },
      context: {
        id: '01810c29ed0036826a2a479923deff2e',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-28T19:34:43.200Z',
      last_updated: '2022-05-28T19:34:43.200Z',
    },
    'input_text.icon_color_default': {
      entity_id: 'input_text.icon_color_default',
      state: 'unavailable',
      attributes: {
        restored: true,
        supported_features: 0,
      },
      context: {
        id: '01810c29ed004c5fc80861401b43b798',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-28T19:34:43.200Z',
      last_updated: '2022-05-28T19:34:43.200Z',
    },
    'input_text.icon_color_active': {
      entity_id: 'input_text.icon_color_active',
      state: 'unavailable',
      attributes: {
        restored: true,
        supported_features: 0,
      },
      context: {
        id: '01810c29ed00987998a8fb7c1e69b100',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-28T19:34:43.200Z',
      last_updated: '2022-05-28T19:34:43.200Z',
    },
    'input_text.font_family': {
      entity_id: 'input_text.font_family',
      state: 'unavailable',
      attributes: {
        restored: true,
        supported_features: 0,
      },
      context: {
        id: '01810c29ed00512bdf60f1fe28d6b3aa',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-28T19:34:43.200Z',
      last_updated: '2022-05-28T19:34:43.200Z',
    },
    'input_text.header_font_size': {
      entity_id: 'input_text.header_font_size',
      state: 'unavailable',
      attributes: {
        restored: true,
        supported_features: 0,
      },
      context: {
        id: '01810c29ed00ec36c2fded6efe2bf79e',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-28T19:34:43.200Z',
      last_updated: '2022-05-28T19:34:43.200Z',
    },
    'input_text.header_font_weight': {
      entity_id: 'input_text.header_font_weight',
      state: 'unavailable',
      attributes: {
        restored: true,
        supported_features: 0,
      },
      context: {
        id: '01810c29ed01fda261ca8425ab99d7b7',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-28T19:34:43.201Z',
      last_updated: '2022-05-28T19:34:43.201Z',
    },
    'input_text.subtitle_font_size': {
      entity_id: 'input_text.subtitle_font_size',
      state: 'unavailable',
      attributes: {
        restored: true,
        supported_features: 0,
      },
      context: {
        id: '01810c29ed01d57f265605b10c263e31',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-28T19:34:43.201Z',
      last_updated: '2022-05-28T19:34:43.201Z',
    },
    'input_text.subtitle_font_weight': {
      entity_id: 'input_text.subtitle_font_weight',
      state: 'unavailable',
      attributes: {
        restored: true,
        supported_features: 0,
      },
      context: {
        id: '01810c29ed0120b16356344b6ec62e02',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-28T19:34:43.201Z',
      last_updated: '2022-05-28T19:34:43.201Z',
    },
    'input_text.subtitle_text_color': {
      entity_id: 'input_text.subtitle_text_color',
      state: 'unavailable',
      attributes: {
        restored: true,
        supported_features: 0,
      },
      context: {
        id: '01810c29ed01b1c8cf9077cdcb7400f4',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-28T19:34:43.201Z',
      last_updated: '2022-05-28T19:34:43.201Z',
    },
    'input_text.title_text_color': {
      entity_id: 'input_text.title_text_color',
      state: 'unavailable',
      attributes: {
        restored: true,
        supported_features: 0,
      },
      context: {
        id: '01810c29ed01c765baa50a33c0c15fdc',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-28T19:34:43.201Z',
      last_updated: '2022-05-28T19:34:43.201Z',
    },
    'input_text.title_text_font_size': {
      entity_id: 'input_text.title_text_font_size',
      state: 'unavailable',
      attributes: {
        restored: true,
        supported_features: 0,
      },
      context: {
        id: '01810c29ed01188bbaab97e1ee42d29d',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-28T19:34:43.201Z',
      last_updated: '2022-05-28T19:34:43.201Z',
    },
    'input_text.title_text_font_weight': {
      entity_id: 'input_text.title_text_font_weight',
      state: 'unavailable',
      attributes: {
        restored: true,
        supported_features: 0,
      },
      context: {
        id: '01810c29ed01e2b204a4d1b2cd3fc565',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-28T19:34:43.201Z',
      last_updated: '2022-05-28T19:34:43.201Z',
    },
    'input_text.title_text_background_color': {
      entity_id: 'input_text.title_text_background_color',
      state: 'unavailable',
      attributes: {
        restored: true,
        supported_features: 0,
      },
      context: {
        id: '01810c29ed019266b4acb19d778594e7',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-28T19:34:43.201Z',
      last_updated: '2022-05-28T19:34:43.201Z',
    },
    'input_text.title_text_justify_self': {
      entity_id: 'input_text.title_text_justify_self',
      state: 'unavailable',
      attributes: {
        restored: true,
        supported_features: 0,
      },
      context: {
        id: '01810c29ed01462b8bdd76816d8b6a58',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-28T19:34:43.202Z',
      last_updated: '2022-05-28T19:34:43.202Z',
    },
    'input_text.title_text_border_radius': {
      entity_id: 'input_text.title_text_border_radius',
      state: 'unavailable',
      attributes: {
        restored: true,
        supported_features: 0,
      },
      context: {
        id: '01810c29ed02f33ed4b3301a3ff17dc4',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-28T19:34:43.202Z',
      last_updated: '2022-05-28T19:34:43.202Z',
    },
    'input_text.title_text_box_shadow': {
      entity_id: 'input_text.title_text_box_shadow',
      state: 'unavailable',
      attributes: {
        restored: true,
        supported_features: 0,
      },
      context: {
        id: '01810c29ed02100aaab573a9335471f8',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-28T19:34:43.202Z',
      last_updated: '2022-05-28T19:34:43.202Z',
    },
    'input_text.title_text_padding': {
      entity_id: 'input_text.title_text_padding',
      state: 'unavailable',
      attributes: {
        restored: true,
        supported_features: 0,
      },
      context: {
        id: '01810c29ed02af2751ca1390954e71fc',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-28T19:34:43.202Z',
      last_updated: '2022-05-28T19:34:43.202Z',
    },
    'input_text.title_text_border_style': {
      entity_id: 'input_text.title_text_border_style',
      state: 'unavailable',
      attributes: {
        restored: true,
        supported_features: 0,
      },
      context: {
        id: '01810c29ed02e5fddf2a3b28ff83059f',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-28T19:34:43.202Z',
      last_updated: '2022-05-28T19:34:43.202Z',
    },
    'input_text.title_text_border_width': {
      entity_id: 'input_text.title_text_border_width',
      state: 'unavailable',
      attributes: {
        restored: true,
        supported_features: 0,
      },
      context: {
        id: '01810c29ed02eb8c3c3d50c3b30e1496',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-28T19:34:43.202Z',
      last_updated: '2022-05-28T19:34:43.202Z',
    },
    'input_text.title_text_border_color': {
      entity_id: 'input_text.title_text_border_color',
      state: 'unavailable',
      attributes: {
        restored: true,
        supported_features: 0,
      },
      context: {
        id: '01810c29ed024bca8d9abdfed8f7c7d3',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-28T19:34:43.202Z',
      last_updated: '2022-05-28T19:34:43.202Z',
    },
    'input_text.button_color_active': {
      entity_id: 'input_text.button_color_active',
      state: 'unavailable',
      attributes: {
        restored: true,
        supported_features: 0,
      },
      context: {
        id: '01810c29ed025e4bddd014dc77b5611f',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-28T19:34:43.202Z',
      last_updated: '2022-05-28T19:34:43.202Z',
    },
    'input_text.button_name_font_size': {
      entity_id: 'input_text.button_name_font_size',
      state: 'unavailable',
      attributes: {
        restored: true,
        supported_features: 0,
      },
      context: {
        id: '01810c29ed02d63fa7a45223f15616e8',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-28T19:34:43.202Z',
      last_updated: '2022-05-28T19:34:43.202Z',
    },
    'input_text.button_name_font_weight': {
      entity_id: 'input_text.button_name_font_weight',
      state: 'unavailable',
      attributes: {
        restored: true,
        supported_features: 0,
      },
      context: {
        id: '01810c29ed03afb865fb80510730038b',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-28T19:34:43.203Z',
      last_updated: '2022-05-28T19:34:43.203Z',
    },
    'input_text.button_label_font_size': {
      entity_id: 'input_text.button_label_font_size',
      state: 'unavailable',
      attributes: {
        restored: true,
        supported_features: 0,
      },
      context: {
        id: '01810c29ed0375f77007af07b9c2fb47',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-28T19:34:43.203Z',
      last_updated: '2022-05-28T19:34:43.203Z',
    },
    'input_text.button_label_font_weight': {
      entity_id: 'input_text.button_label_font_weight',
      state: 'unavailable',
      attributes: {
        restored: true,
        supported_features: 0,
      },
      context: {
        id: '01810c29ed032666e02d6dee3feb40d6',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-28T19:34:43.203Z',
      last_updated: '2022-05-28T19:34:43.203Z',
    },
    'input_text.button_state_font_size': {
      entity_id: 'input_text.button_state_font_size',
      state: 'unavailable',
      attributes: {
        restored: true,
        supported_features: 0,
      },
      context: {
        id: '01810c29ed03780bf99a4a2f6b7722db',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-28T19:34:43.203Z',
      last_updated: '2022-05-28T19:34:43.203Z',
    },
    'input_text.button_state_font_weight': {
      entity_id: 'input_text.button_state_font_weight',
      state: 'unavailable',
      attributes: {
        restored: true,
        supported_features: 0,
      },
      context: {
        id: '01810c29ed03b5009a92fbec53efff9c',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-28T19:34:43.203Z',
      last_updated: '2022-05-28T19:34:43.203Z',
    },
    'input_text.button_name_color': {
      entity_id: 'input_text.button_name_color',
      state: 'unavailable',
      attributes: {
        restored: true,
        supported_features: 0,
      },
      context: {
        id: '01810c29ed032a82494bf88ff0168ac0',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-28T19:34:43.203Z',
      last_updated: '2022-05-28T19:34:43.203Z',
    },
    'input_text.button_name_color_active': {
      entity_id: 'input_text.button_name_color_active',
      state: 'unavailable',
      attributes: {
        restored: true,
        supported_features: 0,
      },
      context: {
        id: '01810c29ed03c7f83e9158549c2fd676',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-28T19:34:43.203Z',
      last_updated: '2022-05-28T19:34:43.203Z',
    },
    'input_text.button_label_color': {
      entity_id: 'input_text.button_label_color',
      state: 'unavailable',
      attributes: {
        restored: true,
        supported_features: 0,
      },
      context: {
        id: '01810c29ed030386c3b4ebb9c31e874f',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-28T19:34:43.203Z',
      last_updated: '2022-05-28T19:34:43.203Z',
    },
    'input_text.button_label_color_active': {
      entity_id: 'input_text.button_label_color_active',
      state: 'unavailable',
      attributes: {
        restored: true,
        supported_features: 0,
      },
      context: {
        id: '01810c29ed04a16e0560b0329a1ed831',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-28T19:34:43.204Z',
      last_updated: '2022-05-28T19:34:43.204Z',
    },
    'input_text.button_state_color': {
      entity_id: 'input_text.button_state_color',
      state: 'unavailable',
      attributes: {
        restored: true,
        supported_features: 0,
      },
      context: {
        id: '01810c29ed049b0064dd356ecf2d7009',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-28T19:34:43.204Z',
      last_updated: '2022-05-28T19:34:43.204Z',
    },
    'input_text.button_state_color_active': {
      entity_id: 'input_text.button_state_color_active',
      state: 'unavailable',
      attributes: {
        restored: true,
        supported_features: 0,
      },
      context: {
        id: '01810c29ed042ac31a541d428bafdc30',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-28T19:34:43.204Z',
      last_updated: '2022-05-28T19:34:43.204Z',
    },
    'input_text.badge_background_color': {
      entity_id: 'input_text.badge_background_color',
      state: 'unavailable',
      attributes: {
        restored: true,
        supported_features: 0,
      },
      context: {
        id: '01810c29ed041a4e3641371813ab14ff',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-28T19:34:43.204Z',
      last_updated: '2022-05-28T19:34:43.204Z',
    },
    'input_text.badge_text_color': {
      entity_id: 'input_text.badge_text_color',
      state: 'unavailable',
      attributes: {
        restored: true,
        supported_features: 0,
      },
      context: {
        id: '01810c29ed042bd7e861cbd928c5c3cc',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-28T19:34:43.204Z',
      last_updated: '2022-05-28T19:34:43.204Z',
    },
    'input_text.badge_font_size': {
      entity_id: 'input_text.badge_font_size',
      state: 'unavailable',
      attributes: {
        restored: true,
        supported_features: 0,
      },
      context: {
        id: '01810c29ed04f8ec98ff53911789ec19',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-28T19:34:43.204Z',
      last_updated: '2022-05-28T19:34:43.204Z',
    },
    'input_text.badge_font_weight': {
      entity_id: 'input_text.badge_font_weight',
      state: 'unavailable',
      attributes: {
        restored: true,
        supported_features: 0,
      },
      context: {
        id: '01810c29ed043555101a180522ba15cd',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-28T19:34:43.204Z',
      last_updated: '2022-05-28T19:34:43.204Z',
    },
    'input_text.badge_text_transform': {
      entity_id: 'input_text.badge_text_transform',
      state: 'unavailable',
      attributes: {
        restored: true,
        supported_features: 0,
      },
      context: {
        id: '01810c29ed04ac212c2617b611186a6e',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-28T19:34:43.204Z',
      last_updated: '2022-05-28T19:34:43.204Z',
    },
    'input_text.button_box_shadow_active': {
      entity_id: 'input_text.button_box_shadow_active',
      state: 'unavailable',
      attributes: {
        restored: true,
        supported_features: 0,
      },
      context: {
        id: '01810c29ed05d4fbb9c076db9f4155d4',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-28T19:34:43.205Z',
      last_updated: '2022-05-28T19:34:43.205Z',
    },
    'input_text.lock_color_active': {
      entity_id: 'input_text.lock_color_active',
      state: 'unavailable',
      attributes: {
        restored: true,
        supported_features: 0,
      },
      context: {
        id: '01810c29ed05994fd37c81ac5ea4e311',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-28T19:34:43.205Z',
      last_updated: '2022-05-28T19:34:43.205Z',
    },
    'input_text.lock_color_inactive': {
      entity_id: 'input_text.lock_color_inactive',
      state: 'unavailable',
      attributes: {
        restored: true,
        supported_features: 0,
      },
      context: {
        id: '01810c29ed059fefda59ffb375037cd4',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-28T19:34:43.205Z',
      last_updated: '2022-05-28T19:34:43.205Z',
    },
    'input_text.dark_color_unavailable': {
      entity_id: 'input_text.dark_color_unavailable',
      state: 'unavailable',
      attributes: {
        restored: true,
        supported_features: 0,
      },
      context: {
        id: '01810c29ed05d32356e384964dc313e6',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-28T19:34:43.205Z',
      last_updated: '2022-05-28T19:34:43.205Z',
    },
    'input_text.dark_lock_color_active': {
      entity_id: 'input_text.dark_lock_color_active',
      state: 'unavailable',
      attributes: {
        restored: true,
        supported_features: 0,
      },
      context: {
        id: '01810c29ed05df3958b7844ef01ebdb7',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-28T19:34:43.205Z',
      last_updated: '2022-05-28T19:34:43.205Z',
    },
    'input_text.dark_lock_color_inactive': {
      entity_id: 'input_text.dark_lock_color_inactive',
      state: 'unavailable',
      attributes: {
        restored: true,
        supported_features: 0,
      },
      context: {
        id: '01810c29ed05de373ccd6cd26d773258',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-28T19:34:43.205Z',
      last_updated: '2022-05-28T19:34:43.205Z',
    },
    'input_text.dark_header_box_shadow': {
      entity_id: 'input_text.dark_header_box_shadow',
      state: 'unavailable',
      attributes: {
        restored: true,
        supported_features: 0,
      },
      context: {
        id: '01810c29ed05c6ab96e910cce2313221',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-28T19:34:43.205Z',
      last_updated: '2022-05-28T19:34:43.205Z',
    },
    'input_text.dark_button_box_shadow_active': {
      entity_id: 'input_text.dark_button_box_shadow_active',
      state: 'unavailable',
      attributes: {
        restored: true,
        supported_features: 0,
      },
      context: {
        id: '01810c29ed05c6b5b98ba8be5353772e',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-28T19:34:43.205Z',
      last_updated: '2022-05-28T19:34:43.205Z',
    },
    'input_text.dark_footer_box_shadow': {
      entity_id: 'input_text.dark_footer_box_shadow',
      state: 'unavailable',
      attributes: {
        restored: true,
        supported_features: 0,
      },
      context: {
        id: '01810c29ed05224ef58422ecab37a8dc',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-28T19:34:43.205Z',
      last_updated: '2022-05-28T19:34:43.205Z',
    },
    'input_text.dark_header_border_radius': {
      entity_id: 'input_text.dark_header_border_radius',
      state: 'unavailable',
      attributes: {
        restored: true,
        supported_features: 0,
      },
      context: {
        id: '01810c29ed06e7fc704d705fc8ea2e74',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-28T19:34:43.206Z',
      last_updated: '2022-05-28T19:34:43.206Z',
    },
    'input_text.dark_header_badge_icon_color': {
      entity_id: 'input_text.dark_header_badge_icon_color',
      state: 'unavailable',
      attributes: {
        restored: true,
        supported_features: 0,
      },
      context: {
        id: '01810c29ed0657f704de0bbfe7a63111',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-28T19:34:43.206Z',
      last_updated: '2022-05-28T19:34:43.206Z',
    },
    'input_text.dark_header_badge_background': {
      entity_id: 'input_text.dark_header_badge_background',
      state: 'unavailable',
      attributes: {
        restored: true,
        supported_features: 0,
      },
      context: {
        id: '01810c29ed06da7fb3a66db627d700ee',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-28T19:34:43.206Z',
      last_updated: '2022-05-28T19:34:43.206Z',
    },
    'input_text.dark_header_badge_color': {
      entity_id: 'input_text.dark_header_badge_color',
      state: 'unavailable',
      attributes: {
        restored: true,
        supported_features: 0,
      },
      context: {
        id: '01810c29ed07c97a98e6f3ce7076c506',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-28T19:34:43.207Z',
      last_updated: '2022-05-28T19:34:43.207Z',
    },
    'input_text.dark_header_badge_text_color': {
      entity_id: 'input_text.dark_header_badge_text_color',
      state: 'unavailable',
      attributes: {
        restored: true,
        supported_features: 0,
      },
      context: {
        id: '01810c29ed07142018efa63dd2718ff7',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-28T19:34:43.207Z',
      last_updated: '2022-05-28T19:34:43.207Z',
    },
    'input_text.dark_nav_bar_color': {
      entity_id: 'input_text.dark_nav_bar_color',
      state: 'unavailable',
      attributes: {
        restored: true,
        supported_features: 0,
      },
      context: {
        id: '01810c29ed078dc993d03816291ebe40',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-28T19:34:43.207Z',
      last_updated: '2022-05-28T19:34:43.207Z',
    },
    'input_text.dark_nav_bar_text_color': {
      entity_id: 'input_text.dark_nav_bar_text_color',
      state: 'unavailable',
      attributes: {
        restored: true,
        supported_features: 0,
      },
      context: {
        id: '01810c29ed07de0b3abe9bf2dbf0c13a',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-28T19:34:43.207Z',
      last_updated: '2022-05-28T19:34:43.207Z',
    },
    'input_text.dark_card_color': {
      entity_id: 'input_text.dark_card_color',
      state: 'unavailable',
      attributes: {
        restored: true,
        supported_features: 0,
      },
      context: {
        id: '01810c29ed087d2740c78b2e36898da4',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-28T19:34:43.208Z',
      last_updated: '2022-05-28T19:34:43.208Z',
    },
    'input_text.dark_card_border_style': {
      entity_id: 'input_text.dark_card_border_style',
      state: 'unavailable',
      attributes: {
        restored: true,
        supported_features: 0,
      },
      context: {
        id: '01810c29ed08869604f2060e40865a86',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-28T19:34:43.208Z',
      last_updated: '2022-05-28T19:34:43.208Z',
    },
    'input_text.dark_card_border_width': {
      entity_id: 'input_text.dark_card_border_width',
      state: 'unavailable',
      attributes: {
        restored: true,
        supported_features: 0,
      },
      context: {
        id: '01810c29ed086e69c537f1dd4d8c40b2',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-28T19:34:43.208Z',
      last_updated: '2022-05-28T19:34:43.208Z',
    },
    'input_text.dark_card_border_color': {
      entity_id: 'input_text.dark_card_border_color',
      state: 'unavailable',
      attributes: {
        restored: true,
        supported_features: 0,
      },
      context: {
        id: '01810c29ed08f01951e0d373f6767f5f',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-28T19:34:43.208Z',
      last_updated: '2022-05-28T19:34:43.208Z',
    },
    'input_text.dark_card_border_radius': {
      entity_id: 'input_text.dark_card_border_radius',
      state: 'unavailable',
      attributes: {
        restored: true,
        supported_features: 0,
      },
      context: {
        id: '01810c29ed0842d24dd872a81c050083',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-28T19:34:43.208Z',
      last_updated: '2022-05-28T19:34:43.208Z',
    },
    'input_text.dark_card_box_shadow': {
      entity_id: 'input_text.dark_card_box_shadow',
      state: 'unavailable',
      attributes: {
        restored: true,
        supported_features: 0,
      },
      context: {
        id: '01810c29ed08cd51da6d7b8c444a65a1',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-28T19:34:43.208Z',
      last_updated: '2022-05-28T19:34:43.208Z',
    },
    'input_text.dark_header_color': {
      entity_id: 'input_text.dark_header_color',
      state: 'unavailable',
      attributes: {
        restored: true,
        supported_features: 0,
      },
      context: {
        id: '01810c29ed08a2679d004a492648662e',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-28T19:34:43.208Z',
      last_updated: '2022-05-28T19:34:43.208Z',
    },
    'input_text.dark_header_text_color': {
      entity_id: 'input_text.dark_header_text_color',
      state: 'unavailable',
      attributes: {
        restored: true,
        supported_features: 0,
      },
      context: {
        id: '01810c29ed08239027f2b6af38f44c02',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-28T19:34:43.208Z',
      last_updated: '2022-05-28T19:34:43.208Z',
    },
    'input_text.dark_text_color': {
      entity_id: 'input_text.dark_text_color',
      state: 'unavailable',
      attributes: {
        restored: true,
        supported_features: 0,
      },
      context: {
        id: '01810c29ed08bcf0b001d6e00396f8fe',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-28T19:34:43.208Z',
      last_updated: '2022-05-28T19:34:43.208Z',
    },
    'input_text.dark_secondary_text_color': {
      entity_id: 'input_text.dark_secondary_text_color',
      state: 'unavailable',
      attributes: {
        restored: true,
        supported_features: 0,
      },
      context: {
        id: '01810c29ed09d555b9f30a057e1e9819',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-28T19:34:43.209Z',
      last_updated: '2022-05-28T19:34:43.209Z',
    },
    'input_text.dark_background_image': {
      entity_id: 'input_text.dark_background_image',
      state: 'unavailable',
      attributes: {
        restored: true,
        supported_features: 0,
      },
      context: {
        id: '01810c29ed0938cb9b9c48a9963e678c',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-28T19:34:43.209Z',
      last_updated: '2022-05-28T19:34:43.209Z',
    },
    'input_text.dark_icon_color_default': {
      entity_id: 'input_text.dark_icon_color_default',
      state: 'unavailable',
      attributes: {
        restored: true,
        supported_features: 0,
      },
      context: {
        id: '01810c29ed096daec5c3f6d35951fc8d',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-28T19:34:43.209Z',
      last_updated: '2022-05-28T19:34:43.209Z',
    },
    'input_text.dark_icon_color_active': {
      entity_id: 'input_text.dark_icon_color_active',
      state: 'unavailable',
      attributes: {
        restored: true,
        supported_features: 0,
      },
      context: {
        id: '01810c29ed098707e163505426a6d5df',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-28T19:34:43.209Z',
      last_updated: '2022-05-28T19:34:43.209Z',
    },
    'input_text.dark_font_family': {
      entity_id: 'input_text.dark_font_family',
      state: 'unavailable',
      attributes: {
        restored: true,
        supported_features: 0,
      },
      context: {
        id: '01810c29ed0958bbf7a301b1ff50b525',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-28T19:34:43.209Z',
      last_updated: '2022-05-28T19:34:43.209Z',
    },
    'input_text.dark_header_font_size': {
      entity_id: 'input_text.dark_header_font_size',
      state: 'unavailable',
      attributes: {
        restored: true,
        supported_features: 0,
      },
      context: {
        id: '01810c29ed09e9b2c0e54327b2a9f5d5',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-28T19:34:43.209Z',
      last_updated: '2022-05-28T19:34:43.209Z',
    },
    'input_text.dark_header_font_weight': {
      entity_id: 'input_text.dark_header_font_weight',
      state: 'unavailable',
      attributes: {
        restored: true,
        supported_features: 0,
      },
      context: {
        id: '01810c29ed09ff057c5d02fe35e1aba9',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-28T19:34:43.209Z',
      last_updated: '2022-05-28T19:34:43.209Z',
    },
    'input_text.dark_subtitle_font_size': {
      entity_id: 'input_text.dark_subtitle_font_size',
      state: 'unavailable',
      attributes: {
        restored: true,
        supported_features: 0,
      },
      context: {
        id: '01810c29ed092eab3083a0db399ea27c',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-28T19:34:43.209Z',
      last_updated: '2022-05-28T19:34:43.209Z',
    },
    'input_text.dark_subtitle_font_weight': {
      entity_id: 'input_text.dark_subtitle_font_weight',
      state: 'unavailable',
      attributes: {
        restored: true,
        supported_features: 0,
      },
      context: {
        id: '01810c29ed0a7ce4f588d98fd6c6f55d',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-28T19:34:43.210Z',
      last_updated: '2022-05-28T19:34:43.210Z',
    },
    'input_text.dark_subtitle_text_color': {
      entity_id: 'input_text.dark_subtitle_text_color',
      state: 'unavailable',
      attributes: {
        restored: true,
        supported_features: 0,
      },
      context: {
        id: '01810c29ed0ac84f5c94eb18d1e6e60e',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-28T19:34:43.210Z',
      last_updated: '2022-05-28T19:34:43.210Z',
    },
    'input_text.dark_title_text_color': {
      entity_id: 'input_text.dark_title_text_color',
      state: 'unavailable',
      attributes: {
        restored: true,
        supported_features: 0,
      },
      context: {
        id: '01810c29ed0a33f51c1d9667db8b8d6b',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-28T19:34:43.210Z',
      last_updated: '2022-05-28T19:34:43.210Z',
    },
    'input_text.dark_title_text_font_size': {
      entity_id: 'input_text.dark_title_text_font_size',
      state: 'unavailable',
      attributes: {
        restored: true,
        supported_features: 0,
      },
      context: {
        id: '01810c29ed0a18c0f4f5abf2b9ff1ba3',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-28T19:34:43.210Z',
      last_updated: '2022-05-28T19:34:43.210Z',
    },
    'input_text.dark_title_text_font_weight': {
      entity_id: 'input_text.dark_title_text_font_weight',
      state: 'unavailable',
      attributes: {
        restored: true,
        supported_features: 0,
      },
      context: {
        id: '01810c29ed0a86a308bf45419a46a721',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-28T19:34:43.210Z',
      last_updated: '2022-05-28T19:34:43.210Z',
    },
    'input_text.dark_title_text_background_color': {
      entity_id: 'input_text.dark_title_text_background_color',
      state: 'unavailable',
      attributes: {
        restored: true,
        supported_features: 0,
      },
      context: {
        id: '01810c29ed0a82648fd7e1cb713798e3',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-28T19:34:43.210Z',
      last_updated: '2022-05-28T19:34:43.210Z',
    },
    'input_text.dark_title_text_justify_self': {
      entity_id: 'input_text.dark_title_text_justify_self',
      state: 'unavailable',
      attributes: {
        restored: true,
        supported_features: 0,
      },
      context: {
        id: '01810c29ed0a4a3e4f9d671cae9ea924',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-28T19:34:43.210Z',
      last_updated: '2022-05-28T19:34:43.210Z',
    },
    'input_text.dark_title_text_border_radius': {
      entity_id: 'input_text.dark_title_text_border_radius',
      state: 'unavailable',
      attributes: {
        restored: true,
        supported_features: 0,
      },
      context: {
        id: '01810c29ed0af48d5543fe894ed77de4',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-28T19:34:43.210Z',
      last_updated: '2022-05-28T19:34:43.210Z',
    },
    'input_text.dark_title_text_box_shadow': {
      entity_id: 'input_text.dark_title_text_box_shadow',
      state: 'unavailable',
      attributes: {
        restored: true,
        supported_features: 0,
      },
      context: {
        id: '01810c29ed0a54f8d11732d02c0734d3',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-28T19:34:43.210Z',
      last_updated: '2022-05-28T19:34:43.210Z',
    },
    'input_text.dark_title_text_padding': {
      entity_id: 'input_text.dark_title_text_padding',
      state: 'unavailable',
      attributes: {
        restored: true,
        supported_features: 0,
      },
      context: {
        id: '01810c29ed0b1c67461b2d5d1d8b306c',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-28T19:34:43.211Z',
      last_updated: '2022-05-28T19:34:43.211Z',
    },
    'input_text.dark_title_text_border_style': {
      entity_id: 'input_text.dark_title_text_border_style',
      state: 'unavailable',
      attributes: {
        restored: true,
        supported_features: 0,
      },
      context: {
        id: '01810c29ed0bd05912cfb5d1b77a424c',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-28T19:34:43.211Z',
      last_updated: '2022-05-28T19:34:43.211Z',
    },
    'input_text.dark_title_text_border_width': {
      entity_id: 'input_text.dark_title_text_border_width',
      state: 'unavailable',
      attributes: {
        restored: true,
        supported_features: 0,
      },
      context: {
        id: '01810c29ed0b7a3b55e05ba79a6086c1',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-28T19:34:43.211Z',
      last_updated: '2022-05-28T19:34:43.211Z',
    },
    'input_text.dark_title_text_border_color': {
      entity_id: 'input_text.dark_title_text_border_color',
      state: 'unavailable',
      attributes: {
        restored: true,
        supported_features: 0,
      },
      context: {
        id: '01810c29ed0b6de64994a0bcce0b34c2',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-28T19:34:43.211Z',
      last_updated: '2022-05-28T19:34:43.211Z',
    },
    'input_text.dark_button_color_active': {
      entity_id: 'input_text.dark_button_color_active',
      state: 'unavailable',
      attributes: {
        restored: true,
        supported_features: 0,
      },
      context: {
        id: '01810c29ed0b545aa0583239d59c2953',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-28T19:34:43.211Z',
      last_updated: '2022-05-28T19:34:43.211Z',
    },
    'input_text.dark_button_name_font_size': {
      entity_id: 'input_text.dark_button_name_font_size',
      state: 'unavailable',
      attributes: {
        restored: true,
        supported_features: 0,
      },
      context: {
        id: '01810c29ed0bf4257823bb3120bbcfbd',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-28T19:34:43.211Z',
      last_updated: '2022-05-28T19:34:43.211Z',
    },
    'input_text.dark_button_name_font_weight': {
      entity_id: 'input_text.dark_button_name_font_weight',
      state: 'unavailable',
      attributes: {
        restored: true,
        supported_features: 0,
      },
      context: {
        id: '01810c29ed0bc52063e18e9b49a2d92d',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-28T19:34:43.211Z',
      last_updated: '2022-05-28T19:34:43.211Z',
    },
    'input_text.dark_button_label_font_size': {
      entity_id: 'input_text.dark_button_label_font_size',
      state: 'unavailable',
      attributes: {
        restored: true,
        supported_features: 0,
      },
      context: {
        id: '01810c29ed0b922adcc1e675decc7da6',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-28T19:34:43.211Z',
      last_updated: '2022-05-28T19:34:43.211Z',
    },
    'input_text.dark_button_label_font_weight': {
      entity_id: 'input_text.dark_button_label_font_weight',
      state: 'unavailable',
      attributes: {
        restored: true,
        supported_features: 0,
      },
      context: {
        id: '01810c29ed0c7352df3208edc94e818e',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-28T19:34:43.212Z',
      last_updated: '2022-05-28T19:34:43.212Z',
    },
    'input_text.dark_button_state_font_size': {
      entity_id: 'input_text.dark_button_state_font_size',
      state: 'unavailable',
      attributes: {
        restored: true,
        supported_features: 0,
      },
      context: {
        id: '01810c29ed0c9ef5f6cd7571899cb342',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-28T19:34:43.212Z',
      last_updated: '2022-05-28T19:34:43.212Z',
    },
    'input_text.dark_button_state_font_weight': {
      entity_id: 'input_text.dark_button_state_font_weight',
      state: 'unavailable',
      attributes: {
        restored: true,
        supported_features: 0,
      },
      context: {
        id: '01810c29ed0cd0b12b3100325559ec24',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-28T19:34:43.212Z',
      last_updated: '2022-05-28T19:34:43.212Z',
    },
    'input_text.dark_button_name_color': {
      entity_id: 'input_text.dark_button_name_color',
      state: 'unavailable',
      attributes: {
        restored: true,
        supported_features: 0,
      },
      context: {
        id: '01810c29ed0c2bc243fc95bc252362ba',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-28T19:34:43.212Z',
      last_updated: '2022-05-28T19:34:43.212Z',
    },
    'input_text.dark_button_name_color_active': {
      entity_id: 'input_text.dark_button_name_color_active',
      state: 'unavailable',
      attributes: {
        restored: true,
        supported_features: 0,
      },
      context: {
        id: '01810c29ed0c03cbdd8c75537e753af1',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-28T19:34:43.212Z',
      last_updated: '2022-05-28T19:34:43.212Z',
    },
    'input_text.dark_button_label_color': {
      entity_id: 'input_text.dark_button_label_color',
      state: 'unavailable',
      attributes: {
        restored: true,
        supported_features: 0,
      },
      context: {
        id: '01810c29ed0c10a98dd655ece98edb93',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-28T19:34:43.212Z',
      last_updated: '2022-05-28T19:34:43.212Z',
    },
    'input_text.dark_button_label_color_active': {
      entity_id: 'input_text.dark_button_label_color_active',
      state: 'unavailable',
      attributes: {
        restored: true,
        supported_features: 0,
      },
      context: {
        id: '01810c29ed0c6662e8af0d60a6fde06d',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-28T19:34:43.212Z',
      last_updated: '2022-05-28T19:34:43.212Z',
    },
    'input_text.dark_button_state_color': {
      entity_id: 'input_text.dark_button_state_color',
      state: 'unavailable',
      attributes: {
        restored: true,
        supported_features: 0,
      },
      context: {
        id: '01810c29ed0ceb751fd39b7bb4fbe981',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-28T19:34:43.212Z',
      last_updated: '2022-05-28T19:34:43.212Z',
    },
    'input_text.dark_button_state_color_active': {
      entity_id: 'input_text.dark_button_state_color_active',
      state: 'unavailable',
      attributes: {
        restored: true,
        supported_features: 0,
      },
      context: {
        id: '01810c29ed0dcd3c749fe121f40ece77',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-28T19:34:43.213Z',
      last_updated: '2022-05-28T19:34:43.213Z',
    },
    'input_text.dark_badge_font_size': {
      entity_id: 'input_text.dark_badge_font_size',
      state: 'unavailable',
      attributes: {
        restored: true,
        supported_features: 0,
      },
      context: {
        id: '01810c29ed0d7917aa45ee3c21c13d36',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-28T19:34:43.213Z',
      last_updated: '2022-05-28T19:34:43.213Z',
    },
    'input_text.dark_badge_font_weight': {
      entity_id: 'input_text.dark_badge_font_weight',
      state: 'unavailable',
      attributes: {
        restored: true,
        supported_features: 0,
      },
      context: {
        id: '01810c29ed0deaaca6ec00d060f5c525',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-28T19:34:43.213Z',
      last_updated: '2022-05-28T19:34:43.213Z',
    },
    'input_text.dark_badge_text_transform': {
      entity_id: 'input_text.dark_badge_text_transform',
      state: 'unavailable',
      attributes: {
        restored: true,
        supported_features: 0,
      },
      context: {
        id: '01810c29ed0d72d26cad09566f27d6c4',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-28T19:34:43.213Z',
      last_updated: '2022-05-28T19:34:43.213Z',
    },
    'input_text.dark_badge_background_color': {
      entity_id: 'input_text.dark_badge_background_color',
      state: 'unavailable',
      attributes: {
        restored: true,
        supported_features: 0,
      },
      context: {
        id: '01810c29ed0d2b648217d6daaeddf6a5',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-28T19:34:43.213Z',
      last_updated: '2022-05-28T19:34:43.213Z',
    },
    'input_text.dark_badge_text_color': {
      entity_id: 'input_text.dark_badge_text_color',
      state: 'unavailable',
      attributes: {
        restored: true,
        supported_features: 0,
      },
      context: {
        id: '01810c29ed0dba3a6a23a4c46ca72424',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-28T19:34:43.213Z',
      last_updated: '2022-05-28T19:34:43.213Z',
    },
    'input_text.good_morning': {
      entity_id: 'input_text.good_morning',
      state: 'unavailable',
      attributes: {
        restored: true,
        supported_features: 0,
      },
      context: {
        id: '01810c29ed0d4eb0b14b3b4ebf86db52',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-28T19:34:43.213Z',
      last_updated: '2022-05-28T19:34:43.213Z',
    },
    'input_text.good_afternoon': {
      entity_id: 'input_text.good_afternoon',
      state: 'unavailable',
      attributes: {
        restored: true,
        supported_features: 0,
      },
      context: {
        id: '01810c29ed0d61af1ab2f66f142247a9',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-28T19:34:43.213Z',
      last_updated: '2022-05-28T19:34:43.213Z',
    },
    'input_text.good_evening': {
      entity_id: 'input_text.good_evening',
      state: 'unavailable',
      attributes: {
        restored: true,
        supported_features: 0,
      },
      context: {
        id: '01810c29ed0ecfcd813a3ace1ad7fea4',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-28T19:34:43.214Z',
      last_updated: '2022-05-28T19:34:43.214Z',
    },
    'input_text.good_night': {
      entity_id: 'input_text.good_night',
      state: 'unavailable',
      attributes: {
        restored: true,
        supported_features: 0,
      },
      context: {
        id: '01810c29ed0e68d42f77c6444a49c546',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-28T19:34:43.214Z',
      last_updated: '2022-05-28T19:34:43.214Z',
    },
    'input_select.settings_light_dark': {
      entity_id: 'input_select.settings_light_dark',
      state: 'unavailable',
      attributes: {
        restored: true,
        options: ['Light', 'Dark'],
        friendly_name: 'Theme Settings',
        supported_features: 0,
      },
      context: {
        id: '01810c29ed0e1be4528099b4afca1a73',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-28T19:34:43.214Z',
      last_updated: '2022-05-28T19:34:43.214Z',
    },
    'input_select.theme_selector_light': {
      entity_id: 'input_select.theme_selector_light',
      state: 'unavailable',
      attributes: {
        restored: true,
        options: ['HKI Default', 'HKI Custom Light', 'HKI Custom Dark'],
        friendly_name: 'Theme Selector Light',
        supported_features: 0,
      },
      context: {
        id: '01810c29ed0ebf218ce2eedbae1d07f7',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-28T19:34:43.214Z',
      last_updated: '2022-05-28T19:34:43.214Z',
    },
    'input_select.theme_selector_dark': {
      entity_id: 'input_select.theme_selector_dark',
      state: 'unavailable',
      attributes: {
        restored: true,
        options: ['HKI Default', 'HKI Custom Light', 'HKI Custom Dark'],
        friendly_name: 'Theme Selector Dark',
        supported_features: 0,
      },
      context: {
        id: '01810c29ed0e6c779ed40d3377169985',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-28T19:34:43.214Z',
      last_updated: '2022-05-28T19:34:43.214Z',
    },
    'input_select.navigation_bar_direction': {
      entity_id: 'input_select.navigation_bar_direction',
      state: 'unavailable',
      attributes: {
        restored: true,
        options: ['Left', 'Right'],
        supported_features: 0,
      },
      context: {
        id: '01810c29ed0e380503ca343cfbda3d49',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-28T19:34:43.214Z',
      last_updated: '2022-05-28T19:34:43.214Z',
    },
    'input_select.navigation_bar_options': {
      entity_id: 'input_select.navigation_bar_options',
      state: 'unavailable',
      attributes: {
        restored: true,
        options: ['Date', 'Time', 'User', 'Hide'],
        supported_features: 0,
      },
      context: {
        id: '01810c29ed0eea1e157292030756bbbb',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-28T19:34:43.214Z',
      last_updated: '2022-05-28T19:34:43.214Z',
    },
    'input_select.navigation_bar': {
      entity_id: 'input_select.navigation_bar',
      state: 'unavailable',
      attributes: {
        restored: true,
        options: ['Off', 'Top', 'Bottom'],
        supported_features: 0,
      },
      context: {
        id: '01810c29ed0ed7a7bcc30e2342e493b3',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-28T19:34:43.215Z',
      last_updated: '2022-05-28T19:34:43.215Z',
    },
    'input_select.find_my': {
      entity_id: 'input_select.find_my',
      state: 'unavailable',
      attributes: {
        restored: true,
        options: ['Persons', 'Devices', 'Vehicles'],
        supported_features: 0,
      },
      context: {
        id: '01810c29ed0f465bfd0f5be8d5bc3f65',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-28T19:34:43.215Z',
      last_updated: '2022-05-28T19:34:43.215Z',
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
        id: '01810c29ed0f96ba4a268efc54f08044',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-28T19:34:43.215Z',
      last_updated: '2022-05-28T19:34:43.215Z',
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
        id: '01810c29ed0f6c70294a1c0a6876ca8b',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-28T19:34:43.215Z',
      last_updated: '2022-05-28T19:34:43.215Z',
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
        id: '01810c29ed0fc5a323616272488809a4',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-28T19:34:43.215Z',
      last_updated: '2022-05-28T19:34:43.215Z',
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
        id: '01810c29ed0f7f38a8919aec75ea2a28',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-28T19:34:43.215Z',
      last_updated: '2022-05-28T19:34:43.215Z',
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
        id: '01810c29ed0f473f41ffb834b4987f30',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-28T19:34:43.215Z',
      last_updated: '2022-05-28T19:34:43.215Z',
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
        id: '01810c29ed0fce058aa50e21c8c060f5',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-28T19:34:43.215Z',
      last_updated: '2022-05-28T19:34:43.215Z',
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
        id: '01810c29ed10fcb6aa0f2282bfb8c23e',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-28T19:34:43.216Z',
      last_updated: '2022-05-28T19:34:43.216Z',
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
        id: '01810c29ed106c62fbd6d0da64da187a',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-28T19:34:43.216Z',
      last_updated: '2022-05-28T19:34:43.216Z',
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
        id: '01810c29ed108c7fe0dac9fc205c0db1',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-28T19:34:43.216Z',
      last_updated: '2022-05-28T19:34:43.216Z',
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
        id: '01810c29ed1086209cbe76ade7a2c2d4',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-28T19:34:43.216Z',
      last_updated: '2022-05-28T19:34:43.216Z',
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
        id: '01810c29ed10683377220d75f5f61164',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-28T19:34:43.216Z',
      last_updated: '2022-05-28T19:34:43.216Z',
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
        id: '01810c29ed1057a72f356db491784221',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-28T19:34:43.216Z',
      last_updated: '2022-05-28T19:34:43.216Z',
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
        id: '01810c29ed10ff33c8d276bc8f018644',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-28T19:34:43.216Z',
      last_updated: '2022-05-28T19:34:43.216Z',
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
        id: '01810c29ed109ba10851a7ab1b037cd8',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-28T19:34:43.216Z',
      last_updated: '2022-05-28T19:34:43.216Z',
    },
    'script.hki_dark_default': {
      entity_id: 'script.hki_dark_default',
      state: 'unavailable',
      attributes: {
        restored: true,
        friendly_name: 'hki_dark_default',
        supported_features: 0,
      },
      context: {
        id: '01810c29ed1017791f63c542f80b5899',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-28T19:34:43.216Z',
      last_updated: '2022-05-28T19:34:43.216Z',
    },
    'script.hki_dark_empty': {
      entity_id: 'script.hki_dark_empty',
      state: 'unavailable',
      attributes: {
        restored: true,
        friendly_name: 'hki_dark_empty',
        supported_features: 0,
      },
      context: {
        id: '01810c29ed11bd313bcf0b96da4ebdcc',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-28T19:34:43.217Z',
      last_updated: '2022-05-28T19:34:43.217Z',
    },
    'script.hki_light_default': {
      entity_id: 'script.hki_light_default',
      state: 'unavailable',
      attributes: {
        restored: true,
        friendly_name: 'hki_light_default',
        supported_features: 0,
      },
      context: {
        id: '01810c29ed11a99953a98d996961053a',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-28T19:34:43.217Z',
      last_updated: '2022-05-28T19:34:43.217Z',
    },
    'script.hki_light_empty': {
      entity_id: 'script.hki_light_empty',
      state: 'unavailable',
      attributes: {
        restored: true,
        friendly_name: 'hki_light_empty',
        supported_features: 0,
      },
      context: {
        id: '01810c29ed1101f0b10ccf3b0550249e',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-28T19:34:43.217Z',
      last_updated: '2022-05-28T19:34:43.217Z',
    },
    'script.hki_header_greeting_default': {
      entity_id: 'script.hki_header_greeting_default',
      state: 'unavailable',
      attributes: {
        restored: true,
        friendly_name: 'hki_header_greeting_default',
        supported_features: 0,
      },
      context: {
        id: '01810c29ed1175789b71d049cb77c6e7',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-28T19:34:43.217Z',
      last_updated: '2022-05-28T19:34:43.217Z',
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
        id: '01810c29fb01c46ac449509647cacd12',
        parent_id: null,
        user_id: null,
      },
      last_changed: '2022-05-28T19:34:46.785Z',
      last_updated: '2022-05-28T19:34:46.785Z',
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
      'tts',
      'rpi_power',
      'frontend',
      'sensor.hassio',
      'zeroconf',
      'system_health',
      'camera',
      'input_datetime',
      'ecobee',
      'timer',
      'select.deebot',
      'default_config',
      'lovelace',
      'input_button',
      'sun',
      'search',
      'auth',
      'binary_sensor.hassio',
      'climate',
      'camera.deebot',
      'person',
      'my',
      'tag',
      'counter',
      'notify',
      'media_source',
      'stream',
      'input_text',
      'image',
      'scene.homeassistant',
      'system_log',
      'remote.apple_tv',
      'device_tracker.mobile_app',
      'switch',
      'humidifier',
      'notify.mobile_app',
      'sensor.upnp',
      'binary_sensor.ecobee',
      'cloud',
      'ffmpeg',
      'diagnostics',
      'input_boolean',
      'weather',
      'ssdp',
      'sensor',
      'scene',
      'webhook',
      'api',
      'usb',
      'recorder',
      'persistent_notification',
      'apple_tv',
      'update.hassio',
      'binary_sensor.deebot',
      'upnp',
      'binary_sensor.mobile_app',
      'device_automation',
      'hassio',
      'zone',
      'media_player',
      'climate.ecobee',
      'websocket_api',
      'sensor.mobile_app',
      'onboarding',
      'analytics',
      'switch.deebot',
      'http',
      'homeassistant',
      'lifx',
      'device_tracker',
      'dhcp',
      'button',
      'vacuum',
      'trace',
      'script',
      'sensor.deebot',
      'light.lifx',
      'energy',
      'number.deebot',
      'button.deebot',
      'sensor.ecobee',
      'homekit',
      'number',
      'light',
      'binary_sensor.upnp',
      'humidifier.ecobee',
      'update',
      'network',
      'mobile_app',
      'weather.ecobee',
      'sensor.energy',
      'logbook',
      'binary_sensor',
      'select',
      'history',
      'panel_custom',
      'vacuum.deebot',
      'remote',
      'blueprint',
      'config',
      'sensor.hacs',
      'automation',
      'deebot',
      'input_number',
      'hacs',
      'binary_sensor.rpi_power',
      'tts.google_translate',
      'media_player.apple_tv',
      'input_select',
      'map',
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
    'lovelace-homekit': {
      component_name: 'lovelace',
      icon: 'mdi:home-assistant',
      title: 'Homekit',
      config: {
        mode: 'storage',
      },
      url_path: 'lovelace-homekit',
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
          js_url: '/local/react-panel/index.js',
        },
      },
      url_path: 'react-panel-prod',
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
      'component.media_player.state._.buffering': 'Buffering',
      'component.media_player.state._.idle': 'Idle',
      'component.media_player.state._.off': 'Off',
      'component.media_player.state._.on': 'On',
      'component.media_player.state._.paused': 'Paused',
      'component.media_player.state._.playing': 'Playing',
      'component.media_player.state._.standby': 'Standby',
      'component.sensor.state._.off': 'Off',
      'component.sensor.state._.on': 'On',
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
      'component.input_boolean.state._.off': 'Off',
      'component.input_boolean.state._.on': 'On',
      'component.automation.state._.off': 'Off',
      'component.automation.state._.on': 'On',
      'component.humidifier.state._.off': 'Off',
      'component.humidifier.state._.on': 'On',
      'component.switch.state._.off': 'Off',
      'component.switch.state._.on': 'On',
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
      'component.light.state._.off': 'Off',
      'component.light.state._.on': 'On',
      'component.climate.state._.auto': 'Auto',
      'component.climate.state._.cool': 'Cool',
      'component.climate.state._.dry': 'Dry',
      'component.climate.state._.fan_only': 'Fan only',
      'component.climate.state._.heat': 'Heat',
      'component.climate.state._.heat_cool': 'Heat/Cool',
      'component.climate.state._.off': 'Off',
      'component.sun.state._.above_horizon': 'Above horizon',
      'component.sun.state._.below_horizon': 'Below horizon',
      'component.timer.state._.active': 'Active',
      'component.timer.state._.idle': 'Idle',
      'component.timer.state._.paused': 'Paused',
      'component.script.state._.off': 'Off',
      'component.script.state._.on': 'On',
      'component.camera.state._.idle': 'Idle',
      'component.camera.state._.recording': 'Recording',
      'component.camera.state._.streaming': 'Streaming',
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
      'ui.panel.custom.external_panel.question_trust':
        'Do you trust the external panel {name} at {link}?',
      'ui.panel.custom.external_panel.complete_access':
        'It will have access to all data in Home Assistant.',
      'ui.panel.custom.external_panel.hide_message':
        'Check docs for the panel_custom component to hide this message',
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

export default hass
