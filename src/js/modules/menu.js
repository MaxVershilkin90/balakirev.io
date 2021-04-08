export function menu() {

  const itemClass = "header__nav-link";
  const sectionClass = "header__section";
  const itemList = "header__section-item";
  const linkList = "header__section-link";

  const postfix = "--active";
  const items = document.querySelectorAll(`.${itemClass}`);
  const sections = document.querySelectorAll(`.${sectionClass}`);

  for(let i = 0; i < items.length; i++) {
    items[i].addEventListener("mouseover", showMenu);
    items[i].addEventListener("mouseout", removeItemClass);
  }

  for(let i = 0; i < sections.length; i++) {
    document.body.addEventListener("click", hideMenu);
  }

  document.body.addEventListener("mouseover", hideList);

  if (document.body.querySelector(`.${sectionClass}${postfix}`)) {
    console.log("!");
    document.body.querySelector(`.${sectionClass}${postfix}`).classList.remove(`${sectionClass}${postfix}`);
  }

  function showMenu(e) {

    let activeItem;

    if (document.querySelector(`.${itemClass}${postfix}`)) {
      document.querySelector(`.${itemClass}${postfix}`).classList.remove(`${itemClass}${postfix}`);
    };

    e.target.classList.add(`${itemClass}${postfix}`);

    let index;

    for (let i = 0; i < items.length; i++) {

      let active = document.querySelector(`.${sectionClass}${postfix}`);

      if (e.target === items[i]) {
        index = i;
        if (active) active.classList.remove(`${sectionClass}${postfix}`);
        if (!sections[i]) return;
        break;
      };

    };

    let active = document.querySelector(`.${sectionClass}${postfix}`);

    if (active) {

      if (active === sections[index]) {
        return;
      }
      active.classList.toggle(`${sectionClass}${postfix}`);
    }

    sections[index].classList.add(`${sectionClass}${postfix}`);

  }

  function hideMenu(e) {

    if (e.target.classList.contains(`${sectionClass}`) ||
        e.target.classList.contains("header__section-item") ||
        e.target.classList.contains("header__section-link")) {
          return;
    };

    let menu;
    let tab;

    try {
      menu = document.querySelector(`.${sectionClass}${postfix}`);
      tab = document.querySelector(`.${itemClass}${postfix}`);
      menu.classList.remove(`${sectionClass}${postfix}`);
      tab.classList.remove(`${itemClass}${postfix}`);
    } catch (e) {
      return;
    }

  }

  function removeItemClass(e) {

    try {

      if (!document.body.querySelector(`.${sectionClass}${postfix}`)) {
        document.body.querySelector(`.${itemClass}${postfix}`).classList.remove(`${itemClass}${postfix}`);
      }

    } catch (e) {
      return;
    }

  }

  function hideList(e) {

    try {

      if (
          e.target.classList.contains(`${sectionClass}${postfix}`) ||
          e.target.classList.contains(`${itemClass}${postfix}`) ||
          e.target.classList.contains(itemList) ||
          e.target.classList.contains(linkList)
        ) {
          return;
        } else {
          document.querySelector(`.${sectionClass}${postfix}`).classList.remove(`${sectionClass}${postfix}`);
          document.querySelector(`.${itemClass}${postfix}`).classList.remove(`${itemClass}${postfix}`);
        }


    } catch (e) {}

}

}
