# Skipli-Challenge

# Skipli Login Form

A login application where customers use their phone number to 
recieve an access code. The customer will login successfully if their 
code matches the access code stored in the database.

## Structure
Simple login with two inputs: 
* Phone number 
* Access Code: Random generated 6 digit code

## Sections
- Front-end: 
    -  Form 
- Back-end:
    - Insert entered phone number into database
        - Generate 6 digit code and store in database associated with phone number
        - Send code to phone number
    - Validate whether code entered by user matches the code stored in database
    
## Technologies
- React: Javascript Library
    - Node.js: Back-end runtime environment
    - Express: Web application framework
- Twilio: Communication API 
- Firebase: Database

## Installation and How to Run
#### 1. Command to run script for App.js
```npm start```

- <em>Make sure <strong>Node.js</strong> is installed</em>

- The webapp will run on ```localhost:3000```

#### 2. Get phone number from Twilio
- Make an account and get a Twilio phone number
- Find your **Account SID** and **Auth Token**
- Make sure you install Twilio in your terminal
```npm install twilio ```
- Create an .env file and initialize the variables for twilio.js to use:
``` 
TWILIO_ACCOUNT_SID= '' 
TWILIO_AUTH_TOKEN= '' 
TWILIO_PHONE_NUM= ''  
```

#### 3. Create a database from Firebase
- Make sure you install Firebase in your terminal
``` npm install firebase ```
- Create an account from Firebase to create a project
- Initialize variables for **SDK setup and configuration** in firebase.js to use:
```
const firebaseConfig = { 
    apiKey: "",
    authDomain: "",
    databaseURL: "",
};
```
