import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

import { Car } from '../model/model';

const carApiAddress = 'http://localhost:8080/api/cars/';
const getRequestHeaders = new HttpHeaders({'Access-Control-Allow-Origin': '*'});
const jsonRequestHeaders = new HttpHeaders({'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'});

@Injectable({
  providedIn: 'root'
})
export class CarService {

  carsSubject: Subject<Car[]> = new BehaviorSubject<Car[]>([]);

  constructor(private http: HttpClient) { }

  getAllCars(refresh = false): Observable<Car[]> {
    if (refresh) {
      this.http.get<Car[]>(carApiAddress, { headers: getRequestHeaders })
        .subscribe(result => {
          this.carsSubject.next(result);
        }, error => {
          this.carsSubject.error(error);
        });
    }

    return this.carsSubject.asObservable();
  }

  getCarById(id: string): Observable<Car> {
    return this.http.get<Car>(carApiAddress + id, { headers: getRequestHeaders });
  }

  createCar(car: Car): void {
    this.http.post<Car>(carApiAddress, car, { headers: jsonRequestHeaders }).subscribe(result => {
      console.log('Added new car: ' + JSON.stringify(result));
      this.getAllCars(true);
    });
  }

  updateCar(car: Car): void {
    this.http.put<Car>(carApiAddress, car, { headers: jsonRequestHeaders }).subscribe(result => {
      console.log('Updated car: ' + JSON.stringify(result));
      this.getAllCars(true);
    });
  }

  deleteCarById(id: string): void {
    this.http.delete(carApiAddress + id).subscribe(() => {
      console.log('Deleted car with id: ' + id);
      this.getAllCars(true);
    });
  }
}
