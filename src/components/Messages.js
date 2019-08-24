import React from 'react';
import { StyleSheet, Fragment, ScrollView } from 'react-native';
import { connect } from 'react-redux';

import { Card, CardItem, Left, Right, ListItem, Body, Text, List, View } from 'native-base';

class Messages extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {

        return (
            <ScrollView >
                {this.props.message.map((message, index) => {
                    return (
                        message.from == this.props.uId ?
                            <View key={index}>
                                <Text style={styles.ownerTextStyle}>{message.text}{message.time}</Text>
                            </View>
                            :
                            <View key={index}>
                                <Text style={styles.contactTextStyle} >{message.text}</Text>
                            </View>
                    )
                })}
            </ScrollView>
        );
    }
}
function mapStateToProps(state, props) {
    return {
        message: state.messagesReducer.messages.filter(function (item) {
            return (item.from == state.messagesReducer.userId && item.to == props.contactId) || (item.to == state.messagesReducer.userId && item.from == props.contactId);
        }),
        uId: state.messagesReducer.userId
    }
};
export default connect(mapStateToProps, {

})(Messages);
const styles = StyleSheet.create({
    textSuccess: {
        color: "#00ffff"
    },
    ownerTextStyle: {
        flex: 1,
        textAlign: "right",
        alignContent: "flex-end",
        alignItems: "flex-end",
        alignSelf: "flex-end",
        padding: 10,
        color: 'white',
        borderRadius: 10,
        backgroundColor: "#889bf2",
        margin:10,
    },
    contactTextStyle: {
        flex: 1,
        textAlign: "left",
        alignContent: "flex-start",
        alignItems: "flex-end",
        alignSelf: "flex-end",
        padding: 10,
        color: 'white',
        borderRadius: 10,
        backgroundColor: "#889bf2",
        margin:10,
    },
    dirRtl: {
        direction: "rtl",
    }
})