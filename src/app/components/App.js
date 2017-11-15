import React from "react";
import { connect } from "react-redux";

import { Header } from "./Header";
import { setList } from "../actions/bookActions";


class App extends React.Component {

    render() {

        return (
            <div className="container">
                <div>
                    <Header />
                </div>
                <div>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        ticker: state.ticker
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setList: (listParams) => {
            dispatch(setList(listParams));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
