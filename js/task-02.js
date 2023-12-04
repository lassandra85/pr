const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsItems = ingredients.map(ingredientsItem => {
  const ingredient = document.createElement('li');
  ingredient.classList.add("item");
  ingredient.textContent = `${ingredientsItem}`;
  return ingredient;
});

const ingredientsList = document.querySelector("#ingredients");
ingredientsList.append(...ingredientsItems);