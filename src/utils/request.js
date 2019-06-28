import axios from 'axios'
import { getUserToken } from './storage'
import { APIURL } from './config'

const request = async ({
  fullUrl = false,
  url,
  data,
  auth = false,
  headers = {
    'Content-Type': 'application/json'
  },
  method
}) => {
  const useUrl = (fullUrl ? url : `${APIURL}${url}`)
  const token = await getUserToken()

  if (!token && auth) {
    return {
      success: false,
      message: 'Unauthenticated'
    }
  }

  if (auth) {
    headers.Authorization = `Bearer ${token}`
  }

  let response = {}

  try {
    switch (method) {
      case 'get': {
        response = await axios.get(`${useUrl}`, { params: data, headers })
        break
      }
      case 'post': {
        response = await axios.post(`${useUrl}`, data, { headers })
        break
      }
      case 'put': {
        response = await axios.put(useUrl, data, { headers })
        break
      }
      case 'delete': {
        response = await axios.delete(`${useUrl}`, { data, headers })
        break
      }
      default:
    }

    return Promise.resolve({
      success: true,
      data: response.data
    })
  } catch (error) {
    const { response } = error
    let msg
    let dat
    let statusCode
    let detail = ''
    if (response && response instanceof Object) {
      const { data, statusText } = response
      statusCode = response.status
      detail = data.detail
      msg = data.message || statusText
      dat = data.data || {}
    } else {
      statusCode = 600
      if (Object.prototype.hasOwnProperty.call(error, 'message')) {
        msg = error.message || 'Network Error'
      } else {
        msg = error
      }
    }
    return {
      success: false,
      detail,
      statusCode,
      message: msg,
      data: dat
    }
  }
}

export default request
