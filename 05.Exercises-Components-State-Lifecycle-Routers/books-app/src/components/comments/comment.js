import React from 'react';

class Comment extends React.Component {
    render() {
        return (
            <li>
               {this.props.message}
            </li>
        )
    }
}

export default Comment;