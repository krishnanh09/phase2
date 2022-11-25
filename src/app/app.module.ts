import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginuserComponent } from './components/loginuser/loginuser.component';
import { InstructionsComponent } from './components/instructions/instructions.component';
import { AssessmentComponent } from './components/assessment/assessment.component';
import { CompletedassessmentComponent } from './components/completedassessment/completedassessment.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginuserComponent,
    InstructionsComponent,
    AssessmentComponent,
    CompletedassessmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
