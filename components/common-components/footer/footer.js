import React from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text } from 'native-base';

class Footer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container>
                <Header />
                <Content />
                <Footer>
                    <FooterTab>
                        <Button vertical>
                            <Icon name="apps" />
                            <Text>Apps</Text>
                        </Button>
                        <Button vertical>
                            <Icon name="camera" />
                            <Text>Camera</Text>
                        </Button>
                        <Button vertical active>
                            <Icon active name="navigate" />
                            <Text>Navigate</Text>
                        </Button>
                        <Button vertical>
                            <Icon name="person" />
                            <Text>Contact</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        );
    }
} Copy

        );
    }
}

export default Footer;