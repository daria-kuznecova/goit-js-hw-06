const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsContainerEl = document.querySelector(`#ingredients`);

const elements = ingredients.map((option) => {
  const ingredientLi = document.createElement(`li`);
  ingredientLi.textContent = option;
  ingredientLi.classList.add(`item`);

  return ingredientLi;
});

console.log(elements);

ingredientsContainerEl.append(...elements);
