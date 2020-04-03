# A Fresh Place to Start for a Node TypeScript Project

## An empty canvas for any Node.ts project, without extra/optional dependancies or modules yet introduced, (excluding nodemon). Use as a template to begin any Typescript with Node.js Project, from a fresh start.

###### With Node and npm installed:
### Simply download, extract, and npm install - then get stuck in!


***
<br>

#### <i><u>This template is created by the following steps:</u>
|Steps|Unix/Terminal Commands|
|:---|:---|
|Create and/or Navigate to the root of your empty project directory, via Terminal console.|<ul><li>"mkdir <folder-name\>" - Make new directory in current directory.</li><li>"cd <path/folder-name\>" - Navigate to directory.</li></ul>|
|Initialise the directory for a new node project, by creating a defaulted 'package.json' file, using npm (node package manager).|<ul><li>"npm init -y"</li></ul>|
|Using npm install the latest TypeScript module, as a developer dependancy and saved into the 'package.json' file.|<ul><li>"npm install typescript --save-dev"</li></ul>|
|Again using npm, install the ambient/global types dependancy for using Node.js in a TypeScript environment, set as a developer dependancy and saved into the 'package.json' file.|<ul><li>"npm install typescript --save-dev"</li></ul>|
|Create a 'tsconfig.json' file, with the minimal default configuration applied, using npx (node package executor).|<ul><li>"npx tsc --init --rootDir src --outDir build \ --esModuleInterop --resolveJsonModule --lib es6 \ --module commonjs --allowJs true --noImplicitAny true"</li></ul>|
|Add the compile command to your 'package.json', under the title "scripts", in it's object value.|<ul><li>" "compile": "tsc" "</li></ul>|
|Compile your project using npx|<ul><li>"npx tsc"</li></ul>|