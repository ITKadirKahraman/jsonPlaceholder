function creatHeader() {
    return `
        <div class="head">
            <h1>{JSON} Placeholder</h1>
            <ul>
                <li><a href="./pages/posts.html">Posts</a></li>
                <li><a href="./pages/albums.html">Albums</a></li>
                <li><a href="./pages/todo.html">ToDo</a></li>
            </ul>
        </div> 
    `;
}

function createUsers(users) {
    return `
    ${usersHeadline()}
        <section class="usersCard">
            <table>
                <caption>
                    <strong><h1>${users.name}</h1></strong>
                </caption>
                <tbody>
                    <tr>
                        <th>Username</th>
                        <td>${users.username}</td>
                    </tr>
                    <tr>
                        <th>EMail</th>
                        <td>${users.email}</td>
                    </tr>
                    <tr>
                        <th>Phonenumber</th>
                        <td>${users.phone}</td>
                    </tr>
                    <tr>
                        <th>Adress</th>
                        <td>${users.address.street}</td>
                        <td>${users.address.suite}</td>
                        <td>${users.address.city}</td>
                    </tr>
                    <tr>
                        <th>Company</th>
                        <td>${users.company.name}</td>
                        <td>${users.company.catchPhrase}</td>
                        <td>${users.company.bs}</td>
                    </tr>
                </tbody>
            </table>
        </section>
    `;
}

function usersHeadline() {
    return `
        <h2 class="usersH2">USERS</h2>
    `;
}