import React from 'react';
import './Recipe.scss';

const Recipe = (props) => {
    let recipe = JSON.parse(props.location.singleRecipe);
    console.log('Single recipe', props.location.singleRecipe);
    console.log(props);
    // Take the recipe rating and find its percentage value.
    const starPercentage = (recipe.rating / 5) * 100;
    // Round up the percentage value and add the percentage symbol to the value.
    const starPercentageRounded = `${Math.round(starPercentage / 10) * 10}%`;
    return (
        <div>
            <div id = "recipe_preview_container">
                <h2 className='recipe_title'>{recipe.title}</h2>
                <div className='clear_title'></div>
                <img alt = {recipe.title} src = {recipe.image} />
                <p className='recipe_info'>Duration:</p>
                <p className='recipe_content'>{recipe.duration}</p>
                <p className='recipe_info'>Steps:</p>
                <p className='recipe_content'>{recipe.steps}</p>
                <p className='recipe_info'>Difficulty:</p>
                <div id="stars_outer" style={{ display: 'inline-block' }}>
                    <div id="stars_inner" style={{ width: `${starPercentageRounded}` }}></div>
                </div>
            </div>
        </div>
    );
};

export default Recipe;
