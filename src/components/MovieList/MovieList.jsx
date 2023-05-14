import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// material UI styling imported for Grid layout:
import { CardActionArea, Card, CardMedia, CardContent, Grid, Typography } from '@mui/material';

function MovieList() {

    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    return (
        <main>
            <h1>MovieList</h1>
            <Grid container spacing={3}>
                {movies.map(movie => {
                    return (
                        <Grid item 
                        key={movie.id} 
                        
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