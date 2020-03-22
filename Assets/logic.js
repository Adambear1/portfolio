// Borrowed from https://www.w3schools.com/w3css/w3css_slideshow.asp

var slideIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}
  x[slideIndex-1].style.display = "block";
  setTimeout(carousel, 3500); // Change image every 3.5 seconds
}


// Drop Down Option

$('#myTab a').on('click', function (e) {
  e.preventDefault()
  $(this).tab('show')
})

$('#dropdown-item a[href="#profile"]').tab('show') // Select tab by name
$('#dropdown-item  li:first-child a').tab('show') // Select first tab
$('#dropdown-item  li:last-child a').tab('show') // Select last tab
$('#dropdown-item  li:nth-child(3) a').tab('show') // Select third tab