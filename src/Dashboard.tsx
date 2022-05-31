import { ThemeProvider, Global } from '@emotion/react'
import theme from 'src/lib/themes'
import Controls from './Components/Controls'
import globalStyles from './lib/styles'
import { QueryClientProvider } from 'react-query'
import queryClient from './queries/client'

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
            <Controls {...props} />
          </div>
          <Global styles={globalStyles} />
        </>
      </ThemeProvider>
    </QueryClientProvider>
  )
}

export default Dashboard
