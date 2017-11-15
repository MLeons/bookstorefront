import React from "react";
import { browserHistory } from "react-router";

const urlForBooks = "http://localhost:3000/api/books/";

export class BookDelete extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            requestFailed: false,
            book: {
                title: '',
                genre: '',
                author: '',
                publisher: '',
                pages: '',
                description: '',
                image_url: '',
                buy_url: ''
            }
        }
    }

    componentDidMount() {

        let bookDetailsUrl = urlForBooks + this.props.params.bookid;

        if (confirm('Are you sure?') == true) {
            fetch(bookDetailsUrl, {
                method: 'DELETE',
                mode: 'CORS',
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(res => {
                browserHistory.push({
                    pathname: "/"
                });
            }).catch(err => console.log(err.message, err.name));

        } else {
            browserHistory.push({
                pathname: "/"
            });
        }


    }

    render() {
        return (
            <div className="panel panel-default">
            </div>
        );
    }
}