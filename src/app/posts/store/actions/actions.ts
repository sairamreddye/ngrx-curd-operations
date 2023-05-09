import {createAction, props } from '@ngrx/store';
import { PostInterface } from '../../types/post.interface';

export const getPosts = createAction('[Posts] Get Posts');

export const getPostsSuccess = createAction(
    '[Posts] Get Posts success',
    props<{posts: PostInterface[]}>()
);

export const getPostsError = createAction(
    '[Posts] Get Posts failure',
    props<{error: string}>()
);

export const addPost = createAction(
    '[Posts] Add Posts',
    props<{post: PostInterface}>()
);

export const addPostSuccess = createAction(
    '[Posts] Add Posts Success',
    props<{post: PostInterface}>()
);

export const addPostError = createAction(
    '[Posts] Add Posts Error',
    props<{error: string}>()
);

export const updatePost = createAction(
    '[Posts] Update Posts',
    props<{post: PostInterface}>()
);

export const updatePostsSuccess = createAction(
    '[Posts] Update Posts Success',
    props<{post: PostInterface}>()
);

export const updatePostsError = createAction(
    '[Posts] Update Posts Error',
    props<{error: string}>()
);

export const deletePost = createAction(
    '[Posts] Delete Posts',
    props<{id: string}>()
);

export const deletePostsSuccess = createAction(
    '[Posts] Delete Posts Success',
    props<{id: string}>()
);

export const deletePostsError = createAction(
    '[Posts] Delete Posts Error',
    props<{error: string}>()
);