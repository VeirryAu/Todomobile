import React from 'react'
import PropTypes from 'prop-types'
import { Icon } from 'native-base'

const TabBarItem = ({
  focused,
  tintColor,
  iconName,
  typeIcon = 'Ionicons',
  style = { color: tintColor, fontSize: 22, marginTop: -4 }
}) => (
  focused
    ? (
      <Icon name={iconName} type={typeIcon} style={style} />
    ) : (
      <Icon name={iconName} type={typeIcon} style={style} />
    )
)

TabBarItem.propTypes = {
  focused: PropTypes.bool.isRequired,
  tintColor: PropTypes.string,
  iconName: PropTypes.string.isRequired
}

export default TabBarItem
