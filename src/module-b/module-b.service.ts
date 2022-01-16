import { Injectable } from '@nestjs/common';
@Injectable()
export class ModuleBService {
  call() {
    console.log('Service B call');
  }
}
