import React from 'react'

export default function WatchedMovieContainer({item, watchedList, setWatchedList}) {
  function handleDelete(imdbID) {
    setWatchedList(watchedList.filter(value => value.imdbID !== imdbID ))
  }
  return (
    <div onClick={() => console.log(item)}  className='movie-container'>
        <div className='movie-image-container'>
            <img className='movie-image'  src={item.Poster} alt=''/>
        </div>
        <div className='movie-description-container'>
            <span>{item.Title}</span>
            <div className='watched-movies-info-container'>
            <span>{`⭐️ ${item.imdbRating}`}</span>
            <span>🌟 {item.myRating}</span>
            <span>{`⌛️ ${item.Runtime}`}</span>
            <span onClick={() => handleDelete(item.imdbID)} className='watched-movie-delete'>&times;</span>
            </div>
        </div>
    </div>
  )
}
