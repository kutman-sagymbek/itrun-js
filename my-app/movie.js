//http://localhost:3000/movies//

const requestURL = 'http://localhost:3000/movies';

let grid = document.querySelector(".movies");
let filterInput = document.getElementById("filterInput");

async function sendRequest(_method, url) {
    const response = await fetch(url);
    return await response.json();
}

sendRequest('GET', requestURL)
.then(data => {
    for(let value of data) {
        addElement(grid, value)
    }

    

// let loadmoreBtn = document.querySelector(".load-moreBtn");

// const showCards = () => {
//         for(let value of data){
//             let showCount = 3;
//             showCount === 3 ? showCount = 3 : showCount = 3;
//             console.log(addElement(grid, value));
//         }
// }

// loadmoreBtn.addEventListener('click', showCards);

        let all = document.querySelector(".all");
        let action = document.querySelector(".action");
        let horror = document.querySelector(".horror");
        let thriller = document.querySelector(".thriller");
        let love = document.querySelector(".love");
        let cartoon = document.querySelector(".cartoon")

        action.addEventListener("click", () => {
        let buttonAction = action.innerHTML
        let genreData = data.filter(item => item.genre === buttonAction);
        grid.innerHTML = '';
        for(let value of genreData){
            addElement(grid, value);
        }
        });

        horror.addEventListener("click", () => {
            let buttonAction = horror.innerHTML
            let genreData = data.filter(item => item.genre === buttonAction);
            grid.innerHTML = '';
            for(let value of genreData){
                addElement(grid, value);
            }
            });

        thriller.addEventListener("click", () => {
            let buttonAction = thriller.innerHTML
            let genreData = data.filter(item => item.genre === buttonAction);
            grid.innerHTML = '';
            for(let value of genreData){
                    addElement(grid, value);
            }
            });

         horror.addEventListener("click", () => {
            let buttonAction = horror.innerHTML
            let genreData = data.filter(item => item.genre === buttonAction);
            grid.innerHTML = '';
            for(let value of genreData){
            addElement(grid, value);
            }
            });

            love.addEventListener("click", () => {
                let buttonAction = love.innerHTML
                let genreData = data.filter(item => item.genre === buttonAction);
                grid.innerHTML = '';
                for(let value of genreData){
                addElement(grid, value);
                }
                });

        cartoon.addEventListener("click", () => {
            let buttonAction = cartoon.innerHTML
            let genreData = data.filter(item => item.genre === buttonAction);
            grid.innerHTML = '';
            for(let value of genreData){
            addElement(grid, value);
                    }
                    });

        all.addEventListener("click", () => {
            grid.innerHTML = ``;
            for(let value of data){
            addElement(grid, value);
            }
            });
    });


    filterInput.addEventListener('keyup', filterMovies);

    function filterMovies(){
        let filterValue = filterInput.value.toUpperCase();
        let movie = grid.querySelectorAll(".movie");

        for(i =0; i < movie.length; i++ ){
            let span = movie[i].querySelector(".movie__name");

            if(span.innerHTML.toUpperCase().indexOf(filterValue) > -1) {
                movie[i].style.display = "initial";
            } else {
                movie[i].style.display = "none";
            }
        }
    }

function addElement(appendin, value){
    let div = document.createElement('div');
    div.className = "movie";

    let {name, genre, rating, img} = value;

    div.innerHTML = `
    <div class="movie_cover_inner">
        <img src="${img}" class="movie_cover" class="movie_cover">
    </div>
    <div class="movie__cover--darkened"></div>
    <div class="movie__info">
        <div class="movie__name">${name}</div>
        <div class="movie__genre">${genre}</div>
        <div class="movie__average movie__average--${getClassByRating(rating)}">${rating}</div>
    </div>
    `

    appendin.appendChild(div);
}





function getClassByRating (vote) {
    if (vote>=1200) {
        return "green"
    } else if (vote >= 1000) {
        return "purple"
    } else {
        return "red"
    }
}




