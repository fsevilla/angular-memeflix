import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/common/data-types/user';
import { UserService } from './user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  dataSource:User[];

  settings:any = {
    columns: [
      { name: 'name', title: 'Full Name', property: 'name' },
      { name: 'email', title: 'Email', property: 'email' }
    ]
  }

  constructor(private userService:UserService) { }

  ngOnInit() {
    this.userService.getUsers()
    .then(response => {
      this.dataSource = response;
    })
    .catch(err => {
      console.error(err);
    });
  }

}
