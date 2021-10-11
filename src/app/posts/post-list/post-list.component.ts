import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { AuthService } from "src/app/core/auth.service";
import { Post } from "../post";
import { PostService } from "../post.service";

@Component({
  selector: "app-post-list",
  templateUrl: "./post-list.component.html",
  styleUrls: ["./post-list.component.css"],
})
export class PostListComponent implements OnInit {
  posts: Observable<Post[]>;

  constructor(private postsService: PostService, public auth: AuthService) {}

  ngOnInit(): void {
    this.posts = this.postsService.getPosts();
    console.log(this.posts);
  }

  delete(id: string) {
    this.postsService.delete(id);
  }
}
