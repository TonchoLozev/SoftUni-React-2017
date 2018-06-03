import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import Joro from './Joro';
import registerServiceWorker from './registerServiceWorker';

//creating basic component
//function Welcome(props) {
//    return <h1>Hello, {props.name}</h1>;
//}
//
//function App() {
//    return (
//        <div>
//            <Welcome name="Sara" />
//            <Welcome name="Cahal" />
//            <Welcome name="Edite" />
//        </div>
//    );
//}

//const element = <Welcome name="Sara" />;
//ReactDOM.render(<App />, document.getElementById('root'));
//ReactDOM.render(<Joro/>, document.getElementById('jorkata'));
//ReactDOM.render(<App />, document.getElementById('root'));

//nesting components and their state
//function FormattedDate(props) {
//    return <h2>It is {props.date.toLocaleTimeString()}.</h2>;
//}
//class Clock extends React.Component {
//    constructor(props) {
//        super(props);
//        this.state = {date: new Date()}
//    }
//
//    //life cycle hooks methods
//    componentDidMount() {
//        this.timerId = setInterval(() => this.tick(), 1000)
//    }
//
//    componentWillUnmount() {
//        clearInterval(this.timerId);
//    }
//    tick(){
//        this.setState({date: new Date()});
//    }
//    render() {
//        return (
//            <div>
//                <h1>Hello, {this.props.name}</h1>
//                <FormattedDate date={this.state.date} />
//            </div>
//        )
//    }
//}
//function App() {
//    return(
//        <div>
//            <Clock name="Jorjo"/>,
//            <Clock name="Jorjo"/>,
//            <Clock name="Jorjo"/>,
//        </div>
//    )
//}
//
//ReactDOM.render(
//    <App />,
//    document.getElementById('root')
//);

//creating basic events

//class Toggle extends React.Component{
//    constructor(props){
//        super(props);
//        this.state = {isToggledOn: true};
//
//        // This binding is necessary to make `this` work in the callback
//        this.handleClick = this.handleClick.bind(this);
//    }
//
//
//    handleClick(){
//        this.setState((prevState)=>{
//            return {isToggledOn: !prevState.isToggledOn}
//        });
//    }
//
//    render(){
//        return(
//            //Generally, if you refer to a method without () after it, such as onClick={this.handleClick}, you should bind that method.
//            <button onClick={this.handleClick}>
//                {this.state.isToggledOn ? 'ON' : 'OF'}
//            </button>
//        )
//    }
//}
//
//ReactDOM.render(
//    <Toggle />,
//    document.getElementById('root')
//);

//Conditional Rendering

//function GuestGreeting() {
//    return (
//        <h1>Please sign up.</h1>
//    )
//}
//
//function UserGreeting() {
//    return (
//        <h1>Welcome back!</h1>
//    )
//}
//
//function Greeting(props) {
//    const isLoggedIn = props.isLoggedIn;
//    if (isLoggedIn) {
//        return <UserGreeting/>;
//    } else {
//        return <GuestGreeting/>;
//    }
//}
//
//function LoginButton(props) {
//    return (
//        <button onClick={props.onClick}>
//            Login
//        </button>
//    );
//}
//
//function LogoutButton(props) {
//    return (
//        <button onClick={props.onClick}>
//            Logout
//        </button>
//    );
//}
//
//class LoginControl extends React.Component {
//    constructor(props) {
//        super(props);
//        this.handleLoginClick = this.handleLoginClick.bind(this);
//        this.handleLogoutClick = this.handleLogoutClick.bind(this);
//        this.state = {isLoggedIn: false};
//    }
//
//    handleLoginClick() {
//        this.setState({isLoggedIn: true})
//    }
//
//    handleLogoutClick() {
//        this.setState({isLoggedIn: false});
//    }
//
//    render() {
//        const isLoggedIn = this.state.isLoggedIn;
//
//        const button = isLoggedIn ? (
//                <LogoutButton onClick={this.handleLogoutClick} />)
//            : (
//                <LoginButton onClick={this.handleLoginClick} />
//            );
//
//        return(
//            <div>
//                <Greeting isLoggedIn={isLoggedIn} />
//                {button}
//            </div>
//        )
//
//    }
//}
//
//ReactDOM.render(
//    <LoginControl />,
//    document.getElementById('root')
//);

//function WarningBanner(props) {
//    if (!props.warn) {
//        return null;
//    }
//
//    return (
//        <div className="warning">Warning!</div>
//    );
//}
//
//class Page extends React.Component {
//    constructor(props) {
//        super(props);
//        this.state = {showWarning: true};
//        this.handleToggleClick = this.handleToggleClick.bind(this);
//    }
//
//    handleToggleClick() {
//        this.setState((prevState) => {
//            return {showWarning: !prevState.showWarning}
//        })
//    }
//
//    render() {
//        return (
//            <div>
//                <WarningBanner warn={this.state.showWarning}/>
//                <button onClick={this.handleToggleClick}>
//                    {this.state.showWarning ? 'Hide' : 'Show'}
//                </button>
//            </div>
//        )
//    }
//}
//
//ReactDOM.render(<Page/>, document.getElementById('root'));

//Lists and Keys

