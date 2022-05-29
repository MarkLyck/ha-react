import { ReactNode } from 'react'
import { BinarySensorType, SwitchType } from 'src/types'

/**
 * Sensors
 */
import ContactClosedSrc from 'src/assets/icones/accessories/contact-closed-large@2x.png'
import ContactOpenSrc from 'src/assets/icones/accessories/contact-open-large@2x.png'

import DoorClosedSrc from 'src/assets/icones/accessories/door-closed-large@2x.png'
import DoorOpenSrc from 'src/assets/icones/accessories/door-open-large@2x.png'

import LockSecuredSrc from 'src/assets/icones/accessories/lock-secured-large@2x.png'
import LockUnsecuredSrc from 'src/assets/icones/accessories/lock-unsecured-large@2x.png'

import MotionOffSrc from 'src/assets/icones/accessories/motion-off-large@2x.png'
import MotionOnSrc from 'src/assets/icones/accessories/motion-on-large@2x.png'

import WindowClosedSrc from 'src/assets/icones/accessories/window-closed-large@2x.png'
import WindowOpenSrc from 'src/assets/icones/accessories/window-open-large@2x.png'

/**
 * Switch
 */
import OutletOffSrc from 'src/assets/icones/accessories/outlet-off-large@2x.png'
import OutletOnSrc from 'src/assets/icones/accessories/outlet-on-large@2x.png'

import SwitchOffSrc from 'src/assets/icones/accessories/switch-off-large@2x.png'
import SwitchOnSrc from 'src/assets/icones/accessories/switch-on-large@2x.png'

/**
 * Light
 */

type GetIconProps = (src: string) => ReactNode
const getIcon: GetIconProps = (src: string) => <img src={src} />

type GetBinarySensorIconProps = (type: BinarySensorType) => {
  iconActive: ReactNode
  iconInactive: ReactNode
}
export const getBinarySensorIcon: GetBinarySensorIconProps = (type) => {
  let iconActiveSrc = ''
  let iconInactiveSrc = ''

  switch (type) {
    case BinarySensorType.CONTACT:
      iconInactiveSrc = ContactClosedSrc
      iconActiveSrc = ContactOpenSrc
      break
    case BinarySensorType.DOOR:
      iconInactiveSrc = DoorClosedSrc
      iconActiveSrc = DoorOpenSrc
      break
    case BinarySensorType.LOCK:
      iconInactiveSrc = LockSecuredSrc
      iconActiveSrc = LockUnsecuredSrc
      break
    case BinarySensorType.WINDOW:
      iconInactiveSrc = WindowClosedSrc
      iconActiveSrc = WindowOpenSrc
      break
    default:
    case BinarySensorType.MOTION:
      iconInactiveSrc = MotionOffSrc
      iconActiveSrc = MotionOnSrc
      break
  }

  return {
    iconActive: getIcon(iconActiveSrc),
    iconInactive: getIcon(iconInactiveSrc),
  }
}

type GetSwitchIconProps = (type: SwitchType) => {
  iconActive: ReactNode
  iconInactive: ReactNode
}
export const getSwitchIcon: GetSwitchIconProps = (type: SwitchType) => {
  let iconActiveSrc = ''
  let iconInactiveSrc = ''

  switch (type) {
    case SwitchType.OUTLET:
      iconInactiveSrc = OutletOffSrc
      iconActiveSrc = OutletOnSrc
      break
    default:
    case SwitchType.SWITCH:
      iconInactiveSrc = SwitchOffSrc
      iconActiveSrc = SwitchOnSrc
      break
  }

  return {
    iconActive: getIcon(iconActiveSrc),
    iconInactive: getIcon(iconInactiveSrc),
  }
}
