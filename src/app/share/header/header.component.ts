import { Component, OnInit } from '@angular/core';
import { MessageSubjectService } from 'src/app/share-message/message-subject.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
toggleNav:boolean=true
  constructor(private messageSubject:MessageSubjectService) { }

  ngOnInit(): void {
  }

  onToggleVavbar(){
    this.toggleNav=!this.toggleNav
    this.messageSubject.toggleNavbar.next(this.toggleNav)
  
    }

}
