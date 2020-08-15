import React, { useState, useEffect } from 'react';
import Header from './Header';
import RecipeList from './RecipeList';
import RecipeEdit from './RecipeEdit';
import '../css/app.css';
import { v4 as uuidv4 } from 'uuid';

export const RecipeContext = React.createContext();
const LOCAL_STORAGE_KEY = 'recipeWithReact.recipes';

function App() {
    const [selectedRecipeId, setSelectedRecipeId] = useState();
    const [recipes, setRecipes] = useState(sampleRecipes);
    const selectedRecipe = recipes.find(
        (recipe) => recipe.id === selectedRecipeId
    );

    useEffect(() => {
        const recipeJSON = localStorage.getItem(LOCAL_STORAGE_KEY);
        if (recipeJSON != null) setRecipes(JSON.parse(recipeJSON));
    }, []);

    useEffect(() => {
        console.log('rendered');
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(recipes));
    }, [recipes]);

    const RecipeContextValue = {
        handleRecipeAdd,
        handleRecipeDelete,
        handleRecipeSelect,
        handleRecipeChange,
    };

    function handleRecipeAdd() {
        const newRecipe = {
            id: uuidv4(),
            name: 'New Recipe',
            cookTime: 'cooktime',
            servings: 'servings',
            calories: 'calories',
            instructions: `1. step 1, 2. step 2`,
            ingredients: [
                {
                    id: uuidv4(),
                    name: 'name',
                    amount: 'amount',
                },
            ],
        };

        setRecipes([...recipes, newRecipe]);
    }

    function handleRecipeDelete(id) {
        setRecipes(recipes.filter((recipe) => recipe.id !== id));
    }

    function handleRecipeSelect(id) {
        setSelectedRecipeId(id);
    }

    function handleRecipeChange(id, recipe) {
        const newRecipes = [...recipes];
        const index = newRecipes.findIndex((r) => r.id === id);
        newRecipes[index] = recipe;
        setRecipes(newRecipes);
    }

    return (
        <RecipeContext.Provider value={RecipeContextValue}>
            <Header></Header>
            <main className="layout">
                <RecipeList recipes={recipes} />
                {selectedRecipe && <RecipeEdit recipe={selectedRecipe} />}
            </main>
        </RecipeContext.Provider>
    );
}

const sampleRecipes = [
    {
        id: 1,
        name: 'Chicken Pesto',
        cookTime: '25 min',
        servings: '2',
        calories: '300 cal',
        instructions: `1. Grill Chicken',
            2. Dissolve pesto powder,
            3. Mix chicken in pesto sauce`,
        ingredients: [
            {
                id: 1,
                name: 'Chicken',
                amount: '1 kg',
            },
            {
                id: 2,
                name: 'Pesto Powder',
                amount: '1 packet',
            },
        ],
    },
    {
        id: 2,
        name: 'Aglio e Olio',
        cookTime: '6 min',
        calories: '230 cal',
        servings: '3',
        instructions: [
            '1. Saute garlic in oil',
            '2. Cook pasta',
            '3. Mix pasta in garlic oil',
        ],
        ingredients: [
            {
                id: 1,
                name: 'Garlic',
                amount: '3 cloves',
            },
            {
                id: 2,
                name: 'Pasta',
                amount: '1/2 kg',
            },
        ],
    },
];

export default App;
