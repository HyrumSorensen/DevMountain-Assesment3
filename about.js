console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert("Your form has succesfully been submitted!");
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);
document.querySelector('#rubber-duck').addEventListener('mouseover', function(e){
	alert("You are so cool for mousing over this duck");
});