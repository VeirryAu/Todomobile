import { Toast } from 'native-base'
import { get as getProduct } from 'services/productService'
import { FETCH_HOME, RECEIVE_HOME, FAILED_HOME } from 'actions/types'

const fetch = () => {
  return {
    type: FETCH_HOME
  }
}

const receive = (object) => {
  return {
    type: RECEIVE_HOME,
    payload: {
      ...object
    }
  }
}

const failed = (error) => {
  Toast.show({
    text: error,
    buttonText: 'Okay',
    type: 'warning'
  })
  return {
    type: FAILED_HOME,
    payload: {
      error
    }
  }
}

const queryHome = () => async (dispatch) => {
  dispatch(fetch())
  try {
    const response = await getProduct()
    if (response.success) {
      dispatch(receive(response))
    } else {
      dispatch(failed(response))
    }
  } catch (error) {
    dispatch(failed(error))
  }
}

export {
  queryHome
}
