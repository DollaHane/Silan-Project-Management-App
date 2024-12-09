import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProjectService } from '../services/project/project.service';
import { CommonModule, NgFor } from '@angular/common';
import { CreateToolComponent } from '../components/dashboard-tool/create-tool/create-tool.component';
import { ProjectRefetchService } from '../services/project/project-refetch.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, NgFor, CreateToolComponent],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {
  projectId!: string;
  project: any | undefined;
  private projectRefetchSubscription!: Subscription;

  constructor(
    private projectRefetchService: ProjectRefetchService,
    private route: ActivatedRoute,
    private projectService: ProjectService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.projectId = params.get('id')!;
    });
    this.getProjectById();
    this.projectRefetchSubscription =
      this.projectRefetchService.refetch$.subscribe(() => {
        this.getProjectById();
      });
  }

  public getProjectById() {
    return this.projectService
      .getProjectById(this.projectId)
      .subscribe((project) => {
        this.project = project;
      });
  }

  ngOnDestroy(): void {
    if (this.projectRefetchSubscription) {
      this.projectRefetchSubscription.unsubscribe();
    }
  }
}
