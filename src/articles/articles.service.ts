import { Injectable } from '@nestjs/common';
import { CreateArticleInput } from './dto/create-article.input';
import { UpdateArticleInput } from './dto/update-article.input';

@Injectable()
export class ArticlesService {
  create(createArticleInput: CreateArticleInput) {
    return 'This action adds a new article';
  }

  findAll() {
    return [{ time: new Date().toString() }];
  }

  findOne(id: number) {
    return `This action returns a #${id} article`;
  }

  update(id: number, updateArticleInput: UpdateArticleInput) {
    return `This action updates a #${id} article`;
  }

  remove(id: number) {
    return `This action removes a #${id} article`;
  }
}
