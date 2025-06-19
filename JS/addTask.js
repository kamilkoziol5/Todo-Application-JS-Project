import { renderPopup } from "./renderpPopupAlert.js";
import { renderToDoAppUi } from "./renderToDoApp.js";
import { renderTaskLi } from "./renderTaskLi.js";

const { input, button, taskList } = renderToDoAppUi();

export function addTask() {
  const taskText = input.value.trim();

  if (!taskText || taskText === "") {
    const popup = renderPopup();
    taskList.appendChild(popup);
    return;
  }

  if (taskText !== "") {
    renderTaskLi(taskText, taskList, input);
    input.value = "";
  }
}

button.addEventListener("click", addTask);
input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    addTask();
  }
});
