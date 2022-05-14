import React from 'react'
import { RestaurantMenu } from '@mui/icons-material';
import { Alert, Button, CircularProgress, Grid, InputAdornment } from '@mui/material';
import { Box } from '@mui/system';
import { useMutation, useQuery } from 'react-query';
import { Input, Select } from '../components/controls';
import Form from '../components/Form';
import { CartItemsContext } from '../contexts'
import { useForm } from '../hooks'
import httpClient from '../httpClient';
import Spinner from '../components/Spinner';

const defaultOrder = {
    orderId: 0,
    table_number: 1,
    payment_method: 'cash',
    total: 0,
    order_items: [],
}

async function fetchClients(){
    try {
      const {data} = await httpClient.get('clients');
      return data.map(i => ({ title:i.clientName, number:i.clientId, id:i.clientId }));
    } catch (error) {
      return error.message;
    }
}

const CheckoutPage = () => {

    const {data:clients, status} = useQuery('clients', fetchClients);
    const paymentMethods = [
        {id:'cash', title:'Cash'},
        {id:'card', title:'Card'},
    ]

    const { cartItems } = React.useContext(CartItemsContext);

    defaultOrder.order_items = cartItems;
    defaultOrder.total = cartItems.reduce((acc, item) => parseFloat(acc + item.price * item.quantity), 0)

    const {
        values,
        setValues,
        errors,
        setErrors,
        handleValueChange,
        resetForm
    } = useForm(defaultOrder);

    const mutation = useMutation(data => {
        return httpClient.post('orders', data);
    }, {});

    const handleSelectChange = (e) => handleValueChange(e);

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {...values, orderNumber:'20201202'};
        mutation.mutate(data);
    }
    
    if (mutation.status === 'loading') return (
        <Spinner />
    )
    
    if (mutation.status === 'success') return (
        <Box marginX={'auto'} marginY={5} sx={{ display: 'flex', justifyContent:'center', alignItems:'center' }}>
          <Alert>
            Order Passed Successfully!, your order will be ready soon.
          </Alert>
        </Box>
    )
    
    if (status === 'idle' || status === 'loading') return (
        <Box marginX={'auto'} marginY={5} sx={{ display: 'flex', justifyContent:'center', alignItems:'center' }}>
          <CircularProgress />
        </Box>
    )
    
    if (status === 'success') return (
        <Form style={{ margin:'3rem auto', padding:'0 2rem' }} onSubmit={handleSubmit} >
            <Grid textAlign={'center'} container >
              <Grid item xs={12} marginY={{xs:1, md:2}} md={6}>
                <Select
                  label={'Table'}
                  name={'table_number'}
                  options={clients}
                  fullWidth
                  value={clients.length ? (clients.find(i => i.number == values.table_number) ? values.table_number : clients[0].id) : 0}
                  onChange={handleSelectChange}
                />
              </Grid>
              <Grid item xs={12} marginY={{xs:1, md:2}} md={6}>
                <Select
                  label={'Payment Method'}
                  name={'payment_method'}
                  options={paymentMethods}
                  value={values.payment_method}
                  fullWidth
                  onChange={handleSelectChange}
                />
              </Grid>
            </Grid>
            <Grid textAlign={'center'} container >
              <Grid item xs={12} marginY={{xs:1, md:2}} md={6}>
                <Input
                  disabled
                  fullWidth
                  label={'Order Number'}
                  name={'orderNumber'}
                  value={'20032022'}
                />
              </Grid>
              <Grid item xs={12} marginY={{xs:1, md:2}} md={6}>
                <Input
                  disabled
                  fullWidth
                  label={'Total to pay'}
                  name={'total'}
                  value={values.total.toFixed(2)}
                  InputProps={{
                    endAdornment: <InputAdornment position='start'>DH</InputAdornment>
                  }}
                />
                <Box marginY={2} textAlign="right" >
                  <Button
                    variant={'outlined'}
                    size="large"
                    startIcon={<RestaurantMenu />}
                    type="submit"
                  >Place Order</Button>
                </Box>
              </Grid>
            </Grid>
        </Form>
    )
}

export default CheckoutPage