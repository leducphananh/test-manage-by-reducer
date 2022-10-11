enum ERROR_ACTIONS {
    SET_ERROR = 'set_error',
    ADD_ERROR = 'add_error',
    DELETE_ERROR = 'delete_error',
    UPDATE_ERROR = 'update_error',
}

const initError = {
    name: '',
    gender: 'Male',
    dob: '',
    phone: '',
    email: '',
    address: '',
    description: '',
    courses: [],
}

const errorReducer = (state, action) => {
    switch (action.type) {
        case ERROR_ACTIONS.UPDATE_ERROR:
            return {
                ...state,
                [action.field]: action.payload
            }

        default:
            return state;
    }
}

export { errorReducer, initError, ERROR_ACTIONS };

