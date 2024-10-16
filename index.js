const formElement = document.querySelector(".form");

const inputElement = document.getElementById("value");

const ulElement = document.querySelector(".tasks");

let list = JSON.parse(localStorage.getItem("list"));
if (list) {
  list.forEach((task) => {
    toDoList(task);
  });
}

formElement.addEventListener("submit", (e) => {
  e.preventDefault();
  toDoList();
});

function toDoList(task) {
  let newTask = inputElement.value;
  if (task) {
    newTask = task.names;
    console.log(newTask);
  }
  // elements of new task
  const liElement = document.createElement("li");
  if (task && task.checked) {
    liEl.classList.add("checked");
  }
  const title = document.createElement("div");
  title.classList.add("newtitle");
  const divoprator = document.createElement("div");
  const Delete = document.createElement("span");
  const Edit = document.createElement("span");
  const checkBox = document.createElement("input");
  Delete.innerText = `✖️`;
  Edit.innerHTML = `🖋️`;
  checkBox.setAttribute("type", "checkbox");
  title.innerHTML = newTask;
  // set element
  ulElement.appendChild(liElement);
  liElement.appendChild(title);
  liElement.appendChild(divoprator);
  divoprator.appendChild(Delete);
  divoprator.appendChild(Edit);
  divoprator.appendChild(checkBox);
  inputElement.value = "";
  // console.log(title.textContent);

  //event  task
  Delete.addEventListener("click", () => {
    liElement.remove();
    updateLocalStorage();
  });
  checkBox.addEventListener("click", () => {
    checkBox.classList.toggle("checked");
    liEl.classList.add("checked");
    updateLocalStorage();
  });

  Edit.addEventListener("click", () => {
    const titleElementdata = title.innerHTML;
    const liEditInput = document.createElement("input");
    title.appendChild(liEditInput);

    liEditInput.setAttribute("value", `${titleElementdata}`);
    Edit.innerHTML = `✔️`;
    liEditInput.classList.add("inputedit");

    liEditInput.addEventListener("change", (e) => {
      Edit.innerHTML = `🖋️`;
      console.log(e.target.value);
      newedit = e.target.value;
      liEditInput.setAttribute("value", `${liEditInput}`);
      title.innerHTML = newedit;
      updateLocalStorage();
    });
    updateLocalStorage();
  });

  //  console.log(liEditInput);

  // title.classList.add("hidden");

  updateLocalStorage();
}

function updateLocalStorage() {
  const liElements = document.querySelectorAll("li div.newtitle");
  list = [];
  liElements.forEach((liElement) => {
    list.push({
      names: liElement.innerText,
      checked: liElement.classList.contains("checked"),
    });
  });
  localStorage.setItem("list", JSON.stringify(list));
}
