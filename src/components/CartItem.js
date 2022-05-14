import React from 'react'
import { Box, ButtonGroup, CircularProgress, IconButton, List, ListItem, ListItemSecondaryAction, ListItemText, Paper } from '@mui/material'
import { CartItemsContext } from '../contexts';
import { CostumBtn } from './buttons';
import { DeleteTwoTone } from '@mui/icons-material';

const CartItem = ({ item }) => {

    const { removeCartItem, updateCartItem } = React.useContext(CartItemsContext);

    return (
        <Paper >
            <ListItem >
                <ListItemText 
                primary={item.title}
                primaryTypographyProps={{
                    component:'h1',
                    style: {
                    fontWeight:'500',
                    fontSize: '1.2em'
                    }
                }}
                secondary={
                    <>
                        <ButtonGroup>
                            <CostumBtn sx={{ color:'#000' }} size={'small'} onClick={() => updateCartItem(item.id, item.quantity - 1)} >-</CostumBtn>
                            <CostumBtn sx={{ color:'#000', backgroundColor:'#fff' }} size={'small'} >{item.quantity}</CostumBtn>
                            <CostumBtn sx={{ color:'#000' }} size={'small'} onClick={() => updateCartItem(item.id, item.quantity + 1)} >+</CostumBtn>
                        </ButtonGroup>
                        <Box component={'span'} >{parseFloat(item.price * item.quantity).toFixed(2)} DH</Box>
                    </>
                }
                secondaryTypographyProps={{
                    component: 'div',
                }}
                />
                <ListItemSecondaryAction >
                <IconButton onClick={() => removeCartItem(item.id)} disableRipple >
                    <DeleteTwoTone />
                </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
        </Paper> 
    )
}

export default CartItem