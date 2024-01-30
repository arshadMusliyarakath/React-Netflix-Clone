import React, { useEffect, useState } from 'react';
import './MovieRows.css';
import axios from 'axios';
import { API_KEY, BaseUrl, ImageUrl } from '../../constant';
import YouTube from 'react-youtube';


function MovieRows(props) {

    const [movie, setMovieCategory] = useState([]);
    const [url, setUrl] = useState('');
    
    useEffect( () => {
        axios(`${BaseUrl+props.category}?api_key=${API_KEY}`).then( (response) => {
            setMovieCategory(response.data.results);
        })
    });

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          autoplay: 1,
        },
      };

    const getVideoLink = (id) => {
        axios(`${BaseUrl+id}/videos?api_key=${API_KEY}`).then((response) => {
            setUrl(response.data.results[0]);
        })
    }
    
    return (
        
        <div className='movie-rows'>
            <h2>{props.title}</h2>
            <div className="movie-posters">
                {
                    
                    movie.map( (obj, index) => {
                        return (

                            <img onClick={ () => getVideoLink(obj.id) } key={index} className='poster' src={`${ImageUrl+"w200/"+obj.poster_path}`} alt={`Poster for ${ obj ? obj.title : ''}`}/>
                        )
                    })
                }
            </div>
            <div className="youtube-trailor">
                {  url && <YouTube videoId={url.key} opts={opts} /> }
            </div>
        </div>
        
    );
}

export default MovieRows;