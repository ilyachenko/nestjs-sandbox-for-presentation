import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ArticlesService } from './articles.service';
import { ArticlesResolver } from './articles.resolver';
import { join } from 'path';

@Module({
  providers: [ArticlesResolver, ArticlesService],
  imports: [
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
      definitions: {
        path: join(process.cwd(), 'src/articles/graphql.ts'),
      },
    }),
  ],
})
export class ArticlesModule {}
