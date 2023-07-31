@regression
Feature: WebDriverUniversity Login Page

    Scenario: Login using valid credentials
        Given I access the WebdriverUniversity Login Portal page
        #this is a precondition
        When I enter a username webdriver
        And I enter a password webdriver123
        And I click on the login button
        Then I should be presented with the following message validation succeeded

    Scenario: Login using invalid credentials
        Given I access the WebdriverUniversity Login Portal page
        #this is a precondition
        When I enter a username webdriver
        And I enter a password webdriver1234
        And I click on the login button
        Then I should be presented with the following message validation failed

    @login
    Scenario Outline: Test Login via WebdriverUniversity Login Portal
        Given I access the WebdriverUniversity Login Portal page
        When I enter a username <username>
        And I enter a password <password>
        And I click on the login button
        Then I should be presented with the following message <message>

        Examples:
            | username  | password      | message              |
            | webdriver | webdriver123  | validation succeeded |
            | webdriver | webdriver1234 | validation failed    |
            | lekizmaj  | lea1234       | validation failed    |