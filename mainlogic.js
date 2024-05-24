const {fetchMovie, readQuery} = require('./api');

//Handle Commands
/**
 * 
 * @param {string} command 
 * @param {string} query 
 */

function commmandHandler(command, query) 
{
    switch (command) 
    {
        case 'omdb':
            fetchMovie(query, (error, movieDetails) => {
                                                        if (error) 
                                                        {
                                                            console.error('Error Fetching Movie Details : ', error);
                                                        } 
                                                        else 
                                                        {
                                                            console.log('Movie Details : ', movieDetails);
                                                        }
                                                       });
            break;
        default:
            console.log('Unknown Command');
    }
}

//Main Execution
const queryData = readQuery('random.txt');

if (queryData) 
{
    const [command, query] = queryData;

    if (command && query) 
    {
        commmandHandler(command.trim(), query.trim());
    } 
    else 
    {
        console.log('Invalid Command and or Query in File.');
    }
}
else
{
    console.log('Failed to Read Query from File.');
}
