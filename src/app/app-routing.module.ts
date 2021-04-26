import { NgModule } from "@angular/core";
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { PostsListComponent } from './posts/posts-list/posts-list.component';
import { CounterComponent } from './counter/counter/counter.component';
import { AddPostComponent } from './posts/add-post/add-post.component';
import { UpdatePostComponent } from './posts/update-post/update-post.component';

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'counter', component: CounterComponent},
    {path: 'post', component: PostsListComponent,
    children: [
        {path:'add', component: AddPostComponent},
        {path:'edit/:id', component: UpdatePostComponent}
    ]}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: []
})

export class AppRoutingModule {}