import Paper from '@mui/material/Paper';

import { Box, Grid, Rating, ThemeProvider, Typography, createTheme } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

import styled from 'styled-components';

const theme = createTheme({
    components: {
        MuiTypography: {
            variants: [
                {
                    props: {
                        variant: "body2"
                    },
                    style: {
                        fontSize: 14,
                        marginLeft: 5,
                    }
                },
                {
                    props: {
                        variant: "body3"
                    },
                    style: {
                        fontSize: 11,
                        marginLeft: 5,
                        marginTop: 1
                    }
                }
            ]
        }
    }
})

const HeadingBox = styled(Box)`
    padding: 2px 8px;
`

const TimeBox = styled(Box)`
    display: flex;
    alignitem: center;
`

const TimeIcon = styled(AccessTimeIcon)`
    width: 15px !important;
`

const RatingBox = styled(Box)`
    display: flex;
    alignitem: center;
    margin-top: 18px;
`

const Card = ({tour}) => {
    const {name, image, price, duration, rating, numberOfReviews, alt} = tour;
    return(
        <Grid item xs={3} >
            <ThemeProvider theme={theme}>
                <Paper elevation={3}> 
                    <img src={image}
                    className='img' alt={alt}/>
                    <HeadingBox>
                        <Typography variant='subtitle1' component={'h2'}>
                            {name}
                        </Typography>   
                        <TimeBox>
                            <TimeIcon />
                            <Typography variant='body2' component={'p'}>
                                {duration} hours
                            </Typography>
                        </TimeBox>
                        <RatingBox>
                            <Rating name="read-only" value={rating} precision={0.5} size='small' readOnly />
                            <Typography variant='body2' component={'p'}>
                                {rating}
                            </Typography>
                            <Typography variant='body3' component={'p'}>
                                ({numberOfReviews} reviews)
                            </Typography>
                        </RatingBox>
                        <Box>
                            <Typography variant='h6' component={'h3'}>
                                From C ${price}
                            </Typography>
                        </Box>
                    </HeadingBox>
                </Paper>
            </ThemeProvider>
        </Grid>
    );
}

export default Card;