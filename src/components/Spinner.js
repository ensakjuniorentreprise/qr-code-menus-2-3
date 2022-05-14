import { Box, CircularProgress } from '@mui/material'
import React from 'react'

const Spinner = (props) => {
  return (
    <Box {...props} marginX={'auto'} marginY={5} sx={{ display: 'flex', justifyContent:'center', alignItems:'center' }}>
        <CircularProgress />
    </Box>
  )
}

export default Spinner