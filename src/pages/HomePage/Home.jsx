
import { Fragment } from 'react';

import Card from "../../components/Card/Card";

import { Container, Grid, Typography } from "@mui/material";
import styled from 'styled-components';

import cities from '../..//data/data';

const CardContainer = styled(Container)`
  margin-top: 29px
`

const CityName = styled(Typography)`
  margin-bottom: 15px !important;
  margin-top: 35px !important;
`
const Home = () => {
    return(
        <Fragment>
            <CardContainer>
                {
                cities.map(
                    (city) => (
                    <Fragment>
                        <CityName variant='h4' component={'h2'}>
                        Top {city.name} Tours
                        </CityName>
                        <Grid container spacing={5}>
                        {
                            city.tours.map(
                            (tour, ind) => (
                                <Card tour={tour} key={ind}/>
                            )
                            )
                        }
                        </Grid>
                    </Fragment>
                    )
                )
                }            
            </CardContainer>
        </Fragment>
    );
}

export default Home;