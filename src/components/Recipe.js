import React, { useContext } from 'react';
import IngredientList from './IngredientList';
import { RecipeContext } from './App';

export default function Recipe(props) {
    const { handleRecipeDelete, handleRecipeSelect } = useContext(
        RecipeContext
    );
    const {
        id,
        name,
        cookTime,
        calories,
        servings,
        instructions,
        ingredients,
    } = props;

    return (
        <section className="with-border card">
            <div className=" grid cols-10">
                <div className="cols-7-10">
                    <h3>{name}</h3>
                </div>

                <div className="cols-3-10 btn-grp">
                    <button
                        className="accent small"
                        onClick={() => handleRecipeSelect(id)}
                    >
                        Edit
                    </button>
                    <button
                        className="cancel small"
                        onClick={() => handleRecipeDelete(id)}
                    >
                        Delete
                    </button>
                </div>

                <div className="cols-7-10 recipe__section">
                    <div>
                        <span>
                            <ion-icon name="time"></ion-icon>
                        </span>
                        <span>{cookTime}</span>
                    </div>
                    <div>
                        <span>
                            <ion-icon name="restaurant"></ion-icon>
                        </span>
                        <span>{servings} servings</span>
                    </div>
                    <div>
                        <span>
                            <ion-icon name="flame"></ion-icon>
                        </span>
                        <span>{calories} calories</span>
                    </div>
                </div>
            </div>
            <div className="recipe__section recipe__section--instructions">
                <span>
                    <b>Instructions</b>
                </span>
                <br />
                <div>{instructions}</div>
            </div>
            <div className="recipe__section">
                <span>
                    <b>Ingredients</b>
                </span>
                <ul>
                    <IngredientList ingredients={ingredients}></IngredientList>
                </ul>
            </div>
        </section>
    );
}
