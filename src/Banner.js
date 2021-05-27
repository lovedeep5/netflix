import React, { useEffect, useState } from 'react';
import requests from './requests';
import axios from './axios'
import './Banner.css';


export default function Banner() {
    const imageBaseURL = "https://image.tmdb.org/t/p/original";
    const [banner, setBanner] = useState({});

    useEffect(() => {
        async function fetchData() {
            const randomNumber = Math.floor(Math.random() * 20);
            const request = await axios.get(requests.fetchOriginals);
            setBanner(request.data.results[randomNumber]);
            
        }
        fetchData();
    }, [])
    console.log(banner);
    return (
        <div className="banner-wrapper">
            <div className="banner" style={{
                backgroundImage: `url(${imageBaseURL}${banner.backdrop_path})`,
                backgroundSize: "cover",
                backgroundPosition: "center center"

            }}>
                <div className="banner-content">
                    <div className="banner-copy">
                        <span className="movie-title">{banner.name}</span>
                        <span className="movie-desc">{banner.overview}</span>
                        <div className="banner-btn">
                            <button>Watch Now</button>
                            <button>Add to Watchlist</button>
                        </div>
                    </div>
                </div>
            </div>            
        </div>
    )
}

