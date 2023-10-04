import { applyMiddleware, legacy_createStore as createStore } from "redux";
import { myReducer } from "./reducers/reducers";
import thunk from "redux-thunk";

//const depo = createStore(myReducer);

export const myStore = createStore(myReducer, applyMiddleware(thunk));
