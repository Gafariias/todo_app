import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import GlobalStyle from './styles/global.ts'
import CustomThemeProvider from './context/themeContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CustomThemeProvider>
      <App />
      <GlobalStyle />
    </CustomThemeProvider>
  </StrictMode>,
)
