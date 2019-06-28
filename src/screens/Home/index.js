import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import {
  StyleSheet,
  ScrollView,
  ActivityIndicator
} from 'react-native'
import {
  Content
} from 'native-base'
import { queryHome } from 'actions/homeAction'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  content: {
    padding: 10
  }
})

class Home extends PureComponent {
  componentDidMount () {
  }

  render () {
    const { loadingHome } = this.props
    return (
      <ScrollView
        scrollEventThrottle={300}
        removeClippedSubviews
      >
        <Content style={styles.container}>
          {loadingHome && <ActivityIndicator style={{ marginVertical: 10 }} />}
        </Content>
      </ScrollView>
    )
  }
}


const mapStateToProps = state => ({
  loadingHome: state.home.loading
})

const mapDispatchToProps = dispatch => ({
  getHome: () => dispatch(queryHome())
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
