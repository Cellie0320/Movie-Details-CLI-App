const request = require('request');
const fs = require('fs');

//Load Configuration
const Configuration = 
{
    omdb: {
            apiKey: '8d567fb9', //OMDb API Key
          }
};

//Fetch Movie Details from OMDb
/**
 * @param {string} title
 * @param {function} callback
 */

function fetchMovie(title, callback) 
{
    const url = `http://www.omdbapi.com/?i=tt3896198&apikey=${Configuration.omdb.apiKey}`;


    request(url, {json: true}, (error, response, body) => {
                                                            if(error)
                                                            {
                                                                callback(error, null);
                                                                return;
                                                            }

                                                            if(response.statusCode !== 200)
                                                            {
                                                                callback(new Error('Failed to Fetch Movie Details'), null);
                                                                return;
                                                            }

                                                            //Parse and Display Details
                                                            const movieDetails = 
                                                            {
                                                                title: body.Title,
                                                                year: body.Year,
                                                                imdbRating: body.imdbRating,
                                                                language: body.Language,
                                                                plot: body.Plot
                                                            };

                                                            callback(null, movieDetails);
                                                          });
}

//Read Query from File
/**
 * 
 * @param {string} filename 
 * @returns {Array<strings}
 */

function readQuery(filename) 
{
    try 
    {
        const data = fs.readFileSync(filename, 'utf8');
        return data.split(',');
    } 
    catch (error) 
    {
        console.error('Error Reading File : ', error);
        return null;
    }
}

//Export Functions
module.exports = 
{
    fetchMovie, readQuery
};
