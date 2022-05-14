import React from 'react'
import { Box, Button, ButtonBase, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import {CostumBtn} from './buttons';
import { Link } from 'react-router-dom';

const Meal = ({meal}) => {

    return (
        <Box marginY={1} marginBottom={3} marginX={'auto'} maxWidth="80%" >
            <Link to={`/meal/${meal.mealId}`} >
                <Card sx={{ minHeight: 320, minWidth: 280, maxWidth: 280 }} >
                    {/* <!-- Sale badge--> */}
                    {/* <div className="badge bg-dark text-white position-absolute" style={{top: '0.5rem', right: '0.5rem'}} >Sale</div> */}
                    {/* <!-- Product image--> */}
                    <CardMedia
                        height={"160"}
                        component={'img'}
                        image={meal.image} alt={meal.mealName} />
                    {/* <!-- Product details--> */}
                    <CardContent >
                        <Box textAlign={'center'}>
                            {/* <!-- Product name--> */}
                            <Typography variant='h4' marginY={1} className="fw-bolder">{meal.mealName}</Typography>
                            {/* <!-- Product reviews--> */}
                            {/* <Box className="d-flex justify-content-center small text-warning mb-2">
                                <Box className="bi-star-fill"></Box>
                                <Box className="bi-star-fill"></Box>
                                <Box className="bi-star-fill"></Box>
                                <Box className="bi-star-fill"></Box>
                                <Box className="bi-star-fill"></Box>
                            </Box> */}
                            {/* <!-- Product price--> */}
                            {/* <Box component={'span'} sx={{ textDecoration:'line-through', opacity:'0.4' }}>{(meal.price + 1.01).toFixed(2)} DH</Box> */}
                            {meal.mealPrice.toFixed(2)} DH
                        </Box>
                    </CardContent>
                    <CardActions sx={{ margin: 'auto', display:'flex', justifyContent:'center' }}>
                        <Box textAlign={'center'}><CostumBtn variant="outlined">Commander</CostumBtn></Box>
                    </CardActions>
                </Card>
            </Link>
        </Box>
    )
}

export default Meal