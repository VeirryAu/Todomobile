import {
  FETCH_HOME,
  RECEIVE_HOME,
  FAILED_HOME
} from '../actions/types'

const initialState = {
  loading: false,
  errorMessage: '',
  segmentImage: {},
  listPopuler: []
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_HOME: {
      return Object.assign({}, state, {
        loading: true
      })
    }
    case RECEIVE_HOME: {
      return Object.assign({}, state, {
        loading: false,
        ...action.payload
      })
    }
    case FAILED_HOME: {
      return Object.assign({}, state, {
        loading: false,
        errorMessage: action.payload.error
      })
    }
    default:
      return state
  }
}
