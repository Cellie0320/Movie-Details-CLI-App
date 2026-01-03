const fetch = require('node-fetch');

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

    (async () => {
        try {
            const response = await fetch(url);

            if (!response.ok) {
                throw new Error('Failed to Fetch Movie Details');
            }

            const body = await response.json();

            if (body.Response === 'False') {
                throw new Error(body.Error || 'Failed to Fetch Movie Details');
            }

            const movieDetails = {
                title: body.Title,
                year: body.Year,
                imdbRating: body.imdbRating,
                language: body.Language,
                plot: body.Plot
            };

            callback(null, movieDetails);
        } catch (error) {
            callback(error, null);
        }
    })();
}

// Export Functions
module.exports = {
    fetchMovie
};
