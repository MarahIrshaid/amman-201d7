/* global Product, Cart */

'use strict';


var allProducts = [];

var totalClicks = 0;

var leftImageIndex;
var middleImageIndex;
var rightImageIndex;

////constructor
function Product(name, path) {
  this.name = name;
  this.path = path;

  this.numberOfClicks = 0;
  this.numberOfTimesShown = 0;
  allProducts.push(this);
}

new Product('Bag', 'img/bag.jpg');
new Product('Banana', 'img/banana.jpg');
new Product('bathroom', 'img/bathroom.jpg');
new Product('boots', 'img/boots.jpg');
new Product('breakfast', 'img/breakfast.jpg');
new Product('bubblegum', 'img/bubblegum.jpg');
new Product('chair', 'img/chair.jpg');
new Product('cthulhu', 'img/cthulhu.jpg');
new Product('dog-duck', 'img/dog-duck.jpg');
new Product('dragon meat', 'img/dragon.jpg');
new Product('pen', 'img/pen.jpg');
new Product('scissors', 'img/scissors.jpg');
new Product('shark', 'img/shark.jpg');
new Product('sweep', 'img/sweep.png');
new Product('tauntaun', 'img/tauntaun.jpg');
new Product('unicorn meat', 'img/unicorn.jpg');
new Product(' tale usb ', 'img/usb.gif');
new Product('water can', 'img/water-can.jpg');
new Product('wine glass', 'img/wine-glass.jpg');

////////
// Set up an empty cart for use on this page.
var cart = new Cart([]);




// On screen load, we call this method to put all of the busmall options
// (the things in the Product.allProducts array) into the drop down list.
function populateForm() {

  //TODO: Add an <option> tag inside the form's select for each product
  var selectElement = document.getElementById('items');
  console.log(selectElement.value)
  for (var i = 0; i < allProducts.length; i++) {
    var option = document.createElement('option');
    option.setAttribute('value', allProducts[i].name);
    option.textContent = allProducts[i].name;
    selectElement.appendChild(option);

  }

}
var selection = [];
var button = document.querySelector("[type='submit']");
var aTag = document.createElement("a");
aTag.setAttribute('href', 'cart.html');
aTag.textContent = 'Go to Cart page';
// console.log(button);
// When someone submits the form, we need to add the selected item to the cart
// object, save the whole thing back to local storage and update the screen
// so that it shows the # of items in the cart and a quick preview of the cart itself.
var confirmationMessage = document.createElement('p');
var nameChoice;

function handleSubmit(event) {
  event.preventDefault();
  var inputNumber = document.querySelector("[type='number']");
  // console.log(Number(event.target.quantity.value));

  //console.log(selection);

  var div = document.getElementById("catalog");
  confirmationMessage.textContent = 'product has been added to cart  ';
  confirmationMessage.setAttribute('class', 'conf-message');
  div.appendChild(confirmationMessage);

  div.appendChild(aTag);


  // Do all the things ...

  addSelectedItemToCart();
  console.log(selection);
  inputNumber.value = "";


  // cart.saveToLocalStorage();
  updateCounter();
  updateCartPreview();
}

var catalogForm = document.getElementById('catalog');
catalogForm.addEventListener('submit', handleSubmit);

// TODO: Add the selected item and quantity to the cart
function addSelectedItemToCart() {
  console.log(Number(event.target.quantity.value), event.target.quantity, event.target.items);
  selection.push(event.target.items.value);
  selection.push(Number(event.target.quantity.value));


  // TODO: suss out the item picked from the select list
  // TODO: get the quantity
  // TODO: using those, add one item to the Cart
}

// TODO: Update the cart count in the header nav with the number of items in the Cart
function updateCounter() {
  var sum = 0;
  for (let i = 1; i < selection.length; i += 2) {
    sum = selection[i] + sum;
  }
  console.log(sum);
}


var cart = document.getElementById("cartContents");
// TODO: As you add items into the cart, show them (item & quantity) in the cart preview div
function updateCartPreview() {
  // TODO: Get the item and quantity from the form
  // TODO: Add a new element to the cartContents div with that information
  var pro = document.createElement("a");
  var l = selection.length - 1;
  var deleteButton = document.createElement("button");
  deleteButton.textContent="Delete this Item";

  // deleteButton.id="delete"+selection.leng;

  console.log(deleteButton.id);
  pro.textContent = selection[l - 1] + " " + selection[l] + ", ";
  cart.appendChild(deleteButton);

  cart.appendChild(pro);


}

// Set up the "submit" event listener on the form.
// This is the trigger for the app. When a user "submits" the form, it will
// Call that handleSubmit method above and kick off the whole process

// Before anything else of value can happen, we need to fill in the select
// drop down list in the form.
populateForm();


