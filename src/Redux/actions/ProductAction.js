import moment from 'moment';
import { types } from '../types';
import { fetchWithOutToken } from '../helpers/fetch';

export const getAllProducts = () => {
    return async(dispatch) => {
        let wasRequestProducts = 0;
        const productsStorage = localStorage.getItem("AllProducts");
        const dateRequestProducts = localStorage.getItem("DateRequestProducts")
        if ( dateRequestProducts ) {
            wasRequestProducts =  moment().diff(moment(dateRequestProducts), 'seconds');
        }
        
        if ( !productsStorage || !dateRequestProducts || wasRequestProducts > 3600 ) {
            await fetchWithOutToken(`api/product`)
            .then(data => data.json())
            .then(data => {
                localStorage.setItem("AllProducts", JSON.stringify(data));
                localStorage.setItem("DateRequestProducts", moment().format('YYYY-MM-DDTHH:mm:ss'));
                dispatch(setAllProducts(data))
            }
                )
                .catch( e => console.log(e))
        } else {
            dispatch(setAllProducts(JSON.parse(productsStorage)))
        }
    }
}

export const getProductById = ( id ) => {
    return async(dispatch) => {
        await fetchWithOutToken(`api/product/${id}`)
        .then(data => data.json())
        .then(data => dispatch(setProduct(data)))
        .catch( e => console.log(e));
    }
}

export const cleanProductById = () => {
    return (dispatch) => {
        dispatch(cleanProductDetail())
    }
}

const setAllProducts = ( data ) => ({
    type: types.productSetAll,
    payload: { data }
})

export const setProductsFilter = ( data ) => ({
    type: types.productFilterSet,
    payload: { data }
})

const setProduct = (data) => ({
    type: types.productSetById,
    payload: { data }
})

const cleanProductDetail = () => ({
    type: types.productClean
})