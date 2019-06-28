import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import {
  TouchableOpacity,
  TouchableWithoutFeedback,
  StyleSheet
} from 'react-native'
import {
  Icon,
  Header,
  Item,
  Right,
  H1
} from 'native-base'
import color from 'theme/color'

const styles = StyleSheet.create({
  header: {
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  item: {
    borderBottomWidth: 0,
    marginLeft: 0
  }
})

class HeaderComponent extends PureComponent {
  render () {
    const { name, goBack } = this.props
    return (
      <Header style={styles.header}>
        <Item onPress={this.handleGoToSearch} style={styles.item}>
          <TouchableOpacity onPress={() => goBack()}>
            <Icon
              name="chevron-left"
              type="MaterialCommunityIcons"
              style={{
                fontSize: 30,
                color: color.textIcons
              }}
            />
          </TouchableOpacity>
          <TouchableWithoutFeedback onPress={() => goBack()}>
            <H1 style={{ color: color.textIcons, fontSize: 20 }}>{name}</H1>
          </TouchableWithoutFeedback>
        </Item>
        <Right />
      </Header>
    )
  }
}

HeaderComponent.propTypes = {
  goBack: PropTypes.func.isRequired,
  name: PropTypes.string
}

HeaderComponent.defaultProps = {
  name: ''
}

export default HeaderComponent
