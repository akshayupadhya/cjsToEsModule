import { readFile } from 'fs';
import { promisify } from 'util';

export const asyncReadFile =  promisify(readFile);