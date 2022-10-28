





var allfilms = document.getElementById("allfilms")
fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=56ba2a9cde69e2579c4d113f46429046&language=en-US')
  .then((alldata) => {return alldata.json()})
  .then((alldata) =>{
    var movies= alldata.results;
    console.log(movies);
     movies.forEach(movie => {
         allfilms.innerHTML += `
         
         <div class="col-4 mb-5">
         <div class="item">
             <img src="https://image.tmdb.org/t/p/original${movie.poster_path}" class="card-img-top" alt="...">
             <div class="desc">
             <h1>${movie.original_title}</h1>
             <p>${movie.overview}</p> 
             </div>    
             </div>
             </div>
   
              
            
               `;
});
}  ) 

