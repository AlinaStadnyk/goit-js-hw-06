const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

ingredients.forEach((ingredient) => {
  const container = document.querySelector("#ingredients");
  const li = document.createElement("li");
  li.textContent = ingredient;
  li.classList.add("item");
  container.append(li);
});
