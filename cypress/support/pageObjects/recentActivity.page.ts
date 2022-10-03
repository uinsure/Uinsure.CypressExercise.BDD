const RecentActivityPage = {
    selectSearchTypeAndEnterSearchTerm: function (searchType: string, searchTerm: string) {
        if (searchType !== "empty") {
            cy.get(this.getSearchSelector(searchType))
                .should("be.visible")
                .clear()
                .type(searchTerm)
                .should('contain.value', searchTerm);
        }
        return this;
    },
    clickSearchButton: function () {
        cy.wait(500); //cypress potentially too fast at times or env too slow
        cy.get('[data-testid="filter-button"]').should("be.visible").click();
        return this;
    },
    verifyTopSearchResult: function (searchType: string, searchTerm: string) {
        this.verifyTableHasResults();
        if (searchType !== "empty") {
            cy.get(tableBodyId).within(() => {
                cy.get('tr').first().within(() => {
                    cy.get('td').contains(searchTerm).should('be.visible');
                })
            });
        };
        return this;
    },
    clickResetButton: function () {
        cy.get('[data-testid="reset-filter-button"]').should("be.visible").click();
        return this;
    },
    getSearchSelector: function(searchType: string){
        switch (searchType) {
            case "reference":
                return policyNumberId;
            case "name":
                return policyNameId;
            case "postcode":
                return policyPostcodeId;
            case "empty":
            default:
                return "";
        };
    }, 
    verifySearchFieldsReset: function(){
        cy.get(policyNumberId).should("be.visible").should("be.empty");
        cy.get(policyNameId).should("be.visible").should("be.empty");
        cy.get(policyPostcodeId).should("be.visible").should("be.empty");
        this.verifyTableHasResults();
        return this;
    },
    verifyTableHasResults: function(){
        cy.get(tableBodyId).find('tr').should('be.visible').should('have.length.greaterThan', 0);
    }
}

const tableBodyId = '[data-testid="retrieve-quote-table-body"]';
const policyNumberId = '[data-testid="policy-number"]';
const policyNameId = '[data-testid="policy-name"]';
const policyPostcodeId = '[data-testid="policy-postcode"]';

export default RecentActivityPage;