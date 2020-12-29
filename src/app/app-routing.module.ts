import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogsComponent } from './blogs/blogs.component';
import { HiddenPostsComponent } from './hidden-posts/hidden-posts.component';

const routes: Routes = [
  {
    path: '',
    component: BlogsComponent
  },
  {
    path: 'hidden',
    component: HiddenPostsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
