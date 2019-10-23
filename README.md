# cjsToEsModule
A project to convert commonJS require to es6 import

## Why?

Lets face it , if you have a javaScript app that has a build process involving webpack/rollup and you are not doing code optimization like code splitting and tree shaking, then you are not delivering it for audience in 2019+. If your app is built with commonJS (which was the standard in 2014, before es module spec was released) you cannot achive any of those optimizations in build process.

With features like modules and moduleMap getting builtIn to chrome and firefox , lets utilize it and cut the network dependent loading time for apps.

Fast loadTimes adds to better user experiences and its not a good idea to take it for granted

## Goal

1. require should be converted to import 

```
const a = require('a') -> import a from 'a'
```

2. Individual modules should work as well

```
const { b } = require('a') -> import { b } from 'a'
```

```
const b = require('a').b -> import { b } from 'a'
```

3. Multiple require/import statements to one import, if its from same module

```
const c = require('a').c     | -> import a,{ b, c, d, e } from 'a'
const a = require('a')       |
const { d } = require('a')   |
import { e } from 'a'        |
```

4. Dealing module.exports

```
// deafult export
module.exports = a -> export default a
```

```
// named export
module.exports = { b, c} -> export { b, c }
```

## How(to contribute)?

The code for this will be in the src folder.

All the above mentioned goals will be created as issues.

Typescript will be used for both development and unit tests.

Fork this Repo and submit PR's to close the above issues!.

This app shall also work as CLI app

Once the above mentioned goals are accomplished, this readme should be re written for installation and usage instructions

