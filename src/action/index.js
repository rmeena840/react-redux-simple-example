const userclicked = (user) => {
    return {
        type: 'USER_CLICKED',
        payload: user
    }
}

export default userclicked;