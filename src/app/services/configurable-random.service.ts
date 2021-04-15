import { Injectable } from '@angular/core';
import { RandomGenerator } from '../random.interface';

@Injectable()
export class ConfigurableRandomService {
    constructor(private generator: RandomGenerator) {}

    getRandom():number {
        return this.generator.rand();
    }
}
