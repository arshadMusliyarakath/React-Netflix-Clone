import React from 'react';
import NavBar from './Components/NavBar/NavBar';
import Banner from './Components/Banner/Banner';
import MovieRows from './Components/MovieRows/MovieRows';

function App() {
  return (
    <div className='content'>
        <NavBar />
        <Banner />
        <MovieRows title="Netflix Originals" category="top_rated" />
        <MovieRows title="Action Movies" category="popular" />
    </div>
  );
}

export default App;