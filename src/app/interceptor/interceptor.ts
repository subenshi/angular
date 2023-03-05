import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent }
  from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class Interceptor implements HttpInterceptor {
    intercept(req : HttpRequest<any>, next : HttpHandler) : Observable<HttpEvent<any>> {
      return next.handle(req);
    }
}