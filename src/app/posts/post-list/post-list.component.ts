import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Post } from "../post";
import { PostService } from "../post.service";

@Component({
  selector: "app-post-list",
  templateUrl: "./post-list.component.html",
  styles: [],
})
export class PostListComponent implements OnInit {
  posts: Observable<Post[]>;

  constructor(private postsService: PostService) {}

  ngOnInit(): void {
    this.posts = this.postsService.getPosts();
    console.log(this.posts);
  }
}
