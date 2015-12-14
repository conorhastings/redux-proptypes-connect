import React from 'react';
import { connect } from 'react-redux';

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

const injectPropsFromPropTypes = (state) => {
  let props = {};
  const propTypes = Object.keys(Animals.propTypes);
  propTypes.forEach(type => props[type] = state[type]);
  return props;
}

export default connect(injectPropsFromPropTypes)(Animals);