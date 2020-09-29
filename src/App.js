import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const APP_ID = '03fdd561';
  const APP_KEY = '5e53c27ba78ed288c1a665c647a3daf6';
  const url = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`



  return (
    <div className="App">
      <h1>Hello Recipes!</h1>
    </div>
  );
}

export default App;
