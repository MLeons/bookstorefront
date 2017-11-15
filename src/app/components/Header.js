import React from "react";
import { Link, browserHistory } from "react-router";

export const Header = (props) => {
    return (
        <nav className="navbar navbar-default">
            <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false"
                    aria-controls="navbar">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand" href="/">Bookstore</a>
            </div>
            <div id="navbar" className="collapse navbar-collapse">
                <ul className="nav navbar-nav navbar-right">
                    <li>
                        <Link to={"/add"} activeStyle={{ color: "red" }}>Add Book</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};