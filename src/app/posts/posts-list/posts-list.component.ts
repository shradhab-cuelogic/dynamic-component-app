import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from 'src/app/models/post.model';
import { AppState } from 'src/app/store/app.state';
import { Store } from '@ngrx/store';
import { getPosts } from './../state/post.selector';
import { deletePost } from '../state/post.actions';
@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {
  posts: Observable<Post[]>
  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.posts = this.store.select(getPosts)
  }

  onDeletePost(id: string) {
    if(confirm('Are you sure you want to delete')) {
      this.store.dispatch(deletePost({id}))
    }
  }
}
