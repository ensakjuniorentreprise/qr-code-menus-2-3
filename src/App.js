import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MealPage from './pages/MealPage';
import Layout from './components/Layout'
import { ColorModeContext } from './contexts'
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { theme as customTheme } from './theme';
import CheckoutPage from './pages/CheckoutPage';


function App() {

  const [mode, setMode] = React.useState('dark');

  const colorMode = React.useMemo(
      () => ({
          // The light mode switch will invoke this method
          toggleColorMode: () => {
              setMode((prevMode) => (prevMode === 'dark' ? 'light' : 'dark'));

              try {
                  window.localStorage.setItem('themeMode', mode);
              } catch {
                  /* do nothing */
              }
          },
      }), 
      [],
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={customTheme[mode]}>
        <CssBaseline />
          <BrowserRouter>
            <Layout >
              <Routes>
                <Route path='/' element={<HomePage />} ></Route>
                <Route path='/meal/:id' element={<MealPage />} ></Route>
                <Route path='/checkout' element={<CheckoutPage />} ></Route>
              </Routes>
            </Layout>
          </BrowserRouter>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App;
