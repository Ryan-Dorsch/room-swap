import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { RoomSwapComponent } from './room-swap/room-swap.component';
import {HttpClientModule} from '@angular/common/http';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';

import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MaterialExampleModule } from 'src/material.module';


@NgModule({
  declarations: [
    AppComponent,
    RoomSwapComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    DragDropModule,
    
    MatSliderModule,
    MaterialExampleModule,
    MatNativeDateModule,
    ReactiveFormsModule,
  ],

  entryComponents: [RoomSwapComponent],
  providers: [DragDropModule],
  bootstrap: [AppComponent, RoomSwapComponent]
})
export class AppModule { }


