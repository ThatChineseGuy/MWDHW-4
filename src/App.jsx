import React from 'react';
import { useState, useEffect } from 'react'
import Movies from './component/Movies';
import SearchBar from './component/SearchBar';
import movieData from './utils/movies';


function App() {

  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('');
  const [maxLength, setMaxLength] = useState('');
  const [Order, SetOrder] = useState('ascend');
  

  useEffect(() => {
  

    setMovies(movieData.filter(movie => {
      return (movie.title.toUpperCase().includes(search.toUpperCase())) &&
         ([NaN,0].includes(parseInt(maxLength,10)) || parseInt(maxLength,10) >= movie.length )
     }));

  }, [search, maxLength]);

  

  return (
    <>
    
      {/* Header Bar for Searching */}
      <SearchBar 
        search={search} 
        setSearch={setSearch} 
        maxLength={maxLength} 
        setMaxLength={setMaxLength}
        Order={Order}
        SetOrder={SetOrder}
        movies={movies}
        setMovies={setMovies}
      />
      {/* Output the Movies */}
      <Movies 
        movies={movies} 
      />
    </>
  )
}

export default App