import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Area } from 'src/app/area';
import { Room } from 'src/app//room';
import { User } from '../user';
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