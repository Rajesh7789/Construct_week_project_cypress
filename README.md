# Construct week project cypress
## Introduction
This repository contains an automated test suite for the OpenCart web application, implemented using Cypress. The tests cover various functionalities of the OpenCart application including product 
search, adding items to the cart, purchasing gift certificates, and completing the checkout process.
## Prerequisites
node.js  
npm  
cypress  
## Test overview
The main test script performs the following actions:  
Visits the OpenCart site.  
Searches for the product "HP LP3065" and adds it to the cart.  
Adds a gift certificate to the cart.  
Proceeds to the checkout process.  
Logs in with provided credentials.  
Completes billing, shipping, and payment steps.  
Asserts that the order success message is displayed.  
## Page Object Model (POM)
The test suite is organized using the Page Object Model (POM) for better maintainability. Below are the POM classes and their responsibilities:  
loginPage.js: Handles login actions.  
searchItem.js: Manages item search actions.  
addtoCart.js: Controls add-to-cart actions.  
link.js: Manages navigation actions.  
checkout.js: Handles checkout actions.  
orderPlaced.js: Confirms order placement actions.  
giftcard.js: Manages gift certificate actions. 
## Running the Tests
To execute the tests, run the following command:  
npx cypress open
## Conclusion
This OpenCart Automation Test Suite provides a robust framework for testing the key functionalities of the OpenCart web application. By leveraging Cypress and the Page Object Model, the tests are 
both maintainable and scalable. This suite ensures that critical user journeys, such as product search, adding to cart, and checkout, are thoroughly tested and reliable.
## Acknowledgments
Thanks to the Masai School team, all the instructors, and IA's for their support and help during the testing process.

## Contact information
For further information or queries, please contact:  
Rajesh kumar dash  
Email - rajeshkudash007@gmail.com  
Linkedin - https://www.linkedin.com/in/rajesh-dash-76b11423b/



