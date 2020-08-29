
const baseEnedpoint = "https://ghibliapi.herokuapp.com/films";
//Grab the main from html
const movies = document.querySelector('.movies')

// Fecth the object  from the url 
async function fetchMovies () {
    const res = await fetch(`${baseEnedpoint}`);
    console.log(`${baseEnedpoint}`);
    const data = await res.json();
    return data;
}

fetchMovies();
// Function to get the object
 async function objectFilms () {
    const films = await fetchMovies();
    // pass the object into the displayFilms
    displayFilms(films);
    console.log(films);
}
objectFilms();
const displayFilms = (films) => {
    // Sort the score from higher into lower
    const html =  films.sort((a, b) => b.rt_score - a.rt_score)
    // map the films to get an  array
    .map(film => {
        return `
        <div>
           <header class="filmheader">
               <h1>${film.title}</h1>
               <h5 class="date"><u>Release date</u> : ${film.release_date}</h5>
               <h5><u>Score</u> : ${film.rt_score}</h5>
           </header>
           <article>
               <p>
                  ${film.description}
               </p>
           </article>
           <footer>
               <li>
                    <a href="">
                        <u>Director</u> :<i>${film.producer}</i>
                    </a>
                </li>
               <li>
                    <a href="">
                        <u>Producer</u>: <i>${film.director}</i>
                    </a>
                </li>
           </footer>
        </div>
        `
    })
    // insert the html into the movies
    movies.innerHTML = html.join(' ');
}
