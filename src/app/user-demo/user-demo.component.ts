import { Component, Inject, OnInit } from '@angular/core';
import { ConfigurableRandomService } from '../services/configurable-random.service';
import { RandomService } from '../services/random.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-demo',
  templateUrl: './user-demo.component.html',
  styleUrls: ['./user-demo.component.css'],
})
export class UserDemoComponent implements OnInit {
  userName: string;
  randomMsg: string;
  configuredRandomMsg: string;

  constructor(
    private userService: UserService,
    private configurableRandomService: ConfigurableRandomService,
    @Inject('API_URL') private apiUrl: string,
    @Inject('RANDOM') private randomService: RandomService
  ) {
  }

  signIn(): void {
    this.userService.setUser({
      name: 'Peter',
    });
    console.log('API URL', this.apiUrl);
    this.userName = this.userService.getUser().name;
    this.randomMsg = `My random is: ${this.randomService.getRandom()}`;
    this.configuredRandomMsg = `My configured random is: ${this.configurableRandomService.getRandom()}`;
  }

  ngOnInit(): void {
  }
}
