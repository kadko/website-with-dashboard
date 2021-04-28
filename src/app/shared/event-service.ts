import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable(
	{providedIn: 'root'}
)
export class EventService<T>{

  public event$: Subject<T> = new BehaviorSubject({} as T);
  
  constructor() { }
  
  public setCurrentPage(message: any){
    this.event$.next(message);
  }

  public getCurrentPage(): Observable<any>{
    return this.event$.asObservable();
  }
 
}
