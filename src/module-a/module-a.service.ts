import { Injectable } from '@nestjs/common';
import { ModuleBService } from '../module-b/module-b.service';

@Injectable()
export class ModuleAService {
  constructor(private moduleBService: ModuleBService) {}

  getName() {
    this.moduleBService.call();
    return 'Service A is here';
  }
}
