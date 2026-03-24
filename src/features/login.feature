Feature: DemoQA Login

  Scenario: Login with valid credentials
    Given I open the DemoQA login page
    When I login with username "testuser" and password "Password@123"
    Then I should see the successful login message
    And I logout from the application
