const apiKey = "9813ce01a72ca1bd2ae25f091898b1c7";
const moviesUrl = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${apiKey}`;
const seriesUrl = `https://api.themoviedb.org/3/discover/tv?sort_by=popularity.desc&api_key=${apiKey}`;

const contentDiv = document.getElementById('content');
const moviesLink = document.getElementById('movies-link');
const seriesLink = document.getElementById('series-link');

function fetchData(url) {
    console.log("Fetching data from:", url); 
    fetch(url)
        .then(response => {
            console.log("Response received:", response); 
            return response.json();
        })
        .then(data => {
            console.log("Data received:", data);

            contentDiv.innerHTML = '';
            data.results.forEach(item => {
                console.log("movie data:", item);

                const card = document.createElement('div');
                card.className = 'card';
                card.innerHTML = `
                    <img src="https://image.tmdb.org/t/p/w500${item.poster_path}" alt="${item.title || item.name}">
                    <h3>${item.title || item.name}</h3>
                    <a href="details.html?id=${item.id}&type=${item.title ? 'movie' : 'tv'}">Details</a>
                `;
                contentDiv.appendChild(card);
            });
        })
        .catch(error => {
            console.error("Error fetching data:", error);
        });
}

moviesLink.addEventListener('click', () => {
    fetchData(moviesUrl);
});

seriesLink.addEventListener('click', () => {
    fetchData(seriesUrl);
});

fetchData(moviesUrl);