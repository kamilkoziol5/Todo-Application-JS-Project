export function showTaskRemoveToast() {
  const toast = document.createElement("div");
  toast.classList.add("task-remove-toast");
  toast.innerHTML = `
      <img src="./images/remove.png" alt="remove icon" />
    Zadanie
    <span class="toast-span">Usunięte!</span>
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
