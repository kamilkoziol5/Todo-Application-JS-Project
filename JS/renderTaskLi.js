import { showTaskDoneToast } from "./taskDonePopup.js";
import { showTaskRemoveToast } from "./taskDeletePopup.js";

export function renderTaskLi(taskText, taskList, input) {
  const li = document.createElement("li");

  li.innerHTML = `
    ${taskText}
    <span class="delete-btn"><i class='bx bx-trash'></i></span>
  `;

  li.addEventListener("click", (e) => {
    const deleteBtn = e.target.closest(".delete-btn");

    if (deleteBtn) {
      li.classList.add("fade-out");
      showTaskRemoveToast();

      li.addEventListener(
        "animationend",
        () => {
          li.remove();
        },
        { once: true }
      );
    } else {
      li.classList.toggle("checked");

      if (li.classList.contains("checked")) {
        showTaskDoneToast();
      }
    }
  });

  taskList.appendChild(li);
}
