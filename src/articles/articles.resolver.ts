import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ArticlesService } from './articles.service';
import { CreateArticleInput } from './dto/create-article.input';
import { UpdateArticleInput } from './dto/update-article.input';

@Resolver('Article')
export class ArticlesResolver {
  constructor(private readonly articlesService: ArticlesService) {}

  @Mutation('createArticle')
  create(@Args('createArticleInput') createArticleInput: CreateArticleInput) {
    return this.articlesService.create(createArticleInput);
  }

  @Query('articles')
  findAll() {
    return this.articlesService.findAll();
  }

  @Query('article')
  findOne(@Args('id') id: number) {
    return this.articlesService.findOne(id);
  }

  @Mutation('updateArticle')
  update(@Args('updateArticleInput') updateArticleInput: UpdateArticleInput) {
    return this.articlesService.update(
      updateArticleInput.id,
      updateArticleInput,
    );
  }

  @Mutation('removeArticle')
  remove(@Args('id') id: number) {
    return this.articlesService.remove(id);
  }
}
