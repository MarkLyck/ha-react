import { ReactNode } from 'react'
import { BinarySensorType, SwitchType } from 'src/types'

/**
 * Sensors
 */
import ContactClosedSrc from '/assets/icons/accessories/contact-closed-large@2x.png'
import ContactOpenSrc from '/assets/icons/accessories/contact-open-large@2x.png'

import DoorClosedSrc from '/assets/icons/accessories/door-closed-large@2x.png'
import DoorOpenSrc from '/assets/icons/accessories/door-open-large@2x.png'

import LockSecuredSrc from '/assets/icons/accessories/lock-secured-large@2x.png'
import LockUnsecuredSrc from '/assets/icons/accessories/lock-unsecured-large@2x.png'

import MotionOffSrc from '/assets/icons/accessories/motion-off-large@2x.png'
import MotionOnSrc from '/assets/icons/accessories/motion-on-large@2x.png'

import WindowClosedSrc from '/assets/icons/accessories/window-closed-large@2x.png'
import WindowOpenSrc from '/assets/icons/accessories/window-open-large@2x.png'

/**
 * Switch
 */
import OutletOffSrc from '/assets/icons/accessories/outlet-off-large@2x.png'
import OutletOnSrc from '/assets/icons/accessories/outlet-on-large@2x.png'

import SwitchOffSrc from '/assets/icons/accessories/switch-off-large@2x.png'
import SwitchOnSrc from '/assets/icons/accessories/switch-on-large@2x.png'

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
