import React from "react";
import { Link, browserHistory } from "react-router";

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as bookActions from '../actions/bookActions'


class BookList extends React.Component {

    onNavigateDetails(bookId) {
        browserHistory.push({
            pathname: "/details/" + bookId
        });
    }

    componentWillMount() {
        this.props.actions.getBookList();
    }

    render() {

        if (!Array.isArray(this.props.book.books)) return <p>Loading...</p>

        return (
            <div>
                <h4>Book List</h4>
                <ul className="list-unstyled">
                    {this.props.book.books.map((book, i) =>
                        <li key={i}>
                            <div className="col-xs-6">
                                <div className="col-xs-5">
                                    <h4>{book.title}</h4>
                                    <p>{book.description}</p>
                                    <p>{book._id}</p>
                                    <a className="btn btn-primary" onClick={() => this.onNavigateDetails(book._id)}>View Details</a>
                                </div>
                                <div className="col-xs-4">
                                    <img className="thumbnail" src={book.image_url} />
                                </div>
                            </div>
                        </li>
                    )}
                </ul>
            </div >
        )
    }
}

function mapStateToProps(state) {
    return {
        book: state.bookReducer
    };
}

function mapDispatchToProps(dispatch) {
    return { actions: bindActionCreators(bookActions, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);



