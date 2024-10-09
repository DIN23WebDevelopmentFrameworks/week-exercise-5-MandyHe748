// The IRecipe type definition is used in many of the above type definitions and it should be as follows:

// interface IRecipe {
//     id: number;
//     name: string;
//     ingredients: string[];
//     instructions: string[];
//     prepTimeMinutes: number;
//     cookTimeMinutes: number;
//     servings: number;
//     difficulty: string;
//     cuisine: string;
//     caloriesPerServing: number;
//     tags: string[];
//     userId: number;
//     image: string;
//     rating: number;
//     reviewCount: number;
//     mealType: string[];
// }

export interface IRecipe {
    id: number;
    name: string;
    ingredients: string[];
    instructions: string[];
    prepTimeMinutes: number;
    cookTimeMinutes: number;
    servings: number;
    difficulty: string;
    cuisine: string;
    caloriesPerServing: number;
    tags: string[];
    userId: number;
    image: string;
    rating: number;
    reviewCount: number;
    mealType: string[];
}