import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsListComponent } from './posts/posts-list.component';
import { AddPostComponent } from './add-post/add-post.component';
import { EditPostComponent } from './editposts/edit-post.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
  },
  {
    path: 'list',
    component: PostsListComponent,
    // children:[
    //   {path: 'addpost', component: AddpostsComponent},
    //   {path: 'editpost/:id', component: EditpostsComponent}
    // ]
  },
  {
    path: 'addpost',
    component: AddPostComponent
  },
  {
    path: 'editpost/:id',
    component: EditPostComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }
