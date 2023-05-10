import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { AppStateInterface } from 'src/app/types/appState.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { PostInterface } from '../../types/post.interface';
// import { getPostById } from '../../store/selectors/selectors';
import { Observable, Subscription } from 'rxjs';
import { errorSelector, getPostById, isLoadingSelector } from '../../store/selectors/selectors';
import { updatePost } from '../../store/actions/actions';

@Component({
  selector: 'app-editposts',
  templateUrl: './editposts.component.html',
  styleUrls: ['./editposts.component.css']
})
export class EditpostsComponent implements OnInit, OnDestroy {
  post!: PostInterface;
  postForm!: FormGroup;
  postSubscription!: Subscription;
  isLoading$!: Observable<boolean>;
  error$!: Observable<string | null>;
  constructor(private store: Store<AppStateInterface>, 
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.error$ = this.store.pipe(select(errorSelector));
    this.route.paramMap.subscribe((params) => {
      const id:any = params.get('id');
      this.postSubscription = this.store
      .select(getPostById(id))
      .subscribe((data:any) => {
        this.post = data;
         this.createForm();
      })
    });

  }

  createForm() {
    this.postForm = new FormGroup({
      title: new FormControl(this.post.title, [
        Validators.required,
        Validators.minLength(6),
      ]),
      description: new FormControl(this.post.description, [
        Validators.required,
        Validators.minLength(10),
      ]),
      date: new FormControl(this.post.addedDate, [
        Validators.required
      ]),
    });
  }

  ngOnDestroy(){
     if(this.postSubscription){
      this.postSubscription.unsubscribe();
     }
  }

  onSubmit() {
    const post: PostInterface = {
      title: this.postForm.value.title,
      description: this.postForm.value.description,
      id: this.post.id,
      addedDate: this.postForm.value.date
    }
    this.store.dispatch(updatePost({post}));
    this.router.navigate(['/todo/list']);
    this.postForm.reset();
  }

}
