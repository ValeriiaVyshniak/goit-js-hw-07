const input = document.querySelector("input#name-input");
let spanText = document.querySelector("span#name-output");
input.addEventListener("input", () => {
   const inputText = input.value.trim();
    if (inputText === "") {
        spanText.innerHTML = `Anonymous`;
    } else {
        spanText.innerHTML = inputText;
    }
});


