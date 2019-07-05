function init() {
  var menuButton = document.getElementById('expand-icon');
  var menuList = document.querySelector('ul');
  menuButton.addEventListener('click', () => {
    menuButton.classList.toggle('open');
    menuList.classList.toggle('expanded');
  })
  console.log(menuButton);
}

init();