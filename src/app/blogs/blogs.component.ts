import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PostsService } from '../services/posts.service';
import Post, { apiPost } from '../core/entities/post';
import { Router } from '@angular/router';
import { HttpsService } from '../services/https.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit {
  showForm = false;
  posts: apiPost[] = [];
  hiddenPosts: any[] = [];
  autoReload = false;
  // avatarControl = new FormControl('', [Validators.required]);
  // nameControl = new FormControl('', [Validators.required, Validators.maxLength(10)]);
  blogPostFormGroup: FormGroup;
  cleanUpAutoReload: any;
  constructor(
    private postsService: PostsService,
    private routes: Router,
    private http: HttpsService,
    private spinner: NgxSpinnerService,
    private toastr: ToastrService
  ) {
    this.blogPostFormGroup = new FormGroup({
      avatar: new FormControl('https://material.angular.io/assets/img/examples/shiba2.jpg', [Validators.required]),
      name: new FormControl('default name', [Validators.required, Validators.maxLength(10)]),
      subtitle: new FormControl('default subtitle'),
      mainImage: new FormControl('https://material.angular.io/assets/img/examples/shiba2.jpg', [Validators.required]),
      subject: new FormControl('Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unkno', [Validators.required, Validators.maxLength(200), Validators.minLength(50)])
    });
  }

  ngOnInit(): void {
    this.getAllPosts();
    this.cleanUpAutoReload = this.postsService.shouldUpdateData().subscribe((ev: boolean) => {
      debugger
      if (this.autoReload) {
        this.toastr.warning('Please refresh you page');
      }
    });
  }

  getAllPosts() {
    // subscribe on http get method
    this.spinner.show();
    this.http.get('post', {}, { 'app-id': '5feb79cc47bdd3b7b340a7a8' })
      .subscribe((response: any) => {
        this.postsService.posts = response.data;
        this.toastr.success('Data is loaded')
        this.spinner.hide();
      }, err => {
        this.spinner.hide();
        this.toastr.error('Sorry, Something went wrong !')
        console.log('api request error ', err);
      });
  }

  get ServicePostsItems() {
    return this.postsService.posts;
  }

  switchForm() {
    this.showForm = !this.showForm;
  }

  getControl(controlName: string) {
    return this.blogPostFormGroup.get(controlName);
  }

  reset() {
    // this.blogPostFormGroup.reset();
    this.switchForm();
  }

  saveThePost() {
    if (this.blogPostFormGroup.valid) {
      this.postsService.addPost(this.blogPostFormGroup.value);
      this.reset();
    }
  }

  deletePost = (index: number) => this.postsService.deletePost(index);

  hidePost = (index: number) => this.postsService.hidePost(this.deletePost(index)[0]);

  goToHidden = () => this.routes.navigate(['hidden']);

  switchAutoReload = () => this.autoReload = !this.autoReload;
}