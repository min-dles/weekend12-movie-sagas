import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

function MovieDetails() {

    const dispatch = useDispatch();
    const genres = useSelector(store => store.genres);

    // useParams to access the movie ID from the URL:
    let { movieID } = useParams();
    
    useEffect(() => {
        dispatch({ type: 'FETCH_GENRES'});
        console.log('Get movie ID from URL:', movieID);
    }, []);

    return (
        <div>
            <h2>Movie ID: { movieID }</h2>
            <h1>This is a test! Updated to test movie IDs</h1>
            <p>Movie details: </p>
            <ul>
                {genres.map(genre => {
                    return (
                        <li key={genre.id}>
                            <h2>Genre: {genre.name}</h2>
                        </li>
                    );
                })}
            </ul>
        </div>
    )
}

export default MovieDetails;