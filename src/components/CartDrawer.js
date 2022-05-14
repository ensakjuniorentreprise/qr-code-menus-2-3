import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import CartItem from './CartItem';
import { CartItemsContext } from '../contexts';
import { Cancel } from '@mui/icons-material';
import { CostumBtn } from './buttons';
import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';

export default function CartDrawer(props) {

    const {open, handleClose} = props;

    const { cartItems } = React.useContext(CartItemsContext);
    
    return (
        <React.Fragment >
            <Drawer
                anchor={'right'}
                open={open}
                onClose={handleClose}
            >
                <Box
                    sx={{ width: '100vw', lg: {width:550} }}
                    role="presentation"
                >
                    <Box marginLeft={2} marginTop={2} >
                        <CostumBtn onClick={handleClose} >
                            <Cancel sx={{fontSize:'2rem'}} />
                        </CostumBtn>
                    </Box>
                    <Grid container >
                        <Grid marginX={'auto'} item md={6} sm={12} >
                            <List >
                            {
                                cartItems.map((item, index) => (
                                    <CartItem key={index} item={item} />
                                    ))
                                }
                            </List>
                            <Box position={'absolute'} marginY={3} right={0} bottom={40} textAlign={'right'} >
                                <Link to={'/checkout'}>
                                    <CostumBtn onClick={handleClose} disabled={!cartItems.length} variant="contained" >
                                        Commander
                                    </CostumBtn>
                                </Link>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Drawer>
        </React.Fragment>
    );
}