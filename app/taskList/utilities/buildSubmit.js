const taskNameInput = document.getElementById("taskNameInput");
const dueDateInput = document.getElementById("dueDateInput");
const urgencyInput = document.getElementById("urgencyInput");

const currentTaskContainer = document.querySelector(".currentTaskContainer");
const submitButton = document.getElementById("submitButton");

//builds html node and appends to task container.
function buildTaskHtml() {
  const newTask = document.createElement("div");
  const button = document.createElement("div");
  const list = document.createElement("ul");
  const listName = document.createElement("li");
  const listDate = document.createElement("li");
  const listUrgency = document.createElement("li");

  //add classes
  newTask.classList.add("currentTask");
  button.classList.add("taskCompleteButton");

  //add text
  listName.append(document.createTextNode(`Task Name: ${taskNameInput.value}`));
  listDate.append(document.createTextNode(`Due Date: ${dueDateInput.value}`));
  listUrgency.append(document.createTextNode(`Urgency: ${urgencyInput.value}`));
  button.append(document.createTextNode(`Task Complete`));

  // build element tree
  list.appendChild(listName);
  list.appendChild(listDate);
  list.appendChild(listUrgency);

  newTask.appendChild(list);
  newTask.appendChild(button);

  currentTaskContainer.appendChild(newTask);
}

function resetInputs() {
  taskNameInput.value = "";
  dueDateInput.value = "";
  urgencyInput.value = "";
}

function submitButtonLogic() {
  submitButton.addEventListener("click", () => {
    buildTaskHtml();
    resetInputs();
  });
}

export default submitButtonLogic;
