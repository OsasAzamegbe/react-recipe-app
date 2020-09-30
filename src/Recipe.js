import React from 'react';
import style from './recipe.module.css'


const Recipe = ({title, calories, image, ingredients}) =>{
    return (
        <div className={style.recipe}>
            <h1>{title}</h1>
            <img className={style.recipeImg} src={image} alt={`${title} recipe`} />
            <p className={style.calories}>calories = {calories}</p>
            <ol className={style.ingredientsList}>
                {ingredients.map((ingredient, index) => {
                    return <li key={index}>{ingredient}</li>;
                })}
            </ol>
        </div>
    );
}

export default Recipe;
