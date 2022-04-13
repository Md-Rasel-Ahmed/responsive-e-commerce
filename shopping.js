// DOM SELECTOR ALL
/*
let plusBtn = document.querySelectorAll(".btn-primary");
let subTotal = document.querySelector(".subTotal");
let tax = document.querySelector(".tax");
let totalPrices = document.querySelector(".total-prices");
let minusBtn = document.querySelectorAll(".btn-danger");
let toalPrice = document.querySelectorAll(".toalPrice");

let numb = 0;
for (let i = 0; i < toalPrice.length; i++) {
  numb += parseInt(toalPrice[i].innerText);
}
function grandTotalPrice() {
  subTotal.innerText = numb;
  tax.innerText = subTotal.innerText / 25;
  totalPrices.innerText = subTotal.innerText - tax.innerText;
}
grandTotalPrice();
// AddEventListener all
plusBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    let quantity = e.target.parentNode.children[1];
    let quantityValue = quantity.value;

    quantity.value = parseInt(quantityValue) + 1;
    // Item Prices
    let itemPrice = e.target.parentNode.parentElement.children[1];
    // console.log(itemPrice);
    let multipyItemPrice = itemPrice.textContent * quantity.value;

    // Item Total Prices
    let totalPrice = (e.target.parentNode.nextElementSibling.innerText =
      multipyItemPrice);
    numb += parseInt(totalPrice) - parseInt(itemPrice.textContent);

    grandTotalPrice();
  });
});

minusBtn.forEach((btn) => {
  // btn.removeAttribute("disabled");
  btn.addEventListener("click", (e) => {
    // item quanitty
    let quantity = e.target.parentNode.children[1];
    if (quantity.value > 0) {
      let quantityValue = quantity.value;
      quantity.value = parseInt(quantityValue) - 1;
      let itemPrice = e.target.parentNode.parentElement.children[1];
      let multipyItemPrice = itemPrice.textContent * quantity.value;

      // Item Total Prices
      let totalPrice = (e.target.parentNode.nextElementSibling.innerText =
        multipyItemPrice);
      numb -= parseInt(totalPrice);
      grandTotalPrice();
    }
  });
});
let closeBtn = document.querySelectorAll(".btn-secondary");
closeBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    let price = e.target.parentNode.parentElement.children[3];
    let parentElement = e.target.parentNode.parentElement;
    price.remove();
    parentElement.remove();

    let subTotalNumber = parseInt(subTotal.innerText);
    subTotal.textContent = subTotalNumber - parseInt(price.textContent);
    tax.innerText = subTotal.innerText / 25;
    totalPrices.innerText = subTotal.innerText - tax.innerText;
  });
});
*/
console.log("i am shoping");
let nahida = document.querySelector(".nahida");
console.log(nahida);
let shopProductName = document.querySelector(".productName");
console.log(shopProductName);
