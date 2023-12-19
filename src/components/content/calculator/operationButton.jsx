import React, { Component } from 'react';
import { connect } from 'react-redux';
import ACTIONS from '../../redux/action';

class OperationButton extends Component {
    state = {  } 
    render() { 
        return (
            <button onClick={() => {this.props.choose_operation(this.props.operation)}}>
                {this.props.operation}
            </button>
        );
    }
}

const mapDispathToProps = {
    choose_operation: (operation) => ({type: ACTIONS.CHOOSE_OPERATION, 
                                        operation: operation})
}
 
export default connect(null, mapDispathToProps)(OperationButton);