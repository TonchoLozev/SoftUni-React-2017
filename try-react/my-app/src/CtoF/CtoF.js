import React from 'react';

function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
        return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}


function IsBioling(props) {
    if (props.temperature >= 100) {
        return <p>The water would boil.</p>
    }
    return <p>The water would not boil.</p>
}

let tempKind = {'c': 'Celsius', 'f': 'Fahrenheit'};

class TemperatureInput extends React.Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.onTempChange(event.target.value)
    }

    render() {
        let scale = this.props.scale;
        let temperature = this.props.temperature;
        return (
            <fieldset>
                <legend>Enter temperature in {tempKind[scale]}</legend>
                <input value={temperature} onChange={this.handleChange}/>
            </fieldset>
        )
    }

}

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
        this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
        this.state = {temperature: '', scale: 'c'};
    }

    handleCelsiusChange(temperature) {
        this.setState({scale: 'c', temperature: temperature});
    }

    handleFahrenheitChange(temperature) {
        this.setState({scale: 'f', temperature: temperature});
    }

    render() {
        const temperature = this.state.temperature;
        const scale = this.state.scale;
        const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
        const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;
        return (
            <div>
                <TemperatureInput scale={'c'} temperature={celsius} onTempChange={this.handleCelsiusChange}/>
                <TemperatureInput scale={'f'} temperature={fahrenheit} onTempChange={this.handleFahrenheitChange}/>
                <IsBioling temperature={celsius}/>
            </div>
        )
    }
}

export default Calculator;