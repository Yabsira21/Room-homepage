let left = document.querySelector(".left");
let right = document.querySelector(".right");
let header = document.querySelector(".section-header");
let desc = document.querySelector(".section-description");

let arr = [
  [
    "About our furniture",
    `Our multifunctional collection blends design and function to suit
your individual taste. Make each room unique, or pick a cohesive
theme that best express your interests and what inspires you. Find
the furniture pieces you need, from traditional to contemporary
styles or anything in between. Product specialists are available to
help you create your dream space.`,
  ],
  [
    " We are available all across the globe",
    `With stores all over the world, it's
  easy for you to find furniture for your home or place of business. Locally,
  we're in most major cities throughout the country. Find the branch nearest
  you using our store locator. Any questions? Don't hesitate to contact us
  today. `,
  ],
  [
    "Manufactured with the best materials",
    `Our modern furniture
  store provide a high level of quality. Our company has invested in advanced
  technology to ensure that every product is made as perfect and as consistent
  as possible. With three decades of experience in this industry, we
  understand what customers want for their home and office.`,
  ],
];

let current = 1;

let hero_1 = document.querySelector(".hero-1");
let mobile_hero = document.querySelector(".mobile-hero");

console.log(hero_1.srcset);

left.addEventListener("click", function () {
  if (current == 1) {
    current = 3;
  } else {
    current -= 1;
  }
  if (screen.width < 400) {
    mobile_hero.src = `images/mobile-image-hero-${current}.jpg`;
  } else {
    hero_1.srcset = `images/desktop-image-hero-${current}.jpg`;
  }

  header.textContent = arr[current - 1][0];
  desc.textContent = arr[current - 1][1];
});

right.addEventListener("click", function () {
  if (current == 3) {
    current = 1;
  } else {
    current += 1;
  }
  if (screen.width < 400) {
    mobile_hero.src = `images/mobile-image-hero-${current}.jpg`;
  } else {
    hero_1.srcset = `images/desktop-image-hero-${current}.jpg`;
  }
  header.textContent = arr[current - 1][0];
  desc.textContent = arr[current - 1][1];
});
