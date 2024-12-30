// Redux actions (productActions.js)
import axios from 'axios';

export const fetchProducts = () => {
    return async (dispatch) => {
      dispatch({ type: 'FETCH_PRODUCTS_REQUEST' });
      try {
        // const response = await axios.get('https://fakestoreapi.com/products');
        const response = await axios.get('http://localhost:3000/api/products');
        console.log("Fetched_data: ",response.data)
        dispatch({ type: 'FETCH_PRODUCTS_SUCCESS', payload: response.data });
      } catch (error) {
        dispatch({ type: 'FETCH_PRODUCTS_FAILURE', error });
      }
    };
};

// You may also want to export the action types for use in your reducer
export const FETCH_PRODUCTS_REQUEST = 'FETCH_PRODUCTS_REQUEST';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE';
