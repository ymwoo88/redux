import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  onPlus: PropTypes.func,
  onSubtract: PropTypes.func,
  onRandomizeColor: PropTypes.func
};

function createWarning(funcName) {
  return () => console.warn('onPlus is not defined');
}

const defaultProps = {
  onPlus: createWarning('onPlus'),
  onPlus: createWarning('onSubtract'),
  onPlus: createWarning('onRandomizeColor')
};

class Control extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div>
              <button onClick={this.props.onPlus}>plus</button>
              <button onClick={this.props.onSubtract}>minus</button>
              <button onClick={this.props.onRandomizeColor}>Randomize Color</button>
            </div>
        );
    }
}

Control.propTypes = propTypes;
Control.defaultProps = defaultProps;
export default Control;
