// const content1 = document.querySelector(".text1");
// const path1 = document.querySelector(".text2");

// path1.style.strokeDasharray = path1Length;
// path1.style.strokeDashoffset = path1Length;

// function calcDashoffset(scrollY, element, length) {
//   const ratio = (scrollY - element.offsetTop) / element.offsetHeight;
//   const value = length - length * ratio;
//   console.log(value);
// }

// function scrollHandler() {
//   const scrollY = window.scrollY + window.SelectionHight;
//   path1.style.strokeDashoffset = calcDashoffset(scrollY, content1, pathLength);
// }

let scrollYpos;
window.addEventListener("scroll", function () {
  scrollYpos = window.scrollY;
  console.log(scrollYpos);
  if (3000 < scrollYpos) {
    const visualAnimate = document.querySelector(".pg4_f-14-3");
    visualAnimate.classList.add("animate");
    console.log("비행기 3성공");
  }
  if (4000 < scrollYpos < 3600) {
    const visualAnimate = document.querySelector(".pg4_f-14-2");
    visualAnimate.classList.add("animate");
    console.log("비행기 2성공");
  }
  if (4000 < scrollYpos < 3300) {
    const visualAnimate = document.querySelector(".pg4_f-14-4");
    visualAnimate.classList.add("animate");
    console.log("비행기 4성공");
  }
  if (3000 < scrollYpos) {
    const visualAnimate = document.querySelector(".pg4_f-14-5");
    visualAnimate.classList.add("animate");
    console.log("비행기 5성공");
  }
});

window.onload = () => {
  const visualInner = document.querySelector(".pg4_main");
  visualInner.classList.add("animate");
};
