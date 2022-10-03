import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import homePage from '../../support/pageObjects/home.page';
import loginPage from '../../support/pageObjects/login.page';
import RecentActivityPage from "../../support/pageObjects/recentActivity.page";
import { loginDetails } from '../TestData/login';

before(() => {
    cy.visit('/');
    cy.url().should('include', 'quotes.test');
    loginPage.email.type(loginDetails.emailAddress);
    loginPage.password.type(loginDetails.password);
    loginPage.signInButton.click();
    homePage.buildingsAndContents.should('be.visible');
    homePage.menu.should("be.visible").click();
    homePage.recentActivityTab.should("be.visible").click();
});

Given(`I am an adviser on the recent activty page`, () => {
    cy.url().should('include', 'retrieve-quote');
});

When(`I search by {string} with {string}`, (searchType, searchTerm) => {
    RecentActivityPage
        .selectSearchTypeAndEnterSearchTerm(searchType, searchTerm)
        .clickSearchButton(searchType);
});

Then(`I verify the search {string} with {string} result`, (searchType, searchTerm) => {
    RecentActivityPage
        .verifyTopSearchResult(searchType, searchTerm);
});

When(`I click reset field`, () => {
    RecentActivityPage
        .clickResetButton();
});

Then(`I verify the search has been reset`, () => {
    RecentActivityPage
        .verifySearchFieldsReset();
});