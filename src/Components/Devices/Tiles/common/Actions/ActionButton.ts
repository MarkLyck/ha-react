import styled from '@emotion/styled'
import { Button } from 'antd'

export const ActionButton = styled(Button)`
  flex: 1;
  background: rgba(0, 0, 0, 0.075);
  border: none;
  border-radius: 4px;

  &:hover {
    background: rgba(0, 0, 0, 0.2);
    color: black;
  }
`
