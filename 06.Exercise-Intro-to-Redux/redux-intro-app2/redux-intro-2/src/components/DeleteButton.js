import React, { Component } from 'react';
import actions from "../actions";
import store from "../store";
import render from "../index";

function dispatchDelete(){
    store.dispatch(actions.deleteInput());
    store.subscribe(render);
}

const DeleteButton = ()=>(
    <button onClick={dispatchDelete}>Delete last input field</button>
);

export default DeleteButton;