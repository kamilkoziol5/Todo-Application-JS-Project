import { animatePopup } from "./popupAnimation.js";

export function renderPopup() {
  const popup = document.createElement("div");
  popup.classList.add("popup");
  popup.innerHTML = ` 
        <div class="wrapper">
        <div class="icon">
          <i class="bx bx-x-circle"></i>
        </div>
        <h4 class="error">Ooooops!</h4>
        <p>Something Went Wrong ...</p>

        <p>Try again or restart application</p>

        <button class="again-btn">Try Again</button>
        <button class="close-btn"><i class='bx bx-x'></i></button>

      </div>
    `;

  const againBtn = popup.querySelector(".again-btn");
  const closeBtn = popup.querySelector(".close-btn");
  const wrapper = popup.querySelector(".wrapper");

  againBtn.addEventListener("click", () => animatePopup(wrapper, popup));
  closeBtn.addEventListener("click", () => animatePopup(wrapper, popup));

  return popup;
}
