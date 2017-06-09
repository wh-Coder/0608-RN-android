import React, {Component} from 'react'
import {
  View,
  Text,
  StyleSheet,
  Button,
  AppRegistry
} from 'react-native'

// local
import theme from './js/config/theme'

// third
import Icon from 'react-native-vector-icons/Ionicons'
import {StackNavigator, TabNavigator} from 'react-navigation';

class Root extends Component {

  static navigationOptions = ({navigation}) => {
    return {
      headerTitle: (
        <Text style={styles.headerTitle}>测试</Text>
      ),
      headerStyle: {backgroundColor: theme.hpRed},
      headerLeft: (
        <View style={styles.headerBtn}/>
      ),
      headerRight: (
        <View style={styles.headerBtn}>
          <Icon name="ios-search" size={30} color="#fff"/>
        </View>
      )
    };
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <Text>hello</Text>
        </View>
        <View style={styles.tabbar}>
          <View style={styles.tab}>
            <Icon name="ios-home" size={25} color={theme.hpRed}/>
            <Text style={styles.tabText}>主页</Text>
          </View>
          <View style={styles.tab}>
            <Icon name="ios-home" size={25} color="#fff"/>
            <Text style={styles.tabText}>主页</Text>
          </View>
          <View style={styles.tab}>
            <Icon name="ios-home" size={25} color="#fff"/>
            <Text style={styles.tabText}>主页</Text>
          </View>
          <View style={styles.tab}>
            <Icon name="ios-home" size={25} color="#fff"/>
            <Text style={styles.tabText}>主页</Text>
          </View>
          <View style={styles.tab}>
            <Icon name="ios-home" size={25} color="#fff"/>
            <Text style={styles.tabText}>主页</Text>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  content: {
    flex: 1
  },
  tabbar: {
    flexDirection: 'row',
    height: 50,
    borderTopWidth: 1,
    borderTopColor: '#ccc'
  },
  tab: {
    flex: 1,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerTitle: {
    alignSelf: 'center',
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold'
  },
  headerBtn: {
    width: 30,
    height: 30,
  },
  tabText: {
    fontSize: 10
  }
})

const androidApp = StackNavigator({
  Home: {screen: Root}
});

AppRegistry.registerComponent('androidApp', () => androidApp);
