// Welcome Message
console.log("Welcome to Luna Luxe Boutique");

// Product Buttons
const productButtons = document.querySelectorAll(".product-card button");

productButtons.forEach(button => {
    button.addEventListener("click", () => {
        showToast("🛍️ Product added to cart successfully!");
    });
});

// Newsletter
const newsletterButton = document.querySelector(".newsletter button");

if (newsletterButton) {
    newsletterButton.addEventListener("click", () => {
        showToast("💖 Thank you for subscribing!");
    });
}

// Contact Form
const contactForm = document.querySelector(".contact-form");

if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();
        showToast("✅ Message Sent Successfully!");
        contactForm.reset();
    });
}

// Toast Function
function showToast(message) {

    const toast = document.createElement("div");

    toast.className = "toast";

    toast.innerText = message;

    document.body.appendChild(toast);

    setTimeout(() => {
        toast.classList.add("show");
    },100);

    setTimeout(() => {
        toast.remove();
    },3000);

}