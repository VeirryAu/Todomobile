import React from 'react'
import {
  Image,
  StatusBar,
  StyleSheet
} from 'react-native'
import {
  Container,
  Text,
  View
} from 'native-base'
import {
  createStackNavigator,
  createBottomTabNavigator,
  createSwitchNavigator
} from 'react-navigation'
import TabBarItem from 'components/TabBarItem'
import Home from 'screens/Home'
import SignIn from 'screens/SignIn'
import color from 'theme/color'
import { APPNAME } from 'utils/config'
import { headerOption } from 'utils/components'

const styles = StyleSheet.create({
  header: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingBottom: 2
  },
  headerText: {
    fontSize: 20,
    color: color.textIcons
  }
})

const BottomTabNavigatorConfig = {
  initialRouteName: 'Home',
  backBehavior: 'none',
  tabBarPosition: 'bottom',
  swipeEnabled: false,
  mode: 'card',
  tabBarOptions: {
    showIcon: true,
    activeTintColor: color.primaryColor,
    inactiveTintColor: color.secondaryText,
    style: {
      borderTopWidth: 1,
      elevation: 6,
      backgroundColor: color.textIcons,
      height: 60
    },
    labelStyle: {
      marginTop: -4,
      fontSize: 12
    },
    indicatorStyle: {
      height: 0
    }
  }
}

const HomeScreen = createStackNavigator({
  HomeScreen: {
    screen: Home,
    navigationOptions: headerOption({
      headerTitle: (
        <View style={styles.header}>
          <Image
            style={{
              width: 36,
              height: 36
            }}
            resizeMode="contain"
            source={require('../assets/app/logo.png')}
          />
          <Text style={styles.headerText}>{APPNAME}</Text>
        </View>
      )
    })
  }
})

const Main = createBottomTabNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: () => {
      return ({
        tabBarLabel: 'Home',
        tabBarIcon: ({ focused, tintColor }) => (
          <TabBarItem
            tintColor={tintColor}
            focused={focused}
            iconName={focused ? 'home' : 'home-outline'}
            typeIcon={focused ? 'Foundation' : 'MaterialCommunityIcons'}
          />
        )
      })
    }
  },
  Order: {
    screen: HomeScreen,
    navigationOptions: () => ({
      tabBarLabel: 'Contact',
      tabBarIcon: ({ focused, tintColor }) => (
        <TabBarItem
          focused={focused}
          tintColor={tintColor}
          iconName={focused ? 'address-book' : 'address-book-o'}
          typeIcon="FontAwesome"
        />
      )
    })
  },
  Favourite: {
    screen: HomeScreen,
    navigationOptions: () => ({
      tabBarLabel: 'Favourite',
      tabBarIcon: ({ focused, tintColor }) => (
        <TabBarItem
          focused={focused}
          tintColor={tintColor}
          iconName={focused ? 'heart' : 'hearto'}
          typeIcon="AntDesign"
        />
      )
    })
  },
  Profile: {
    screen: HomeScreen,
    navigationOptions: () => ({
      tabBarLabel: 'Profile',
      tabBarIcon: ({ focused, tintColor }) => (
        <TabBarItem
          focused={focused}
          tintColor={tintColor}
          iconName={focused ? 'user' : 'user-o'}
          typeIcon="FontAwesome"
        />
      )
    })
  }
}, BottomTabNavigatorConfig)

const tabBarOnPress = ({ navigation }) => {
  navigation.navigate('SignIn')
}

const MainAuth = createBottomTabNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: () => {
      return ({
        tabBarLabel: 'Home',
        tabBarIcon: ({ focused, tintColor }) => (
          <TabBarItem
            tintColor={tintColor}
            focused={focused}
            iconName={focused ? 'home' : 'home-outline'}
            typeIcon={focused ? 'Foundation' : 'MaterialCommunityIcons'}
          />
        )
      })
    }
  },
  Order: {
    screen: SignIn,
    navigationOptions: () => ({
      tabBarOnPress,
      tabBarLabel: 'Contact',
      tabBarIcon: ({ focused, tintColor }) => (
        <TabBarItem
          focused={focused}
          tintColor={tintColor}
          iconName={focused ? 'address-book' : 'address-book-o'}
          typeIcon="FontAwesome"
        />
      )
    })
  },
  Favourite: {
    screen: SignIn,
    navigationOptions: () => ({
      tabBarOnPress,
      tabBarLabel: 'Favourite',
      tabBarIcon: ({ focused, tintColor }) => (
        <TabBarItem
          focused={focused}
          tintColor={tintColor}
          iconName={focused ? 'heart' : 'hearto'}
          typeIcon="AntDesign"
        />
      )
    })
  },
  Profile: {
    screen: SignIn,
    navigationOptions: () => ({
      tabBarOnPress,
      tabBarLabel: 'Profile',
      tabBarIcon: ({ focused, tintColor }) => (
        <TabBarItem
          focused={focused}
          tintColor={tintColor}
          iconName={focused ? 'user' : 'user-o'}
          typeIcon="FontAwesome"
        />
      )
    })
  }
}, BottomTabNavigatorConfig)

const LoginStack = createStackNavigator(
  {
    MainAuth: {
      screen: MainAuth
    },
    SignIn: {
      screen: SignIn
    }
  }, {
    initialRouteName: 'MainAuth',
    navigationOptions: { header: null }
  }
)

const RequireAuth = createStackNavigator(
  {
    Main: {
      screen: Main
    }
  }, {
    initialRouteName: 'Main',
    navigationOptions: { header: null }
  }
)

const AppNavigator = createSwitchNavigator(
  {
    App: RequireAuth, // Utk required login
    Auth: LoginStack // Utk not required
  }, {
    initialRouteName: 'App'
  }
)

export default class Routes extends React.Component {
  render () {
    return (
      <Container>
        <StatusBar backgroundColor={color.primaryColor} />
        <AppNavigator />
      </Container>
    )
  }
}
