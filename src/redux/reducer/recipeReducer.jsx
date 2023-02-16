const initialState = {
  recipe: [],
  detailRecipe: [],
};

export const recipeReducer = (state = initialState, action) => {
  if (action.type === 'getAllRecipe') {
    return {
      ...state,
      recipe: action.payload,
    };
  } else if (action.type === 'createRecipe') {
    return state;
  } else if (action.type === 'deleteRecipe') {
    return state;
  } else if (action.type === 'updateRecipe') {
    return state;
  } else if (action.type === 'getDetailRecipe') {
    return {
      ...state,
      detailRecipe: action.payload,
    };
  } else {
    return state;
  }
};
