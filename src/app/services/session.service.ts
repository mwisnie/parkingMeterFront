import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { ParkingSession } from '../model/model';
import { SpaceService } from './space.service';

const spaceApiAddress = 'http://localhost:8080/api/spaces/';
const jsonRequestHeaders = new HttpHeaders({'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'});

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor(private http: HttpClient,
              private spaceService: SpaceService) { }

  createSession(session: ParkingSession, spaceId: number): void {
    const sessionApiAddress = spaceApiAddress + spaceId + '/sessions';

    // when creating new parking session for certain space, automatically set previous sessions to finished
    this.spaceService.getSpaceById(spaceId).subscribe(space => {
      const sessionsAssignedToSpace = space.parkingSessions;
      sessionsAssignedToSpace.filter(sess => sess.endTime === null).forEach(sess => {
        const editedSession = sess;
        editedSession.endTime = new Date();
        this.updateSession(editedSession, spaceId);
      });

      this.http.post<ParkingSession>(sessionApiAddress, session, { headers: jsonRequestHeaders }).subscribe(result => {
        console.log('Added new session: ' + JSON.stringify(result));
        this.spaceService.getAllSpaces(true);
      });
    });
  }

  updateSession(session: ParkingSession, spaceId: number): void {
    const sessionApiAddress = spaceApiAddress + spaceId + '/sessions';

    this.http.put<ParkingSession>(sessionApiAddress, session, { headers: jsonRequestHeaders }).subscribe(result => {
      console.log('Modified session session: ' + JSON.stringify(result));
      this.spaceService.getAllSpaces(true);
    });
  }

  deleteSession(spaceId: number, sessionId: number): void {
    const sessionApiAddress = spaceApiAddress + spaceId + '/sessions/' + sessionId;

    this.http.delete(sessionApiAddress).subscribe(() => {
      console.log('Deleted session with id: ' + sessionId);
    });
  }

}
