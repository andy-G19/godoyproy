import { Component, OnInit } from '@angular/core';
import { PostsService } from './posts.service';

@Component({
  selector: 'app-feed',
  template: `
    <div *ngFor="let post of posts">
      <h2>{{ post.author }}</h2>
      <p>{{ post.content }}</p>
      <img *ngIf="post.image" [src]="post.image" alt="Imagen del Post" />
    </div>
  `,
})
export class FeedComponent implements OnInit {
  posts: any[] = [];

  constructor(private postsService: PostsService) {}

  ngOnInit() {
    this.postsService.getPosts().subscribe((posts) => {
      this.posts = posts;
    });
  }
}