Feature: Authenticate with my email & password
  As an "Visitor"
  I want to authenticate using my email and password
  Because I want to access to the admin interface of my company

  Background:
    Given the user "sw-admin@sowellapp.com" exists

  Scenario: A visitor must be able to see the authentication form
    Given I am on the Admin Login page
    Then I can see an empty Authentication form

  Scenario: A visitor must be able to authenticate by providing his credentials
    Given I am on the Admin Login page
    When I type "sw-admin@sowellapp.com" on the "Email" input
    And I type "sowelladm" on the "Password" input
    And I click on the Sign-in button
    Then I'm redirected to the Admin Manage users page

  Scenario: A visitor won't be able to authenticate by providing unknown email
    Given I am on the Admin Login page
    When I type "unknown@account.com" on the "Email" input
    And I type "123456" on the "Password" input
    And I click on the Sign-in button
    Then the following Error message is displayed : "Bad credentials"
    And I'm not redirected

  Scenario: A visitor won't be able to authenticate by providing wrong password
    Given I am on the Admin Login page
    When I type "sw-admin@sowellapp.com" on the "Email" input
    And I type "badpassword" on the "Password" input
    And I click on the Sign-in button
    Then the following Error message is displayed : "Bad credentials"
    And I'm not redirected
