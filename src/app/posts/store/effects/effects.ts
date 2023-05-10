import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of, exhaustMap, switchMap } from 'rxjs';
import { PostsService } from '../../services/posts.service';
import * as PostsActions from '../actions/actions';
import { PostInterface } from '../../types/post.interface'
import { Update } from '@ngrx/entity';

@Injectable()
export class PostsEffects {
    getPosts$ = createEffect(() => 
      this.actions$.pipe(
        ofType(PostsActions.getPosts),
        mergeMap(() => {
            return this.postsService.getPosts().pipe(
                map((posts) => PostsActions.getPostsSuccess({posts})),
                catchError((error) => 
                of(PostsActions.getPostsError({error: error.message}))
                )
            );
        })
      )
    );
    addPosts$ = createEffect(() => {
   return this.actions$.pipe(
      ofType(PostsActions.addPost),
      mergeMap((action) => {
          return this.postsService.addPosts(action.post).pipe(
              map((posts) =>{
                const post = {...action.post, id: posts.id}
                return PostsActions.addPostSuccess({post})
              }),
              catchError((error) => 
              of(PostsActions.addPostError({error: error.message}))
              )
            );
      })
    )
    });

    updatePosts$ = createEffect(() => {
      return this.actions$.pipe(
         ofType(PostsActions.updatePost),
         switchMap((action) => {
             return this.postsService.updatePost(action.post).pipe(
                 map((posts) =>{
                  const updatedPosts: Update<PostInterface>={
                    id: action.post.id,
                    changes:{
                      ...action.post
                    },
                  }
                   return PostsActions.updatePostsSuccess({post: updatedPosts})
                 }),
                 catchError((error) => 
                 of(PostsActions.updatePostsError({error: error.message}))
                 )
               );
         })
       )
       });


       deletePosts$ = createEffect(() => {
        return this.actions$.pipe(
           ofType(PostsActions.deletePost),
           switchMap((action) => {
               return this.postsService.deletePost(action.id).pipe(
                   map((posts) =>{
                     return PostsActions.deletePostsSuccess({id: action.id})
                   }),
                   catchError((error) => 
                   of(PostsActions.deletePostsError({error: error.message}))
                   )
                 );
           })
         )
         });
  

    constructor(private actions$: Actions, private postsService: PostsService){}
}