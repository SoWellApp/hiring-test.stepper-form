Feature: Get redirected to the login page
  As a "Visitor"
  I want to be redirected to the Admin Login page
  Because I want to authenticate easily in order to use the app

  Scenario: A visitor must be redirected to the login page when he opens the app
    Given the App is closed
    When I open the App
    Then I am redirected to the Admin Login page

  Scenario: A visitor must be redirected to the login page while he's not authenticated
    Then I can't go to any page except the following ones :
      | Name       |
      | Login page |

  Scenario: An user must be redirected to the login page when is authentication expired
    Given I am authenticated as "sw-admin@sowellapp.com"
    And my authentication expired
    Then I can't go to any page except the following ones :
      | Name       |
      | Login page |
