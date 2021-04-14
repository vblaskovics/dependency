import { Component, Inject, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-demo',
  templateUrl: './user-demo.component.html',
  styleUrls: ['./user-demo.component.css'],
})
export class UserDemoComponent implements OnInit {
  userName: string;

  constructor(
    private userService: UserService,
    @Inject('API_URL') private apiUrl: string
  ) {}

  signIn(): void {
    this.userService.setUser({
      name: 'Peter',
    });
    console.log('API URL', this.apiUrl);
    this.userName = this.userService.getUser().name;
  }

  ngOnInit(): void {}
}
