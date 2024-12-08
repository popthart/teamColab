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