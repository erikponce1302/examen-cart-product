import { types } from "../types";

const initialState = {
    quantityProducts: 0
}
    
const cart = ( state= initialState, action ) => {
    
    switch (action.type) {
        case types.cartQuantityProducts:
            return {
                ...state, 
                quantityProducts: state.quantityProducts + action.payload.count
            }
        default:
            return {
                ...state
            }
    }
    
}
export default cart