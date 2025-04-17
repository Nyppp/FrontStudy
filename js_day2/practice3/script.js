function searchMovies(){
    const searchInput = document.getElementById('searchInput');
    const searchQuery = searchInput.value;

    const xhr = new XMLHttpRequest();
    xhr.open('GET', `http://www.omdbapi.com/?apikey=4808825d&s=${searchQuery}`, true);

    xhr.onload = function(){
        if(xhr.status === 200){
            const response = JSON.parse(xhr.responseText);
            displayResults(response.Search);
        } else{
            console.error('Error:', xhr.status);
        }
    };

    xhr.onerror = function(){
        console.error('Network Error');
    };

    xhr.send();
}

function displayResults(results) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';

    if(!results || results.length === 0){
        resultsDiv.textContent = "No movies found.";
        return;
    }

    results.forEach(function(movie){
        const resultDiv = document.createElement('div');
        resultDiv.classList.add('result');

        const resultImg = document.createElement('img');
        resultImg.classList.add('poster');
        resultImg.src = movie.Poster;
        resultImg.alt = movie.Title;

        const titleElement = document.createElement('h2');
        titleElement.classList.add('title');
        titleElement.textContent = movie.Title;

        const infoElement = document.createElement('p');
        infoElement.classList.add('info');
        infoElement.textContent = `Year: ${movie.Year}, Type: ${movie.Type}` ;

        const stringDiv = document.createElement('div');
        stringDiv.classList.add("desc");
        
        resultDiv.appendChild(resultImg);
        stringDiv.appendChild(titleElement);
        stringDiv.appendChild(infoElement);
        resultDiv.appendChild(stringDiv);
        resultsDiv.appendChild(resultDiv);
    });
}