<!--
*** Using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

<!-- PROJECT SHIELDS/BADGES -->
[![Workflow][workflow-shield]][workflow-url]
[![Issues][issues-shield]][issues-url]
[![Version][version-shield]][version-url]
[![Stargazers][stars-shield]][stars-url]
[![Forks][forks-shield]][forks-url]
[![Contributors][contributors-shield]][contributors-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO & TITLE -->
<br>
<div align="center">
  <a href="https://github.com/tberey">
    <img src="public/assets/img.png" alt="Logo" width="73" height="70">
  </a><br><br>
  <div align="center"><h1>Node.ts</h1>A Fresh & Blank Template,<br>to start something new in TypeScript and Nodejs</div>
  <div align="right">
    <br>
    <a href="https://github.com/tberey/typescript-node-fresh-start-template/blob/master/README.md"><strong>Documentation »</strong></a>
    <br>
    <a href="#usage">View Demo</a>
    ·
    <a href="https://github.com/tberey/typescript-node-fresh-start-template/issues">Report Bug</a>
    ·
    <a href="https://github.com/tberey/typescript-node-fresh-start-template/issues">Request Feature</a>
  </div>
</div>



<!-- TABLE OF CONTENTS -->
<details open="open" style="padding:4px;display:inline;border-width:1px;border-style:solid;">
  <summary><b style="display: inline-block"><u>Contents</u></b></summary>
    <ol>
        <li>
        <a href="#about-this-project">About</a>
        <ul>
            <li><a href="#tech-stack">Tech Stack</a></li>
        </ul>
        </li>
        <li>
        <a href="#startup">Startup</a>
        <ul>
            <li><a href="#prerequisites">Prerequisites</a></li>
            <li><a href="#installation">Installation</a></li>
        </ul>
        </li>
        <li>
          <a href="#usage">Usage</a>
          <ul>
            <li><a href="#screenshots">Screenshots</a></li>
        </ul>
        </li>
        <li><a href="#complete-setup-instructions">Complete Setup Instructions</a></li>
        <li><a href="#changelog">Changelog</a></li>
        <li><a href="#contributing">Contributing</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#acknowledgements">Acknowledgements</a></li>
    </ol>
</details><hr><br>



<!-- ABOUT THis PROJECT -->
## About This Project
This is a fresh & blank template, with some of the most common and helpful (but basic) modules included, as well as automatic [logging](#screenshots) configured out the box. After installation and starting the application, you will have a simple and empty HTTP REST Server hosted locally, ready-to-go. Everything inclusive of this template will be completely up to date, and updated each time it is installed, so it will never depreciate and is safe to use over time repeatedly. This is the perfect starting point for any project, as you can simply install this template and then start importing your own modules, or writing your own code, without any hassle. Completely compatible with any vision or modules.

**A new project can be written in either TypeScript or JavaScript, without any further changes needed, however this template is set up and intended for TS, making use of it's typesetting, pre-compiling abilities, and simplicity in an object-oriented approach.**

*This template is completely unrestricted, and free for anyone to use, unlimited, with no credit or acknowledgements needed. There are no signs of any ownership, or personal touches, inside the codebase.*

<br>

### Tech Stack
* [Typescript](https://www.typescriptlang.org/) - Write in TypeScript (or JS), Compiles down to JavaScript.
* [NodeJS](https://nodejs.org/en/) - Node Runtime Environment.
* [ExpressJS](https://expressjs.com/) - Server & Router Infrastructure Framework.
* [EJS](https://ejs.co/) - Serves Client Views.
* [ESLint](https://eslint.org/) - Code Parsing, Styling & Error Checking.
* [Mocha-Chai](https://mochajs.org/) - Testing with Mocha Framework, using the Chai Library.
* [Nodemon](https://nodemon.io/) - Restart Application without Compiling, on a Change to Watched Files.
* [Rimraf](https://www.npmjs.com/package/rimraf) - Directory Cleaner Tool.
* [Dotenv](https://www.npmjs.com/package/dotenv) - Project Secrets Stored in a Local .env File.
* [SimpleTxtLogger](https://www.npmjs.com/package/simple-txt-logger) - Logging tool.
* [@types/*](https://www.npmjs.com/package/@types/node) - Various JS->TS Typesetting modules, to import types. Needed to use a JavaScript module with TypeScript when strict settings are enabled, or to make use of TS only features against a imported module.

<br>

*- See [Complete Instructions](#complete-setup-instructions) to create this template yourself, without any of the extra optional modules.*

<br><hr><br>



<!-- STARTUP -->
## Startup
For help or guidance in downloading and running the application, see the following subsections.

<br>

#### Prerequisites
[You must have npm (node package manager) and Nodejs installed on your system!](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

1. Update npm:
  ```sh
  npm install npm@latest -g
  ```
<br>

#### Installation
1. Clone/Download:
  ```sh
  git clone https://github.com/tberey/typescript-node-fresh-start-template.git
  ```
2. Install:
  ```sh
  npm install
  ```
3. Start:
  ```sh
  npm run start
  ```

<br><hr><br>



<!-- USAGE EXAMPLES -->
## Usage

| Endpoint | Action/Desc. | Full URI <i>(hosted locally, for some port; e.g.: 3000, which is default for this template)</i> |
|:---|:---|:---|
| <ul><li>GET "/"</li></ul> | Homepage:<br>The client-side landing page. | <ul><li>"`http://localhost:3000/`"</li></ul> |

<br>

### Screenshots

Logging Sample<br>
![Screenshot#1](https://github.com/tberey/typescript-node-fresh-start-template/blob/master/screenshots/local-logs-sample.png?raw=true)

<br><hr><br>



## Complete Setup Instructions
The following steps are complete instruction to create this template, but without any of the extra modules, and begin a brand new project in Nodejs with TypeScript from a blank slate. The commands are shell commands, to be carried out in a terminal, console or other shell environment.

1. Create a new local directory and change current directory to new one:
  ```sh
  mkdir <PROJECT_NAME> && cd <PROJECT_NAME>
  ```
2. Initialize a new package.json file:
  ```sh
  npm init -y
  ```
3. Install TypeScript dependencies:
  ```sh
  npm i --save-dev typescript ts-node
  ```
4. Initialize a new tsconfig.json file:
  ```sh
  npx tsc --init
  ```
5. [Optional] Some basic parameters to use in the tsconfig.json file. [My settings for this file can be found here](https://github.com/tberey/typescript-node-fresh-start-template/blob/master/tsconfig.json) also, to copy & paste. Otherwise, adjust this further with own preferences, or leave it as is.
  ```sh
  {
    "compilerOptions": {
      "target": "es6",
      "module": "commonjs",
      "declaration": true,
      "sourceMap": true,
      "outDir": "build",
      "rootDir": "./",
      "strict": true,
      "esModuleInterop": true
    }
  }
  ```
6. Create main.ts, the entry point into the application:
  ```sh
  echo "console.log('Hello, World');" > main.ts
  ```
7. [Optional] Some basic information and scripts, for the package.json file:
  ```sh
  {
    "name": "<App-Name>",
    "version": "1.0.0",
    "description": "<App_Desc>",
    "main": "build/main.js",
    "types": "build/main.d.ts"
    "scripts": {
      "setup": "npm update && npm install",
      "build": "tsc",
      "start": "node build/main.js",
      "start:src": "ts-node main.ts"
    }
  }
  ```
8. [Optional] Install, compile and start application (it won't do much yet, but you're off to a running start now):
  ```sh
  npm run setup
  npm run build
  npm run start
  ```
<sub><b><i>^ Step 8.: These commands require the optional Step 7 to have been followed, to work as intended.<br>'npm run setup' installs and updates the project and it's dependencies, 'build' will compile the project into browser/app runnable JS, and 'start' will run the project, from the compiled files in build. 'start:src' runs the project from the source TS file, so compilation is not necessary.</i></b></sub>

<br><hr><br>



<!-- ROADMAP -->
## Roadmap
Below is the refined and confirmed roadmap, that has been planned for completion. See [open issues][issues-url] and also the [project board][project-url], for any other proposed features or known issues, which may not be listed below.

| Feature/Task/Bugfix | Details | Version <i>(if released)</i> | Notes |
|:---|:---|:---|:---|
| <i>Bug#1</i> | <i>Bug details...</i> | <i>0.0.1</i> | <i>example#1</i> |
| <i>Feature#4</i> | <i>Feature details...</i> |   | <i>example#2</i> |

<br><hr><br>



<!-- CHANGELOG -->
## Changelog

| Version | Date | Changes |
|:---|:---|:---|
| 1.0.0 | 2021-07-09 | <ul><li>Initial Commit.</li><li>Add initial directory structure and files.</li><li>Add Screenshots directory, and images.</li><li>Create and format README.md</li></ul> |
| 1.0.1 | 2021-07-14 | <ul><li>Removal of local SimpleTxtLogger file. Addition of SimpleTxtLogger as a npm module.</li><li>Update README.md</li></ul> |
| 1.0.2 | 2021-08-01 | <ul><li>Update tsconfig.</li><li>Update README.md</li></ul> |
| 1.0.3 | 2021-08-03 | <ul><li>Add Rollbar config and class.</li><li>Fix Spelling.</li><li>Update README.md</li></ul> |

<br><hr><br>



<!-- CONTRIBUTING -->
## Contributing
Contributions are welcomed and, of course, **greatly appreciated**.

1. Fork the Project.
2. Create your Feature Branch (`git checkout -b feature/Feature`)
3. Commit your Changes (`git commit -m 'Add some Feature'`)
4. Push to the Branch (`git push origin feature/Feature`)
5. Open a Pull Request.

<br><hr><br>



<!-- CONTACT -->
### Contact

<b>Tom Berey</b>; <i>Project Manager, Lead Developer, Principal Tester & Customer Services;</i><br>tomberey1@gmail.com;

* [Issues & Requests.][issues-url]
* [My Other Projects.](https://github.com/tberey?tab=repositories)
* [Personal Website.](https://tberey.github.io/)
* [Linked In.](https://uk.linkedin.com/in/thomas-berey)

<br>

<!-- ACKNOWLEDGEMENTS -->
### Acknowledgements

* [Me](https://github.com/tberey)





<!-- SPECIFIC URLS - NEED CHANGING PER PROJECT -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[workflow-shield]: https://github.com/tberey/typescript-node-fresh-start-template/actions/workflows/codeql-analysis.yml/badge.svg
[workflow-url]: https://github.com/tberey/typescript-node-fresh-start-template/actions
[version-shield]: https://img.shields.io/github/v/release/tberey/typescript-node-fresh-start-template
[version-url]: https://github.com/tberey/typescript-node-fresh-start-template/releases/
[stars-shield]: https://img.shields.io/github/stars/tberey/typescript-node-fresh-start-template.svg
[stars-url]: https://github.com/tberey/typescript-node-fresh-start-template/stargazers
[contributors-shield]: https://img.shields.io/github/contributors/tberey/typescript-node-fresh-start-template.svg
[contributors-url]: https://github.com/tberey/typescript-node-fresh-start-template/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/tberey/typescript-node-fresh-start-template.svg
[forks-url]: https://github.com/tberey/typescript-node-fresh-start-template/network/members
[issues-shield]: https://img.shields.io/github/issues/tberey/typescript-node-fresh-start-template.svg
[issues-url]: https://github.com/tberey/typescript-node-fresh-start-template/issues
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?logo=linkedin&colorB=555
[linkedin-url]: https://uk.linkedin.com/in/thomas-berey
[project-url]: https://github.com/tberey/typescript-node-fresh-start-template/projects