/// <reference types="cypress" />

export function create_new_user(datatable) {
  cy.get(":nth-child(5) > a").click();
  datatable.hashes().forEach((element) => {
    cy.get('#employee_first_name').type(element.firt_name);
    cy.get("#employee_last_name").type(element.last_name);
    cy.get("#employee_identification").type(element.identification);
    cy.get("#employee_leader_name").type('Casare');
    let  email_user= "prueba@test.com";
    cy.get('#employee_email').type(email_user);
    let day = element.date_born.substring(0,2);
    let month =  element.date_born.substring(3,5);
    let year =  element.date_born.substring(6,10);
    // cy.get('option').eq(0).should('contain', year).select()
   });
  
}
export function btn_crete_user() {
  cy.get(".actions > input").click();
}

export function screencreatevalidate(datatable) {
  cy.contains('Administrative User').click();
  cy.contains("Employees Information").click();
    datatable.hashes().forEach((element) => {
      cy.contains(element.firt_name).should('be.visible');
      //cy.get('table').eq(0).should('contain', element.firt_name)
  })
}
export function screencreatenumberfile(content) {
  cy.get("#content > h1")
    .contains(content, { timeout: 10000 })
    .should("be.visible");
}
export function delete_user(datatable) {
  cy.get(".selected > a").click();
  datatable.hashes().forEach((element) => {
    cy.contains(element.firt_name).select();
    cy.get(":nth-child(3) > :nth-child(4) > a").click();
  })
}

export function screencreatedeleteuser(content) {
  cy.get("#content > h1")
    .contains(content, { timeout: 10000 })
    .should("be.visible");
}

