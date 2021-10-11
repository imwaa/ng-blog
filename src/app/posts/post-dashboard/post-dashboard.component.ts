import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { AuthService } from "src/app/core/auth.service";
import { MaterialModule } from "src/app/material.module";
import { NotificationService } from "src/app/shared/notification.service";
import { PostService } from "../post.service";
import { AngularFireStorage } from "@angular/fire/compat/storage";
import { finalize } from "rxjs/operators";

@Component({
  selector: "app-post-dashboard",
  templateUrl: "post-dashboard.component.html",
  styleUrls: ["post-dashboard.component.css"],
})
export class PostDashboardComponent implements OnInit {
  title: string;
  image: string = null;
  content: string;

  uploadPercent: Observable<number>;
  downloadUrl: Observable<string>;

  constructor(
    private auth: AuthService,
    private postService: PostService,
    private notifcationService: NotificationService,
    private storage: AngularFireStorage
  ) {}

  ngOnInit(): void {}

  createPost() {
    const data = {
      author: this.auth.authState.displayName || this.auth.authState.email,
      authorId: this.auth.currentUserId,
      content: this.content,
      image: this.image,
      published: new Date(),
      title: this.title,
    };
    this.postService.create(data);
    this.notifcationService.success("Article Added!");
    this.clearFields();
  }

  uploadImage(event) {
    const file = event.target.files[0];
    const path = `posts/${file.name}`;
    if (file.type.split("/")[0] !== "image") {
      this.notifcationService.error("Chose an image please");
    } else {
      const task = this.storage.upload(path, file);
      const ref = this.storage.ref(path);
      this.uploadPercent = task.percentageChanges();
      task
        .snapshotChanges()
        .pipe(
          finalize(() => {
            this.downloadUrl = ref.getDownloadURL();
            this.downloadUrl.subscribe((url) => (this.image = url));
          })
        )
        .subscribe();
      console.log(this.downloadUrl);
      console.log(this.image);
    }
  }

  clearFields() {
    this.title = "";
    this.content = "";
  }
}
