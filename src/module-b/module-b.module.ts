import { Module } from '@nestjs/common';
import { ModuleBService } from './module-b.service';

@Module({
  providers: [ModuleBService],
  exports: [ModuleBService],
})
export class ModuleBModule {}
