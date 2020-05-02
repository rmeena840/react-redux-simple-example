import React from 'react'
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import userclicked from '../action';

const UserList = ({usersdata, selectedUser}) => (
    <ul>
        {
            usersdata.map( user => (
            <li key={user.id}
            onClick = {()=> selectedUser(user)}
            >{user.first}</li>
            ))
        }
    </ul>
)

function mapStateToProps(state){
    return {
        usersdata: state.alluserdata
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({selectedUser: userclicked},dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(UserList);