import { combineReducers } from "@reduxjs/toolkit";
import { recipeReducer } from "./recipeReducer"
import { usersReducer } from "./usersReducer"

const rootReducer = combineReducers({
  recipe: recipeReducer,
  auth: usersReducer
});

export default rootReducer;