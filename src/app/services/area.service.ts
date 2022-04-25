import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Area } from '../classes/area';
import { Room } from '../classes/room';
import { User } from '../classes/user';
import { Patient } from '../patients/patient';


@Injectable({
  providedIn: 'root'
})
export class AreaService {
  private backendUrl = 'http://localhost:8094/wellnet/area/'

  constructor(private http: HttpClient) { 

  }
  
  getAllRooms(): Observable<any>{
    let rooms: Observable<any> = this.http.get<{roomId: number, roomNumber: number, area: Area, doctor: User, patient: Patient}[]>(this.backendUrl);
    return rooms;
  }
}