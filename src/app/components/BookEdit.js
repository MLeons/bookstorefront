import React from "react";
import { browserHistory } from "react-router";

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as bookActions from '../actions/bookActions'

class BookEdit extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
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

    componentWillMount() {
        const bookid = this.props.params.bookid;
        this.props.actions.getBookDetails(bookid);
        this.setState({
            book: this.props.book.books
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
        const bookid = this.props.params.bookid;
        this.props.actions.editBook(bookid, this.state.book);
    }

    render() {

        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title">Edit Book</h3>
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

function mapStateToProps(state, ownProps) {
    return {
        book: state.bookReducer
    };
}

function mapDispatchToProps(dispatch) {
    return { actions: bindActionCreators(bookActions, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookEdit);
