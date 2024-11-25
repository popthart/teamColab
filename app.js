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

//Temporary holding until array is estabilished with names, prices, and image files.
const products = [
	{
		id: 1,
		title: "IPhone 15 Pro Max - 256GB",
		price: 1099.99,
		colors: 
	[
			{
				code: "White",
				img: "./img/1.png",
			},
		],
	},
	{
		id: 2,
		title: "16-inch MacBook Pro - White",
		price: 3999.00,
		colors: 
	[
			{
				code: "White",
				img: "./img/2.png",
			},
		],
	},
	{
		id: 3,
		title: "Canon EOS R100Canon - EOS R100 4K Video Mirrorless Camera with RF-S18-45mm f/4.5-6.3 IS STM Lens - Black",
		price: 499.99,
		colors: 
	[
			{
				code: "black",
				img: "./img/3.png",
			},
		],
	},
	{
		id: 4,
		title: "65.6ft RGBIC LED Strip Lights, Color Changing LED Strips, App Control via Bluetooth, Smart Segmented Control, Multiple Scenes, Enhanced Music Sync LED Lights",
		price: 64.99,
		colors: 
	[
			{
				code: "Multicolor",
				img: "./img/5.png",
			},
		],
	},
	{
		id: 5,
		title: "Apple AirPods (3rd Generation)",
		price: 169.00,
		colors: 
	[
			{
				code: "white",
				img: "./img/airpods.png",
			},
		],
	},
	{
		id: 6,
		title: "Astro A10 Gen 2 Gaming Headset",
		price: 59.99,
		colors: 
	[
			{
				code: "White",
				img: "./img/controller-headset.png",
			},
		],
	},
	{
		id: 7,
		title: "onn. Wireless Bluetooth on-Ear Headphones - Blue",
		price: 14.99,
		colors: 
	[
			{
				code: "blue",
				img: "./img/headphones.webp",
			},
		],
	},
	{
		id: 8,
		title: "Apple iPad 10.9-inch Wi-Fi (2022, 10th generation)",
		price: 499.99,
		colors: 
	[
			{
				code: "white",
				img: "./img/ipad.webp",
			},
		],
	},
	{
		id: 9,
		title: "GIGABYTE Radeon RX 7600 XT Gaming OC 16G Graphics Card, 3X WINDFORCE Fans 16GB 128-bit GDDR6, GV-R76XTGAMING OC-16GD Video Card",
		price: 329.99,
		colors: 
	[
			{
				code: "silver",
				img: "./img/pcfan.png",
			},
		],
	},
];


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
const close = document.querySelector(".close");

// open the payment modal when clicking "Buy Now"
productButton.addEventListener("click", () => {
	payment.style.display = "flex";
});

// close the payment modal when clicking "x"
close.addEventListener("click", () => {
	payment.style.display = "none";
});
