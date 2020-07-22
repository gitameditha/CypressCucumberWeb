        @resgistration
Feature: Log in Website SSC

As Admin, I ahould be able to Log in

@PositiveTesting
Scenario: Login using valid email

    Given I go to Web bukalapak
    When I click registration button
    And I Input username
    And I Input email
    And I Chose gender
    And I Input bukalapak username
    And I Input password
    And I reinput password
    And I check checkbox
    And I submit button