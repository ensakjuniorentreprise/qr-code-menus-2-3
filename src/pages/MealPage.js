import React from 'react'
import { ShoppingCart } from '@mui/icons-material'
import { Box, Container, Grid, InputAdornment, TextField, Typography } from '@mui/material'
import { useQuery } from 'react-query'
import { Input, Select } from '../components/controls'
import { CostumBtn } from '../components/buttons'
import { CartItemsContext } from '../contexts'
import httpClient from '../httpClient'
import Spinner from '../components/Spinner'
import { useParams } from 'react-router-dom'

async function fetchMeal(mealId) {
    const { data } = await httpClient.get(`meals/${mealId}`);
    return data;
}

const MealPage = () => {

    let { id } = useParams();

    const { data:meal, status, error } = useQuery(`meal${id}`, () => fetchMeal(id));

    const { addCartItem } = React.useContext(CartItemsContext);

    const [quantity, setQuantity] = React.useState(1);

    const handleQuantityChange = (e) => setQuantity(e.target.value);

    if (status == "loading") return (
        <Box minHeight={400} >
            <Spinner />
        </Box>
    )
    
    if (status === 'error') return (
        <div className='mx-auto alert alert-danger text-center'>{error.message}</div>
    )

    if (status == "success") return (
        <Box marginY={5} >
            <Container maxWidth={'lg'} >
                <Grid container alignItems={'center'}>
                    <Grid marginX={'auto'} paddingX={4} paddingY={2} item md={6}><img style={{ maxHeight:'100%', maxWidth:'100%', borderRadius:10 }} src="/meal.jpg" alt="..." /></Grid>
                    <Grid marginX={'auto'} item md={6} >
                        <Typography variant='h1' fontWeight={'border'}>{meal.mealName}</Typography>
                        <Box marginY={3} sx={{fontSize:19}}>
                            {/* <Box component={'span'} sx={{textDecoration:'line-through', opacity:0.5}} >{parseFloat(meal.price).toFixed(2)} DH</Box> */}
                            <Box component={'span'}> {parseFloat(meal.mealPrice).toFixed(2)} DH</Box>
                        </Box>
                        <Typography 
                            variant='p' 
                            letterSpacing={2} 
                            lineHeight={1} 
                            fontWeight={200} 
                            fontSize={19} 
                        >
                            {meal.description}
                        </Typography>
                        <Box marginY={2} sx={{display:'flex', flexDirection:'column'}}>
                            <Box marginY={1}>
                                <Select options={[...Array(10).keys()].map(n => ({id:(n+1), title:(n+1)}))} fullWidth name='quantity' value={quantity} onChange={handleQuantityChange} label={'Quantity'} />
                            </Box>
                            <Box marginY={1}>
                                <CostumBtn onClick={() => addCartItem({id:meal.mealId, title:meal.mealName, price:meal.mealPrice, quantity:quantity})} fullWidth variant="outlined" >
                                    <Box marginY={1} >
                                        <ShoppingCart /> Add to cart
                                    </Box>
                                </CostumBtn>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>

            </Container>
        </Box>
    )
}

export default MealPage