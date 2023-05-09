import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { PostInterface } from '../../types/post.interface';
import { Store } from '@ngrx/store';
import { AppStateInterface } from 'src/app/types/appState.interface';
import { addPost } from '../../store/actions/actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addposts',
  templateUrl: './addposts.component.html',
  styleUrls: ['./addposts.component.css']
})
export class AddpostsComponent implements OnInit {
  todoForm! : FormGroup;
  constructor(private store: Store<AppStateInterface>, private router: Router) { }

  ngOnInit(): void {
    this.todoForm = new FormGroup({
      title: new FormControl(''),
      description: new FormControl(''),
      date: new FormControl()
    });
  }

  onSubmit() {
    if(!this.todoForm.valid){
     return
    }
   const post: PostInterface = {
    title: this.todoForm.value.title,
    description : this.todoForm.value.description,
    addedDate : this.todoForm.value.date
   }
   this.store.dispatch(addPost({post}));
   this.router.navigate(['/todo/list'])
  }

}
