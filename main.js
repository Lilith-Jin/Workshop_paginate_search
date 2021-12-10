document.addEventListener('DOMContentLoaded', () => {
  // Start !
  const info = fetch("https://top-250-movies.herokuapp.com/api/v1/movies/top")
  .then((res)=>{
    // console.log(res.json());
    return res.json();
    
  })
  .then((info)=>{
      console.log(info);
    })  



})