import React, {Component} from 'react';
import './App.css';
import Button from './someComponentWithErrors';
import ErrorBoundary from './ErrorHandler';

class App extends Component {
    render() {
        return (
            <div className="App">
            <ErrorBoundary>
                <Button/>
            </ErrorBoundary>
            </div>
        );
    }
}

export default App;
