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
                    <i class="fa-solid fa-pen-to-square"></i>
                    <i class="fa-solid fa-trash"></i>
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
  console.log(todos);
}
function handleEnter(event) {
  if (event.key === "Enter") {
    addTodos();
  }
}

// events
window.addEventListener("load", function () {
  renderData(todos);
});
btn.addEventListener("click", function () {
  addTodos();
});
input.addEventListener("keypress", handleEnter);
