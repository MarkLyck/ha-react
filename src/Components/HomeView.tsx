import styled from '@emotion/styled'
import { Spin } from 'antd'

import useStore from 'src/lib/useStore'
import Overview from './Overview'
import Area from './Area'
import configuration from 'src/../configuration.json'

const Container = styled.div`
  width: 100%;
  padding: 32px;
  display: flex;
  flex-direction: column;

  @media (max-width: 640px) {
    padding: 16px;
  }
`

const Loading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`

const Areas = () => {
  const { areas } = useStore((state: any) => ({
    areas: state.areas,
  }))

  if (Object.keys(areas).length === 0) {
    return (
      <Loading>
        <Spin size="large" />
      </Loading>
    )
  }

  const areasList = Object.keys(areas)
    .map((key: string) => areas[key])
    .sort((a, b) => {
      const aIndex = configuration.areasOrder.indexOf(a.area_id)
      const bIndex = configuration.areasOrder.indexOf(b.area_id)
      return aIndex < bIndex ? -1 : 1
    })
  console.log('🔈 ~ areasList', areasList)

  return (
    <Container>
      <Overview />
      {areasList.map((area: any) => (
        <Area area={area} key={area.area_id} />
      ))}
    </Container>
  )
}
export default Areas
