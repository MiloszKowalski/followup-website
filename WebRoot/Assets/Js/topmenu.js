OnLoad(() => {
  // Get menu button and menu list
  var menuButton = document.getElementById('expand-icon');
  var menuList = document.querySelector('ul');
  var isMenuOpen;


  // Add click event to open menu
  menuButton.addEventListener('click', () => {
    if(!isMenuOpen) {
      menuButton.classList.add('open');
      menuList.classList.add('expanded');
      isMenuOpen = true;
    } else {
      menuButton.classList.remove('open');
      menuList.classList.remove('expanded');
      isMenuOpen = false;
    }
  });


  var topmenu = document.querySelector('nav');
  var lastestYScrollPos = 0;

  // Hide menu when scrolling down on mobile for bigger viewport height
  function hideMenu() {
    if(ViewportWidth() < 1024 && !isMenuOpen) {
      if(lastestYScrollPos < ScrollPositionY()) {
        topmenu.classList.add('topmenu-hidden');
      } else {
        topmenu.classList.remove('topmenu-hidden');
      }
      lastestYScrollPos = ScrollPositionY();
    }
  }

  OnScroll(hideMenu);
});