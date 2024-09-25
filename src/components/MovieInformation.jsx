import React, {useState} from 'react'

import { CiStar } from "react-icons/ci";


export default function MovieInformation({setSelectedID, movieSummary, selectedID, setWatchedList, watchedList}) {
    const[rating, setRating] = useState(null);
    const [previouslyRated, setPreviouslyRated] = useState(false);

    const isDuplicate = watchedList.find(item => item.imdbID === movieSummary.imdbID);
    function handleAddToList() {
        if (!isDuplicate) {
            let updatedObject = {
                ...movieSummary, 
                myRating: rating
            }
            setWatchedList(prevState => [...prevState, {...updatedObject}])
            setSelectedID(null);
            setRating(null);
        } else {
            setPreviouslyRated(!previouslyRated);
        }
    }

    function handleSetSelectedID() {
        setSelectedID(null);
    }



  return (
    <div className='movie-info-wrapper'>
    <div className='movie-info-container'>
        <div className='movie-info-img-container'>
        <span onClick={handleSetSelectedID} className='movie-info-back-btn'>{`<-`}</span>
        <img className='movie-info-img' src={movieSummary.Poster} alt='Poster'/>
        </div>
        
        <div className='movie-info'>
            <span>{movieSummary.Title}</span>
            <p>{`${movieSummary.Released} * ${movieSummary.Runtime}`}</p>
            <p>{movieSummary.Genre}</p>
            <p>{`⭐️ ${movieSummary.imdbRating} IMDb Rating`}</p>
        </div>
    </div>

    <div className='movie-summary-container'>
        <div className='rating-container'>
            <div className='rating-stars-container'>
            {!isDuplicate && !previouslyRated ? [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(item =>
                <CiStar size={25} onClick={() => setRating(item)} key={item} color='black' className={rating >= item ? 'rating-star-active' : 'rating-star'}/>
            ) : (<p>You already rated this Movie!</p>)}
            </div>
            
            {rating > 0 ? (
                <button onClick={() => handleAddToList()} className='add-to-list'>+ Add to List</button>
            ) : null}
        </div>
        <div className='summary-info-container'>
            <p style={{fontStyle: "italic"}}>{movieSummary.Plot}</p>
            <p>{`Starring ${movieSummary.Actors}`}</p>
            <p>{`Directed by ${movieSummary.Director}`}</p>
        </div>
    </div>
    </div>
  )
}
