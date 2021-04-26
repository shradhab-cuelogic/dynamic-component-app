import { PostState } from '../posts/state/post.state';
import { counterReducer } from '../counter/state/counter.reducer';
import { postReducer } from '../posts/state/post.reducer';
import { CounterState } from '../counter/state/counter.state';

export interface AppState {
    counter: CounterState
    posts: PostState
}

export const appReducer = {
    counter: counterReducer,
    posts: postReducer
}