import React from 'react'
import { YellowBox } from 'react-native'
import { Provider } from 'react-redux'
import {
  createStore,
  applyMiddleware,
  compose
} from 'redux'
import { StyleProvider, Root } from 'native-base'
import thunkMiddleware from 'redux-thunk'
import getTheme from './native-base-theme/components'
import material from './native-base-theme/variables/material'
import Routes from './src/Routes'
import reducers from './src/reducers'

const store = createStore(
  reducers,
  compose(
    applyMiddleware(
      thunkMiddleware
    )
  )
)

export default class App extends React.Component {
  render () {
    return (
      <Provider
        style={{
          fontFamily: 'Lato, Roboto, "Helvetica Neue", Helvetica, Arial, "\\6587泉驛正黑", "WenQuanYi Zen Hei", "Hiragino Sans GB", "\\5137黑Pro", "LiHei Pro", "Heiti TC", "\\5FAE軟正黑體", "Microsoft JhengHei UI", "Microsoft JhengHei", sans-serif'
        }}
        store={store}
      >
        <Root>
          <StyleProvider style={getTheme(material)}>
            <Routes />
          </StyleProvider>
        </Root>
      </Provider>
    )
  }
}
