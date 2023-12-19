import React, { Component } from 'react';
import ACTIONS from '../../redux/action';
import { connect } from 'react-redux';

class DigitButton extends Component {
    state = {  } 

    handleClick = () => {
        this.props.add_digit(this.props.digit);
    }

    render() { 
        return (
            <button onClick={this.handleClick}>{this.props.digit}</button>
        );
    }
}

const mapDispathToProps = {
    add_digit: (digit) => {
        return {
            type: ACTIONS.ADD_DIGIT,
            digit: digit
        };
    }
};
 
export default connect(null, mapDispathToProps)(DigitButton);