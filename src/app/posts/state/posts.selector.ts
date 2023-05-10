import { PostsState } from './posts.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';

const getPostsState = createFeatureSelector<PostsState>('posts');

export const getPosts = createSelector(getPostsState, (state) => {
  return state.posts;
});

export const getPostById = (id: string) => createSelector(getPostsState, (state) => {
  return state.posts.find((post) => post.id == id);
})