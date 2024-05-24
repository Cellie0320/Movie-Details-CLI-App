// Import necessary modules
const { fetchMovie } = require('./api');
const readline = require('readline');

// Function to handle user input
function getUserInput() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question('Enter a movie title (or type "exit" to quit): ', (title) => {
        // If the user types "exit", close the application
        if (title.trim().toLowerCase() === 'exit') {
            console.log('Goodbye!');
            rl.close();
            return;
        }

        // Fetch movie details for the entered title
        fetchMovie(title.trim(), (error, movieDetails) => {
            if (error) {
                console.error('Error Fetching Movie Details: ', error);
            } else {
                console.log('Movie Details: ', movieDetails);
            }
            // Continue asking for another movie title
            rl.close(); // Close the readline interface
            getUserInput(); // Call the function recursively to ask for another movie title
        });
    });
}

// Start gathering user input
getUserInput();
