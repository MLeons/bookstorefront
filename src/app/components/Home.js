import React from "react";
import { browserHistory } from "react-router";

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as bookActions from '../actions/bookActions'

import BookList from "./BookList";

class Home extends React.Component {

    render() {
        return (
            <div className="container">
                <BookList />
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);




