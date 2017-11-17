import React from "react";
import { browserHistory } from "react-router";

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as flashActions from '../actions/flashActions'

class FlashMessage extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        const { message, className } = this.props.flash.initialState;

        if (!message) {
            return null;
        }

        return (
            <div className="panel-body">
                <div className="row">
                    <div className={'col-md-12 alert ' + className} role="alert">
                        {message}
                    </div>
                </div>
            </div>
        );
    }

}

function mapStateToProps(state) {
    return {
        flash: state.flashReducer
    };
}

function mapDispatchToProps(dispatch) {
    return { actions: bindActionCreators(flashActions, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(FlashMessage);

