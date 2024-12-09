import { Component } from '@angular/core';
import { LucideAngularModule, Plus } from 'lucide-angular';
import { NgFor, NgIf } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToolService } from '../../../services/tool/tool.service';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { ProjectRefetchService } from '../../../services/project/project-refetch.service';


@Component({
  selector: 'app-create-tool',
  standalone: true,
  imports: [LucideAngularModule, NgFor, NgIf, ReactiveFormsModule],
  templateUrl: './create-tool.component.html',
})
export class CreateToolComponent {
  readonly Plus = Plus;
  projectId!: string;

  constructor(
    private projectRefetchService: ProjectRefetchService,
    private route: ActivatedRoute,
    private toolService: ToolService,
    private formBuilder: FormBuilder,
  ) {
    this.toolForm = this.formBuilder.group({
      toolNumber: ['', Validators.required],
      title: ['', Validators.required],
      description: ['', Validators.required]
    })
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.projectId = params.get('id')!;
    });
  }

  // MODAL FUNCTIONS
  modalOpen: boolean = false;

  activateModal() {
    if (this.modalOpen === false) {
      this.modalOpen = true;
    } else {
      this.modalOpen = false;
      this.toolForm.reset();
    }
  }

  // FORM FUNCTIONS
  toolForm: FormGroup;

  createTool(): void {
    
    const tool = {
      ...this.toolForm.value,
      projectParentId: this.projectId
    };

    console.log('tool:', tool)

    if (this.toolForm.invalid) {
      console.log('Invalid form submittion', )
      return;
    }

    this.toolService.createTool(tool).subscribe({
      next: (response) => {
        console.log('response:', response)
        this.projectRefetchService.triggerRefetch();
        this.toolForm.reset();
        this.modalOpen = false;
      },
      error: (error: HttpErrorResponse) => {
        console.log('Error creating tool:', error)
      }
    });
  }
}
