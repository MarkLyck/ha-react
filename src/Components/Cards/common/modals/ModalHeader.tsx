import { FC, ReactNode } from 'react'
import styled from '@emotion/styled'

const ModalHeaderContainer = styled.div`
  height: 24px;
  padding: 10px;
  position: relative;
  display: flex;
`

const IconContainer = styled.div`
  margin-right: 10px;
  svg,
  img {
    height: 24px;
  }
`

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`

const Title = styled.div`
  color: ${(props) => props.theme.modal.header.title.color};
  font-size: ${(props) => props.theme.modal.header.title.size};
  font-weight: ${(props) => props.theme.modal.header.title.weight};
`

const Subtitle = styled.div`
  color: ${(props) => props.theme.modal.header.subtitle.color};
  font-size: ${(props) => props.theme.modal.header.subtitle.size};
  font-weight: ${(props) => props.theme.modal.header.subtitle.weight};
`

interface ModalHeaderProps {
  /** Method to close the modal */
  readonly close: () => void
  /** Icon of the header */
  readonly icon: ReactNode
  /** Subtitle of the header */
  readonly subtitle: string
  /** Title of the header */
  readonly title: string
}

export const ModalHeader: FC<ModalHeaderProps> = (props) => {
  return (
    <ModalHeaderContainer>
      <IconContainer>{props.icon}</IconContainer>
      <TitleContainer>
        <Title>{props.title}</Title>
        <Subtitle>{props.subtitle}</Subtitle>
      </TitleContainer>
    </ModalHeaderContainer>
  )
}
