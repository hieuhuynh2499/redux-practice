import {combineReducers} from "redux"
import gifReducer from "./gifs.js"


const rootReducer = combineReducers(
    {
        gif:gifReducer
    }
)

export default rootReducer;