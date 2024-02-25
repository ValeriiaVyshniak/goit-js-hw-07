const form = document.querySelector("form.login-form")
form.addEventListener("submit", event => {
    event.preventDefault();
    const allform = event.target;
    const email = allform.elements.email.value.trim();
    const password = allform.elements.password.value.trim();
    
    if (email === "" || password === "") {
        alert `All form fields must be filled in`
    }
    const formData = {
        email: email,
        password: password
    }
    console.log(formData);
form.reset();
});
const input = document.querySelector("input");
input.addEventListener("focus", () => {
    input.value = "Type area";
})
input.addEventListener("blur", () => {
    input.value = "";
})