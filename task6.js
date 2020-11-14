const fieldRef = document.getElementById("validation-input");
console.dir(fieldRef);

const validValue = fieldRef.dataset.length;
fieldRef.addEventListener("blur", (event) => {
  event.target.value.length == validValue
    ? fieldRef.setAttribute("class", "valid")
    : fieldRef.setAttribute("class", "invalid");
});
