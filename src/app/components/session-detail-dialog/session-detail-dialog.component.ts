import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Subscription } from 'rxjs';
import { ParkingSession } from 'src/app/model/model';
import { SessionService } from 'src/app/services/session.service';
import { SpaceService } from 'src/app/services/space.service';

@Component({
  selector: 'app-session-detail-dialog',
  templateUrl: './session-detail-dialog.component.html',
  styleUrls: ['./session-detail-dialog.component.css']
})
export class SessionDetailDialogComponent implements OnInit, OnDestroy {

  // space: Observable<ParkingSpace>;
  spaceSubscription: Subscription;
  activeSession: ParkingSession;

  constructor(private dialogRef: MatDialogRef<SessionDetailDialogComponent>,
              private spaceService: SpaceService,
              private sessionService: SessionService,
              @Inject(MAT_DIALOG_DATA) private data: { id: number }) { }

  ngOnInit(): void {
    this.spaceSubscription = this.spaceService.getSpaceById(this.data.id)
      .subscribe(space => {
        this.activeSession = space.parkingSessions.filter(sess => sess.endTime === null).pop();
      });
  }

  ngOnDestroy(): void {
    this.spaceSubscription.unsubscribe();
  }

  onClose(): void {
    this.dialogRef.close();
  }

  test() {
    console.log(this.activeSession);
  }

}
