import React from "react";
import { browserHistory } from "react-router";

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userActions from '../actions/userActions'

class UserLogin extends React.Component {

    renderAlert() {
        if (this.props.errorMessage) {
            return <div className="alert alert-danger">
                <strong>Oops: </strong>{this.props.errorMessage}
            </div>
        }
    }

    render() {
        return (
            <div className="col-sm-6 col-sm-offset-3">
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h3 className="panel-title">Login</h3>
                    </div>
                    {this.renderAlert()}
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
                                    <button type="submit" className="btn btn-default">Login</button>
                                </form>
                            </div>
                        </div>
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
    return { actions: bindActionCreators(userActions, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserLogin);




