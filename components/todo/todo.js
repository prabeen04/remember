import React, { Component } from 'react'
import { View, Text } from 'react-native';
class Todo extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
      <View>
        <Text>Todo component</Text>
      </View>
    )
  }
}
export default Todo;