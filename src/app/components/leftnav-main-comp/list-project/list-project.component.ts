import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectService } from '../../../services/project/project.service';
import { Subscription } from 'rxjs';
import { ProjectRefetchService } from '../../../services/project/project-refetch.service';

@Component({
  selector: 'app-list-project',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-project.component.html',
})
export class ListProjectComponent implements OnInit, OnDestroy {
  projectData = signal<any[]>([]);
  projectTitle: string = '' 

  private projectRefetchSubscription!: Subscription;

  constructor(
    private projectService: ProjectService,
    private projectRefetchService: ProjectRefetchService
  ) {
    // this.getProjectList();
  }

  ngOnInit(): void {
    // this.projectRefetchSubscription =
    //   this.projectRefetchService.refetch$.subscribe(() => {
    //     this.getProjectList();
    //   });
  }

  // public getProjectList() {
  //   return this.projectService.getProjects().subscribe((projects) => {
  //     this.projectData.set(projects)
  //   })
  // }

  ngOnDestroy(): void {
    if (this.projectRefetchSubscription) {
      this.projectRefetchSubscription.unsubscribe();
    }
  }
}
