import * as types from './../types';

const initialState = {
    chats: [
        { name: "Saved Messages", mobile: 9177079209,isOnline:true,lastSeen:"08:12", lastChat: "Doing what you like will always keep you happy . .", profileUrl:require("../../images/09177079209.jpg") , chatTime: "3:10 pm", newMessage:true, newMessageCount:1 },
        { name: "sajadweb", mobile: 9332369461,isOnline:true,lastSeen:"06:45", lastChat: "where are you, David?", profileUrl:require("../../images/09332369461.jpg") , chatTime: "9:43 am" , newMessage:false, newMessageCount:0},
        { name: "saeid", mobile: 9173927221,isOnline:false,lastSeen:"00:23", lastChat: "see ya", profileUrl: require("../../images/09173927221.jpg"), chatTime: "Yesterday", newMessage:true, newMessageCount:4 },
    ],
};
export default function (state = initialState, action) {
    switch (action.type) {
        case types.LOAD_CHATS_SUCCESS: 
            return Object.assign({}, state, {
                ...action
            })
        default:
            return state
    }
}