import React, { useEffect, useRef, useState } from 'react'

import { GiPopcorn } from "react-icons/gi";

import "../App.css";

export default function Navbar({setQuery, handleEnter}) {
  const [input, setInput] = useState("");

  function handleKeyPress(e) {
    if (e.key === "Enter") {
      handleEnter(input);
      setInput("");
    }
  }

  const searchBar = useRef(null);

  useEffect(() => {
    searchBar.current.focus();
    function callback(e) {
      if (e.key === "Enter") {
        searchBar.current.focus();
      }
    }
    return  () => document.addEventListener("keydown", callback);
  }, [])


  return (
    <div className='navigation-bar-container'>
        <div className='logo-container'>
            <GiPopcorn className='logo-image'/>
            <span>UsePopCorn</span>
        </div>
          <input ref={searchBar} onKeyDown={handleKeyPress} value={input} onChange={e => setInput(e.target.value)} className='search-box' placeholder='Search Movies...'/>
    </div>
  )
}
