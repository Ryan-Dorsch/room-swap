import { Component, HostListener, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Patient } from '../patients/patient';
import { PatientService } from '../services/patient.service';
import { User } from 'src/app/classes/user';
import { UserService } from '../services/user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-emergency-floor',
  templateUrl: './emergency-floor.component.html',
  styleUrls: ['./emergency-floor.component.css']
})
export class EmergencyFloorComponent implements OnInit {

  ngOnInit(): void {
    this.getUsers();
    console.log(this.edoctors);
    console.log(this.nurses);
  }

  edoctors: any[] = [];
  nurses: any[] = [];
  patients: any[] = [ ];

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
              this.edoctors.push(u); 
            }
          }
        )
      }
    )
  }

  getPatients(): void {
    this.patientService.getAll().subscribe (
      (response: Patient[]) => {
        console.log(response);
        response.forEach(
          (p: Patient)=>
          {
            console.log(p);
            this.patients.push(p);
          }
        )
      }
    )
  
  }


  room301: any[] = [];

  room302: any[] = [];

  room303: any[] = [];

  room304: any[] = [];

  room305: any[] = [];

  room306: any[] = [];

  room307: any[] = [];

  room308: any[] = [];

  room309: any[] = [];

  room310: any[] = [];

  room311: any[] = [];

  room312: any[] = [];

  room313: any[] = [];

  room314: any[] = [];

  room315: any[] = [];

  room316: any[] = [];

  room317: any[] = [];

  constructor(public patientService: PatientService, public userService: UserService) {
  }

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

}
