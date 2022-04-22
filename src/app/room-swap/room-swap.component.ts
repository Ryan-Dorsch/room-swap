import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-room-swap',
  templateUrl: './room-swap.component.html',
  styleUrls: ['./room-swap.component.css']
})

export class RoomSwapComponent {


  todo = [
    'Patient Nico',
    'Patient 2',
    'Patient 3',
    'pateient 4'
  ];

  done = [
    'steven',
    'jacob',
    'ryan',

  ];
  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

  // getRooms(){

  //   this.roomService.getAllRooms().subscribe(roomList => {
  //     console.log(JSON.stringify(roomList));
  //     roomList.forEach((room: any) => {
  //       //mismatch between frontend and backend representations of rooms requires this constructor stuff
  //       this.rooms[room.roomNumber-1] = (new Room(room.roomId, room.roomNumber, new Area(room.area.id, room.area.name), 1, [], false));
  //     });
  //   });

  //   // populating rooms with current patients
  //   this.diagService.getAllDiagnosisForms().subscribe(diags => {
  //     if(diags == null){
  //       console.log('diags is null')
  //       this.waitingroom.push(this.patientService.patient.patientId + ' - ' + this.patientService.patient.firstName + ' ' + this.patientService.patient.lastName);
  //     }
  //     else{console.log("populate wating room");
  //           this.waitingroom.push(this.patientService.patient.patientId + ' - ' + this.patientService.patient.firstName + ' ' + this.patientService.patient.lastName);
  //     console.log("below if statement")
  //     diags.forEach(diag => {
  //       console.log(diag);
  //       if(!diag.resolutionStatus){ //resolutionStatus = false means that the patient is still in the room;
  //         if(diag.room){
  //           this.rooms[diag.room.roomNumber - 1].patients.push(diag.patient.patientId + ' - ' + diag.patient.firstName + ' ' + diag.patient.lastName);
  //           this.rooms[diag.room.roomNumber - 1].roomStatus = 2;

  //         }

  //       } 


  //     });}
  //   });
  // }

  //   drop(event: CdkDragDrop<string[]>) {
  //     if (event.previousContainer === event.container) {
  //       moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);

  //     } else {

  //       let newRoom = event.container.element.nativeElement.dataset.rn;

  //       if(event.container.data.length > 0 && Number(newRoom) > 0){
  //         this.log = "Room " + newRoom + " is occupied.";
  //         return;
  //       }

  //       transferArrayItem(
  //         event.previousContainer.data,
  //         event.container.data,
  //         event.previousIndex,
  //         event.currentIndex
  //       );

  //       let p:string = event.container.data[0];
  //       let pid:number = Number(p.substring(0, p.indexOf(' - ')));




  //       let newindex:number = Number(newRoom) - 1;
  //       let previndex:number = Number(event.previousContainer.element.nativeElement.dataset.rn) - 1;
  //       console.log(newindex);
  //       if(previndex >= 0){
  //         this.rooms[previndex].roomStatus = 1; 
  //       }
  //       if(newindex >= 0){
  //         this.rooms[newindex].roomStatus = 2;
  //         this.updateDForm(pid, newindex);

  //         this.log = "Patient assigned to room " + newRoom;
  //         //this.router.navigate(['diagnosis']);
  //         this.showLink =  false;
  //       }else{
  //         this.log = "Patient returned to waiting room";
  //         this.showLink =  true;
  //       }
  //     }
  //   }

  //   updateDForm(pid:number, newindex:number){
  //     let newr:Room = this.rooms[newindex];
  //             console.log(newr);
  //             let newrDto:RoomDto = new RoomDto(newr.roomNumber, newr.roomNumber, newr.area);
  //             console.log(newrDto);
  //             console.log(newr.area);
  //             this.patientService.room=newrDto;
  //             console.log(this.patientService.room);
  //   }

  // }

}