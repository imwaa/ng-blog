import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PostDashboardComponent } from "./posts/post-dashboard/post-dashboard.component";
import { PostDetailComponent } from "./posts/post-detail/post-detail.component";
import { PostListComponent } from "./posts/post-list/post-list.component";

const routes: Routes = [
  { path: "", redirectTo: "/blog", pathMatch: "full" },
  { path: "blog", component: PostListComponent },
  { path: "blog/:id", component: PostDetailComponent },
  { path: "dashboard", component: PostDashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
