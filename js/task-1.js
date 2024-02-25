const items = document.querySelectorAll(".item");
console.log(`Number of categories: ${items.length}`);
items.forEach((item) => {
    let nameCategory = item.querySelector("h2").textContent;
    let nameItems = item.querySelectorAll("ul li");

console.log(`Category: ${nameCategory}`);
console.log(`Elements: ${nameItems.length}`);
});

