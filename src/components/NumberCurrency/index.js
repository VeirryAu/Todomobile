import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import {
  Text
} from 'native-base'
import NumberFormat from 'react-number-format'

class NumberCurrency extends PureComponent {
  render () {
    const { value, style } = this.props
    return (
      <NumberFormat
        value={value}
        displayType="text"
        thousandSeparator
        prefix="Rp "
        renderText={value => (
          <Text
            style={style}
          >
            {value}
          </Text>
        )}
      />
    )
  }
}

NumberCurrency.propTypes = {
  value: PropTypes.number
}

NumberCurrency.defaultProps = {
  value: 0
}

export default NumberCurrency
