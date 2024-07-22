class gift_card{
giftcard_name = "#input-to-name"
giftcard_mail ="#input-to-email"
giftcard_sender = "#input-from-name"
giftcard_sender_email = "#input-from-email"
giftcard_theme = "input[value='7']"
giftcard_checkbox = "//input[@name='agree']"
continue_button = "//input[@value='Continue']"
// enter the name of reciver
gifrcardName(enter){
    cy.get(this.giftcard_name).type(enter).should('have.value',enter);
}
//enter the email of reciver
giftcardMail(enter){
    cy.get(this.giftcard_mail).type(enter).should('have.value',enter);
}
// enter the name of buyer
giftcardSender(enter){
    cy.get(this.giftcard_sender).type(enter).should('have.value',enter);
}
// enter the email of the buyer 
giftcardSenderEmail(enter){
    cy.get(this.giftcard_sender_email).type(enter).should('have.value',enter);
}
// click the theme radio button
giftcardTheme(){
    cy.get(this.giftcard_theme).check().should('be.checked');
}
// click the checkbox of non-refundable
giftcardCheckbox(){
    cy.xpath(this.giftcard_checkbox).check().should('be.checked');
}
// click on continue
giftcardContinue(){
    cy.xpath(this.continue_button).click();
}



}
export default gift_card;