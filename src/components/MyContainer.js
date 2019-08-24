import React, { Fragment } from 'react';

import TabChats from './TabChats';
import ChatScreen from './ChatScreen';
import {
    Container, Header, Tab, Tabs, TabHeading, Text, Title, Button, Left, Right, Body, Icon, Content, View
} from 'native-base';

import {
    TouchableOpacity
} from 'react-native';

import { createDrawerNavigator, createAppContainer } from "react-navigation"
class HomeScreen extends React.Component {
    render() {
        return (
            <Container >
                <Header brandInfo>
                    <Left>
                        <Button transparent onPress={this.props.navigation.openDrawer}>
                            <Icon name='menu' />
                        </Button>
                    </Left>
                    <Body>
                        <Title>RaadHoosh</Title>
                    </Body>
                    <Right >
                        <Button transparent>
                            <Icon name='search' />
                        </Button>
                        <Button transparent>
                            <Icon name='more' />
                        </Button>
                    </Right>
                </Header>
                <Content>
                    <Tabs>
                        <Tab heading={<TabHeading><Icon name="camera" /></TabHeading>}>
                        </Tab>
                        <Tab heading={<TabHeading><Text>CHATS</Text></TabHeading>}>
                            <TabChats navigation={this.props.navigation}/>
                        </Tab>
                        <Tab heading={<TabHeading><Icon name="apps" /></TabHeading>}>
                        </Tab>
                    </Tabs>
                    {/* <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <TouchableOpacity onPress={this.props.navigation.openDrawer}>
                            <Text>Open Drawer</Text>
                        </TouchableOpacity>
                        <Text style={{ fontWeight: 'bold', marginTop: 20 }}>My Wallet</Text>
                    </View> */}
                </Content>
            </Container>
        );
    }
}

class SettingsScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <TouchableOpacity onPress={this.props.navigation.openDrawer}>
                    <Text>Open Drawer</Text>
                </TouchableOpacity>
                <Text style={{ fontWeight: 'bold', marginTop: 20 }}>Settings</Text>
            </View>
        );
    }
}

const DrawerNavigator = createDrawerNavigator(
    {
        MyWallet: HomeScreen,
        Settings: SettingsScreen,
        Chats:TabChats ,
        chat: ChatScreen
    },
    {
        hideStatusBar: false,
        drawerBackgroundColor: 'rgba(255,255,255,.9)',
        overlayColor: '#128b96',
        contentOptions: {
            activeTintColor: '#fff',
            activeBackgroundColor: '#128b96',
        },
    }
);

export default createAppContainer(DrawerNavigator);