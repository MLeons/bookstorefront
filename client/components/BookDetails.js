import React from "react";
import { Link, browserHistory } from "react-router";

const urlForBooks = "http://localhost:3000/api/books/";

export class BookDetails extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            requestFailed: false,
        }
    }

    componentDidMount() {

        let bookDetailsUrl = urlForBooks + this.props.params.bookid;

        fetch(bookDetailsUrl).then(response => {
            if (!response.ok) {
                throw Error("Network request failed")
            }
            return response
        }).then(response => response.json())
            .then(responseJson => {
                this.setState({
                    bookItemData: responseJson
                })
            }, () => {
                this.setState({
                    requestFailed: true
                })
            })
    }

    render() {

        if (this.state.requestFailed) return <p>Failed!</p>

        if (!this.state.bookItemData) return <p>Loading...</p>

        let book = this.state.bookItemData;

        return (

            <div>
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h3 className="panel-title">{book.title}</h3>
                    </div>
                    <div className="panel-body">
                        <div className="row">
                            <div className="col-md-4">
                                <img src={book.image_url} />
                            </div>
                            <div className="col-md-8">
                                <p>{book.description}</p>
                                <ul className="list-group">
                                    <li className="list-group-item">Genre: {book.genre}</li>
                                    <li className="list-group-item">Author: {book.author}</li>
                                    <li className="list-group-item">Publisher: {book.publisher}</li>
                                    <li className="list-group-item">Pages: {book.pages}</li>
                                </ul>
                                <a target="_blank" href={book.buy_url} className="btn btn-primary">Buy on Amazon</a>
                            </div>
                        </div>
                    </div>
                </div >

                <div className="pull-right">
                    <Link to={"/edit/" + book._id}>Edit</Link> | <Link to={"/delete/" + book._id}>Delete</Link>
                </div>
            </div >

        );
    }
}