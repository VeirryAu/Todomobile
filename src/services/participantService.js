import request from 'utils/request'
import { apiParticipant } from 'utils/config'

const getById = async (id) => {
  return request({
    url: `${apiParticipant}/${id}`,
    auth: true,
    method: 'get'
  })
}

const get = async (data) => {
  return request({
    url: `${apiParticipant}`,
    data,
    auth: true,
    method: 'get'
  })
}

const set = async (data) => {
  return request({
    url: `${apiParticipant}`,
    data,
    auth: true,
    method: 'post'
  })
}

export {
  getById,
  get,
  set
}
