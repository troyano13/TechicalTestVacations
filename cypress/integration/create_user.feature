Feature: create_user
  I want to create an account into gap vacations page

  Scenario: login in gap vacations
    Given user is in home page
    When user enter email and passwords
      | email                              | passwd   |
      | gap-automation-test@mailinator.com | 12345678 |
    And user enter name identification and date born to create new user
      | firt_name | last_name | identification | date_born  |
      | James     | Smith     | 1234567890     | 21-01-2015 |
    And validate create of user
      | firt_name |
      | James     |
    And number of de list
    And user delecte of user
    Then user can see "user delete" in the page


