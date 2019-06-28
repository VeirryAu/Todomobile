import React, { PureComponent } from 'react'
import { StatusBar, StyleSheet, ScrollView } from 'react-native'
import {
  View
} from 'native-base'
import color from 'theme/color'
import Header from 'components/Header'
import SigninForm from './SigninForm'

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

class SignIn extends PureComponent {
  render () {
    const { navigation } = this.props
    return (
      <View style={styles.container}>
        <ScrollView>
          <StatusBar backgroundColor={color.primaryColor} />
          <Header goBack={() => navigation.goBack(null)} name="Login" />
          <SigninForm navigation={navigation} />
        </ScrollView>
      </View>
    )
  }
}

export default SignIn
