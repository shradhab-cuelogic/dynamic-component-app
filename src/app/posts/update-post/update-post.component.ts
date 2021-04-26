import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppState } from 'src/app/store/app.state';
import { Store } from '@ngrx/store';
import { getPostById } from '../state/post.selector';
import { Post } from 'src/app/models/post.model';
import { Subscription } from 'rxjs';
import { FormGroup, FormBuilder } from '@angular/forms';
import { updatePost } from '../state/post.actions';

@Component({
  selector: 'app-update-post',
  templateUrl: './update-post.component.html',
  styleUrls: ['./update-post.component.css']
})
export class UpdatePostComponent implements OnInit, OnDestroy {
  post: Post;
  postSubscription: Subscription;
  postForm: FormGroup;
  constructor(private route: ActivatedRoute, private store: Store<AppState>, private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params=>{
      const id = params.get('id');
      this.postSubscription = this.store.select(getPostById, { id }).subscribe(data=>{
        this.post = data;
        this.createForm();
      })
    })
  }

  ngOnDestroy() {
    if(this.postSubscription) {
      this.postSubscription.unsubscribe();
    }
  }

  createForm() {
    this.postForm = this.fb.group({
      title: [this.post.title],
      description: [this.post.description]
    })
  }

  onSubmit() {
    if(!this.postForm.valid) {
      return
    }

    const title = this.postForm.value.title;
    const description = this.postForm.value.description;

    const post: Post = {
      id: this.post.id,
      title,
      description
    }
    console.log('adasdsdaddddddd', post);
    this.store.dispatch(updatePost({post}));
    this.router.navigate(['post']);
  }
}
