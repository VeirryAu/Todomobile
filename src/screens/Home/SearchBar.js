import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import {
  StyleSheet
} from 'react-native'
import {
  View,
  Item,
  Input,
  Icon
} from 'native-base'
import color from 'theme/color'
import { APPNAME } from 'utils/config'

const styles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: color.primaryColor,
    height: 70,
    padding: 10
  },
  inputItem: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: color.textIcons,
    borderRadius: 5,
    paddingHorizontal: 10
  }
})

class SearchBar extends PureComponent {
  render () {
    const { navigation } = this.props
    return (
      <View style={styles.content}>
        <Item
          onPress={() => navigation.navigate('Search')}
          style={styles.inputItem}
        >
          <Input
            editable={false}
            placeholder={`Cari di ${APPNAME}`}
            placeholderTextColor={color.secondaryText}
          />
          <Icon
            name="search"
            type="FontAwesome"
            style={{
              color: color.secondaryText
            }}
          />
        </Item>
      </View>
    )
  }
}

SearchBar.propTypes = {
  navigation: PropTypes.object.isRequired
}

export default SearchBar
