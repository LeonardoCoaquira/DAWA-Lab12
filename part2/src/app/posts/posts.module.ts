import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostDetailsComponent } from './post-details/post-details.component';
import { PostListComponent } from './post-list/post-list.component';



@NgModule({
  declarations: [
    PostDetailsComponent,
    PostListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PostsModule { }
