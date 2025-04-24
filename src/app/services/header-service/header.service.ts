import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Header } from '../../models/header/header.model';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  private dbPath = '/header';
  headerRef: AngularFirestoreCollection<Header>;

  constructor(public db: AngularFirestore) { 
    this.headerRef = db.collection(this.dbPath);
  }

  getHeader(): AngularFirestoreCollection<Header> {
    return this.headerRef;
  }

  updateHeader(id: string,myJob: Header): any {
    return this.headerRef.doc(id).update(myJob);
  }

  deleteHeader(id?: string): Promise<void> {
    return this.headerRef.doc(id).delete();
  }
}
