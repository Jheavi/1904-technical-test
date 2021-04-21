# 1904-technical-test

This is a project built for a technical test for an enterprise.

The app is a full responsive react app with Typescript which takes info from the MovieDB api (https://www.themoviedb.org) where you can:

- See a list of last popular movies with a image, the title and the vote average.
- Switch to see a list of last popular tv shows.
- Click on every element to see the detail page with a bigger image, the overview and a list of similar movies or shows.

## Author

- Javier Laso(Jheavi)

## To run the project (scripts)

First of all, after downloading, run npm install in frontend folder.

The api key is not included, so you will have to add your own api Key from the MovieDB api. Create a .env file and put inside this line: REACT_APP_API_KEY='Your_api_key' substituing the letters in quotes with your api key.

The scripts you can run with npm are:

- npm start (to start the react app)
- npm test (to see unit & component tests)

## Tech Stack & Libraries

- Typescript
- React
- Redux
- React Testing Library
- Jest

## Unit & Component testing:

![tests](/frontend/public/images/tests.jpg)
![test coverage](/frontend/public/images/coverage.jpg)

## Other Libraries & Tools:

- Axios
- Eslint
- Redux-thunk
- React-router-dom
- Dotenv
- Redux-mock-store
