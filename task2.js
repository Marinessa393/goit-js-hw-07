const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const IngredientsRef = document.querySelector("#ingredients");

const elems = ingredients.map((el) => {
  const Ing = document.createElement("li");
  Ing.innerHTML = el;

  return Ing;
});

IngredientsRef.append(...elems);
console.log(IngredientsRef);
