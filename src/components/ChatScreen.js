import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { SendMessage } from '../Redux/actions';
import {
    Container, Header, Col, Row, Grid, Thumbnail, Form, Label, Subtitle, Item, Input, Text, Title, Button, Left, Right, Body, Icon, Content, View, Footer
} from 'native-base';
import Messages from './Messages';
import { connect } from 'react-redux';
import { ScrollView } from 'react-native-gesture-handler';
class ChatScreen extends Component {
    constructor(props) {
        super(props);
        this.state = { messageText: '' };
    }

    handleChange = event => {

        this.setState({ messageText: event });
    }

    render() {
        const { navigation } = this.props;
        const profileUrl = navigation.getParam('profileUrl');
        const userId = navigation.getParam('userId');
        const name = navigation.getParam('name');
        const isOnline = navigation.getParam('isOnline');
        const lastSeen = navigation.getParam('lastSeen');
        return (
            <Container>
                <Header>
                    <Left>
                        <Button transparent onPress={() => this.props.navigation.goBack()}>
                            <Icon type="MaterialIcons" name='keyboard-arrow-left' />
                        </Button>
                    </Left>
                    <Left>
                        <Thumbnail small source={profileUrl} />
                    </Left>
                    <Body>
                        <Title>{name}</Title>
                        <Subtitle>{isOnline == true ? "online" : "last seen at " + lastSeen}</Subtitle>
                    </Body>
                    <Right >
                        <Button transparent>
                            <Icon name='more' />
                        </Button>
                    </Right>
                </Header>
                <Content>
                        <Messages contactId={userId} />
                </Content>
                <Footer style={{ backgroundColor: "#fff", shadowColor: "none" }}>
                        <Form>
                            <Grid transparent>
                                <Row>
                                    <Col style={{ width: 305 }} >
                                        <Item style={styles.textInputPersianFont} rounded>
                                            <Icon type="MaterialIcons" name='tag-faces' />
                                            <Input placeholder='Text...' name="messageText" value={"" + this.state.messageText} onChangeText={this.handleChange} />
                                        </Item>
                                    </Col>
                                    <Col style={{ width: 55 }}>
                                        <Button rounded primary onPress={() => {
                                            this.props.SendMessage(this.props.messages, 9177079209, 9332369461, this.state.messageText);
                                            this.setState({ messageText: "" });

                                        }}>
                                            <Icon type="MaterialIcons" name='send' />
                                        </Button>
                                    </Col>
                                </Row>
                            </Grid>
                        </Form>
                </Footer>
            </Container>
        );
    }
}
function mapStateToProps(state) {
    return {
        messages: state.messagesReducer.messages,
    }
}
export default connect(mapStateToProps, {
    SendMessage
})(ChatScreen);

const styles = StyleSheet.create({
    textInputPersianFont: { fontFamily: "IranianSans" }
})