import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Project } from '../../models/project.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ProjectService {

  constructor(private httpClient: HttpClient) { }

  api = "http://localhost:8080"

  public createProject(project: Project): Observable<Project> {
    return this.httpClient.post<Project>(`${this.api}/api/create-project`, project)
  }

  public getProjects(): Observable<Project[]> {
    return this.httpClient.get<Project[]>(`${this.api}/api/get-projects`)
  }

  public getProjectById(id: string): Observable<Project[]> {
    return this.httpClient.get<Project[]>(`${this.api}/api/get-project/${id}`)
  }


}