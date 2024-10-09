
// const App = () => {


//   return (
//     <div>
//         <h1>ACME Recipe O'Master</h1>
//         <div>
//           <RecipeTagList />
//         </div>
//         <ul>
//         <li>On start the application displays a list of recipe tags such as 'pasta', 'cookies' etc. The tag information is loaded from an API (https://dummyjson.com/recipes/tags)</li>
//         <li> The user can click on a tag and the application will then hide the tag list and display a list of recipes matching the selected tag. The recipe information for the clicked tag is loaded from an API (https://dummyjson.com/recipes/tag/Pizza).</li>
//         <li> User can also go back to the tag list. </li>
//         <li> Each receipe is displayed as box where recipe data such as ingredients and instructions are displayed</li>
//         </ul>
//     </div>
//   );
// };

// export default App;

// src/App.tsx

// import React, { useEffect, useState } from 'react';
// import RecipeTagList from './components/RecipeTagList'; // Adjust the import path as necessary
// import RecipeList from './components/RecipeList'; // Adjust the import path as necessary
// import { IRecipe } from './components/IRecipe'; // Adjust the import path as necessary

// const App: React.FC = () => {
//     const [recipes, setRecipes] = useState<IRecipe[]>([]);
//     const [tags, setTags] = useState<string[]>([]); // State for tags
//     const [selectedTag, setSelectedTag] = useState<string | null>(null); // State for selected tag

//     // Function to fetch recipe tags
//     const fetchRecipeTags = async () => {
//         const response = await fetch('https://dummyjson.com/recipes/tags');
//         const data = await response.json();
//         setTags(data); // Assuming the response is an array of tags
//     };

//     // Function to fetch recipes based on the selected tag
//     const fetchRecipesByTag = async (tag: string) => {
//         const response = await fetch(`https://dummyjson.com/recipes/tag/${tag}`);
//         const data = await response.json();
//         setRecipes(data.recipes);
//         setSelectedTag(tag); // Update the selected tag
//     };

//     useEffect(() => {
//         fetchRecipeTags(); // Fetch tags on component mount
//     }, []);

//     return (
//         <div>
//             <h1>Recipe App</h1>
//             <RecipeTagList tagList={tags} onSelectTag={fetchRecipesByTag} />
//             {selectedTag && <RecipeList recipes={recipes} />} {/* Render RecipeList based on selectedTag */}
//         </div>
//     );
// };

// export default App;

import React, { useEffect, useState } from 'react';
import RecipeTagList from './components/RecipeTagList';
import RecipeList from './components/RecipeList';
import { IRecipe } from './interface';

const App: React.FC = () => {
    const [tags, setTags] = useState<string[]>([]);
    const [recipes, setRecipes] = useState<IRecipe[]>([]);
    const [selectedTag, setSelectedTag] = useState<string | null>(null);

  
    useEffect(() => {
        const fetchTags = async () => {
            const response = await fetch('https://dummyjson.com/recipes/tags');
            const data = await response.json();
            setTags(data);
        };
        fetchTags();
    }, []);

   
    useEffect(() => {
        const fetchRecipes = async () => {
            if (selectedTag) {
                const response = await fetch(`https://dummyjson.com/recipes/tag/${selectedTag}`);
                const data = await response.json();
                setRecipes(data.recipes); // Adjust based on actual API response structure
            }
        };
        fetchRecipes();
    }, [selectedTag]);

    const handleSelectTag = (tag: string) => {
        setSelectedTag(tag);
    };

    return (
        <div>
            <h1>ACME Recipe O'Master</h1>
            <RecipeTagList tagList={tags} onSelectTag={handleSelectTag} />
            {selectedTag && <RecipeList recipes={recipes} />}
        </div>
    );
};

export default App;
