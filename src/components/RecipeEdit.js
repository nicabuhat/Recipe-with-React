import React from 'react';
import RecipeEditIngredient from './RecipeEditIngredient';

export default function RecipeEdit() {
    return (
        <div className="recipe-edit with-border card">
            <div className="flex">
                <h3>New Recipe</h3>
                <button className="cancel">&times;</button>
            </div>
            {/* FORM INPUT */}
            <div>
                <div className="form-group">
                    <label htmlFor="name">
                        <b>Name</b>
                    </label>
                    <input type="text" name="name" id="name" />
                </div>
                <div className="form-group">
                    <label htmlFor="cookTime">
                        <b>Cook Time</b>
                    </label>
                    <input type="text" name="name" id="cookTime" />
                </div>
                <div className="form-group">
                    <label htmlFor="servings">
                        <b>Servings</b>
                    </label>
                    <input type="text" name="servings" id="servings" />
                </div>
                <div className="form-group">
                    <label htmlFor="instructions">
                        <b>Instructions</b>
                    </label>
                    <textarea name="instructions" id="instructions" />
                </div>
            </div>
            {/* INGREDIENTS */}
            <div>
                <label>
                    <b>Ingredients</b>
                </label>
            </div>
            <div>Name</div>
            <div>Amount</div>
            <RecipeEditIngredient />
            <button className="accent small">Add Ingredient</button>
        </div>
    );
}
