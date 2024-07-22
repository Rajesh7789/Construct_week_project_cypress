class link_po{
    shoppingCart = "//a[normalize-space()='shopping cart']"
    checkout = "a[class='btn btn-primary']"
    giftcard_link = "//a[normalize-space()='Gift Certificates']"
    menu_cart = "//span[normalize-space()='Shopping Cart']"


    gotoCart(){
        cy.xpath(this.shoppingCart).click();
    }

    clickCheckout(){
        cy.get(this.checkout).click();
    }

    click_giftcard(){
        cy.xpath(this.giftcard_link).click();

    }
    goto_cart_from_menu(){
        cy.xpath(this.menu_cart).click({force:true});
    }
}
export default link_po;
