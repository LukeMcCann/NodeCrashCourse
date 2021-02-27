# Node Crash Course

## NPM

To install a package:

<code>npm install {package}</code>

To install a dev package:

<code> npm install --save-dev {package}<code>

or:

<code> npm install -D {package}</code>

Appending <code>-g</code> will install packages globally.

## Packages

1. uuid - uuid generator
2. nodemon - utility, monitor changes, start/restart server.


## Node

Open Node REPL:

<code>node</code>

Run Node Script: 

<code>node index</code>

## Modules

While it may appear module exports are run directly, the output module is wrapped in the
module wrapper function:

<code>
    (function (exports, require, module, __filename, __dirname)) {
    
    })
</code>