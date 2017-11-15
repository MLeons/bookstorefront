import React from "react";
import { Link, browserHistory } from "react-router";


const urlForBooks = "http://localhost:3000/api/books";

export class BookList extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            requestFailed: false,
            age: props.age,
            newLink: props.intialLinkName,
            bookId: 0
        }

    }

    onNavigateDetails(bookId) {
        browserHistory.push({
            pathname: "/details/" + bookId
        });
        // browserHistory.push({
        //     pathname: '/details/',
        //     search: { bookid: bookId }
        // });
    }

    onMakeOlder() {
        this.setState({
            age: this.state.age + 3
        });
    }

    onChangeName() {
        this.props.changeLink(this.state.newLink);
    }

    onHandleChange(event) {
        this.setState({
            newLink: event.target.value
        });
    }

    componentDidMount() {

        fetch(urlForBooks).then(response => {
            if (!response.ok) {
                throw Error("Network request failed")
            }
            return response
        }).then(response => response.json())
            .then(responseJson => {
                this.setState({
                    bookListData: responseJson
                })
            }, () => {
                this.setState({
                    requestFailed: true
                })
            })
    }

    render() {

        if (this.state.requestFailed) return <p>Failed......</p>

        if (!this.state.bookListData) return <p>Loading...</p>

        return (
            <div>
                <h4>Book List</h4>

                {/* <h4>{this.state.age} --- {this.props.name}</h4>
                <br />
                <button className="btn btn-primary" onClick={this.props.greet}>Greet</button>
                <br />
                <button className="btn btn-primary" onClick={() => this.onMakeOlder()}>Make older</button>
                <br />
                <input type="text" value={this.state.newLink}
                    onChange={(event) => this.onHandleChange(event)} />
                <button className="btn btn-primary" onClick={() => this.onChangeName()}>Change link name</button>
                <hr /> */}

                <ul className="list-unstyled">
                    {this.state.bookListData.map((book, i) =>
                        <li key={i}>
                            <div className="col-xs-6">
                                <div className="col-xs-5">
                                    <h4>{book.title}</h4>
                                    <p>{book.description}</p>
                                    <p>{book._id}</p>
                                    <a className="btn btn-primary" onClick={() => this.onNavigateDetails(book._id)}>View Details</a>
                                </div>
                                <div className="col-xs-4">
                                    <img className="thumbnail" src={book.image_url} />
                                </div>
                            </div>
                        </li>
                    )}
                </ul>
            </div >
        )
    }

}

