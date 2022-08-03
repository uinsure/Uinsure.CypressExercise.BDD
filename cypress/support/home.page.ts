class Homepage {
    get buildingsAndContents() {
        return cy.get('[data-testid="qt-homeinsurance-bc"]');
    }
    get recentActivityTab() {
        return cy.get('[data-testid="nav-drawer-item-recent-activity-label"]');
    }
    get quoteReference() {
        return cy.get('[data-testid="policy-number"]');
    }
    get search() {
        return cy.get('[data-testid="filter-button"]');
    }
}

export default new Homepage();
