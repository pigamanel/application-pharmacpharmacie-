import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent {
  @Output() StudentToAdd: EventEmitter<any> = new EventEmitter();

  handleAdd(myForm: NgForm) {
    this.StudentToAdd.emit(myForm.value);
    myForm.reset();
  }
}
