# Branch Browser

To run a TypeScript app in the browser there are different things to think about

* we have a lot of small files, which have to be loaded and included in html
  * http 1.1 only support 6 simultan connections at one time, load time can increase rapidly
* browsers does not support typescript natively

**Solution** : Use a bundling System  
In this branch I use webpack (https://webpack.js.org/)  
Other benefits which are included: Styles (scss, sass...), asstes, images can be tranformed and bundeled through different loaders too

* first you have to place the webpack.config.js in the root of your project (you find it in the gist)
  * webpack use the awesome-typescript loader to transpile your code based on the settings in tsconfig.json
* please delete your `/dist` folder now
* after that you can run with `npm run build` the build script referenced in package.json
  * as you will see there is only one app.js in `/dist` which holds our whole app. its bundled
* wrap the code you want to execute in app.ts in a function called `main`
* now place an index.html in the root, and run the main function if the document is ready
* as you have the small http-server installed in node_modules you can run `npx http-server`. look at the console output for the address. default is localhost:8080
* I know, this is a very brief example. Feel free to ask if there are questions

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
* g.rab (https://gist.github.com/GregOnNet/0f94e7bba1071dca607e5e70d3954ecb)
  * generating TestData for Test using models
