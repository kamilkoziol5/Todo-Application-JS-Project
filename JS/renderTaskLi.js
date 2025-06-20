import { getTasksFromStorage, saveTasksToStorage } from "./localStorage.js";
import { showTaskDoneToast } from "./taskDonePopup.js";
import { showTaskRemoveToast } from "./taskDeletePopup.js";

export function renderTaskLi(taskText, taskList, input, done = false) {
  const li = document.createElement("li");

  li.innerHTML = `
    ${taskText}
    <span class="delete-btn"><i class='bx bx-trash'></i></span>
  `;

  if (done) li.classList.add("checked");

  li.addEventListener("click", (e) => {
    const deleteBtn = e.target.closest(".delete-btn");

    let tasks = getTasksFromStorage();

    if (deleteBtn) {
      li.classList.add("fade-out");
      showTaskRemoveToast();

      li.addEventListener(
        "animationend",
        () => {
          li.remove();
          tasks = tasks.filter((t) => t.text !== taskText);
          saveTasksToStorage(tasks);
        },
        { once: true }
      );
    } else {
      li.classList.toggle("checked");
      tasks = tasks.map((t) =>
        t.text === taskText
          ? { ...t, done: li.classList.contains("checked") }
          : t
      );
      saveTasksToStorage(tasks);

      if (li.classList.contains("checked")) {
        showTaskDoneToast();
      }
    }
  });

  taskList.appendChild(li);
}
