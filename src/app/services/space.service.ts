import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ParkingSpace } from '../model/model';

const spaceApiAddress = 'http://localhost:8080/api/spaces/';
const getRequestHeaders = new HttpHeaders({'Access-Control-Allow-Origin': '*'});
const jsonRequestHeaders = new HttpHeaders({'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'});

@Injectable({
  providedIn: 'root'
})
export class SpaceService {

  spacesSubject: Subject<ParkingSpace[]> = new BehaviorSubject<ParkingSpace[]>([]);

  constructor(private http: HttpClient) { }

  getAllSpaces(refresh = false): Observable<ParkingSpace[]> {
    if (refresh) {
      this.http.get<ParkingSpace[]>(spaceApiAddress, { headers: getRequestHeaders })
        .subscribe(result => {
          this.spacesSubject.next(result);
        }, error => {
          this.spacesSubject.error(error);
        });
    }

    return this.spacesSubject.asObservable();
  }

  getSpaceById(id: number): Observable<ParkingSpace> {
    return this.http.get<ParkingSpace>(spaceApiAddress + id, { headers: getRequestHeaders });
  }

  createSpace(space: ParkingSpace): void {
    this.http.post<ParkingSpace>(spaceApiAddress, space, { headers: jsonRequestHeaders }).subscribe(result => {
      console.log('Added new space: ' + JSON.stringify(result));
      this.getAllSpaces(true);
    });

      // todo: work on cache instead calling getAllSpaces() all the time
  }

  updateSpace(space: ParkingSpace): void {
    this.http.put<ParkingSpace>(spaceApiAddress, space, { headers: jsonRequestHeaders }).subscribe(result => {
      console.log('Updated space: ' + JSON.stringify(result));
      this.getAllSpaces(true);
    });
  }

  deleteSpaceById(id: string): void {
    this.http.delete(spaceApiAddress + id).subscribe(() => {
      console.log('Deleted space with id: ' + id);
      this.getAllSpaces(true);
    });
  }

}
