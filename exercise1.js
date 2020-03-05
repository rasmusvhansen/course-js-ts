// imports a database with movies
const movies = require('./movies.json');

const byRating = (a, b) => b.IMDB_Rating - a.IMDB_Rating;
const byRatingAsc = (a, b) => a.IMDB_Rating - b.IMDB_Rating;

// npm install -g nodemon
// nodemon exercise1.js

// Use https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array as a reference. You will probably need to use
// length, slice, map, filter, sort, reduce and maybe find, some, every

// Solve the exercises without using loops. All exercises can be solved as "one-liners"

// 1. print the number of movies in the database
console.log(movies.length);

// 2. print the Title and release date of the 5 first movies in the list
console.log(movies.slice(0, 5).map(m => ({ title: m.Title, date: m.Release_Date })));

// 3. print the first 5 movies with an IMDB rating over 8.0
console.log(movies.filter(m => m.IMDB_Rating > 8).slice(0, 5));

// 4. print the Title and release date of the first 5 movies with an IMDB rating over 8.0
console.log(
  movies
    .filter(m => m.IMDB_Rating > 8)
    .slice(0, 5)
    .map(m => ({ title: m.Title, date: m.Release_Date }))
);

// 5. print the Title and release date of the first 5 movies directed by Martin Scorsese
console.log(
  movies
    .filter(m => m.Director === 'Martin Scorsese')
    .slice(0, 5)
    .map(m => ({ title: m.Title, date: m.Release_Date }))
);

// 6. print the Title of the 5 movies with the highest IMDB rating
console.log(
  movies
    .sort(byRating)
    .slice(0, 5)
    .map(m => ({ title: m.Title, date: m.Release_Date }))
);

// 7. print all properties of "To Kill A Mockingbird"
console.log(movies.find(m => m.Title === 'To Kill A Mockingbird'));

/* ------------------------------ ADVANCED -----------------------------------*/

// 7. print the total Worldwide_Gross of all movies in the list
console.log(movies.reduce((sum, m) => sum + m.Worldwide_Gross, 0));

// 8. print the total Worldwide_Gross of all James Camerons movies
console.log(movies.filter(m => m.Director === 'James Cameron').reduce((sum, m) => sum + m.Worldwide_Gross, 0));

// 9. print the total Worldwide_Gross of the 10 worst movies (only regard movies that have a non-null IMDB rating)
console.log(
  movies
    .filter(m => m.Worldwide_Gross != null)
    .sort(byRatingAsc)
    .slice(0, 10)
    .reduce((sum, m) => sum + m.Worldwide_Gross, 0)
);

// 10. print the total Worldwide_Gross of all Major_Genres (disregard movies with null Major_Genre)
console.log(
  movies
    .filter(m => m.Major_Genre != null)
    .reduce((genres, m) => {
      genres[m.Major_Genre] = (genres[m.Major_Genre] || 0) + m.Worldwide_Gross;
      return genres;
    }, {})
);

// 11. transform the list to a dictionary where the keys are director names, and the values are arrays of movies.
//     use the dictionary to print all movies by Stanley Kubrick
const byDirector = movies
  .filter(m => !!m.Director)
  .reduce((dic, m) => {
    const list = dic[m.Director] || [];
    list.push(m);
    dic[m.Director] = list;
    return dic;
  }, {});
console.log(byDirector['Stanley Kubrick']);

// 12. Find the directors of the 10 best movies.
//     Have any of these directors made movies that score lower than 6.0
const directorsOf10BestMovies = movies
  .sort(byRating)
  .filter(m => !!m.Director)
  .slice(0, 10)
  .map(m => m.Director);
console.log(directorsOf10BestMovies.find(d => movies.some(m => !!m.IMDB_Rating && m.IMDB_Rating < 5 && m.Director === d)));

// 13. Find the top 5 directors by their movies' average rating
const averageRating = movies => {
  const moviesWithRating = movies.filter(m => m.IMDB_Rating);
  return moviesWithRating.length ? moviesWithRating.reduce((sum, m) => sum + m.IMDB_Rating, 0) / moviesWithRating.length : 0;
};
console.log(
  Object.keys(byDirector)
    .sort((a, b) => averageRating(byDirector[b]) - averageRating(byDirector[a]))
    .slice(0, 5)
);
