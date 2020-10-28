fetch('https://api.spacexdata.com/v3/dragons')
.then(response => {
    return response.json();
})
.then(data => {
    console.log(data);
})
.catch(error => {
    console.log(error);
})




fetch('https://api.spacexdata.com/v3/landpads')
.then(response => {
    return response.json();
})
.then(data => {
    console.log(data);
})
.catch(error => {
    console.log(error);
})




fetch('https://api.spacexdata.com/v3/rockets')
.then(response => {
    return response.json();
})
.then(data => {
    console.log(data);
})
.catch(error => {
    console.log(error);
})