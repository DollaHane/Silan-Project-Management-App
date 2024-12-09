import { Component, ViewChild } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { CreateProjectComponent } from '../create-project/create-project.component';
import { ListProjectComponent } from '../list-project/list-project.component';
import { Project } from '../../../models/project.model';

@Component({
  selector: 'app-leftnav-main',
  standalone: true,
  imports: [NgFor, NgIf, CreateProjectComponent, ListProjectComponent],
  templateUrl: './leftnav-main.component.html',
})
export class LeftnavMainComponent {

  @ViewChild(ListProjectComponent) listProjectComponent!: ListProjectComponent;

  onProjectCreated(project: Project) {
    if (this.listProjectComponent) {
      this.listProjectComponent.getProjectList(); 
    }
  }

}
