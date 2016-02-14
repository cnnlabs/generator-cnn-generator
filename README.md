# CNN Generator Package Generator

## Requirements

A current LTS or Stable version of [Node.js](https://nodejs.org).  We recommend
using [nvm](https://github.com/creationix/nvm#readme) to manage node versions.

A utility for installing [Yeoman](http://yeoman.io/) packages.  `yo` should work
but it is recommended you use the `cnn` CLI available from
[CNN Package Generator](https://github.com/cnnlabs/cnn-package-generator#readme).


## Install

No install is necessary if you are using this generator with the `cnn` cli.

`yo` can be used to install.  Refer to the `yo`
[documentation](https://github.com/yeoman/yo#readme) for details.

Can be installed manually.

```shell
$ npm install --global generator-cnn-generator
```


## Usage

With `cnn` (**recommended**):
- See the [README](https://github.com/cnnlabs/cnn-package-generator#readme) in
  the CNN Package Generator repo for usage details on the `cnn` CLI.


## Things to be aware of

- When the generator is running it may ask to resolve conflicts when writing
  files to the destination.  **Always choose to overwrite**.

- This generator currently does not work with the `yo` cli.  This will be
  resolved in the future.


![node](https://img.shields.io/node/v/generator-cnn-generator.svg?style=flat-square)
[![npm](https://img.shields.io/npm/v/generator-cnn-generator.svg?style=flat-square)](https://www.npmjs.com/package/generator-cnn-generator)
[![npm-downloads](https://img.shields.io/npm/dm/generator-cnn-generator.svg?style=flat-square)](https://www.npmjs.com/package/generator-cnn-generator)
[![dependency-status](https://gemnasium.com/cnnlabs/generator-cnn-generator.svg)](https://gemnasium.com/cnnlabs/generator-cnn-generator)
