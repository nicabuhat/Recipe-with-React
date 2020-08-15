import React, { useContext } from 'react';
import RecipeEditIngredient from './RecipeEditIngredient';
import { RecipeContext } from './App';

export default function RecipeEdit({ recipe }) {
    const { handleRecipeChange, handleRecipeSelect } = useContext(
        RecipeContext
    );

    function handleChange(changes) {
        handleRecipeChange(recipe.id, { ...recipe, ...changes });
    }

    function handleIngredientChange(id, ingredient) {
        const newIngredients = [...recipe.ingredients];
        const index = newIngredients.findIndex((i) => i.id === id);
        newIngredients[index] = ingredient;
        handleChange({ ingredients: newIngredients });
    }

    return (
        <div className="recipe-edit with-border card">
            <div className="flex">
                <h3>{recipe.name}</h3>

                <button
                    className="cancel"
                    onClick={() => handleRecipeSelect(undefined)}
                >
                    &times;
                </button>
            </div>
            {/* FORM INPUT */}
            <div>
                <div className="form-group">
                    <label htmlFor="name">
                        <b>Name</b>
                    </label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        value={recipe.name}
                        onInput={(e) => handleChange({ name: e.target.value })}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="cookTime">
                        <b>Cook Time</b>
                    </label>
                    <input
                        type="text"
                        name="cookTime"
                        id="cookTime"
                        value={recipe.cookTime}
                        onInput={(e) =>
                            handleChange({ cookTime: e.target.value })
                        }
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="servings">
                        <b>Servings</b>
                    </label>
                    <input
                        type="text"
                        name="servings"
                        id="servings"
                        value={recipe.servings}
                        onInput={(e) =>
                            handleChange({
                                servings: parseInt(e.target.value) || '',
                            })
                        }
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="calories">
                        <b>Calories</b>
                    </label>
                    <input
                        type="text"
                        name="calories"
                        id="calories"
                        value={recipe.calories}
                        onInput={(e) =>
                            handleChange({
                                calories: parseInt(e.target.value) || '',
                            })
                        }
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="instructions">
                        <b>Instructions</b>
                    </label>
                    <textarea
                        name="instructions"
                        id="instructions"
                        value={recipe.instructions}
                        onInput={(e) =>
                            handleChange({ instructions: e.target.value })
                        }
                    />
                </div>
            </div>
            {/* INGREDIENTS */}
            <div>
                <label>
                    <b>Ingredients</b>
                </label>
            </div>
            <div className="recipe-edit__ingredient-grid">
                <div className="recipe-edit__ingredient--label">Name</div>
                <div className="recipe-edit__ingredient--label">Amount</div>
                <div></div>
                {recipe.ingredients.map((ingredient) => (
                    <RecipeEditIngredient
                        key={ingredient.id}
                        ingredient={ingredient}
                        handleIngredientChange={handleIngredientChange}
                    />
                ))}
            </div>
            <div className="recipe-edit__ingredient-btn-container">
                <button className="accent small ">Add Ingredient</button>
            </div>
        </div>
    );
}
