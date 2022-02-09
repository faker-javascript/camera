<h1 align="center">Camera</h1>
<p align="center">Camera package provides functionality to generate a fake camera value.</p>

<p align="center">
<a href="https://github.com/faker-javascript/camera/releases"><img alt="Version" src="https://img.shields.io/github/release/faker-javascript/camera.svg?label=version&color=green"></a> <img src="https://img.shields.io/npm/dt/@fakerjs/camera"> <img alt="node-current" src="https://img.shields.io/node/v/@fakerjs/camera"> <a href="https://github.com/faker-javascript/camera/actions/workflows/ci.yml"><img src="https://github.com/faker-javascript/camera/actions/workflows/ci.yml/badge.svg"></a> <a href="https://github.com/faker-javascript/camera"><img src="https://img.shields.io/badge/license-MIT-blue.svg?color=green" alt="License"></a>
</p>

## Install

npm
```
npm install @fakerjs/camera --save-dev
```

yarn
```
yarn add @fakerjs/camera -D
```

## Usage

```js
import camera from '@fakerjs/camera';

camera({locale: 'en_US'}).brand();
//=> Nikon
// Allowed locale: en_US

camera().brand();
//=> Nikon 

camera().model();
//=> D7200

camera().brandWithModel();
//=> Nikon D7200
```

## Tests

Run tests

```
npm run test
```

## License
[The MIT License (MIT)](https://github.com/faker-javascript/camera/blob/master/LICENSE)
Copyright (c) [Sergey Romanenko](https://github.com/Awilum)
