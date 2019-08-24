import React from 'react';
import {Image} from 'react-native';
import {
     Text, Card, Body, CardItem, Content
} from 'native-base';
import { connect } from 'react-redux';

class TabChats extends React.Component {
    constructor(props) {
        super(props)
        // props.loadChats()
    }
    render() {
        return (
            <Content>
                {this.props.chats.map((chat, index) => {
                    return (
                        <Card key={index}>
                            <CardItem cardBody>
                                <Image
                                    source={ chat.profileUrl}
                                    style={{ height: 200, resizeMode: "contain", flex: 1, width: null }} />
                            </CardItem>
                            <CardItem>

                                <Body style={{ marginBottom: 30 }}>
                                    <Text style={{ justifyContent: "space-evenly", marginBottom: 10 }}>
                                        {chat.name}
                                    </Text>
                                    <Text style={{ justifyContent: "space-evenly", marginBottom: 10 }}>
                                        {chat.skill}
                                    </Text>
                                    <Text style={{ justifyContent: "space-evenly", marginBottom: 10 }}>
                                        {chat.text}
                                    </Text>
                                </Body>

                            </CardItem>
                        </Card>
                    )
                })}
            </Content>
        )
    }
}

function mapStateToProps(state) {
    return {
        chats: state.chatsReducer.chats,
        message: state.messagesReducer.messages

    }
};
export default connect(mapStateToProps, {

})(TabChats);