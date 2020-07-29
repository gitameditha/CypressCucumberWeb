# Automation Test Websites using Cypress with Cucumber

Automation testing websites using Cypress with Cucumber


## Requirement
```
node installation
```

## Installation

- package.json
```
"devDependencies": {
    "cypress": "^4.4.0",
    "cypress-cucumber-preprocessor": "^2.5.3",
    "cypress-dotenv": "^1.2.2",
    "dotenv": "^8.2.0",
    "multiple-cucumber-html-reporter": "^1.16.1",
    "mysql": "^2.18.1"
  }
```

- install modules
```
npm install
```

## env

```
cp env.sample .env
```
```
BUKALAPAK_URL=https://www.bukalapak.com
```
    
## How To Run
```
npm run cypress         #Running test case
```

## Structure
```
│   .env
│   .env.example
│   .gitignore
│   cypress.json
│   package-lock.json
│   package.json
│   README.md
│   tree.txt
│   
└───cypress
    │   cypress_report.js
    │   
    ├───fixtures
    │   │   response_code.json
    │   │   
    │   └───seed_data
    │           credential.json
    │           
    ├───integration
    │   │   login.feature
    │   │   
    │   └───common
    │           login.js
    │           
    ├───plugins
    │       index.js
    │       
    ├───reports
    │   └───results
    │           login.cucumber.json
    │           
    ├───screenshots
    │   └───login.feature
    │           Log in Website SSC -- Login using valid email (failed).png
    │           
    ├───support
    │       commands.js
    │       index.js
    │       
    └───videos
            login.feature.mp4
```



## Report

report it can be 3 type :
- Screeshoots
- Video
- Json

## Notes
- this project use Windows set up, so need to simple set up if wanna use unix
