function createToDoHeader() {
    return `
        <div class="head">
            <h1>ToDo JSON</h1>
            <ul>
                <li><a href="../index.html">Home</a></li>
            </ul>
        </div> 
    `;
}

function createToDo(toDo) {
    return `
        <section class="usersCard">
            <table>
                <caption>
                    <strong><h1>${toDo.title}</h1></strong>
                </caption>
                <tbody>
                    <tr>
                        <th>USER ID</th>
                        <td>${toDo.userId}</td>
                    </tr>
                    <tr>
                        <th>Title ID</th>
                        <td>${toDo.id}</td>
                    </tr>
                    <tr>
                        <th>Completed</th>
                        <td>${toDo.completed}</td>
                    </tr>
                </tbody>
            </table>
        </section>
    `;
}