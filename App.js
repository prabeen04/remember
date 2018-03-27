import React from 'react';
import { View, Text } from 'react-native'
import {Container, Header, Button, Left, Right, Content, Footer, FooterTab, Icon } from 'native-base';
import  MyHeader  from './components/common-components/header/header'
import Expo from 'expo';
export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { loading: true };
  }
  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
    });
    this.setState({ loading: false });
  }

  render() {
    if (this.state.loading) {
      return <Expo.AppLoading />;
    }
    return (
      <Container>
       <Header />
        <Content>
         <Text>Google Plus</Text>
        </Content>
        <Footer>
          <FooterTab>
            <Button>
              <Icon name="apps" />
            </Button>
            <Button>
              <Icon name="camera" />
            </Button>
            <Button active>
              <Icon active name="navigate" />
            </Button>
            <Button>
              <Icon name="person" />
            </Button>
          </FooterTab>
          </Footer>
      </Container>
    );
  }
}

