import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import SearchMovie from './components/SearchMovie';
import MovieList from './components/MovieList';

function App() {

  const [movies, setMovies] = useState([])

  const getMovieRequest = async () => {
    const url = 'http://www.omdbapi.com/?s=spider&apikey=761632b2'

    try {
      const response = await axios.get(url);
      const responseJson = response.data.Search;
      if (responseJson.length > 0) {
        setMovies(responseJson);
      } else {
        setMovies([]);
      }
    } catch (error) {
      console.error('Error:', error);
      setMovies([]);
    }
  }

  useEffect(() => {
    getMovieRequest()
  }, [])


  const searchTitle = async (title) => {
    const url = `http://www.omdbapi.com/?s=${title}&apikey=761632b2`
    const response = await fetch(url)
    const responseJson = await response.json()
    setMovies(responseJson.Search)
  }

  return (
    <div>
      <div className="movie-container">
        <SearchMovie searchTitle={searchTitle} />
        <MovieList movies={movies} />
      </div>
    </div>
  );
}

export default App;