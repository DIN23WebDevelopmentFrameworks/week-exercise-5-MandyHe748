// // RecipeTag is the component that renders a single clickable tag. It is used by the RecipeTagList component. It should call the onSelectTag function received as prop when the tag is clicked and pass the name of the tag as a parameter to the function. The type definition for the props of this component is the following:interface IRecipeTagProps {
//     tagName: string;
//     onSelectTag: (tagName: string) => void;
// }

import React from 'react';


interface IRecipeTagProps {
    tagName: string;
    onSelectTag: (tagName: string) => void;
}

const RecipeTag: React.FC<IRecipeTagProps> = ({ tagName, onSelectTag }) => {
    return (
        <li onClick={() => onSelectTag(tagName)} style={{ cursor: 'pointer' }}>
            {tagName}
        </li>
    );
};

export default RecipeTag;


