import store from "../store/index";
import React, {Component} from 'react';
import InputField from '../components/InputField';

const addInput = () => {
    let inputArray = store.getState().inputFields;
    inputArray.push({id: inputArray.length, value: ""});

    let inputArrayHtml = inputArray.map((input, index) => {
        return <li key={input.id}><InputField value={input.value}/></li>
    });
    return {type: 'ADD_INPUT', inputFields: inputArray, inputFieldsHtml: inputArrayHtml};
};

const deleteInput = () => {
    let inputArray = store.getState().inputFields;
    inputArray.pop();

    let inputArrayHtml = inputArray.map((input, index) => {
        return <li key={input.id}><InputField value={input.value}/></li>
    });
    return {type: 'DELETE_INPUT', inputFields: inputArray, inputFieldsHtml: inputArrayHtml};

};

export default {addInput, deleteInput};