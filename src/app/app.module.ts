import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './shared/components/header/header.component';
import { RouterModule } from '@angular/router';
import { PostsListComponent } from './posts/posts-list/posts-list.component';
import { CounterComponent } from './counter/counter/counter.component';
import { CounterOutputComponent } from './counter/counter-output/counter-output.component';
import { CounterButtonsComponent } from './counter/counter-buttons/counter-buttons.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './counter/state/counter.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { ReactiveFormsModule } from '@angular/forms'
import { appReducer } from '../app/store/app.state';
import { AddPostComponent } from './posts/add-post/add-post.component';
import { UpdatePostComponent } from './posts/update-post/update-post.component';
import { TextComponent } from './dynamicComponents/text/text.component';
import { AlertModalComponent } from './dynamicComponents/alert-modal/alert-modal.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    PostsListComponent,
    CounterComponent,
    CounterOutputComponent,
    CounterButtonsComponent,
    AddPostComponent,
    UpdatePostComponent,
    TextComponent,
    AlertModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    StoreModule.forRoot(appReducer),
    StoreDevtoolsModule.instrument({
      logOnly: environment.production
    }),
    ReactiveFormsModule,
  ],
  entryComponents: [TextComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
