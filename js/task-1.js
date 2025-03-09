const categoriesList = document.querySelector("#categories");

console.log(`Number of categories: ${categoriesList.childElementCount}`);

const categoryTitles = document.querySelectorAll(".item > h2");
const categoryItemsLists = document.querySelectorAll(".item > ul");

for (let i = 0; i < categoryTitles.length; i++) {
    console.log(`Category: ${categoryTitles[i].textContent}`);
    console.log(`Elements: ${categoryItemsLists[i].childElementCount}`);
}