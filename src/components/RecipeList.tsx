// import React from 'react'
// RecipeList is the component that a list of recipes and it uses Recipe components to do so. The App component should deliver the correct recipes to render for this component as props. Here is the type definition of the props of this component:
// interface IRecipeListProps {
//     recipes: IRecipe[];
// }

import React from 'react';
import Recipe from './Recipe'; 
import { IRecipe } from './IRecipe'; 


interface IRecipeListProps {
    recipes: IRecipe[]; 
}


const RecipeList: React.FC<IRecipeListProps> = ({ recipes }) => {
    return (
        <div>
            {recipes.map(recipe => (
                <Recipe key={recipe.id} recipeData={recipe} />
            ))}
        </div>
    );
};

export default RecipeList;

