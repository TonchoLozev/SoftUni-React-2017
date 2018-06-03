import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Routes from './routes/routes';
import Header from './components/common/Header';
class App extends Component {
    render() {
        return (
            <div className="App">
                <Header/>
                <div className="container">
                    <Routes/>
                </div>
            </div>
        );
    }
}

export default App;
