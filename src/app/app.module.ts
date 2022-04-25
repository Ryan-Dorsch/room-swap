import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatNativeDateModule} from '@angular/material/core';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { MaterialExampleModule } from 'src/material.module';
import { RoomSwapComponent } from './room-swap/room-swap.component';


@NgModule({
  declarations: [
    AppComponent,
    RoomSwapComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSliderModule,
    BrowserAnimationsModule,
    MatNativeDateModule,
    FormsModule,
    HttpClientModule,
    MaterialExampleModule,
    ReactiveFormsModule,
  ],
  providers: [DragDropModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
