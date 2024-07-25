// select dom , var
let table = document.querySelector("table");
let input = document.querySelector("input");
let btn = document.querySelector("button");

// functions
function renderData(List) {
  let template = List.map((item) => {
    const { id, title } = item;
    return `
            <tr>
                <td>${title}</td>
                <td>
                    <i onclick="editTodos(${id})" class="fa-solid fa-pen-to-square"></i>
                    <i onclick="deleteTodos(${id})" class="fa-solid fa-trash"></i>
                </td>
            </tr>
    `;
  }).join("");
  table.innerHTML = template;
}
function addTodos() {
  if (input.value === "") {
    input.classList.add("hvr-wobble-to-top-right");
  } else {
    const newObject = {
      id: todos.length + 1,
      title: input.value,
    };
    todos.push(newObject);
    input.value = "";
  }
  renderData(todos);
}
function handleEnter(event) {
  if (event.key === "Enter") {
    addTodos();
  }
}
function deleteTodos(id) {
  let find = todos.find((item) => item.id === id);
  todos.splice(find, 1);
  renderData(todos);
}
function editTodos(id) {
  let find = todos.find((item) => item.id === id);
  input.value = find.title;
  todos.splice(find, 1);
  renderData(todos);
}

// events
window.addEventListener("load", function () {
  renderData(todos);
});
btn.addEventListener("click", function () {
  addTodos();
});
input.addEventListener("keypress", handleEnter);
