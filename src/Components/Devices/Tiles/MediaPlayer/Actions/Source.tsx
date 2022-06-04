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
  console.log('🔈 ~ entity', entity)
  const sourceList = entity.attributes.source_list
  const appId = entity.attributes.app_id
  const currentApp = appId.split('.')[appId.split('.').length - 1]
  const AppIcon = sourceIcons[currentApp]

  const handleClick = (e: any) => {
    console.log('HANDLE CLICK')
    e.preventDefault()
  }

  return <ActionButton onClick={handleClick}>{AppIcon}</ActionButton>
}
