export function showTaskDoneToast() {
  const toast = document.createElement("div");
  toast.classList.add("task-done-toast");
  toast.innerHTML = `
    <img src="./images/welldone.png" alt="welldone icon" />
  Zadanie
  <span class="toast-span">Wykonane!</span>
`;

  document.body.appendChild(toast);

  function fadeToastOut() {
    toast.classList.add("fade-out");
    toast.addEventListener("animationend", () => toast.remove(), {
      once: true,
    });
  }

  setTimeout(fadeToastOut, 1300);
}
