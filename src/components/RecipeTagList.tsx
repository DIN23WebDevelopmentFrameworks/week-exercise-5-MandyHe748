// RecipeTag is the component that renders a single clickable tag. It is used by the RecipeTagList component. It should call the onSelectTag function received as prop when the tag is clicked and pass the name of the tag as a parameter to the function. The type definition for the props of this component is the following:
// src/components/RecipeTagList.tsx

import React from 'react';
import RecipeTag from './RecipeTag'; // Import the RecipeTag component

interface IRecipeTagListProps {
    tagList: string[];
    onSelectTag: (tagName: string) => void;
}

const RecipeTagList: React.FC<IRecipeTagListProps> = ({ tagList, onSelectTag }) => {
    return (
        <div>
            <h2>Recipe Tags</h2>
            <ul>
                {tagList.map(tag => (
                    <RecipeTag key={tag} tagName={tag} onSelectTag={onSelectTag} />
                ))}
            </ul>
        </div>
    );
};

export default RecipeTagList;




