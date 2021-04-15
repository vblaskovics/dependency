import { NgModule } from '@angular/core';
import {CommonModule } from '@angular/common';

import { UserService } from '../services/user.service';
import { RandomService } from '../services/random.service';

@NgModule({
    imports: [
        CommonModule
    ],
    providers: [
        UserService,
        // {provide: UserService, useClass: UserService},
        {provide: 'API_URL', useValue: 'http://localhost:4200'},
        {provide: 'RANDOM', useClass: RandomService},
    ],
    declarations: []
})
export class UserDemoModule {}