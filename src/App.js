import React, {useEffect, useState} from 'react';
import Recipe from './Recipe';
import './App.css';
require('dotenv').config()

function App() {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');

  useEffect(() =>{
    const APP_ID = process.env.REACT_APP_ID;
    const APP_KEY = process.env.REACT_APP_KEY;
    const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`

    const getRecipes = async () => {
      const response = await fetch(url)
      const data = await response.json()
      setRecipes(data.hits)
      setSearch('');
    }
    getRecipes();
  }, [query]);


  const updateSearch = e => {
    setSearch(e.target.value)
  }

  const getSearch = e => {
    e.preventDefault();
    if (search){
      setQuery(search);
    }
  }


  return (
    <div className="App">
      <form  onSubmit={getSearch} className="search-form" >
        <input className="search-input" type="text" placeholder="search for recipes" value={search} onChange={updateSearch} />
        <button className="search-button" type="submit" >
          Search
        </button>
      </form>

      <div className="recipes" >
        {recipes.map(recipe => (
          <Recipe 
            key={recipe.recipe.uri}
            title={recipe.recipe.label} 
            calories={recipe.recipe.calories} 
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredientLines} />
        ))}
      </div>      
    </div>
  );
}

export default App;
