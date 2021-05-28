import {combineReducers} from "redux"
import gifReducer from "./gifs.js"
import listReducer from "./list.js"


const rootReducer = combineReducers(
    {
        gif:gifReducer,
        list:listReducer
    }
)

export default rootReducer;