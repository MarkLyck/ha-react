import React from 'react'
import ReactDOM from 'react-dom/client'
import Dashboard from './Dashboard'
import ReactPanelElement from './ReactPanelElement'

import hassMock from '../mocks/hass'
import entityMock from '../mocks/entity.json'

import 'antd/dist/antd.css'
import 'src/lib/iconsLibrary'

if (window.location.hostname.includes('localhost')) {
  const container = document.getElementById('root')
  // render standalone with mocks
  ReactDOM.createRoot(container!).render(
    <React.StrictMode>
      <Dashboard hass={hassMock} entity={entityMock} />
    </React.StrictMode>
  )
} else {
  // render it inside a home assistant panel
  customElements.define('react-panel', ReactPanelElement(Dashboard))
}
