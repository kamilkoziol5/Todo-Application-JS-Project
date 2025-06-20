import { renderTaskLi } from "./renderTaskLi.js";

export function getTasksFromStorage() {
  const tasks = localStorage.getItem("tasks");
  return tasks ? JSON.parse(tasks) : [];
}

export function saveTasksToStorage(tasks) {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

export function loadTasksFromStorage(taskList, input) {
  const tasks = getTasksFromStorage();
  tasks.forEach((task) => {
    renderTaskLi(task.text, taskList, input, task.done);
  });
}
