import { Module } from '@nestjs/common';
import { ModuleBModule } from 'src/module-b/module-b.module';
import { ModuleAService } from './module-a.service';

@Module({
  imports: [ModuleBModule],
  providers: [ModuleAService],
  exports: [ModuleAService],
})
export class ModuleAModule {}
