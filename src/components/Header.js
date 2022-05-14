import React from 'react'
import { alpha, AppBar, Avatar, Badge, Box, Button, Divider, IconButton, Toolbar, useTheme } from '@mui/material'
import { ColorModeContext } from '../contexts'
import {LightMode as LightModeIcon, DarkMode as DarkModeIcon, Menu as MenuIcon, AddShoppingCart} from '@mui/icons-material'
import { IconBtn } from './buttons'
import CartDrawer from './CartDrawer'
import { CartItemsContext } from '../contexts'
import { Link } from 'react-router-dom'

const Header = () => {

    
    const theme = useTheme();
    const colorMode = React.useContext(ColorModeContext);
    
    const { cartItems } = React.useContext(CartItemsContext);
    
    const [open, setOpen] = React.useState(false);

    const handleClose = () => setOpen(false);
    const handleOpen = () => setOpen(true);

    return (<>
        <AppBar 
            position='sticky'
            color='default'
        >
            <Toolbar sx={{ minHeight: 70 }}>
                <Link to='/' style={{ textDecoration: 'none' }}>
                    <IconButton size='large' disabled>
                        <Avatar
                            variant='square'
                            sx={{
                                backgroundColor: 'transparent',
                                height: 45,
                                width: 45,
                                marginRight: '12px',
                            }}
                        >
                            <img src="/logo.png" width={'45px'} height={'45x'} />
                        </Avatar>
                    </IconButton>
                </Link>
                <Box sx={{ flexGrow: 1 }} />

                    <Divider
                        orientation='vertical'
                        sx={{ 
                            height: 32, 
                            mx: 2,
                            display: { lg: 'flex', md: 'none', xs: 'none' }
                        }} 
                    />
                <Box sx={{ display: 'flex' }}>
                    <Box marginX={2}>
                        <IconBtn onClick={handleOpen}>
                            <Badge badgeContent={cartItems.length} color="error">
                                <AddShoppingCart />
                            </Badge>
                        </IconBtn>
                    </Box>
                    <Box marginX={2}>
                        <IconButton
                            onClick={colorMode.toggleColorMode}
                            aria-label='Theme Mode'
                            color={theme.palette.mode === 'dark' ? 'warning' : 'inherit' }
                        >
                            {theme.palette.mode === 'dark'
                                ? (
                                    <LightModeIcon fontSize='medium' />
                                ) 
                                : (
                                    <DarkModeIcon fontSize='medium' />
                                )
                            }
                        </IconButton>
                    </Box>
                </Box>
                
                {theme.palette.mode === 'dark' && <Divider />}
            </Toolbar>
        </AppBar>
        <CartDrawer open={open} handleClose={handleClose} />
    </>
  )
}

export default Header