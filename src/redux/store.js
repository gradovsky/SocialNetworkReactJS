import profileReducer from './profile-reducer';
import messageReducer from './message-reducer';
import sidebarReducer from './sidebar-reducer';

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 0, message: 'How are you?', likesCount: 44},
                {id: 1, message: 'It is my first post', likesCount: 66},
            ],
            newPostText: 'Введіть Ваше повідомлення!'
        },
        messagesPage: {
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
            newMessageBody: ''
        },
        sidebar: {}
    },
    _callSubscriber() {
        console.log('State changed');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer; // патерн observer
    },


    dispatch(action) { // { type: 'ADD-POST' }
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagesPage = messageReducer(this._state.messagesPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        this._callSubscriber(this._state);
    }
};

export default store;
window.store = store;
