import React, {Component} from 'react';
import store from "../store/index";
import actions from '../actions/index';
import render from '../index';

function dispatchAdd() {
    store.dispatch(actions.addInput());
    store.subscribe(render);
}

const AddButton = () => (
    <button onClick={dispatchAdd}>Add new input field</button>
);

export default AddButton;
