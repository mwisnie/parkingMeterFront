import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Subscription } from 'rxjs';
import { ParkingSpace } from 'src/app/model/model';
import { SpaceService } from 'src/app/services/space.service';

import { AddCarDialogComponent } from '../add-car-dialog/add-car-dialog.component';
import { SessionDetailDialogComponent } from '../session-detail-dialog/session-detail-dialog.component';

@Component({
  selector: 'app-parking-spaces',
  templateUrl: './parking-spaces.component.html',
  styleUrls: ['./parking-spaces.component.css']
})
export class ParkingSpacesComponent implements OnInit, OnDestroy {

  spacesSubscription: Subscription;
  spaces: ParkingSpace[];
  editedIndex = -1;
  editedName: string;
  editedMeter: boolean;

  constructor(private spaceService: SpaceService,
              public matDialog: MatDialog) { }

  ngOnInit() {
    this.getSpacesData();
  }

  getSpacesData(): void {
    this.spacesSubscription = this.spaceService.getAllSpaces(true)
      .subscribe(spaces => {
        this.spaces = spaces;
      });
  }

  ngOnDestroy() {
    this.spacesSubscription.unsubscribe();
  }

  setEditedIndex(id: number) {
    this.editedName = this.spaces.filter(s => s.id === id)[0].name;
    this.editedMeter = this.spaces.filter(s => s.id === id)[0].meterOn;
    this.editedIndex = id;
  }

  finishEdit(id: number) {
    const editedSpace = this.spaces.filter(s => s.id === this.editedIndex)[0];
    editedSpace.name = this.editedName;
    editedSpace.meterOn = this.editedMeter;
    editedSpace.isChangingMeter = 'true';

    this.spaceService.updateSpace(editedSpace);

    this.editedName = '';
    this.editedIndex = -1;
  }

  cancelEdit() {
    this.editedName = '';
    this.editedIndex = -1;
  }

  deleteSpaceById(id: string) {
    this.spaceService.deleteSpaceById(id);
  }

  isSpaceTaken(space: ParkingSpace): boolean {
    return space.parkingSessions.filter(sess => sess.endTime === null).length > 0;
  }

  openAddCarDialog(spaceId: number) {
    this.matDialog.open(AddCarDialogComponent, {
      data: { id: spaceId },
      height: '350px',
      width: '420px'
    });
  }

  openSessionDetailDialog(spaceId: number) {
    const detailDialog = this.matDialog.open(SessionDetailDialogComponent, {
      data: { spaceId: spaceId },
      height: '430px',
      width: '600px'
    });
    detailDialog.afterClosed().subscribe(closed => {
      this.getSpacesData();
    });
  }

}
