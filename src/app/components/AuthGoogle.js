import React from "react";
import { browserHistory } from "react-router";

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userActions from '../actions/userActions'
import * as flashActions from '../actions/flashActions';
import * as bookActions from '../actions/bookActions'

class AuthGoogle extends React.Component {

    constructor(props) {
        super(props)
    }

    componentWillMount() {
        this.props.actions.userLoginGoogle();
    }

    render() {
        return (
            <div className="col-sm-6 col-sm-offset-3" >
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h3 className="panel-title">Google Auth</h3>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state.userReducer,
        book: state.bookReducer
    };
}

function mapDispatchToProps(dispatch) {
    return { actions: bindActionCreators({ ...userActions, ...bookActions }, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthGoogle);




