import React, {Component} from 'react';

class ErrorComponent extends Component {
    constructor(props) {
        super(props);
        this.state = ({error: false});
        this.callError = this.callError.bind(this);
    }

    callError() {
        try {
            throw new Error('Fuk you');
        } catch (err) {
            this.setState({error: true})
        }
    }

    render() {
        return (
            <div>
                <button onClick={this.callError}>Call error</button>
                {this.state.error ? <p>Something went wrong</p> : ''}
            </div>
        )
    }
}

export default ErrorComponent;