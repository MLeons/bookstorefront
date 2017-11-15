const urlBooks = "http://localhost:3000/api/books/";

export function getBookListSuccess(books) {
    return {
        type: "BOOK_LIST",
        payload: books
    }
}

export function getBookList() {
    return dispatch => {
        return getBookListApi().then(books => {
            dispatch(getBookListSuccess(books));
        }).catch(error => {
            throw (error);
        });
    }
}

export function getBookListApi() {
    return fetch(urlBooks).then(response => {
        return response.json();
    }).catch(error => {
        return error;
    });
}

// ---

export function getBookDetailsSuccess(book) {
    return {
        type: "BOOK_DETAILS",
        payload: book
    }
}

export function getBookDetails(bookid) {
    return dispatch => {
        return getBookDetailsApi(bookid).then(book => {
            dispatch(getBookDetailsSuccess(book));
        }).catch(error => {
            throw (error);
        });
    }
}

export function getBookDetailsApi(bookid) {
    const urlBookDetails = urlBooks + bookid;
    return fetch(urlBookDetails).then(response => {
        return response.json();
    }).catch(error => {
        return error;
    });
}

// ---

export function addBookSuccess(book) {
    return {
        type: "BOOK_ADD",
        payload: book
    }
}

export function addBook(book) {
    return dispatch => {
        return addBookApi(book).then(book => {
            dispatch(addBookSuccess(book));
        }).catch(error => {
            throw (error);
        });
    }
}

export function addBookApi(book) {
    return fetch(urlBooks, {
        method: 'POST',
        mode: 'CORS',
        body: JSON.stringify(book),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(response => {
        return response.json();
    }).catch(error => {
        return error;
    });
}

// ---

export function editBookSuccess(book) {
    return {
        type: "BOOK_EDIT",
        payload: book
    }
}

export function editBook(bookid, book) {
    return dispatch => {
        return editBookApi(bookid, book).then(book => {
            dispatch(editBookSuccess(book));
        }).catch(error => {
            throw (error);
        });
    }
}

export function editBookApi(bookid, book) {
    const urlEditBook = urlBooks + bookid;
    return fetch(urlEditBook, {
        method: 'PUT',
        mode: 'CORS',
        body: JSON.stringify(book),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(response => {
        return response.json();
    }).catch(error => {
        return error;
    });
}

// ---

export function deleteBookSuccess(book) {
    return {
        type: "BOOK_DELETE",
        payload: book
    }
}

export function deleteBook(bookid) {
    return dispatch => {
        return deleteBookApi(bookid).then(book => {
            dispatch(deleteBookSuccess(book));
        }).catch(error => {
            throw (error);
        });
    }
}

export function deleteBookApi(bookid) {
    const urlDeleteBook = urlBooks + bookid;
    return fetch(urlDeleteBook, {
        method: 'DELETE',
        mode: 'CORS',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(response => {
        return response.json();
    }).catch(error => {
        return error;
    });
}