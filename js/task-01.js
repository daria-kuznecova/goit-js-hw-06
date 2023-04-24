const navEl = document.querySelectorAll(".item");
console.log(`Number of categories: ${navEl.length} `);

navEl.forEach((el) => {
  console.log(`Category: ${el.firstElementChild.textContent}`);
  console.log(`Elements: ${el.lastElementChild.children.length}`);
});
