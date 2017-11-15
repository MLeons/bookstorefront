import React from "react";
import { Link, browserHistory } from "react-router";

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as bookActions from '../actions/bookActions'

class BookDetails extends React.Component {

    componentWillMount() {
        const bookid = this.props.params.bookid;
        this.props.actions.getBookDetails(bookid);
    }

    render() {

        const book = this.props.book.books;

        return (
            <div>
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h3 className="panel-title">{book.title}</h3>
                    </div>
                    <div className="panel-body">
                        <div className="row">
                            <div className="col-md-4">
                                <img src={book.image_url} />
                            </div>
                            <div className="col-md-8">
                                <p>{book.description}</p>
                                <ul className="list-group">
                                    <li className="list-group-item">Genre: {book.genre}</li>
                                    <li className="list-group-item">Author: {book.author}</li>
                                    <li className="list-group-item">Publisher: {book.publisher}</li>
                                    <li className="list-group-item">Pages: {book.pages}</li>
                                </ul>
                                <a target="_blank" href={book.buy_url} className="btn btn-primary">Buy on Amazon</a>
                            </div>
                        </div>
                    </div>
                </div >
                <div className="pull-right">
                    <Link to={"/edit/" + book._id}>Edit</Link> | <Link to={"/delete/" + book._id}>Delete</Link>
                </div>
            </div >
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

export default connect(mapStateToProps, mapDispatchToProps)(BookDetails);
