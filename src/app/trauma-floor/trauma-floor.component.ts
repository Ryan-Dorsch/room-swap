import { Component, HostListener, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Patient } from '../patients/patient';
import { PatientService } from '../services/patient.service';
import { User } from 'src/app/classes/user';
import { UserService } from '../services/user.service';
import { Subscription } from 'rxjs';







@Component({
  selector: 'app-trauma-floor',
  templateUrl: './trauma-floor.component.html',
  styleUrls: ['./trauma-floor.component.css']
})
export class TraumaFloorComponent implements OnInit{
  // @ViewChild(TemplateRef) _dialogTemplate: TemplateRef<any>;
  // private _overlayRef: OverlayRef;
  // private _portal: TemplatePortal;

  constructor(public patientService: PatientService, public userService: UserService) {
  


  }
  ngOnInit(): void {
    this.getUsers();
    console.log(this.doctors);
    console.log(this.nurses);
  }

  // ngAfterViewInit() {
  //   this._portal = new TemplatePortal(this._dialogTemplate, this._viewContainerRef);
  //   this._overlayRef = this._overlay.create({
  //     positionStrategy: this._overlay.position().global().centerHorizontally().centerVertically(),
  //     hasBackdrop: true
  //   });
  //   this._overlayRef.backdropClick().subscribe(() => this._overlayRef.detach());
  // }

  // ngOnDestroy() {
  //   this._overlayRef.dispose();
  // }

  // openDialog() {
  //   this._overlayRef.attach(this._portal);
  // }





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


  room201: any[] = [];

  room202: any[] = [];

  room203: any[] = [];

  room204: any[] = [];

  room205: any[] = [];

  room206: any[] = [];

  room207: any[] = [];

  room208: any[] = [];

  room209: any[] = [];

  room210: any[] = [];

  room211: any[] = [];

  room212: any[] = [];

  room213: any[] = [];

  room214: any[] = [];

  room215: any[] = [];

  room216: any[] = [];

  room217: any[] = [];

  doctors: any[] = [];
  nurses: any[] = [];

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
