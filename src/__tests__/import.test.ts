import { TransformImports } from '../import';
import { asyncReadFile } from '../utils'

describe('import transform', () => {
  it('file', async () => {
    try {
      let file = await asyncReadFile('files/fileWithRequire.js', 'utf8')
      file = TransformImports(file)
      // console.info(file);
    } catch (e) {
      console.error(e)
    }
  })
});
