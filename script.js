const baseEndpoint = "https://ghibliapi.herokuapp.com/films";
const movies = document.querySelector('.movies');
console.log(movies);

async function fetchMovies () {
    const res = await fetch(`${baseEndpoint}`);
    console.log(`${baseEndpoint}`);
    const data = await res.json();
    return data;
}

fetchMovies();
 async function objectFilms () {
    const films = await fetchMovies();
    displayFilms(films);
}
objectFilms();

const displayFilms = (films) => {
    const html =  films.sort((a, b) => b.rt_score - a.rt_score)
    .map(film => {
        return `
        <div>
           <header class="filmheader">
               <h1>${film.title}</h1>
               <h5 class="date">${film.release_date}</h5>
               <h5><b>Score :</b> ${film.rt_score}</h5>
           </header>
           <article>
               <p>
                  ${film.description}
               </p>
           </article>
           <footer>
               <li><a href=""> <u>Director</u> :<i>${film.producer}</i></a></li>
               <li><a href=""><u>Producer</u>: <i>${film.director}</i></a></li>
           </footer>
        </div>
        `
    })
    movies.innerHTML = html.join(' ');
}
console.log(displayFilms());