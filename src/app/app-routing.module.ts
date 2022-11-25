import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssessmentComponent } from './components/assessment/assessment.component';
import { CompletedassessmentComponent } from './components/completedassessment/completedassessment.component';
import { InstructionsComponent } from './components/instructions/instructions.component';
import { LoginuserComponent } from './components/loginuser/loginuser.component';

const routes: Routes = [
  {path:'login', component:LoginuserComponent},
  {path:'instructions', component:InstructionsComponent},
  {path:'assessment', component:AssessmentComponent},
  {path:'completed', component:CompletedassessmentComponent},
  {path: '',   redirectTo: '/login', pathMatch: 'full'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
