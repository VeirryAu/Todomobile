const APIHOST = '206.189.92.201'
const APIPORT = '1337'

module.exports = {
  config: true,
  APPNAME: 'Todomobile',
  IMAGEURL: `http://${APIHOST}:${APIPORT}`,
  APIURL: `http://${APIHOST}:${APIPORT}`,
  apiAuth: '/auth',
  apiUser: '/users',
  apiProduct: '/products',
  apiHobby: '/hobbies',
  apiDaerah: '/provinces',
  apiCity: '/cities',
  apiTerm: '/terms',
  apiParticipant: '/participants',
  apiOrder: '/orders'
}
