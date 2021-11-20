import { Injectable } from '@nestjs/common';
import { ModuleAService } from './module-a/module-a.service';

@Injectable()
export class AppService {
  constructor(private moduleAService: ModuleAService) {
    console.log(this.moduleAService.getName());
  }

  getHello(): string {
    return 'Hello World!';
  }
}
