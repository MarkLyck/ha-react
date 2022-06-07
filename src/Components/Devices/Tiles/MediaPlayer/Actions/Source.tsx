import { ActionButton } from '../../common/Actions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import NetflixIcon from 'src/assets/icons/logos/netflix.svg'

type SourceButtonProps = {
  entity: any
}

const sourceIcons: any = {
  apple: <FontAwesomeIcon icon={['fab', 'apple']} size="lg" />,
  youtube: (
    <FontAwesomeIcon icon={['fab', 'youtube']} color="#FF0000" size="lg" />
  ),
  netflix: <NetflixIcon />,
}

export const SourceButton = ({ entity }: SourceButtonProps) => {
  const sourceList = entity.attributes.source_list
  let source = entity.attributes.source
  if (!source && entity.attributes.app_id) {
    source = entity.attributes.app_id
  }
  console.log('🔈 ~ source', source)

  let currentApp = null
  let AppIcon = 'S'
  if (source) {
    const src = source.toLowerCase()
    currentApp = src.split('.')[src?.split('.').length - 1]
    if (src.includes('apple')) {
      AppIcon = sourceIcons.apple
    }
  }

  const handleClick = (e: any) => {
    e.preventDefault()
  }

  return <ActionButton onClick={handleClick}>{AppIcon}</ActionButton>
}
