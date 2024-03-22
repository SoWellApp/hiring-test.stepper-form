Feature: Authenticate with an username and password
    Background:
        Given I am on the Login page

    Scenario: I am redirected on the login page
        Then I can see "Login" on the page title
        And I can see the following inputs:
            | input    |
            | username |
            | password |

        And I can see a login button
        And the login button is "disabled"

    Scenario: I can log in with a valid username and password
        When I type "test" on the Username input
        And I type "Fandresen@1" on the Password input
        Then the login button is "enabled"
        When I click on the login button
        Then I am redirected to the Main page

    Scenario: I can toggle the Password input
        Then I can see a toggle button on the Password input
        When I type "password" on the Password input
        And I click on the toggle button on the Password input
        Then I can see the "password" typed on the Password input

    Scenario: I cannot login with invalid username or password
        When I focus on the Username input
        And I focus out of the Username input
        Then I see an error message for the Username input saying "Username is required"
        And the login button is "disabled"
        When I type "username" on the Username input
        Then the error message is no longer visible

        When I type "aaa" on the Password input
        Then I see an error message for the Password input saying "Password strength: Too Short"
        And the login button is "disabled"

        When I type "sAdA12" on the Password input
        Then I see a warning message saying "Password strength: Medium"
        And the login button is "enabled"

        When I type "12" on the Password input
        Then I see a message saying "Password strength: Strong"
        And the login button is "enabled"