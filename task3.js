const images = [
  {
    url:
      "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url:
      "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url:
      "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

// version 3
const imgRef = document.querySelector("#gallery");
imgRef.setAttribute("class", "sizing");
const createGallery = ({ url, alt }) => {
  return `<li><img src="${url}" alt="${alt}" width="300" height="150"></li>`;
};
const build = images.map(createGallery).join("");

imgRef.insertAdjacentHTML("beforeend", build);

// version 1

// const imageRef = document.querySelector("#gallery");

// const elems = images.map((el) => {
//   const imgItem = document.createElement("li");
//   imgItem.classList.add("li-item");

//   const imgEl = document.createElement("img");
//   imgEl.src = el.url;
//   imgEl.alt = el.alt;
//   imgEl.width = 120;

//   imgItem.append(imgEl);
//   return imgItem;
// });

// imageRef.append(...elems);
// console.log(imageRef);

// version 2

// const imgRef = document.getElementById("gallery");
// imgRef.style.display = "flex";
// imgRef.style.justifyContent = "space-between";
// imgRef.style.alignItems = "center";
// imgRef.style.listStyleType = "none";

// images.map((el) => {
//   const imgEl = `<li><img src="${el.url}" alt="${el.alt}" width="300"></li>`;
//   imgRef.insertAdjacentHTML("beforeEnd", imgEl);
// });
