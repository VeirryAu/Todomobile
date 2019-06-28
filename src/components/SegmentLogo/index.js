import React, { PureComponent } from 'react'
import {
  StyleSheet, Image
} from 'react-native'
import {
  View, Text
} from 'native-base'
import color from 'theme/color'

const styles = StyleSheet.create({
  content: {
    alignItems: 'center',
    marginBottom: 10
  },
  segmentContainer: {
    height: 200,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 20,
    backgroundColor: color.primaryColor
  },
  segmentImage: {
    height: 130,
    width: 130,
    backgroundColor: color.primaryColor
  },
  segmentText: {
    color: color.textIcons,
    fontSize: 40
  }
})

class SegmentLogo extends PureComponent {
  render () {
    return (
      <View style={styles.content}>
        <View style={styles.segmentContainer}>
          <Image
            style={styles.segmentImage}
            source={require('assets/app/logo.png')}
            resizeMethod="scale"
          />
          <Text style={styles.segmentText}>Todomobile</Text>
        </View>
      </View>
    )
  }
}

export default SegmentLogo
