import React from 'react';
import { connect } from 'react-redux';
import mapPropsFromPropTypes from './map-props-from-proptypes';

const Animals = ({animals}) => {
  return (
    <ul>
      {animals.map((animal) => {
        return <li key={animal}>{animal}</li>
      })}
    </ul>
  );
}

Animals.propTypes = {
  animals: React.PropTypes.array.isRequired
};

export default connect(mapPropsFromPropTypes(Animals))(Animals);