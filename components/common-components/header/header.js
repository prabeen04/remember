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
                    <Body>
                        <Title>Remember</Title>
                    </Body>
                </Header>
            </Container>
        );
    }
}

export default MyHeader;