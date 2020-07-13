<h1> Cube App <h1>


<h3> What is this app about? <h3>

This app was developed for avid cube groups for the card game Magic: the Gathering.
Since a lot of effort is put into creating a cube with a balanced and level playing field, it is tough to gather real statistics from the past games. This app will bring more insights into the statistics of a cube, along with insights for the player.



The flow for a user is fairly simple:

- For each card drafted in real life, a player must select the card in the drafting section.

- After completing the draft, a player will then save his or her deck to the database.

- Insights are made dynamically with graphs for converted manacost, spell type count, and color count.

As a last feature a lifecounter has been added to make lifecounters (usually in the form of d20's) obsolete. Opponents can be added here as well to allow for multiplayer games as well.





///See a working version of this app by clicking on this link///




## Used technologies and concepts

- React for UI building
- Redux for state management
- Authentication
- Express as web app framework
  - REST API 
- Sequelize as ORM
- Many-to-many models :sparkle:
- Bootstrapp UI as component library 
- Chart-js-2 as graph library :sparkle:

:sparkle: _New technology learned through this project_



## Goals for this project

The goal of this project is to build a full-stack app, practicing known and exploring new technologies (see above). I learned these new tools independently by reading its documentation.
 - practice full-stack app development
- apply what we learned in Codaisseur's Academy
- extend with new technology independently
- showcase and document development skills using:
   - wireframes as Minimum Viable Product
   - conscious data model design
   - user stories perspective
   - [agile/kanban project approach] (https://github.com/SrSombre/CubeStats-Project-Board/projects/1)
   - transparant and structured git version control


## User stories

- As a player, I want to be able to log in so I can start gathering drafting data.
- As a player, I want to be able to start a draft after I've logged in.
- As a player, I want to be able to sort/filter all the cards in the cube to easily select my drafted card, but also to get a better idea of which cards I've drafted so far.
- As a player, I want to select my drafted cards from the cube and store them into a deck.
- As a player, I want to be able to see my previous drafted decks, as well as other players previously drafted decks.
- As a player, I would like to have a life counter page for my games after the draft. This way I will only need my phone from now on. No more dices to keep track of lifetotals..



## Wireframe

/// Picture needs to be added ///

## Datamodel

/// Picture needs to be added ///

## Backend server repo

The backend repo that belongs to this project is an Express server using Sequelize to manage the Postgres database. You can find it [here] (https://github.com/SrSombre/CubeStats-server)
