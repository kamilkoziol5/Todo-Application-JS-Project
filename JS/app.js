import { renderToDoAppUi } from "./renderToDoApp.js";
import { addTaskSetup } from "./addTask.js";
import { instructionTimeout } from "./instructionTimeout.js";

const { input, button, taskList } = renderToDoAppUi();

addTaskSetup(input, button, taskList);
setTimeout(() => instructionTimeout(), 1500);
