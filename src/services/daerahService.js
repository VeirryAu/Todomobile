import request from 'utils/request'
import { apiDaerah } from 'utils/config'

const getById = async (id) => {
  return request({
    url: `${apiDaerah}/${id}`,
    method: 'get'
  })
}

const get = async (data) => {
  return request({
    url: `${apiDaerah}`,
    data,
    method: 'get'
  })
}

export {
  getById,
  get
}
