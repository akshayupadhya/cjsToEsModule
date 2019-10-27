import { TransformImports } from './import';

export default function cjsToEsModule(page: string): string {
  page = TransformImports(page);
  return page;
}
