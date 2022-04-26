import { Component, HostListener, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Patient } from '../patients/patient';
import { PatientService } from '../services/patient.service';
import { User } from 'src/app/classes/user';
import { UserService } from '../services/user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-pt-floor',
  templateUrl: './pt-floor.component.html',
  styleUrls: ['./pt-floor.component.css']
})
export class PtFloorComponent implements OnInit {

  ngOnInit(): void {
    this.getUsers();
    console.log(this.doctors);
    console.log(this.nurses);
  }

  doctors: any[] = [];
  nurses: any[] = [];

  getUsers(): void{
    this.userService.getAll().subscribe (
      (response: User[])=>{
        console.log(response);
        response.forEach(
          (u: User)=>
          {
            console.log(u);
            if(u.role.role == "nurse")
            {
              this.nurses.push(u);
            }
            else if(u.role.role == "doctor")
            {
              this.doctors.push(u); 
            }
          }
        )
      }
    )
  }

  room401: any[] = [];

  room402: any[] = [];

  room403: any[] = [];

  room404: any[] = [];

  room405: any[] = [];

  room406: any[] = [];

  room407: any[] = [];

  room408: any[] = [];

  room409: any[] = [];

  room410: any[] = [];

  room411: any[] = [];

  room412: any[] = [];

  room413: any[] = [];

  room414: any[] = [];

  room415: any[] = [];

  room416: any[] = [];

  room417: any[] = [];

  drop(event: CdkDragDrop<any []>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  constructor(public patientService: PatientService, public userService: UserService) {
  }


}
