export const sendFlashMessage = (message, className) => {
    return {
        type: 'FLASH_MESSAGE',
        payload: {
            message,
            className
        }
    }
}

export const clearFlashMessage = () => {
    return {
        type: 'FLASH_MESSAGE_CLEAR',
        payload: {}
    }
};