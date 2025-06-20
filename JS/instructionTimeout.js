import { renderInstruction } from "./renderInstruction.js";
import { startProgressBar } from "./progressBar.js";

export function instructionTimeout() {
  const taskList = document.querySelector("#task-container");

  if (taskList.children.length > 0) return;
  const app = document.querySelector("#app");
  const instrPopup = renderInstruction();

  app.append(instrPopup);

  const btn = instrPopup.querySelector("#btn-understand");
  const detailCtn = instrPopup.querySelector(".instruction-detail");
  const progressBar = instrPopup.querySelector(".progress-bar");

  const spans = instrPopup.querySelectorAll(".instruction-span");
  spans.forEach((span, index) => {
    const delay = 900 + index * 450;
    setTimeout(() => {
      span.classList.add("active");
    }, delay);
  });

  const duration = 15000;
  const stopProgress = startProgressBar(progressBar, duration, () => {
    btn.click();
  });

  btn.addEventListener("click", () => {
    detailCtn.classList.add("remove-instruction");
    detailCtn.addEventListener(
      "animationend",
      () => {
        instrPopup.remove();
      },
      { once: true }
    );
  });
}
