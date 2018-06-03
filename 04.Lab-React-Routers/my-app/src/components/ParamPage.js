import React from 'react';
import QueryString from 'query-string';

class SomeParam extends React.Component {
    render() {
        let id = this.props.match.params.id;
        let queryStringObj = QueryString.parse(this.props.location.search);
        console.log(queryStringObj); //coool
        return (
            <h3>Page with param {id}</h3>
        )
    }
}

export default SomeParam;