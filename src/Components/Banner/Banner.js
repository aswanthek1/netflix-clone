import React, { useEffect,useState } from 'react'
import {API_KEY,imageUrl} from '../../Constants/Constants'
import axios from '../../axios'
import './Banner.css'

function Banner() {
 const [movie ,setMovie] = useState()

  useEffect(()=>{
axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response) => {
    let x = Math.floor((Math.random() * response.data.results.length) + 1)
    console.log(response.data.results[0])
    setMovie(response.data.results[x])
})
  },[])
    return (
        <div className='banner' style={{backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path : ''})` }}>
            <div className='content'>
                <h2 className='title'>{movie ? movie.title : ""}</h2>
                <div className='banner_buttons'>
                    <button className='button'>Play</button>
                    <button className='button'>My List</button>
                </div>
                <h1 className='description'>{movie ? movie.overview : ""}</h1>
            </div>
            <div className="fade_bottom"></div>
        </div>
    )
}

export default Banner
