import React from 'react';
import {
    List, ListItem, Thumbnail, Text, Left, Right, Body, Badge, Content
} from 'native-base';
import { connect } from 'react-redux';

class TabChats extends React.Component {
    constructor(props) {
        super(props)
        // props.loadChats()
    }
    render() {
        return (
                <List>
                    {this.props.chat.map((chat, index) => {
                        let lastmsg=this.props.message.find(item=>{
                            return item.from==chat.mobile || item.to== chat.mobile
                        })
                        return (
                            <ListItem key={index} avatar onPress={()=>this.props.navigation.navigate('chat',{
                                profileUrl:chat.profileUrl,
                                userId:chat.mobile,
                                name:chat.name,
                                isOnline:chat.isOnline,
                                lastSeen:chat.lastSeen,
                            })}>
                                <Left>
                                    <Thumbnail source={chat.profileUrl} />
                                </Left>
                                <Body>
                                    <Text>{chat.name}</Text>
                                    <Text note numberOfLines={1}>{lastmsg && lastmsg.text}</Text>
                                </Body>
                                <Right>
                                    {chat.newMessage && <Badge danger><Text>{chat.newMessageCount}</Text></Badge>}
                                    <Text note>{chat.chatTime}</Text>
                                </Right>
                            </ListItem>
                        )
                    })}
                </List>
        )
    }
}

function mapStateToProps(state) {
    return {
        chat: state.chatsReducer.chats,
        message: state.messagesReducer.messages

    }
};
export default connect(mapStateToProps, {
    
})(TabChats );