Feature: Home page navigation

  Scenario: Open Elements section from Home page
    Given user is on DemoQA home page
    When user opens Elements section
    Then Elements section should be displayed with left menu items

  Scenario: Open Forms section from Home page
    Given user is on DemoQA home page
    When user opens Forms section
    Then Forms section should be displayed
