import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tool } from '../../models/tool.model';

@Injectable({
  providedIn: 'root'
})
export class ToolService {

  constructor(private httpClient: HttpClient) { }

  api = "http://localhost:8080"

  public createTool(tool: Tool): Observable<Tool> {
    return this.httpClient.post<Tool>(`${this.api}/api/create-tool`, tool)
  }

}
