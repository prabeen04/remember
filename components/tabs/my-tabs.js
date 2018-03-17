import React, { Component } from 'react';
import { Container, Header, Tab, Tabs, TabHeading, Icon, Text } from 'native-base';

class MyTab extends Component {
  render() {
    return (
      <Container>
        <Header hasTabs/>
        <Tabs>
          <Tab heading={ <TabHeading><Icon name="camera" /><Text>Camera</Text></TabHeading>}>
            
          </Tab>
          <Tab heading={ <TabHeading><Text>No Icon</Text></TabHeading>}>
           
          </Tab>
          <Tab heading={ <TabHeading><Icon name="apps" /></TabHeading>}>
           
          </Tab>
        </Tabs>
      </Container>
    );
  }
}

​export default  MyTab;