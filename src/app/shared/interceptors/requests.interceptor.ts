import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, finalize, Observable, of } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class RequestsInterceptor implements HttpInterceptor {

  constructor (private spinner: NgxSpinnerService, private toastr: ToastrService) { }

  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    let request = req.clone({
      setHeaders: {
        'Authorization': `Bearer ${ localStorage.getItem('accessToken') || '' }`,
        'Lang': `${ localStorage.getItem('lang') || '' }`,
      },

    });
    this.spinner.show();
    return next.handle(request).pipe(
      catchError((err, caught: Observable<HttpEvent<any>>) => {
        if (err instanceof HttpErrorResponse && err.status == 401) {


        }
        else if (err instanceof HttpErrorResponse && err.status == 500) {
          this.spinner.hide();

        }
        else if (err instanceof HttpErrorResponse && err.status == 400) {


        }
        else if (err instanceof HttpErrorResponse && err.status == 404) {
          this.spinner.hide();

        }
        else {
          this.spinner.hide();

        }
        console.log("err", err)
        throw err;
      }),
      finalize(() => {
        this.spinner.hide();
      })


    );
  }
}


