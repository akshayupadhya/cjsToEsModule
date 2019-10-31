import { asyncReadFile } from "./utils"
import { transformExports } from "../exports"

describe('exports', () => {
  it('should convert module.exports to export', async () => {
    const file: string = await asyncReadFile('files/fileWithRequire.js', 'utf8')
    const transformedFile: string = transformExports(file)
    const containsExports: boolean = transformedFile.search(/export\s/) !== 0
    const containsModuleExports: boolean = transformedFile.search(/module\.exports\s=/g) === -1
    expect(containsExports).toBeTruthy()
    expect(containsModuleExports).toBeTruthy()
  })
})