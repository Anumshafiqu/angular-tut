import { HttpInterceptorFn } from '@angular/common/http';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  // an Interceptor is a special service that lets you intercept and modify HTTP requests or responses 
  // before they reach your components or the server.
  // An interceptor is like a middleware that runs before or after each HTTP call. 
  // It’s useful for things like authentication, logging, and error handling — all in one centralized place
  const token = localStorage.getItem("authguardToken");
  const newReq = req.clone({
    setHeaders:{
      authorization : `Bearer ${token}`
    }
  })
  return next(newReq);
};
