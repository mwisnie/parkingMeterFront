import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material';
import { Observable } from 'rxjs';
import { ParkingSession, ParkingSpace } from 'src/app/model/model';
import { SessionService } from 'src/app/services/session.service';
import { SpaceService } from 'src/app/services/space.service';


@Component({
  selector: 'app-modify-car-dialog',
  templateUrl: './modify-car-dialog.component.html',
  styleUrls: ['./modify-car-dialog.component.css']
})
export class ModifyCarDialogComponent implements OnInit {

  space: Observable<ParkingSpace>;

  carForm = new FormGroup({
    registration: new FormControl(this.data.parkingSession.carRegistration, [Validators.required]),
    tariff: new FormControl(this.data.parkingSession.tariff, [Validators.required])
  });

  constructor(private matDialog: MatDialog,
              private dialogRef: MatDialogRef<ModifyCarDialogComponent>,
              private spaceService: SpaceService,
              private sessionService: SessionService,
              @Inject(MAT_DIALOG_DATA) private data: { spaceId: number, parkingSession: ParkingSession }) { }

  ngOnInit(): void {
    this.space = this.spaceService.getSpaceById(this.data.spaceId);
  }

  onClose(): void {
    this.dialogRef.close();
  }

  editCar(formValue): void {
    const modifiedSession = this.data.parkingSession;
    modifiedSession.carRegistration = formValue.registration;
    modifiedSession.tariff = formValue.tariff;

    this.sessionService.updateSession(modifiedSession, this.data.spaceId);

    this.dialogRef.close();
  }

}
