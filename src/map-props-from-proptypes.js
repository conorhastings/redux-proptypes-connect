import { connect } from 'react-redux';
export default function mapPropsFromPropTypes(component) {
  const mapProps = (state) => {
    let props = {};
    const propTypes = Object.keys(component.propTypes);
    propTypes.forEach(type => props[type] = state[type]);
    return props;
  };
  return connect(mapProps)(component);
}