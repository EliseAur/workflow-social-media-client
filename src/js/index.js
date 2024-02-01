import router from "./router/index.js";
import ui from "./ui/index.js";

ui();
router();

export const templateInstance = (id = "404") => {
  const template = document.querySelector(`template#${id}`);
  if (template) {
    return template.content.cloneNode(true);
  }

  throw new Error(`Template #${id} not found`);
};
