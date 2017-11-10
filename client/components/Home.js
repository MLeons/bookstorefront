import React from "react";
import { browserHistory } from "react-router";


import { BookList } from "./BookList";

export class Home extends React.Component {


    constructor(props) {
        super(props)
        this.state = {
            homeLink: "Home",
            initialAge: 27,
            lastName: "Jones"
        }

    }

    greet() {
        alert("Hello there...");
    }

    onChangePropName() {
        this.setState({
            lastName: "Smith"
        });
    }


    onChangeLinkName(newName) {
        this.setState({
            homeLink: newName
        });
    }

    render() {


        return (
            <div className="container">

                {/* <hr />
                <b>{'==> ' + this.state.homeLink}</b>
                <br />
                <button className="btn btn-primary" onClick={() => this.onChangePropName()}>Change last name</button> */}

                <BookList age={this.state.initialAge}
                    name={this.state.lastName}
                    greet={this.greet}
                    changeLink={this.onChangeLinkName.bind(this)}
                    intialLinkName={this.state.homeLink} />
            </div>
        );
    }
}

