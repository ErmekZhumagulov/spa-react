import {rerenderEntireTree} from '../render';

let state = {
    profilePage: {
        posts: [
            { id: 1, message: 'Hi! How are you?', like: 14 },
            { id: 2, message: 'It\'s my first post', like: 23 }
        ]
    },
    dialogsPage: {
        dialogs: [
            { id: 1, name: 'Maria' },
            { id: 2, name: 'Kesha' },
            { id: 3, name: 'Jeka' }
        ],
        messages: [
            { id: 1, message: 'Hi! All good?' },
            { id: 2, message: 'How are you?' },
            { id: 3, message: 'What are you doing?' }
        ]
    }
}

export let addPost = (postMessage) => {
    let newPost = {
        id: 3,
        message: postMessage,
        like: 0
    };
    
    state.profilePage.posts.push(newPost);
    rerenderEntireTree(state);
}

export default state;