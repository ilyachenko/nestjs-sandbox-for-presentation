import { Controller, Get, Param, Post } from '@nestjs/common';

@Controller('articles')
export class ArticlesController {
  @Get()
  getAllArticles() {
    return [];
  }

  @Get(':id')
  getArticleById(@Param('id') id) {
    return id;
  }

  @Post()
  createArticle() {
    return 200;
  }
}
