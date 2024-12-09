import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProjectRefetchService {
  private projectRefetchTrigger = new BehaviorSubject<any>('');
  constructor() {}

  refetch$ = this.projectRefetchTrigger.asObservable();

  triggerRefetch() {
    this.projectRefetchTrigger.next('');
  }
}
