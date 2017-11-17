const flashReducer = (state = {
    initialState: {
        message: null,
        className: null
    }
}, action) => {

    switch (action.type) {

        case "FLASH_MESSAGE":
            state = {
                ...state,
                initialState: action.payload
            };
            break;

        case "FLASH_MESSAGE_CLEAR":
            state = {
                ...state,
                initialState: action.payload
            };
            break;

    }
    return state;
};

export default flashReducer;