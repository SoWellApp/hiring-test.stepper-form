Feature: View posts list
    Background:
        Given I am authenticated as "dotaGear"
        And I am on the post page
        And I see the page title "PostsList"

    Scenario: View the 10 posts
        Then I see a searchbar with label "Input post title or body to search"
        And I see 10 posts on the "PostsList" page
        And I see the "LOAD MORE POST" button
        When I click on the "Load more post" button
        Then I see 20 posts on the "PostsList" page
        When I fill the search form with "magnam"
        Then I see 10 posts on the "PostsLists" page
        And The first post should be titled "magnam facilis autem"

