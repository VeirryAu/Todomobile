import request from 'utils/request'
import { apiOrder } from 'utils/config'

const getById = async (id) => {
  return request({
    url: `${apiOrder}/${id}`,
    auth: true,
    method: 'get'
  })
}

const get = async (data) => {
  return request({
    url: `${apiOrder}`,
    data,
    auth: true,
    method: 'get'
  })
}

const set = async (data) => {
  return request({
    url: `${apiOrder}`,
    data,
    auth: true,
    method: 'post'
  })
}

const update = async (data, order) => {
  return request({
    url: `${apiOrder}/${order}`,
    data,
    auth: true,
    method: 'put'
  })
}

export {
  getById,
  get,
  set,
  update
}
