// selecting elements to be shown at the top of the screen
const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

/* Product array will go here when created 
example:
{
	id: 1,
	title: "Air Force",
	price: 119,
	colors: [
		{
			code: "black",
			img: "./img/air.png",
		},
		{
			code: "darkblue",
			img: ".img/air2.png",
		},
	],
}
and so on
alternatively, link to a json--if you're okay with the added complexity
*/

let chosenProduct = products[0]

// selecting elements to be shown at bottom of screen
const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => { // loop through menu items
	item.addEventListener("click", ()=>{
		// change the current slide
		// advance slider by x viewport width (top of screen)
		wrapper.style.transform = `translateX(${-100 * index}vw)`;

		// advance the chosen product (bottom of screen)
		chosenProduct = products[index]

		// change the text for currentProduct (bottom of screen)
		currentProductTitle.textContent = chosenProduct.title;
		currentProductPrice.textContent = "$" + chosenProduct.price;
		// may comment or remove color swapper if we don't use it
		currentProductImg.src = chosenProduct.colors[0].img;

		// assign new color - sets color options for each product at bottom of screen
		// usefulness of this may also vary
		currentProductColors.forEach((color, index) => {
			color.style.backgroundColor = chosenProduct.colors[index].code;
		});
	});
});

// changes product image (bottom of page) to match chosen color
currentProductColors.forEach((color, index) => {
	color.addEventListener("click", () => {
		currentProductImg.src = chosenProduct.colors[index].img
	});
});

// selects the chosen size (bottom of screen)
// intended for sneaker size, but we could adapt this for storage (GB, etc)
currentProductSizes.forEach((size, index) => {
	size.addEventListener("click", () => {
		// loops through each size and resets button's background/text color
		currentProductSizes.forEach(size => {
			size.style.backgroundColor = "white";
			size.style.color = "black";
		});
		// changes current button's background/text color after going through loop
		size.style.backgroundColor = "black";
		size.style.color = "white";
	});
});

// selecting elements to use in modal box (for payment)
const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector("close");

// open the payment modal when clicking "Buy Now"
productButton.addEventListener("click", () => {
	payment.style.display = "flex";
});

// close the payment modal when clicking "x"
close.addEventListener("click", () => {
	payment.style.display = "none";
});