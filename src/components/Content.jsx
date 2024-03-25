export default function Content({ query, content }) {

    const getData = async () => {
        try {
            // Construct the API endpoint URL with the search query
            const apiUrl = `https://openlibrary.org/search.json?q=${query}`;

            // Make a GET request to the API endpoint
            const response = await fetch(`https://openlibrary.org/search.json`);

            // Check if the response is successful
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            // Parse the JSON response
            const data = await response.json();

            // Return the search results
            return data;
        } catch (error) {
            // Handle any errors that occur during the API call
            console.error('An error occurred while fetching data:', error);
            throw error;
        }

        // Example usage:

    }
}
