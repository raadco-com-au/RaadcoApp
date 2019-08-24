import React, { Fragment } from 'react';

import TabChats from './TabChats';
import {
    Container, Tab, Tabs, TabHeading, Text, Title, Button, Left, Right, Body, Icon, Content, View
} from 'native-base';

import AboutUs from '../pages/AboutUs';
import ContactUs from '../pages/ContactUs';
class HomeScreen extends React.Component {
    render() {
        return (
            <Container >
            
                {/* <Content> */}
                    <Tabs>
                        <Tab heading={<TabHeading><Text>AboutUs</Text></TabHeading>}>
                            <AboutUs/>
                        </Tab>
                        <Tab heading={<TabHeading><Text>Our Team</Text></TabHeading>}>
                            <TabChats/>
                        </Tab>
                        <Tab heading={<TabHeading><Text>Contact Us</Text></TabHeading>}>
                            <ContactUs/>
                        </Tab>
                    </Tabs>
               
                {/* </Content> */}
            </Container>
        );
    }
}




export default HomeScreen;
// export default createAppContainer(DrawerNavigator);