import { EntityState, createEntityAdapter } from "@ngrx/entity";
import { PostInterface } from "./post.interface";

export interface PostState extends EntityState<PostInterface>{}

export const postsAdapter = createEntityAdapter<PostInterface>();

export const intialState: PostState = postsAdapter.getInitialState();