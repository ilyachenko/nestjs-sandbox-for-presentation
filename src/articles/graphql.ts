
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export enum CacheControlScope {
    PUBLIC = "PUBLIC",
    PRIVATE = "PRIVATE"
}

export interface CreateArticleInput {
    exampleField?: Nullable<number>;
}

export interface UpdateArticleInput {
    id: number;
}

export interface Article {
    exampleField?: Nullable<number>;
    time?: Nullable<string>;
}

export interface IQuery {
    articles(): Nullable<Article>[] | Promise<Nullable<Article>[]>;
    article(id: number): Nullable<Article> | Promise<Nullable<Article>>;
}

export interface IMutation {
    createArticle(createArticleInput: CreateArticleInput): Article | Promise<Article>;
    updateArticle(updateArticleInput: UpdateArticleInput): Article | Promise<Article>;
    removeArticle(id: number): Nullable<Article> | Promise<Nullable<Article>>;
}

type Nullable<T> = T | null;
