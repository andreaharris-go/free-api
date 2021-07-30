import themeModeReducer from './themeModeReducer'
import {combineReducers} from 'redux'

const rootReducer = combineReducers({
  themeMode: themeModeReducer
})

export default rootReducer
