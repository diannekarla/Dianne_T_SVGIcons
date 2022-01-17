(() => {
  //make associations with elements in the HTML markup using CSS selectors
 let drum = document.querySelector(".drum");
//script your behaviour with function
function logElement() {
  console.log('Drum');
}
 //add event handling here (user "triggers")
 //assign the event you want to listen for, and the function should be run
 drum.addEventListener("click", logElement);

})();

(() => {
 let keyboardPiano = document.querySelector(".keyboardPiano");
 function logElement() {
   console.log('Keyboard')
 }
   keyboardPiano.addEventListener("click", logElement);
})();

(() => {
 let mic = document.querySelector(".mic");
 function logElement() {
   console.log('Mic')
 }
   mic.addEventListener("click", logElement);
})();

(() => {
 let musicNote = document.querySelector(".musicNote");
 function logElement() {
   console.log('Triplet')
 }
   musicNote.addEventListener("click", logElement);
})();

(() => {
 let music = document.querySelector(".music");
 function logElement() {
   console.log('Double Note')
 }
   music.addEventListener("click", logElement);
})();

(() => {
 let song = document.querySelector(".song");
 function logElement() {
   console.log('Single Note')
 }
   song.addEventListener("click", logElement);
})();

(() => {
 let stereoSpeaker = document.querySelector(".stereoSpeaker");
 function logElement() {
   console.log('Stereo Speaker')
 }
   stereoSpeaker.addEventListener("click", logElement);
})();

(() => {
 let trebleClef = document.querySelector(".trebleClef");
 function logElement() {
   console.log('Treble Clef')
 }
   trebleClef.addEventListener("click", logElement);
})();


(() => {
 let trombone = document.querySelector(".trombone");
 function logElement() {
   console.log('Trombone')
 }
   trombone.addEventListener("click", logElement);
})();

(() => {
 let vinyl = document.querySelector(".vinyl");
 function logElement() {
   console.log('Vinyl')
 }
   vinyl.addEventListener("click", logElement);
})();

(() => {
 let guitar = document.querySelector(".guitar");
 function logElement() {
   console.log('Guitar')
 }
   guitar.addEventListener("click", logElement);
})();
