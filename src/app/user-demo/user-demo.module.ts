import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserService } from '../services/user.service';
import { RandomService } from '../services/random.service';
import { ConfigurableRandomService } from '../services/configurable-random.service';
import { RandomGenerator } from '../random.interface';
import { GeneratorService } from '../services/generator.service';

const generator1: RandomGenerator = {
  rand: (): number => {
    return Math.random();
  },
};
const generator2: RandomGenerator = {
  rand: (): number => {
    return Math.floor(Math.random() * 10) + 1;
  },
};

@NgModule({
  imports: [CommonModule],
  providers: [
    UserService,
    GeneratorService,
    // {provide: UserService, useClass: UserService},
    { provide: 'API_URL', useValue: 'http://localhost:4200' },
    { provide: 'RANDOM', useClass: RandomService },
    {
      provide: ConfigurableRandomService,
      deps: [GeneratorService],
      useFactory(generatorService: GeneratorService) {
        return new ConfigurableRandomService(generatorService.getGeneartor());
      },
    },
  ],
  declarations: [],
})
export class UserDemoModule {}
