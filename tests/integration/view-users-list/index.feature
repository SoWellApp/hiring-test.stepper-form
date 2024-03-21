Feature: View users list
    Background:
        Given I am authenticated as "user-test"
        And I am on the "Users list" page

    Scenario: View the 6 users
        Then I can see the page header "Untitled page"
        And I see a searchbar
        And I see 6 users on the page
        And I see the following details for each user
            | first name | last name | email              | city        |
            | john       | doe       | john@gmail.com     | kilcoole    |
            | david      | morrison  | morrison@gmail.com | kilcoole    |
            | kevin      | ryan      | kevin@gmail.com    | Cullman     |
            | don        | romer     | don@gmail.com      | San Antonio |
            | derek      | powell    | derek@gmail.com    | san Antonio |
            | david      | russell   | david_r@gmail.com  | el paso     |
        When I write "da" on the searchbar
        Then I see 2 users on the page
        And I see the following details for each user
            | first name | last name | email              | city     |
            | david      | morrison  | morrison@gmail.com | kilcoole |
            | david      | russell   | david_r@gmail.com  | el paso  |



