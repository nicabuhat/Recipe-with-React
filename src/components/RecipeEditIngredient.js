import React from 'react';

export default function RecipeEditIngredient(props) {
    const { ingredient, handleIngredientChange } = props;

    function handleChange(changes) {
        handleIngredientChange(ingredient.id, { ...ingredient, ...changes });
    }

    return (
        <>
            <input
                type="text"
                value={ingredient.name}
                onInput={(e) => handleChange({ name: e.target.value })}
            />
            <input
                type="text"
                value={ingredient.amount}
                onInput={(e) => handleChange({ amount: e.target.value })}
            />
            <button className="cancel small">&times;</button>
        </>
    );
}
