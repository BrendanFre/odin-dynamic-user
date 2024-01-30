import './mobileMenu.css'
import burger from './icons/menu.png'
const updateNavColor = (navBar, color) => {
  let colorPicker = ""
  switch (color) {
    case 1:
      colorPicker = "#7f1d1d";
      break;
    case 2:
      colorPicker = "#0c4a6e";
      break;
    case 3:
      colorPicker = "#581c87";
      break;
    case 4:
      colorPicker = "#881337";
      break;
    case 5:
      colorPicker = "#111827";
      break;
  };
  navBar.style.backgroundColor = colorPicker;
  
}

const addLogo = (siteDetail, logo) =>{
  if (logo.includes('/')){
    const theLogo = document.createElement('img');
    theLogo.src = logo;
    siteDetail.appendChild(theLogo);
  } else {
    siteDetail.textContent = logo;
  }
}

export default (parent, color, siteIdentity) => {
/**
 * Mobile menu that only triggers on displays under 600px
 */
const navBar = document.createElement('nav');
const siteDetail = document.createElement('div');
const menuIcon = document.createElement('img');

addLogo(siteDetail, siteIdentity);

menuIcon.src = burger;
navBar.appendChild(siteDetail);
navBar.appendChild(menuIcon);
navBar.classList.add('navContainer');
updateNavColor(navBar, color);
  parent.appendChild(navBar);

}