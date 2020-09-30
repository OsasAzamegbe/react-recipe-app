import React, {useEffect, useState} from 'react';
import Recipe from './Recipe'
import './App.css';

function App() {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');

  const APP_ID = '03fdd561';
  const APP_KEY = '5e53c27ba78ed288c1a665c647a3daf6';
  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
  
  useEffect(() =>{
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(url)
    const data = await response.json()
    setRecipes(data.hits)
    setSearch('');
    console.log(data.hits)
  }

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
