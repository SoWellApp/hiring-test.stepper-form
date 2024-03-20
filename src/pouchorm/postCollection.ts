import { IModel, PouchCollection, PouchORM } from 'pouchorm';
PouchORM.LOGGING = true;

export interface IPost extends IModel {
  id: number;
  userId: number;
  title: string;
  body: string;
}

export class PostCollection extends PouchCollection<IPost> {
  async beforeInit(): Promise<void> {
    console.log('pouchorm beforeInit');
  }
  async afterInit(): Promise<void> {
    console.log('pouchorm afterInit');
  }
}
