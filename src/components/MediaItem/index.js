import React, { PureComponent } from 'react'
import {
  StyleSheet
} from 'react-native'
import {
  Card,
  CardItem,
  Text,
  View,
  Left,
  Right
} from 'native-base'
import FastImage from 'react-native-fast-image'
import globalStyle from 'theme/style'
import { IMAGEURL } from 'utils/config'
import NumberCurrency from 'components/NumberCurrency'

const BORDER_RADIUS = 10

const styles = StyleSheet.create({
  icon: {
    borderTopLeftRadius: BORDER_RADIUS,
    borderTopRightRadius: BORDER_RADIUS,
    height: 120,
    flex: 1
  },
  card: {
    marginRight: 0,
    marginLeft: 0,
    borderRadius: BORDER_RADIUS,
    height: 220,
    marginHorizontal: 0,
    margin: 0
  },
  provinceItem: {
    paddingLeft: 0,
    paddingRight: 0,

    flex: 1,
    flexDirection: 'row'
  },
  cardItem: {
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 0,
    paddingBottom: 0
  },
  detailItem: {
    padding: 10
  }
})

class MediaItem extends PureComponent {
  render () {
    const { data } = this.props
    return (
      <Card
        key={data.id}
        style={styles.card}
      >
        <CardItem style={[styles.cardItem, { borderTopLeftRadius: BORDER_RADIUS, borderTopRightRadius: BORDER_RADIUS }]}>
          <FastImage
            style={styles.icon}
            source={{
              uri: `${IMAGEURL}${data.image[0].url}`
            }}
            resizeMode={FastImage.resizeMode.cover}
          />
        </CardItem>
        <View style={styles.detailItem}>
          <CardItem style={styles.provinceItem}>
            <Text style={globalStyle.text} numberOfLines={1}>{`${data.city.name} - ${data.province.name}`}</Text>
          </CardItem>
          <CardItem style={styles.cardItem}>
            <Text numberOfLines={2} style={globalStyle.h4}>{data.name}</Text>
          </CardItem>
          <CardItem style={styles.provinceItem}>
            <Left>
              <NumberCurrency
                value={data.price}
                style={[
                  globalStyle.textPrice,
                  { marginLeft: 0, fontSize: 12 }
                ]}
              />
            </Left>
            <Right>
              <NumberCurrency
                value={data.price}
                style={[
                  globalStyle.textDeclined,
                  {
                    textDecorationLine: 'line-through', textDecorationStyle: 'solid', fontSize: 10
                  }]}
              />
            </Right>
          </CardItem>
        </View>
      </Card>
    )
  }
}

export default MediaItem
