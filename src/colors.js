import React from 'react';
import { connect } from 'react-redux';
import mapPropsFromPropTypes from './map-props-from-proptypes';

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

export default connect(mapPropsFromPropTypes(Colors))(Colors);
