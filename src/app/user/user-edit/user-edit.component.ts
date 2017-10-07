import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  @Input() user: User;
  @Output() updateUserEvent = new EventEmitter();
  userEdit: User = new User();

  constructor() { }

  ngOnInit() {
    Object.assign(this.userEdit, this.user)   
  }

  update(){
    this.updateUserEvent.emit({original: this.user, updated: this.userEdit});
  }
}
