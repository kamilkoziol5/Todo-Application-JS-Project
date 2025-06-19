export function renderToDoAppUi() {
  const container = document.querySelector("#app");
  const wrapper = document.createElement("div");
  wrapper.classList.add("container-wrapper");
  wrapper.innerHTML = `
     <div class="to-do-app">
        <h2>To-Do-List
        <img src="./images/TaskList.png"/>
        </h2>
        <div class="search-container">
          <input
            id="input-task-field"
            type="text"
            placeholder="Add Your Task"
            autocomplete="off"
          />
          <button id="add-task-btn">Add</button>
        </div>
        <ul id="task-container"></ul>
      </div>
    `;

  container.append(wrapper);

  return {
    input: wrapper.querySelector("#input-task-field"),
    button: wrapper.querySelector("#add-task-btn"),
    taskList: wrapper.querySelector("#task-container"),
  };
}
