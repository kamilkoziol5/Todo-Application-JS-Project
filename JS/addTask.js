import { renderPopup } from "./renderpPopupAlert.js";
import { renderTaskLi } from "./renderTaskLi.js";
import {
  getTasksFromStorage,
  saveTasksToStorage,
  loadTasksFromStorage,
} from "./localStorage.js";

export function addTaskSetup(input, button, taskList) {
  function addTask() {
    const taskText = input.value.trim();

    if (!taskText) {
      const popup = renderPopup();
      taskList.appendChild(popup);
      return;
    }

    const tasks = getTasksFromStorage();
    tasks.push({ text: taskText, done: false });
    saveTasksToStorage(tasks);

    renderTaskLi(taskText, taskList, input, false);
    input.value = "";
  }

  button.addEventListener("click", addTask);

  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      addTask();
    }
  });

  loadTasksFromStorage(taskList, input);
}
