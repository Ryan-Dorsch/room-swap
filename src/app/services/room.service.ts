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
export class RoomService {
  private backendUrl = 'http://localhost:8094/wellnet/room/'

  


  constructor(private http: HttpClient) { 

  }
  
  getAllRooms(): Observable<any>{
    let rooms: Observable<any> = this.http.get<{roomId: number, roomNumber: number, area: Area, doctor: User, patient: Patient}[]>(this.backendUrl);
    return rooms;
  }

  getFindById(roomId: number){
    

    return this.http.get<Room>(`http://localhost:8094/wellnet/room/${roomId}`);
  }
  getFindByAreaName(name: String){
    

    return this.http.get<Area>(`http://localhost:8094/wellnet/area/${name}` );
  }
  getFindRoomByAreaName(name: String){
    

    return this.http.get<Room[]>(`http://localhost:8094/wellnet/roombyarea/${name}`);
  }
  getFindByDoctor(id: number){
    

    return this.http.get<User[]>(`http://localhost:8094/wellnet/roombydoctor/${id}` );
}
putUpdateRoom(room: Room, id: number){
    

    return this.http.put<Room[]>(`http://localhost:8094/wellnet/update/${id}`, room);


}
}