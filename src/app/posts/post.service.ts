import { Injectable } from "@angular/core";
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument,
} from "@angular/fire/compat/firestore";
import { Post } from "./post";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class PostService {
  /* it calls the data from the firebase for a specific 
    collection */
  postsCollection: AngularFirestoreCollection<Post>;
  /* it calls the data from the firebase for a specific 
    document */
  postDoc: AngularFirestoreDocument<Post>;

  constructor(private afs: AngularFirestore) {
    /* it specifies which collection we want to get */
    this.postsCollection = this.afs.collection("posts", (ref) =>
      ref.orderBy("published", "desc")
    );
  }

  getPosts() {
    return this.postsCollection.snapshotChanges().pipe(
      map((actions) => {
        return actions.map((a) => {
          const data = a.payload.doc.data() as Post;
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
  }

  getPostData(id: string) {
    this.postDoc = this.afs.doc<Post>(`posts/${id}`);
    //il y a un abonnement au return de cette methode
    return this.postDoc.valueChanges();
  }

  // CRUD OPERATIONS

  create(data: Post) {
    this.postsCollection.add(data);
  }

  update(id: string, formData) {
    return this.getPost(id).update(formData);
  }

  getPost(id: string) {
    return this.afs.doc<Post>(`posts/${id}`);
  }

  delete(id: string) {
    return this.getPost(id).delete();
  }
}
