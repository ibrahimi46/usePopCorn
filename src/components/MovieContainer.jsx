import React from 'react'

export default function MovieContainer({item, setSelectedID, selectedID}) {
  function handleChangeID(value) {
    if (selectedID !== value) {
      setSelectedID(value);
    } else {
      setSelectedID(null);
    }
  }
  return (
    <div onClick={() => handleChangeID(item.imdbID)} className='movie-container'>
        <div className='movie-image-container'>
            <img className='movie-image'  src={item.Poster} alt=''/>
        </div>
        <div className='movie-description-container'>
            <span>{item.Title}</span>
            <span className='movie-year'>{item.Year}</span>
        </div>
    </div>
  )
}
