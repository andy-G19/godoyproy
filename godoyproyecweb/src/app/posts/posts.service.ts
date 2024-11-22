import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  constructor(private firestore: AngularFirestore) {}

  createPost(postData: any) {
    return this.firestore.collection('posts').add(postData);
  }

  getPosts() {
    return this.firestore.collection('posts', (ref) => ref.orderBy('createdAt', 'desc')).valueChanges();
  }
}