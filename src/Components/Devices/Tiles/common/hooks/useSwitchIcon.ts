import { ReactNode } from 'react'
import { getSwitchIcon } from 'src/common/icons'
import { SwitchType } from 'src/types'

type UseSwitchIconProps = (
  type: SwitchType,
  iconActive: ReactNode,
  iconInactive: ReactNode
) => { iconActive: ReactNode; iconInactive: ReactNode }

export const useSwitchIcon: UseSwitchIconProps = (
  type,
  iconActive,
  iconInactive
) => {
  if (type === SwitchType.CUSTOM) {
    return { iconActive, iconInactive }
  }
  return getSwitchIcon(type)
}
