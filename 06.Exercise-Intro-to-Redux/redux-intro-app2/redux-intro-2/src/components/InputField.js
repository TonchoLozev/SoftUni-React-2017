import React, {Component} from 'react';
import EditButton from './EditButton';

const InputField = ({value}) => (
    <div>
        <input defaultValue={value.toString().length > 0 ? value : ""}/>
        <EditButton/>
    </div>
);

export default InputField;