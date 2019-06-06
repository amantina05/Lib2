$("button").click(function(){
  $("p").slideToggle();
});


// // Get the button, and when the user clicks on it, execute myFunction
document.getElementById("myBtn").onclick = function() {myFunction()};
// function myFunction() {
//   document.getElementById("myDropdown").classList.toggle("none");
// }
/* myFunction toggles between adding and removing the show class, which is used to hide and show the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}


document.getElementById("myDetails").addEventListener("toggle", myFunction);
