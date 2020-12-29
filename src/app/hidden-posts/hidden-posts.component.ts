import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-hidden-posts',
  templateUrl: './hidden-posts.component.html',
  styleUrls: ['./hidden-posts.component.scss']
})
export class HiddenPostsComponent implements OnInit {

  constructor(
    private routes: Router,
    public postsService: PostsService
  ) { }

  ngOnInit(): void {
  }

  goToPosts() {
    this.routes.navigate(['']);
  }

}
