import React from 'react';
import dataService from '../../data/service';
import Book from './Book';

class AllBooks extends React.Component {
    constructor(props) {
        super(props);
        this.state = {books: [], sortType: ''};

        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        dataService.getAllBooks().then((books) => {
            this.setState({books: books});
        });
    }

    handleChange(event) {
        this.setState({sortType: event.target.value});
    }

    render() {
        let books = this.state.books;
        let sort = this.state.sortType;
        if (sort !== '') {
            if (sort === 'author') {
                books = books.sort((a, b) => {
                    let aAuthor = a.author.toString();
                    let bAuthor = b.author.toString();
                    return aAuthor.localeCompare(bAuthor);
                })
            } else if (sort === 'title') {
                books = books.sort((a, b) => {
                    let aAuthor = a.title.toString();
                    let bAuthor = b.title.toString();
                    return aAuthor.localeCompare(bAuthor);
                })
            } else {
                books = books.sort((a, b) => new Date(a.date) - new Date(b.date))
            }
        }
        return (
            <div>Select sort type
                <select onChange={this.handleChange}>
                    <option value="title">Title</option>
                    <option value="author">Author</option>
                    <option value="date">Date</option>
                </select>
                <Books books={books}/>
            </div>
        )
    }
}


class Books extends React.Component {
    render() {
        let liBooks = this.props.books.map((book, index) => {
            return <Book key={index} title={book.title} id={book.id} description={book.description} author={book.author}/>
        });
        return (
            <div>
                <ul>{liBooks}</ul>
            </div>
        )
    }
}


export default AllBooks;