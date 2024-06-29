// select dom , var
let table = document.querySelector("table");

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
  table.innerHTML += template;
}

// events
window.addEventListener("load", function () {
  renderData(todos);
});
