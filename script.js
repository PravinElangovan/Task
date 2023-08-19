document.addEventListener("DOMContentLoaded", () => {
    var menu = document.getElementById('toggle-menu');
    var menuList = document.querySelector('.right-nav ul');

    menu.addEventListener("click", () => {
      menuList.classList.toggle('shownav');
    });
  });