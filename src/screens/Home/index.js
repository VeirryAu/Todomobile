import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
  StyleSheet,
  ScrollView,
  ActivityIndicator
} from 'react-native'
import {
  Content
} from 'native-base'
import SearchBar from 'components/SearchBar'
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
    const { navigation, loadingHome } = this.props
    return (
      <ScrollView
        scrollEventThrottle={300}
        removeClippedSubviews
      >
        <Content style={styles.container}>
          <SearchBar navigation={navigation} />
          {loadingHome && <ActivityIndicator style={{ marginVertical: 10 }} />}
        </Content>
      </ScrollView>
    )
  }
}

Home.propTypes = {
  navigation: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  loadingHome: state.home.loading
})

const mapDispatchToProps = dispatch => ({
  getHome: () => dispatch(queryHome())
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
