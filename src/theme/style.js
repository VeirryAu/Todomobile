import {
  StyleSheet
} from 'react-native'
import color from 'theme/color'

const style = StyleSheet.create({
  whiteText: {
    color: color.textIcons
  },
  smallText: {
    fontSize: 13
  },
  h2: {
    fontSize: 16,
    fontWeight: 'bold',
    color: color.primaryText
  },
  h4: {
    fontSize: 15,
    fontWeight: 'bold',
    color: color.secondaryText
  },
  h5: {
    fontSize: 13,
    color: color.secondaryText
  },
  text: {
    fontSize: 14,
    color: color.secondaryText
  },
  textPrice: {
    fontSize: 14,
    color: color.secondaryText
  },
  textDeclined: {
    fontSize: 12,
    color: color.errorColor
  },
  buttonCenter: {
    padding: 10,
    width: '100%',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default style
