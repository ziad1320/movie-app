const apiKey = "f5a452626cda4ba2ce56b27606b67f70";
const params = new URLSearchParams(window.location.search);
const id = params.get('id');
const type = params.get('type');
const detailsUrl = `https://api.themoviedb.org/3/${type}/${id}?api_key=${apiKey}&language=en-US`;

const detailsContent = document.getElementById('details-content');

fetch(detailsUrl)
    .then(response => response.json())
    .then(data => {
        detailsContent.innerHTML = `
            <div><img src="https://image.tmdb.org/t/p/w500${data.poster_path}" alt="${data.title}"></div>
            <div><h1 class="title">${data.title}</h1>
            <p>${data.overview}</p>
            <p>Release Date: ${data.release_date}</p>
            <p>Rating: ${data.vote_average}</p></div>
        `;
        document.querySelector("body").style.backgroundImage = `url(https://image.tmdb.org/t/p/original${data.backdrop_path})`;
    });
