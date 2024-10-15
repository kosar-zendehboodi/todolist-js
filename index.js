const formElement = document.querySelector(".form");

const inputElement = document.getElementById("value");

const ulElement = document.querySelector(".tasks");
const arrayItems = [];

// let list = JSON.parse(localStorage.getItem("list"));
// if (list) {
//   list.forEach((task) => {
//     toDoList(task);
//   });
// }

formElement.addEventListener("submit", (e) => {
  e.preventDefault();
  toDoList();
});

function toDoList(task) {
  const newTask = inputElement.value;
  if (newTask == "") {
    alert("please enter task");
  } else {
    // elements of new task
    const liElement = document.createElement("li");
    const divoprator = document.createElement("div");
    const Delete = document.createElement("span");
    const Edit = document.createElement("span");
    const checkBox = document.createElement("input");
    Delete.innerText = `✖️`;
    Edit.innerHTML = `🖋️`;
    checkBox.setAttribute("type", "checkbox");
    liElement.innerHTML = newTask;
    // set element
    ulElement.appendChild(liElement);
    liElement.appendChild(divoprator);
    divoprator.appendChild(Delete);
    divoprator.appendChild(Edit);
    divoprator.appendChild(checkBox);
    inputElement.value = "";
    //event  task
    Delete.addEventListener("click", () => {
      liElement.remove();
    });
    checkBox.addEventListener("click", () => {
      liElement.classList.toggle("checked");
      console.log(liElement);
    });
  }
}

// function updateLocalStorage() {
//   const liElements = document.querySelectorAll("li");
//   list = [];
//   liElements.forEach((liElement) => {
//     list.push({
//       names: liElement.innerText,
//       checked: liElement.classList.contains("checked"),
//     });
//   });
//   localStorage.setItem("list",JSON.stringify(list));
// }
