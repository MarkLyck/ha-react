import React from 'react'
import ReactDOM from 'react-dom/client'
import Dashboard from './Dashboard'
import ReactPanelElement from './lib/ReactPanelElement'

import './index.css'
import 'antd/dist/antd.css'
import 'src/lib/prototypes'
import 'src/lib/iconsLibrary'
import 'src/lib/hass'

if (window.location.hostname.includes('localhost')) {
  const container = document.getElementById('root')
  // render standalone with mocks
  ReactDOM.createRoot(container!).render(
    <React.StrictMode>
      <Dashboard />
    </React.StrictMode>
  )
} else {
  const link = document.createElement('link')
  link.rel = 'stylesheet'
  link.href = '/local/react-panel/assets/styles/antd.css'
  document.getElementsByTagName('head')[0].appendChild(link)
  // render it inside a home assistant panel
  customElements.define('react-panel', ReactPanelElement(Dashboard))
}
