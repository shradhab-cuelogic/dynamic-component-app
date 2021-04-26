import { PostState } from './post.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { postReducer } from './post.reducer';

const getPostsState = createFeatureSelector<PostState>('posts');

export const getPosts = createSelector(getPostsState, (state)=>{
    return state.posts;
})

export const getPostById = createSelector(getPostsState, (state, props)=>{
    return state.posts.find((post) => post.id === props.id);
})