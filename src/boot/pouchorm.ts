import { PostCollection } from './../pouchorm/postCollection';
import { PouchORM } from 'pouchorm';
import { boot } from 'quasar/wrappers';

const config = {
  auto_compaction: true,
};

const postCollection = new PostCollection('post', config);

export default boot(() => {
  PouchORM.LOGGING = true;
});

export { postCollection };
