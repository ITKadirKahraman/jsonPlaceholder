function createPostHeader() {
    return `
        <div class="head">
            <h1>Post JSON</h1>
            <ul>
                <li><a href="../index.html">Home</a></li>
                <li><a href="./pages/albums.html">Albums</a></li>
            </ul>
        </div> 
    `;
}

function createPosts(posts) {
    return `
        ${postHeadline()}
        <section class="usersCard">
            <table>
                <caption>
                    <strong><h1>${posts.title}</h1></strong>
                </caption>
                <tbody>
                    <tr>
                        <th>USER ID</th>
                        <td>${posts.userId}</td>
                    </tr>
                    <tr>
                        <th>Post ID</th>
                        <td>${posts.id}</td>
                    </tr>
                    <tr>
                        <th>Text</th>
                        <td>${posts.body}</td>
                    </tr>
                </tbody>
            </table>
        </section>
    `;
}

function postHeadline() {
    return `
        <h2 class="postH2">POSTS</h2>
    `;
}