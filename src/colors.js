import React from 'react';
import reduxConnectedPropTypes from 'redux-connected-proptypes';

const Colors = ({colors}) => {
  return (
    <ul>
      {colors.map((color) => {
        return <li key={color}>{color}</li>
      })}
    </ul>
  );
}

Colors.propTypes = {
  colors: React.PropTypes.array.isRequired
};

export default reduxConnectedPropTypes(Colors);
