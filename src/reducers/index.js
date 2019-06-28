import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import home from './home'

export default combineReducers({
  form: formReducer,
  home
})
