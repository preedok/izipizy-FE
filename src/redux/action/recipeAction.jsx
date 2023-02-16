import axios from 'axios';
import Swal from 'sweetalert2';

// get All Recipe
export const getRecipe = () => async (dispatch) => {
  try {
    dispatch({ type: 'getAllRecipe', payload: 'Get all recipe success' });
  } catch (error) {
    Swal.fire({
      text: error.response.data.message,
      icon: 'warning',
    });
  }
};

// Create Recipe
export const createRecipe = () => async (dispatch) => {
  try {
    dispatch({ type: 'createRecipe', payload: 'Recipe Created success' });
  } catch (error) {
    Swal.fire({
      text: error.response.data.message,
      icon: 'warning',
    });
  }
};

// Update Recipe
export const updateRecipe = () => async (dispatch) => {
  try {
    dispatch({ type: 'updateRecipe', payload: 'Recipe Updated success' });
  } catch (error) {
    Swal.fire({
      text: error.response.data.message,
      icon: 'warning',
    });
  }
};

// Delete Recipe
export const deleteRecipe = () => async (dispatch) => {
  try {
    dispatch({ type: 'deleteRecipe', payload: 'Recipe Deleted success' });
  } catch (error) {
    Swal.fire({
      text: error.response.data.message,
      icon: 'warning',
    });
  }
};

export const getDetailRecipe = () => async (dispatch) => {
  try {
    dispatch({ type: 'getDetailRecipe', payload: 'Get detail recipe success' });
  } catch (error) {
    Swal.fire({
      text: error.response.data.message,
      icon: 'warning',
    });
  }
};
