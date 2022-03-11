import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageSubjectService {

  toggleNavbar=new Subject<boolean>()

  constructor() { }
}
