export function TransformImports(page: string): string {
  let requireRegex: RegExp = /require\(/;
  let variableReg: RegExp = /(var|let|const)\s/
  const Transform = (requireString: string): string => {
    // removing variable decalaration
    requireString = requireString.replace(variableReg, '')
    // replacing double quotes
    requireString = requireString.replace(/"/g, "'")
    let importer: string = requireString.substr(0, requireString.search('=')).trim()
    const firstQuote: number = requireString.search("'")
    const secondQuote: number = requireString.slice(firstQuote + 1).search("'");
    const module: string = requireString.slice(firstQuote + 1).slice(0, secondQuote)
    if (requireString.slice(firstQuote + secondQuote + 1).replace(/\'\)/, '')[0] === '.') {
      const subModuleName: string = requireString.slice(firstQuote + secondQuote + 1).replace(/\'\)\./, '').replace(';', '')
      importer = `{ ${subModuleName === importer ? importer : `${subModuleName}  as ${importer}`} }`
    }
    const importStr: string = `import ${importer} from '${module}'`
    return '\n' + importStr
  }
  if ((page.match(requireRegex) || []).length) {
    let lastNewLinePos: number = 0;
    let requirePos: number = 0;
    let lastVarPos: number = 0;
    while (page.slice(lastNewLinePos).search(requireRegex) != -1) {
      lastVarPos = lastNewLinePos + page.slice(lastNewLinePos + 1).search(variableReg)
      requirePos =
        (requirePos != 0 ? lastNewLinePos : 0) +
        page.slice(lastNewLinePos).search(requireRegex);
      lastNewLinePos = page.indexOf('\n', requirePos);
      const importStr: string = Transform(page.slice(lastVarPos, lastNewLinePos))
      page = page.substring(0, lastVarPos) + importStr + page.substring(lastNewLinePos)
      lastNewLinePos = page.indexOf('\n', requirePos);
    }
    console.info(page)
    return page;
  } else return page;
}
