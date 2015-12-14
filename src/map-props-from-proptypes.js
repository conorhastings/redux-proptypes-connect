export default function mapPropsFromPropTypes(component) {
  return (state) => {
    let props = {};
    const propTypes = Object.keys(component.propTypes);
    propTypes.forEach(type => props[type] = state[type]);
    return props;
  }
}