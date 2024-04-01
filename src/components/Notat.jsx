// denne koden skal kunne brukes til å forutbestemme hvor mange objekter man fetcher

fetch('https://openlibrary.org/search.json?q=your_query_here')
    .then(response => response.json())
    .then(data => {
        // Assuming the API response contains a 'docs' property which is an array of objects
        const numberOfObjects = data.docs.length;
        console.log('Number of objects fetched:', numberOfObjects);
        // You can then use this number as needed in your application
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
