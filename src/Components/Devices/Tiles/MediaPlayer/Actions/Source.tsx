import styled from '@emotion/styled'

import { ActionButton } from '../../common/Actions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import NetflixIcon from 'src/assets/icons/logos/netflix.svg'

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    height: 14px;
    width: auto;
  }
`

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

  let currentApp = null
  let AppIcon = 'S'
  if (source) {
    const src = source.toLowerCase()
    currentApp = src.split('.')[src?.split('.').length - 1]
    if (src.includes('apple')) AppIcon = sourceIcons.apple
    if (src.includes('youtube')) AppIcon = sourceIcons.youtube
    if (src.includes('netflix')) AppIcon = sourceIcons.netflix
  }

  const handleClick = (e: any) => {
    e.preventDefault()
  }

  return (
    <ActionButton onClick={handleClick}>
      <IconContainer>{AppIcon}</IconContainer>
    </ActionButton>
  )
}
