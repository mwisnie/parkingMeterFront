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

@NgModule({
  imports: [
    BrowserAnimationsModule,
    MatTabsModule,
    MatButtonModule,
    MatSelectModule,
    MatInputModule,
    MatExpansionModule,
    MatDialogModule,
  ],
  exports: [
    BrowserAnimationsModule,
    MatTabsModule,
    MatButtonModule,
    MatSelectModule,
    MatInputModule,
    MatExpansionModule,
    MatDialogModule,
    MatDialogModule
  ],
  entryComponents: [
    AddCarDialogComponent,
    SessionDetailDialogComponent
  ]
})
export class MaterialsModule { }
