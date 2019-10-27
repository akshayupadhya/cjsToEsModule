export function TransformImports(page: string): string {
  const matches = /require\(/g.exec(page);
  console.info(matches!.index)
  console.info(matches!.index)
  return page;
}
