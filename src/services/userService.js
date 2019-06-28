import request from 'utils/request'
import { apiUser } from 'utils/config'

const me = async () => {
  return request({
    url: `${apiUser}/me`,
    auth: true,
    method: 'get'
  })
}

export {
  me
}
