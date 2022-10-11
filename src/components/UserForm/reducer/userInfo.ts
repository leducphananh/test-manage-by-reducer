enum USER_ACTIONS {
    SET_USER = 'set_user',
    ADD_USER = 'add_user',
    DELETE_USER = 'delete_user',
    UPDATE_USER = 'update_user',
}

const initUser = {
    id: null,
    name: '',
    gender: 'Male',
    dob: '',
    phone: '',
    email: '',
    address: '',
    description: '',
    courses: [],
}

const userReducer = (state, action) => {
    switch (action.type) {
        case USER_ACTIONS.SET_USER:
            return {
                ...state,
                [action.field]: action.payload
            }

        default:
            return state;
    }
}

export { userReducer, initUser, USER_ACTIONS };

