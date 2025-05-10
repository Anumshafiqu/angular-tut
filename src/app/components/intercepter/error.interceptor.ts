import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { CustomerService } from '../../services/customer.service';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const custService = inject(CustomerService);
  return next(req).pipe(
    catchError((error:HttpErrorResponse)=>{
      debugger;
      if(error.status === 401){
        const isContinue = confirm("Are You Sure You Want to Contine");
        if(isContinue) {
          custService.tokenEpired$.next(true);
        }
      }
      return throwError(error);
    })
  )
};
