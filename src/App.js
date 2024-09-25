import React, { useState } from "react";

import "./App.css";

import Navbar from "./components/Navbar";
import LowerContainer from "./components/LowerContainer";
import { useMovies } from "./Hooks/useMovies";
import { useMovieSummary } from "./Hooks/useMovieSummary";

export default function App() {
  const [query, setQuery] = useState("spiderman");
  const [data] = useMovies(query);
  const { movieSummary, selectedID, setSelectedID } = useMovieSummary();

  function handleEnter(value) {
    setQuery(value);
  }

  return (
    <div className="wrapper-dark">
      <Navbar setQuery={setQuery} handleEnter={handleEnter} />
      <LowerContainer
        data={data}
        selectedID={selectedID}
        setSelectedID={setSelectedID}
        movieSummary={movieSummary}
      />
      <span className="results">{`Found ${data.length} results...`}</span>
    </div>
  );
}
