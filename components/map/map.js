import React, { Component } from 'react'
import { View, Text } from 'react-native';
class Map extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
      <View>
        <Text>Map component</Text>
      </View>
    )
  }
}
export default Map;