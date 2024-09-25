import React from 'react'
import { useState, useEffect } from 'react';

import MovieContainer from './MovieContainer'
import MovieInformation from './MovieInformation';
import WatchedDescription from './WatchedDescription';


export default function LowerContainer({data, selectedID, setSelectedID, movieSummary}) {
    const [watchedList, setWatchedList] = useState(function() {
      const storedValue = localStorage.getItem("watchedList");
      return storedValue ? JSON.parse(storedValue) : [];
    });


    useEffect(() => {
      localStorage.setItem('watchedList', JSON.stringify(watchedList));
  }, [watchedList])

  
  return (
    <div className="lower-container">

        
        <div className="container">
          

          {data  ? data.map((item) => (
            <MovieContainer item={item} key={item.imdbID} setSelectedID={setSelectedID} selectedID={selectedID}/>
          )): "Loading..."}
        </div>


        <div className='container'>
        
        
            
            {selectedID ? <MovieInformation selectedID={selectedID} data={data} watchedList={watchedList} setWatchedList={setWatchedList} setSelectedID={setSelectedID} movieSummary={movieSummary} /> : <WatchedDescription setWatchedList={setWatchedList}  watchedList={watchedList}/>}
           
            
        </div>
      </div>
  )
}
