const bookReducer = (state = {
    listParams: {
        ticker: '',
        threshold: 0.0,
        chartData: ''
    }
}, action) => {

    switch (action.type) {
        case "SET_LIST_FULFILLED":
            state = {
                ...state,
                listParams: action.payload
            };
            break;
        case "SET_LIST":
            state = {
                ...state,
                listParams: action.payload
            };
            break;
    }
    return state;
};

export default bookReducer;