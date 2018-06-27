# Express & TypeScript API-Boilerplate

A full-blown [Express] RESTful API-boilerplate written in [TypeScript].

[![Build Status](https://travis-ci.org/villeristi/express-typescript-api-boilerplate.svg?branch=master)](https://travis-ci.org/villeristi/express-typescript-api-boilerplate)
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
Middleware-functions can be addedd though `App.use(middleWareFunction())`. Configs can be array of middlewares or a single middleware-function where the second argument is a boolean which states if this middleware should be enabled.
See [index.ts](src/index.ts) as example.

### Routing
Each route added with `App.route()` has to extend the abstract `BaseRoute`-class or `CrudRoute`-class with overridden members:

**BaseRoute**

- `method: string (http-verb)`
- `endpoint: string (the actual route)`
- `middleware`: array (optional middleware-functions for this specific route)
- `respond(): Response`

**CrudRoute**

- `endpoint: string (the actual route)`
- `middleware`: array (optional middleware-functions for this specific route)
- `[HTTP-VERB](): Response`: HTTP-verbs which this route supports. For example, if there's no PUT-method defined & PUT-request is coming to this route => an Exception is thrown.

See [modules](src/modules) as example.

### Available commands:
 - `yarn start`: Executes [Nodemon] & refreshes app on file-change
 - `yarn lint`: Executes [TSLint] & [TypeScript] `tsc` (typecheck)
 - `yarn build` Builds app as _regular_ Javascript (es2015) to `/dist`

### Todo:
- [x] Route-middleware
- [x] Resourseful routing
- [ ] Unit tests
- [ ] ...?

[Express]:https://expressjs.com/
[TypeScript]:http://www.typescriptlang.org/
[Babel]:https://babeljs.io/
[Nodemon]:https://nodemon.io
[TSLint]:https://palantir.github.io/tslint/
[Jest]:https://facebook.github.io/jest/
[Yarn]:https://yarnpkg.com/en/docs/install
