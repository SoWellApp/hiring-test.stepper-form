import { PouchCollection } from "pouchorm";

declare global {
  interface Window {
    PouchORM: Record<string, PouchCollection<any> | Function>;
  }
}
export {};
