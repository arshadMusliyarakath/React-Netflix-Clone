import React, { useEffect, useState } from 'react';
import './Banner.css';
import axios from 'axios';
import { API_KEY, BaseUrl, ImageUrl } from '../../constant';

function Banner(props) {

    const [movie, setMovie] = useState();
    useEffect(() => {
        axios.get(`${BaseUrl}popular?api_key=${API_KEY}`).then(response => {
            setMovie(response.data.results[0]);
        });
    })

    

    return (
        <div>
            <div
                className="banner" 
                style={ {backgroundImage : `url("${ImageUrl}w1280/${ movie ? movie.backdrop_path : ''  }")`} }
            
            >
                <div className="inner">
                    <div className="text-area">
                        <h1>{ movie ? movie.title : ''  }</h1>
                        <ul>
                            <li><button onClick={ () => { alert('Video Playing..') } }>Play</button></li>
                            <li><button>My List</button></li>
                        </ul>
                        <p className="description">{ movie ? movie.overview : '' }</p>
                    </div>
                    <div className="bottom-fade"></div>
                </div>
                
            </div>
            
        </div>
    );
}

export default Banner;