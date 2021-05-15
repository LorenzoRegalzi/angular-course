import { Observable, throwError } from 'rxjs';

export class AppError {
    constructor(){

    }
    handleError(error:any) {
        let errorMessage = '';
        // if (error.status === 404)
        //     alert('different type of message for differente type of error code')
        if (error.error instanceof ErrorEvent) {
      
          // client-side error
      
          errorMessage = `Error: ${error.error.message}`;
      
        } else {
      
          // server-side error
      
          errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
      
        }
      
        window.alert(errorMessage);
      
        return throwError(errorMessage);
      
      }
}