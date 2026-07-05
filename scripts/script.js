let users = [];
let posts = [];
let albums = [];
let todos = [];

function init() {
    renderHeader();
    fetchDataJson();
}

function initPost() {
    renderPostHeader();
    fetchDataJsonPost();
}

function initAlbums() {
    renderAlbumHeader();
    fetchDataJsonAlbum();
}

function initToDo() {
    renderToDoHeader();
    fetchDataJsonToDo();
}

function renderHeader() {
    document.getElementById('header').innerHTML = creatHeader();
}

function renderPostHeader() {
    document.getElementById('headPost').innerHTML = createPostHeader();
}

function renderAlbumHeader() {
    document.getElementById('headAlbums').innerHTML = createAlbumsHeader();
}

function renderToDoHeader() {
    document.getElementById('headToDo').innerHTML = createToDoHeader();
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

async function fetchDataJsonAlbum() {
    let response = await fetch('https://jsonplaceholder.typicode.com/albums');
    albums = await response.json();
    console.log(albums);
    renderAlbums();
}

async function fetchDataJsonToDo() {
    let response = await fetch('https://jsonplaceholder.typicode.com/todos');
    todos = await response.json();
    console.log(todos);
    renderToDos();
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

function renderAlbums() {
    let content = document.getElementById('albumsCard');
    content.innerHTML = '';
    for (let index = 0; index < albums.length; index++) {
        content.innerHTML += createAlbums(albums[index]); 
    }
}

function renderToDos() {
    let content = document.getElementById('toDoCard');
    content.innerHTML = '';
    for (let index = 0; index < todos.length; index++) {
        content.innerHTML += createToDo(todos[index]); 
    }
}