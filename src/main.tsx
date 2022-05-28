import React from 'react'
import ReactDOM from 'react-dom/client'
import Dashboard from './Dashboard'
import ReactPanelElement from './ReactPanelElement'

import hassMock from '../mocks/hass'
import entityMock from '../mocks/entity.json'

import 'antd/dist/antd.css'
import 'src/lib/styles/index.css'
import 'src/lib/styles/font.css'

if (window.customElements.get('mwc-icon') !== undefined) {
  customElements.define('react-panel', ReactPanelElement(Dashboard))
} else {
  // render standalone with mocks
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <Dashboard hass={hassMock} entity={entityMock} />
    </React.StrictMode>
  )
}
