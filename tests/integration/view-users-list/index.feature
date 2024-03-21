Feature: View users list

  Background:
    Given I am authenticated as an "user-test-2"
    And I am on the user page
    And I see the page title is "UserPage"

  Scenario: View 5 users
    Then I see 5 users
    And I see a search form with label "name, email"
    And I see the following users list:
      | user name | email              |
      | mor_2314  | morrison@gmail.com |
      | kevinryan | kevin@gmail.com    |
      | snyder    | miriam@gmail.com   |
      | kate_h    | kate@gmail.com     |
      | jimmie_k  | jimmie@gmail.com   |

  Scenario: Search for a user
    When I fill the search form with "mi"
    Then I see 2 users
    And I see the following users list:
      | user name | email            |
      | snyder    | miriam@gmail.com |
      | jimmie_k  | jimmie@gmail.com |
