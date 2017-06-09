/**
 * Created by Administrator on 2017-06-08.
 */
import React, {Component} from 'react';
import {
  AppRegistry,
  Text,
  Button,
  View,
} from 'react-native';
import {StackNavigator, TabNavigator} from 'react-navigation';

class RecentChatsScreen extends Component {
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View>
        <Text>Hello, Chat App!</Text>
        <Button
          onPress={() => navigate('Chat', {user: 'Lucy'})}
          title="Chat with Lucy"
        />
      </View>
    );
  }
}

class AllContactsScreen extends Component {
  render() {
    return <Text>List of all contacts</Text>
  }
}

const MainScreenNavigator = TabNavigator({
  Recent: {screen: RecentChatsScreen},
  All: {screen: AllContactsScreen},
});

MainScreenNavigator.navigationOptions = {
  title: 'My Chats',
};

class ChatScreen extends Component {
  // Nav options can be defined as a function of the screen's props:
  static navigationOptions = ({navigation}) => ({
    title: `Chat with ${navigation.state.params.user}`,
  });

  render() {
    // The screen's current route is passed in to `props.navigation.state`:
    const {params} = this.props.navigation.state;
    return (
      <View>
        <Text>Chat with {params.user}</Text>
      </View>
    );
  }
}

const androidApp = StackNavigator({
  Home: {screen: MainScreenNavigator},
  Chat: {screen: ChatScreen},
});

AppRegistry.registerComponent('androidApp', () => androidApp);