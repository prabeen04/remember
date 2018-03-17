import React from 'react';
import { Container, Header, Left, Body, Right, Title } from 'native-base';

class MyHeader extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container>
                <Header>
                    <Left />
                    <Body>
                        <Title>Remember</Title>
                    </Body>
                    <Right />
                </Header>
            </Container>
        );
    }
}

export default MyHeader;