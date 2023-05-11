import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import { PostsRoutingModule } from './posts-routing.module';
import { PostsListComponent } from './posts/posts-list.component';
// import { PostsService } from './services/posts.service';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { AddPostComponent } from './add-post/add-post.component';
import { EditPostComponent } from './editposts/edit-post.component';
import { Routes, RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { postsReducer } from './state/posts.reducer';
import { POST_STATE_NAME } from './state/posts.selector';

const routes: Routes = [
  {
    path: '',
    component: PostsListComponent,
    children: [
      { path: 'add', component: AddPostComponent },
      {
        path: 'edit/:id',
        component: EditPostComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [
    PostsListComponent,
    AddPostComponent,
    EditPostComponent
  ],
  imports: [
    CommonModule,
    // PostsRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature(POST_STATE_NAME, postsReducer),
  ],
  // providers: [PostsService],
})
export class PostsModule { }
