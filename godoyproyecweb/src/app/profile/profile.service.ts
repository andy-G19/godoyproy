import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  constructor(private firestore: AngularFirestore) {}

  createProfile(uid: string, profileData: any) {
    return this.firestore.collection('users').doc(uid).set(profileData);
  }

  getProfile(uid: string) {
    return this.firestore.collection('users').doc(uid).valueChanges();
  }

  updateProfile(uid: string, profileData: any) {
    return this.firestore.collection('users').doc(uid).update(profileData);
  }
}