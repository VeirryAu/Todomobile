import request from 'utils/request'
import { apiProduct } from 'utils/config'

const getById = async (id) => {
  return request({
    url: `${apiProduct}/${id}`,
    method: 'get'
  })
}

const get = async (data) => {
  return request({
    url: `${apiProduct}`,
    data,
    method: 'get'
  })
}

export {
  getById,
  get
}
