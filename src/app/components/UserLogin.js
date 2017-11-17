import React from "react";
import { browserHistory } from "react-router";

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userActions from '../actions/userActions'
import * as flashActions from '../actions/flashActions';

import validateInput from '../validations/login';

class UserLogin extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            user: {
                username: '',
                password: ''
            },
            errors: {},
            invalid: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    isValid() {
        const { errors, isValid } = validateInput(this.state.user);
        if (!isValid) {
            this.setState({ errors: errors });
        }
        return isValid;
    }


    handleChange(event) {
        const target = event.target;
        const fvalue = target.type === 'checkbox' ? target.checked : target.value;
        const fname = target.name;
        let user = this.state.user;
        user[fname] = fvalue;
        this.setState({ user: user });
    }

    handleSubmit(e) {
        e.preventDefault();
        if (this.isValid()) {
            this.setState({ errors: {} });
            this.props.actions.userLogin(this.state.user);
        }
    }

    render() {
        const { errors } = this.state;
        return (
            <div className="col-sm-6 col-sm-offset-3">
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h3 className="panel-title">Login</h3>
                    </div>
                    <div className="panel-body">
                        <div className="row">
                            <div className="col-sm-6 col-sm-offset-3">
                                <form id="userLogin" onSubmit={this.handleSubmit}>
                                    <div className="form-group">
                                        <label>User Name</label>
                                        <input type="text" className="form-control" name="username" value={this.state.user.username} onChange={this.handleChange} />
                                        {errors.username && <span className="alert-danger">{errors.username}</span>}
                                    </div>
                                    <div className="form-group">
                                        <label>Password</label>
                                        <input type="password" className="form-control" name="password" value={this.state.user.password} onChange={this.handleChange} />
                                        {errors.password && <span className="alert-danger">{errors.password}</span>}
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
        user: state.userReducer,
        flash: state.flashReducer
    };
}

function mapDispatchToProps(dispatch) {
    return { actions: bindActionCreators({ ...userActions, ...flashActions }, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserLogin);




