let cardBtn = document.querySelectorAll(".card button");
// let quantity = document.querySelector(".quantity");
let productList = document.querySelector(".product-list");
let shopProductName = document.querySelector(".shop-product-name");
// shoping cart dom secletor
let subTotal = document.querySelector(".subTotal");
let tax = document.querySelector(".tax");
let minusBtn = document.querySelectorAll(".btn-danger");
let table = document.querySelector("table");

let emtyArr = [];
let count = 1;
cardBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    alert("Your product is added to the cart");
    // cart price
    let price =
      e.target.previousElementSibling.querySelector(".price").textContent;
    let productName = e.target.parentNode.parentNode.children[0].textContent;
    table.innerHTML += `
   <tbody>
                    <tr>

                        <td class="shop-product-name">${productName}</td>
                        <td class="itemPrice d-none ">${price}</td>
                        <td>
                            <button class="btn btn-danger">-</button>
                            <input id="itemQnt" type="text" value="1" disabled>
                            <button class="btn btn-primary">+</button>
                            <button class="btn btn-secondary">X</button>
                        </td>
                        <td class="toalPrice">
                            ${price}
                        </td>
                    </tr>
                    </tbody>
   `;

    // let totalPrice = document.querySelector(".toalPrice");
    // let itemPrice = document.querySelector(".itemPrice");
    let plusBtn = document.querySelectorAll(".btn-primary");
    // let numb = 0;
    // for (let i = 0; i < totalPrice.length; i++) {
    //   numb += parseInt(totalPrice[i].innerText);
    // }
    // console.log(numb);
    // function grandTotalPrice() {
    //   subTotal.innerText = numb;
    //   tax.innerText = subTotal.innerText / 25;
    //   totalPrices.innerText = subTotal.innerText - tax.innerText;
    // }
    // grandTotalPrice();
    // AddEventListener all
    let emty = [];
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
        // numb += parseInt(totalPrice) - parseInt(itemPrice.textContent);

        // grandTotalPrice();
        emty.push(totalPrice);
        console.log(emty);
        let numb = 0;
        for (let i = 0; i < itemPrice.length; i++) {
          numb = numb + parseInt(itemPrice.textContent[i]);
        }
        console.log(numb);
      });
    });

    // convert price string to nubmer
    // let priceNumber = Number(price);
    // if (count < 10) {
    //   quantity.textContent = "0" + count++;
    // } else {
    //   quantity.textContent = count++;
    // }
    // console.log(price);

    // document.querySelector(".shop-product-name").innerText = productName;
    // emtyArr.push(priceNumber);
    // let finalPrice = emtyArr.reduce((index, val) => {
    //   return index + val;
    // });
    //   let totalPrice = document.querySelector("#totalPrice");
    //   totalPrice.textContent = finalPrice;
    //   if (count < 10) {
    //     quantity.textContent = "0" + count++;
    //   } else {
    //     quantity.textContent = count++;
    //   }
    //   productList.innerHTML += `
    //     <div class="product d-flex align-items-center justify-content-evenly m-3">
    //                                   <div class="product-img"><img src="./${cardImg}" alt="product-img" width="100" /></div>
    //                                   <div class="product-qunty">01</div>
    //                                   <div class="product-price">$<span>${priceNumber}</span></div>
    //                               </div>
    //                               <div class="product d-flex align-items-center justify-content-evenly m-3">
    //                               </div>
    //     `;
  });
});

// cart btn click
let cartBtn = document.querySelector("#cartBtn");
cartBtn.addEventListener("click", () => {
  document
    .querySelectorAll("section")
    .forEach((section) => (section.style.display = "none"));
  document.querySelector("#shoping-cart").style.display = "block";
});
// let rasell = document.querySelector(".rasel");
const showPage = () => {
  document
    .querySelectorAll("section")
    .forEach((section) => (section.style.display = "block"));
  document.querySelector("#shoping-cart").style.display = "none";
};

// shoping cart functionalty start

// let numb = 0;
// for (let i = 0; i < toalPrice.length; i++) {
//   numb += parseInt(toalPrice[i].innerText);
// }
// function grandTotalPrice() {
//   subTotal.innerText = numb;
//   tax.innerText = subTotal.innerText / 25;
//   totalPrices.innerText = subTotal.innerText - tax.innerText;
// }
// grandTotalPrice();
// // AddEventListener all
// plusBtn.forEach((btn) => {
//   btn.addEventListener("click", (e) => {
//     let quantity = e.target.parentNode.children[1];
//     let quantityValue = quantity.value;

//     quantity.value = parseInt(quantityValue) + 1;
//     // Item Prices
//     let itemPrice = e.target.parentNode.parentElement.children[1];
//     // console.log(itemPrice);
//     let multipyItemPrice = itemPrice.textContent * quantity.value;

//     // Item Total Prices
//     let totalPrice = (e.target.parentNode.nextElementSibling.innerText =
//       multipyItemPrice);
//     numb += parseInt(totalPrice) - parseInt(itemPrice.textContent);

//     grandTotalPrice();
//   });
// });

// minusBtn.forEach((btn) => {
//   // btn.removeAttribute("disabled");
//   btn.addEventListener("click", (e) => {
//     // item quanitty
//     let quantity = e.target.parentNode.children[1];
//     if (quantity.value > 0) {
//       let quantityValue = quantity.value;
//       quantity.value = parseInt(quantityValue) - 1;
//       let itemPrice = e.target.parentNode.parentElement.children[1];
//       let multipyItemPrice = itemPrice.textContent * quantity.value;

//       // Item Total Prices
//       let totalPrice = (e.target.parentNode.nextElementSibling.innerText =
//         multipyItemPrice);
//       numb -= parseInt(totalPrice);
//       grandTotalPrice();
//     }
//   });
// });
// let closeBtn = document.querySelectorAll(".btn-secondary");
// closeBtn.forEach((btn) => {
//   btn.addEventListener("click", (e) => {
//     let price = e.target.parentNode.parentElement.children[3];
//     let parentElement = e.target.parentNode.parentElement;
//     price.remove();
//     parentElement.remove();

//     let subTotalNumber = parseInt(subTotal.innerText);
//     subTotal.textContent = subTotalNumber - parseInt(price.textContent);
//     tax.innerText = subTotal.innerText / 25;
//     totalPrices.innerText = subTotal.innerText - tax.innerText;
//   });
// });
const y = (x) => x * x;
const z = y(5);
console.log(z);
