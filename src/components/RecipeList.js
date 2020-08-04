import React, { useContext } from 'react';
import Recipe from './Recipe';
import { RecipeContext } from './App';

export default function RecipeList({ recipes }) {
    const { handleRecipeAdd } = useContext(RecipeContext);
    return (
        <>
            <div>
                {recipes.map((recipe) => {
                    return <Recipe key={recipe.id} {...recipe}></Recipe>;
                })}
            </div>
            <button className="warning" onClick={handleRecipeAdd}>
                Add Recipe
            </button>
        </>
    );
}
