//this is to import the pom class, we can use all the functionality of the class here

import login from "../../support/PageObject/OpenCart/loginPage";
import search_po from "../../support/PageObject/OpenCart/searchItem";
import addtoclass_po from "../../support/PageObject/OpenCart/addtoCart";
import link_po from "../../support/PageObject/OpenCart/link";
import checkout_po from "../../support/PageObject/OpenCart/checkout";
import order_Placed from "../../support/PageObject/OpenCart/orderPlaced";
import gift_card from "../../support/PageObject/OpenCart/giftcard";






// write the test script 

describe('opencart', () => {
    it('testing the gift certificate', () => {
        // to visit the web application of opencart
        // cy.visit('https://tutorialsninja.com/demo/index.php?route=common/home');
        
        
        // to create the instance variabale for the respected class
        
        const log = new login();
        const search = new search_po();
        const add = new addtoclass_po();
        const go = new link_po();
        const button = new checkout_po();
        const order = new order_Placed();
        const gift = new gift_card();

        // using the variable for testing different module

        log.visit();
        search.setupSearch('HP LP3065');          // this is searching an item in the web application
        search.clickSearch();                    // this is for click on search button
        add.clickCart();
        add.clickCartProduct();                 // this will add the item in our cart

        // add the giftcard also to the cart
        go.click_giftcard();
        gift.gifrcardName('alok');
        gift.giftcardMail('alok@gmail.com');
        gift.giftcardSender('rajesh');
        gift.giftcardSenderEmail('rajesh@gmail.com');
        gift.giftcardTheme();
        gift.giftcardCheckbox();
        gift.giftcardContinue();


        // open the menu and checkout
        go.goto_cart_from_menu();                          // this function will open the cart
        go.clickCheckout();                     // this will click on the checkout button
        
        
        // for login 
        log.setupEmail('rajesh1@gmail.com');
        log.setupPassword('rajesh12345');
        log.clickLogin();

        // for checkout
        button.billing_continue();          // it will click the continue button on billing section
        button.shipping_continue();         // it will click the continue button on delivey detalis section
        button.delivery_continue();         // it will click the continue button on delivery method section
        button.click_checkbox();            // it will click the checkbox button on payment method section
        button.payment_continue();          // it will click the continue button on payment method section
        button.confirm();                   // it will click the continue button on confir order section

        // for asserting the order placed message

        order.is_successful_message();




    });
    
});