const ingredients = [
  "Картопля",
  "Гриби",
  "Часник",
  "Помідори",
  "Зелень",
  "Приправи",
];

const ingredientsRef = document.querySelector("#ingredients");

const elems = ingredients.map((el) => {
  const ing = document.createElement("li");
  ing.innerHTML = el;

  return ing;
});

ingredientsRef.append(...elems);
console.log(ingredientsRef);
