import React, { PureComponent } from 'react'
import { Field, reduxForm } from 'redux-form'
import {
  StyleSheet,
  KeyboardAvoidingView
} from 'react-native'
import {
  Input,
  Item,
  View,
  Text,
  Button,
  Toast
} from 'native-base'
import color from 'theme/color'
import SegmentLogo from 'components/SegmentLogo'
import { login } from 'services/authService'
import { set } from 'utils/storage'
import validate from './validate'

const styles = StyleSheet.create({
  label: {
    color: color.primaryText,
    fontSize: 14,
    marginBottom: 5
  },
  viewInput: {
    paddingHorizontal: 10,
    marginBottom: 10
  },
  input: {
    paddingLeft: 10,
    paddingRight: 10,
    color: color.primaryText,
    borderWidth: 1,
    fontSize: 14,
    borderColor: color.dividerColor,
    borderRadius: 5,
    height: 40
  },
  item: {
    borderBottomWidth: 0
  },
  hairline: {
    backgroundColor: color.secondaryText,
    height: 1,
    width: '40%'
  },
  text: {
    alignSelf: 'center',
    color: color.primaryText
  }
})

class SigninForm extends PureComponent {
  state = {
    secureTextEntry: true
  }

  onSubmit = async (values) => {
    const { error, navigation } = this.props
    if (!error) {
      try {
        const loginData = await login(values)
        if (loginData.success) {
          const setToken = await set('token', loginData.data.jwt)
          if (setToken) {
            navigation.navigate('App')
          } else {
            this.errorHandler('Technical Error: please try again.')
          }
        } else {
          this.errorHandler(loginData.message)
        }
      } catch (error) {
        this.errorHandler(error.message)
      }
    }
  }

  errorHandler = (message) => {
    Toast.show({
      text: JSON.stringify(message),
      buttonText: 'Ok',
      type: 'warning'
    })
  }

  changeValue = async (text, key) => {
    const { change } = this.props
    await change(key, text)
  }

  emailComponent = ({ input, meta: { error, touched } }) => (
    <Item
      style={styles.item}
      error={!!error && touched}
    >
      <Input
        selectTextOnFocus
        keyboardType="email-address"
        onChangeText={text => this.changeValue(text, 'identifier')}
        placeholder="Masukkan email atau username"
        style={styles.input}
        value={input.value}
      />
      {touched && error && <Text style={{ color: color.errorColor }}>{error}</Text>}
    </Item>
  )

  passwordComponent = ({ input, meta: { error, touched } }) => {
    const { secureTextEntry } = this.state
    return (
      <Item
        style={styles.item}
        error={!!error && touched}
      >
        <Input
          selectTextOnFocus
          onChangeText={text => this.changeValue(text, 'password')}
          placeholder="Masukkan password"
          secureTextEntry={secureTextEntry}
          style={styles.input}
          value={input.value}
        />
        {touched && error && <Text style={{ color: color.errorColor }}>{error}</Text>}
      </Item>
    )
  }

  render () {
    const {
      handleSubmit,
      submitting,
      invalid,
      error,
      navigation
    } = this.props

    return (
      <KeyboardAvoidingView
        style={styles.container}
        behavior="padding"
      >
        <SegmentLogo />
        <View style={styles.viewInput}>
          <Text style={styles.label}>Email atau Username</Text>
          <Field
            name="identifier"
            component={this.emailComponent}
          />
        </View>
        <View style={styles.viewInput}>
          <Text style={styles.label}>Password</Text>
          <Field
            name="password"
            component={this.passwordComponent}
          />
        </View>

        <View style={styles.viewInput}>
          <Text
            style={{
              paddingHorizontal: 10,
              textAlign: 'left',
              textDecorationLine: 'underline',
              color: 'blue'
            }}
          >
            Lupa password ?
          </Text>
        </View>
        <View style={styles.viewInput}>
          <Button
            primary
            block
            disabled={invalid || submitting}
            onPress={handleSubmit(this.onSubmit)}
          >
            <Text
              style={[
                styles.text,
                { color: color.textIcons }
              ]}
            >
              Login
            </Text>
          </Button>
        </View>

        <View
          style={[
            styles.viewInput,
            {
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row'
            }
          ]}
        >
          <View style={styles.hairline} />
          <Text
            style={[
              styles.text,
              {
                paddingHorizontal: '4%'
              }
            ]}
          >
            Atau
          </Text>
          <View style={styles.hairline} />
        </View>

        <View style={styles.viewInput}>
          <Button
            bordered
            block
            onPress={() => navigation.navigate('SignUp')}
          >
            <Text
              style={styles.text}
            >
              Register
            </Text>
          </Button>
        </View>
        {error && <Text>{error}</Text>}
      </KeyboardAvoidingView>
    )
  }
}

export default reduxForm({
  form: 'SigninForm',
  validate
})(SigninForm)
