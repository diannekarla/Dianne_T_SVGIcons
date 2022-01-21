(() => {
  //make associations with elements in the HTML markup using CSS selectors
 let theHeading = document.querySelector(".main-heading"),
    svgIcons = document.querySelectorAll(".icon");

    // debugger; //breakpoint / pause point in the code

//script your behaviour with function
function logElement() {
  // the 'this' keyword refers to the thing that invokes the function
  //sp the 'thing' that you click on, mouse over, interact with on the page
  console.log('clicked on an element:', this.id);
}

 //add event handling here (user "triggers")
 //assign the event you want to listen for, and the function should be run
 theHeading.addEventListener("click", logElement);

// one to many relationship (selecting a group of elements)
 svgIcons.forEach(icon => icon.addEventListener("click", logElement));

})();
