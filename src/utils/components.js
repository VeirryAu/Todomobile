import color from 'theme/color'

const headerOption = ({ headerTitle }) => {
  let headerTitleStyle = {
    color: color.textIcons,
    fontSize: 18,
    flex: 1
  }
  let headerTintColor = color.textIcons
  let headerStyle = {
    backgroundColor: color.primaryColor,
    backgroundOpacity: 0.7
  }
  let headerBackTitle = ''
  return {
    headerTitle,
    headerTitleStyle,
    headerStyle,
    headerTintColor,
    headerBackTitle
  }
}

export {
  headerOption
}
