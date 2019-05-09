# REST API

## General Info
This is backend REST API services in Node.js

### Technologies
Project is created with
* Node.js
* Express

## Getting Started

### Installation or Setup

First, clone the repository

```
git clone https://github.com/6winwan/RESTAPI.git
```

Second, Install the dependencies

```
cd RESTAPI
npm install
```
If you haven't installed Node.js, 
Go to the site https://nodejs.org/en/download/ and download the necessary binary files before seconde step.

### Running the examples
To start the server hosting the REST API, simply run 
```
node index.js
```
This starts an Http server listning on 'localhost:8070'
You can change port in index.js file.

There are 3 routes you can access and codes are in routes.js

* `http://localhost:8070/math/:add`
    
   GET: http://<server_url>/math/add:/n1=<numeric param 1>&n2=<numeric param 2>
   
   This will add numbers 1 and 2 and provide the result in JSON


* `http://localhost:8070/math/add`
   
   POST: http://<server_url>/math/add (allow for form params 1&2 in a POST body)
   
   This will add numbers 1 and 2 from a body and provide the result in JSON

* `http://localhost:8070/:airports`

   This should fetch the list of active airports from a third party service

Ctrl + C to kill process


### UNIT Tests
The templetes also includes unit tests to test routes. 
The UNIT test use Mocha/Chai to verify that the API works as expected.

simply run

```
cd test
npm run test
```

If tests are passed, it will show (exmaple)

    API UNIT TEST
    √ GET '/math/:add' request | Should add two number (49ms)
    √ POST '/math/add' request | Should add two number (41ms)
    √ GET '/:airports' request | Should return active airports
    
    3 passing (114ms)

Ctrl + C to kill process


### Thank for visiting
If you have any questions please email me(6winwan@gmail.com)

  
 



