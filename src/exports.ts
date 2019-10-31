export function transformExports(page: string): string {
  if (page.search('module.exports') !== -1) {
    page = page.replace(/module\.exports(|\s)=(|\s)\{/g, 'export {')
    page = page.replace(/module\.exports(|\s)=(|\s)/g, 'export default')
    console.info(page)
  }
  return page
}