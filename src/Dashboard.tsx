import { ThemeProvider, Global } from '@emotion/react'
import theme from 'src/lib/themes'

import globalStyles from './lib/styles'
import Areas from './Components/HomeView'

const Dashboard = () => (
  <ThemeProvider theme={theme}>
    <>
      <div className="App">
        <Areas />
      </div>
      <Global styles={globalStyles} />
    </>
  </ThemeProvider>
)

export default Dashboard
