import { Box } from '@mui/material'
import React from 'react'
import Footer from './Footer'
import Header from './Header'

const Layout = ({children}) => {
  return (
    <div className='' >
        <Header />
        <Box>
          {children}
        </Box>
        <Box>
          <Footer />
        </Box>
    </div>
  )
}

export default Layout