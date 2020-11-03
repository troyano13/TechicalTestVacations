/// <reference types="cypress" />
import { navigate, btnsignin, emailsigin } from "../../page-objects/login";
import { create_new_user, btn_crete_user , screencreatevalidate , delete_user} from "../../page-objects/create_user";
;

Given("user is in home page", () => {
  navigate();
});
When("user enter email and passwords", (datatable) => {
  emailsigin(datatable);
  btnsignin();
});

When(
  "user enter name identification and date born to create new user",
  (datatable) => {
    create_new_user(datatable); 
    btn_crete_user();
    
  }
);

When("validate create of user", (datatable) => {
  screencreatevalidate(datatable);
});

When("number of de list", () => {});

When("user delecte of user", (datatable) => {
  delete_user(datatable);
});

Then("user can see {string} page hould be ", (content) => {
  emailsigin(content);
});
