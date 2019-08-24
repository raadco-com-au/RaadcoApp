import * as types from './../types';

const initialState = {
    messages: [
        { from: 9177079209, to: 9177079209, time: "9:10 am", text: "Life is short" },
        { from: 9177079209, to: 9177079209, time: "9:10 am", text: "hello world" },
        { from: 9177079209, to: 9332369461, time: "9:10 am", text: "Hi Sajad" },
        { from: 9177079209, to: 9332369461, time: "9:11 am", text: "How's it going?" },
        { from: 9332369461, to: 9177079209, time: "9:11 am", text: "Hi David" },
        { from: 9332369461, to: 9177079209, time: "9:12 am", text: "Not Bad" },
        { from: 9177079209, to: 9332369461, time: "9:12 am", text: "Where are you? I have to see you, when can you come on here?" },
        // { from: 9332369461, to: 9173927221, time: "9:12 am", text: "hello saeid" },
        // { from: 9173927221, to: 9332369461, time: "9:12 am", text: "hi" },
        { from: 9177079209, to: 9173927221, time: "9:12 am", text: "hi saeid" },
        { from: 9173927221, to: 9177079209, time: "9:12 am", text: "hi" },
    ],
    userId:9177079209
}
export default function (state = initialState, action) {
    switch (action.type) {
        case types.MESSAGE_SENT:
            return Object.assign({}, state, {
               ...action,
               
            })
        default:
            return state
    }
}