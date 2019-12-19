import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/common/data-types/user';
import { UserService } from './user.service';

const USER_DATA: User[] = [
  { name: 'John Doe', email: 'john.doe@email.com' },
  { name: 'Sam Smith', email: 'sam.smith@email.com', role: 'Admin' },
];

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  displayedColumns: string[] = ['name', 'email', 'role'];
  dataSource = USER_DATA;

  constructor(private userService:UserService) { }

  ngOnInit() {
    this.userService.getUsers()
    .then(response => {
      console.log('Users: ', response);
    })
    .catch(err => {
      console.error(err);
    });
  }

}
