import axios from 'axios';
import React, { useState } from 'react';



function App() {

  const[infoMovie,setInfoMovie]=useState({
    type: 'movie',
    year:'',
    searchMovie:''
  })

  const [movies, setMovies] = useState([]);


  const handleSearch = async () => {
    const response = await axios.get(`https://www.omdbapi.com/?apikey=c2062f5b&s=${infoMovie.searchMovie}&type=${infoMovie.type}&y=${infoMovie.year}`);

    if (response.data.Search) {
      setMovies(response.data.Search);
    }
   
  };



  return (
    <div className='app'>
      <form>
        <h1>Movies</h1>
        <input 
          type="text" 
          value={infoMovie.searchMovie} 
          name='searchMovie' 
          onChange={(e) => setInfoMovie({...infoMovie,[e.target.name]:e.target.value})} 
          placeholder='Enter a Movie...'
        />

        <select value={infoMovie.type} name='type' onChange={(e)=>setInfoMovie({...infoMovie,[e.target.name]:e.target.value})}>
          <option value="movie">Movie</option>
          <option value="series">Series</option>
        </select>

        <input 
          type="text"  
          value={infoMovie.year} 
          name='year' 
          onChange={(e)=>setInfoMovie({...infoMovie,[e.target.name]:e.target.value})} 
          placeholder='Year'
        />

        <button type='button' onClick={handleSearch}>Search</button>

      </form>


      <div className='container'>
        {movies.map((movie) => (
          <div className="card">
            <div className="img">
              <img src={movie.Poster} alt="" />
            </div>
            <p>{movie.Title}</p>
            <p>Type: {movie.Type}</p>
            <p>Year: {movie.Year}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
