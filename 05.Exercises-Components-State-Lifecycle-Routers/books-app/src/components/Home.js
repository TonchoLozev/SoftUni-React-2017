import React from 'react';
import dataService from '../data/service';
import Book from './books/Book';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {books: []}
    }

    componentDidMount() {
        dataService.getAllBooks().then((books) => {
            books = books.sort((a, b) => {
                return new Date(b.date) - new Date(a.date);
            });
            books.splice(3);
            this.setState({books: books});
        });
    }

    render() {
        let liBooks = this.state.books.map((book, index) => {
            return <Book key={index} title={book.title} id={book.id} description={book.description} author={book.author}/>
        });
        return (
            <div>
                <ul>{liBooks}</ul>
            </div>
        )
    }
}

export default Home;