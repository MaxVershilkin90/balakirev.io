'use strict';

document.addEventListener("DOMContentLoaded", function() {

  function slider (
    cnt,
    arr,
    elm,
    btn,
    breads,
    img
  ) {

    let n = 1;

    const slider = document.querySelector(`.${cnt}`);
    const slides = document.querySelector(`.${arr}`);
    const slide = slides.querySelectorAll(`.${elm}`);
    const button = document.querySelector(`.${btn}`);
    const image = document.querySelector(`.${img}`);
    const imageUrl = './imgs/';

    // Navigation
    const quantity = slides.children.length;
    if (quantity > 1) {

      window.addEventListener("resize", navposition, false);

      let nav = document.querySelector(`.${breads}`);
      let navHidingClass = '--hidden';
      let active = document.querySelector(`.${breads}-active`);
      let total = document.querySelector(`.${breads}-total`);

      nav.classList.remove(`${breads}${navHidingClass}`);
      active.textContent = n;
      total.textContent = quantity;

      navposition();
    }

    let interval = setInterval(function() {
      checker();
    }, 5000);
    // slider.addEventListener("click", checker, false);

    function checker(e) {

      if (e) {
        if (e.target.type == "button") return;
      } else {
        slider.removeEventListener("click", checker, false);
      }

      n += 1;
      let modifierName = `${elm}--active`;
      let activeSlide = document.querySelector(`.${modifierName}`);
      let nextSlide = slides.children[n-1];
      let activeTrigger = document.querySelector(`.${breads}-active`);

      if (n > quantity) {
        nextSlide = slides.children[0];
        n = 1;
      };

      activeTrigger.textContent = n;
      activeSlide.classList.remove(modifierName);
      nextSlide.classList.add(modifierName);

      image.style.opacity = '0';
      setTimeout(function() {
        image.src = `${imageUrl}img_slide_${n}.png`;
        image.style.opacity = '1';
        nextSlide.style.opacity = '1';
      },800);

    }

    function navposition() {

      let elm = document.querySelector(`.${breads}`);

      let leftMargin = 20;
      let screenSize = 580;
      let screenWidth = document.body.clientWidth;
      let containerWidth = document.querySelector(".container").getBoundingClientRect().width;
      
      if (screenWidth < screenSize) {
        elm.style.left = (((screenWidth - containerWidth) / 2) + leftMargin) + "px";
        return;
      }

      elm.style.left = (screenWidth - containerWidth) / 2 + "px";
    }

  }

  slider (
    'slider',
    'slider__slides',
    'slider__slide',
    'slider__link',
    'slider__nav',
    'slider__image'
  );

})
