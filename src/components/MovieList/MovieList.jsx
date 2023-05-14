import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
// material UI styling imported for Grid layout:
import { CardActionArea, Card, CardMedia, CardContent, Grid, Typography } from '@mui/material';

function MovieList() {

    const history = useHistory();
    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    // when card is clicked, user routes to movie details: 
    const goToMovieDetails = (movieID) => {
        console.log('This movie ID was clicked:', movieID);
        let data = { ID: movieID }

        axios({
            method: 'GET',
            url: `/api/movie/details`
        }).then((response) => {
            console.log('axios call went thru:', response.data);
            console.log('The data:', data);
            history.push(`/details/${movieID}`);
        }).catch((error) => {
            console.log('error w axios call:', error);
        })
    }

    // imported Material UI for CSS formatting; see the Documentation for more info
    // about each component [https://mui.com/material-ui/react-card/#basic-card]
    return (
        <main>
            <h1>MovieList</h1>
            <Grid container spacing={3}>
                {movies.map(movie => {
                    return (
                        <Grid item 
                        key={movie.id} 
                        onClick={() => goToMovieDetails(movie.id)}
                        >
                            <Card variant="outlined" sx={{ width: 200, height: 400 }}>
                                <CardActionArea>
                                    <CardContent>
                                        <Typography variant="h6">
                                            {movie.title}
                                        </Typography>
                                    </CardContent>
                                    <CardMedia
                                        component="img"
                                        height="300"
                                        image={movie.poster}
                                        alt={movie.title} />
                                </CardActionArea>
                            </Card>
                        </Grid >
                    );
                })}
            </Grid>
        </main>

    );
}

export default MovieList;