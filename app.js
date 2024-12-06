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
		title: "GIGABYTE Radeon RX 7600 XT Gaming OC 16G Graphics Card, 3X WINDFORCE Fans 16GB 128-bit GDDR6, GV-R76XTGAMING OC-16GD Video Card",
		price: 329.99,
		desc: "Dive into next-level gaming with the GIGABYTE Radeon RX 7600 XT Gaming OC 16G. Engineered for performance and durability, this powerhouse graphics card features cutting-edge 16GB GDDR6 memory, a streamlined 128-bit interface, and the triple-fan WINDFORCE cooling system to keep things cool under pressure. Whether you're conquering virtual worlds, editing 4K content, or chasing esports glory, this card delivers immersive visuals, ultra-smooth gameplay, and unparalleled reliability. Elevate your experience — play bigger, faster, cooler.",
		colors: 
	[
			{
				code: "silver",
				img: "./img/pcfan.png",
			},
		],
	},
	{
		id: 2,
		title: "Wireless Bluetooth on-Ear Headphones - Blue",
		price: 14.99,
		desc: "Experience sound without limits with these sleek and stylish Bluetooth on-ear headphones. With vibrant audio, a comfortable fit, and the freedom of wireless connectivity, they’re your perfect companion for music, calls, and everything in between. The bold blue finish adds a pop of personality, while the lightweight design ensures you can listen all day in style. Stay connected, stay inspired, and vibe to your rhythm!",
		colors: 
	[
			{
				code: "blue",
				img: "./img/headphones.webp",
			},
		],
	},
	{
		id: 3,
		title: "Canon EOS R100Canon - EOS R100 4K Video Mirrorless Camera with RF-S18-45mm f/4.5-6.3 IS STM Lens - Black",
		price: 499.99,
		desc: "Capture your world in stunning 4K with the Canon EOS R100, a lightweight mirrorless marvel designed for creators on the go. Paired with the versatile RF-S18-45mm f/4.5-6.3 IS STM Lens, this camera delivers sharp photos, smooth video, and seamless creativity. Its compact design, intuitive controls, and advanced autofocus make it the perfect companion for vlogging, content creation, or preserving life’s best moments. Step up to professional-grade quality — effortlessly",
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
		desc: "Transform any space with the vibrant magic of RGBIC LED Strip Lights. With 65.6 feet of dynamic, color-changing brilliance, these smart lights offer segmented control for endless customization. Easily set the mood via Bluetooth app control, explore multiple preset scenes, and watch the lights dance to your favorite music with enhanced sync technology. Perfect for parties, relaxing nights, or creative setups — your space, your vibe, your way!",
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
		title: "IPhone 15 Pro Max - 256GB",
		price: 1099.99,
		desc: "Experience the pinnacle of innovation with the iPhone 15 Pro Max. Featuring a sleek titanium design, blazing-fast performance, and an impressive 256GB of storage, it’s built to handle your world effortlessly. Capture every detail with the advanced Pro camera system, enjoy immersive visuals on the Super Retina XDR display, and stay ahead with all-day battery life. This isn’t just a phone, iPhone is the ultimate tool for creativity, productivity, and connection.",
		colors: 
	[
			{
				code: "White",
				img: "./img/1.png",
			},
		],
	},
	// Products commented out to keep slider aligned
	// {
	// 	id: 2,
	// 	title: "16-inch MacBook Pro - White",
	// 	price: 3999.00,
	// 	colors: 
	// [
	// 		{
	// 			code: "White",
	// 			img: "./img/2.png",
	// 		},
	// 	],
	// },
	// {
	// 	id: 5,
	// 	title: "Apple AirPods (3rd Generation)",
	// 	price: 169.00,
	// 	colors: 
	// [
	// 		{
	// 			code: "white",
	// 			img: "./img/airpods.png",
	// 		},
	// 	],
	// },
	// {
	// 	id: 6,
	// 	title: "Astro A10 Gen 2 Gaming Headset",
	// 	price: 59.99,
	// 	colors: 
	// [
	// 		{
	// 			code: "White",
	// 			img: "./img/controller-headset.png",
	// 		},
	// 	],
	// },
	
	// {
	// 	id: 8,
	// 	title: "Apple iPad 10.9-inch Wi-Fi (2022, 10th generation)",
	// 	price: 499.99,
	// 	colors: 
	// [
	// 		{
	// 			code: "white",
	// 			img: "./img/ipad.webp",
	// 		},
	// 	],
	// },
];


let chosenProduct = products[0]

// selecting elements to be shown at bottom of screen
const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductDesc = document.querySelector(".productDesc");
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
		currentProductDesc.textContent = chosenProduct.desc;
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

//js handling for the footer clickables 
document.querySelector('.contactUs').addEventListener('click', () => {
	new bootstrap.Modal(document.getElementById('contactModal')).show();
});

document.querySelector('.giftCards').addEventListener('click', () => {
	window.open('https://www.example.com/gift-cards', '_blank');
});
