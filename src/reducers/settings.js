function settings(state = [], action) {
  switch(action.type) {
    case 'SWITCH_LAYOUT' :
      console.log("Switching Layout!!",state);
      return {
        state,
        layout: action.payload
      };
    default:
      return state;
  }
}

export default settings;
