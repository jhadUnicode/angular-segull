import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import Post, { apiPost } from '../core/entities/post';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  hiddenPosts: apiPost[] = [];
  posts: apiPost[] = [];
  fifteenSecondsHandler = new BehaviorSubject(false);
  constructor() {
    this.intervalPostsUpdate();
  }

  hidePost(post: apiPost) {
    this.hiddenPosts.push(post);
  }

  addPost(post: apiPost) {
    this.posts.push(post);
  }

  deletePost(index: number): apiPost[] {
    return this.posts.splice(index, 1);
  }

  shouldUpdateData = () => this.fifteenSecondsHandler.asObservable();

  intervalPostsUpdate() {
    debugger
    // update posts each 30 seconds
    setInterval(() => {
      debugger
      // tell components to pull data again
      const autoReload = localStorage.getItem('autoReload');
      if (autoReload == 'true')
        this.fifteenSecondsHandler.next(true);
    }, 10000);
  }
}