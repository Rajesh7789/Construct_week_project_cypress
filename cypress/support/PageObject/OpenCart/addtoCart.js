class addtoclass_po{
    cartbutton = "//div[@class='product-layout product-grid col-lg-3 col-md-3 col-sm-6 col-xs-12']//button[1]"
    cartbuttonProductPage = '#button-cart'
    clickCart(){
        cy.xpath(this.cartbutton).click();
    }

    clickCartProduct(){
        cy.get(this.cartbuttonProductPage).click();
    }
}

export default addtoclass_po;

