import ReactDOM from 'react-dom'

// Small helper function to generate custom elements that will render the passed
// in React component and forwards the Home Assistant panel properties.
export default (ReactPanel: (props: any) => JSX.Element) =>
  class extends HTMLElement {
    constructor() {
      super()
      // @ts-ignore
      this._renderScheduled = null

      // Initialize properties as `null` and create setters that triggers a render
      const props = {}
      ;['hass', 'showMenu', 'narrow', 'panel'].forEach((prop) => {
        const key = `_${prop}`
        // @ts-ignore
        this[key] = null
        // @ts-ignore
        props[prop] = {
          set(value: any) {
            this[key] = value
            this._render()
          },
        }
      })
      Object.defineProperties(this, props)
    }

    disconnectedCallback() {
      ReactDOM.unmountComponentAtNode(this)
    }

    _render() {
      // @ts-ignore
      if (this._renderScheduled !== null) return

      // @ts-ignore
      this._renderScheduled = Promise.resolve().then(() => {
        // @ts-ignore
        this._renderScheduled = null
        ReactDOM.render(
          // @ts-ignore
          React.createElement(ReactPanel, {
            // @ts-ignore
            hass: this._hass,
            // @ts-ignore
            showMenu: this._showMenu,
            // @ts-ignore
            narrow: this._narrow,
            // @ts-ignore
            panel: this._panel,
          }),
          this
        )
      })
    }
  }
