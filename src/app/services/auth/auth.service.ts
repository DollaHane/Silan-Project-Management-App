import { Inject, Injectable, PLATFORM_ID } from "@angular/core";
import { HttpClient, HttpErrorResponse, HttpEventType, HttpHeaders, HttpResponse } from "@angular/common/http";
import { Session } from "../../models/session.model";
import { LoginCredentials } from "../../models/login.model";
import { catchError, map, Observable, throwError } from "rxjs";
import { LoginResponse } from "../../types/loginResponse";
import { Router } from "@angular/router";
import { isPlatformBrowser } from "@angular/common";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  constructor(private httpClient: HttpClient, private router: Router, @Inject(PLATFORM_ID) private platformId: Object) {}

  api = "http://localhost:8080";

  // CREATE SESSION -> LOGIN
  public signin(loginCredentials: LoginCredentials): Observable<string> {
    return this.httpClient
      .post<LoginCredentials>(`${this.api}/api/auth-login`, loginCredentials, {
        observe: "response",
      })
      .pipe(
        map((response: HttpResponse<any>) => {
          const sessionToken = response.headers.get("Auth-token");
          const sessionId = response.headers.get("Auth-sessionId");
          const loginResponse: LoginResponse = response.body;
          if (sessionToken && sessionId) {
            const session: Session = {
              id: sessionId,
              userId: loginResponse.userId,
              name: loginResponse.name,
              email: loginResponse.email,
              token: sessionToken,
              expiration: loginResponse.expiration,
            };
            sessionStorage.setItem("session", JSON.stringify(session));
            this.router.navigate([""]);
            return "Signin successful";
          } else {
            throw new Error("No token found");
          }
        }),
        catchError((error: HttpErrorResponse) => {
          console.error("Error signing in:", error)
          if (error.error instanceof ErrorEvent) {
            return throwError(() => {new Error("Error signing in")})
          } else {
            return throwError(() => {new Error("Internal server error" + error.status + "Error message:" + error.message)})
          }
        })
      );
  }

  // SIGNOUT -> DELETE SESSION
  public Signout() {
    const session: Session | null = this.GetSession()


    if (session !== null) {
      this.DeleteSessionData()
    }
  }

  // GET SESSION
  public GetSession<Session>() {
    if (isPlatformBrowser(this.platformId)) {
      const sessionStore = window.sessionStorage.getItem("session");
      if (sessionStore !== null) {
        const session: Session = JSON.parse(sessionStore);
        return session;
      } else {
        return null;
      }
    } else {
      return null
    }
  }

  // DELETE SESSION
  public DeleteSessionData(): Observable<string> {
    const headers: HttpHeaders = new HttpHeaders();
    const session: Session | null = this.GetSession();

    console.log('session in delete session service', session)

    if (session !== null) {
      headers.append("auth-token", session.token);
      headers.append("auth-sessionId", session.id);
    }

    return this.httpClient
      .delete(`${this.api}/auth-rm-session`, {
        observe: "response",
        headers: headers,
      })
      .pipe(
        map((response: HttpResponse<any>) => {
          console.log('delete session res', response)
          window.sessionStorage.clear();
          this.router.navigate(["auth/signin"]);
          return `Session deleted successfully, clearing client session state:, ${response}`;
        }),
        catchError((error: HttpErrorResponse) => {
          console.error("Failed to delete session, clearing client session state:", error);
          window.sessionStorage.clear();
          this.router.navigate(["auth/signin"]);
          if (error.error instanceof ErrorEvent) {
            return throwError(() => {new Error("Error deleting session")})
          } else {
            return throwError(() => {new Error("Internal server error" + error.status + "Error message:" + error.message)})
          }
        })
      )
  }

  // CHECK SESSION
  public CheckSessionStatus() {
    const session: Session | null = this.GetSession();
    if (session !== null) {
      const checkDate =
        new Date(session.expiration).getTime() -
        new Date(new Date().toISOString()).getTime();

      if (checkDate < 0) {
        console.log("Check Session: Session expired, please login");
        this.DeleteSessionData().subscribe()
      } else {
        console.log('Check Session: Session is valid: ', session)
      }
    } else {
      console.log('Check Session: Session not found')
      this.DeleteSessionData().subscribe()
    }
  }
}
