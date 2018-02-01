# TeamPilot-ionic-project
Sample app created using Ionic framework

## Install Ionic
Ionic apps are created and developed primarily through the Ionic command line utility (the “CLI”), and use Cordova to build/deploy as a native app. This means we need to install a few utilities to get developing.
 
### Getting Node and NPM
Most of the tooling in the CLI is based on Node and is managed through npm. The quickest way to get Node and NPM installed on your machine is through the [NodeJS installer](https://nodejs.org/en/). Be sure to install the LTS version of Node. Close any terminals/command prompts you may have open, run the installer, and launch a new terminal window. To verify you have everything installed correctly, you can run `npm --version` and `node --version`. If this errors, please resolve before moving on.

### Ionic CLI and Cordova
With Node and NPM setup, let’s install the Ionic and Cordova CLI.
```
$ npm install -g ionic cordova
```
Note: The `-g` means this is a global install, so for Window’s you will need to open an Admin command prompt. For Mac/Linux, you’ll need to run the command with `sudo`.

### Clone Repository
Once that’s done, 
- Clone this repo to any folder.
- Open cmd in that folder.
- Run the `ionic serve` command to test your app right in the browser!
```
$ ionic serve
```
