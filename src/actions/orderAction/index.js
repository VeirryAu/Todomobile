import {
  FETCH_ORDER,
  RECEIVE_ORDER,
  FAILED_ORDER,
  CHANGE_ORDER_DATE
} from 'actions/types'
import { me } from 'services/userService'
import {
  get,
  set
} from 'services/orderService'
import { Toast } from 'native-base'
import moment from 'moment'

const fetch = () => {
  return {
    type: FETCH_ORDER
  }
}

const receive = ({ listOrder }) => {
  return {
    type: RECEIVE_ORDER,
    payload: {
      listOrder
    }
  }
}

const failed = ({ error }) => {
  Toast.show({
    text: typeof error === 'object' ? error.message : error,
    buttonText: 'Okay',
    type: 'warning'
  })
  return {
    type: FAILED_ORDER,
    payload: {
      errorMessage: typeof error === 'object' ? error.message : error
    }
  }
}

const getData = () => async (dispatch) => {
  dispatch(fetch())

  try {
    const user = await me()
    if (user.success) {
      const query = { _sort: 'date', done: false, user: user.data.id }
      const data = await get(query)

      if (data.success) {
        dispatch(receive({
          listOrder: data.data
        }))
      } else {
        dispatch(failed(data))
      }
    } else {
      dispatch(failed(user))
    }
  } catch (error) {
    dispatch(failed(error))
  }
}

export {
  getData
}
