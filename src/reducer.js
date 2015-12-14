const initState = {
  animals: ['lion', 'tiger', 'bear'],
  colors: ['red', 'green', 'blue']
}

const reducer = (state = initState, action) => {
  let newState = {...state};
  switch(action.type) {
    case 'ADD_ANIMAL': 
      newState.animals = [...state.animals].concat(action.animal);
      break;
    case 'ADD_COLOR':
      newState.colors = [...state.colors].concat(action.color);
      break;
  }
  return newState;
};

export default reducer;