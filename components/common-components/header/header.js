import React from 'react';
import { View, Text } from 'react-native';
import { Container, Header, Left, Body, Right, Title } from 'native-base';

class MyHeader extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={{height: 200}}>
                {/* <Header>
                    <Body>
                        <Title>Remember</Title>
                    </Body>
                </Header> */}
                <Text>
                    Remember
                </Text>
            </View>
        );
    }
}

export default MyHeader;