Feature: login

  I want to login an account into gap vacations page

  Scenario: login in gap vacations page
    Given user is in home page
    When user enter email and password
      | email                              | passwd   |
      | gap-automation-test@mailinator.com | 12345678 |
    And user click in sing in
    And validate logo
    And validate user login
    And validate banner login
    Then user can see "Signed in successfully." page hould be shown
