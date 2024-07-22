class order_Placed{
    successMessage = "div[id='content'] h1"

    is_successful_message(){
        cy.get(this.successMessage).should('include.text','Your order has been placed!');
    }
}
export default order_Placed;
