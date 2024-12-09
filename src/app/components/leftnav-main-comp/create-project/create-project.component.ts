import { Component } from '@angular/core';
import { LucideAngularModule, SquarePlus } from 'lucide-angular';
import { NgFor, NgIf } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProjectService } from '../../../services/project/project.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ProjectRefetchService } from '../../../services/project/project-refetch.service';

@Component({
  selector: 'app-create-project',
  standalone: true,
  imports: [LucideAngularModule, NgFor, NgIf, ReactiveFormsModule],
  templateUrl: './create-project.component.html',
})
export class CreateProjectComponent {
  readonly SquarePlus = SquarePlus;

  constructor(
    private projectRefetchService: ProjectRefetchService,
    private projectService: ProjectService,
    private formBuilder: FormBuilder
  ) {
    this.projectForm = this.formBuilder.group({
      title: ['', Validators.required],
      poNumber: ['', Validators.required],
      jobNumber: ['', Validators.required],
      value: ['', [Validators.required, Validators.min(0)]],
    });
  }

  ngOnInit(): void {}

  // MODAL FUNCTIONS
  modalOpen: boolean = false;

  activateModal() {
    if (this.modalOpen === false) {
      this.modalOpen = true;
    } else {
      this.modalOpen = false;
      this.projectForm.reset();
    }
  }

  // FORM FUNCTIONS
  projectForm: FormGroup;

  createProject(): void {
    const project = Object.assign({}, this.projectForm.value);

    if (this.projectForm.invalid) {
      return;
    }

    this.projectService.createProject(project).subscribe({
      next: () => {
        this.projectRefetchService.triggerRefetch();
        console.log('Refetch triggered');
        this.projectForm.reset();
        this.modalOpen = false;
      },
      error: (error: HttpErrorResponse) => {
        console.log('Error creating project:', error);
      },
    });
  }
}
