import React, {Component} from 'react'
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  RefreshControl,
  Button,
  TouchableOpacity,
  AppRegistry
} from 'react-native'

// local
import theme from './js/config/theme'

// third
import Icon from 'react-native-vector-icons/Ionicons'
import {StackNavigator, TabNavigator} from 'react-navigation';
import ScrollableTabView, {DefaultTabBar,} from 'react-native-scrollable-tab-view';

class Webview extends Component {
  static navigationOptions = ({navigation}) => ({
    headerTitle: (
      <Text style={styles.headerTitle}>测试2</Text>
    ),
    headerStyle: {backgroundColor: theme.hpRed},
    headerLeft: (
      <TouchableOpacity style={styles.headerBtn} onPress={() => navigation.goBack()}>
        <Icon name="ios-arrow-back" size={30} color="#fff"/>
      </TouchableOpacity>
    ),
    headerRight: (
      <View style={styles.headerBtn}>
        <Icon name="ios-more" size={30} color="#fff"/>
      </View>
    )
  });

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View>
        <Text>测试2</Text>
        <Button
          title={'跳转'}
          onPress={navigate.bind(this, 'Webview')}
        />
      </View>
    )
  }
}

class Root extends Component {

  constructor(props) {
    super(props)
    this.state = {
      arr: Array.from({length: 100}, (v, i) => i),
      isRefreshing: false,
    }
  }

  componentDidMount() {
    console.log('componentDidMount')
  }

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

  _onScroll() {
    // console.log('滚动的回调')
  }

  render() {
    const {navigate} = this.props.navigation;

    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <ScrollableTabView
            tabBarActiveTextColor={theme.hpRed}
            tabBarInactiveTextColor={theme.hpGray}
            tabBarUnderlineStyle={{backgroundColor: theme.hpRed}}
          >
            <View tabLabel='栏目1'>
              <Text>栏目1</Text>
              <Button
                title={'跳转'}
                onPress={navigate.bind(this, 'Webview')}
              />
            </View>
            <View tabLabel='栏目2' style={{flex: 1}}>
              <View style={styles.scrollBox}>
                <ScrollView
                  stickyHeaderIndices={[10]}
                  ioszoomScale={0.5}
                  ref={(scrollView) => {
                    _scrollView = scrollView;
                  }}
                  style={{transform: [{rotate: '0deg'}]}}
                  contentContainerStyle={{paddingVertical: 20}}
                  horizontal={false}
                  onScroll={this._onScroll.bind(this)}
                  showsVerticalScrollIndicator={false}
                  refreshControl={
                    <RefreshControl
                      refreshing={this.state.isRefreshing}
                    />}
                >
                  {
                    this.state.arr.map(function (value, index) {
                      return (<Text key={index} style={{
                        backgroundColor: 'pink',
                        borderWidth: 1,
                        borderColor: '#ccc'
                      }}>{value}</Text>)
                    })
                  }
                  <Button
                    title={'置顶'}
                    onPress={() => {
                      _scrollView.scrollTo({y: 0, animated: true});
                    }}
                  />
                </ScrollView>
              </View>
            </View>
          </ScrollableTabView>
        </View>
        <View style={styles.tabbar}>
          <View style={styles.tab}>
            <Icon name="ios-home" size={25} color={theme.hpRed}/>
            <Text style={styles.tabText}>主页</Text>
          </View>
          <View style={styles.tab}>
            <Icon name="ios-home" size={25} color={theme.hpGray}/>
            <Text style={styles.tabText}>主页</Text>
          </View>
          <View style={styles.tab}>
            <Icon name="ios-home" size={25} color={theme.hpGray}/>
            <Text style={styles.tabText}>主页</Text>
          </View>
          <View style={styles.tab}>
            <Icon name="ios-home" size={25} color={theme.hpGray}/>
            <Text style={styles.tabText}>主页</Text>
          </View>
          <View style={styles.tab}>
            <Icon name="ios-home" size={25} color={theme.hpGray}/>
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
    borderTopColor: theme.hpGray
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
    margin: 10
  },
  tabText: {
    fontSize: 10
  },
  scrollBox: {
    flex: 1,
    backgroundColor: 'red',
  },

})

const RouteConfigs = {
  Root: {screen: Root},
  Webview: {screen: Webview}
}

const StackNavigatorConfig = {
  //
}

const androidApp = StackNavigator(RouteConfigs, StackNavigatorConfig);

AppRegistry.registerComponent('androidApp', () => androidApp);
