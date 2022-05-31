import { ThemeProvider, Global } from '@emotion/react'
import theme from 'src/lib/themes'
import globalStyles from './lib/styles'
import { QueryClientProvider } from 'react-query'
import queryClient from './queries/client'
import Areas from './Components/Areas'

type DashboardProps = {
  hass: any
  entity: any
}

const Dashboard = (props: DashboardProps) => {
  console.log('🔧 hass: ', props.hass)

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <>
          <div className="App">
            <Areas />
          </div>
          <Global styles={globalStyles} />
        </>
      </ThemeProvider>
    </QueryClientProvider>
  )
}

export default Dashboard
