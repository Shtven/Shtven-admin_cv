import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Education } from '../../models/education/education.model';

@Injectable({
  providedIn: 'root'
})
export class EducationService {

  private dbPath = '/education';
  educationRef: AngularFirestoreCollection<Education>;

  constructor(public db: AngularFirestore) { 
    this.educationRef = db.collection(this.dbPath);
  }

  getEducation(): AngularFirestoreCollection<Education> {
    return this.educationRef;
  }

  createEducation(myJob: Education): any {
    return this.educationRef.add({ ...myJob });
  }

  deleteEducation(id? : string): Promise<void> {
    return this.educationRef.doc(id).delete();
  }

  update(id: string,myJob: Education): any {
    return this.educationRef.doc(id).update(myJob);
  }
}
