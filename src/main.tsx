import React from 'react'
import ReactDOM from 'react-dom/client'
import Dashboard from './Dashboard'
import ReactPanelElement from './ReactPanelElement'

import hassMock from '../mocks/hass'
import entityMock from '../mocks/entity.json'

import 'antd/dist/antd.css'
import 'src/lib/styles/index.css'
import 'src/lib/styles/font.css'

if (window.name === 'ha-main-window') {
  const root = document.createElement('root')
  root.setAttribute('id', 'root')
  document.body.appendChild(root)

  customElements.define('react-panel', ReactPanelElement(Dashboard))
} else {
  const container = document.getElementById('root')
  // render standalone with mocks
  ReactDOM.createRoot(container!).render(
    <React.StrictMode>
      <Dashboard hass={hassMock} entity={entityMock} />
    </React.StrictMode>
  )
}
