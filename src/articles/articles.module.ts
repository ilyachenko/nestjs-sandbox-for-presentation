import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ArticlesService } from './articles.service';
import { ArticlesResolver } from './articles.resolver';
import { join } from 'path';
import responseCachePlugin from 'apollo-server-plugin-response-cache';

@Module({
  providers: [ArticlesResolver, ArticlesService],
  imports: [
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
      definitions: {
        path: join(process.cwd(), 'src/articles/graphql.ts'),
      },
      plugins: [responseCachePlugin],
    }),
  ],
})
export class ArticlesModule {}
