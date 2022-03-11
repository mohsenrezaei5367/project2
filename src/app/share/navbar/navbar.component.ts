import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MessageSubjectService } from 'src/app/share-message/message-subject.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  animations: [
    trigger('openClose', [
      // ...
      state('open', style({
        right: '0'
      
      })),
      state('closed', style({
        right: '-100%'
      })),
      transition('open => closed', [
        animate('1s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
      transition('* => closed', [
        animate('0.5s')
      ]),
      transition('* => open', [
        animate('0.5s')
      ]),
      transition('open <=> closed', [
        animate('0.5s')
      ]),
      transition ('* => open', [
        animate ('0.5s',
          style ({ opacity: '*' }),
        ),
      ]),
      transition('* => *', [
        animate('0.5s')
      ]),
    ]),
  ],
})
export class NavbarComponent implements OnInit , OnDestroy{
  isOpenNavbar: boolean =false
  subscription:Subscription | any
  
  constructor(private messageSubject:MessageSubjectService) { }
 

  ngOnInit(): void {
   this.subscription= this.messageSubject.toggleNavbar.subscribe({
      next:(res)=>{this.isOpenNavbar=res}
    })
  }

  closeNavbar(){
    this.isOpenNavbar=false
  }
  ngOnDestroy(): void {
    
    this.subscription.unsubscribe()
  }
}
