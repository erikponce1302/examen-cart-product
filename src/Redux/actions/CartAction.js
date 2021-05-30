import { types } from '../types';
import { fetchWithOutToken } from '../helpers/fetch';

export const addProductToCart = (body) => {
    return async(dispatch) => {
        await fetchWithOutToken('api/cart', body, 'POST')
        .then(data => data.json())
        .then(data => dispatch(setQuantityProducts(data)))
        .catch(e => console.log(e))
    }
}

const setQuantityProducts = (data) => ({
    type: types.cartQuantityProducts,
    payload: data
})