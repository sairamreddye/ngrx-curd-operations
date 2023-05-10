import { EntityState } from '@ngrx/entity';
import { PostInterface } from './post.interface';

export interface PostsStateInterface extends EntityState<PostInterface> {
  isLoading: boolean;
  posts: PostInterface[];
  error: string | null;
}