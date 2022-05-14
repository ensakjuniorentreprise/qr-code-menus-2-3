import React from 'react'
import {Box, Divider, Grid, List, ListItemButton, ListItemText, Typography, useTheme} from '@mui/material'
import { Link } from 'react-router-dom';

const Footer = () => {

  const theme = useTheme();

  return (
      <Box
        backgroundColor={theme.palette.background.default}
        paddingTop='1px'
        paddingBottom='1px'
        // sticky footer - see four values below
        position='relative'
        bottom='0'
        left='0'
        width='100%'
      >
        <Divider />
        <Box
            backgroundColor={theme.palette.background.default}
            position='relative'
            padding={theme.spacing(0.25)}
        >
          <Grid container spacing={0}>
            <Grid marginX={'auto'} container item xs={12} md={4} justifyContent='center'>
              <List>
                  <ListItemButton>
                      <ListItemText 
                          primary={
                              <Typography 
                                  variant='body2'
                                  color={theme.palette.text.secondary}
                              >
                                  Copyright &copy; {new Date().getFullYear()} <a href="https://ensakjuniorentreprise.com">EKJE</a>.
                              </Typography>
                          }
                      />
                  </ListItemButton>
              </List>
            </Grid>
          </Grid>
        </Box>
      </Box>
  )
}

export default Footer