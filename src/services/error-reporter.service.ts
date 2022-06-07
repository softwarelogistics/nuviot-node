
import { BehaviorSubject, Observable } from 'rxjs';


export class ErrorReporterService {

  constructor() { }
  private _errorMsgs: Core.ErrorMessage[] = [];
  protected _errorMsgs$ = new BehaviorSubject<Core.ErrorMessage[]>(this._errorMsgs);

  onErrMsgs(): Observable<Core.ErrorMessage[]> {
    return this._errorMsgs$.asObservable();
  }

  addErrors(errs: Core.ErrorMessage[]) {
    this._errorMsgs$.next(errs);
  }

  addError(err: Core.ErrorMessage) {
    this._errorMsgs$.next([err]);
  }

  addErrorMessage(msg: string) {
    this._errorMsgs$.next([{
      message: msg
    }]);
  }

  addMessage(msg: string) {
    this.addError({ message: msg });
  }

  addMessages(msgs: string[]) {
    const errs = [];
    for (const msg of msgs) {
      errs.push({ message: msg });
    }

    this.addErrors(errs);
  }

  clearErrors() {
    this._errorMsgs$.next(null);
  }
}
