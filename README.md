# Assignment for QA

## Assignment
Create e2e test scenarios for the CRUD user operations with API Version 2 and HTTP Bearer Token authentication from https://gorest.co.in/ service.
Use JavaScript and a framework of your choice (currently we use Jest and Supertest, please don't use Postman for this).

## Flow to be tested
   ● (POST) Create a user, get the "userId" and assert that the user has been created.

   ● (GET) Fetch the user by GET call with the "userId" and assert that the correct user has been fetched.

   ● (POST) Update all the fields of the created user and assert that the fields have been updated correctly.

   ● (PATCH) Partially update the created user by updating the email address and assert that the particular field has been updated correctly.

   ● (DELETE) Delete the created user and assert that the user has been deleted successfully.

## Project Requirements
   ● Clone the repository https://github.com/ErDmYLmZ/Quatt-api-test.git

   ● Install NodeJS(The Latest LTS version should be sufficient) unless it was not installed.

   ● Run "npm install" to update the dependencies in the package.json.

   ● Confirm the successful installation by running the following commands in the terminal "node -v", "npm -v" and "npm ls jest". 

   ● In case of an unsuccessful installation use "npm install dependencyName" to install manually. 

## Usage:
   ● To run all the tests via Terminal, open the Terminal and typ "npm run test".

   ● To run all the tests via IDE without debugging, click the "Run" tab and select "Run Without Debugging" (^ F5).

   ● To run all the tests via IDE with debugging, click the "Run" tab and select "Start Debugging" (F5).

   ● To run a single test, add ".only" to the describe block for the desired test (e.g.: describe.only).

## CI/CD
   ● The CI/CD setup has been configured for "Push", "Pull Request" and Manual Trigger.

   ● At each push or pull request, the tests run automatically.

   ● Tests can be triggered manually on the GitHub by "Actions" tab.

## Test Reports
   ● To see the "coverage report" go to "coverage" folder, click on the "Icov-report" folder and select "index.html" and open it in a browser.

## Help
   In case of any support/question please contact  "e.yilmaz.qa@gmail.com".