import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

const costApiAddress = 'http://localhost:8080/api/cost/';
const earningsApiAddress = 'http://localhost:8080/api/earnings/';
const getRequestHeaders = new HttpHeaders({'Access-Control-Allow-Origin': '*'});

@Injectable({
  providedIn: 'root'
})
export class CostService {

  incomeSubject: Subject<number> = new BehaviorSubject<number>(0);

  constructor(private http: HttpClient) { }

  getCostForSessionId(id: number): Observable<number> {
    return this.http.get<number>(costApiAddress + id, { headers: getRequestHeaders });
  }

  getAllIncome(): void {
    this.http.get<number>(earningsApiAddress, { headers: getRequestHeaders })
      .subscribe(income => {
        this.incomeSubject.next(income);
      }, error => {
        this.incomeSubject.error(error);
      });
  }

}
