import { createReducer, on } from '@ngrx/store';
import * as PostsActions from '../actions/actions';
import { PostsStateInterface } from '../../types/postsState.interface';

export const intialState: PostsStateInterface = {
    isLoading: false,
    posts: [],
    error: null
}

export const reducers = createReducer(
    intialState,
    on(PostsActions.getPosts, (state) => ({
        ...state,
        isLoading: true
    })),
    on(PostsActions.getPostsSuccess, (state, action) => ({
        ...state,
        isLoading: false,
        posts: action.posts
    })),
    on(PostsActions.getPostsError, (state, action) => ({
        ...state,
        isLoading: false,
        error: action.error
    })),

    on(PostsActions.addPostSuccess, (state, action) => {
        let post = { ...action.post };
        return {
            ...state,
            posts: [...state.posts, post],
        }
    }),

    on(PostsActions.addPostError, (state, action) => ({
        ...state,
        isLoading: false,
        error: action.error
    })),

    on(PostsActions.updatePost, (state, action) => {
        const updatePosts = state.posts.map((post) => {
            return action.post.id === post.id ? action.post : post;
        });
        return {
            ...state,
            posts: updatePosts,
            isLoading: true,
        };
    }),

    on(PostsActions.updatePostsSuccess, (state, action) => {
        return {
            ...state,
            isLoading: false,
        }
    }),

    on(PostsActions.updatePostsError, (state, action) => ({
        ...state,
        isLoading: false,
        error: action.error
    })),


    on(PostsActions.deletePostsSuccess, (state, {id}) => {
        const deletePost = state.posts.filter((post) => {
            return post.id != id;
        });
        return {
            ...state,
            posts: deletePost
        }
    }),

    on(PostsActions.deletePost, (state, action) => {
        return {
            ...state,
            isLoading: false,
        }
    }),

    on(PostsActions.deletePostsError, (state, action) => ({
        ...state,
        isLoading: false,
        error: action.error
    })),
)