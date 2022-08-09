const form = document.querySelector('form');			//establishing constants
const thanks = document.querySelector('.thanks');
const nameInput = document.querySelector('input[name="name"]');

let isFormValid = false;

const validateInputs = () => {
	nameInput.classList.remove("invalid");
	nameInput.nextElementSibling.classList.add("hidden");
	isFormValid = true;
	
	
	if (!nameInput.value) {				//adding fuctions
		nameInput.classList.add("invalid");
		nameInput.nextElementSibling.classList.remove("hidden");
		isFormValid = false;
		
	}
};

form.addEventListener("submit", (e) => {		//function to stop page reloading
	e.preventDefault();
	validateInputs();
	if (isFormValid) {
		form.remove();
		thanks.classList.remove("hidden");		//when submit button pressed it transfers to the thank u message
	}
});

nameInput.addEventListener("input", () => {
	validateInputs();
});