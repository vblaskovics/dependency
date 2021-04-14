import { NgModule } from '@angular/core';
import {CommonModule } from '@angular/common';

import { UserService } from '../services/user.service';

@NgModule({
    imports: [
        CommonModule
    ],
    providers: [
        // UserService,
        {provide: UserService, useClass: UserService},
        {provide: 'API_URL', useValue: 'http://localhost:4200'}
    ],
    declarations: []
})
export class UserDemoModule {}