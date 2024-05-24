const request = require('request');

// Load Configuration
const Configuration = {
    omdb: {
        apiKey: 'b30d8132  ', // Replace with your OMDb API Key
    }
};

// Fetch Movie Details from OMDb
/**
 * @param {string} title
 * @param {function} callback
 */
function fetchMovie(title, callback) {
    const encodedTitle = encodeURIComponent(title);
    const url = `http://www.omdbapi.com/?t=${encodedTitle}&apikey=${Configuration.omdb.apiKey}`;

    request(url, { json: true }, (error, response, body) => {
        if (error) {
            callback(error, null);
            return;
        }

        if (response.statusCode !== 200 || body.Response === 'False') {
            callback(new Error('Failed to Fetch Movie Details'), null);
            return;
        }

        // Parse and Display Details
        const movieDetails = {
            title: body.Title,
            year: body.Year,
            imdbRating: body.imdbRating,
            language: body.Language,
            plot: body.Plot
        };

        callback(null, movieDetails);
    });
}

// Export Functions
module.exports = {
    fetchMovie
};
