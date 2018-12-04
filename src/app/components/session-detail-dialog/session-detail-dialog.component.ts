import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material';
import { Subscription, Observable } from 'rxjs';
import { ParkingSession } from 'src/app/model/model';
import { SessionService } from 'src/app/services/session.service';
import { SpaceService } from 'src/app/services/space.service';
import { ModifyCarDialogComponent } from '../modify-car-dialog/modify-car-dialog.component';
import { CostService } from 'src/app/services/cost.service';

@Component({
  selector: 'app-session-detail-dialog',
  templateUrl: './session-detail-dialog.component.html',
  styleUrls: ['./session-detail-dialog.component.css']
})
export class SessionDetailDialogComponent implements OnInit, OnDestroy {

  spaceSubscription: Subscription;
  costSubscription: Subscription;
  activeSession: ParkingSession;
  spaceName: string;
  currentCost: number;

  constructor(private dialogRef: MatDialogRef<SessionDetailDialogComponent>,
              private spaceService: SpaceService,
              private costService: CostService,
              private sessionService: SessionService,
              private modifyCarDialog: MatDialog,
              @Inject(MAT_DIALOG_DATA) private data: { spaceId: number }) { }

  ngOnInit(): void {
    this.getSessionData();
  }

  getSessionData(): void {
    this.spaceSubscription = this.spaceService.getSpaceById(this.data.spaceId)
      .subscribe(space => {
        this.activeSession = space.parkingSessions.filter(sess => sess.endTime === null).pop();
        this.spaceName = space.name;

        this.costSubscription = this.costService.getCostForSessionId(this.activeSession.id)
          .subscribe(cost => this.currentCost = cost);
      });
  }

  ngOnDestroy(): void {
    this.spaceSubscription.unsubscribe();
    this.costSubscription.unsubscribe();
  }

  onClose(): void {
    this.dialogRef.close();
  }

  formatDate(date: Date): string {
      if (!date) {
        return '';
      }
      date = new Date(date);
      const hours = date.getHours();
      const minutes = date.getMinutes() < 10 ? '0' + date.getMinutes().toString() : date.getMinutes().toString();
      const day = date.getDate() < 10 ? '0' + date.getDate().toString() : date.getDate().toString();
      const time = hours + ':' + minutes;
      const actualMonth =  date.getMonth() + 1;
      return day + '.' + actualMonth + '.' + date.getFullYear() + '  ' + time;
  }

  openModifyCarDialog(sessionId: number) {
    const modifyCarDialog = this.modifyCarDialog.open(ModifyCarDialogComponent, {
      data: { spaceId: this.data.spaceId, parkingSession: this.activeSession },
      height: '350px',
      width: '420px'
    });
    modifyCarDialog.afterClosed().subscribe(closed => {
      this.getSessionData();
    });
  }

  finishSession(): void {
    const editedSession = this.activeSession;
    editedSession.endTime = new Date();
    this.sessionService.updateSession(editedSession, this.data.spaceId);
    this.dialogRef.close();
  }

  deleteSession(sessionId: number) {
    this.sessionService.deleteSession(this.data.spaceId, sessionId);
    this.dialogRef.close();
  }

  getCost(sessionId: number): Observable<number> {
    if (!sessionId) {
      return;
    }
    return this.costService.getCostForSessionId(sessionId);
  }

  close() {
    this.dialogRef.close();
  }

}
