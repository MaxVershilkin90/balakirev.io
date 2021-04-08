export function mobile() {

  try {
    const elm = "mobile";
    const buttonName = "header__icon";
    const closeName = "mobile__close";
    const closeIcon = "mobile__close-svg";

    const button = document.querySelector(`.${buttonName}`);
    const close = document.querySelector(`.${closeName}`);
    const icon = document.querySelector(`.${closeIcon}`);
    const menu = document.querySelector(`.${elm}`);

    button.addEventListener("click", () => {
      menu.style.display = "flex";
      setTimeout(function() {
        menu.classList.remove(`${elm}--hidden`);
        document.body.style.overflow = 'hidden';
      },100);
    });

    close.addEventListener("click", () => {
      menu.classList.add(`${elm}--hidden`);
      document.body.style.overflow = 'scroll';
      setTimeout(function() {
        menu.style.display = "none";
      },400);
    });

    menu.addEventListener("click", function(e) {
      if (e.target !== menu) return;
      menu.classList.add(`${elm}--hidden`);
      document.body.style.overflow = 'scroll';
    });

  } catch (e) {

  }

};
