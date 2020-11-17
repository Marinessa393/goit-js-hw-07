const name = document.getElementById("name-input");
const hello = document.getElementById("name-output");

name.addEventListener("input", (event) => {
  hello.textContent =
    event.target.value === "" ? "незнайомець" : event.target.value;
});
