import assignToEmpty from '../utils/assign';

const initialState = {
  title: '- React Pleasing start - '
};

function homeReducer(state = initialState, action) {
  Object.freeze(state);
  switch (action.type) {
    case 'CHANGE_TITLE':
      return assignToEmpty(state, {
        title: action.title
      });
    default:
      return state;
  }
}

export default homeReducer;
