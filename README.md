# Moodvies
Moodvies is a React SPA frontend which serves as an interface for a subset of functionality provided through the TMDB API.

## What is the TMDB API?
The TMDB API is a REST API that makes available read and write capabilities to "The Movie Database" (https://www.themoviedb.org/).

## Purpose of Moodvies
To present users with a subset of the TMDB API functionality presented in a clean, no fuss manner. Making the discovery of movies easy and painless.

## Local Setup
Install the latest version of Node.js JavaScript runtime environment. You can find the download the prebuilt installer for your OS (Windows or Mac) at https://nodejs.org/en. Downloading the LTS version is recommended.

The Node.js installation will include NPM (Node package manager). NPM is required for running the application locally.

Once Node.js is installed, navigate to the root project directory through your terminal, and execute the following command: `npm run dev`.

![image](https://github.com/wendelchinsamy/moodvies/assets/102801159/d15cff60-bd53-4289-961c-812bf039f451)

This starts up the Node.js web server.

![image](https://github.com/wendelchinsamy/moodvies/assets/102801159/e4849989-3841-4397-8899-02d78ee1a784)

In your web browser, visit http://localhost:3333, to view the Moodvies web application.

## Test Cases
### Testing Search
The home page provides a search for movies via their title. Type in "any search term" into the search input box and either hit enter or click on the search button. This should bring up results if movies were found or you will be presented with the "NO SEARCH RESULTS" message. If more than 20 records were found in on TMDB then you will provided with a "NEXT PAGE" button (an arrow pointing to the right).

Type in "Matrix", this will return the first page and present you will a "NEXT PAGE" button. Clicking on the "NEXT PAGE" button will fire off a new request to the TMDB API and present you with the next page of results.

You will now notice a "PREVIOUS PAGE" button (an arrow pointing to the left). Clicking on the "PREVIOUS PAGE" button will fire off a new request to the TMDB API and and present you with the previous page of results.

Movie search result details should contain a poster (if no poster is available a placeholder image is displayed), a title, and overview, the list of genres, the movie language, release date and it's rating.

### Testing Top Rated, Trending and Popular
Top rated, trending and popular movies are determined throught a variety of methods determined by TMDB. Testing the top rated, trending and popular pages will involve a similar set of steps. Once on the page you will be presented with a set of results and a "NEXT PAGE" (an arrow pointing to the right) button. Clicking on the "NEXT PAGE" button will load the next page of results. You will now be presented with a "PREVIOUS PAGE" (an arrow pointing to the left) button as well. Clicking on the previous page button will load the results you had just viewed.

Top rated, trending and popular search result details should contain a poster (if no poster is available a placeholder image is displayed), a title, and overview, the list of genres, the movie language, release date and it's rating.

### Testing Reviews
Each search result (home, top rated, trending and popular) will present a "REVIEW" button. Clicking on the review button will load the reviews page for a particular movie. To test reviews from the home page search "The Matrix". Click on the "REVIEW" button of the first search result with movie title "The Matrix". This should load up the review page for the movie "The Matrix". Reviews will contain, the review author name, the date of the review, a star rating (up to ten) and the review description.


