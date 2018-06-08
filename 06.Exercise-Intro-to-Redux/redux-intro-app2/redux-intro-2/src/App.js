import React, {Component} from 'react';
import './App.css';
import AddButton from './components/AddButton';
import DeleteButton from './components/DeleteButton';
import store from "./store";

class App extends Component {
    render() {
        return (
            <div className="App">
                <AddButton/>
                <ul>
                    {store.getState().inputFieldsHtml}
                </ul>
                {store.getState().inputFields.length > 0 ? <DeleteButton/> : ''}
            </div>
        );
    }
}

export default App;
