'use strict'
/* document.querySelector('.button-list').addEventListener('click', () => {
    document.querySelector('.product-item').classList.add('product-item_list');
});
document.querySelector('.button-grid').addEventListener('click', () => {
    document.querySelector('.product-item').classList.remove('product-item_list');
}); */

let listBtn = document.querySelector(".button-list");
let productList = document.querySelectorAll(".product-item");

listBtn.addEventListener("click", function(event) {
    event.preventDefault();
    productList.forEach((el) => {
    el.classList.add("product-item_list");
    });
});

let gridBtn = document.querySelector(".button-grid");
let productGrid = document.querySelectorAll(".product-item");

gridBtn.addEventListener("click", function(event) {
    event.preventDefault();
    productGrid.forEach((el) => {
    el.classList.remove("product-item_list");
    });
});