export function changeTitle(title) {
  return { type: 'CHANGE_TITLE', title };
}

export function asyncChangeTitle(title) {
  return (dispatch) => {
    dispatch(changeTitle(title));
  };
}
