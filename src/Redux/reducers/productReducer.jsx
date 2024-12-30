// Redux reducer (productReducer.js)
const initialState = {
    items: [],
    loading: false,
    error: null,
};

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_PRODUCTS_REQUEST':
            return {
                ...state,
                loading: true,
            };
        case 'FETCH_PRODUCTS_SUCCESS':
            return {
                ...state,
                items: action.payload,
                loading: false,
            };
        case 'FETCH_PRODUCTS_FAILURE':
            return {
                ...state,
                error: action.error,
                loading: false,
            };
        default:
            return state;
    }
};

export default productReducer;
