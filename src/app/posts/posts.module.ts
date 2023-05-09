import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { PostsComponent } from './components/posts/posts.component';
import { reducers } from './store/reducers/reducers';
import { PostsEffects } from './store/effects/effects';
import { PostsService } from './services/posts.service';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { AddpostsComponent } from './components/addposts/addposts.component';
import { EditpostsComponent } from './components/editposts/editposts.component';

@NgModule({
  declarations: [
    PostsComponent,
    AddpostsComponent,
    EditpostsComponent
  ],
  imports: [
    CommonModule,
    PostsRoutingModule,
    StoreModule.forFeature('posts', reducers),
    EffectsModule.forFeature([PostsEffects]),
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [PostsService],
  exports: [PostsComponent]
})
export class PostsModule { }
