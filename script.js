var plus = document.getElementsByClassName("plus");

var minus = document.getElementsByClassName("minus");
/* var  num=document.getElementsByClassName(".num"); */
var a = 0;
for (i = 0; i < plus.length; i++) {
  plus[i].addEventListener("click", () => {
    a++;
    document.getElementById("num").innerText = a;
    console.log(a);
  });
}
for (i = 0; i < plus.length; i++) {
  minus[i].addEventListener("click", () => {
    a--;
    document.getElementById("num").innerText = a;
  });
}

/*  minus.addEventListener("click",()=>{
if(a<1){
  a--;
  // a=(a<10) ? "0"+a:a;
  // num.innerText=a;
}
}) */
//var heart=document.getElementsByClassName('heart')

var plus = document.getElementsByClassName("plus1");

var minus = document.getElementsByClassName("minus1");
/* var  num=document.getElementsByClassName(".num"); */
var a = 0;
for (i = 0; i < plus.length; i++) {
  plus[i].addEventListener("click", () => {
    a++;
    document.getElementById("num1").innerText = a;
    console.log(a);
  });
}
for (i = 0; i < plus.length; i++) {
  minus[i].addEventListener("click", () => {
    a--;
    document.getElementById("num1").innerText = a;
  });
}

//var btnheart=document.getElementsByClassName('btnheart')
//
//  var btnheart=addEventListener('click', ()=>{
// i.classList.toggle('text')
// if(heart.innerHTML==="heart"){
//   heart.innerHTML="unheart"
// }
// else {heart.innerHTML="heart"}
// })
//var btnheart = document.getElementsByClassName('btnheart');

//btnheart.addEventListener('click', () => {
//btnheart.style.backgroundColor = 'red';
//btnheart.innerHTML = (btnheart.innerHTML === 'heart') ? 'unheart' : 'heart';
//});
let rayen= document.getElementsByClassName("grid-item");
let trashIcons = document.getElementsByClassName("bx bxs-trash");

for (let a = 0; a < rayen.length; a++) {
  trashIcons[a].addEventListener("click", (event) => {
    var h =rayen[a]
    // const item = event.target.parentNode;
    // var item= document.querySelector('.grid-item')
    h.remove();
    rayen= document.getElementsByClassName("grid-item");
    trashIcons = document.getElementsByClassName("bx bxs-trash");
  });
}

const buttons = document.getElementsByClassName("btnheart");
const hearts = document.getElementsByClassName("bx-heart");
let isRed = false;

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    if (isRed) {
      hearts[i].style.color = "";
      isRed = false;
    } else {
      hearts[i].style.color = "red";
      isRed = true;
    }
  });
}

const plusButtons = document.querySelectorAll(".plus");
plusButtons.forEach(plusButton => {
  plusButton.addEventListener("click", function() {
    const parent = this.parentNode;
    const price = parent.querySelector(".price").innerText;
    const num = parent.querySelector('.num');
    num.innerText = isNaN(parseInt(num.innerText)) ? 0 : parseInt(num.innerText) + 1;;
    updateTotalCost(price);
  });
});

const minusButtons = document.querySelectorAll(".minus");
minusButtons.forEach(minusButton => {
  minusButton.addEventListener("click", function() {
    const parent = this.parentNode;
    const price = parent.querySelector(".price").innerText;
    const num = parent.querySelector('.num');
    if (parseInt(num.innerText) > 0) {
      num.innerText = isNaN(parseInt(num.innerText)) ? 0 : parseInt(num.innerText) - 1;;
      updateTotalCost(-price);
    }
  });
});

let totalCost = 0;

function updateTotalCost(price) {
  totalCost += parseFloat(price);
  document.querySelector("#total-cost").innerText = "Total Cost: $" + totalCost;
  function updateTotalCost(price) {
    if (!isNaN(price)) {
      totalCost += parseFloat(price);
      document.querySelector("#total-cost").innerText = "Total Cost: $" + totalCost;
    }
  }
}









// function updateCartTotal() {
//   // Get all the cart rows
//   var cartRows = document.getElementsByClassName('cart-row');
//   var total = 0;
  
//   // Loop through each cart row and calculate the total price
//   for (var i = 0; i < cartRows.length; i++) {
//     var cartRow = cartRows[i];
//     var priceElement = cartRow.getElementsByClassName('cart-price')[0];
//     var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0];
//     var price = parseFloat(priceElement.innerText.replace('$', ''));
//     var quantity = quantityElement.value;
//     var rowTotal = price * quantity;
//     total += rowTotal;
    
//     // Update the row total price
//     var rowTotalElement = cartRow.getElementsByClassName('cart-row-total')[0];
//     rowTotalElement.innerText = '$' + rowTotal.toFixed(2);
//   }
  
//   // Update the cart total price
//   var cartTotalElement = document.getElementsByClassName('cart-total-price')[0];
//   cartTotalElement.innerText = '$' + total.toFixed(2);
// }


// function calculateTotal() {
//   let cartItems = document.querySelectorAll('.grid-item');
//   let totalCost = 0;
//   let cartItemsHTML = '';

//   for (let i = 0; i < cartItems.length; i++) {
//     let quantity = parseInt(cartItems[i].querySelector('.num').innerText);
//     let price = parseFloat(cartItems[i].querySelector('.price').innerText.replace('$', ''));
//     let itemCost = quantity * price;
//     totalCost += itemCost;

//     let itemName = cartItems[i].querySelector('p').innerText;
//     let itemHTML = `
//       <div>
//         <p>${itemName}</p>
//         <p>Quantity: ${quantity}</p>
//         <p>Item Cost: $${itemCost.toFixed(2)}</p>
//       </div>
//     `;
//     cartItemsHTML += itemHTML;
//   }

//   document.getElementById('total-cost').innerHTML = `<h2>Total Cost: $${totalCost.toFixed(2)}</h2>`;
//   document.getElementById('cart-items').innerHTML = cartItemsHTML;
// }

// let plusButtons = document.querySelectorAll('.plus');
// let minusButtons = document.querySelectorAll('.minus');

// for (let i = 0; i < plusButtons.length; i++) {
//   plusButtons[i].addEventListener('click', function() {
//     let numElement = this.parentElement.querySelector('.num');
//     let num = parseInt(numElement.innerText);
//     numElement.innerText = num + 1;
//     calculateTotal();
//   });
// }

// for (let i = 0; i < minusButtons.length; i++) {
//   minusButtons[i].addEventListener('click', function() {
//     let numElement = this.parentElement.querySelector('.num');
//     let num = parseInt(numElement.innerText);
//     if (num > 1) {
//       numElement.innerText = num - 1;
//       calculateTotal();
//     }
//   });
// }
