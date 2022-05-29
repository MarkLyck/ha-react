export enum BinarySensorType {
  CONTACT,
  CUSTOM,
  DOOR,
  LOCK,
  MOTION,
  WINDOW,
}

export enum SwitchType {
  CUSTOM,
  OUTLET,
  SWITCH,
}

declare module '@emotion/react' {
  export interface Theme {
    colors: any
    modal: any
    card: any
  }
}
