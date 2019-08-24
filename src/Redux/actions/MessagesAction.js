import * as types from './../types';
export function SendMessage(messages, from, to, text) {
    try {
        return function (dispatch) {
            let m =messages.concat([{ from: from, to: to, time: "12:12 am", text: text }]);
            return dispatch({
                userId: 9177079209,
                messages: m,
                type: types.MESSAGE_SENT
            });
        }
    }
    catch (error) {
        debugger
    }
}