import React from "react";
import { browserHistory } from "react-router";

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userActions from '../actions/userActions'

class UserRegister extends React.Component {

    render() {
        return (
            <div className="col-sm-6 col-sm-offset-3">
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h3 className="panel-title">Register</h3>
                    </div>
                    <div className="panel-body">
                        <div className="row">
                            <div className="col-sm-6 col-sm-offset-3">
                                <form action="/signup" method="post">
                                    <div className="form-group">
                                        <label>Email</label>
                                        <input type="text" className="form-control" name="email" />
                                    </div>
                                    <div className="form-group">
                                        <label>Password</label>
                                        <input type="password" className="form-control" name="password" />
                                    </div>
                                    <br />
                                    <button type="submit" className="btn btn-default">Register</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        user: state.userReducer
    };
}

function mapDispatchToProps(dispatch) {
    return { actions: bindActionCreators(userActions, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserRegister);




