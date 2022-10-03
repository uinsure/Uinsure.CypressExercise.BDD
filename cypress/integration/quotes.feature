Feature: Search through my quotes

@quotes
Scenario Outline: Search for quotes - single search type
	Given I am an adviser on the recent activty page
    When I search by '<searchType>' with '<searchTerm>'
    Then I verify the search '<searchType>' with '<searchTerm>' result
    When I click reset field
    Then I verify the search has been reset

	Examples:
		| searchType        | searchTerm        |
    	| reference         | UINH53208201      |
        | reference         | 6434              |
        | reference         | 3                 |
        | reference         | 53206601          |
        | reference         | ULC               |
        | name              | Faye              | 
        | name              | Malia             | 
        | name              | Faye Pease        | 
        | name              | very              |
        | postcode          | PR7 7AU           |

@search
Scenario Outline: Search for quotes - multiple search types
#//TODO
@search
Scenario Outline: Search for quotes - bad inputs
#//TODO