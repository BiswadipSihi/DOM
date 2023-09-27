const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const movieResults = document.getElementById('movie-results');
    
searchButton.addEventListener('click', () => {
    const searchTerm = searchInput.value.trim();
    
    if (searchTerm !== '') {
        let apiUrl = `http://www.omdbapi.com/?s=${searchTerm}&apikey=434804eb`;
    
         fetch(apiUrl)
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                displayResults(data);
            })
            .catch((error) => {
                 console.error('Error:', error);
            });
    }
});
    
function displayResults(data) {
    if(data.Search && data.Search.length > 0){
        data.forEach(movie => {
            let movieCard = document.createElement("div");
            movieCard.className = "card";

            let photo = document.createElement("img");
            photo.src = movie.Poster; 

            let title = document.createElement("P")
            title.textContent = "Title: "+ movie.Title;
    
            let year = document.createElement("p");
            year.textContent ="Year: " +movie.Year;
  
            let actor = document.createElement("p");
            actor.textContent ="Actors: " +movie.Actors;

            userCard.append(title,photo,actor,year);

            movieResults.append(movieCard);
        });
    }else{
        movieResults.innerHTML = '<p>No results found</p>';
    };
}