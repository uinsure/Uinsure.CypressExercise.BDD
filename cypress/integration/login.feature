Feature: Login

    Scenario: Login

        Given the user is on the adviser platform login page
        When the user enters valid details and logs in
        Then the user can navigate to recent activity
