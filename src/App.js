import './App.css';

import SearchAppBar from './components/AppBar/AppBar';
import Card from "./components/Card/Card";

import { Container, Grid, Typography } from "@mui/material";
import styled from 'styled-components';

import cities from './data/data';
import { Fragment } from 'react';

const CardContainer = styled(Container)`
  margin-top: 29px
`

const CityName = styled(Typography)`
  margin-bottom: 15px !important;
  margin-top: 35px !important;
`

function App() {
  return (
    <div className="App">
      <SearchAppBar/>
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
    </div>
  );
}

export default App;
