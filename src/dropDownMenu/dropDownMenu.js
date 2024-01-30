import './dropDownMenu.css';

const menuToggle = (menuList) => {
  /**Changes the visibility of the menu depending on the state of the menu. */
  if (menuList.classList.contains('hidden')) {
    menuList.classList.remove('hidden');
    menuList.classList.add('showList');
  } else {
    menuList.classList.add('hidden');
    menuList.classList.remove('showList');
  }
}

const buttonTypeDefine = (button, buttonType) => {
  if (buttonType == "flat" || buttonType == "1") {
    button.classList.add('flatButton');
  } else if (buttonType == "shadow" || "2") {
    button.classList.add('shadowButton');
  } else {
    button.classList.add('normalButton');
  }
}

export default (parent, buttonText, backgroundColor, menu, buttonType) => {

  /**
   * Provides a button that will display a menu when clicked on.
   * @param {node} parent - A node argument that the button will be appended to.
   * @param {string} buttonText - String that you want to appear on the button.
   */
  const button = document.createElement('button');
  button.textContent = buttonText;
  button.classList.add('menuButton');
  buttonTypeDefine(button, buttonType);

  const menuList = document.createElement('ul');
  menuList.style.backgroundColor = backgroundColor;
  menuList.classList.add('hidden');
  menu.forEach(element => {
    const menuItem = document.createElement('li');
    const linkAddress = document.createElement('a');
    linkAddress.classList.add('listItem')

    linkAddress.href = element.link;
    linkAddress.textContent = element.name;
    menuItem.classList.add('menuItem');
    menuItem.appendChild(linkAddress);
    menuList.appendChild(menuItem);

  });
  button.addEventListener('click', () => { menuToggle(menuList) })
  parent.appendChild(button);
  parent.appendChild(menuList);

};