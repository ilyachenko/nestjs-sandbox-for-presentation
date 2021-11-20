import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ModuleAModule } from './module-a/module-a.module';
import { ModuleBModule } from './module-b/module-b.module';

@Module({
  imports: [ModuleAModule, ModuleBModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
