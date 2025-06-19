export function renderInstruction() {
  const app = document.querySelector("#app");
  const instrPopup = document.createElement("div");
  instrPopup.classList.add("instruction-container");
  instrPopup.innerHTML = `
  <div class="instruction-detail">
    <div class="tittle">
      <h5>This is a simple To-Do app that helps you:</h5>
      <div class="star">
        <img src="images/star.png" alt="" />
      </div>
    </div>

    <div class="instruction-spans">
      <div class="instruction-item">
        <i class="bx bx-folder-check bx-flip-horizontal bx-bounce"></i>
        <span class="instruction-span">Add tasks you want to get done</span>
      </div>

      <div class="instruction-item">
        <i class="bx bx-folder-check bx-bounce"></i>
        <span class="instruction-span">Organize your daily goals</span>
      </div>

      <div class="instruction-item">
        <i class="bx bx-folder-check bx-bounce"></i>
        <span class="instruction-span">Mark tasks as completed</span>
      </div>

      <div class="instruction-item">
        <i class="bx bx-folder-check bx-bounce"></i>
        <span class="instruction-span">Delete what you no longer need</span>
      </div>

      <div class="instruction-item">
        <i class="bx bx-folder-check bx-bounce"></i>
        <span class="instruction-span">Stay focused and productive every day</span>
      </div>
    </div> 

    <div class="btn-understand">
      <button id="btn-understand">I got it!</button>
    </div>
    <div class="progress-container">
    <div class="progress-bar"></div>
    </div>
  </div> 
`;

  return instrPopup;
}
