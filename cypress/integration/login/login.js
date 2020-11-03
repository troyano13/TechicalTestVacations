/// <reference types="cypress" />
import {
  navigate,
  btnsignin,
  emailsigin,
  userlogin,
  logosite,
  banneruser,
  screencreate
} from "../../page-objects/login";

Given("user is in home page", () => {
  navigate();
});
When("user enter email and password", (datatable) => {
  emailsigin(datatable);
});
When("user click in sing in", () => {
  btnsignin();
});
When("validate logo", () => {
  logosite();
});
When("validate user login", () => {
  userlogin();
});
When("validate banner login", () => {
  banneruser();
});

Then("user can see {string} page hould be shown", (content) => {
  screencreate(content);
});
