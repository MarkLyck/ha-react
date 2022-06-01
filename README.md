Create a `.env` file with your long-lived user token:

```env
VITE_HOMEASSISTANT_TOKEN=YOUR_TOKEN
```

Create this folder
`configuration/www/react-panel`

copy `dist/assets` to `configuration/www/react-panel`

configuration.yaml

```yaml
panel_custom:
  - name: react-panel
    sidebar_title: Dashboard
    sidebar_icon: mdi:home-assistant
    url_path: react-panel
    js_url: /local/react-panel/assets/index.js
    embed_iframe: true
    config:
      name: World

http:
  cors_allowed_origins:
    - http://localhost:3000
```

Restart Home Assistant
