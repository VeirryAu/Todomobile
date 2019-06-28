import request from 'utils/request'
import { apiCity } from 'utils/config'

const getById = async (id) => {
  return request({
    url: `${apiCity}/${id}`,
    method: 'get'
  })
}

const get = async (data) => {
  return request({
    url: `${apiCity}`,
    data,
    method: 'get'
  })
}

export {
  getById,
  get
}
