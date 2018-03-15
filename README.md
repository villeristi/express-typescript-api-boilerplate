# Express & TypeScript API-Boilerplate

A full-blown [Express] RESTful API-boilerplate written in [TypeScript].

[![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/villeristi/express-typescript-api-boilerplate)

Build with:
- [Express]
- [TypeScript]
- [Babel]
- [Nodemon]
- [TSLint]

### Getting started
1. Be sure you have [Yarn] installed globally.
2. Clone the repo & run `yarn` from the project root

### Configuration
Middleware-functions can be addedd though `App.addConfig(middleWareFunction())`. Configs can be array of middlewares or Or single middleware where second argument is a boolean in which condition this middleware should be added. 
See [index.ts](src/index.ts) as example.

### Routing
Each route added with `App.addRoute()` has to extend the abstract `AbstractRoute` with overridden members: 
- `method: string (http-verb)`
- `endpoint: string (the actual route)`
- `respond(): Response`

Rest of the response-handling is up to you.

### Available commands:
 - `yarn start`: Executes [Nodemon] & refreshes app on file-change
 - `yarn lint`: Executes [TSLint] & [TypeScript] `tsc` (typecheck)
 - `yarn build` Builds app as _regular_ Javascript (es2015) to `/dist`

### Todo:
- [ ] Unit-testing
- [ ] ...?

[Express]:https://expressjs.com/
[TypeScript]:http://www.typescriptlang.org/
[Babel]:https://babeljs.io/
[Nodemon]:https://nodemon.io
[TSLint]:https://palantir.github.io/tslint/
[Jest]:https://facebook.github.io/jest/
[Yarn]:https://yarnpkg.com/en/docs/install
