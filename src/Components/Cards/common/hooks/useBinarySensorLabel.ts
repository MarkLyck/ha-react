import { getBinarySensorLabel } from '../strings'
import { BinarySensorType } from 'src/types'

type UseBinarySensorLabelProps = (
  type: BinarySensorType,
  labelActive: string,
  labelInactive: string
) => { labelActive: string; labelInactive: string }

export const useBinarySensorLabel: UseBinarySensorLabelProps = (
  type,
  labelActive,
  labelInactive
) => {
  if (type === BinarySensorType.CUSTOM) {
    return { labelActive, labelInactive }
  }
  return getBinarySensorLabel(type)
}
