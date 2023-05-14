import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function MovieDetails() {

    const dispatch = useDispatch();
    const genres = useSelector(store => store.genres);

    useEffect(() => {
        dispatch({ type: 'FETCH_GENRES'});
    }, []);

    return (
        <div>
            <h1>This is a test! Updated to test movie IDs</h1>
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