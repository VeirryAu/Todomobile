import request from 'utils/request'
import { apiAuth } from 'utils/config'

const login = async (data) => {
  return request({
    url: `${apiAuth}/local`,
    data,
    method: 'post'
  })
}

export {
  login
}
