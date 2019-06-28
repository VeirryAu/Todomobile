import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import {
  StyleSheet,
  FlatList,
  Dimensions,
  TouchableWithoutFeedback
} from 'react-native'
import {
  Text,
  Card,
  CardItem,
  Body
} from 'native-base'
import FastImage from 'react-native-fast-image'
import color from 'theme/color'
import globalStyle from 'theme/style'
import { IMAGEURL } from 'utils/config'

const { width } = Dimensions.get('window')
const BORDER_RADIUS = 10

const styles = StyleSheet.create({
  item: {
    width: '48%',
    margin: '1%'
  },
  card: {
    width: width - 60,
    borderRadius: BORDER_RADIUS,
    borderTopLeftRadius: BORDER_RADIUS
  },
  cardItem: {
    borderRadius: BORDER_RADIUS,
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 0,
    paddingBottom: 0
  },
  itemCard: {
    borderBottomLeftRadius: BORDER_RADIUS,
    borderBottomRightRadius: BORDER_RADIUS,
    borderRadius: 0,
    backgroundColor: 'rgba(33, 33, 33, 0.3)'
  },
  body: {
    flexDirection: 'row'
  },
  icon: {
    borderRadius: BORDER_RADIUS,
    height: width - 150,
    flex: 1
  },
  description: {
    height: 120,
    bottom: 0,
    marginLeft: 0,
    marginBottom: 0,
    position: 'absolute',
    width: '100%'
  }
})

class SegmentItem extends PureComponent {
  render () {
    const { data, navigation, type } = this.props

    return (
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1, justifyContent: 'flex-start' }}
        keyExtractor={item => item.id}
        data={data}
        renderItem={({ item }) => (
          <Card style={styles.card}>
            <TouchableWithoutFeedback
              onPress={() => {
                navigation.navigate('ListProduct', {
                  hobby: type === 'hobby' ? item.id : undefined,
                  daerah: type === 'daerah' ? item.id : undefined
                })
              }}
            >
              <CardItem
                style={styles.cardItem}
              >
                <FastImage
                  style={styles.icon}
                  source={{
                    uri: `${IMAGEURL}${item.image.url}`
                  }}
                  resizeMode={FastImage.resizeMode.cover}
                >
                  <Card style={[styles.itemCard, styles.description]}>
                    <CardItem header style={[styles.itemCard, { justifyContent: 'center', paddingBottom: 0 }]}>
                      <Text style={[globalStyle.h2, { color: color.textIcons }]}>
                        {item.name}
                      </Text>
                    </CardItem>
                    <CardItem header style={[styles.itemCard, { paddingTop: 5 }]}>
                      <Body style={styles.body}>
                        <Text numberOfLines={3} style={[globalStyle.h4, { color: color.textIcons }]}>
                          {`${item.name} `}
                          <Text style={[globalStyle.h4, { color: color.textIcons, fontWeight: 'normal' }]}>
                            {` ${item.description}`}
                          </Text>
                        </Text>
                      </Body>
                    </CardItem>
                  </Card>
                </FastImage>
              </CardItem>
            </TouchableWithoutFeedback>
          </Card>
        )}
      />
    )
  }
}

SegmentItem.propTypes = {
  navigation: PropTypes.object.isRequired,
  type: PropTypes.oneOf(['daerah', 'hobby']),
  data: PropTypes.array
}

SegmentItem.defaultProps = {
  data: []
}

export default SegmentItem
