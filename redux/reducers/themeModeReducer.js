import { SWITCH_MODE } from '../actions/themeModeActions'

const switchModeReducer = (state = {themeMode: 'light'}, action) => {
  switch (action.type) {
    case 'SWITCH_MODE':
      return {
        themeMode: action.payload
      }
    default:
      return {...state}
  }
};

export default switchModeReducer
