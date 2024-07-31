import { Component, OnInit } from '@angular/core';
import { ApprenantService } from '../apprenant.service';
import { Apprenant } from '../apprenant';




@Component({
  selector: 'app-classroom',
  templateUrl: './classroom.component.html',
  styleUrl: './classroom.component.css'
})
export class ClassroomComponent implements OnInit {
  constructor(private apprenantService: ApprenantService) { }
  nom = 'JS DEV';
  students: any
  ngOnInit(): void {
    this.students = this.apprenantService.getAll().subscribe(data => this.students = data);

  }

  deleteStudent(student: any) {
    this.students = this.students.filter((elt: any) => elt !== student);
  }

  addStudent(student: any) {
    this.apprenantService.addApprenant(student).subscribe(
      res => {
        console.log(res);
        this.apprenantService.getAll().subscribe(
          data => this.students = data
        );
      },
      err => console.log(err)
    );
  }
}
