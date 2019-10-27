import { readFile } from 'fs';
import { promisify } from 'util';
import { TransformImports } from '../import';

const asyncReadFile =  promisify(readFile);
describe('import transform', () => {
  it('file',async ()=>{
    try{
      let file = await asyncReadFile('files/fileWithRequire.js', 'utf8')
      file = TransformImports(file)
      // console.info(file);
    }catch(e){
      console.error(e)
    }

  })
  // .then(console.info);
});
