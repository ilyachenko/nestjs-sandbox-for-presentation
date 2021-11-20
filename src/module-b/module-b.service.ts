import { Injectable } from '@nestjs/common';

function Color() {
  return function (target) {};
}

@Injectable()
@Color()
export class ModuleBService {
  call() {
    console.log('Service B call');
  }
}
