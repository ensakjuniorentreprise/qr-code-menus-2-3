import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import Meal from './Meal'

const Menu = (props) => {

    const { menu } = props;

    return (!menu.meals.length ? '' :
        <>
            <Typography variant='h1' className='text-center mx-auto mb-5 bold' >{menu.title}</Typography>
            <Box >
                <Grid container spacing={2} >
                    { menu.meals.map(meal => <Grid item xs={12} md={3} key={meal.id} >
                        <Meal meal={meal} />
                    </Grid>) }
                </Grid>
            </Box>
        </>
    )
}

// async function fetchMeals(menu) {
//     const {data} = await httpClient.get(`/api/v1/meals?menu=${menu.id}`);
//     return data;
// }

export default Menu