import { combineReducers } from "redux";
import todos from './reducers'

const rootStore = (initialState) => combineReducers({
    todos


})

export default rootStore;