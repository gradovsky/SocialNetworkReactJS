const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
    dialogData: [
        {id: 1, name: 'Viktor'},
        {id: 2, name: 'Dimas'},
        {id: 3, name: 'Olia'},
        {id: 4, name: 'Valera'},
        {id: 5, name: 'Natasha'},
        {id: 6, name: 'Oleg'}
    ],
    messagesData: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'What about React?'}
    ],
};

const messageReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                messagesData: [...state.messagesData, {id: 4, message: body}]
            };
        default:
            return state;
    }
};

export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody});

export default messageReducer;