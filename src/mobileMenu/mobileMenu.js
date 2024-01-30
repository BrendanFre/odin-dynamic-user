import './mobileMenu.css'
import burger from './icons/menu.png'

const showNav = () => {
  const headerMenu = document.querySelector('.headerMenu');
  const menuButton = document.querySelector('.menuIcon')
  if(headerMenu.classList.contains('showMenu')) {
    headerMenu.classList.remove('showMenu');

  } else { headerMenu.classList.add('showMenu');
}
}

const updateNavColor = (headerBar, color) => {
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
  headerBar.style.backgroundColor = colorPicker;
  
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
const headerBar = document.querySelector('.headerBar')
const siteDetail = document.querySelector('.siteIcon')
const menuIcon = document.createElement('img');

addLogo(siteDetail, siteIdentity);

menuIcon.src = burger;
menuIcon.classList.add('menuIcon');
menuIcon.addEventListener('click', () => {
  showNav(headerBar);
})

headerBar.appendChild(menuIcon);
updateNavColor(headerBar, color);

}