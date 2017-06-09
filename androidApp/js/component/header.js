import React, {Component} from 'react'
import {
  View,
  StyleSheet
} from 'react-native'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
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
  }
}

const styles = StyleSheet.create({})

module.exports = App