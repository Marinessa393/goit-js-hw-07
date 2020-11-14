const categoriesRef = document.querySelectorAll("li.item");
console.log(`У списку ${categoriesRef.length} категорії.`);
categoriesRef.forEach((el) => {
  console.log(`Категорія: ${el.firstElementChild.textContent}`);
  console.log(`Кількість елементів: ${el.lastElementChild.children.length}`);
});
