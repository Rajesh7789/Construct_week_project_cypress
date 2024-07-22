class search_po{

    searchBox = "input[placeholder='Search']";
    seaarIcon = 'button[class="btn btn-default btn-lg"]'

    setupSearch(enter){
        cy.get(this.searchBox).type(enter);
    }

    clickSearch(){
        cy.get(this.seaarIcon).click();
    }




}

export default search_po;
