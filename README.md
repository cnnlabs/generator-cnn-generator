# CNN Generator Package Generator

## Requirements

A current LTS or Stable version of [Node.js](https://nodejs.org).  We recommend
using [nvm](https://github.com/creationix/nvm#readme) to manage node versions.

A utility for installing [Yeoman](http://yeoman.io/) packages.  `yo`, that comes
with Yeoman, will work, but it is recommended you use the `cnn` CLI available
from [CNN Package Generator](https://github.com/cnnlabs/cnn-package-generator#readme).


## Install

This is not needed if you are using the `cnn` CLI.

```shell
$ npm install --global generator-cnn-generator
```


## Usage

With `cnn` (**recommended**):
- See the [README](https://github.com/cnnlabs/cnn-package-generator#readme) in
  the CNN Package Generator repo for usage details on the `cnn` CLI.

With `yo`:
- `$ yo cnn-generator` - NOTE: Due to known issues, this currently does not work
  for this specific package.  This will be addressed in the future.


## Things to be aware of

When the generator is running it may ask to resolve conflicts when writing files
to the destination.  **Always choose to overwrite**.



![node](https://img.shields.io/node/v/generator-cnn-generator.svg?style=flat-square)
[![npm](https://img.shields.io/npm/v/generator-cnn-generator.svg?style=flat-square)](https://www.npmjs.com/package/generator-cnn-generator)
[![npm-downloads](https://img.shields.io/npm/dm/generator-cnn-generator.svg?style=flat-square)](https://www.npmjs.com/package/generator-cnn-generator)
[![dependency-status](https://gemnasium.com/cnnlabs/generator-cnn-generator.svg)](https://gemnasium.com/cnnlabs/generator-cnn-generator)
