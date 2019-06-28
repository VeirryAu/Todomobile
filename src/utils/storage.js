import {
  AsyncStorage
} from 'react-native'

const getUserToken = async () => {
  let data = await AsyncStorage.getItem('token')
  return data
}

const get = async (key) => {
  let data = []
  try {
    data = await AsyncStorage.getItem(key)
    return data
  } catch (error) {
    console.log('Storage Failed:', error)
  }
}

const set = async (key, data) => {
  try {
    await AsyncStorage.setItem(key, data)
    return true
  } catch (error) {
    console.log('Storage Failed:', error)
    return false
  }
}

const remove = async (key) => {
  try {
    await AsyncStorage.removeItem(key)
    return true
  } catch (error) {
    console.log('Storage Failed:', error)
    return false
  }
}

export {
  getUserToken,
  get,
  set,
  remove
}
