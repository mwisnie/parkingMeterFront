import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { SpaceService } from 'src/app/services/space.service';
import { Subscribable, Subscription, Observable } from 'rxjs';
import { ParkingSpace, ParkingSession } from 'src/app/model/model';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-add-car-dialog',
  templateUrl: './add-car-dialog.component.html',
  styleUrls: ['./add-car-dialog.component.css']
})
export class AddCarDialogComponent implements OnInit {

  space: Observable<ParkingSpace>;

  carForm = new FormGroup({
    registration: new FormControl('', [Validators.required]),
    tariff: new FormControl('', [Validators.required])
  });

  constructor(private dialogRef: MatDialogRef<AddCarDialogComponent>,
              private spaceService: SpaceService,
              private sessionService: SessionService,
              @Inject(MAT_DIALOG_DATA) private data: { id: number }) { }

  ngOnInit(): void {
    console.log(this.data.id);
    this.space = this.spaceService.getSpaceById(this.data.id);
  }

  onClose(): void {
    this.dialogRef.close();
  }

  addCar(formValue): void {
    const parkingSession = new ParkingSession(null,
                                            null,
                                            formValue.registration,
                                            formValue.tariff,
                                            new Date(),
                                            null,
                                            false);

    this.sessionService.createSession(parkingSession, this.data.id);
    this.dialogRef.close();
  }

}
