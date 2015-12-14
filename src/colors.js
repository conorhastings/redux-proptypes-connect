import React from 'react';
import { connect } from 'react-redux';

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

const injectPropsFromPropTypes = (state) => {
  let props = {};
  // want to get this to a point where Component is passed in automagically
  const propTypes = Object.keys(Colors.propTypes);
  propTypes.forEach(type => props[type] = state[type]);
  return props;
}

export default connect(injectPropsFromPropTypes)(Colors);