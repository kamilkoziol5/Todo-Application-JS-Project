export function animatePopup(wrapper, popup) {
  wrapper.classList.add("closing");

  wrapper.addEventListener(
    "animationend",
    () => {
      popup.classList.add("closing");

      popup.addEventListener(
        "animationend",
        () => {
          popup.remove();
        },
        { once: true }
      );
    },
    { once: true }
  );
}
