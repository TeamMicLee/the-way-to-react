import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { increment, decrement } from './actions.js';
import { connect } from 'react-redux';

const buttonStyle = {
    margin: '10px'
};

export const stateKey = 'counter';

function Counter({onIncrement, onDecrement, value}) {
    return (
        <div>
            <button style={buttonStyle} onClick={onIncrement}>+</button>
            <button style={buttonStyle} onClick={onDecrement}>-</button>
            <span>Count: {value}</span>
        </div>
    );
}

Counter.PropTypes = {
    onIncrement: PropTypes.func.isRequired,
    onDecrement: PropTypes.func.isRequired,
    value: PropTypes.number.isRequired
};

const mapStateToProps = (state) => ({
    value: state[stateKey] || 0
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
    onIncrement: increment,
    onDecrement: decrement
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Counter);