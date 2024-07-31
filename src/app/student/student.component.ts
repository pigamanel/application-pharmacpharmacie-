import { Component, Input } from '@angular/core';
import { ApprenantService } from '../apprenant.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})
export class StudentComponent {
  handleDelete() {
    throw new Error('Method not implemented.');
  }

  @Input() student: any
  constructor(private apprenantService: ApprenantService,
    private router: ActivatedRoute) { }
  id: any;
  ngOnInit() {
    this.router.paramMap.subscribe(params => {
      this.id = params.get('id');
      this.apprenantService.getOne(+this.id).subscribe((data) => this.student = data);
    });
  }
}
