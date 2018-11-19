import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AddParkingSpaceComponent } from './components/add-parking-space/add-parking-space.component';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { MainViewComponent } from './components/main-view/main-view.component';
import { ParkingSpaceDetailComponent } from './components/parking-space-detail/parking-space-detail.component';
import { MaterialsModule } from './materials.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MainViewComponent,
    ParkingSpaceDetailComponent,
    AddParkingSpaceComponent,
    CarDetailComponent,
    ParkingSpaceDetailComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
