import { Injectable } from '@angular/core';
import { RandomGenerator } from '../random.interface';

const generator1:RandomGenerator = {
    rand: ():number => {
        return Math.random();
    }
}
const generator2:RandomGenerator = {
    rand: ():number => {
        return Math.floor(Math.random()*10) + 1;
    }
}

@Injectable()
export class GeneratorService {
    getGeneartor():RandomGenerator {
        return generator2;
    }
}