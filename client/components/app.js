import React, { Component } from 'react'
import { Route, IndexRoute } from 'react-router'

import { Header } from "./Header";
import { Home } from "./Home";
import { Root } from "./Root";
import { BookDetails } from "./BookDetails";
import { BookAdd } from "./BookAdd";
import { BookEdit } from "./BookEdit";
import { BookDelete } from "./BookDelete";

export default (

    <Route path={"/"} component={Root} >
        <IndexRoute component={Home} />
        <Route path={"/add"} component={BookAdd} />
        <Route path={"/details/:bookid"} component={BookDetails} />
        <Route path={"/edit/:bookid"} component={BookEdit} />
        <Route path={"/delete/:bookid"} component={BookDelete} />
    </Route>

)