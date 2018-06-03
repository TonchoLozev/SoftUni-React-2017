import React from 'react';
import {Link} from 'react-router-dom';

class Header extends React.Component {
    render() {
        return (
            <div>
                <p><Link to="/home">Home</Link></p>
                <p><Link to="/books/all">Books</Link></p>
                <p><Link to="/authors/all">Authors</Link></p>
            </div>
        )
    }
}

export default Header