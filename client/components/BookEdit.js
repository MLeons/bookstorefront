import React from "react";
import { browserHistory } from "react-router";

const urlForBooks = "http://localhost:3000/api/books/";

export class BookEdit extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            requestFailed: false,
            book: {
                title: '',
                genre: '',
                author: '',
                publisher: '',
                pages: '',
                description: '',
                image_url: '',
                buy_url: ''
            }
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {

        let bookDetailsUrl = urlForBooks + this.props.params.bookid;
        console.log(bookDetailsUrl);

        fetch(bookDetailsUrl).then(response => {
            if (!response.ok) {
                throw Error("Network request failed")
            }
            return response
        }).then(response => response.json())
            .then(responseJson => {
                this.setState({
                    book: responseJson
                })
            }, () => {
                this.setState({
                    requestFailed: true
                })
            })
    }

    handleChange(event) {

        const target = event.target;
        const fvalue = target.type === 'checkbox' ? target.checked : target.value;
        const fname = target.name;

        let book = this.state.book;
        book[fname] = fvalue;
        this.setState({ book: book });
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log(this.state.book);

        let bookDetailsUrl = urlForBooks + this.props.params.bookid;

        return fetch(bookDetailsUrl, {
            method: 'PUT',
            mode: 'CORS',
            body: JSON.stringify(this.state.book),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => {
            browserHistory.push({
                pathname: "/"
            });
        }).catch(err => console.log(err.message, err.name));
    }

    render() {
        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title">Add Book</h3>
                </div>
                <div className="panel-body">
                    <div className="row">
                        <div className="col-md-12">
                            <form id="addBookForm" onSubmit={this.handleSubmit}>
                                <div className="form-group">
                                    <label>Title</label>
                                    <input type="text" className="form-control" name="title" value={this.state.book.title} onChange={this.handleChange} placeholder="Title" />
                                </div>
                                <div className="form-group">
                                    <label>Genre</label>
                                    <select name="genre" value={this.state.book.genre} onChange={this.handleChange} className="form-control">
                                        <option value=""></option>
                                        <option value="Suspense">Suspense</option>
                                        <option value="Drama">Drama</option>
                                        <option value="Romance">Romance</option>
                                        <option value="NonFiction">NonFiction</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label>Author</label>
                                    <input type="text" className="form-control" name="author" value={this.state.book.author} onChange={this.handleChange} placeholder="Author" />
                                </div>
                                <div className="form-group">
                                    <label>Publisher</label>
                                    <input type="text" className="form-control" name="publisher" value={this.state.book.publisher} onChange={this.handleChange} placeholder="Publisher" />
                                </div>
                                <div className="form-group">
                                    <label>Pages</label>
                                    <input type="text" className="form-control" name="pages" value={this.state.book.pages} onChange={this.handleChange} placeholder="Pages" />
                                </div>
                                <div className="form-group">
                                    <label>Description</label>
                                    <textarea className="form-control" name="description" value={this.state.book.description} onChange={this.handleChange} placeholder="Description"></textarea>
                                </div>
                                <div className="form-group">
                                    <label>Image URL</label>
                                    <input type="text" className="form-control" name="image_url" value={this.state.book.image_url} onChange={this.handleChange} placeholder="Image URL" />
                                </div>
                                <div className="form-group">
                                    <label>Buy URL</label>
                                    <input type="text" className="form-control" name="buy_url" value={this.state.book.buy_url} onChange={this.handleChange} placeholder="Buy URL" />
                                </div>

                                <button type="submit" className="btn btn-default">Submit</button>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}