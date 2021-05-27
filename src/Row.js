import React, {useState, useEffect} from 'react';
import axios from './axios';
import './Row.css'

export default function Row({ title, fetchURL, landscape }) {
    const imageBaseURL = "https://image.tmdb.org/t/p/w500";
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchURL)
            setMovies(request.data.results)
            console.log(request.data.results);
        }
        fetchData();
    }, [fetchURL])

    return (
        <div className="row">
            <h2>{title}</h2>
            <div className={`row__posterContainer ${landscape? "landscape" : ""}`} >
            {movies.map(movie => (
                <img key={movie.id} src={`${imageBaseURL}${landscape? movie.backdrop_path : movie.poster_path}`} alt={movie.title} />
            ))}
            </div>
        </div>
    )
}
