let users = [];
let posts = [];

function init() {
    renderHeader();
    fetchDataJson();
}

function initPost() {
    renderPostHeader();
    fetchDataJsonPost();
}

function renderHeader() {
    document.getElementById('header').innerHTML = creatHeader();
}

function renderPostHeader() {
    document.getElementById('headPost').innerHTML = createPostHeader();
}

async function fetchDataJson() {
    let response = await fetch('https://jsonplaceholder.typicode.com/users');
    users = await response.json();
    console.log(users);
    renderUsers();
}

async function fetchDataJsonPost() {
    let response = await fetch('https://jsonplaceholder.typicode.com/posts');
    posts = await response.json();
    console.log(posts);
    renderPosts();
}

async function postData(url = "", data = {}) {
    const response = await fetch(url, {
        method: "GET", // "GET", POST, PUT, DELETE, etc.
        headers: {
            "Content-Type": "application/json",
        }, 
        body: JSON.stringify(data),
    });
    return response.json();
}

function renderUsers() {
    let content = document.getElementById('usersCard');
    content.innerHTML = '';
    for (let index = 0; index < users.length; index++) {
        content.innerHTML += createUsers(users[index]);
    }
}

function renderPosts() {
    let content = document.getElementById('postCard');
    content.innerHTML = '';
    for (let index = 0; index < posts.length; index++) {
        content.innerHTML += createPosts(posts[index]);
    }
}