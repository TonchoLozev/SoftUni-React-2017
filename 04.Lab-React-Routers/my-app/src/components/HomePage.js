import React from 'react';

class Home extends React.Component {
    constructor(props) {
        super(props);

        this.redirectToAbout = this.redirectToAbout.bind(this);
    }

    redirectToAbout() {
        this.props.history.push('/about');
    }

    render() {
        return (
            <div>
                <p>Hi from Home Page</p>
                <button onClick={this.redirectToAbout}>Go to about</button>
            </div>
        )
    }
}

export default Home