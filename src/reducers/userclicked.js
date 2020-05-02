const  shwoActiveUser = (state = null,action) => {
    switch (action.type) {
        case 'USER_CLICKED':
            return action.payload
        default:
            return state
    }
}

export default shwoActiveUser;