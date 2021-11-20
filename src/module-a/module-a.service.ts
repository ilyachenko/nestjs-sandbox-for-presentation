import { Injectable } from '@nestjs/common';
import { ModuleBService } from '../module-b/module-b.service';

@Injectable()
export class ModuleAService {
  private moduleBService: ModuleBService;

  constructor(moduleBService: ModuleBService) {
    this.moduleBService = moduleBService;
  }

  getName() {
    this.moduleBService.call();
    return 'Service A is here';
  }
}
