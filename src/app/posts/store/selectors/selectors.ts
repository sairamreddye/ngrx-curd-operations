import {createSelector, createFeatureSelector} from '@ngrx/store';
import { AppStateInterface } from 'src/app/types/appState.interface';
import { PostsStateInterface } from '../../types/postsState.interface';
import { postsAdapter } from '../../types/posts.state';

export const selectFeature = (state: AppStateInterface) => state.posts;


export const postsSelectors = postsAdapter.getSelectors();

export const isLoadingSelector = createSelector(
    selectFeature,
    (state) => state.isLoading
);

const getPostsState = createFeatureSelector<PostsStateInterface>('posts')

export const getPostEntities = createSelector(getPostsState, postsSelectors.selectAll )

export const postsSelector = createSelector(
    selectFeature,
    postsSelectors.selectAll
);

export const errorSelector = createSelector(
    selectFeature,
    (state) => state.error
);   

// export const getPostById = createSelector(postsSelector.sle, (state) => {
//     return state ? state.id : null;
// })

export const getPostById = (props: { id: number }) =>
  createSelector(postsSelector, (entities) => {
    return entities[props.id];
  });

