import styled from '@emotion/styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  AccessoryCardContainer,
  AccessoryCardHeader,
  AccessoryCardIcon,
  AccessoryTextContainer,
  AccessoryCardName,
  AccessoryCardStatus,
} from 'src/Components/Devices/Tiles/common/AccessoryCard'
import useStore from 'src/lib/useStore'

const Container = styled(AccessoryCardContainer)``
const Status = styled(AccessoryCardStatus)`
  color: ${(p) => p.theme.colors.danger[600]};
`
const ErrorIcon = styled(AccessoryCardIcon)`
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    height: 24px;
    width: 24px;
    color: ${(p) => p.theme.colors.danger[600]};
  }
`

export const ErrorTile = ({ error, entityProps }: any) => {
  const { states } = useStore((state: any) => ({
    states: state.states,
  }))
  const entity = states[entityProps.entityId]

  let name = entity ? entity.attributes.friendly_name : undefined
  if (!name && entityProps.type) name = entityProps.type
  if (!name) name = 'Unknown'

  return (
    <Container isActive={true}>
      <AccessoryCardHeader>
        <ErrorIcon isActive={true}>
          <FontAwesomeIcon icon={['fas', 'triangle-exclamation']} />
        </ErrorIcon>
        <AccessoryTextContainer>
          <AccessoryCardName isActive={true}>{name}</AccessoryCardName>
          <Status isActive={true}>{error.error.name}</Status>
        </AccessoryTextContainer>
      </AccessoryCardHeader>
    </Container>
  )
}
