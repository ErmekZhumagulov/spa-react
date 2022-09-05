import {rerenderEntireTree} from '../render';

let state = {
    profilePage: {
        posts: [
            { id: 1, message: 'Hi! How are you?', like: 14 },
            { id: 2, message: 'It\'s my first post', like: 23 }
        ],
        newPostText: ''
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

window.state = state;

export let addPost = () => {
    let newPost = {
        id: 3,
        message: state.profilePage.newPostText,
        like: 0
    };
    
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}

export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

export default state;