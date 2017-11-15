import React, { Component } from 'react'
import { Route, IndexRoute } from 'react-router'

import { Header } from "./components/Header";
import { Home } from "./components/Home";
import App from "./components/App";
import { BookDetails } from "./components/BookDetails";
import { BookAdd } from "./components/BookAdd";
import { BookEdit } from "./components/BookEdit";
import { BookDelete } from "./components/BookDelete";

export default (

    <Route path={"/"} component={App} >
        <IndexRoute component={Home} />
        <Route path={"/add"} component={BookAdd} />
        <Route path={"/details/:bookid"} component={BookDetails} />
        <Route path={"/edit/:bookid"} component={BookEdit} />
        <Route path={"/delete/:bookid"} component={BookDelete} />
    </Route>

)