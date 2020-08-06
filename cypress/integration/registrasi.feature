        @resgistration
Feature: Registrasi Website bukalapak

As user, I should be able to Log in

@PositiveTesting
Scenario: Registrasi using valid email
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