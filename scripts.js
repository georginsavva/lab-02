function greetMe(){
    console.log("Hello Princcess!");
}

myTrigger.addEventListener('click',greetMe);


let clickCount = 0;

function incrementClickCount() {
  clickCount++;
	target.textContent = clickCount;
}
btnThis.addEventListener('click', incrementClickCount);

myTrigger.addEventListener('click', incrementClickCount);