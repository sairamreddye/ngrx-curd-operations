import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsComponent } from './components/posts/posts.component';
import { AddpostsComponent } from './components/addposts/addposts.component';
import { EditpostsComponent } from './components/editposts/editposts.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
  },
  {
    path: 'list',
    component: PostsComponent,
    // children:[
    //   {path: 'addpost', component: AddpostsComponent},
    //   {path: 'editpost/:id', component: EditpostsComponent}
    // ]
  },
  {
    path: 'addpost',
    component: AddpostsComponent
  },
  {
    path: 'editpost/:id',
    component: EditpostsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }
