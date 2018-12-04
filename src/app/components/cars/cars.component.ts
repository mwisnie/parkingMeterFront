import { Component, OnInit } from '@angular/core';
import { CarService } from 'src/app/services/car.service';
import { Subscription } from 'rxjs';
import { Car } from 'src/app/model/model';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  carsSubscription: Subscription;
  cars: Car[];

  constructor(private carService: CarService) { }

  ngOnInit() {
    this.carsSubscription = this.carService.getAllCars(true)
      .subscribe(cars => {
        this.cars = cars;
      });
  }

}
