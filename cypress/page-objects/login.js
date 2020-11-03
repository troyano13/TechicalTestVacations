/// <reference types="cypress" />

export function navigate() {
  cy.visit("https://vacations-management.herokuapp.com/users/sign_in");
}

export function emailsigin(datatable) {
  datatable.hashes().forEach((element) => {
    cy.get("#user_email").type(element.email);
    cy.get("#user_password").type(element.passwd);
  });
}
export function btnsignin() {
  cy.get(".submit").click();
}
export function screencreate(content) {
  cy.get("#content > h1")
    .contains(content, { timeout: 10000 })
    .should("be.visible");
}
export function logosite() {
  cy.get('#logo').should('be.visible');
}
export function userlogin() {
  cy.get('.flash_notice').should('be.visible');
}
export function banneruser() {
  cy.get('#content > h1').should('be.visible');
}
