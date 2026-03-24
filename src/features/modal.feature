Feature: DemoQA Modal Dialogs
  As a user
  I want to open and close modal dialogs
  So that I can validate their content and visibility

  Background:
    Given user is on DemoQA Modal Dialogs page

  Scenario: Handle Small Modal
    When user opens Small Modal
    Then Small Modal should be visible with title "Small Modal" and body contains "This is a small modal"
    When user closes Small Modal
    Then Small Modal should be closed

  Scenario: Handle Large Modal
    When user opens Large Modal
    Then Large Modal should be visible with title "Large Modal"
    When user closes Large Modal
    Then Large Modal should be closed
