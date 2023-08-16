import { applyMiddleware, compose, createStore } from "redux"
import thunk from "redux-thunk";
import rootStore from "./store";
import { composeWithDevTools } from "redux-devtools-extension";


const initialState = {}


const composeFunc = process.env.NODE_ENV === 'development' ? composeWithDevTools : compose;
const composeEnhances = composeFunc(applyMiddleware(thunk))
const store = createStore(rootStore(), initialState, composeEnhances)


export default store;