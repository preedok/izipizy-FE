import axios from 'axios';
import Swal from 'sweetalert2';

// get All Recipe
export const getRecipe = (setRecipe) => async (dispatch) => {
  try {
    axios.get(`${process.env.REACT_APP_BACKEND}/api/v1/recipe`).then((response) => {
      setRecipe(response.data.data);
    });
    dispatch({ type: 'getAllRecipe', payload: 'success' });
  } catch (error) {
    Swal.fire({
      text: `${error.response.data.message}`,
      icon: 'warning',
    });
  }
};

// get Recipe Popular
export const getRecipePopular = (setPopular, counter) => async (dispatch) => {
  try {
    axios.get(`${process.env.REACT_APP_BACKEND}/api/v1/recipe?sortby=likes&sort=asc&page=${counter}&limit=100`).then((response) => {
      setPopular(response.data.data);
    });
    dispatch({ type: 'getAllRecipePopular', payload: 'success' });
  } catch (error) {
    Swal.fire({
      text: `${error.response.data.message}`,
      icon: 'warning',
    });
  }
};

// Create Recipe
export const createRecipe = () => async (dispatch) => {
  try {
    dispatch({ type: 'createRecipe', payload: 'success' });
  } catch (error) {
    Swal.fire({
      text: `${error.response.data.message}`,
      icon: 'warning',
    });
  }
};

// get Comment Recipe
export const getComment = (setDataComments, id) => async (dispatch) => {
  try {
    axios.get(`${process.env.REACT_APP_BACKEND}/api/v1/comment/recipe/${id}`).then((response) => {
      setDataComments(response.data.data);
    });
    dispatch({ type: 'getComment', payload: 'success' });
  } catch (error) {
    Swal.fire({
      text: `${error.response.data.message}`,
      icon: 'warning',
    });
  }
};

// Update Recipe
export const updateRecipe = () => async (dispatch) => {
  try {
    dispatch({ type: 'updateRecipe', payload: 'success' });
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
    dispatch({ type: 'deleteRecipe', payload: 'success' });
  } catch (error) {
    Swal.fire({
      text: error.response.data.message,
      icon: 'warning',
    });
  }
};

// get detail recipe
export const getDetailRecipe = (setRecipe, id) => async (dispatch) => {
  try {
    axios.get(`${process.env.REACT_APP_BACKEND}/api/v1/recipe/${id}`).then((response) => {
      setRecipe(response.data.data);
    });
    dispatch({ type: 'getDetailRecipe', payload: 'success' });
  } catch (error) {
    Swal.fire({
      text: error.response.data.message,
      icon: 'warning',
    });
  }
};
