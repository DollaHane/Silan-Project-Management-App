import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../../models/user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(private httpClient: HttpClient) { }

  api = "http://localhost:8080"

  public createUser(user: User): Observable<User> {
    return this.httpClient.post<User>(`${this.api}/api/save-users`, user)
  }

  public getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(`${this.api}/api/get-users`)
  }


}