//const numbers = [1, 2, 3, 4, 5];
//const listItems = numbers.map((number) =>
//    <li>{number}</li>
//);
//console.log(listItems)
//ReactDOM.render(
//    <ul>{listItems}</ul>,
//    document.getElementById('root')
//);

//bad practice for adding keys to li-s
//function NumberList(props) {
//    const numbers = props.numbers;
//    const listItems = numbers.map((n) => {
//        return <li key={n.toString()} id={n.toString()}>{n}</li>
//    });
//    return(
//        <ul>{listItems}</ul>
//    )
//}
//const numbers = [1, 2, 3, 4, 5];
//
//ReactDOM.render(
//    <NumberList numbers={numbers}/>,
//    document.getElementById('root')
//);

//good practice to add keys to li-s
//function ListItem(props) {
//    // Correct! There is no need to specify the key here:
//    return <li>{props.value}</li>;
//}
//
//function NumberList(props) {
//    const numbers = props.numbers;
//    const listItems = numbers.map((number) =>
//        // Correct! Key should be specified inside the array.
//        <ListItem key={number.toString()}
//                  value={number} />
//
//    );
//    return (
//        <ul>
//            {listItems}
//        </ul>
//    );
//}
//
//const numbers = [1, 2, 3, 4, 5];
//ReactDOM.render(
//    <NumberList numbers={numbers} />,
//    document.getElementById('root')
//);

//react forms and getting values from them

//this is with input
//class NameForm extends React.Component{
//    constructor(props){
//        super(props);
//        this.state = '';
//
//        this.handleChange = this.handleChange.bind(this);
//        this.handleSubmit = this.handleSubmit.bind(this);
//    }
//
//    handleChange(event){
//        this.setState({value: event.target.value});
//    }
//
//    handleSubmit(event){
//        alert('A name was created '+ this.state.value);
//        event.preventDefault();
//    }
//
//    render(){
//        return(
//            <form onSubmit={this.handleSubmit}>
//                <label>
//                    Name:
//                    <input type="text" value={this.state.value} onChange={this.handleChange}/>
//                </label>
//                <input type="submit" value="Submit"/>
//            </form>
//        )
//    }
//}

//this is with textarea
//class EssayForm extends React.Component {
//    constructor(props) {
//        super(props);
//        this.state = {
//            value: 'Please write an essay about your favorite DOM element.'
//        };
//
//        this.handleChange = this.handleChange.bind(this);
//        this.handleSubmit = this.handleSubmit.bind(this);
//    }
//
//    handleChange(event) {
//        this.setState({value: event.target.value});
//    }
//
//    handleSubmit(event) {
//        alert('An essay was submitted: ' + this.state.value);
//        event.preventDefault();
//    }
//
//    render() {
//        return (
//            <form onSubmit={this.handleSubmit}>
//                <label>
//                    Essay:
//                    <textarea value={this.state.value} onChange={this.handleChange} />
//                </label>
//                <input type="submit" value="Submit" />
//            </form>
//        );
//    }
//}
//ReactDOM.render(
//    <EssayForm/>,
//    document.getElementById('root')
//);

//this is with select dropdown menu

//class FlavourForm extends React.Component {
//    constructor(props) {
//        super(props);
//        this.state = {value: 'coconut'};
//
//        this.handleChange = this.handleChange.bind(this);
//        this.handleSubmit = this.handleSubmit.bind(this);
//    }
//
//    handleChange(event) {
//        this.setState({value: event.target.value});
//    }
//
//    handleSubmit(event) {
//        alert('Your fav flavour is: ' + this.state.value);
//        event.preventDefault();
//    }
//
//    render() {
//        return (
//            <form onSubmit={this.handleSubmit}>
//                <label>
//                    Pick your favorite La Croix flavor:
//                    <select value={this.state.value} onChange={this.handleChange}>
//                        <option value="grapefruit">Grapefruit</option>
//                        <option value="lime">Lime</option>
//                        <option value="coconut">Coconut</option>
//                        <option value="mango">Mango</option>
//                    </select>
//                </label>
//                <input type="submit" value="Submit"/>
//            </form>
//        )
//
//    }
//}
//
//ReactDOM.render(
//    <FlavourForm/>,
//    document.getElementById('root')
//);

//class Reservation extends React.Component {
//    constructor(props) {
//        super(props);
//        this.state = {
//            isGoing: true,
//            numberOfGuests: 2
//        };
//
//        this.handleInputChange = this.handleInputChange.bind(this);
//    }
//
//    handleInputChange(event) {
//        const target = event.target;
//        const value = target.type === 'checkbox' ? target.checked : target.value;
//        const name = target.name;
//        console.log(value, name)
//        this.setState({
//            [name]: value
//        });
//    }
//
//    render() {
//        return (
//            <form>
//                <label>
//                    Is going:
//                    <input
//                        name="isGoing"
//                        type="checkbox"
//                        checked={this.state.isGoing}
//                        onChange={this.handleInputChange}/>
//                </label>
//                <br/>
//                <label>
//                    Number of guests:
//                    <input
//                        name="numberOfGuests"
//                        type="number"
//                        value={this.state.numberOfGuests}
//                        onChange={this.handleInputChange}/>
//                </label>
//            </form>
//        );
//    }
//}
//
ReactDOM.render(
    <App />,
    document.getElementById('root')
);
registerServiceWorker();
