## Prerequisites

* node 8.9.4 (LTS) istalled
* typescript 2.7.2 installed as global npm package
  * npm install --global typescript

## Setup

* pull this repository
* run `npm install` or `yarn`

## Run the app in terminal

* in root project folder: open a terminal and run `tsc --watch`
* open another terminal and run `node ./dist/app.js`

## Branches

* promises
  * fetches Notes from the api using promses and aync await
* browser (coming soon)
  * migrate our app to the browser environment

## Libraries

During our Workshop I mention some libraries.

* injection.js (https://github.com/mgechev/injection-js)
  * Dependency Injection for TS and JS made easy by Minko Gechev
  * in addition I provide a branch where injection.js is used (coming soon)
* g.rab (https://gist.github.com/GregOnNet/0f94e7bba1071dca607e5e70d3954ecb)
  * generating TestData for Test using models
