import React from 'react';
import {Link} from 'react-router-dom';

class Book extends React.Component {
    render() {
        return (
            <li>
                <h3><Link to={"/books/" + this.props.id}>{this.props.title}</Link></h3>
                <p><strong>Description</strong>: {this.props.description}</p>
                <p><Link to={"/authors/" + this.props.author}><strong>Author</strong>: {this.props.author}</Link></p>
            </li>
        )
    }
}

export default Book;