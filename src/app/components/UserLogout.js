import React from "react";
import { browserHistory } from "react-router";

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userActions from '../actions/userActions'
import * as flashActions from '../actions/flashActions';

class UserLogout extends React.Component {

    constructor(props) {
        super(props)
    }

    componentWillMount() {
        this.props.actions.userLogout();
    }

    render() {
        return (
            <div className="col-sm-6 col-sm-offset-3">
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h3 className="panel-title">Logout</h3>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state.userReducer
    };
}

function mapDispatchToProps(dispatch) {
    return { actions: bindActionCreators({ ...userActions, ...flashActions }, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserLogout);




