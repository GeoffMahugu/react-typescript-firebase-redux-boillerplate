import { combineReducers } from "redux";
import DefReducer from "./DefReducer";

const reducers = combineReducers({
    rootObject: DefReducer,
});

export default reducers;
export type State = ReturnType<typeof reducers>;