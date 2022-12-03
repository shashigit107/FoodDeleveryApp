import {combineReducers} from "redux"
import { FoodData } from "./FoodData"
const rootReducer=combineReducers({
    FoodData:FoodData,
})
export {rootReducer}