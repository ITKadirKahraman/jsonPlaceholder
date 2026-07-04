function createPostHeader() {
    return `
        <div class="head">
            <h1>Post JSON</h1>
            <ul>
                <li><a href="../index.html">Home</a></li>
            </ul>
        </div> 
    `;
}

function createPosts(posts) {
    return `
        <section class="usersCard">
            <table>
                <caption>
                    <strong><h1>${posts.title}</h1></strong>
                </caption>
                <tbody>
                    <tr>
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