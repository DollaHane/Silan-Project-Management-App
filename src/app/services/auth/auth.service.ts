import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Session } from '../../models/session.model';
import { LoginCredentials } from '../../models/login.model';
import { response } from 'express';
import { map, Observable } from 'rxjs';
import { LoginResponse } from '../../types/loginResponse';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }
  
    api = "http://localhost:8080"
  
    // public login( loginCredentials: LoginCredentials): Observable<LoginCredentials> {
    //   console.log('Login Credentials:', loginCredentials)
    //   return this.httpClient.post<LoginCredentials>(`${this.api}/api/auth-login`, loginCredentials)
    // }

    public login( loginCredentials: LoginCredentials): Observable<string> {
      console.log('Login Credentials:', loginCredentials)
      return this.httpClient.post<LoginCredentials>(`${this.api}/api/auth-login`, loginCredentials, {
        observe: 'response'
      }).pipe(

        // Get the session token from the header sent by the server.
        map((response: HttpResponse<any>) => {
          const authHeader = response.headers.get('Authorization');
          const user: LoginResponse = response.body
          if (authHeader) {
            const session = {
              token: authHeader,
              id: user.id,
              email: user.email,
              name: user.name
            }
            sessionStorage.setItem("session", JSON.stringify(session))
            return authHeader;
          } else {
            throw new Error('No token found')
          }
        })
      )
    }

    public authStatus() {
      sessionStorage.getItem
    }



}
