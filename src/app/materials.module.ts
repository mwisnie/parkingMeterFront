import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material';
import { AddCarDialogComponent } from './components/add-car-dialog/add-car-dialog.component';
import { SessionDetailDialogComponent } from './components/session-detail-dialog/session-detail-dialog.component';
import { ModifyCarDialogComponent } from './components/modify-car-dialog/modify-car-dialog.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    MatTabsModule,
    MatButtonModule,
    MatSelectModule,
    MatInputModule,
    MatExpansionModule,
    MatDialogModule,
    MatTooltipModule,
    MatCardModule
  ],
  exports: [
    BrowserAnimationsModule,
    MatTabsModule,
    MatButtonModule,
    MatSelectModule,
    MatInputModule,
    MatExpansionModule,
    MatDialogModule,
    MatTooltipModule,
    MatCardModule
  ],
  entryComponents: [
    AddCarDialogComponent,
    ModifyCarDialogComponent,
    SessionDetailDialogComponent
  ]
})
export class MaterialsModule { }
