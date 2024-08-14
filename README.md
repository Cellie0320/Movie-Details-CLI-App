# Movie Details CLI App

This is a Command Line Interface (CLI) application that fetches movie details from the OMDb API. The application prompts the user to enter a movie title and returns a JSON object with the movie's title, year, IMDb rating, language, and plot.

## Features

- Makes HTTP requests to the OMDb API using the `request` NPM module.
- Gets a JSON object that includes the movie's title, year, IMDb rating, language, and plot.
- Interacts with the user through the command line.
- Continuously prompts the user for movie titles until the user types "exit".

## Prerequisites

- [Node.js](https://nodejs.org/) installed on your machine.
- OMDb API key. You can obtain one by signing up at [OMDb API](http://www.omdbapi.com/apikey.aspx).

## Installation

1. Clone the repository:
    ```bash
    git clone <repository-url>
    cd <repository-directory>
    ```

2. Install the necessary dependencies:
    ```bash
    npm install request readline
    ```

## Configuration

Replace the placeholder API key in the `api.js` file with your actual OMDb API key:
```javascript
const Configuration = {
    omdb: {
        apiKey: 'your-omdb-api-key', // Replace with your OMDb API Key
    }
};
````

## License
This project is licensed under the Apache License 2.0 - see the LICENSE file for details.

Copyright [2024] [Marcel De Lange].
