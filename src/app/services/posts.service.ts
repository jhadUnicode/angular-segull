import { Injectable } from '@angular/core';
import Post, { apiPost } from '../core/entities/post';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  hiddenPosts: apiPost[] = [];
  posts: apiPost[] = [];
  constructor() { }

  hidePost(post: apiPost) {
    this.hiddenPosts.push(post);
  }

  addPost(post: apiPost) {
    this.posts.push(post);
  }

  deletePost(index: number): apiPost[] {
    return this.posts.splice(index, 1);
  }
}