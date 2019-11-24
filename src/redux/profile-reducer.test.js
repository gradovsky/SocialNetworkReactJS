import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";
import React from "react";

let state = {
    posts: [
        {id: 0, message: 'How are you?', likesCount: 44},
        {id: 1, message: 'It is my first post', likesCount: 66},
    ]
};

it('Length of post should be incremented', () => {
// 1. test  data
    let action = addPostActionCreator('ReactJS');
// 2. action
let newState = profileReducer(state, action);
// 3. expectation
expect(newState.posts.length).toBe(3);
});

it('Message of new post should be correct', () => {
// 1. test  data
    let action = addPostActionCreator('lol test zamytuvsj');
// 2. action
let newState = profileReducer(state, action);
// 3. expectation
expect(newState.posts[2].message).toBe('lol test zamytuvsj');
});

it('After deleting length of message should be decrement', () => {
// 1. test  data
    let action = deletePost(0);
// 2. action
let newState = profileReducer(state, action);
// 3. expectation
expect(newState.posts.length).toBe(1);
});

