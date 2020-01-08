import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgProgressHttpClientModule } from '@ngx-progressbar/http-client';
import { NgProgressModule } from '@ngx-progressbar/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GoalDetailComponent } from './goal-detail/goal-detail.component';
//import { GoalComponent } from './goal/goal.component';

@NgModule({
  declarations: [
    AppComponent,
    GoalDetailComponent,
    //GoalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgProgressModule.forRoot(),
    NgProgressHttpClientModule
   // HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
