import { ThemeProvider } from '@emotion/react'
import theme from 'src/lib/themes'
import Panel from './Panel'
import Controls from './Components/Controls'

console.log('🔈 ~ theme', theme)
type DashboardProps = {
  hass: any
  entity: any
}

const Dashboard = (props: DashboardProps) => {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Panel {...props} />
        <Controls {...props} />
      </div>
    </ThemeProvider>
  )
}

export default Dashboard
