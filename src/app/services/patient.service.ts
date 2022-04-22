import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Patient } from 'src/app/patients/patient';
import { Room } from 'src/app/room';
import { RoomDto } from 'src/app/room-dto';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': 'http://localhost:4200/'
  })
};

@Injectable({
  providedIn: 'root'
})

export class PatientService {

  private backendUrl = 'http://localhost:8094/wellnet/patient'
  public patient!: Patient;  
  public room!: RoomDto;
  constructor(private router: Router, private http: HttpClient) {
 
  }

  createPatient(patient : Patient){

    return this.http.post<Patient>('http://localhost:8094/wellnet/patient', patient).subscribe((response : any) => {console.log(response)});
  }

  getAllergies(){
    return this.http.get<Object[]>('http://localhost:8094/wellnet/patient/allergies');
  }

  getVaccinations(){
    return this.http.get<Object[]>('http://localhost:8094/wellnet/patient/vaccinations');

  }

  getBloodType(name :string){
    return this.http.get<Object[]>('http://localhost:8094/wellnet/patient/bloodtype/'+name);
  }

  getSex(name :string){
    return this.http.get<Object[]>('http://localhost:4200/wellnet/patient/sex/'+name);

  }

  getPatient(firstName: string, lastName: string, dob: Date): Observable<Patient>{
    return this.http.get<Patient>(this.backendUrl+"?firstname="+firstName+"&lastname="+lastName+"&dob="+dob, httpOptions) as Observable<Patient>;
  }

  createAllergy(allergy : string){

    return this.http.post<string>('http://localhost:4200/wellnet/patient/allergies', allergy).subscribe((response : any) => {console.log(response)});
  }

  createVaccination(vaccine : string){

    return this.http.post<string>('http://localhost:4200/wellnet/patient/vaccinations', vaccine).subscribe((response : any) => {console.log(response)});
  }

  deleteAllergy(oldAllergies : string[]){
    
    for(let i of oldAllergies){
      console.log(i)
      this.http.delete('http://localhost:4200/wellnet/patient/allergies/'+i).subscribe((response : any) => {console.log(response)});
      
      }
  }

 deleteVaccine(oldVaccines :string[]){

    for(let i of oldVaccines){
      console.log(i)
    this.http.delete('http://localhost:4200/wellnet/patient/vaccinations/'+i).subscribe((response : any) => {console.log(response)});
    }
  }

  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
}


// http://localhost:4200/wellnet/patient?firstname=Captain&lastname=America&dob=1920-03-31

  diagnosePatient(patient: Patient) {
    this.patient = patient;

    this.router.navigate(["rooms"]);
  }}