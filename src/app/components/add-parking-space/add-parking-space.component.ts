import { Component, OnInit } from '@angular/core';
import { SpaceService } from 'src/app/services/space.service';
import { ParkingSpace } from 'src/app/model/model';

@Component({
  selector: 'app-add-parking-space',
  templateUrl: './add-parking-space.component.html',
  styleUrls: ['./add-parking-space.component.css']
})
export class AddParkingSpaceComponent implements OnInit {

  spaceName = '';

  constructor(private spaceService: SpaceService) { }

  ngOnInit() {
  }

  createSpace(): void {
    const space = new ParkingSpace(null, this.spaceName, false, null);
    this.spaceName = '';
    this.spaceService.createSpace(space);
  }

}
