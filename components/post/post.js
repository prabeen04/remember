import React, { Component } from 'react'
import { View, Text } from 'react-native';
class Post extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
      <View>
        <Text>Post component</Text>
      </View>
    )
  }
}
export default Post;