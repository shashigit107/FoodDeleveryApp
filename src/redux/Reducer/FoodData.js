import { Action_type } from "../../Constant/Action_type";
const { ADD_ELEMENT_TO_REDUX,
    SET_USER_CREDENTIAL,
    FETCH_API_SUCCESSFULLY,
    SET_API_FETCH_ERROR,
    SET_USER_ADDRESS,
    SET_HORIZONTAL_DATA,
    SET_VERTICAL_DATA,
    SET_HORIZONTAL_SELECTED_DATA,
    ADD_ITEM_TO_CART
} = Action_type


const intialState = {
    data: null,
    userCredential: null,
    foodData: [],
    appiFetchError: null,
    userAddress: null,
    horizontalData: null,
    verticalData: null,
    loading:true,
    cartData:[]
}
// SET_USER_CREDENTIAL
const FoodData = (state = intialState, action) => {

    switch (action.type) {
        case ADD_ELEMENT_TO_REDUX:
            return {
                ...state,
                data: action.payload
            }
        case SET_USER_CREDENTIAL:

            return {
                ...state,
                userCredential: action.payload
            }
        case FETCH_API_SUCCESSFULLY:

            return {
                ...state,
                foodData: action.payload
            }
        case SET_API_FETCH_ERROR:

            return {
                ...state,
                appiFetchError: action.payload
            }
        case SET_USER_ADDRESS:
            return {
                ...state,
                userAddress: action.payload
            }
        case SET_HORIZONTAL_DATA:
            return {
                ...state,
                horizontalData: action.payload,
                loading:false
            }
        case SET_VERTICAL_DATA:

            return {
                ...state,
                verticalData: action.payload,
                loading:false
            }
        case SET_HORIZONTAL_SELECTED_DATA:
            console.log("SET_VERTICAL_DATA",action)
            return {
                ...state,
                horizontalData: action.payload,
            }
            case ADD_ITEM_TO_CART:
                return{
                    ...state,
                    cartData:action.payload
                }


        default:
            return state;
    }
}
export { FoodData }