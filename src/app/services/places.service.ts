import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, collectionData, doc, deleteDoc } from '@angular/fire/firestore';
import { Place } from '../interfaces/place.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  constructor(private firestore: Firestore) { }

  addPlace(place: Place) {
    const placesRef = collection(this.firestore, 'places');
    return addDoc(placesRef, place);
  }
  getPlaces(): Observable<Place[]> {
    const placesRef = collection(this.firestore, 'places');
    return collectionData(placesRef, { idField: 'id'}) as Observable<Place[]>;
  }
  deletePlace(place: Place) {
    const placeDocRef = doc(this.firestore, `places/${place.id}`);
    return deleteDoc(placeDocRef);
  }
}
