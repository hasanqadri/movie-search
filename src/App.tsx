import React, {useState} from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import Header from './components/Header/index'
import Movies from './components/Movies'

function App() {
    const [movies, setMovies] = useState([]);
    const [tempMovies, setTempMovies] = useState([]);

    return (
    <div className="App">
      <Header movies={movies} setMovies={setTempMovies} />
      <Movies movies={tempMovies} setMovies={setMovies} setTempMovies={setTempMovies}/>
    </div>
  );
}

export default App;
