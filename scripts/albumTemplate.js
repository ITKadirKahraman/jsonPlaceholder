function createAlbumsHeader() {
    return `
        <div class="head">
            <h1>ALBUMS JSON</h1>
            <ul>
                <li><a href="../index.html">Home</a></li>
                <li><a href="posts.html">Posts</a></li>
                <li><a href="todo.html">ToDo</a></li>
            </ul>
        </div> 
    `;
}

function createAlbums(albums) {
    return `
        <section class="usersCard">
            <table>
                <caption>
                    <strong><h1>${albums.title}</h1></strong>
                </caption>
                <tbody>
                    <tr>
                        <th>USER ID</th>
                        <td>${albums.userId}</td>
                    </tr>
                    <tr>
                        <th>Title ID</th>
                        <td>${albums.id}</td>
                    </tr>
                </tbody>
            </table>
        </section>
    `;
}