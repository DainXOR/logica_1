document.addEventListener('DOMContentLoaded', function() {

  const blob = document.getElementById("blob");
  console.log("Hmmm");

  document.addEventListener('mousemove', function(event) {
      // Update the position of the element to the coordinates of the mouse pointer
      blob.style.left = event.pageX;
      blob.style.top = event.pageY;
    });
});