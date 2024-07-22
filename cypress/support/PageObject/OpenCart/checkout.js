class checkout_po{
    billing_details_continue = "#button-payment-address"
    shipping_address_countinue = '#button-shipping-address'
    delivery_method_continue = '#button-shipping-method'
    checkbox = "input[value='1']"
    payment_method_continue = '#button-payment-method'
    confirm_order = '#button-confirm'

    billing_continue(){
        cy.get(this.billing_details_continue).click({force:true});
    }

    shipping_continue(){
        cy.get(this.shipping_address_countinue).click({force:true});
    }
    delivery_continue(){
        cy.get(this.delivery_method_continue).click({force:true});
    }
    click_checkbox(){
        cy.get(this.checkbox).check({force:true}).should('be.checked');
    }
    payment_continue(){
        cy.get(this.payment_method_continue).click({force:true});
    }
    confirm(){
        cy.get(this.confirm_order).click({force:true});
    }
}
export default checkout_po;