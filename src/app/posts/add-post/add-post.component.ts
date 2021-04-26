import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Post } from 'src/app/models/post.model';
import { AppState } from 'src/app/store/app.state';
import { Store } from '@ngrx/store';
import { addPost } from '../state/post.actions';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {
  postForm: FormGroup;
  constructor(private fb: FormBuilder, private store: Store<AppState>) { }

  ngOnInit() {
    this.createPostForm();
  }

  createPostForm() {
    this.postForm = this.fb.group({
      title: [null, [Validators.required, Validators.minLength(6)]],
      description: [null, [Validators.required, Validators.minLength(10)]]
    })
  }

  onAddPost() {
    console.log(this.postForm.value);

    const post: Post = {
      title: this.postForm.value.title,
      description: this.postForm.value.description
    }
    this.store.dispatch(addPost({post}))
  }
}
