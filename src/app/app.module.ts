import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AddCarDialogComponent } from './components/add-car-dialog/add-car-dialog.component';
import { AddParkingSpaceComponent } from './components/add-parking-space/add-parking-space.component';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { CarsComponent } from './components/cars/cars.component';
import { MainViewComponent } from './components/main-view/main-view.component';
import { ParkingSpacesComponent } from './components/parking-spaces/parking-spaces.component';
import { MaterialsModule } from './materials.module';
import { CarService } from './services/car.service';
import { SpaceService } from './services/space.service';
import { SessionService } from './services/session.service';
import { SessionDetailDialogComponent } from './components/session-detail-dialog/session-detail-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    MainViewComponent,
    AddParkingSpaceComponent,
    CarDetailComponent,
    ParkingSpacesComponent,
    CarsComponent,
    AddCarDialogComponent,
    SessionDetailDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    SpaceService,
    CarService,
    SessionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
