import React, { Component } from 'react'
import { View, Text } from 'react-native';
class Profile extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
      <View>
        <Text>Profile component</Text>
      </View>
    )
  }
}
export default Profile;