import request from 'utils/request'
import { apiTerm } from 'utils/config'

const get = async (data) => {
  return request({
    url: `${apiTerm}`,
    data,
    method: 'get'
  })
}

export {
  get
}
