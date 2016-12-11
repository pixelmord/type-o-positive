function keyMap(state = [], action) {
  switch(action.type) {
    case 'INCREMENT_KEYPRESS' :
      return {
        ...state,
        rows: state.rows.map(row => {
          return row.map(keyData => {
            keyData.pressed = (action.payload === keyData.id) ? keyData.pressed + 1 : keyData.pressed;
            return keyData;
          })
        }),

      };
    default:
      return state;
  }
}

export default keyMap;
