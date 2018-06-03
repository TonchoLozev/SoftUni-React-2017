import React from 'react';
import dataService from '../../data/service';
import QueryString from 'query-string';
import Comment from '../comments/comment';
import {Link} from 'react-router-dom';

class BookDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {book: '', comments: []}
    }

    componentDidMount() {
        const id = Number(this.props.match.params.id);
        dataService.getBookById(id).then((book) => {
            dataService.getComments(book.comments).then((comments)=>{
                this.setState({book:book, comments: comments})
            })
        });
    }

    render() {
        const book = this.state.book;
        const comments = this.state.comments.map((comment) => {
            return <Comment message={comment.message} key={comment.id}/>
        });

        return (
            <div>
                <h3>{book.title}</h3>
                <img src={book.image}/>
                <p><strong>Description</strong>: {book.description}</p>
                <p><Link to="/authors/:id"><strong>Author</strong>: {book.author}</Link></p>
                <p><strong>Price:</strong>: {book.price}</p>
                <p><strong>Comments</strong>: </p>
                <ul>{comments}</ul>
            </div>
        )
    }
}

export default BookDetails;