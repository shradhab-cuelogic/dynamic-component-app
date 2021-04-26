import { initialState } from 'src/app/posts/state/post.state';
import { createReducer, on } from '@ngrx/store'
import {addPost, updatePost, deletePost } from './post.actions';

const _postReducer = createReducer(initialState, on(addPost, (state, action)=>{
    let posts = { ...action.post };
    posts.id = (state.posts.length + 1).toString();
    return {
        ...state,
        posts: [...state.posts, posts]
    }
}),
    on(updatePost, (state, action)=>{
        console.log(action);
        const updatedPost = state.posts.map(item=>{
            return action.post.id === item.id ? action.post : item
        })

        return {
            ...state,
            posts: updatedPost
        }
    }),
    on(deletePost, (state, {id})=>{
        const filteredPost = state.posts.filter(item=>{
            return item.id !== id;
        })

        return {
            ...state,
            posts: filteredPost
        }
    })
);

export function postReducer(state, actions) {
    return _postReducer(state, actions);
}