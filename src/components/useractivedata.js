import React from 'react'
import { connect } from 'react-redux';

class Useractivedata extends React.Component {
    render() {
        if(!this.props.usersdata){
            return (<h4>Clcik on user..</h4>);
        }
        return (
            <div>
                <h4>{ this.props.usersdata.description }</h4>
            </div>
        );
        
    }
}

function mapStateToProps(state){
    return {
        usersdata: state.useractive
    }
}

export default connect(mapStateToProps)(Useractivedata);
