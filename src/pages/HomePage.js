import { Box, Container, Grid } from '@mui/material';
import { useQuery } from 'react-query';
import Meal from '../components/Meal';
import Menu from '../components/Menu'
import Spinner from '../components/Spinner';
import httpClient from '../httpClient';

async function fetchMeals() {
  const { data } = await httpClient.get('meals');
  return data;
}

export default function Home() {

    const {data, status, error} = useQuery('meals', fetchMeals);

    if (status === 'loading') return (
        <Box marginTop={3} >
            <Container maxWidth="lg" >
                { [...Array(10).keys()].map((i) => <Box minHeight={100} >
                    <Spinner margin={'auto'} key={i} />
                </Box>) }
            </Container>
        </Box>
    )

    if (status === 'error') return (
        <div className='mx-auto alert alert-danger text-center'>{error.message}</div>
    )

    if (status === 'success') return (
        <Box marginTop={3} >
            <Container maxWidth="lg" >
                <Grid container >
                    { data.map(meal => <Grid marginX="auto" display="flex" justifyContent={'center'} alignItems="center" item lg={3} md={4} sm={6} xs={11}>
                        <Meal key={meal.mealId} meal={meal} />
                    </Grid>) }
                </Grid>
            </Container>
        </Box>
    )
}