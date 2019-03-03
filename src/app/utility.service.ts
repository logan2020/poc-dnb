import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  public data: BehaviorSubject<any> = new BehaviorSubject(null);

  constructor() { }
}
