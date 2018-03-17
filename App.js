import React from 'react';
import MyHeader from './components/common-components/header/header';
import MyTab from './components/tabs/my-tabs';
import MyFooter from './components/common-components/footer/footer';
import { Container } from 'native-base';
import Expo from "expo";

export default class App extends React.Component {
  constructor(props){
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
      <MyHeader />
      <MyTab/>
      <MyFooter/>
    </Container>
    );
  }
}

