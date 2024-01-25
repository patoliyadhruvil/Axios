import { combineReducers } from "redux";
import { empReducer } from "./reducer/employee.reducer";
import { albumReducer } from "./reducer/album.reducer";

export const rootReducer = combineReducers({
    // empReducer
    albumReducer
})


