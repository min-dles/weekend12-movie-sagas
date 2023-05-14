# Movie App

This weekend challenge is to expand on a movie management appliation. The website shows a detailed view for each individual movie listed and stored on the database (using Postgres) with the following information for each movie: title, movie poster, description, and genre. There are multiple tables storing the data for each movie that is accessed in this application.

## Technologies / Languages Used:
- React-Redux
- Redux-Sagas
- SQL
- PostgreSQL 
- Postico 
- API management

## Description

There are several routes or views available in this application: 
- `HOME` displays all the movies in the movie collection (stored in the database) 
    - [ ] each movie poster displayed on the HOME page can be clicked and subsequently routes the user to a `/details` view unique to the respective movie and sharing more information (like description and genre).
- `DETAILS` shows all the details for each individual movie (movie title, movie poster [img], movie description, and movie genre(s))
    - each `details` page generated includes a `Back To List` button to route user back to the `HOME` page 