import { Component, Inject, OnInit } from '@angular/core';
import { RandomService } from '../services/random.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-demo',
  templateUrl: './user-demo.component.html',
  styleUrls: ['./user-demo.component.css'],
})
export class UserDemoComponent implements OnInit {
  private userService: UserService;
  userName: string;
  randomMsg: string;

  constructor(
    userService: UserService,
    @Inject('API_URL') private apiUrl: string,
    @Inject('RANDOM') private randomService: RandomService
  ) {
    this.userService = userService;
  }

  signIn(): void {
    this.userService.setUser({
      name: 'Peter',
    });
    this.randomMsg = `My random is: ${this.randomService.getRandom()}`;
    console.log('API URL', this.apiUrl);
    this.userName = this.userService.getUser().name;
  }

  ngOnInit(): void {
  }
}
