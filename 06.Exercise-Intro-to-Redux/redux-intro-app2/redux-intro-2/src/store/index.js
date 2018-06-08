import {createStore} from "redux";
import reducer from "../reducers";

const initialState = {inputFields: [], inputFieldsHtml: []};
const store = createStore(reducer, initialState);

export default store;