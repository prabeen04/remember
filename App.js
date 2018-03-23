import React from 'react';
import { View, Text } from 'react-native'
import {Container, Button, Left, Right } from 'native-base';
export default class App extends React.Component {
  constructor(props) {
    super(props)
  }
  async componentWillMount() {
    await Expo.Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    });
  }
  render() {
    return (
      <Container>
        <Text>Google Plus</Text>
      </Container>
    );
  }
}

