import React from "react";
import { browserHistory } from "react-router";

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as bookActions from '../actions/bookActions'

class BookDelete extends React.Component {

    componentWillMount() {
        if (confirm('Are you sure?') == true) {
            const bookid = this.props.params.bookid;
            this.props.actions.deleteBook(bookid);
        } else {
            browserHistory.goBack();
        }
    }

    render() {
        return (
            <div className="panel panel-default">
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

export default connect(mapStateToProps, mapDispatchToProps)(BookDelete);
