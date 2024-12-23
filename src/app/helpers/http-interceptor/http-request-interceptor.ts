import {
  HTTP_INTERCEPTORS,
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

// NOTES:
// HttpInterceptor has intercept() method to inspect and
// transform HTTP requests before they are sent to server.

// HttpRequestInterceptor implements HttpInterceptor.
// We’re gonna add withCredentials: true to make browser include
// Cookie on the Request header (HttpOnly Cookie).

@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {

    // need to setup the correct session object and item name
    const token = sessionStorage.getItem("session-token");

    // need to add if statement for the token
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`, // Assuming you're using Bearer token for authentication
      },
      withCredentials: true,
    });
    return next.handle(req);
  }
}

export const httpInterceptorProviders = [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: HttpRequestInterceptor,
    multi: true,
  },
];
