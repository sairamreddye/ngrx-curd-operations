// import { Injectable } from '@angular/core';
// import { delay, Observable, of } from 'rxjs';
// import { PostInterface } from '../types/post.interface';
// import { HttpClient } from '@angular/common/http'

// @Injectable()
// export class PostsService {
//     constructor(private http: HttpClient){}
//   getPosts(): Observable<PostInterface[]> {
//     // const posts = [
//     //   { id: '1', title: 'First post' },
//     //   { id: '2', title: 'Second post' },
//     //   { id: '3', title: 'Third post' },
//     // ];
//     // return of(posts).pipe(delay(2000));
//   return this.http.get<PostInterface[]>('http://localhost:3000/posts');
//   }
//   addPosts(payload:PostInterface) {
//     console.log(payload)
//   return this.http.post<PostInterface>('http://localhost:3000/posts', payload);
//   }

//   updatePost(payload:PostInterface) {
//    const postData = {
//     title: payload.title, 
//     description: payload.description,
//     addedDate: payload.addedDate
//   }
//   console.log(postData)
//   return this.http.put<PostInterface>(`http://localhost:3000/posts/${payload.id}`, postData);
//   }

//   deletePost(id:string) {
//    return this.http.delete<PostInterface>(`http://localhost:3000/posts/${id}`);
//    }
// }