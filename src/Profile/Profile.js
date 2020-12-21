import PropTypes from "prop-types";
import React, { Component } from 'react';

class Profile extends Component {
    

    render(props) {
        return (
            <div style={{backgroundColor: 'pink' }} >
                My name is {this.props.fullName} , My Bio is to {this.props.bio},
                and my Profession is {this.props.profession} <br />
                {this.props.children} {this.props.fct(this.props.fullName) }
                

            </div>
        )
    }
}
Profile.defaultProps = {
    fullName : 'Randa Chaieb',
    bio : 'love yourself', 
    profession : 'student',
    children : './logo512.png'
}

Profile.propTypes = { 
    fullName : PropTypes.string  ,
    bio : PropTypes.string, 
    profession :PropTypes.string ,
    children : PropTypes.string
    
};

export default Profile