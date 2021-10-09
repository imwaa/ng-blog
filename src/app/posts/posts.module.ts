import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PostDashboardComponent } from "./post-dashboard/post-dashboard.component";
import { PostDetailComponent } from "./post-detail/post-detail.component";
import { PostListComponent } from "./post-list/post-list.component";
import { PostService } from "./post.service";
import { SharedModule } from "../shared/shared.module";
import { AppRoutingModule } from "../app-routing.module";

@NgModule({
  declarations: [
    PostDashboardComponent,
    PostDetailComponent,
    PostListComponent,
  ],
  imports: [CommonModule, SharedModule, AppRoutingModule],
  providers: [PostService],
})
export class PostsModule {}
