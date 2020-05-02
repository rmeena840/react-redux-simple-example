import { combineReducers } from 'redux'
import userData from './usersData'
import shwoActiveUser from './userclicked'

export default combineReducers({
    alluserdata: userData,
    useractive: shwoActiveUser
})