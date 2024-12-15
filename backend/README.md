1. For adding dev dependencies:
   i.e: nodemon
   command-1: npm install --save-dev nodemon
   command-2: npm i -D nodemon

2. For using SQLite with nodejs:
   In package.json for basic and automatic server startup on change we can also use:
   "script":{
   "dev": "nodemon src/app.js",
   }

3. For testing rest apis:
   Install VS code extension named as "REST Client" by "Huachao Mao"
   Then for testing, create a file with .rest extension.
   eg: test.rest

4. For install "Nvm": (For updating/changing node version)
   Visit following link: "https://github.com/nvm-sh/nvm"
   Then in README of repo, scroll to Installing and Updating section
   i.e: "curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash"

5. For using "import" keyword for importing packages:
   In package.json add "type" field to "module"
   i.e:
   "name": "backend",
   "version": "1.0.0",
   "main": "app.js",
   "type": "module", <--- This line
   e.g: import express from "express"
