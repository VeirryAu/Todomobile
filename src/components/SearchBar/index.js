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
  input: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: color.textIcons,
    borderRadius: 5,
    paddingHorizontal: 10
  },
  inputItem: {
    color: color.secondaryText,
    borderBottomWidth: 0
  }
})

class SearchBar extends PureComponent {
  render () {
    const {
      navigation,
      back,
      defaultValue
    } = this.props

    return (
      <View style={styles.content}>
        <Item
          onPress={() => navigation.navigate('Search')}
          style={styles.inputItem}
        >
          {back && (
            <Icon
              onPress={() => navigation.goBack(null)}
              name="chevron-left"
              type="MaterialCommunityIcons"
              style={{
                fontSize: 40,
                color: color.textIcons
              }}
            />
          )}
          <View
            style={[styles.input, {
              width: back ? '87%' : '100%'
            }]}
          >
            <Input
              style={{ width: '70%' }}
              editable={false}
              defaultValue={defaultValue}
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
          </View>
        </Item>
      </View>
    )
  }
}

SearchBar.propTypes = {
  navigation: PropTypes.object.isRequired,
  defaultValue: PropTypes.string,
  back: PropTypes.bool
}

SearchBar.defaultProps = {
  defaultValue: '',
  back: false
}

export default SearchBar
