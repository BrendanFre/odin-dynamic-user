import dropDownMenu from "./dropDownMenu/dropDownMenu";
import mobileMenu from "./mobileMenu/mobileMenu";

const app = document.querySelector('.app');

mobileMenu(app, 2, "Trees")

dropDownMenu(app, "Menu", "#FFFFFF", [{"link": "https://gameroracle.com", "name": "gamer oracle"}], 'flat');

dropDownMenu(app, "Another button", "red", [{
  "link": "google.com",
  "name": "The Google"
}], "shadow")

