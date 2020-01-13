import React from 'react'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import AppHome from './pages/AppHome.js'
import MediaContextProvider from './context/mediaContext'

function App() {
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#283593'
      },
      secondary: {
        main: '#ffa726'
      },
      viewPort: 'small'
    }
  })
  return (
    <ThemeProvider theme={theme}>
      <MediaContextProvider>
        <AppHome />
      </MediaContextProvider>
    </ThemeProvider>
  )
}
export default App
