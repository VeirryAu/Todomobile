import request from 'utils/request'
import { apiHobby } from 'utils/config'

const getById = async (id) => {
  return request({
    url: `${apiHobby}/${id}`,
    method: 'get'
  })
}

const get = async (data) => {
  return request({
    url: `${apiHobby}`,
    data,
    method: 'get'
  })
}

export {
  getById,
  get
}
