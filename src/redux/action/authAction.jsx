import axios from 'axios';
import Swal from 'sweetalert2';

// User Login Success
export const userLoginSuccess = () => async (dispatch) => {
  try {
    dispatch({ type: 'userLoginSuccess', payload: 'Login success' });
  } catch (error) {
    Swal.fire({
      text: error.response.data.message,
      icon: 'warning',
    });
  }
};

// User Login Pending
export const userLoginPending = () => async (dispatch) => {
  try {
    dispatch({ type: 'userLoginPending', payload: 'Login pending' });
  } catch (error) {
    Swal.fire({
      text: error.response.data.message,
      icon: 'warning',
    });
  }
};
