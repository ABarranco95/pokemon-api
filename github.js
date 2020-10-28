const container = document.querySelector('.container');


fetch('https://api.github.com/users/ABarranco95')
.then(response => {
    return response.json();
})
.then(githubData => {
    const angelObj = {
        bio: githubData.bio,
        username: githubData.login,
        name: githubData.name,
    }
    console.log(angelObj)

    const newElement = document.createElement('p');
    newElement.textContent = angelObj.name;
    container.appendChild(newElement)
})
.catch(error => {
    console.log(error);
})

