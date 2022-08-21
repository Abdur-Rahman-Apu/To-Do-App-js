
let count = 0;
document.getElementById('add-task-btn').addEventListener('click', function () {
    count++;
    const taskField = document.getElementById('task-field');
    const task = taskField.value;

    // table field
    const tableField = document.getElementById('table-body');

    const trElement = document.createElement('tr');
    trElement.innerHTML = `
    <th scope="row">${count}</th>
    <td>${task}</td>
    <td>
    <button class="btn btn-danger delete">Delete</button>
    <button class="btn btn-success done">Done</button>
    </td>
    `;

    tableField.appendChild(trElement);

    taskField.value = '';

    const deleteBtn = document.getElementsByClassName('delete');

    for (const dlt of deleteBtn) {
        dlt.addEventListener('click', function (event) {
            event.target.parentNode.parentNode.style.display = 'none';
        });
    }

    const doneBtn = document.getElementsByClassName('done');
    for (const done of doneBtn) {
        done.addEventListener('click', function (event) {
            event.target.parentNode.parentNode.style.textDecoration = 'line-through';
        });
    }



    document.getElementById('clear-btn').addEventListener('click', function () {
        const childrens = document.querySelectorAll('tbody tr');
        for (const child of childrens) {
            child.style.display = 'none';
        }

    });

});