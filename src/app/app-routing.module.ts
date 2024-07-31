import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClassroomComponent } from './classroom/classroom.component';
import { StudentComponent } from './student/student.component';

const routes: Routes = [
  { path: 'classroom', component: ClassroomComponent },
  { path: 'student/:id', component: StudentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
