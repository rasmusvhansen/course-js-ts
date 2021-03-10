// imports a database with movies
const fs = require('fs');
const movies = JSON.parse(fs.readFileSync('./movies.json', 'utf8'));

// npm install -g nodemon
// nodemon exercise1.js

// Use https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array as a reference. You will probably need to use
// length, slice, map, filter, sort, reduce and maybe find, some, every

// Solve the exercises without using loops. All exercises can be solved as "one-liners"

// 1. print the number of movies in the database

// 2. print the Title and release date of the 5 first movies in the list

// 3. print the first 5 movies with an IMDB rating over 8.0

// 4. print the Title and release date of the first 5 movies with an IMDB rating over 8.0

// 5. print the Title and release date of the first 5 movies directed by Martin Scorsese

// 6. print the Title of the 5 movies with the highest IMDB rating

// 7. print all properties of "To Kill A Mockingbird"

/* ------------------------------ ADVANCED -----------------------------------*/

// 7. print the total Worldwide_Gross of all movies in the list

// 8. print the total Worldwide_Gross of all James Camerons movies

// 9. print the total Worldwide_Gross of the 10 worst movies (only regard movies that have a non-null IMDB rating)

// 10. print the total Worldwide_Gross of all Major_Genres (disregard movies with null Major_Genre)

// 11. transform the list to a dictionary where the keys are director names, and the values are arrays of movies.
//     use the dictionary to print all movies by Stanley Kubrick

// 12. Find the directors of the 10 best movies.
//     Have any of these directors made movies that score lower than 6.0

// 13. Find the top 5 directors by their movies' average rating
