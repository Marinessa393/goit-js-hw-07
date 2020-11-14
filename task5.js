const name = document.getElementById("name-input");
const hello = document.getElementById("name-output");

name.addEventListener("input", (event) => {
  event.target.value === ""
    ? hello.textContent === "unknown"
    : (hello.textContent = event.target.value);
});
