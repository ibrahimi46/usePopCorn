import React from 'react'
import WatchedMovieContainer from './WatchedMovieContainer'

export default function WatchedDescription({watchedList, setWatchedList}) {
  let sumOfImdbRating = 0;
  let sumOfMyRating = 0;
  let sumOfRuntime = 0;


  watchedList.forEach((item) => {
    const imdbRating = Number(item.imdbRating);
    if (!isNaN(imdbRating)) {
      sumOfImdbRating += Number(item.imdbRating)
    }
    sumOfMyRating += Number(item.myRating)
    let runtime = parseFloat(item.Runtime.match(/\d+/));
    if (!isNaN(runtime)) {
      sumOfRuntime += runtime;  
    }
  })


  return (
    <>
    
    <div className='watched-description-container'>
        <h2>MOVIES YOU WATCHED</h2>
        <div className='description-container'>
            <span># {watchedList.length} Movies</span>
            <span>🌟 {sumOfImdbRating.toFixed(1)}</span>
            <span>⭐️ {sumOfMyRating}</span>
            <span>⌛️ {sumOfRuntime} Min</span>
        </div>
    </div>
    <div className='watched-movies-container'>
    {watchedList.length > 0 ? (
      watchedList.map(item => <WatchedMovieContainer setWatchedList={setWatchedList} watchedList={watchedList}  item={item} key={item.imdbID}/>)
    ) : null}
    </div>
    </>
  )
}
