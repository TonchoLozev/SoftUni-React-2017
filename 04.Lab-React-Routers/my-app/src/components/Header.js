import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component{
    render(){
        const id = 2;
        return(
            <div>
                <Link to="/home">Home</Link>
                <Link to="/about">About</Link>
                <Link to={'/page/with/' + id}>Id</Link>
            </div>
        )
    }
}

export default Home